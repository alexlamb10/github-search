import React, {useState} from 'react'
import Navbar from './Navbar'

function Home() {
    const [search, setSearch] = useState(false)


    if(search){
        return (
            <div>This works</div>
        )
    }else{

        return (
          <div>
            <Navbar />
            Search Anything on GitHub!</div>
        )
    }
}

export default Home