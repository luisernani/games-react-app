import ListGroup from "./components/ListGroup";

function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "São Paulo"];

  return <><ListGroup items={items} heading="Cities" /></>;
}

export default App;