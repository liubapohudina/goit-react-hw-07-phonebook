
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form/Form';
import Title from "./Form/Title";

import ContactList from "./Form/ContacsList";
import Filter from "./Form/FilterSearch";


export const App = () => {  
  return <div className="App">
      <ToastContainer/>
     <Title title="Phonebook">
        <Form />
      </Title> 
       <Filter /> 
      <ContactList/> 
    </div>
  }
  

