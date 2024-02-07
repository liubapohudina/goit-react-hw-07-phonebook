import React from "react";
import styles from "./form.module.css";
import PropTypes from "prop-types";
import { Loader } from "./Loader";
import { deleteContacts } from '../../redux/contacts/contacts-slice';
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/contacts/contacts-selector';
import { fetchContacts } from "../../redux/contacts/contacts-operations";
import { useEffect } from "react";


const ContactList = () => {
  const {items, isLoading} = useSelector(filterContacts);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  const onClickDelete = (event) => {
    const selectContact = event.currentTarget.id;
    dispatch(deleteContacts(selectContact));
  }

  const elements = items.map(item => (
    <li className={styles.listContacts} key={item.id}>
      <p>{item.name}  {item.phone}</p>
      <button id={item.id} className={styles.btn} onClick={onClickDelete} type="button">Delete</button> 
    </li>
  ));
  

  return (
  <>
      {isLoading && <Loader />}
      {Boolean(items.length) && <div className="contactsList">
      <ul>{elements}</ul>
      </div>}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  onClickDelete: PropTypes.func,
};
