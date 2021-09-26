import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Title from './components/Title/Title';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  state = {
    isModalVisible: false
  }

  showModal() {
    this.setState({isModalVisible: true})
  }

  hideModal() {
    this.setState({isModalVisible: false})
  }

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} />
        <Title />
        <Main />
        {this.state.isModalVisible ? <Modal hideModal={this.hideModal}/> : null}      
      </div>
    );
  }
  
}

export default App;
