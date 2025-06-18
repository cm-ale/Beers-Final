import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import AdminPage from './pages/AdminPage';
import NavBarApp from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { NotificationContainer } from './ui/toast/Notification';

export default function App() {
  return (
    <>
      <NavBarApp /> {/* Navbar siempre visible */}
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/beers"
          element={
            <PrivateRoute>
              <BeerList />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
        <NotificationContainer />
    </>
  );
}
