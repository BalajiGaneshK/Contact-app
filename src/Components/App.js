import '../App.css';
import Header from './Header';
import AddContact from './Add Contact';
import ContactList from './Contact List';

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList/>
    </div>
  );
}

export default App;
