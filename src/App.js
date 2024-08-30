import Form from './pages/form';
import Thankyou from './pages/thankyou';
import Welcome from './pages/welcome';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/submit" element={<Form />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </div>
  );
}

export default App;
