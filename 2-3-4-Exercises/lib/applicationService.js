class ApplicationService {
  getInfo() {
    return {
      data: {
        name: "WEBUI-Workshop",
        user: "Damian",
        lhc: "ALICE",
      },
    };
  }
}

module.exports = new ApplicationService();
