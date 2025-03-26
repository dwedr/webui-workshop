import Home from "../home/Home.js";

export default class About extends Home {
  constructor() {
    super();
    this.object = {};
    this.requestedTime = 10;
  }

  getDetails() {
    this.requestedTime += 1;
    this.object[this.requestedTime] = "Something" + this.requestedTime;
    this.notify();
  }
}
