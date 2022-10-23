import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { translationsJson } from 'locales/i18n';

function App() {
  const { t, i18n } = useTranslation();
  const handleChange = () => {
    const randomLanguage = ['en', 'vn'][Math.floor(Math.random() * 2)];
    i18n.changeLanguage(randomLanguage);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <h2>{t(translations.title) as string}</h2>
        <button onClick={handleChange}>Change language</button>
      </header>
    </div>
  );
}

export default App;
