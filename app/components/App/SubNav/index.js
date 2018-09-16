import React from 'react';
import { Drawer, MenuItem, AppBar, IconButton } from 'material-ui';
import { Link } from 'react-router';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import constants from '../constants';

class SubNav extends React.Component {

  constructor(props){
    super(props);
    this.tap = this.tap.bind(this);
  }

  tap(path){
    if(path)
      this.context.router.push(path);

    if(this.props.onMenuItemClick)
      this.props.onMenuItemClick();
  }

  render() {
    return (

      <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
      <a onTouchTap={()=>this.tap('/home')} className="mdl-layout__tab is-active">Home</a>
      <a onTouchTap={()=>this.tap('/about')} className="mdl-layout__tab">About</a>
      <a onTouchTap={()=>this.tap('/visuals')} className="mdl-layout__tab">Visual</a>
      <a onTouchTap={()=>this.tap('/faq')} className="mdl-layout__tab">FAQ</a>
      <a onTouchTap={()=>this.tap('/contact')} className="mdl-layout__tab">Contact</a>
     
    
    </div>
    );
  }
}


SubNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SubNav;
