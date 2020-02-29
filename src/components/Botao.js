//29/02/2020 - Thiago Marcondes de Sá
import React from 'react';

//Componente input, tipo botão
function Botao(props){
    let b =             
            <input type="button" 
                   value={props.valor}
                   class={props.classe}
                   onClick={()=>props.onClique()}
            />                    
      return b;
}


export default Botao;