import React from "react";

export default class Bouton extends React.Component {
    render() {
    return(
        <input type="button" name="name" value={this.props.value} onClick= { () => this.props.handleChange(this)} />

        )   
    }
}