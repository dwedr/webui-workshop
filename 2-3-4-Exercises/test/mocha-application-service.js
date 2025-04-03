const assert = require("assert");

describe("ApplicationService test", function () {
  const applicationService = require("../lib/applicationService.js");

  it("Checks correct initialization of the service", function () {
    assert.ok(applicationService);
  });

  it("Checks the method added, returns the expected JSON", function () {
    assert.deepEqual(applicationService.getInfo(), {
      data: {
        name: "WEBUI-Workshop",
        user: "Damian",
        lhc: "ALICE",
      },
    });
  });
});
