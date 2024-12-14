import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElemets/Avatar";
import Card from "../../shared/components/UIElemets/Card";
import "./UsersList.css";
const UserItem = (props) => {
  return (
    <>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${props.id}/places`}>
            <div className="user-item__image">
              <Avatar
                image={props.image}
                alt={props.name}
                width={50}
                height={50}
              />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
