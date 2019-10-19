import './App.css';
import './i18n';
import React from 'react';
import Title from './components/Title.component';
import Language from './components/Language.component';
import ChangeLanguage from './components/ChangeLanguage.component';

const App = () =>  {

  return (
    <div className="App">
      <ChangeLanguage />
      <Language />
      <Title />
    </div>
  );
}

export default App;
