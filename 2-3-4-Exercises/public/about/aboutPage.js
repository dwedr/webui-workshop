import { h } from "/js/src/index.js";
import Button from "../components/Button.js";
import { iconBook } from "/js/src/icons.js";
import { getFetchStatus } from "./About.js";

const mappedRow = (rowData) => {
  const td = rowData.map((data) => h("td", data));
  return h("tr", td);
};

const renderTable = (jsonData) => {
  const tableData = [];
  const headers = ["Type", "Value"];
  tableData.push(headers);

  for (const [key, value] of Object.entries(jsonData)) {
    tableData.push([key, value]);
  }

  return h("table.table", [
    h("thead", [
      h(
        "tr",
        headers.map((header) => h("th", header))
      ),
    ]),
    h(
      "tbody",
      tableData.slice(1).map((rowData) => mappedRow(rowData))
    ),
  ]);
};

const content = (model) => {
  return h("", [
    h("p.text-center.success", getFetchStatus(model.aboutModel.remoteData)),
    Button("Home", (e) => model.router.handleLinkEvent(e), "?page=home"),
    Button(["Get data", iconBook()], () => {
      model.aboutModel.getDetails();
    }),
    model.aboutModel.remoteData.match({
      Success: () => renderTable(model.aboutModel.data),
      NotAsked: () => null,
      Loading: () => null,
      Failure: () => null,
    }),
  ]);
};

export default content;
