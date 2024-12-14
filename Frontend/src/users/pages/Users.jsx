import React from "react";
import UsersList from "../components/UsersList";
import userImg from "../../assets/user.jpg";
const Users = () => {
  const USERS = [
    {
      ud: "u1",
      name: "Rahul Wankhede",
      image: userImg,
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
