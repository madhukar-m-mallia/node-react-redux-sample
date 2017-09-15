import React from 'react';
import { Link } from 'react-router';

import NavbarComponent from './Navbar';
import {HomeContainer} from './Home';

export default class LayoutContainer extends React.Component {
    render() {
        return (
            <div>
              <NavbarComponent></ NavbarComponent>
              <HomeContainer></HomeContainer> 
            </div>
        );
    }
}
