import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./UserList.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons"

function UserList({ users, totalCount, name }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [bio, setBio] = useState("")

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  // How to show what users should be shown on the pagination
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <div className="pic-name">
            <img
              src={user.avatar_url}
              className="profile-pic"
              alt={user.login + "profile picture"}
            />
            <div className="name-login">
              <h2>{user.name}</h2>
              <p>GitHub Handle: {user.login}</p>
            </div>
          </div>
          <div className="about">
            <p>
              <FontAwesomeIcon className="icon" icon={faStar} />{" "}
              {user.followers}
            </p>
            <p>Bio: {user.bio}</p>
            <a href={user.html_url}>Click for more info! </a>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="user-page">
      <h1>{totalCount} results for {name}</h1>
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
  );
}

export default UserList;
