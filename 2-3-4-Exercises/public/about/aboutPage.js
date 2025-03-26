import { h } from "/js/src/index.js";
import { iconHome, iconList } from "/js/src/icons.js";

const tableContent = (model) => {
  let i = 0;

  return Object.keys(model.object).map((value) => {
    return h("tr", [h("td", ++i), h("td", model.object[value])]);
  });
};

const table = (model) => {
  return h("table", { class: "table-sm" }, [
    h("tr", [h("th", "#"), h("th", "Some data")]),
    ...tableContent(model),
  ]);
};

const content = (model) => {
  return h(".content", [
    h("h1", { class: "title, About Page" }, "hello about!"),
    h(
      "button",
      {
        class: "btn btn-primary",
        onclick: () => {
          console.log("Takes user to home page");
          model.router.go("?page=home");
        },
      },
      ["Home", iconHome()]
    ),
    h(
      "button",
      {
        class: "btn btn-danger",
        onclick: () => {
          console.log("Request data about application");
          model.getDetails();
        },
      },
      iconList()
    ),
    table(model),
  ]);
};

export default content;
