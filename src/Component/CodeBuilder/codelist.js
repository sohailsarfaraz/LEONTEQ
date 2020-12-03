import React, { Component, Fragment } from "react";
import TradeStyle from "./codelist.module.css";
import axios from "axios";

class Codelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeList: [],
    };
  }
  addCode = () => {
    axios
      .get(
        "http://api.kanye.rest",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            mode: "no-cors",
          },
        }
      )
      .then((response) => {
        console.log(response.data.quote);
        let tempArr = this.state.codeList;
        this.setState({ codeList: [...tempArr, response.data.quote] });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.data });
      });
  };
  /**
   *
   * @param {Object} items
   */
  deleteAll = (items) => {
    this.setState({ codeList: [] });
  };
  deleteCode = (itemId) => {
    let tempCodeList = this.state.codeList;
    tempCodeList = tempCodeList.filter((id, index) => itemId != index);
    this.setState({ codeList: tempCodeList });
  };

  render() {
    const { codeList } = this.state;
    return (
      <div>
        <div className={TradeStyle.accountInfo}>
          <h1>LEONTEQ</h1>
          <h4>Home Task</h4>
        </div>
        <div style={{ margin: 20 }}>
          <button type="button" onClick={(e) => this.addCode(e)}>
            Add
          </button>
          <button
            type="button"
            style={{ marginLeft: 10 }}
            onClick={(e) => this.deleteAll(e)}
          >
            Delete All
          </button>
        </div>
        <div>
          <ul>
            {codeList.map((item, index) => (
              <li key={index} className={TradeStyle.exp_Item}>
                <div className={TradeStyle.itemCnt}>
                  <span>{item}</span>
                  <button onClick={(e) => this.deleteCode(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Codelist;
