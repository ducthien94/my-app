import React from 'react'

function Header(props) {
   return <h1>{props.text}</h1>
}

function Content(props) {
    return (
        <>
            <Part part={props.content[0]}></Part>
            {/* <p>{props.content[0].name} {props.content[0].exercises}</p> */}
            <Part part={props.content[1]}></Part>
            {/* <p>{props.content[1].name} {props.content[1].exercises}</p> */}
            <Part part={props.content[2]}></Part>
            {/* <p>{props.content[2].name} {props.content[2].exercises}</p> */}
        </>
    )
}

function Part(props) {
    return <p>{props.part.name} {props.part.exercises}</p>
}

function Total(props) {
    const total = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
    return <p>Number of exercises {total}</p>;
}




function App() {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      };

      return (
          <>
            <Header text={course.name}></Header>
            <Content content={course.parts}></Content>
            <Total total={course.parts}></Total>
          </>
      ) 
};



export default App;