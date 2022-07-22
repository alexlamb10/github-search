import React, {useState} from 'react'
import Navbar from './Navbar'
import UserList from './UserList'

function Home() {
    const [search, setSearch] = useState(true)
    const [name, setName] = useState("")


    if(!search){
        return (
          <div>
            <Navbar />
            <div className="App">
              <h1>Search for Users on GitHub!</h1>
              <form>
                <input type="text‘" onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
              </form>
            </div>
          </div>
        );
    }else{

        return (
          <div>
            <Navbar />
            <UserList />
            </div>
        )
    }
}

export default Home