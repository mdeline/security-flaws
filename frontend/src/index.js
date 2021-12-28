import App from './App';
import Subscribe from './components/Subscribe';
import Users from './components/Users';
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
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);