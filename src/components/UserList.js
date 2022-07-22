import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import './UserList.css'

function UserList() {

    const [pageNumber, setPageNumber]  = useState(0)
    const [users, setUsers] = useState([
        {
            name: "Alex",
            age: 22,
        },
        {
            name: "Mariah",
            age: 21,
        },
        {
            name: "Stefane",
            age: 55,
        },
        {
            name: "Cordale",
            age: 56,
        },
        {
            name: "Alex",
            age: 21,
        },
        {
            name: "Alex",
            age: 21,
        },
        {
            name: "Alex",
            age: 21,
        },
        {
            name: "Alex",
            age: 21,
        },
        {
            name: "Alex",
            age: 21,
        },
        {
            name: "Alex",
            age: 21,
        },
    ])

    const usersPerPage = 3
    const pagesVisited = pageNumber * usersPerPage;

    // How to show what users should be shown on the pagination
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return <div key={user.name}>
            <p>name: {user.name}</p>
            <p>age: {user.age}</p>
        </div>
    })

    const pageCount = Math.ceil(users.length/usersPerPage)

    const changePage = (selected) => {
        setPageNumber(selected)
    };

  return (
    <div >
        {displayUsers}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    </div>
  )
}

export default UserList