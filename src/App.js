import React from 'react'


class Header extends React.Component {
  render () {
    console.log(this) // this là class Header
    return <h1>Hello {this.props.name}</h1>
  }
 }
  
 class App extends React.Component {
  render () {
    return <Header name="World"></Header>
  }
 }
 
   
   
  


export default App;