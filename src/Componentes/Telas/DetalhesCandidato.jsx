import { useEffect } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export default function DetalhesCandidato(props) {

    useEffect(()=>{
        props.setCandidatoSelecionado(props.setCandidatoSelecionado);
    },[props.listaCandidatos,props.setCandidatoSelecionado])

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
                <Button className="mb-3" variant="primary" onClick={()=>{props.setDetalharCandidato(false)}}>Voltar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Foto</th>
                        <th>Proposta</th>
                    </thead>
                    <tbody>
                        {
                            props.listaCandidatos?.map((candidato)=>{
                                return(
                                    <tr>
                                        <td>{candidato.email}</td>
                                        <td>{candidato.nome}</td>
                                        <td><img style={{"height":"50px","width":"50px"}} src={candidato.avatar} alt="fotoEleitor" /></td>
                                        <td>{candidato.proposta}</td>
                                        <Row className="mb-3">
                                            <Form.Group>
                                                <Form.Label>Questionamentos</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    id = "questionamentos"
                                                    name = "questionamentos"
                                                    value={candidato.questionamentos}
                                                />
                                            </Form.Group>
                                        </Row>
                                        <td> <Button variant="outline-sucess" type="submit" >Enviar Questionamento</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
        </Container>
    );
}