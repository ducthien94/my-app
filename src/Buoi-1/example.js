import React from "react";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  user: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

class Avatar extends React.Component {
  render() {
    return <img src={this.props.url} alt="" />;
  }
}

class Name extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class Text extends React.Component {
    render() {
    return <div>{this.props.text}</div>
    }
}

class Today extends React.Component {
    render() {
        return <div>{this.props.day.toLocaleDateString()}</div>
    }
}

class UserInfo extends React.Component {
  render() {
    return (
      <>
        <Avatar url={this.props.user.avatarUrl}></Avatar>
        <Name name={this.props.user.name}></Name>
      </>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <UserInfo user={this.props.comment.user}></UserInfo>
        <Text text={this.props.comment.text}></Text>
        <Today day={this.props.comment.date}></Today>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Comment comment={comment}></Comment>;
  }
}
 

export default App;
