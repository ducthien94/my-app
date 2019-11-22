import React from 'react'

function Course(props) {
    return (
        <>
            <Header text={props.course.name}></Header>
            <Content content={props.course.parts}></Content>
        </>
    )
}

function Header(props) {
    return <h1>{props.text}</h1>
}

function Content(props) {
    const part = props.content;
    return (
        <>
            {part.map(element => <Part key={element.id} name={element.name} exercises={element.exercises}></Part>)}
            <b>total of {part.reduce((total, exercises) => total + exercises.exercises, 0)} exercises</b>
        </>
    )
}

function Part(props) {
    return <p>{props.name} {props.exercises}</p>
}


function App() {

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <>
            {courses.map(element =>
                <Course key={element.id} course={element}></Course>
            )}
        </>
    )


};



export default App;