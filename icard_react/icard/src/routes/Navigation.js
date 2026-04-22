import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<h2>Navigation..</h2>} />
    </Routes>
  );
}