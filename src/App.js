import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Component/layout/Header/Header';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    </>
  );
}

export default App;
