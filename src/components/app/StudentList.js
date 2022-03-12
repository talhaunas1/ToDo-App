import React from 'react';

const StudentList = ({student,no}) => {
    return (
        
             <tr>
                 <td>{no}</td>
                 <td> {student.name} </td>
                 <td> {student.batch} </td>
                 <td> {student.roll_no} </td>
                 <td> {student.class} </td>
             </tr>
    
    );
};

export default StudentList;