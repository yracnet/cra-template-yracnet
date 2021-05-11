import './MainApp.scss';
import { Navbar } from '_/components/Navbar';
import { Home } from './home';

// Rename MainApp to [Project Name]App
function MainApp() {
  return (
    <>
      <Navbar name="Your App" />
      <div className="container mt-container">
        <Home />
      </div>
    </>
  );
}

export default MainApp;
