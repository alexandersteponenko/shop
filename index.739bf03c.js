// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8G2QE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ebWYT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utilsJs = require("./utils.js");
var _firestore = require("firebase/firestore");
var _app = require("firebase/app");
var _applePng = require("../image/apple.png");
var _applePngDefault = parcelHelpers.interopDefault(_applePng);
var _headphonesSvg = require("../image/headphones.svg");
var _headphonesSvgDefault = parcelHelpers.interopDefault(_headphonesSvg);
var _iphone11BlackSvg = require("../image/Iphone11-black.svg");
var _iphone11BlackSvgDefault = parcelHelpers.interopDefault(_iphone11BlackSvg);
var _iphone11BlueSvg = require("../image/Iphone11-blue.svg");
var _iphone11BlueSvgDefault = parcelHelpers.interopDefault(_iphone11BlueSvg);
var _iphone13ProsilverSvg = require("../image/Iphone13-Prosilver.svg");
var _iphone13ProsilverSvgDefault = parcelHelpers.interopDefault(_iphone13ProsilverSvg);
var _iphone13ProgreySvg = require("../image/Iphone13-Progrey.svg");
var _iphone13ProgreySvgDefault = parcelHelpers.interopDefault(_iphone13ProgreySvg);
var _samsungGalaxyNote21Svg = require("../image/SamsungGalaxy-Note21.svg");
var _samsungGalaxyNote21SvgDefault = parcelHelpers.interopDefault(_samsungGalaxyNote21Svg);
var _samsungGalaxyS21Svg = require("../image/SamsungGalaxy-S21+.svg");
var _samsungGalaxyS21SvgDefault = parcelHelpers.interopDefault(_samsungGalaxyS21Svg);
var _icCartSvg = require("../image/ic-cart.svg");
var _icCartSvgDefault = parcelHelpers.interopDefault(_icCartSvg);
var _ratingSvg = require("../image/rating.svg");
var _ratingSvgDefault = parcelHelpers.interopDefault(_ratingSvg);
const firebaseConfig = {
    apiKey: "AIzaSyBQ0ay2192erVHEap3YGibJBct9cWnw1qo",
    authDomain: "shop-fda0b.firebaseapp.com",
    projectId: "shop-fda0b",
    storageBucket: "shop-fda0b.appspot.com",
    messagingSenderId: "583984113131",
    appId: "1:583984113131:web:81a003a19230c20e0c65ae"
};
const app = (0, _app.initializeApp)(firebaseConfig);
const db = (0, _firestore.getFirestore)(app);
const products = [
    {
        model: "Apple Watch",
        series: "Series 5 SE",
        imageURL: (0, _applePngDefault.default),
        description: "Apple Watch...",
        rating: (0, _ratingSvgDefault.default),
        price: 529.99,
        descriptionShort: "We present to your attention. Apple Watch. Series 5 SE"
    },
    {
        model: "Sony ZX330BT",
        series: "Light Grey",
        imageURL: (0, _headphonesSvgDefault.default),
        description: "Sony ZX330BT...",
        rating: (0, _ratingSvgDefault.default),
        price: 39.99,
        descriptionShort: "We present to your attention. Sony ZX330BT. Light Grey"
    },
    {
        model: "Iphone 11",
        series: "Serious Black",
        imageURL: "/Iphone11-black.d49cd897.svg",
        description: "Iphone 11 Black...",
        rating: (0, _ratingSvgDefault.default),
        price: 619.99,
        descriptionShort: "We present to your attention. Iphone 11 Black. Serious Black"
    },
    {
        model: "Iphone 11",
        series: "Subway Blue",
        imageURL: (0, _iphone11BlueSvgDefault.default),
        description: "Iphone 11 Blue...",
        rating: (0, _ratingSvgDefault.default),
        price: 619.99,
        descriptionShort: "We present to your attention. Iphone 11 Blue. Subway Blue"
    },
    {
        model: "Iphone 13 Pro",
        series: "Silly Silver",
        imageURL: (0, _iphone13ProsilverSvgDefault.default),
        description: "Iphone 13 Pro...",
        rating: (0, _ratingSvgDefault.default),
        price: 1029.99,
        descriptionShort: "We present to your attention. Iphone 13 Pro. Silly Silver"
    },
    {
        model: "Iphone 13 Pro",
        series: "Grey",
        imageURL: (0, _iphone13ProgreySvgDefault.default),
        description: "Iphone 13 Pro...",
        rating: (0, _ratingSvgDefault.default),
        price: 619.99,
        descriptionShort: "We present to your attention. Iphone 13 Pro. Grey"
    },
    {
        model: "Samsung Galaxy Note 21",
        series: "2 - Options",
        imageURL: (0, _samsungGalaxyNote21SvgDefault.default),
        description: "Samsung Galaxy Note 21...",
        rating: (0, _ratingSvgDefault.default),
        price: 999.99,
        descriptionShort: "We present to your attention. Samsung Galaxy Note 21. 2 - Options"
    },
    {
        model: "Samsung Galaxy S21+",
        series: "Lilac Purple",
        imageURL: (0, _samsungGalaxyS21SvgDefault.default),
        description: "Samsung Galaxy S21+...",
        rating: (0, _ratingSvgDefault.default),
        price: 849.99,
        descriptionShort: "We present to your attention. Samsung Galaxy S21+. Lilac Purple"
    }
];
// добавляем продукты в Firestore
async function uploadProductsToFirestore() {
    try {
        for (const product of products)await (0, _firestore.addDoc)((0, _firestore.collection)(db, "products"), product);
        console.log("\u0422\u043E\u0432\u0430\u0440\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B!");
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432:", error);
    }
}
// функцию вызываем толко один раз (чтобы в базе не дублировались товары)
// uploadProductsToFirestore();
// получем продукты из Firestore
async function getProducts() {
    const products = [];
    try {
        const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, "products"));
        querySnapshot.forEach((doc)=>{
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return products;
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432:", error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
}
const productList = document.getElementById("card-list");
const bagListImg = document.getElementById("bagListImg");
const ordersList = document.querySelector(".orders__list");
let cart = [];
// Получаем уникальный ID пользователя
let userId = localStorage.getItem("userId");
if (!userId) {
    userId = "user_" + Date.now(); // Генерация уникального ID
    localStorage.setItem("userId", userId);
}
function renderProducts(products) {
    productList.innerHTML = "";
    products.forEach((product)=>{
        const productItem = document.createElement("li");
        productItem.className = "card";
        productItem.setAttribute("product-card-id", product.id);
        productItem.innerHTML = `
      <div class="card__image">
        <a href="card.html?id=${product.id}" class="card__img">
          <img src="${product.imageURL}" alt="${product.model}" />
        </a>
      </div>
      <div class="card__content">
        <a href="card.html?id=${product.id}" class="card__info">
          <h2 class="card__model">${product.model}</h2>
          <p class="card__series">${product.series}</p>
        </a>
        <div class="card__price">
          <p class="card__price-number">$ ${product.price}</p>
          <button class="addButton-bag" data-id="${product.id}">
            <img src="${0, _icCartSvgDefault.default}" class="addButton-img" />
          </button>
        </div>
      </div>   
    `;
        // Добавляем обработчик события для кнопки добавления в корзину
        const addButton = productItem.querySelector(".addButton-bag");
        addButton.addEventListener("click", ()=>addToCart(product));
        productList.appendChild(productItem);
    });
}
function addToCart(product) {
    const existingProduct = cart.find((item)=>item.id === product.id);
    if (existingProduct) existingProduct.quantity++;
    else cart.push({
        ...product,
        quantity: 1
    });
    // Сохраняем корзину в LS
    (0, _utilsJs.saveCartToLocalStorage)(cart);
    updateBagList();
}
function updateBagList() {
    bagListImg.innerHTML = ""; // Очищаем текущий список
    // Загружаем корзину из LS
    const savedCart = (0, _utilsJs.loadCartFromLocalStorage)();
    savedCart.forEach((item)=>{
        const bagItem = document.createElement("li");
        bagItem.className = "bag-item";
        bagItem.innerHTML = `<img class="bag__img" src="${item.imageURL}" alt="${item.model}" />`;
        bagListImg.appendChild(bagItem);
    });
}
//Загружаем данные из LS и обновляем интерфейс.
function loadCart() {
    cart = (0, _utilsJs.loadCartFromLocalStorage)(); // Загружаем корзину
    updateBagList(); // Отображаем товары в корзине
}
// Функция для отображения заказов
async function displayOrders() {
    const ordersRef = (0, _firestore.collection)(db, "orders");
    try {
        const querySnapshot = await (0, _firestore.getDocs)(ordersRef);
        ordersList.innerHTML = ""; // Очистка списка перед отображением
        // Проверяем количество заказов
        if (querySnapshot.empty) return;
        else {
            const header = document.createElement("h3");
            header.textContent = (0, _utilsJs.ORDERS);
            ordersList.appendChild(header);
        }
        querySnapshot.forEach((doc)=>{
            const orderItem = document.createElement("a");
            orderItem.className = "orders__list-text";
            orderItem.href = `./orders.html?id=${doc.id}`; // устанавливаем ссылку ID документа
            orderItem.textContent = `# ${doc.id}`; //  устанавливаем текст ссылки
            ordersList.appendChild(orderItem);
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u043E\u0432: ", error);
    }
}
// загружаем и отображаем товары при загрузке страницы
async function loadAndRenderProducts() {
    const products = await getProducts(); // Сохраняем продукты в глобальную переменную
    renderProducts(products);
    loadCart();
    displayOrders();
}
window.onload = loadAndRenderProducts;

},{"./utils.js":"72Dku","firebase/firestore":"8A4BC","firebase/app":"aM3Fo","../image/apple.png":"hEenY","../image/headphones.svg":"fDUE8","../image/Iphone11-black.svg":"cudHF","../image/Iphone11-blue.svg":"81WuF","../image/Iphone13-Prosilver.svg":"dgT2w","../image/Iphone13-Progrey.svg":"lCHsy","../image/SamsungGalaxy-Note21.svg":"d3RHg","../image/SamsungGalaxy-S21+.svg":"7FGlQ","../image/ic-cart.svg":"ej0uV","../image/rating.svg":"lCJQH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ORDERS", ()=>ORDERS);
parcelHelpers.export(exports, "ERROR_NO_PRODUCT", ()=>ERROR_NO_PRODUCT);
parcelHelpers.export(exports, "BASKET_EMPTY", ()=>BASKET_EMPTY);
parcelHelpers.export(exports, "ORDER_NO_PRODUCT", ()=>ORDER_NO_PRODUCT);
parcelHelpers.export(exports, "THE_PAGE_WAS_NOT_FOUND", ()=>THE_PAGE_WAS_NOT_FOUND);
parcelHelpers.export(exports, "SERVER__ERROR", ()=>SERVER__ERROR);
parcelHelpers.export(exports, "NOT_SPECIFIED", ()=>NOT_SPECIFIED);
// Сохраняем корзину в LS
parcelHelpers.export(exports, "saveCartToLocalStorage", ()=>saveCartToLocalStorage);
// Загружаем корзину из LS и парсим её
parcelHelpers.export(exports, "loadCartFromLocalStorage", ()=>loadCartFromLocalStorage);
// Функция для вывода ошибки
parcelHelpers.export(exports, "showErrorMessage", ()=>showErrorMessage);
var _icVectorSvg = require("../image/ic-Vector.svg");
var _icVectorSvgDefault = parcelHelpers.interopDefault(_icVectorSvg);
const ORDERS = "\u0417\u0430\u043A\u0430\u0437\u044B";
const ERROR_NO_PRODUCT = "\u0423\u043F\u0441, \u043E\u0448\u0438\u0431\u043A\u0430. \u0422\u0430\u043A\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u043D\u0435\u0442";
const BASKET_EMPTY = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430";
const ORDER_NO_PRODUCT = "\u0412 \u0437\u0430\u043A\u0430\u0437\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432";
const THE_PAGE_WAS_NOT_FOUND = "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430";
const SERVER__ERROR = "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u043A\u0430\u0437\u0435";
const NOT_SPECIFIED = "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E";
function saveCartToLocalStorage(cart) {
    // Преобразуем корзину в строку JSON и сохраняем в localStorage
    localStorage.setItem("bag", JSON.stringify(cart));
}
function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem("bag")) || [];
    return savedCart; // Возвращаем загруженную корзину или пустой массив
}
function showErrorMessage(message) {
    document.body.innerHTML = `
         <div class="container">
            <div class="link-cart">
                <a href="./index.html" class="link__wrapper">
                   <img src="${0, _icVectorSvgDefault.default}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
                      <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
                </a>
            </div>
            <h2>${message}</h2>
         </div>
    `;
}

},{"../image/ic-Vector.svg":"azrxg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azrxg":[function(require,module,exports,__globalThis) {
module.exports = require("8e01ef8b3a12797a").getBundleURL('g05j8') + "ic-Vector.67128207.svg" + "?" + Date.now();

},{"8e01ef8b3a12797a":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hEenY":[function(require,module,exports,__globalThis) {
module.exports = require("7054484933328c73").getBundleURL('g05j8') + "apple.aae1ea42.png" + "?" + Date.now();

},{"7054484933328c73":"lgJ39"}],"fDUE8":[function(require,module,exports,__globalThis) {
module.exports = require("16f66d06f4b71329").getBundleURL('g05j8') + "headphones.1575e4e7.svg" + "?" + Date.now();

},{"16f66d06f4b71329":"lgJ39"}],"cudHF":[function(require,module,exports,__globalThis) {
module.exports = require("fbd9b961f0de694").getBundleURL('g05j8') + "Iphone11-black.d49cd897.svg" + "?" + Date.now();

},{"fbd9b961f0de694":"lgJ39"}],"81WuF":[function(require,module,exports,__globalThis) {
module.exports = require("823af7135d1df2d3").getBundleURL('g05j8') + "Iphone11-blue.0bf3c6be.svg" + "?" + Date.now();

},{"823af7135d1df2d3":"lgJ39"}],"dgT2w":[function(require,module,exports,__globalThis) {
module.exports = require("57f5a93727927106").getBundleURL('g05j8') + "Iphone13-Prosilver.c0042bc2.svg" + "?" + Date.now();

},{"57f5a93727927106":"lgJ39"}],"lCHsy":[function(require,module,exports,__globalThis) {
module.exports = require("644e2ebc0225d090").getBundleURL('g05j8') + "Iphone13-Progrey.c1fb0f24.svg" + "?" + Date.now();

},{"644e2ebc0225d090":"lgJ39"}],"d3RHg":[function(require,module,exports,__globalThis) {
module.exports = require("2b1cae56e6dc3a70").getBundleURL('g05j8') + "SamsungGalaxy-Note21.3e5d4e9d.svg" + "?" + Date.now();

},{"2b1cae56e6dc3a70":"lgJ39"}],"7FGlQ":[function(require,module,exports,__globalThis) {
module.exports = require("95b1f6014d66073e").getBundleURL('g05j8') + "SamsungGalaxy-S21+.d7e1327c.svg" + "?" + Date.now();

},{"95b1f6014d66073e":"lgJ39"}],"ej0uV":[function(require,module,exports,__globalThis) {
module.exports = require("906a142901c346e4").getBundleURL('g05j8') + "ic-cart.7fff4739.svg" + "?" + Date.now();

},{"906a142901c346e4":"lgJ39"}],"lCJQH":[function(require,module,exports,__globalThis) {
module.exports = require("1995100f1d776e41").getBundleURL('g05j8') + "rating.5ce74d94.svg" + "?" + Date.now();

},{"1995100f1d776e41":"lgJ39"}]},["8G2QE","ebWYT"], "ebWYT", "parcelRequire94c2")

//# sourceMappingURL=index.739bf03c.js.map
