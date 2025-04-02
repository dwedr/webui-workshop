import {
  Observable,
  QueryRouter,
  Loader,
  sessionService,
} from "/js/src/index.js";

/**
 * Root of model tree
 * Handle global events: keyboard, websocket and router location change
 */
export default class Model extends Observable {
  /**
   * Load all sub-models and bind event handlers
   */
  constructor() {
    super();

    this.session = sessionService.get();
    this.session.personid = parseInt(this.session.personid, 10);

    this.loader = new Loader(this);
    this.loader.bubbleTo(this);

    // Setup router
    this.router = new QueryRouter();
    this.router.observe(this.handleLocationChange.bind(this));
    this.router.bubbleTo(this);

    this.handleLocationChange(); // Init first page
    this.userName = "username";
    this.object = {};
    this.requestedTime = 10;
  }

  /**
   * Delegates sub-model actions depending on new location of the page
   */
  handleLocationChange() {
    switch (this.router.params.page) {
      case "about":
        break;
      case "home":
        break;
      default:
        this.router.go("?page=home");
        break;
    }
  }

  getDetails() {
    this.requestedTime += 1;
    this.object[this.requestedTime] = "Something" + this.requestedTime;
    this.notify();
  }

  getUserName() {
    return this.userName;
  }

  setUserName() {
    this.userName = "Damian";
    this.notify();
  }
}
