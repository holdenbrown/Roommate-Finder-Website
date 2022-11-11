import './App.css'; 
import React from 'react'; 
import Login from './login'; 
import Page2 from './page2';
import Directory from './directory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      curPage: 1
    }
  }

  nextPage() {
    this.setState({curPage : this.state.curPage + 1});
  }

  previousPage() {
    this.setState({curPage : this.state.curPage - 1});
  }

  render() {
    if (this.state.curPage === 1) {
      return (
        <div className='App'>
          <Login nextPage = {this.nextPage}/>
        </div>
      )
    } else if (this.state.curPage === 2) {
      return (
        <div className='App'>
          <Directory previousPage = {this.previousPage} nextPage = {this.nextPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 3) {
      return (
        <div className='App'>
          <Page2 previousPage = {this.previousPage} nextPage = {this.nextPage}/>
        </div>
      )
    }
  }
}

export default App; 