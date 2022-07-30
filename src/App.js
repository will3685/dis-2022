import React, { useRef, useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation, Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

import Home from './views/Home';
import About from './views/About';
import Solution from './views/Solution';
import Equipe from './views/Equipe';



// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
          <AppRoute exact path="/quem-somos" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/nossa-solucao" component={Solution} layout={LayoutDefault} />
          <AppRoute exact path="/equipe" component={Equipe} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;
