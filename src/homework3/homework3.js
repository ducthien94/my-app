import React from "react";

function Delete(e) {
  // Trỏ đến tr của từng nút Delete
  let tr = e.target.parentElement.parentElement;
  //Xoá tr đó
  tr.remove();
}

function Row(props) {
  return (
    <>
      <tr>
        <td id={props.id}>{props.student.name}</td>
        <td>
          <button onClick={Delete}>Delete</button>
        </td>
      </tr>
    </>
  );
}

let count = 0;
function handleClick() {
  count++;
  if (count % 2 === 1) {
    document.getElementById("btn").innerText = "OFF";
  }
  if (count % 2 === 0) {
    document.getElementById("btn").innerText = "ON";
  }
}

function App() {
  const students = [
    { name: "Student1" },
    { name: "Student2" },
    { name: "Student3" }
  ];

  return (
    <>
      <h3>ON/OFF Button</h3>
      <button id="btn" onClick={handleClick}>ON</button>
      <p>----------------------------</p>

      <h3>Delete row</h3>
      <table>
        <tbody>
          {students.map((student, index) => (
            <Row key={index} id={index} student={student}></Row>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
