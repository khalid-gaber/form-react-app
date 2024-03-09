import './App.css';
import Name from './components/Name';
import Form from './components/form/Form';
import Result from './components/Result';
import {InfosProvider} from './InfosProvider';

export default function App() {
  return (
    <InfosProvider>
      <div className="App">
        <Name />
        <Form />
        <Result />
      </div>
    </InfosProvider>
  )
}
