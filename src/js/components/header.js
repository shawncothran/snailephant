import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import User from '../models/user';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let { email } = JSON.parse(localStorage.getItem('header'));

    let LoginStatus;
    let UserStatus;

      if (!User.access_token) {
        LoginStatus = <Link to="login">Login</Link>
        UserStatus = <Link to="register">Register</Link>
      } else {

        LoginStatus = <Link to="subscription">{ email }</Link>
        UserStatus = <Link to="/" onClick={() => {
          User.logout();
        }}>Log Out</Link>

    }
    return (
      <header className="homeHeader">
        <Link to="/" className="logo">
          <img className="logoImg" src="../assets/snailephant.png" alt="@c;" title="@c;" />
        </Link><span className="headerLogo">Snailephant!</span>
        <h1 className="headerTitle">
          Never forget to send a card.
        </h1>
        <nav className="usernav">
          {LoginStatus}
          {UserStatus}
        </nav>
      </header>
    )
  }
}

export default Header;
