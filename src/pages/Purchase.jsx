import React, { Component } from 'react';
import UserDetails from '../components/UserDetails';
import Contract from '../components/Contract';
import Discord from '../components/Discord';
import Binance from '../components/Binance';
import TransactionID from '../components/TransactionID';
import TradingViewID from '../components/TrandingViewID';
import FinalForm from '../components/FinalForm';
// import PersonalDetails from '../components/PersonalDetails';
// import Confirmation from '../components/Confirmation';
// import Success from '../components/Success';

export default class Purchase extends Component {

  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }
    
    switch(step) {
      case 1: 
        return (
          <UserDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <Contract 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <Discord 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
        case 4: 
          return (
            <Binance 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
          )
        case 5: 
          return (
            <TransactionID 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
          )
        case 6: 
          return (
            <TradingViewID 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
          )
        case 7: 
          return (
            <FinalForm 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
          )
      default: 
          // do nothing
    }
  }
}