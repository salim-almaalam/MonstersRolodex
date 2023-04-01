import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.compononet";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          // const { name, email, id } = monster;
          return (
            <Card key={monster.id} monster={monster} />
            // <div className='card-container' key={id}>
            //   <img
            //     alt='monster'
            //     src={`https://robohash.org/${id}?set=set2&size=150x150`}
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
