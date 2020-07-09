import React from 'react';
import { Menu, Icon} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px', marginBottom: '20px' }}>
      <Link route="/">
        <a className="item"><b>CrowdFund</b></a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item"><b>Projects</b></a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item"><Icon name='plus' /></a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
