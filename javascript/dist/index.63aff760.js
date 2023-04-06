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
        this
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
})({"9ZIyz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
// //배열
// const frutis = ['Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi']
// console.log(frutis[frutis.length - 1])
//Object (객체)
// const user = new Object()
// user.name = 'jiho'
// user.age = 20
// console.log(user)
// function User() {
//   this.name = 'jiho'
//   this.age = 20
// }
// const user = new User()
// const user = {
//   name: 'jiho',
//   age: 20
// }
// console.log(user.name)
// console.log(user['name'])
// const userA = {
//   name: 'jiho',
//   age: 20
// }
// const userB = {
//   name: 'Neo',
//   age: 22,
//   parent: userA
// }
// function hello() {
//   console.log('hello world')
// }
// console.log(hello)
// const a = function() {
//   console.log('a')
// }
// const b = function(c) {
//   console.log(c)
//   c()
// }
// b(a)
//형 변환
// const a = true
// const b = 1
// console.log(a === b)
// === 일치 연산자
// == 동등 연산자
// //참과 거짓(Truthy&Falsy)
// //1) false
// //2) 0
// //3) null
// //4)undefined
// //5)NaN
// //6)''
// //7)0n
// if(1) {
//   console.log('참!')
// }
// const frutis = ['apple']
// if(frutis.length) {
//   console.log('아이템이 들어있음!')
// }
// console.log(typeof 'hello' === 'string')
// console.log(typeof 123 === 'number')
// console.log(typeof false === 'boolean')
// console.log(typeof undefined === 'undefined')
//전개 연산자
// const a = [1,2,3]
// const b = [4,5,6]
// const c = a.concat(b)
// console.log(c)
// const d =[...a,...b]
// console.log(d)
// const a = {x:1, y: 2}
// const b = {y:3 , z: 4}
// const c = Object.assign({},a,b)
// console.log(c)
// const d = {...a,...b}
// console.log(d) //a,b변수 객체 출력(전개 연산자 사용시는 괄호 사라짐)
// function fn(x,y,z) {
//   console.log(x,y,z)
// }
// fn(1,2,3)
// const a = [1,2,3]
// fn(...a)
// 구조 분해 할당
// let b = 0
// let c = 0
// const arr = [1, 2, 3]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]
// ;[,, c] = arr 
// const arr = [1, 2, 3]
// const [a,rest] = arr 
// console.log(a, rest)
// console.log(b, c)
//구조 분해 할당 - 디졸브 효과
// const obj = {
//   a:1,
//   b:2,
//   c:3,
//   x:7,
//   y:100
// }
// const { c, ...rest } = obj
// console.log(c, rest)
// 선택적 체이닝:남용하지 말고 꼭 필요할떄만!
// const user = null
// console.log(user?.name)
// const userA = {
//   name: 'jiho',
//   age: 18,
//   address: {
//     contury: 'Korea',
//     city: 'Daejeon'
//   }
// }
// const userB = {
//   name: 'cheho',
//   age: 15,
// }
// function getCity(user) {
//   return user.address?.city || '주소 없음.'
// }
// console.log(getCity(userA))
// console.log(getCity(userB))
//조건문 (if문)
// function isPositive(number) {
//   if(number > 0){
//     return '양수'
//   } else if(number < 0){
//     return '음수'
//   } else {
//     return '0'
//   }
// }
// console.log(isPositive(1))
// console.log(isPositive(10))
// console.log(isPositive(-2))
// console.log(isPositive(0))
//switch 조건문
// function price(fruit) {
//   switch(fruit) {
//     case 'Apple':
//       return 1000
//     case 'Banana':
//       return 1500
//     case 'Cherry':
//       return 2000
//     default:
//       return 0
//   }
//   if(fruit === 'Apple') {
//     return 1000
//   } else if(fruit === 'Banana') {
//     return 1500
//   } else if(fruit === 'Cherry') {
//     return 2000
//   } else {
//     return 0
//   }
// }
// console.log(price('Apple'))
// console.log(price('Banana'))
// console.log(price('Cherry'))
// console.log(price('Hello'))
//for 반복문
// for (let i = 9; i > -1; i -= 1) {
//   if(i % 2 === 0) {
//     continue
//   }
//   console.log(i)
// }
//for of 반복문
// const fruits = ['Apple', 'Banana', 'Cherry']
// // for (let i =0; i < fruits.length; i += 1) {
// //   console.log(fruits[i])
// // }
// for(const fruit of fruits) {
//   console.log(fruit)
// }
//예제 2
// const users = [
//   {
//     name: 'jiho',
//     age: 18
//   }, 
//   {
//     name: 'cheho',
//     age: 15
//   },
//   {
//     name: 'hj',
//     age: 50
//   }
// ]
// for (let i = 0; i < users.length; i+=1) {
//   console.log(users[i].name)
// }
// for(const user of users) {
//   console.log(user.name)
// }
//for in 반복문(객체 데이터 조회)
// const user = {
//   name: 'jiho',
//   age: '18',
//   isValid: true,
//   email: 'jihoseo2006@gmail.com',
// }
// for(const key in user) {
//   console.log(key)
//   console.log(user[key])
// }
//while 반복문
// let n = 0
// while (n < 4) {
//   console.log(n)
//   n += 1
// }
//do while 문
// let n = 0
// // while(n){
// //   console.log(n)
// // }
// do {
//   console.log(n)
//   n += 1
// } while (n < 4)
//함수
//함수 선언문
// function hello() {}
//함수 표현식
// const hello = function () {}
// hello()
//호이스팅
// 함수 선언시에는 선언 전에 미리 위에 생성 처해놔라... 
//선언하고 생성하면 그건 바보
//반환 및 종료
// function plus(num) {
//   if(num === undefined) {
//     console.log('숫자를 입력해주세요!')
//     return 0
//   }
//   return num + 1
// }
// console.log(plus(2))
// console.log(plus(7))
// console.log(plus())
// 매개변수 패턴 - 기본값
// function sum(a, b = 1) {
//   return a + b;
// }
// console.log(sum(1, 2))
// console.log(sum(7))
// 매개변수 패턴 - 객체구조 분해 할당
// const user = {
//   name: 'jiho',
//   age: 18,
//   email: 'jihoseo2006@gmail.com',
// }
// function getName({name}) {
//   return name
// }
// function getEmail({ email = '이메일이 없습니다.'}) { 
//   return email
// }
// console.log(getName(user))
// console.log(getEmail(user))
// 매개변수 패턴 - 배열 구조분해 할당
// const fruits = ['Apple', 'Banana', 'Cherry']
// const numbers = [1,2,3,4,5,6,7]
// function getSecondItem([, b]) {
//   return b
// }
// console.log(getSecondItem(fruits))
// console.log(getSecondItem(numbers))
// 매개변수 패턴 - 나머지 매개변수
// function sum(...rest) {
//   console.log(rest)
//   console.log(arguments)
//   return rest.reduce(function(acc, cur) {
//     return acc + cur
//   }, 0)
// }
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
//화살표 함수
// function sum(){}
// const sum = function() {}
// const sum = () => {}
// function sum(a,b) {
//   return a + b
// }
// const sum = (a,b) => a + b 
// console.log(sum(1,2)) //3
// console.log(sum(10, 20)) // 30
//화살표 함수
// const a = () => {} //기본 타입
// const b = x => {} // 매개변수가 하나일때
// const c = (x,y) => {} // 매개변수가 두개 이상일때
// const d = x => {return x * x}
// const e = x =>  x * x
// const f = x => {
//   console.log(x * x)
//   return x * x
// }
// const g = () => {return { a : 1 }}
// const h = () => ({ a:1 })
// const i = () => { return [1,2,3] }
// const j = () => [1,2,3] 
//즉시실행함수(IIFE)
// const a = 7
// const double  = () => {
//   console.log(a * 2)
// }
// double()
// ;(() => {
//   console.log(a * 2)
// })()
// //즉시실행함수 패턴
// ;(() => {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2)}()) // (F())
// ;!function () {console.log(a * 2)} () // !F()
// ;+function () {console.log(a * 2)}() // +F()
// ;((a,b) => {
//   console.log(a.innerWidth)
//   console.log(b)
// })(window, document.body)//즉시실행 함수의 두번째 함수는 첫번째 함수의 매게변수가 될수 있음!
// 콜백(Callback)
// const a = callback => {
//   console.log('A')
//   callback()
// }
// const b = () => {
//   console.log('B')
// }
// a(b)
//예제 2
// const sum = (a, b, c) => {
//   setTimeout(() => {
//     c(a + b)
//   }, 1000);
// }
// sum(1,2, (value) => {
//   console.log(value)
// })
// sum(3,7, value => {
//   console.log(value)
// })
// const loadImage = (url, cb) => {
//   const imgEl = document.createElement('img');
//   imgEl.src = url
//   imgEl.addEventListener('load', () => {
//     setTimeout(() => {
//       cb(imgEl)
//     }, 1000)
//   })
// }
// const containerEl = document.querySelector('.container')
// loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
//   containerEl.innerHTML = ''
//   containerEl.append(imgEl)
// })
// 재귀
// let i = 0
// const a = () => {
//   console.log('A')
//   i += 1
//   if(i < 4) {
//   a()
//   }
// }
// a()
// const userA = {name: 'A', parent: null}
// const userB = {name: 'B', parent: userA}
// const userC = {name: 'C', parent: userB}
// const userD = {name: 'D', parent: userC}
// const getRootUser = (user) => {
//   if (user.parent) {
//     return getRootUser(user.parent)
//   }
//   return user
// }
// console.log(getRootUser(userD))
//호출 스케줄링
// const hello  = () => {
//   console.log('hello~')
// }
// const timeout = setInterval(hello ,2000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () =>{
//   console.log('Clear!')
//   clearInterval(timeout)
// } )
//this
//// 일반 함수의 this는 호출 위치에서 정의
// const user = {
//   firstname: 'jiho',// 일반 함수가 참조하는 대상!
//   lastname: 'seo',
//   age: '18',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// console.log(user.getFullName())
//// 화살표 함수의 this는 자신이 선언된 함수(렉시컬== 함수가 동작할수 있는 유효한 범위) 범위에서 정의
// function user() {
//   this.firstname = 'Neo' // 화살표 함수의 this는 이곳을 참조함!
//   this.lastname = 'Anderson'
//   return {
//     firstname: 'jiho',
//     lastname: 'seo',
//     age: '18',
//     getFullName: () => { //화살표 함수!
//       return `${this.firstname} ${this.lastname}`
//     }
//   }
// } 
// const u = user()
// console.log(u.getFullName())
//일반함수 예제 2
// function user() {
//   this.firstname = 'Neo' 
//   this.lastname = 'Anderson'
//   return {
//     firstname: 'jiho',
//     lastname: 'seo',
//     age: '18',
//     getFullName() { 
//       return `${this.firstname} ${this.lastname}`
//     }
//   }
// } 
// const lewis = {
//   firstname: 'Lewis',
//   lastname: 'Yang'
// }
// const u = user()
// console.log(u.getFullName())
// console.log(u.getFullName.call(lewis))
// const timer = {
//   title: 'TIMER!',
//   timeout: function() {
//     console.log(this.title)
//     setTimeout(() => {
//       console.log(this.title)
//     }, 1000)
//   }
// }
// timer.timeout()
//Ch 5. 클래스 prototype
//const fruits = ['Apple', 'Banana', 'Cherry']
// const fruits = new Array('Apple', 'Banana', 'Cherry')//생성자 함수
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits.includes('Banana'))
// console.log(fruits.includes('Orange'))
// Array.prototype.jiho = function() {
//   console.log(this)
// }
// fruits.jiho()
// const arr = []
// arr.jiho()
//예제 2
// const jiho = {
//   firstname: 'Jiho',
//   lastname: 'Seo',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// const neo = {
//   firstname: 'Neo',
//   lastname: 'Anderson',
// }
// console.log(jiho.getFullName())
// console.log(jiho.getFullName.call(neo))
// function User(first, last) {  
//   this.firstname = first
//   this.lastname = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`
// }
// const jiho = new User('Jiho','Seo') // 생성자 함수
// const neo = new User('Neo','Anderson')
// console.log(jiho)
// console.log(neo)
// console.log(jiho.getFullName())
// console.log(neo.getFullName())
//ES6 Classes 방식
// function User(first, last)  {
//   this.firstname = first
//   this.lastname = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`
// }
//ES6 Classes 방식 예제
// class User {
//   constructor(first, last) {
//     this.firstname = first
//     this.lastname = last
//   }
//   getFullName() {
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// const jiho = new User('Jiho','Seo')
// const neo = new User('Neo','Anderson')
// console.log(jiho)
// console.log(neo)
// Getter, Setter
// class User {
//   constructor(first, last) {
//     this.firstname = first
//     this.lastname = last
//   }
//   getfullname() { 
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// const jiho = new User('Jiho','seo')
// console.log(jiho.getfullname())
// jiho.firstname = 'Neo'
// console.log(jiho.getfullname())
// 위의 코드 수정본
class User {
    constructor(first, last){
        this.firstname = first;
        this.lastname = last;
    }
    get fullname() {
        console.log("Gatting full name!");
        return `${this.firstname} ${this.lastname}`;
    }
}
const jiho = new User("Jiho", "seo");
console.log(jiho.fullname);
jiho.firstname = "Neo";
console.log(jiho.fullname);

},{}]},["9ZIyz","adjPd"], "adjPd", "parcelRequirebaba")

//# sourceMappingURL=index.63aff760.js.map
