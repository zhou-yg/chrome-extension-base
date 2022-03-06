const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const width = 300;
const rightBox = document.createElement("div");
rightBox.className = "chrome-inject-extension";
rightBox.id = "chromeInjectExtension";
Object.assign(rightBox.style, {
  backgroundColor: "",
  borderLeft: "1px solid #eee",
  width: `${width}px`,
  height: "100vh",
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 99999
});
function load() {
  document.body.appendChild(rightBox);
}
console.log("[inject-script] \u52A0\u8F7D\u4E86normal");
const html = document.children[0];
document.createElement("f-body");
Object.assign(html.style, {
  marginRight: `${width}px`
});
load();
