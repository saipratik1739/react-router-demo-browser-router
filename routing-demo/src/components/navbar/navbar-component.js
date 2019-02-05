import React, { Component } from 'react';
import '../navbar/navbar.css';
import { Link, withRouter } from 'react-router-dom';

class NavbarComponent extends Component {
    constructor(props) {
        super(props)
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(event) {
        const currentNavigationURL = event.currentTarget.getAttribute('navigate-url');
        this.props.history.push(currentNavigationURL);
    }
  render() {
    return (
      <div className="nav-bar-container">
            <ul className="hide-bullet disp-inline-blk width100">
                {/* <li className="disp-inline-blk mrgnRt20"><Link to='/'>Home</Link></li>
                <li className="disp-inline-blk mrgnRt20"><Link to='/about'>About</Link></li>
                <li className="disp-inline-blk mrgnRt20"><Link to='/topics'>Topics</Link></li> */}

                <li onClick={this.handleNavigation} className="disp-inline-blk mrgnRt20" navigate-url="/home">Home</li>
                <li onClick={this.handleNavigation} className="disp-inline-blk mrgnRt20" navigate-url="/about"> About</li>
                <li onClick={this.handleNavigation} className="disp-inline-blk mrgnRt20" navigate-url="/topics">Topics</li>
            </ul>
      </div>
    );
  }
}

export default withRouter(NavbarComponent);