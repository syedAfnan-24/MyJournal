import { p as promiseResolve, b as bootstrapLazy } from './index-b1525821.js';
export { s as setNonce } from './index-b1525821.js';

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["nav-bar",[[1,"nav-bar",{"first":[1],"second":[1],"third":[1],"fourth":[1],"firstPath":[1,"first-path"],"secondPath":[1,"second-path"],"thirdPath":[1,"third-path"],"fourthPath":[1,"fourth-path"],"drop":[32]}]]]], options);
});

//# sourceMappingURL=myjournal.js.map