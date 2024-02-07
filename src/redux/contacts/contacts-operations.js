

import * as contactsApi from '../../services/api';
import { fetchContactsError, fetchContactsLoading, fetchContactsSucsess, addContactsError, addContactsLoading, addContactsSucsess } from './contacts-slice';
import { toast } from 'react-toastify';

export const fetchContacts = () => {
    const func = async (dispatch) => {
        try {
            dispatch(fetchContactsLoading());
            const data = await contactsApi.requestContacts();
            dispatch(fetchContactsSucsess(data))
        }
        catch (error) {
            dispatch(fetchContactsError());
            toast.error("Something wrong...")
        }
    }
    return func;
}

export const fetchAddContacts = (values) => {
    const func = async (dispatch) => {
        try {
            dispatch(addContactsLoading());
            const { data } = await contactsApi.requestAddContacts(values);
            dispatch(addContactsSucsess(data));
        }
        catch (error) {
            dispatch(addContactsError(error.message));
            //toast.error("Something wrong...")
        }
    }
    return func;
}