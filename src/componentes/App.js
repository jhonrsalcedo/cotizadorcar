import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="col-12 col-lg-6 col-md-8 offset-md-3">

       
        <Header
         titulo="Cotizador de Seguro de Autos"
        />
        <Formulario />

        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
