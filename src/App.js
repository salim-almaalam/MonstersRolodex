import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//function App() {
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], //https://jsonplaceholder.typicode.com/users
    };
    // this.state = {
    //   name: { firstName: "Salim", lastName: " Khalid" },
    //   dateOfBirth: "20-05-1998",
    //   company: "Dhofar Municipality",
    //   age: 25,
    // };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          className='Serach'
          type='search'
          placeholder='empty'
          onChange={(event) => {
            console.log(event.target.value);
            const search = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(search);
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </header>
      </div>
    );
  }
}

export default App;

// <p>
// Hello {this.state.name.firstName}
// {this.state.name.lastName}, {this.state.dateOfBirth},{" "}
// {this.state.company}, and I am {this.state.age}
// Years old
// </p>
// <button
//             onClick={() => {
//               this.setState({
//                 name: { firstName: "Khalid", lastName: " Awad" },
//                 dateOfBirth: "20-05-1970",
//                 company: "OQ8",
//                 age: 40,
//               });

//               console.log(this.state);
//             }}>
//             Change name
//           </button>
