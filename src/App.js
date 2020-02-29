//29/02/2020 - Thiago Marcondes de Sá
import React from 'react';
import './App.css';
import './css/estilo.css'
import Botao from './components/Botao';
import Tabela from './components/Tabela';


export default class App extends React.Component {

    constructor (){
        super();
        this.state = {
          item  : "",
          alt   : "",
          qtde  : 3, 
          lista : [ {
                        posicao : 1,
                        valor   : "Tarefa 1"
                    },
                    {
                      posicao : 2,
                      valor   : "Tarefa 2"
                    },
                    {
                      posicao : 3,
                      valor   : "Tarefa 3"
                    }
                  ]
        }    
    }

    gravar = () => {        
      //Verifica se preencheu o texto
      if (this.state.item!=""){         
        //propriedade "alt" identica se esta em modo de edicao  -> Alt="" É inclusão
        if (this.state.alt==""){
          this.state.qtde += 1;
          //Adiciona o valor na array (lista)
          this.state.lista.push(  { posicao : this.state.qtde,
                                    valor :  this.state.item 
                                  }
                                );
          this.setState({        
              item : "",
              alt  : "",
              qtde : this.state.qtde,
              lista: this.state.lista
          });
        }
        else {
          //metodo find ja retorna o objeto, basta atribuir o novo valor ja carregado na variavel item do state
          this.state.lista.find( (l) => { return l.posicao == this.state.alt }).valor = this.state.item;
          this.setState({        
                          item : "",
                          alt  : ""
                        });
        }
      }      
    }

    alterar = (it) => {
      this.setState({
                      item : it.valor,
                      alt : it.posicao
                    });
    }

    excluir = (it) => {
      let novalista = this.state.lista.filter( (l) => {return l.posicao != it.posicao});
      this.setState(
                        {
                          item : "",
                          alt  : "",
                          qtde : this.state.qtde,
                          lista : novalista
                        }
                    )
    }

    render (){
      let html = 
          <div>
            <h1>Todo-List</h1>
            <div>
              <input type="text" value={this.state.item} onChange={(e) => this.setState({item:e.target.value}) } autoFocus/>             
              <Botao valor="Gravar" classe="cor1" onClique={ () => this.gravar()}/>
            </div>
            <br></br>
            <div>
              <Tabela dados={this.state.lista} onAlterar={(item)=> this.alterar(item)} onExcluir={(item)=> this.excluir(item)}/>
            </div>               
            <div>
                <p>by: Thiago Marcondes de Sá</p>
            </div>       
          </div>
          
      return html;
    }


    
  }
