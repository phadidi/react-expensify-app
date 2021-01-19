import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>{' '}
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>{' '}
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = () => ({
  startLogout: () => dispatchEvent(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
