import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  
  const [myContacts, setMycontacts] = useState(contacts.slice(0,5))


  return (
    <>
    <h1>Ironcontacts</h1>

    <button onClick={ 
        () => {
          const r = 5 + Math.floor(Math.random() * contacts.length - 5)
          const newContact = contacts[r]
          const newContacts = [...myContacts]
          newContacts.push(newContact)
          setMycontacts(newContacts) 
        }
      }>Add random contact </button>    

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {myContacts.map((contact) => {
            return (
              <tr key={contact.name}>
                <td>
                  <img
                    className="picture"
                    width="200px"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Number(contact.popularity.toFixed(2))}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
