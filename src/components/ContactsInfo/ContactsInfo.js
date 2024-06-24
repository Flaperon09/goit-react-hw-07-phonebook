import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operations";
import { ContactListItem, ButtonDelete } from './ContactsInfo.styled';


export const ContactsInfo = ({ contact }) => {
    // === Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // ==== Экшен удаления контакта
    const handleDelete = () => dispatch(deleteContacts(contact.id));

    return (
            <ContactListItem key={contact.id}>{contact.name}: {contact.phone}
                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
            </ContactListItem>
    )
}