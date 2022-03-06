const left = document.querySelector('#left')
const right = document.querySelector('#right')

left.addEventListener('scroll', () => {
  console.log('left:', left.scrollLeft, left.scrollTop)

  right.scrollTop = left.scrollTop
  window.scrollTo(0, left.scrollTop)
})

right.addEventListener('scroll', () => {
  console.log('right:', right.scrollTop)
})

window.onscroll = () => {
  console.log('window.scrollY:', window.scrollY)
}