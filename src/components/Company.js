import React, {Component} from 'react';

class Company extends Component {
    render(){
        return(
            <p>{this.props.cCompany.name}</p>
        )
    }
}

export default Company;