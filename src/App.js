import './App.css';
import Registration from './Components/forms/registration';

const App = () => {
  return (
    <div className='container'>
        <div className="container-fluid mt-30">
          <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand">Registartion</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
          </nav>
        </div>
        <div className='container-fluid'>
            <Registration/>
        </div>
    </div>
    
  );
}

export default App;
