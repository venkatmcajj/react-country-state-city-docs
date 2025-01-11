import { createRoot } from 'react-dom/client';

// third party
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

// style + assets
import './assets/scss/style.scss';
import 'react-country-state-city/dist/react-country-state-city.css';
// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter>
    </Provider>
);
