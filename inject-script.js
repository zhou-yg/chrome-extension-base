console.log('[inject-script] 加载了inject-script')

const html = document.children[0]
const body = document.body

const fakerBody = document.createElement('f-body')

html.appendChild(fakerBody)
fakerBody.appendChild(body)
Object.defineProperty(document, 'body', {
  get () {
    return fakerBody.children[0]; 
  }
})

console.log('[inject-script] document.body:', document.body)

Object.assign(html.style, {
  marginRight: '300px',
  height: '100vh',
  overflow: 'hidden'
})
Object.assign(fakerBody.style, {
  height: '100vh',
  maxHeight: '100vh',
  overflow: 'auto',
  display: 'block',
  boxSizing: 'border-box'
})
Object.assign(body.style, {
  transform: 'translate(0, 0)'
})

fakerBody.addEventListener('scroll', () => {
  console.log('fakerBody.scrollLeft, fakerBody.scrollTop: ', fakerBody.scrollLeft, fakerBody.scrollTop);
  window.scrollTo(fakerBody.scrollLeft, fakerBody.scrollTop)
})

window.onload = () => { console.log('load done2') }