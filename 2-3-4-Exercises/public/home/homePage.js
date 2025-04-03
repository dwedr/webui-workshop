import { h } from "/js/src/index.js";
import { iconPerson } from "/js/src/icons.js";
import Button from "../components/Button.js";

let userName = "user";

const content = (model) => {
  return h("", [
    Button("About", (e) => model.router.handleLinkEvent(e), "?page=about"),
    Button(
      ["Get username", iconPerson()],
      () => (userName = "HI: " + model.homeModel.userName)
    ),
    h("p", userName),
  ]);
};

export default content;
