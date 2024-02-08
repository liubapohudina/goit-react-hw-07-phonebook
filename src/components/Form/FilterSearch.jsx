import Title from './Title';
import styles from './form.module.css';
import PropTypes from "prop-types";
import { addFilter } from '../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  
  const dispatch = useDispatch();
  const onChangeFilter = (event) => {
    const filterValue = event.target.value
    const action = addFilter({filter: filterValue})
    dispatch(action)
  }

    return (
        <div className="filter">
            <Title title='Contacts' />
            <p>Find contacts by name</p>
            <input onChange={onChangeFilter} className={styles.input} name="filter" type="text"></input>
        </div>
    )
}

export default Filter;

Filter.propTypes = {
    onChangeInput: PropTypes.func,
}