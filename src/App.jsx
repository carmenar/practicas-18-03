import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import SaveIcon from '@material-ui/icons/Save';

class Lista extends Component {
  state = {
    lista: [{ picture: "", name: "", location: "", id: "" }],
    texto: "", first: "", last: "", idEdit: "",
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=5`).then((res) => {
      this.setState({
        lista: res.data.results,
      });
      //console.log(this.state.lista)
    });
  }

  handleFiltro = (e) => {
    this.setState({
      texto: e.target.value,
    });
    //console.log(e.target.value)
  };

  handleBotonArriba = () => {
    this.state.lista.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
    this.setState({
      name: this.state.lista,
    });
    // console.log()
  };

  handleBorrar = (e) => {
    const nuevaLista = this.state.lista.filter((item, i) => e.currentTarget.id !== item.login.uuid);
    //const index = this.state.lista.findIndex((item) => item.login.uuid === e.currentTarget.id);

    //nuevaLista.splice(index, 1);
    this.setState({
      lista: nuevaLista,
    });
    //console.log(this.state.lista)
  };

  handleEditar = (e) => { 
    //const newFirst = this.lista.name.first.filter((item, i) => e.target )
   

    this.setState({
      first: e.target.value,
      last: e.target.value,
    })
   console.log(e.target)
  };

  handleGuardar = () => {

  }

  render() {
    return (
      <div>
        <h1> Lista</h1>
        <TextField
          id="standard-basic"
          label="Filtrar"
          onChange={this.handleFiltro}
        />
        <Button onClick={this.handleBotonArriba}>
          <ExpandLessIcon />
        </Button>
        
          {}
          <div>
        <TextField
          id="editar-first"
          label="Editar First Name"
          onChange={this.handleEditar} 
        />
        <br/>
        <TextField
          id="editar-last"
          label="Editar Last Name"
          onChange={this.handleEditar}
        />
        <Button onClick={this.handleGuardar} color='secondary'>
        <SaveIcon/>
      </Button>
      </div>
        
        <Card>
          {this.state.lista
            .filter(
              (item) =>
                (item.name.first &&
                  item.name.first
                    .toLowerCase()
                    .indexOf(this.state.texto.toLowerCase()) !== -1) || (item.name.last &&
                      item.name.last
                        .toLowerCase()
                        .indexOf(this.state.texto.toLowerCase()) !== -1)
            )
            .map((item, index) => (
              <CardContent key={index} className="card">
                <Avatar alt="Persona" src={item.picture.large} />
                <Typography component="h5" variant="h5">
                  Name: {item.name.first} {item.name.last}
                  <IconButton
                    onClick={this.handleBorrar}
                    id={item.login.uuid}
                    aria-label="delete"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                  <IconButton onClick={this.handleEditar} aria-label="create">
                    <CreateIcon />
                  </IconButton>
                </Typography>
                <Typography>Location: {item.location.country}</Typography>
              </CardContent>
            ))}
        </Card>
      </div>
    );
  }
}

export default Lista;
