import React from 'react';
import App from '../App';

const Home = () => {
    return (
        <div className='home'>
              <h1>BIENVENUE SUR LA TO DO LIST DECENTRALISEE</h1>
            <div className="home-main">
                <form >
                    <input id="newTask" type="text" className='form-control' placeholder='ajoutez une tache ici...' required></input>
                    <button type="submit">Enregister</button>
                </form>
                <div id="tasklist"  className='tasklistbelow'>
                    <label>
                        <input type="checkbox"></input>
                        <span className='content'>Taches à faire</span>
                    </label>
                </div>
                <div id="completedtasklist" >
                    <label>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Home;