import React from 'react';
import { Link } from 'react-router-dom';
// Connexion librairie Axios
import axios from 'axios';
// lien API avec APIKEY
const API_URL = 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=e7872f1a-646d-421f-bbb7-e0128716ee83';
//Fait le lien avec la page login
import { userService } from '../_services';



class HomePage extends React.Component {

    //Connexion axios vers la liste de contacts
    componentDidMount(){
      const url = `${API_URL}`;
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ contacts : data.contacts});
        console.log(this.state.contacts)
       })
    }

    //constructeur de classe qui initialise this.state
    constructor(props) {
        super(props);
        this.state = {
            contacts :[],
            contact :[]
        };
    }


    //Affichage sur la page
    render() {

        return (
            <div className="col-md-6 col-md-offset-3">
              <h1>Bonjour !</h1>
                <p>Vous êtes connecté</p>

                <div className="container">
                 <div className="col-xs-8">
                   <h1>Liste de contacts</h1>

                     {this.state.contacts.map((contact) => (
                       <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              <ul>
                                <li>{contact.firstname}</li>
                              </ul>
                            </h5>
                          </div>
                       </div>
                     ))}


                 </div>
                </div>
                  <p>
                    <Link to="/login">Déconnexion</Link>
                  </p>
            </div>
        );
    }
}

export { HomePage };
