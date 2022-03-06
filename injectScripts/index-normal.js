import { load, width } from './loader'

console.log('[inject-script] 加载了normal')

const html = document.children[0]
const body = document.body

const fakerBody = document.createElement('f-body')

Object.assign(html.style, {
  marginRight: `${width}px`
})

load()
