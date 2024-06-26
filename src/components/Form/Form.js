import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

import { FormData, FormLabel, FormLabelName, FormInputName } from './Form.styled';
import shortid from 'shortid';

export default function Form() {
    // === Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // === ХУКи состояния нового контакта
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    // // === Объект состояния нового контакта
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

    // === Забираем из store контакты
    const items = useSelector(getContacts);
    
    // === Экшен добавления нового контакта
    const handleSubmit = event => {
        event.preventDefault();
        // Проверка наличия контакта
        if (items.find(option => option.name.toLowerCase() === state.name.toLowerCase())) {
            // Если контакт уже есть - выводим предупреждение
            return alert(`${state.name} is already in contacts.`);
        } else {
            // Если контакта нет - отправляем контакт на бекэнд
            dispatch(addContacts(state));
        };
        reset();
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