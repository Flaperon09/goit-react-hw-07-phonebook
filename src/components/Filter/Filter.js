import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/filterSlice";
import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({value}) => {
    // === Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // === Экшен фильтрации контактов
    const handleFilter = (event) => {
        // Нормализация данных из поля фильтрации
        const normalizedValue = event.target.value.toLowerCase();
        // Отправка экшена фильтрации
        dispatch(filterContact(normalizedValue))
    };

    return (
        <div>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput type="text" name="filter" value={value} onChange={handleFilter}></FilterInput>
        </div>
    )
};