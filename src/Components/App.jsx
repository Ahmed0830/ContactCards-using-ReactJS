import contacts from "../contacts";
import Card from "./Card";
function addCard(contact){
  return (<Card 
    name = {contact.name}
    img = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
    company = {contact.company}
    />)
}
function App() {
  return (
    <>
    <h1 className="heading">My Cards</h1>
    <div className="cardcontainer">

      {contacts.map(addCard)}
    </div>
    </>
  );
}
export default App;
