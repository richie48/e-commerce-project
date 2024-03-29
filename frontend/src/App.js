import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import CartScreen from './CartScreen';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
