import React from 'react';

import { auth } from '../firebase';

const PrivateRouter = ({ user, Component, Err }) => {
  if (auth.currentUser?.email) {
    return <Component />;
  } else {
    return <Err />;
  }
};

export default PrivateRouter;
