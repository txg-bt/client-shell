import React from 'react';

const SsoUI = React.lazy(() => import('sso_ui/App'));

const renderMFE = (MFE) => {
  return (
    <React.Suspense fallback="Loading...">
      <MFE />
    </React.Suspense>
  );
};

const App = () => {
  return <div>{renderMFE(SsoUI)} App</div>;
};

export default App;
