import { GlobalStyle } from "../GlobalStyle";
import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export default function App() {
  
  return (
    <div>

      <GlobalStyle />

      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>

    </div>
  )
};