import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Suspense>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Suspense>
);