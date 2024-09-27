import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [candidatoSelecionado,setCandidatoSelecionado] = useState(false)
    const [listaCad,setListaCand] = useState(listaCandidatos)
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato  listaCad={listaCad}
                                        candidatoSelecionado={candidatoSelecionado}
                                        setCandidatoSelecionado={setCandidatoSelecionado}
                                        setDetalharCandidato={setDetalharCandidato}
                                        setListaCand={setListaCand}/>
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos} 
                                    candidatoSelecionado={candidatoSelecionado}
                                    setCandidatoSelecionado={setCandidatoSelecionado}
                                    setDetalharCandidato={setDetalharCandidato}/>
                )
            }
        </Pagina>
    );
}