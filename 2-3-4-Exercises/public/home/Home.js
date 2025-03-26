import Model from "../Model.js";

export default class Home extends Model {
  constructor() {
    super();
    this.userName = "username";
  }

  getUserName() {
    return this.userName;
  }

  setUserName() {
    this.userName = "Damian";
    this.notify();
  }
}
