import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avtar from "./Avtar.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avtar img="https://media-exp1.licdn.com/dms/image/C4D03AQFZV2YIbD9TOA/profile-displayphoto-shrink_200_200/0/1627925967811?e=1634169600&v=beta&t=33n6ch5EIqDLrm1I3UByzgvI2Sag7ouzR_VUaNw_CcI" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
