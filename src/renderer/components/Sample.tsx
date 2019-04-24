import React, { Component } from "react";

import "./Sample.css";
import Icon from "@static/heimenkousei.jpg";

export interface Props {
  [n: string]: never;
}

class Sample extends Component<Props> {
  onClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="hello">
        hello
        <button onClick={this.onClick}>
          Click me and check the console !!!
        </button>
        <img src={Icon} alt="icon" />
      </div>
    );
  }
}

export default Sample;
