/*import { Component, useState, useEffect } from 'react'
    
const ClaseFunc = () => {
    const [nombre, setNombre] = useState('Pepe')

    // es la version hook de componentDidMount
    useEffect(() => {
        console.log('holis con hooks')
    }, []) // se le pasa el array vacio para que sea como component did mount

    // es la version hook de componentDidUpdate
    useEffect(() => {
        console.log('cambio nombre con hook')
    }, [nombre]) // se le pasa el state o prop del que queramos escuchar los cambios

    // es la version hook del component will unmount
    useEffect(() => {
        // agregas el return para ejectutar en el unmount lo que este dentro del return
        return () => {
            console.log('el component se desmonto')
        }
      }, [])
      
    return (
        <div>
            {nombre}
            <button onClick={() => setNombre('el pumaaaa')}>Cambiar nombre con useState</button>
        </div>
    )
}

class ClaseClass extends Component {
    state = {
        nombre: 'Pepe'
    }
    handleChange = () => {
        this.setState({
            nombre: 'Jose Luis Rodriguez "el puma"'
        })
    }

    // es un metode del ciclo de vida de react se ejecuta cuando el componente se monta
    componentDidMount () {
        console.log('holiss')
    }

    // este se ejecuta un momento antes de que el component se desmonte
    // ejemplo cuando cambiamos de url adentro de la app
    componentWillUnmount() {
        console.log('el componenet se desmonto')
    }

    // es un metode del ciclo de vida de react se ejecuta cuando algo se actualiza
    componentDidUpdate (prevProps, prevState) {
        // prevProps es los valores de las props antes de cambiar
        // prevState es los valores del state antes de cambiar
        // se pueden comparar con this.props, this.state
        if (this.state.nombre !== prevState.nombre) {
            console.log('se cambio el nombre')
        }
    }

    render() { 
        return (  
            <div>
                con classes:
            <div>{this.state.nombre}
            <button onClick={this.handleChange}>Cambiar nombre</button></div>
            con functional:
            <ClaseFunc />
            </div>
        );
    }
}
 
export default ClaseClass;