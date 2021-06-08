/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Welcome } from './dashboard';

const Dashboard: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#589bd4"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="" alt="" width="30" height="24" />
          </a>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const Title: React.FC = () => {
  return <Welcome> Welcome To Helper Cadd</Welcome>
};

export { Dashboard, Title };