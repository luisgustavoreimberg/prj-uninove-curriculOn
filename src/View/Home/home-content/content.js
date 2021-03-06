import React,{Component, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import './content.css';

import img_info from "../../resources/images/img_info.jpg";
import img_indeed from "../../resources/images/img_indeed_busca.jpg";
import img_trabalhaBrasil from "../../resources/images/img_trabalhaBrasil_busca.jpg";


const HomeContent = (props) => {
    const {
      buttonLabel,
      className,
} = props;

const [modal, setModal] = useState(false);
const toggle = () => {
    setModal(!modal);
    setVaga("");
    setDetalhes("");
    setSalario(0);
    setCidade("");
    setUf("");
    setBtn(false);
}


const [vaga, setVaga] = useState("");
const defineVaga = ev => {setVaga(ev.target.value); checaDadosParaPesquisa()}

const [detalhes, setDetalhes] = useState("");
const defineDetalhes = ev => {setDetalhes(ev.target.value); checaDadosParaPesquisa()}

const [salario, setSalario] = useState(0);
const defineSalario = ev => {setSalario(ev.target.value); checaDadosParaPesquisa()}

const [cidade, setCidade] = useState("");
const defineCidade = ev => {setCidade(ev.target.value); checaDadosParaPesquisa()}

const [uf, setUf] = useState("");
const defineUf = ev => {setUf(ev.target.value); checaDadosParaPesquisa()}

const [btnEnabled, setBtn] = useState(false);
const checaDadosParaPesquisa = () =>{
    if(vaga != undefined && vaga != "" &&
    detalhes != undefined && detalhes != "" &&
    salario >= 0 && salario <= 9999999 &&
    cidade != undefined && cidade != "" &&
    uf != undefined && uf != ""){
        setBtn(true);
        return true;
    }else{
        setBtn(false);
        return false;
    }
}

return(
            <div className="home-content-a">
                <h1>Buscando a vaga ideal?</h1>
                <br/>

                Aqui na <strong>CurriculOn Plataform&reg;</strong> você encontra!
                <br/>

                <Button className="btn-buscar-vaga" color="success" size="lg" block onClick={toggle}>
                    {buttonLabel}<span className="txt-buscar-vaga">ENCONTRAR SUA VAGA!</span>
                </Button>
                <br/>

                Com um sistema de busca simplificado você pode, com apenas uma tela, preencher 
                as informações do emprego dos seus sonhos e realizar a busca.
                <br/>

                <div className="img_form_pesquisa">
                <img src={img_info} width='40%'/>
                </div>
                <br/>

                Esta busca é equivalente a busca realizada em diferentes sites de emprego.
                <br/>

                <div className='img_sites_externos'>
                    <img src={img_indeed} alt="Trabalha Brasil" class="rounded mx-auto d-block" width="50%"/>
                    <img src={img_trabalhaBrasil} class="rounded mx-auto d-block" width="50%"/>
                </div>
                <br/>

                Porém, ao invés de realizar a busca site-por-site você realiza uma busca apenas,
                que vai, de forma automatizada, checar em diferentes sites e retornar a você apenas
                os melhores resultados.


                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>
                        Preencha aqui suas informações
                    </ModalHeader>
                    
                    <ModalBody>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">VAGA*</InputGroupAddon>
                            <Input onChange={defineVaga} name="titulo_vaga" type="text" placeholder="Ex.: Programador"/>
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">DETALHES</InputGroupAddon>
                            <Input onChange={defineDetalhes} name="espec_vaga" type="text" placeholder="Ex.: Web React"/>
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon name="salario_vaga" addonType="prepend" placeholder="ex.: Programador">SALÁRIO R$*</InputGroupAddon>
                            <Input onChange={defineSalario} type="number"
                            min="0,00" max="9999999,00" maxLength="11" step="1.00"
                            placeholder="4.000,00"/>
                        </InputGroup>
                        <span className="txt-example">de 0 a 9999999,00</span>
                        <br/><br/>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">CIDADE*</InputGroupAddon>
                            <Input onChange={defineCidade} name="cidade_vaga" type="text" placeholder="São Paulo"/>
                            <InputGroupAddon addonType="prepend">UF*</InputGroupAddon>
                            <Input onChange={defineUf} name="uf_vaga" type="text" maxLength="2" placeholder="SP"/>
                        </InputGroup>
                        
                    </ModalBody>
                    <ModalFooter>
                    <Button disabled={!btnEnabled?'true':''} color="success" onClick={toggle}>BUSCAR MINHA VAGA</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancelar</Button>
                    <span className="modal-erro-preenchimento" hidden={btnEnabled?'true':''}>PREENCHA CORRETAMENTE OS DADOS OBRIGATÓRIOS(*)</span>
                    </ModalFooter>
                </Modal>
            </div>
        );
}

export default HomeContent;