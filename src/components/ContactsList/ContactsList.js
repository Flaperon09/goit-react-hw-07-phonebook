import { ContactsInfo } from '../ContactsInfo';
import { useSelector } from "react-redux";

export const ContactsList = () => {
    // === Забираем из store массив контактов и данные фильтра
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    return (
        <div>
            <ul>
                {/* Если у контакта есть информация из фильтра - отображаем контакт */}
                {contacts.map(contact => {return contact.name.toLowerCase().includes(filter) &&
                    <ContactsInfo
                        key={contact.id}
                        contact={contact}
                    />}
                )}              
            </ul>
        </div>
    )
};