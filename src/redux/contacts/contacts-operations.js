

import * as contactsApi from '../../services/api';
import { fetchContactsError, fetchContactsLoading, fetchContactsSucsess } from './contacts-slice';
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