import { useState } from "react";
import React from "react";
import './Student.css'
import { Data } from "./Data";
import StudentList from "./StudentList";

const Student = () => {
  const [students, setStudents] = useState(Data); //Data coming  from data.js which is set constant

  const [name, setName] = useState("")
  const [Batch, setBatch] = useState("")
  const [roll, setRoll] = useState("")
  const [stuClass, setStuClass] = useState("")

  const [errorMessage, seterrorMessage] = useState("") //error state
                                      //  button handler
                                      // in button handler we are creating a new object named student
                                      // taking new values from input and add them in new data 

const ctaHandler = () =>
{
  seterrorMessage("")                 // doing null the value of error functions ,if values filled then error msg disapear

  if (name !="" && Batch !="" && roll !="" && stuClass !="" ) {
    
    let student = {                    //object
        name,       
        batch:Batch,                    // Batch is a variable defiined in use state and batch is the variable defined in constant data
        roll,                          // and the value we get from input add in new constat data
        class:stuClass
    }

    console.log("student" ,student)
                                        //add new data in student list
    setStudents([...students , student])
    setName("");
    setBatch("");
    setRoll("");
    setStuClass("")

  }
  else{
    seterrorMessage("params can't be empty")
  }
}





  return (
    <div className="main">
        <div className="inner_div">
      <h1>New Student</h1>
      <input type="text" value={name} placeholder="enter your name" onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={Batch} placeholder="batch" onChange={(e)=>setBatch(e.target.value)}/>
      <br/>
      <br/>

      <input type="text" value={roll} placeholder="roll no" onChange={(e)=>setRoll(e.target.value)}/>
      
      <input type="text" value={stuClass} placeholder="class" onChange={(e)=>setStuClass(e.target.value)}/>
      <br/><br/>
      
      <button onClick={ctaHandler}>submit</button> <br />
      <p style={{backgroundColor:"red" ,color:"white"}}> 
      {
        errorMessage
      }
      </p>
      <br />
      </div>

      <hr />

      <h1>Adding Students in List</h1>
      <table>
        <tr>
          <th>no.</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Roll No</th>
          <th>Class</th>
        </tr>

        {/* using map loop for looping student list */}

        {students.map((item, index) => {
          return <StudentList student={item} no={index} />;
        })}
      </table>
    </div>
  );
};

export default Student;
