import './App.css';
import Bouton from './bouton.js';
import Profile from './profile.js';
import Explication from './explication.js';
import React from 'react';
import Navbar from './navbar.js'; 

 class App extends React.Component {
  constructor (props) {
    super(props)
    const profil = [
      <Profile nom="Decourselle" prenom="Margaux" date_de_naissance="17/08/2000" />,
      <Profile nom="Langlois" prenom="Adèle" date_de_naissance="08/01/1997" />,
      <Profile nom="Rolland" prenom="Louis" date_de_naissance="27/10/2004" /> 
      ]
      this.state = {
        tout_les_profils : profil,
        profil_actuel : profil[0]
      }
      this.handleChange = this.handleChange.bind(this);
  }


  recuperer_profil(name) {
    for (var i=0 ; i<this.state.tout_les_profils.length ; i++) {
      if (this.state.tout_les_profils[i].props.prenom === name) {
        return this.state.tout_les_profils[i];
      }
    }
  }


  handleChange(event) {
    this.setState({ profil_actuel : this.recuperer_profil(event.props.value) }); 
  }


  render() {
  return (
    <div className="General">
      <div className="Navbar">
      <Navbar/>
      </div>
      <div className="Bouton">
          <Bouton value={"Margaux"} handleChange={this.handleChange}/>
          <Bouton value={"Adèle"} handleChange={this.handleChange}/>
          <Bouton value={"Louis"} handleChange={this.handleChange} />
      </div>
      <div className="Profil">
          <p> {this.state.profil_actuel} </p>
      </div>
   </div>

  );
  }
  }
  


export default App;



