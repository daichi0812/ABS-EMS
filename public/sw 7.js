if(!self.define){let e,t={};const s=(s,a)=>(s=new URL(s+".js",a).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(t[c])return;let i={};const r=e=>s(e,c),o={module:{uri:c},exports:i,require:r};t[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ABS-EMS-Icon.webp",revision:"1d88c8936f30958575bec3f1061db2da"},{url:"/ABS-EMS512_maskable.png",revision:"b98caa6d86dc667111d48320103c159e"},{url:"/ABS-EMS512_rounded.png",revision:"34a4caf8ec604c99b303794e4d3c74e0"},{url:"/_next/app-build-manifest.json",revision:"866aa35f5e49945958653052fe89ba5d"},{url:"/_next/static/IO244Oy6MtRR4j784DRmt/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/IO244Oy6MtRR4j784DRmt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/053dbec3-79c9f3df34b3111a.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/0e5ce63c-606c490048d51264.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/13b76428-e1bf383848c17260.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/2117-517d37c55744e225.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/2626716e-73bf811bf7818e31.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/2631-9bf3dcc70abe59d4.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/3145-99bde3413439837c.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/3340-335257b444e046f7.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/3911-4c3833e5bea0c83a.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/4004-0443c9f7aead377d.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/4438-a1db80ad0192093c.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/4441-64d615bfae1889a0.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/4784-d91d19deca7d4b30.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/5650-d8ef0670e30d0032.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/6137-03d2cd0024eec2f8.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/6351-8a8126e65cdd4327.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/6440-6c54e40840074add.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/7526-e16be227cda2e36b.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/8430-c4b3b9b5a263a9c4.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/8658-4e577cd19f9f9b35.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/8708-4a40ba50b05d30bf.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/8e1d74a4-08094b00df8dabc9.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/9111-eeb43cb1edc3d2d9.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/94730671-628c127df68da169.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/9c4e2130-1a4919129368f496.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/a6eb9415-97d098edd692ad59.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/admin/page-f95e5d2e4fcdb6b1.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/client/page-40309f15bf20a7b6.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/categories/page-672aee538ea3d483.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/common/page-3f3bc7b4c9f64aa9.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/edit/%5Bid%5D/page-b7f2a2ef32ca56ad.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/equipment-list/page-3ed8900c4fa296ae.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/manager/page-93b8ce6c3085df6a.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/mypage/page-90b076eb2744f665.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/reserve/%5BproductId%5D/page-fd2ce19f2cdf985d.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/ems/store/page-00043c16bc7fd584.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/layout-afde388045cd22df.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/server/page-1fd8412329fdc43b.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/(protected)/settings/page-087e2ef5d0f55a60.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/_not-found/page-b601e5de7518435c.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/error/page-2873e7f65329eb72.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/layout-6b4af6f578f24397.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/login/page-51fa1b4dd02b1a63.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/new-password/page-86fc94ffb16ab432.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/new-verification/page-ad70db0fee11928d.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/register/page-6b17e54dd20fd78d.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/auth/reset/page-ce5bb7a166d114d6.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/layout-c3c0e177f2a1dcbf.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/app/page-bfabfa1262dcb181.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/fc2f6fa8-56ac70e9744682bb.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/fd9d1056-6e5434f4405656ec.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/main-a1d2abc3c67c0352.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/main-app-d24711a6bd9c10c8.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-3fb11e9adf83aab3.js",revision:"IO244Oy6MtRR4j784DRmt"},{url:"/_next/static/css/c6a36e3b1167d94f.css",revision:"c6a36e3b1167d94f"},{url:"/_next/static/css/e1fd2f783f63af86.css",revision:"e1fd2f783f63af86"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/logicode.jpeg",revision:"15de20a4a2c95f1c6963bc1faffb232d"},{url:"/manifest.json",revision:"85e4d726bb0e27b77b2aab4113b78ec5"},{url:"/screenshot_desktop.png",revision:"d22e61567de4d8ffc5a9c440ccb139d7"},{url:"/screenshot_mobile.png",revision:"11760da489e1ab1e54ed663161b05932"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:a})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));