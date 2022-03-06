export const width = 300

const rightBox = document.createElement('div');
rightBox.className = 'chrome-inject-extension'
rightBox.id = 'chromeInjectExtension'
Object.assign(rightBox.style, {
  backgroundColor: '',
  borderLeft: '1px solid #eee',
  width: `${width}px`,
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 99999
})

export function load () {
  document.body.appendChild(rightBox)  
}
