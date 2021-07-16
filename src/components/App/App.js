import './App.css';
import Message from '../Message'

function App(props) {

  return (
    <div className="App">
      <h1 className="App__title">Сообщения наших пользователей</h1>
      <Message messages={ props.messages } />
    </div>
  );

}

export default App;
