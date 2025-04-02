import { h, switchCase } from "/js/src/index.js";
import contentAbout from "./about/aboutPage.js";
import contentHome from "./home/homePage.js";

/**
 * Main view layout
 * @return {vnode} application view to be drawn according to model
 */
export default (model) => [
  h(".flex-column.absolute-fill", [header(model), content(model)]),
];

/**
 * Top header of the page
 * @return {vnode}
 */
const header = (model) => {
  const { router } = model;
  const {
    params: { page },
  } = router;

  return h(
    ".p2.shadow-level2.level2",
    {
      style: "display: flex; justify-content: center",
    },
    `Welcome to your ${page} page`
  );
};

/**
 * Page content
 * @return {vnode}
 */
const content = (model) => {
  const { router } = model;
  const {
    params: { page },
  } = router;

  return switchCase(page, {
    home: contentHome,
    about: contentAbout,
  })(model);
};
