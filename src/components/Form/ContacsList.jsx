import React from "react";
import styles from './contactsList.module.css';
import PropTypes from "prop-types";
import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterContacts} from '../../redux/contacts/contacts-selector';
import { fetchContacts, fetchDeleteContacts } from "../../redux/contacts/contacts-operations";
import { useEffect } from "react";


const ContactList = () => {
  const { items, isLoading } = useSelector(selectFilterContacts);
 
  
  const filteredContacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  const onClickDelete = (id) => {
    dispatch(fetchDeleteContacts(id));
  }

const elements = items ? (
    items.map(item => (
      <li className={styles.itemContacts} key={item.id}>
        <p className={styles.contactInfo}>{item.name} <a className={styles.link} href={`tel:${item.phone}`}>{item.phone}</a></p>
        <button id={item.id} className={styles.btn} onClick={() => onClickDelete(item.id)} type="button">Delete</button>
  </li>
    ))
) : (
    filteredContacts.map(item => (
        <li className={styles.itemContacts} key={item.id}>
            <p className={styles.contactInfo}>{item.name}  {item.phone}</p>
        <button id={item.id} className={styles.btn} onClick={() => onClickDelete(item.id)} type="button">Delete</button> 
        </li>
    ))
);

  

  return (
  <>
      {isLoading && <Loader />}
      <div className="contactsList">
        <ul className={styles.contactsList}>{elements}</ul>
      </div>
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  onClickDelete: PropTypes.func,
};
