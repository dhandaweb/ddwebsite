import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import constants from '../constants';


class Header extends React.Component {
  render() {
    return (

      <div className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
       
        <div className="mdl-layout--large-screen-only">
          <div className="logoContainer" ><img className="logo" src="/img/dd.png"></img> <h3> visuals</h3></div>
        </div>
      </div>

    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Header;
