
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from '../Message'

function App(props) {

  const [messageList, setMessage] = useState([]);

  const [author, setAuthor] = useState([]);

  useEffect(() => {

    const obj = {
      name: 'Robot', 
      message: 'Hello i am a robot', 
      class: 'robot-message'
    };

    if(author.length) {
      setTimeout(() => setMessage((oldArray) => [...oldArray, obj]), 1500);
    }

    

  }, [author])

  const getDataForm = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('.form-send__user-name');
    const message = e.target.querySelector('.form-send__textarea-message');

    const obj = {
      name: name.value, 
      message: message.value, 
      class: 'user-message'
    }

    setMessage((oldArray) => [...oldArray, obj]);
    setAuthor((oldArray) => [...oldArray, name]);

    name.value = '';
    message.value = '';
  }

  return (
    <div className="App">
      <h1 className="App__title">Сообщения наших пользователей</h1>
      <div className="message">

          { messageList.map((el, index) => {
            return <Message message={el} key={index} />
          }) }

      </div>
      <form className="form-send" onSubmit={ getDataForm }>
        <div className="form-send__wrapper-input">
          <input type="text" name="name" placeholder="Укажите ваше имя" className="form-send__user-name"></input>
        </div>
        <div className="form-send__wrapper-input">
        <textarea className="form-send__textarea-message" placeholder="Введите сообщение"></textarea>
        </div>
        <button className="form-send__send-button">Отправить</button>
      </form>
    </div>
  );

}

export default App;
