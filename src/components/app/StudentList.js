import React from 'react';

const StudentList = ({student,no,deleteHandler,UpdateHandler }) => {
   
    return (
        
             <tr>
                 <td>{no}</td>
                 <td> {student.name} </td>
                 <td> {student.batch} </td>
                 <td> {student.roll} </td>
                 <td> {student.class} </td>
                 <td>
                     <button onClick={ () => deleteHandler(no)}>
                         Delete
                    </button>
                 </td>
                 <td>
                     <button onClick={ (student) => UpdateHandler()}>
                         Update item
                    </button>
                 </td>
             </tr>
    
    );
};

export default StudentList;