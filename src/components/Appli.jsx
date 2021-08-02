import React from 'react';
import CardList from './CardList';
import NavBar from './NavBar';
import dotenv from  'dotenv';

export default function Appli() {
  return (
    <div>
      <NavBar />
      <CardList />
    </div>
  );
}
