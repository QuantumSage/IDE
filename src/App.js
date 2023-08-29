import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Ide from './components/Ide';

export default function App(){
  return(
    <div class="main-wrapper">
      <NavigationBar/>
      <Ide/>
      <Footer/>
    </div>
  );
}
