import './App.css'; import 'bootstrap/dist/css/bootstrap.min.css'; import React from 'react'; 
import Login from './login'; import Page2 from './page2';

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
          <Page2 previousPage = {this.previousPage}/>
        </div>
      )
    }
  }
}

export default App; 