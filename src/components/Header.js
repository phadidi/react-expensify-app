import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header-layout">
    <div className="content-container">
      <div className=".header-layout__content">
        <Link className="header-layout__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>{' '}
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
        <button
          className="button-layout button-layout--link"
          onClick={startLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
