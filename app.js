import { css } from 'emotion'
const className = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  & > div {
    margin: auto;
  } 
`

export default {
  init () {
    const appEl = document.getElementById('app')
    appEl.classList.add(className)
    appEl.innerHTML = `<div>Hello World!</div>`
  }
}
