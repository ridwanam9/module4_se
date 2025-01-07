import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
