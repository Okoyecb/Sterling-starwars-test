import React, { Component } from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'react-bootstrap';

import Planets from './Components/Planets/Planets';
import People from './Components/People/People';
import Starship from './Components/Starships/Starships';
import './App.css';
import Logo from './Logo.png';

class App extends Component {
    state= {
        planets:[],
        people:[],
        starships:[],
        error:false
    }
    componentDidMount(){
        const url = 'https://swapi.co/api/planets/?format=json';
        const peopleUrl = 'https://swapi.co/api/people/?format=json';
        const starshipUrl = 'https://swapi.co/api/starships/?format=json';
        axios.get(url)
            .then(res => {
                this.setState({ planets: res.data.results })
                
            })
            .catch(err=> {
                this.setState({ error: true })
            });
        axios.get(peopleUrl)
            .then(res => {
                this.setState({ people: res.data.results })
            })
            .catch(err => {
                this.setState({ error : true })
            })
        axios.get(starshipUrl)
            .then(res => {
                this.setState({ starships: res.data.results })
            })
            .catch(err => {
                this.setState({ error: true })
            })


    }
    render() {
        const planets = this.state.planets.map(planet => {
            return <Planets 
                    key={planet.id}
                    name={planet.name}
                    temp={planet.climate}
                    pop={planet.population}
                    diameter={planet.diameter}
                    gravity={planet.gravity}
                    orbit={planet.orbital_period}
                    rotate={planet.rotation_period}
                    terrain={planet.terrain}
                    surface={planet.surface_water}
                     />;
                })
        const people = this.state.people.map(person => {
            return <People 
                        key={person.id}
                        name={person.name}
                        dob={person.birth_year}
                        gender={person.gender}
                        eye={person.eye_color}
                        height={person.height}
                        hair={person.hair_color}
                        weight={person.mass}
                        skin={person.skin_color}
                        ride={person.vehicles.length}
                    />
        })
        const starships = this.state.starships.map(ships => {
            return <Starship 
                    key={ships.id}
                    name={ships.name}
                    model={ships.model}
                    maker={ships.manufacturer}
                    class={ships.starship_class}
                    capacity={ships.cargo_capacity}
                    price={ships.cost_in_credits}
                    // mglt={ships.mglt}
                    consume={ships.consumables}
                    crew={ships.crew}
                    rating={ships.hyperdrive_rating}
                    passengers={ships.passengers}
                    speed={ships.max_atmosphering_speed}
                    length={ships.length}
                    />
        })

    return (
        <div className="App">
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                    <img src={Logo} className="App-logo" alt="star wars logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </header>
            <main className="mt-5">
                <h1 className="text-center">
                    Welcome to Star-Wars Confederation       
                </h1>
                <h5>I am one with the force <br /> The force is with me</h5>
                <h5>Star-Wars directory</h5>
                <div className="container-fluid">
                    <Tabs defaultActiveKey="planets" fill variant="tabs" transition={false} id="noanim-tab-example">
                        <Tab eventKey="planets" title="Planets">
                        <div className="row pt-3 justify-content-center">
                            {planets}
                        </div>
                            
                        </Tab>
                        <Tab eventKey="starships" title="Starships">
                            <div className="row mt-5 justify-content-center">
                                {starships}
                            </div>
                        </Tab>
                        <Tab eventKey="people" title="People">
                            <div className="row mt-3 justify-content-center">
                                {people}
                            </div>
                        </Tab>
                    </Tabs>

                </div>

            </main>
        
        </div>
    );
  }
}

export default App;
