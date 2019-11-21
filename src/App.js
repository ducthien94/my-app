import React from 'react'

function Avatar(props) {
    return <img src={props.avatar} alt=""/>
}

function UserInfo(props) {
    return (
        <>
            <Avatar avatar={props.user.avatarUrl}></Avatar>
            <div>{props.user.name}</div>
        </>
    )
     

}

function App() {
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        user: {
          name: 'Hello Kitty',
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
    };

    return (
        <>   
            <UserInfo user={comment.user}></UserInfo>
            <div>{comment.text}</div>
            <div>{comment.date.toLocaleDateString()}</div>
        </>
    )
}
  


export default App;