import React from "react";
import Button from "./Button";
import styles from './form.module.css';
//import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchAddContacts } from "../../redux/contacts/contacts-operations";
import { toast } from "react-toastify";
import { selectContacts } from "../../redux/contacts/contacts-selector";



const Form = () => {
  const contactsAll = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [values, setValues] = useState({});


  const onChangeInput = (event) => {
  const { name, value } = event.target; 
  setValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
}



  const onClickSubmit = (event) => {
    event.preventDefault(); 
    const { name } = values;
    const isExist = contactsAll.findIndex(el => el.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());

    if (isExist >= 0) {
      toast.warning(`Contact ${name} is already exists!`);
      return;
    }
    dispatch(fetchAddContacts(values));
    if (contactsAll.length > 0) {
      event.currentTarget.reset()
    }
    }
    
  

 
    return (
        <form className={styles.form} onSubmit={onClickSubmit}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} onChange={onChangeInput} type="text" name="name" id="username"  required placeholder="Please, enter data of contact" />
            
            <label htmlFor="tel">Phone number </label>
            <input className={styles.input} onChange={onChangeInput} type="tel" name="phone" id="tel" required placeholder="Please, enter a phone number"/>
           
            <Button type="submit" text="Add contact"  />
        </form>
    )
}

export default Form;

// Form.propTypes = {
//     onChangeInput: PropTypes.func,
//     onClickSubmit: PropTypes.func,
// }