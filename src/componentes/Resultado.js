import React, {Component} from  'react';


class Resultado extends Component{
    render(){
        const resultado = this.props.resultado;
        const mensaje =(!resultado) ? 'Elije Marca, Anio y Tipo de Seguro' : 'El total es: $';
        return(
            <div className="alert alert-dismissible alert-success text-center">
                <p>{mensaje}{resultado}</p>
            </div>
        )
    }
}

export default Resultado;