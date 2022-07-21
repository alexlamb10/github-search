import React, {useState} from 'react'
import Navbar from './Navbar'

function Home() {
    const [search, setSearch] = useState(false)
    const [name, setName] = useState("")


    if(!search){
        return (
          <div>
            <Navbar />
            <div className="App">
                <h1>Search for Users on GitHub!</h1>
                <form >
                    <input type="text‘" onChange={(e) => setName(e.target.value)}/>
                    <button>submit</button>
                </form>
            </div>
          </div>
        );
    }else{

        return (
          <div>
            <Navbar />
            
            </div>
        )
    }
}

export default Home