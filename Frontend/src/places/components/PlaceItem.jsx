import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElemets/Card";
import "./PlaceItem.css";

export default function PlaceItem(props) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button>VIEW ON MAP</Button>
          <Button>EDIT </Button>
          <Button>Delete</Button>
        </div>
      </Card>
    </li>
  );
}

// output list of places
