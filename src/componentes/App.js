import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
class App extends Component {
  // dos formas de llamar con el constructor o solo llamar el objeto
  constructor(props){
    super(props);
    this.state = {
    resultado:'',
    datos:{}
  }
  };

  // state = {
  //   resultado:'',
  //   datos: { }
  // }

  cotizarSeguro = (datos) =>{
    // console.log(datos);
    // para realizar los calculos utilizamos el destructuring
    const {marca, plan, year} = datos; // donde datos continene lo que se le paso a cotizarSeguro = infoAuto


    //Agregar una base de 2000, 
    let resultado = 2000;

    // Obtener la diferencia de a~os y por cada a~os resta el 3%
    const diferencia = obtenerDiferenciaAnio(year);

    
    // por cada a~o restar el 3% al valor del seguro
    resultado -=((diferencia * 3) * resultado ) / 100;

    //Americano 15% Asiatico %5 y europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //el plan del auto, el basico incrementa el valor 20% y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    // dependiendo del plan incrementar
    
    resultado = parseFloat( incrementoPlan * resultado).toFixed(2);

    //Crear objeto para resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }

 // ya tenemos los costos
     this.setState({
       resultado : resultado,
       datos: datosAuto
     }) 
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="col-12 col-lg-6 col-md-8 offset-md-3">

       
        <Header
         titulo="Cotizador de Seguro de Autos"
        />
        <Formulario
        //nota no es necesario llamar this.props ya que estamos desde el padre
          cotizarSeguro={this.cotizarSeguro}
        />
        <Resumen
          datos={this.state.datos}
          resultado={this.state.resultado}
        />
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
