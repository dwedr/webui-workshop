const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const assert = require("assert");

let server, browser, page;

before(async function () {
  this.timeout(10000);

  server = spawn("node", ["index.js"], { stdio: "inherit" });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  browser = await puppeteer.launch();
  page = await browser.newPage();
});

after(async function () {
  await browser.close();
  server.kill();
});

describe("Connection Test", async function () {
  it("Succesful connection", async function () {
    this.timeout(5000);

    await page.goto("http://localhost:8080");
    const title = await page.title();

    assert.ok(title.length > 0, "Tittle test");
  });
});

describe("Routing check", async function () {
  it("Checks title correctness", async function () {
    await Promise.all([
      page.waitForNavigation(),
      page.click('a[href="?page=about"]'),
    ]);

    this.timeout(2000);

    const url = await page.url();
    const pageEx = url.split("?")[1].split("=")[1];

    const title = await page.$eval(
      "div.p2.shadow-level2.level2.success",
      (el) => el.textContent
    );
    const pageTr = title.split(" ")[2];

    assert.deepEqual(pageTr, pageEx, `${pageEx} != ${pageTr}`);
  });
});

describe("Checks button`s display", async function () {
  it("aboutButton check", async function () {
    const expectedClass = "btn-primary";

    await page.goto("http://localhost:8080");
    this.timeout(2000);

    const classListReal = await page.$eval('a[href="?page=about"]', (el) =>
      Array.from(el.classList).join(" ")
    );

    assert.ok(
      classListReal.includes(expectedClass),
      `Expected class '${expectedClass}' not found. Actual: '${classListReal}'`
    );
  });
});
