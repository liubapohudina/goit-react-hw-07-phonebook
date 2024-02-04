import React from "react";
import styles from "./form.module.css";
import PropTypes from "prop-types";
import { deleteContacts } from '../../redux/contacts/contacts-slice';
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/contacts/contacts-selector';

const ContactList = () => {
  const filteredContacts = useSelector(filterContacts);


  const dispatch = useDispatch();

  const onClickDelete = (event) => {
    const selectContact = event.currentTarget.id;
    dispatch(deleteContacts(selectContact));
  }

  const elements = filteredContacts.map(item => (
    <li className={styles.listContacts} key={item.id}>
      <p>{item.name}  {item.number}</p>
      <button id={item.id} className={styles.btn} onClick={onClickDelete} type="button">Delete</button> 
    </li>
  ));

  return (
    <div className="contactsList">
      <ul>{elements}</ul>
    </div>
  );
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  onClickDelete: PropTypes.func,
};
