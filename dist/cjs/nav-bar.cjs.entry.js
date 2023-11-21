'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9d4f9517.js');

const navBarCss = "*{font-family:sans-serif}a{text-decoration:none;color:black}.nav{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline;box-shadow:0 0 5px rgba(0, 0, 0, 0.34);position:fixed;width:100%}.logo{font-weight:bolder;font-size:18px;margin-left:10px}.nav-list li{display:inline;margin:10px;font-weight:bold;transition:all 0.3s ease}.nav-list li:hover{color:red}.dropdown-div{display:none}@media (max-width:700px){.dropdown-div{display:block}.nav-list{display:none}.dropdown-list li{list-style-type:none;margin:10px;padding-right:10px}.nav{padding:10px}svg{margin-right:20px}}";

const NavBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      dropdown = index.h("ul", { class: "dropdown-list" }, index.h("a", { href: this.firstPath }, index.h("li", null, this.first)), index.h("a", { href: this.secondPath }, index.h("li", null, this.second)), index.h("a", { href: this.thirdPath }, index.h("li", null, this.third)), index.h("a", { href: this.fourthPath }, index.h("li", null, this.fourth)));
    }
    return (index.h("div", { class: 'nav' }, index.h("div", { class: 'logo' }, "JOURNAL"), index.h("div", { class: 'list-div' }, index.h("ul", { class: "nav-list" }, index.h("a", { href: this.firstPath }, index.h("li", null, this.first)), index.h("a", { href: this.secondPath }, index.h("li", null, this.second)), index.h("a", { href: this.thirdPath }, index.h("li", null, this.third)), index.h("a", { href: this.fourthPath }, index.h("li", null, this.fourth)))), index.h("div", { class: 'dropdown-div' }, index.h("svg", { onClick: () => this.drop = !this.drop, xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 448 512" }, index.h("path", { d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" })), dropdown)));
  }
};
NavBar.style = navBarCss;

exports.nav_bar = NavBar;

//# sourceMappingURL=nav-bar.cjs.entry.js.map