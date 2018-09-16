import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import constants from '../constants';


class Footer extends React.Component {
  render() {
    return (
      <div className="mdl-mega-footer">

        <div className="mdl-mega-footer--bottom-section">
          <div className="mdl-logo">
            Call us +61 0490 080 541
          </div>
          <ul className="mdl-mega-footer--link-list">
            <li><a >Web Starter Kit</a></li>
            <li><a >Help</a></li>
            <li><a >Privacy and Terms</a></li>
          </ul>
        </div>
      </div>

    )
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Footer;
