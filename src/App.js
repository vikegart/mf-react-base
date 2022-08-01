import React, { Suspense } from 'react';
import './App.css';
const RemoteApp = React.lazy(() => import("Remote/App"));

function App() {
  return (
    <div className="App">
      This is Host App
       {/*TODO: add ErrorBoundary*/}
      <Suspense fallback={<div>Загрузка...</div>}>>
        <RemoteApp/>
      </Suspense>
    </div>
  );
}

export default App;
