"use strict";var precacheConfig=[["/404.html","3008e95c4c329ec0df4e5cedea65cf3c"],["/assets/images/aws.9f669c21.png","9f669c219265599151cf5e97e9b505c3"],["/assets/images/default.391cb92c.svg","391cb92c37f50780858a2a07643f6a03"],["/assets/images/flickr.affdf736.jpg","affdf736f26b72ae8bcba59c55d21b8b"],["/assets/images/imgur.d02be702.jpg","d02be7023d9d56a604bc2b8f738b3e3c"],["/assets/images/tencent.0bd90e97.jpg","0bd90e97b5e6db764d2641afa78739ac"],["/assets/images/upyun.197b2fcc.jpg","197b2fcc9aaa3c0e0effc377440d7d8d"],["/client.8e7e61c8.css","803a331a8cb364418ff47de2293a889c"],["/client.8e7e61c8.css.map","48cfd2625537a63ac7c74dadce8de8bd"],["/client.a5619d5f.js","69d13f6f958eba4accf5369f1a9391a2"],["/client.a5619d5f.js.map","3cbdff99b299c6fdb9d9c92944006cbe"],["/index.html","3008e95c4c329ec0df4e5cedea65cf3c"],["/locales/en/translations.json","21fa91f4eefae7dae6df603700b1f916"],["/locales/zh/translations.json","7a5830b1e973da40a0fc6a9f1f48cad2"],["/manifest.95292176.js","00a1ce96dd380641aecca8db085285e4"],["/manifest.95292176.js.map","31022d2de485109191e609b4c1ad2e16"],["/vendor.27db2dcf.js","7d075d3707e9815b576f121b2bc7604e"],["/vendor.3b918fd2.css","51166f7e0643b7ba695cc3ebf05c84cf"],["/vendor.3b918fd2.css.map","9f9fe09ec59f6d370b79310f33f28bc3"]],cacheName="sw-precache-v3-avi-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("https://avi.run/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("/src/utils/sw.js");