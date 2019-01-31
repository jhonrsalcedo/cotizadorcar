import React, {Component} from  'react';
import {formatNumber} from '../helper';

class Resultado extends Component{
    render(){
        
        const resultado = this.props.resultado;
        
        const mensaje =(!resultado) ? 'Elije Marca, Anio y Tipo de Seguro' : 'El total es: $';
        const resultadoFormato = formatNumber(resultado);
         
        return(
            <div className="alert alert-dismissible alert-success text-center">
                <p>{mensaje}{resultadoFormato}</p>
            </div>
        )
    }
}

export default Resultado;