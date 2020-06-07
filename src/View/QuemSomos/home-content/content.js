import React,{Component, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import './content.css';

import img_info from "../../resources/images/img_info.jpg";
import img_indeed from "../../resources/images/img_indeed_busca.jpg";
import img_trabalhaBrasil from "../../resources/images/img_trabalhaBrasil_busca.jpg";

const HomeContent = (props) => {
    const {
      buttonLabel,
      className
} = props;

return(
        <div className="home-content-a">
            <h1>A CurriculOn</h1>
            <br/>
            <p>
                Somos uma empresa focada no desenvolvimento de soluções e serviços para
                assistencia no assunto relacionado a busca profissional.
                Buscamos utilizar a tecnologia como nossa maior ferramenta, tanto no
                desenvolvimento de soluções, quanto na organização interna da empresa.
                Temos como objetivo principal, desenvolver soluções práticas e eficientes
                para auxiliar aos nossos usuários a encontrar a melhor vaga no local mais adequado.
                Minimizando a perda de tempo, os anúncios e toda burocracia de registros, requisitada
                na maioria das plataforma de busca de vaga.
            </p>
            <p className="mvv">
                <h2>MISSÃO</h2>
                A CurriculOn tem como missão oferecer soluções inovadoras, diretas e tecnológicas para o 
                mercado de busca e consultoria de empregos. Sendo abordado todo o mercado que busca recolocação, 
                consultoria e/ou oportunidades profissionais. A empresa tem como ambição, ser reconhecida como 
                a fornecedora de soluções diretas, fáceis e de baixo custo para todas as áreas da busca por empregos, 
                inovando sempre em tecnologias para direcionar melhor e economizar o tempo dos nossos usuários 
                em suas atividades de busca profissional.<br/><br/>

                <h2>VISÃO</h2>
                A CurriculOn tem como visão ser a empresa de referência em consultoria de empregos, 
                oferecendo sempre aos usuários uma opção tecnológica, fácil, atrativa e direcionada ao usuário.<br/><br/>

                <h2>VALORES</h2>
                “Cliente em primeiro lugar” é o principal valor da CurriculOn, 
                onde sempre pensamos no melhor para o cliente antes, durante e depois do desenvolvimento de uma solução. 
                Buscamos economizar o tempo e os recursos de nossos clientes de maneira ética, segura e inteligente.
            </p>
        </div>
        );
}

export default HomeContent;