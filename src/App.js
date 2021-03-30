import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import Form from './components/Form';

function App() {
  // const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="App">
      {
        /*
          <Navigation />
          <LoginForm />
          <UserList users={users} />
        */
      }

      <header className="App-header">
        <Form />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#Settings"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      

    {/*
      <Dialog show={showDialog} onClose={() => {
        setShowDialog(false);
        navigateToSettingsPage();
        }}></Dialog>
      */}
    </div>
  );
}

export default App;
