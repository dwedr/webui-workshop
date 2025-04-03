import { h } from "/js/src/index.js";

const Button = (content, func, href = "#") =>
  h(
    "a.btn.btn-primary.p2.flex-row.justify-center",
    {
      onclick: func,
      href: href,
    },
    content
  );

export default Button;
