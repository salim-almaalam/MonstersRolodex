// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

//function App() {
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], //https://jsonplaceholder.typicode.com/users
      search: "",
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
  // onsearch
  onSearchChange = (event) => {
    console.log(event.target.value);
    const search = event.target.value.toLowerCase();
    // const filteredMonsters = this.state.monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(search);
    // });
    this.setState(() => {
      return { search: search };
    });
  };
  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Robolex </h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Type Some Robo..'
        />
        <header className='App-header'>
          <CardList monsters={filteredMonsters} />
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
