import React,{Component} from 'react';
import {Navbar,NavbarBrand, Button} from 'reactstrap';

import './header.css';

export default class HomeHeader extends Component{
    render(){
        return(
            <div>
                <Navbar className='navbar' color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">
                        <span className="navbar-text">Curricul<span>On</span> Plataform</span>
                    </NavbarBrand>
                    <Button outline color="success" className="navbar-btn" href="/quem-somos">
                        <span>Quem Somos</span>
                    </Button>
                </Navbar>
            </div>
         );
    }
}
