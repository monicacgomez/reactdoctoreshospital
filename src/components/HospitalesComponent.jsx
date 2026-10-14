import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class HospitalesComponent extends Component {
    url = Global.urlApiHospitales
    state = {
        hospitales: []
    }

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url + request).then((response) => {
            console.log("Leyendo hospitales");
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

  render() {
    return (
      <div>
        <h1>
            Hospitales Component
        </h1>
        <table className="table table-warning">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return (<tr key={index}>
                            <td>{hospital.idHospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                            <td>{hospital.telefono}</td>
                            <td>{hospital.camas}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
