import { Observable } from "/js/src/index.js";

export default class Home extends Observable {
  constructor() {
    super();
    this.userName = "Damian";
  }

  setUserName(newUser) {
    this.userName = newUser;
    this.notify();
  }

  getUserName() {
    return this.userName;
  }
}
