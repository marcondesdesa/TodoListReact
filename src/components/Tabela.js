//29/02/2020 - Thiago Marcondes de Sá
import React from 'react';
import Table from '@material-ui/core/Table';
import Botao from './Botao';

function Tabela(props){
    let l = 
      <div>                  
        <Table striped bordered hover size="sm"> 
            <thead>                
                <tr>              
                    <th>Código</th>
                    <th>Valor</th>
                    <th> </th>
                    <th> </th>              
                </tr>               
            </thead>
            <tbody>               
                { props.dados.map(dado => { let h =  
                                                <tr>                                                                                 
                                                    <td>{ dado.posicao } </td>
                                                    <td>{ dado.valor }   </td>
                                                    <div>
                                                        <td>                    
                                                            <Botao classe="cor2"
                                                                   valor="Alterar"
                                                                   onClique={() => props.onAlterar(dado)}
                                                            /> 
                                                        </td>
                                                        <td>
                                                            <Botao classe="cor3"
                                                                   valor="Excluir" 
                                                                   onClique={() => props.onExcluir(dado)}
                                                            />  
                                                        </td>   
                                                    </div> 
                                                </tr>                                                                                                                                               
                                            return h;
                                            }
                                    )
                }            
            </tbody>
        </Table>
      </div>
      
      return l;
}


export default Tabela;