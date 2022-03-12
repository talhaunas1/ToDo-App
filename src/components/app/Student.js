import { useState } from "react";
import React from 'react';
import {Data} from './Data'
import StudentList from './StudentList'

const Student = () => {
    const [students, setStudents] = useState(Data)
    return (
        <div>
            <table>
                <tr>
                    <th>no.</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>

                {
                    students.map((item,index)=>
                    {
                        return <StudentList student={item} no={index}/>
                    })
                }
            </table>
        </div>
    );
};

export default Student;