import React from "react";
import Button from "./Button";
import styles from './form.module.css';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addContacts} from '../../redux/contacts/contacts-slice';


const Form = () => {
    const contacts = useSelector(store => store.contacts);
    const dispatch = useDispatch();
    const [values, setValues] = useState('');
     const onChangeInput = (event) => {
   const { name, value} = event.currentTarget;
   setValues((prevValues) => ({
     ...prevValues,
     [name]: value,
   }));
  }


  const onClickSubmit = (event) => {
    event.preventDefault(); 
    const { name } = values;
    const isExist = contacts.findIndex(el => el.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());

    if (isExist >= 0) {
      alert(`Contact ${name} already exists!`);
      return;
    }
    
    setValues({
      contacts: [
        ...contacts,
        {
          number: values.number,
          name: values.name,
          id: nanoid(),
        }
      ],
      name: '',
      number: '',
    });
    event.currentTarget.reset()

    
    const action = addContacts(values)
    dispatch(action)
    }
    
  

 
    return (
        <form className={styles.form} onSubmit={onClickSubmit}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} onChange={onChangeInput} type="text" name="name" id="username" required placeholder="Please, enter data of contact" />
            
            <label htmlFor="tel">Phone number </label>
            <input className={styles.input} onChange={onChangeInput} type="tel" name="number" id="tel" required placeholder="Please, enter a phone number"/>
           
            <Button type="submit" text="Add contact"  />
        </form>
    )
}

export default Form;

Form.propTypes = {
    onChangeInput: PropTypes.func,
    onClickSubmit: PropTypes.func,
}