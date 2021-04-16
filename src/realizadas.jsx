/*import React, { Component } from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

class App extends Component {

  state = { numero: 0 }

handleSuma = () => {
  this.setState({numero: this.state.numero + 1})
}

handleResta = () => {
  this.setState({numero: this.state.numero - 1})
}

  render() {        
    return (
      <div>
        <h1>Contador</h1>
        <div className='contenedor'> 
        <IconButton onClick={this.handleSuma} aria-label="delete" color="secondary">
        <AddIcon />
        </IconButton>
    <p>{this.state.numero}</p>
        <IconButton onClick={this.handleResta} disabled={this.state.numero < 1} aria-label="delete" color="primary">
         <RemoveIcon />
        </IconButton>
        </div>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClaseClass from './ejemplo'

class App extends Component {

  state = { lista: [], texto: '' }

  handleTexto = (e) => {
    this.setState({
      texto: e.target.value
    })
    // console.log(e.target.value)
  }
  handleBoton = () => {
    this.setState({
      lista: [...this.state.lista, this.state.texto],
      texto: ''

    })
    //console.log('click')
  }

  render() {
    return (

      <div>
        <h1>Lista de Compras</h1>
        <div className='contenedorLista'>
          <TextField id="standard-basic" color="secondary" onChange={this.handleTexto} value={this.state.texto} label="Ingresa Articulo" />
          <Button color="secondary" onClick={this.handleBoton} disabled={this.state.texto.length<1}>Agregar</Button>
          <ul>{this.state.lista.map((item, index) => (
            <li key={index}>{item}{console.log(item)}</li>
          ))}
          </ul>
        </div>
        <ClaseClass />
      </div>

    );

  }
}

export default App; 




import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

class botones extends Component {
  
  state = { nombre: true }

  handleChange = () => {

if(this.state.nombre === true){
this.setState ({
 nombre: false
})
}
else{
this.setState({
  nombre: true
})
}
//console.log(this.setState)
  }

  render() { 
    return ( 
      <div>
<Button variant="outlined" color='secondary' onClick={() => this.handleChange()}>Cambiar</Button>
<div>
  {this.state.nombre === true ? <div><CheckIcon/></div> : <div><ClearIcon/></div>}
</div>
        
        
      </div>
     );
  }
  
}
 
export default botones;



/* 
  <div>
  {this.state.nombre === true ? <div>lo que sea</div> : <div> lo otro</div>}
  </div>
*/
/*
import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class form extends Component {
  state = { 
    lista: [
      { nombre: 'arepa', ingredientes: 'harina' }
    ], 
    nombreDos: '', 
    ingredientesDos: '' 
  }

  handleAgregar = (e) => {
    if (e.target.id === 'nombre') {
      this.setState({
        nombreDos: e.target.value
      })
    }
    else if(e.target.id === 'ingredientes') {
      this.setState({
        ingredientesDos: e.target.value,

      })
    }

   // console.log(e.target.value.ingredientesDos, e.target.value.nombreDos)
  }

  handleBoton = () => {
    this.setState({
      lista: [...this.state.lista, { nombre: this.state.nombreDos, ingredientes: this.state.ingredientesDos }]
    })
  }

  render() {
    //console.log(this.state)
    return (

      <div>
        <h1>Recetas</h1>
        <div>
          <h3>Nombre</h3>
          <TextField id="nombre" color='secondary' value={this.state.nombreDos} onChange={this.handleAgregar} variant="outlined" />
        </div>
        <div>
          <h3 >Ingredientes</h3>
          <TextField id="ingredientes" color='secondary' value={this.state.ingredientes} onChange={this.handleAgregar} multiline variant="outlined" />
          <Button variant="outlined" color='secondary' onClick={this.handleBoton}>Agregar</Button>
        </div>
        <ul>

          {this.state.lista.map((item, index) => (
            <li key={index}>Nombre: {item.nombre}, Ingredientes: {item.ingredientes}</li>
          ))}



        </ul>

      </div>
    );

  }

}

export default form;




import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class Lista extends Component {
  state = {
    series: [{ serie: 'WandaVison', calidad: true , id: 3264}, { serie: 'Masterchef', calidad: true , id: 3268},
    { serie: 'Pokemon', calidad: false , id: 3744}, { serie: 'Sabrina', calidad: true , id: 3294 }, { serie: 'You', calidad: false , id: 3287},
    { serie: 'Lupin', calidad: false , id: 8664}, { serie: 'Gambito', calidad: true , id: 3285}],
    letras: '', seriesDos: { serieNueva: '', calidadNueva: '' , idNuevo: '' }
  }

  handleFiltro = (e) => {
    this.setState({
      letras: e.target.value
    })
  }

  handleAscendente = () => {
    this.state.series.sort((a, b) => {

      if (a.serie > b.serie) {
        return 1;
      }
      if (a.serie < b.serie) {
        return -1;
      }
      return 0;
    })

    this.setState({
      serie: this.state.series
    })
    // console.log(this.state.series)
  }

  handleDescendente = () => {
    this.state.series.sort((a, b) => {

      if (b.serie > a.serie) {
        return 1;
      }
      if (b.serie < a.serie) {
        return -1;
      }
      return 0;
    })

    this.setState({
      serie: this.state.series
    })
    //  console.log(this.state.series)
  }
  handleNuevaSerie = (e) => {
    this.setState({
      seriesDos: { ...this.state.seriesDos, serieNueva: e.target.value },
    })
    //console.log(e.target.value)
  }

  handleSeleccion = (e) => {
    this.setState({
      seriesDos: { ...this.state.seriesDos, calidadNueva: e.target.value },

    })
    // console.log(e.target.value)
  }

  handleAgregar = () => {
      
    this.setState({
      series: [...this.state.series, { serie: this.state.seriesDos.serieNueva, calidad: this.state.seriesDos.calidadNueva , id : Math.floor(Math.random() * 1000000)}]
    }, () => {
    //  console.log(this.state.series)

    })
  }

  handleBorrar = (e) => {
  const idParaBorrar = e.currentTarget.id;
  const newSeries = this.state.series.filter((item) => item.id.toString() !== idParaBorrar.toString())
  this.setState({
    series: newSeries
  })
  }


  render() {
    //console.log(this.state.letras)

    return (
      <div>
        <h1>Series de 2021</h1>
        <TextField onChange={this.handleNuevaSerie} label="Nueva Serie" color='secondary' variant="outlined" />

        <FormControl component="fieldset">
          <FormLabel component="legend" color="secondary"> Calidad</FormLabel>
          <RadioGroup row aria-label="position" name="position" onChange={this.handleSeleccion}>
            <FormControlLabel value="true" control={<Radio color="secondary" />} label="bueno" labelPlacement="bottom" />
            <FormControlLabel value="false" control={<Radio color="default" />} label="malo" labelPlacement="bottom" />
          </RadioGroup>
        </FormControl>

        <Button color='secondary' onClick={this.handleAgregar}>Agregar</Button>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="customized table">
            <TableHead >
              <TableRow className="serie">
                <TableCell >Serie</TableCell>
                <TableCell align="right">Calidad</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.state.series.filter(item => item.serie.toLowerCase().indexOf(this.state.letras.toLowerCase()) !== -1).map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th">
                    {item.serie}
                  </TableCell>
                  <TableCell align="right">
                    {item.calidad === true ? 'bueno' : 'malo'}

                    <IconButton aria-label="delete" id={item.id} onClick={this.handleBorrar}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TextField label="Filtro" color='secondary' variant="outlined" onChange={this.handleFiltro} />
        <IconButton onClick={this.handleAscendente} aria-label="delete" color="secondary" size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>

        <IconButton onClick={this.handleDescendente} aria-label="delete" color="secondary" size="small">
          <ArrowUpwardIcon fontSize="inherit" />
        </IconButton>
      </div>
    );
  }
}


export default Lista;



/*

// const cantantes = [{ nombre: 'jose', status: false },
{ nombre: 'luis', status: true }, { nombre: 'rodriguez', status: true },
 { nombre: 'el puma', status: false }]

// cantantes.filter((item) => item.indexOf(value) !== -1)

// string.indexOf('carlos') = -1 el index of hace una comparacion parcial del
 string con el parametro que le pases */

