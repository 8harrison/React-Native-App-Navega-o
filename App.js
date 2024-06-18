import ValueProvider from './components/ValueContext';
import Navigation from './components/Navigation'



export default function App() {
  
  return (
    <ValueProvider>
       <Navigation/>
    </ValueProvider>
  );
}
