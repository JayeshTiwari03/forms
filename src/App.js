import "./App.css";
import FindBy from "./FindBy";
import Form from "./Form";
import Reddit from "./Reddit";
import Reduce from "./Reduce";
import UnForm from "./UnForm";

function App() {
  return (
    <div className="App">
      <Form />
      <UnForm />
      <Reduce />
      <Reddit subreddit="reactjs" />
      Let's Go, brother.
      <FindBy />
    </div>
  );
}

export default App;
