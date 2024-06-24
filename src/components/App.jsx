import { GlobalStyle } from "../GlobalStyle";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
// import { getContacts } from "../redux/selectors";
import { getError, getIsLoading } from "../redux/selectors";

import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // Получаем части состояния
  // const { items, isLoading, error } = useSelector(getContacts);

  // Вызываем операцию
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
        {isLoading && !error && <b>Request in progress...</b>}
      </Section>

    </div>
  )
};