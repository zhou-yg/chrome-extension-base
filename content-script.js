console.log('[content-script] 加载了 content-script')

const html = document.children[0]

const injectScript = chrome.runtime.getURL('inject-script.js');

const s = document.createElement('script');
s.src = injectScript
html.appendChild(s)