import React, { Component } from 'react';
import Footer from '../footer/Footer';
import DoughnutCart from '../chrtsComponents/DoughnutCart'
export default class Home extends Component {
    render() {
        return (
            <div>
                <DoughnutCart />
              <Footer />  
            </div>
        )
    }
}
