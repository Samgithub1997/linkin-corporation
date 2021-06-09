import React from 'react';
import './App.css';
// import SearchIcon from '@material-ui/icons/Search';
import Header from './Components/Navigation/Header';
import Sidebar from './Components/AppBody/LeftSidebar/Sidebar';
import Content from './Components/AppBody/MainBody/Content';

function App() {
  return (
    <div className="App">
        {/* <h1>Yo Lets start building...</h1>  */}
        <Header />

        <div className="app_body">
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <Content />
          {/* Widgets */}
        </div>
    </div>
  );
}

export default App;
