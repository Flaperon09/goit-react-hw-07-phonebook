import { ContactsInfo } from '../ContactsInfo';
// import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
import { fetchContacts } from "../../redux/operations";
import { getContacts } from '../../redux/selectors';
// import { getContacts } from "redux/selectors";

export const ContactsList = () => {
    // === Забираем из store массив контактов и данные фильтра
    // const contacts = useSelector(state => state.contacts);
    // const contacts = useSelector(state => state.contacts.contacts.items);
    const filter = useSelector(state => state.filter);

    // const dispatch = useDispatch();
    // Получаем части состояния
    // const { items, isLoading, error } = useSelector(getContacts);
    const items = useSelector(getContacts);
    console.log(items);

  // Вызываем операцию
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

    return (
        <div>
            <ul>
                {/* Если у контакта есть информация из фильтра - отображаем контакт */}
                {/* {contacts.map(contact => {return contact.name.toLowerCase().includes(filter) &&
                 */}
                {items.map(contact => {return contact.name.toLowerCase().includes(filter) &&
                    <ContactsInfo
                        key={contact.id}
                        contact={contact}
                    />}
                )}              
            </ul>
        </div>
    )
};