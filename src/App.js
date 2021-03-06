import React from 'react';

import CameraPage from '~/components/camera/CameraPage';

/**
 * @typedef state
 * @property {'camera'} page
 */

/** @extends {React.Component<(), State>} */
class App extends React.Component {
  /** @type {State} */
  state = {
    page: 'camera',
  };

  render() {
    const { page } = this.state;
    switch (page) {
      case 'camera': {
        return <CameraPage />;
      }
    }
  }
}

export default App;
