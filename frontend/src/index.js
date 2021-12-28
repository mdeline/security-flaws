import App from './App';
import Subscribe from './components/Subscribe';
import Admin from './components/Admin';
import Home from './components/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);