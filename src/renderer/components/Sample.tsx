import React, { Component } from "react";

import styles from "./Sample.css";
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
      <div className={styles.hello}>
        <p>hello</p>
        <button onClick={this.onClick}>
          Click me and check the console !!!
        </button>
        <img src={Icon} alt="icon" />
      </div>
    );
  }
}

export default Sample;
