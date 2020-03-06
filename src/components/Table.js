import React from 'react';
import User from "../utils/User";
import TableRow from "./TableRow";
// Loop through User and return a new <TableRow /> each time...?
function Table() {
    return (
      <>
      <div class="container">
        <TableRow name="NAME: " dob="DOB: " email="EMAIL: " />
        <TableRow name={User[0].firstName + User[0].lastName} dob={User[0].dob} email={User[0].email}  />
        <TableRow name={User[1].firstName + User[1].lastName} dob={User[1].dob} email={User[1].email}  />
        <TableRow name={User[2].firstName + User[2].lastName} dob={User[2].dob} email={User[2].email}  />
      </div>  
      </>
    );
};
 
export default Table;








