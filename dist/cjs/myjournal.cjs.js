'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9d4f9517.js');

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('myjournal.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["nav-bar.cjs",[[1,"nav-bar",{"first":[1],"second":[1],"third":[1],"fourth":[1],"firstPath":[1,"first-path"],"secondPath":[1,"second-path"],"thirdPath":[1,"third-path"],"fourthPath":[1,"fourth-path"],"drop":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=myjournal.cjs.js.map