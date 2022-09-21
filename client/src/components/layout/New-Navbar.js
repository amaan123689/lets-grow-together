import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './New-Navbar.css';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/ide">Compiler</Link>
      </li>
      <li class="nav-item">
        <Link to="/messenger">Chat</Link>
      </li>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      {/* <li>
      <Link to="/">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
      </Link>    
      </li> */}
    </ul>
  );

  const guestLinks = (
    <ul>
      {/* <li>
        <Link to="/profiles">Developers</Link>
      </li> */}
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Let's Grow Together
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
