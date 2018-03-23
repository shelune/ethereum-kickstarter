import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class Header extends Component {
  render() {
    return (
      <Menu style={{marginTop: '10px'}}>
        <Link route='/'>
          <a className="item">Kick Start</a>
        </Link>

        <Menu.Menu position='right'>
          <Menu.Item>
            Campaigns
          </Menu.Item>

          <Link route='/campaigns/new'>
            <a className="item">Add</a>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;