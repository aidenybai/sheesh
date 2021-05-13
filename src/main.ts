import './style.css';
import { component } from 'lucia';

const App = () => {
  const state = () => ({ number: 0 });
  return component(state);
};

App().init('#app');
