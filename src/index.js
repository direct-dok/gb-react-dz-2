import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// const messages = [
//   {name: 'Alex', message: 'Всем привет! Кто подскажет, как создать React приложение? Говорят можно через npm'},
//   {name: 'Maxim', message: 'Привет! Сходи в Гугл, там все написано, вопросы глупые задаешь!!!'},
//   {name: 'Andrey', message: 'Установи на компьютер Node.js, далее командой "npm create-react-app myApp" создай новое приложение и пользуйся'}, 
//   {name: 'Alex', message: 'Вот спасибо, все получилось))'}, 
//   {name: 'Maxim', message: 'нет, ну зачем такую ерунду спрашивать???'},
//   {name: 'Andrey', message: 'рад что совет помог))'}, 
// ]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


