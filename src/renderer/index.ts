import _ from "lodash";
import "./style.css";
import Icon from "@static/heimenkousei.jpg";
import Data from "@static/data.csv";

import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
