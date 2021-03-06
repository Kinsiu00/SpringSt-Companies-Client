import React, { Component } from 'react';
import Company from './components/Company'
import WebcamCapture from './components/Camera'

class App extends Component {

  state = {
    companyList: [],
    apiResult: ''
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({companyList: json.companies})
  }

  setCurrentCompany = (apiRes) => {
    this.setState({apiResult: apiRes})    
  }
  checkState = () => {
    console.log(this.state)
  }
  render() {
    let companyList = this.state.companyList
    return (
      <div>
        <WebcamCapture setCurrentCompany={this.setCurrentCompany}/>
        {
          this.state.apiResult &&
          <h2>{this.state.apiResult.name}</h2>
        }
        {/* {
          companyList.map(company => {
            return <Company key={company.id}cCompany={company}/>
          })
        } */}
        <button buttonResponse={this.checkState()}>click</button>
      </div>
    );
  }
}

export default App;
