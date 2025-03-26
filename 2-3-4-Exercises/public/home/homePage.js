import { h } from "/js/src/index.js";
import { info, iconPerson } from "/js/src/icons.js";

const label = (model) => {
  return h("p", { class: "bg-success text-center" }, model.getUserName());
};

const content = (model) => {
  return h(".content", [
    h("h1", { class: "title" }, "hello home"),
    h(
      "button",
      {
        class: "btn btn-primary",
        onclick: () => {
          console.log("Loading about page");
          model.router.go("?page=about");
        },
      },
      ["About", info()]
    ),
    h(
      "button",
      {
        class: "btn btn-danger",
        onclick: () => {
          console.log("Get username");
          model.setUserName();
        },
      },
      [iconPerson()]
    ),
    label(model),
  ]);
};

export default content;
