import React from 'react';
import './index.css';

const api = {
    key: "ab0d8cd95ab2e4618efe068acb334d82",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App(){
    return(
        <div className = "app">
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search...">
                    </input>
                </div>
            </main>
        </div>
    )
}

export default App;
