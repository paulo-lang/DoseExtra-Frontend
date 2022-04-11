import React, { Component } from "react"
import axios from "axios"
import './styles.css'

class Media extends Component {
    state = {
        instaData: []
    }

    render() {
        return (
            <div className="media-container">
                <h1>Confira nossos melhores momentos</h1>
                <ul>
                    <li>
                        <strong>Nome da mídia</strong>
                        <br/>
                        <strong>descrição</strong>
                    </li>
                    <li>
                        <strong>Nome da mídia</strong>
                        <br/>
                        <strong>descrição</strong>
                    </li>
                    <li>
                        <strong>Nome da mídia</strong>
                        <br/>
                        <strong>descrição</strong>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Media