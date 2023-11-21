import { h } from "@stencil/core";
export class NavBar {
  constructor() {
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
  static get is() { return "nav-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav-bar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav-bar.css"]
    };
  }
  static get properties() {
    return {
      "first": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "first",
        "reflect": false
      },
      "second": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "second",
        "reflect": false
      },
      "third": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "third",
        "reflect": false
      },
      "fourth": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "fourth",
        "reflect": false
      },
      "firstPath": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "first-path",
        "reflect": false
      },
      "secondPath": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "second-path",
        "reflect": false
      },
      "thirdPath": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "third-path",
        "reflect": false
      },
      "fourthPath": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "fourth-path",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "drop": {}
    };
  }
}
//# sourceMappingURL=nav-bar.js.map
