import React from 'react';

function Header() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark row" >
          <a className="navbar-brand col-md-6" href="#">Directory</a>
          <div className="col-md-6">
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
          
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
      </nav>
    );
};


export default Header;