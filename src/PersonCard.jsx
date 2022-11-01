import React from 'react'

export default function PersonCard (props) {
  return (
    <fieldset>
        <legend>PersonCard.jsx</legend>
        <h1> {props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair color: {props.hairColor}</p>
    </fieldset>
  )
}

// export default function PersonCard (user) {
//     const {firstName, lastName, age, hairColor} = user;
//     console.log(user);
//     console.log(this.props.user.lastName);
//         return (
//         <fieldset>
//             <legend>PersonCard.jsx</legend>
//             <h1> {lastName}, {firstName}</h1>
//             <p>Age: {age}</p>
//             <p>Hair color: {hairColor}</p>
//         </fieldset>
//     )
//   }
