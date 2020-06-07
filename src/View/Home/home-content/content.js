import React,{Component, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import './content.css';

const HomeContent = (props) => {
    const {
      buttonLabel,
      className
} = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return(
            <div className="home-content-a">
                <h1>Buscando a vaga ideal?</h1>
                <br/>
                Aqui na <strong>CurriculOn Plataform&reg;</strong> você encontra!
                <br/>
                <Button color="success" size="lg" block onClick={toggle}>{buttonLabel}ENCONTRAR SUA VAGA!</Button>
                <br/>
                Com um sistema de busca simplificado você pode, com apenas uma tela, preencher 
                as informações do emprego dos seus sonhos e realizar a busca.<br/>
                <br/>
                Esta busca é equivalente a busca realizada em diferentes sites de emprego.
                Porém, ao invés de realizar a busca site-por-site você realiza uma busca apenas,
                que vai, de forma automatizada, checar em diferentes sites e retornar a você apenas
                os melhores resultados.

                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Preencha aqui suas informações</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <InputGroupAddon name="titulo_vaga" addonType="prepend" placeholder="ex.: Programador">VAGA</InputGroupAddon>
                            <Input />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon name="espec_vaga" addonType="prepend" placeholder="ex.: Programador">DETALHES</InputGroupAddon>
                            <Input />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon name="loc_vaga" addonType="prepend" placeholder="ex.: Programador">LOCALIZAÇÃO</InputGroupAddon>
                            <Input />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="success" onClick={toggle}>BUSCAR MINHA VAGA</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
}

export default HomeContent;