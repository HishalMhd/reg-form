import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SuccessPage from './SuccessPage';
import FormerPage from './FormerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormerPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
