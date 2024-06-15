import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Learn from './learn.jsx'
function Myapp(){
  return(
    <div>
      <Learn/>
    </div>
  )
}

// const reactElement = {
//     type :'a',
//     props : {
//         href : 'https://google.com',
//         target : '_self'
//     },
//     children : 'click me'
// }
const username = "Uwais Jawed"

const anotherElement = (
  <a href = "https://google.com" target = '_self'>Visit Google</a>)


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_self'},
  'click me to visit GOOGLE'
)

const name = React.createElement(
  'p',
  '',
  'uwais',

  username

)



ReactDOM.createRoot(document.getElementById('root')).render(
    name
)
