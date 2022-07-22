import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserList from "./UserList";

function Home() {
  const [search, setSearch] = useState(false);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  let userInfoArray = []

  const  userSearch = async (e) => {
    e.preventDefault();
   const userList =  await axios
      .get(`https://api.github.com/search/users?q=${name} in:login&per_page=50`)
  
     const {items} = userList.data
      setTotalCount(userList.data.total_count)
      for(let i = 0; i <items.length; i++){
        const userInfo = await axios.get(`https://api.github.com/users/${items[i].login}`)

        userInfoArray.push(userInfo.data)
      }
      setUsers(userInfoArray)

      
      setSearch(true)
  };

  if (!search) {
    return (
      <div>
        <Navbar setName={setName} setSearch={setSearch} />
        <div className="App">
          <h1>Search for Users on GitHub!</h1>
          <form onSubmit={userSearch} className="form">
            <input type="text‘" placeholder="Enter username..." onChange={(e) => setName(e.target.value)} />
            <button>Submit</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar setName={setName} setSearch={setSearch} />
        <UserList users={users} totalCount={totalCount} name={name} />
        <Footer />
      </div>
    );
  }
}

export default Home;
