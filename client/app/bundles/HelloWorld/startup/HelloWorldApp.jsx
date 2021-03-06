import React from 'react';
import ReactOnRails from 'react-on-rails';
import Helmet from 'react-helmet';

import HelloWorld from '../containers/HelloWorld';

const HelloWorldApp = (props) => (
  <HelloWorld {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp });

global.Helmet = Helmet;
