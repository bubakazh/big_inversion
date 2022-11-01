import PersonCard from './PersonCard';
import './App.css';

function App() {

  // ! TODO INSTEAD OF MAKING INDIVIDUAL USERS, MAKE AN ARRAY OF OBJECTS, AND ITERATE THROUGH THE ARRAY WITH map function 

  const user = {
    firstName : "Angelica",
    lastName : "Cruz",
    age : 24,
    hairColor: "black, dyed brown"
  }

  const user2 = {
    firstName : "ひたぎ",
    lastName : "戦場ヶ原",
    age : 18,
    hairColor: "黒"
  }

  const user3 = {
    firstName : "Аіда",
    lastName : "Ніколайчук",
    age : 40,
    hairColor: "blonde"
  }

  const user4 = {
    firstName : "Troy",
    lastName : "Manansala",
    age : 24,
    hairColor: "black, partially dyed blonde"
  }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {/* <PersonCard firstName = "Troy" lastName = "Manansala" age = {33} hairColor = "black, partially dyed blonde" />
      <PersonCard firstName = "Angelica" lastName = "Cruz" age = {24} hairColor = "black, partially dyed brown" />
      <PersonCard firstName = "ひたぎ" lastName = "戦場ヶ原" age = {18} hairColor = "黒" />
      <PersonCard firstName = "Аіда" lastName = "Ніколайчук" age = {40} hairColor = "blonde" /> */}
      <PersonCard user = {user}/>
      <PersonCard user = {user2}/>
      <PersonCard user = {user3}/>
      <PersonCard user = {user4}/>

    </fieldset>
  );
}

export default App;
