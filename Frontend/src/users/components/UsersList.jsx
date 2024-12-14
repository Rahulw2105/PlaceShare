import UserItem from "./UserItem";
import "./UserItem.css";
const UsersList = (props) => {
  // const { id, name, image, places } = props.items;
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1> No Users Found..!</h1>;
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
