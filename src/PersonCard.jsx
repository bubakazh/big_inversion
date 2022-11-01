import React from 'react'

// export default function PersonCard (props) {
//   return (
//     <fieldset>
//         <legend>PersonCard.jsx</legend>
//         <h1> {props.lastName}, {props.firstName}</h1>
//         <p>Age: {props.age}</p>
//         <p>Hair color: {props.hairColor}</p>
//     </fieldset>
//   )
// }

export default function PersonCard ({user}) {
    // ! THE PersonCard FUNCTION'S PARAMETER user, NEEDS TO BE IN {}, BECAUSE IT'S A DICTIONARY, NOT JUST A STRING.
    
    const {firstName, lastName, age, hairColor} = user;
    // console.log(user);
    // console.log(lastName);
        return (
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <h1> {lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </fieldset>
    )
  }
