import React, { Component } from 'react'

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                {/* Renderize aqui todos os elementos filhos dente componente
                    Por exemplo, neste caso, o Form */}
                { this.props.children }
            </div>
        )
    }
}
