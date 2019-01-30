import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';

import '../css/custom.css';
class Resumen extends Component{

    mostrarResumen = () =>{
        const {marca, year, plan} = this.props.datos;
        //se le crea una condicion para no mostrar y si ya se testiaron los valores este se mostrara
        if(!marca || !year || !plan) return null;
            return(
                <div className="text-center alert alert-primary text-monospace ">
                <h4>Resumen de Cotizacion</h4>
                <ul className="list-unstyled font-car">
                <li><b>Marca:</b> {primeraMayuscula(marca)}</li>
                <li><b>Plan:</b> {primeraMayuscula(plan)}</li>
                <li><b>Anio del Auto:</b> {year}</li>
                
                </ul>
            </div>
            )
    }
    render() {
        
       
        return(
           
            <div>
                {this.mostrarResumen()}
                {/* <div className="alert alert-dismissible alert-success text-center">
                <Resultado
                //para llamar a resultado se llama por this.props ya que este heredara de state desde el componente padre apps que ya esta definido
                    resultado={this.props.resultado}
                />
                </div> */}
            </div>
        )
    }
}
export default Resumen;