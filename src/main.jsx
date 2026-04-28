import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { destinationApi } from './api/destinationApi';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={destinationApi}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 row">
          <div className="col-12">
            <DestinationIndex />
          </div>
        </main>
        <Footer />
      </div>
    </ApiProvider>
  </StrictMode>,
);
