import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './page/landing/index.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListingPage from './page/Listing/listing';
import DynamicPage from './page/Listing/dynamic';
import SimpleForm from './page/form/simpleForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listing' element={<ListingPage />} />
        <Route path='/dynamic' element={<DynamicPage />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/" element={<LandingPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
