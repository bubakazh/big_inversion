import PersonCard from './PersonCard';
import './App.css';

function App() {

  // const user = {
  //   firstName : "Angelica",
  //   lastName : "Cruz",
  //   age : 24,
  //   hairColor: "black, dyed brown"
  // }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <PersonCard firstName = "Troy" lastName = "Manansala" age = {33} hairColor = "black, partially dyed blonde" />
      <PersonCard firstName = "Angelica" lastName = "Cruz" age = {24} hairColor = "black, partially dyed blonde" />
      <PersonCard firstName = "ひたぎ" lastName = "戦場ヶ原" age = {18} hairColor = "黒" />
      <PersonCard firstName = "Аіда" lastName = "Ніколайчук" age = {40} hairColor = "blonde" />
      {/* <PersonCard user = {user}/> */}
    </fieldset>
  );
}

export default App;
