import React from 'react';
import Header from './Header';
import SubNav from './SubNav';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from  './theme';
import MediaQuery from 'react-responsive';


const muiTheme = getMuiTheme(theme);

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      drawerOpen: true
    };
    this.switchDrawerState = this.switchDrawerState.bind(this);
  }

  switchDrawerState(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
			<MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <header>
            <Header/>
            <SubNav/>
            
          </header>
          <section>
              {this.props.children}
          </section>
          <Footer/>

        </div>
      </MuiThemeProvider>
    )
  }
}
