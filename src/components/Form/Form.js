import { useState } from 'react';
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { addContacts } from '../../redux/operations';

import { FormData, FormLabel, FormLabelName, FormInputName } from './Form.styled';
import shortid from 'shortid';

export default function Form() {
    // === Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();


    // === МОЙ КОД начало ========================================
    // === ХУКи состояния нового контакта
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    // // === Объект состояния
    const state = {
        id,
        name,
        phone,
    };

    // === Обновление state при вводе в <input>
    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setPhone(value);
                break;
            default: return;
        };
        // Генерация id контакта
        setId(shortid.generate()); 
    };
    
    // === Добавление нового контакта
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // Экшен нового контакта
    //     // dispatch(addContact(state));
    //     dispatch();
    //     // Очистка формы после отправки данных
    //     reset();
    // }

    // === Очистка формы
    // const reset = () => {
    //     setName('');
    //     setNumber('');
    // };
    // МОЙ КОД конец =======================================================


    const handleSubmit = event => {
        event.preventDefault();
        // const form = event.target;
        // dispatch(addContacts(event.target.elements.text.value));
        dispatch(addContacts(state));
        // form.reset();
        reset();
        console.log("state: ", state);
    };

    // === Очистка формы
    const reset = () => {
        setName('');
        setPhone('');
    };
            
        return (
            <div>
                <FormData onSubmit={handleSubmit}>
                    <FormLabel>
                        <FormLabelName>Name</FormLabelName>
                        <FormInputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name} onChange={handleChange}
                        />
                        <FormLabelName>Number</FormLabelName>
                        <FormInputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={phone} onChange={handleChange}
                            />
                    </FormLabel>
                    <button type="submit">Add contact</button>
                </FormData>
            </div>
        )
};