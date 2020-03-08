import React, {useState} from 'react';
import User from "../utils/User";
import TableRow from "./TableRow";
// import Header from "./Header"
// Loop through User and return a new <TableRow /> each time...?
const sortTypes = {
  up: {
    action: 'sort-up',
    fn: (a, b) => a.net_worth - b.net_worth
  },
  down: {
    action: 'sort-down',
    fn: (a, b) => b.net_worth - a.net_worth
  },
  default: {
    action: 'sort',
    fn: (a, b) => a
  }
};


function Table() {
  const [currentSort, setCurrentSort] = useState({
    action: "",
    fn: () => {}
  });
// what am I sorting?
  const onSortChange = () => {
    // const { currentSort } = currentSort;
    let nextSort;
  
    if (currentSort === 'down') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'default';
    else if (currentSort === 'default') nextSort = 'down';
  
    setCurrentSort({
      currentSort: nextSort
    });
  };
// map over user to create <tablerow> 
  console.log(onSortChange)
    return (
       User.length > 0 && (
        <div class="container">
        <table className="table" >
         <tr className="row">
           <th className="col-md-4"><h6>{"NAME: "}
              <button onClick={onSortChange}>
                 <i className={`fas fa-${sortTypes.action}`} />
               </button></h6></th>
           <th className="col-md-4"><h6>{"DOB: "}</h6></th>
           <th className="col-md-4"><h6>{"EMAIL: "}</h6></th>
         </tr>
       </table>
        {[...User].sort(sortTypes.fn).map(p => (
          <TableRow name={p.firstName + p.lastName} dob={p.dob} email={p.email}  />
        ))}
       </div>
       )
    );
};
 
export default Table;








