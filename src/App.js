import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Summary from "./Summary/Summary";

class App extends Component {
  state = {
    value: 50000,
    value2: 19,
    percent: 18,
    currency: "USD",
    paymentType: "month",
    summ: 750,
    summAnnual: 14250,
    activeAnnual: true,
    activeMonth: false,
    activeUsd: true,
    activeUah: false,
    invest: true,
    data: []
  };

  componentWillMount() {
    fetch("https://api.myjson.com/bins/10zs30")
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(data => {
          this.setState({ data: [...data] });
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  getPercent = () => {
    let percentNew;
    this.state.data.forEach(item => {
      if (
        item.currency === this.state.currency &&
        item.term.indexOf(this.state.value2) !== -1
      ) {
        if (this.state.paymentType === "month") {
          percentNew = item.month;
        } else if (this.state.paymentType === "annual") {
          percentNew = item.annual;
        }
      }
    });

    if (this.state.paymentType === "month") {
      this.setState({ percent: percentNew }, () => {
        let summNew = ((this.state.percent / 100) * this.state.value) / 12;
        let summAnnualNew = summNew * this.state.value2;
        this.setState(prevState => {
          return {
            summ: summNew,
            summAnnual: summAnnualNew
          };
        });
      });
    } else {
      this.setState({ percent: percentNew }, () => {
        let b = this.state.percent / 100;
        let a = Math.pow(1 + b / 12, this.state.value2);
        let summAnnualNew = this.state.value * a - this.state.value;
        let summNew = summAnnualNew / this.state.value2;

        this.setState(prevState => {
          return {
            summ: summNew,
            summAnnual: summAnnualNew
          };
        });
      });
    }
  };

  changeTime = value2 => {
    this.setState({ value2: value2 });
    this.getPercent();
  };

  changeAmount = value => {
    this.setState({ value: value });
    this.getPercent();
  };

  changePaymentType = type => {
    if (type === "annual") {
      this.setState(
        {
          paymentType: "annual",
          activeAnnual: !this.state.activeAnnual,
          activeMonth: !this.state.activeMonth
        },
        () => {
          this.getPercent();
        }
      );
    } else if (type === "month") {
      this.setState(
        {
          paymentType: "month",
          activeMonth: !this.state.activeMonth,
          activeAnnual: !this.state.activeAnnual
        },
        () => {
          this.getPercent();
        }
      );
      this.getPercent();
    }
  };

  changeCurrency = currency => {
    if (currency === "usd") {
      this.setState(
        {
          currency: "USD",
          activeUsd: !this.state.activeUsd,
          activeUah: !this.state.activeUah
        },
        () => {
          this.getPercent();
        }
      );
    } else if (currency === "uah") {
      this.setState(
        {
          currency: "UAH",
          activeUah: !this.state.activeUah,
          activeUsd: !this.state.activeUsd
        },
        () => {
          this.getPercent();
        }
      );
      this.getPercent();
    }
  };

  render() {
    return (
      <React.Fragment>
        <HashRouter>
          {/* <Switch> */}
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Homepage
                  {...props}
                  changeCurrency={this.changeCurrency}
                  activeUsd={this.state.activeUsd}
                  activeUah={this.state.activeUah}
                  value1={this.state.value}
                  changeAmount={this.changeAmount}
                  value2={this.state.value2}
                  changeTime={this.changeTime}
                  changePaymentType={this.changePaymentType}
                  percent={this.state.percent}
                  activeAnnual={this.state.activeAnnual}
                  activeMonth={this.state.activeMonth}
                  summAnnual={this.state.summAnnual}
                  summ={this.state.summ}
                  currency={this.state.currency}
                />
              )}
            />
            <Route
              path="/summary"
              render={props => (
                <Summary
                  {...props}
                  currency={this.state.currency}
                  value1={this.state.value}
                  value2={this.state.value2}
                  paymentType={this.state.paymentType}
                  percent={this.state.percent}
                  summAnnual={this.state.summAnnual}
                  summ={this.state.summ}
                />
              )}
            />
            {/* </Switch> */}
          </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
