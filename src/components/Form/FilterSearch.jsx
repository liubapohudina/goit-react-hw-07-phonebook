import Title from './Title';
import styles from './form.module.css';
import PropTypes from "prop-types";
import { addFilter } from '../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contacts-selector';

const Filter = ({children}) => {
  const items = useSelector(selectContacts);
  const isItems = items.length;

  const dispatch = useDispatch();
  const onChangeFilter = (event) => {
    const filterValue = event.target.value
    const action = addFilter({filter: filterValue})
    dispatch(action)
  }

 return (
  <section>
    {Boolean(isItems) ? (
      <div className="filter">
        <Title title='Contacts' />
         <p className={styles.p}>Find contacts by name</p>
         <form>
           <input onChange={onChangeFilter} className={styles.input} name="filter" type="text" placeholder='Enter name'/>
           </form>
      </div>
    ) : (
      <p className={styles.infoForUser}>You don't have any contacts yet.</p>
     )}
     {children}
  </section>
);

}

export default Filter;

Filter.propTypes = {
    onChangeInput: PropTypes.func,
}