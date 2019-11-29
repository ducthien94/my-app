import React from "react";

class Row  extends React.Component {
 render() {
   const {name} = this.props.student;
   const index = this.props.index;
    return (
      <tr data-index={index}>
        <td>{name}</td>
        <td>
          <button onClick={e => this.props.deleteRow(e, index)}>Delete</button>
        </td>
      </tr>
    );
  }
 }

class App extends React.Component {
 
  Click(e) {
    let status = e.target.textContent;
    switch (status) {
      case "ON":
        e.target.textContent = "OFF";
        break;
      case "OFF":
        e.target.textContent = "ON";
        break;
      default:
        return;
    }
  };

  deleteRow(e, index) {
    e.target.closest(`[data-index="${index}"]`).remove();
  }

  render() {
    const students = [
      { name: "Student1" },
      { name: "Student2" },
      { name: "Student3" }
    ];
    return (
      <>
        <h3>ON/OFF Button</h3>
        <button onClick={this.Click}>ON</button>
        <p>---------------------</p>
        <h3>Delete row</h3>
        <table>
          <tbody>
            {students.map((student, index) => <Row key={index} index={index} student={student} deleteRow={this.deleteRow}></Row>)}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;

