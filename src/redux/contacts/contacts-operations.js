import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../services/api';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const data = await contactsApi.requestContacts();
            return data;
        }
        catch (error) {
            toast.error(`${error.message}`)
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const fetchAddContacts = createAsyncThunk(
    'contacts/add',
    async (values, thunkApi) => {
        try {
            const data = await contactsApi.requestAddContacts(values);
            toast.success(`The contact ${data.name} was added!`);
            return data;
        }
        catch (error) {
            toast.error(`${error.message}`)
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const fetchDeleteContacts = createAsyncThunk(
    'contacts/delete',
    async (id, thunkApi) => {
        try {
            const data = await contactsApi.requestDeleteContact(id);
            toast.info(`The contact ${data.name} was deleted!`);
            return data;
            
        } catch (error) {
            toast.error(`${error.message}`)
            return thunkApi.rejectWithValue(error.message);
        }

    }
)
/*------------------------WITHOUT FUNCTION CREATEASYNCTHUNK------------------*/
// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(fetchContactsLoading());
//             const data = await contactsApi.requestContacts();
//             dispatch(fetchContactsSucsess(data))
//         }
//         catch (error) {
//             dispatch(fetchContactsError(error.message));
//             toast.error(`${error.message}`)
//         }
//     }
//     return func;
// }

//  export const fetchAddContacts = (values) => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(addContactsLoading());
//             const data = await contactsApi.requestAddContacts(values);
//             dispatch(addContactsSucsess(data));
//             toast.success(`The contact ${data.name} was added!`)
//         }
//         catch (error) {
//             dispatch(addContactsError(error.message));
//             toast.error(`${error.message}`)
//         }
//     }
//     return func;
// }

// export const fetchDeleteContacts = id => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(deleteContactsLoading());
//             const data = await contactsApi.requestDeleteContact(id);
//             dispatch(deleteContactsSucsess(data));
//             toast.info(`The contact ${data.name} was deleted!`)
//         } catch (error) {
//             dispatch(deleteContactsError(error.message));
//             toast.error(`${error.message}`);
//         }
//     }
//     return func;
// }