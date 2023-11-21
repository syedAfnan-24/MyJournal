import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const navBarCss = "*{font-family:sans-serif}a{text-decoration:none;color:black}.nav{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline;box-shadow:0 0 5px rgba(0, 0, 0, 0.34);position:fixed;width:100%}.logo{font-weight:bolder;font-size:18px;margin-left:10px}.nav-list li{display:inline;margin:10px;font-weight:bold;transition:all 0.3s ease}.nav-list li:hover{color:red}.dropdown-div{display:none}@media (max-width:700px){.dropdown-div{display:block}.nav-list{display:none}.dropdown-list li{list-style-type:none;margin:10px;padding-right:10px}.nav{padding:10px}svg{margin-right:20px}}";

const NavBar$1 = /*@__PURE__*/ proxyCustomElement(class NavBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.drop = false;
    this.first = undefined;
    this.second = undefined;
    this.third = undefined;
    this.fourth = undefined;
    this.firstPath = undefined;
    this.secondPath = undefined;
    this.thirdPath = undefined;
    this.fourthPath = undefined;
  }
  render() {
    let dropdown;
    if (this.drop) {
      dropdown = h("ul", { class: "dropdown-list" }, h("a", { href: this.firstPath }, h("li", null, this.first)), h("a", { href: this.secondPath }, h("li", null, this.second)), h("a", { href: this.thirdPath }, h("li", null, this.third)), h("a", { href: this.fourthPath }, h("li", null, this.fourth)));
    }
    return (h("div", { class: 'nav' }, h("div", { class: 'logo' }, "JOURNAL"), h("div", { class: 'list-div' }, h("ul", { class: "nav-list" }, h("a", { href: this.firstPath }, h("li", null, this.first)), h("a", { href: this.secondPath }, h("li", null, this.second)), h("a", { href: this.thirdPath }, h("li", null, this.third)), h("a", { href: this.fourthPath }, h("li", null, this.fourth)))), h("div", { class: 'dropdown-div' }, h("svg", { onClick: () => this.drop = !this.drop, xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 448 512" }, h("path", { d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" })), dropdown)));
  }
  static get style() { return navBarCss; }
}, [1, "nav-bar", {
    "first": [1],
    "second": [1],
    "third": [1],
    "fourth": [1],
    "firstPath": [1, "first-path"],
    "secondPath": [1, "second-path"],
    "thirdPath": [1, "third-path"],
    "fourthPath": [1, "fourth-path"],
    "drop": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["nav-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "nav-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavBar$1);
      }
      break;
  } });
}

const NavBar = NavBar$1;
const defineCustomElement = defineCustomElement$1;

export { NavBar, defineCustomElement };

//# sourceMappingURL=nav-bar.js.map