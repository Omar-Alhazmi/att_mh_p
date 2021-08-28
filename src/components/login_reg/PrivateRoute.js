import React, { Component } from 'react'
import { getInfo,checkStorage } from '../helperMethods';
import { Redirect, withRouter } from "react-router-dom";
class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Authorized: false
        };
    }
    componentWillMount() {
        if(checkStorage() !== null && checkStorage() !== undefined){
        let jwt = getInfo().data.Role
        if(jwt==='Superintendent'){
            this.setState({Authorized:true})
        }
    }}

    render() {
        const { Authorized } = this.state
        if(checkStorage() !== null && checkStorage() !== undefined && Authorized){
                return this.props.children
        } else return <Redirect to={"/login"} />
    }
}
export default withRouter(PrivateRoute);
