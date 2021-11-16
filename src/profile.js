import React from "react";
import Bouton from './bouton.js';

export default class Profile extends React.Component {
    constructor (props, nom, prenom, date_de_naissance) {
    super(props);
        this.state ={
        nom : nom,
        prenom : prenom,
        date_de_naissance : date_de_naissance
     }
    }
   

    render() {
    return(
       <div> 
            <p> Nom : {this.props.nom}</p>
            <p> Prenom : {this.props.prenom} </p>
            <p> Date de naissance : {this.props.date_de_naissance} </p>
            <Bouton value={"Change style"} />
       </div>
       
        )   
    }
}