import React from 'react'


function App() {
    function handleClick(e, message) {
      console.log('You ' + message)
      console.log('this', this) //undefined
      console.log('this', e.target)
    }
    return <h1 onClick={e => handleClick(e, 'clicked')}>Hello World</h1>
   }
   
   
  


export default App;