import React, {Component} from 'react';

//Nota: Paréntesis ()en JavaScript se utiliza para las llamadas de función, para rodear las sentencias condicionales, o para agrupar para hacer cumplir orden de las operaciones.
//Los apoyos {} se utilizan durante la declaración de literales de objetos, o para encerrar bloques de código (definiciones de funciones, bloques condicionales, bucles, etc.).
//Soportes []están típicamente utilizan sobre todo para acceder a las propiedades de un objeto (o los elementos de una matriz), por lo que mylist[3]obtiene el cuarto elemento de la matriz.
class Formulario extends Component{
//los refs son para leer los valores de un campos de un formularios
//Crear los refs se pude crear de dos formas, declarando o por medio de constructor
    // primera forma
    // marcaRef = React.createRef();
    // yearRef = React.createRef();
    // planBasicoRef = React.createRef();
    // planCompletoRef = React.createRef();

    //Segunda forma Constructor objeto
    constructor(props){
        //otra nota: es necesario usar Super para poder usar la clausula “this” dentro del constructor y definir la variable de estado name.
        //para utilizar this se debe colocar el metodo super()
        //Resumen: Super -> habilita this dentro del constructor del componente -- Super(props) -> habilita this.props dentro del constructor  del componente
        super(props);
        this.marcaRef = React.createRef();
    this.yearRef = React.createRef();
    this.planBasicoRef = React.createRef();
    this.planCompletoRef = React.createRef();
    }

    //se crea el metodo antes del render
    // para prevenir el llamado a la url utilizamos e y preventDefault metodo
    //cotizarSeguro(e){ // bind(this)
    cotizarSeguro = (e) =>{
        e.preventDefault();

        //leer el plan para que pueda seleccionar y mostrar
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        
        // obtener los datos
        // console.log(this.marcaRef.current.value);

        // crear el objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan:  plan
        }
        // console.log(infoAuto);
         // para poder enviar la informacion al padre (App) <Formulario /> se debe llamar un metodo(cotizarSeguro) en el padre
        
        // enviarlo al componente principal
            //le pasamos desde el padre al hijo this.props llamamos el objeto y pasamos por el la infoAuto estos datos se iran para el padre atravez del metodo declarado el cual podemos llamar datos como parametros y puedas mostrarse desde App.js
            this.props.cotizarSeguro(infoAuto);

        //resetear el formulario (opcional), por experiencia de usuario en caso quiera cambiar alguna opcion en el formulario 
        // se puede comentar esta opcion
        // e.currentTarget.reset()    
    }
    render() {
        return (
            // <form className="form-group row card border-primary" onSubmit={this.cotizarSeguro.bind(this)}>
            <form className="form-group row card border-primary" onSubmit={this.cotizarSeguro}>
                <div className="col-md-8 ">
                    <label className="col-md-6 col-form-label">Marca</label>
                    <select className="col-md-5 custom-select" name="marca" ref={this.marcaRef} >
                    
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
                
                <div className="col-md-8">
                    <label className="col-md-6 col-form-label">Año</label>
                    <select className="col-md-5 custom-select" name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="col-md-8 pb-3">
                    <label className="col-md-3 col-sm-3 col-form-label">Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.planBasicoRef} /> Básico &nbsp;&nbsp;
                    <input type="radio" name="plan" value="completo" ref={this.planCompletoRef} /> Completo
                    
                </div>
                <div className="col-md-12 text-center mb-3">
                <button type="submit" className=" col-md-6 btn btn-primary col-md-8 font-weight-bold">COTIZAR</button>
                </div>
                
            </form>
        );
    }
}
export default Formulario;