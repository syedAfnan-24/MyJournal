import{r as i,h as s}from"./p-6c788c93.js";const n="*{font-family:sans-serif}a{text-decoration:none;color:black}.nav{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline;box-shadow:0 0 5px rgba(0, 0, 0, 0.34);position:fixed;width:100%}.logo{font-weight:bolder;font-size:18px;margin-left:10px}.nav-list li{display:inline;margin:10px;font-weight:bold;transition:all 0.3s ease}.nav-list li:hover{color:red}.dropdown-div{display:none}@media (max-width:700px){.dropdown-div{display:block}.nav-list{display:none}.dropdown-list li{list-style-type:none;margin:10px;padding-right:10px}.nav{padding:10px}svg{margin-right:20px}}";const t=class{constructor(s){i(this,s);this.drop=false;this.first=undefined;this.second=undefined;this.third=undefined;this.fourth=undefined;this.firstPath=undefined;this.secondPath=undefined;this.thirdPath=undefined;this.fourthPath=undefined}render(){let i;if(this.drop){i=s("ul",{class:"dropdown-list"},s("a",{href:this.firstPath},s("li",null,this.first)),s("a",{href:this.secondPath},s("li",null,this.second)),s("a",{href:this.thirdPath},s("li",null,this.third)),s("a",{href:this.fourthPath},s("li",null,this.fourth)))}return s("div",{class:"nav"},s("div",{class:"logo"},"JOURNAL"),s("div",{class:"list-div"},s("ul",{class:"nav-list"},s("a",{href:this.firstPath},s("li",null,this.first)),s("a",{href:this.secondPath},s("li",null,this.second)),s("a",{href:this.thirdPath},s("li",null,this.third)),s("a",{href:this.fourthPath},s("li",null,this.fourth)))),s("div",{class:"dropdown-div"},s("svg",{onClick:()=>this.drop=!this.drop,xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"},s("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})),i))}};t.style=n;export{t as nav_bar};
//# sourceMappingURL=p-4494de0f.entry.js.map