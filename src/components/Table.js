import React from 'react';
import User from "../utils/User";
import TableRow from "./TableRow";
// import Header from "./Header"

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.userId - b.userId
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.userId - a.userId
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

class Table extends React.Component {
	// declaring the default state
	state = {
		currentSort: 'default'
	};

	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};

	render() {
		// const { User } = this.props;
		const { currentSort } = this.state;

		return (
			User.length > 0 && (
      <div className="container row justify-content-center">
				<table className='text-left'>
					<thead>
          <tr className="row">
           <th className="col-md-4"><h6>{"NAME: "}
              <button onClick={this.onSortChange}>
                 <i className={`fas fa-${sortTypes[currentSort].class}`} />
               </button></h6></th>
           <th className="col-md-4"><h6>{"DOB: "}</h6></th>
           <th className="col-md-4"><h6>{"EMAIL: "}</h6></th>
          </tr>
					</thead>
					<tbody>
						{[...User].sort(sortTypes[currentSort].fn).map(p => (
              <TableRow name={p.firstName + p.lastName} dob={p.dob} email={p.email}  />
						))}
					</tbody>
				</table>
      </div>
			)
		);
  }
};

export default Table;