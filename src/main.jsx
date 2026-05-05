import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DestinationIndex from './components/DestinationIndex';
import { destinationApi } from './api/destinationApi';
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 row">
          <div className="col-12">
            <DestinationIndex />
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);
