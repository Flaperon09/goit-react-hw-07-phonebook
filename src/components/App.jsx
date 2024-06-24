import { GlobalStyle } from "../GlobalStyle";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { getError, getIsLoading } from "../redux/selectors";

import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { Loader } from "./Loader"; 

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // === Запрос на бекэнд при монтировании страницы
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>

      <GlobalStyle />

      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
        {/* Показывать загрузчик пока не получен ответ бекэнда */}
        {isLoading && !error && <Loader />}
      </Section>

    </div>
  )
};