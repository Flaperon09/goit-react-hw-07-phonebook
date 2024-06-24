import { ContactsInfo } from '../ContactsInfo';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactsList = () => {
    // === Забираем из store данные фильтра
    const filter = useSelector(getFilter);

    // === Забираем из store контакты
    const items = useSelector(getContacts);

    return (
        <div>
            <ul>
                {/* Если у контакта есть информация из фильтра - отображаем контакт */}
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