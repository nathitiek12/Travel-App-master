import React from 'react';

import MainNavigator from './src/navigations/MainNavigator';
import {Component} from 'react/cjs/react.production.min';
import {HOTELS, PLACES} from './src/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: HOTELS,
      place: PLACES,
      fav: [],
    };
  }

  render() {
    return <MainNavigator />;
  }
}

export default App;
