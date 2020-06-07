import React, {Component} from 'react';

import './footer.css';

export default class HomeFooter extends Component{
    render(){
        return(
            <div className="home-footer">
                <div className="footer-curriculon">
                    <a href="/quem-somos">Developed by <span>Curricul<strong>On</strong></span> Soluções e Consultoria Ldta</a>
                </div>
                <div className="using-links">
                    <strong>USING: {' '}</strong>
                    <a href="https://pt-br.reactjs.org/" className="footer-react">
                        <img src="https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png" width="5%"/>
                        React JS
                    </a>
                    {' '}
                    <a href="https://getbootstrap.com/" className="footer-bootstrap">
                        <img src="https://www.2net.com.br//Repositorio/251/Publicacoes/28417/f000c337-d.png" width="5%"/>
                        Bootstrap
                    </a>
                    {' '}
                    <a href="https://reactstrap.github.io/" className="footer-react">
                        <img src="https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800" width="5%"/>
                        Reactstrap
                    </a>
                </div>
            </div>
        );
    }
}