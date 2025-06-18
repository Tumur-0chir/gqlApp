import React from 'react';
const navigationRef: any = React.createRef();

const getCurrentRoute = () => {
  return navigationRef.current?.getCurrentRoute();
};

const popToTop = () => {
  navigationRef.current?.popToTop();
};

const reset = () => {
  navigationRef.current?.reset();
};

const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

export default {
  navigationRef,
  getCurrentRoute,
  popToTop,
  reset,
  navigate,
  goBack,
};
