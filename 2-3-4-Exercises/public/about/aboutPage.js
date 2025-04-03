import { h } from "/js/src/index.js";
import Button from "../components/Button.js";
import { iconBook } from "/js/src/icons.js";
import { getFetchStatus } from "./About.js";

const fetchStatus = (model) => {
  return h(
    "p.text-center.success",
    getFetchStatus(model.aboutModel.remoteData)
  );
};

const mappedRow = (rowData) => {
  const td = rowData.map((data) => h("td", data));
  return h("tr", td);
};

const renderTable = (jsonData) => {
  const tableData = [];

  const headers = Object.keys(jsonData);
  tableData.push(headers);

  const maxRows = Math.max(...Object.values(jsonData).map((arr) => arr.length));
  for (let i = 0; i < maxRows; i++) {
    const row = headers.map((key) => jsonData[key][i] || "no data");
    tableData.push(row);
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
    fetchStatus(model),
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
