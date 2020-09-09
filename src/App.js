import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { initialState, reducer } from './reducers/reducer'
import { connect } from "react-redux";

const App = (props) => {

  const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    features: state.car.features
  }
}

export default connect( mapStateToProps, {})(App);