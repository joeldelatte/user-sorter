import React from 'react';

// const styles = {
//   width: {
//     width: "100%"
//   },



// }

function TableRow(props) {
    return (
      <>
      <div class="container">
        <table className="table" >
          <tr className="row">
            <th className="col-md-4"><h6>{props.name}</h6></th>
            <th className="col-md-4"><h6>{props.dob}</h6></th>
            <th className="col-md-4"><h6>{props.email}</h6></th>
          </tr>
        </table>
      </div>  
      </>
    );
};
 
export default TableRow;