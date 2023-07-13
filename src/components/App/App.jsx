import { Provider } from 'react-redux';
import { ContactsForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.styled.js';
import { store } from '../../redux/store.js';
import { Section } from 'components/ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <Provider store={store}>
    <Container>
        <ContactsForm />
        <Section>
        <ContactsList />
          <Filter />
    </Section>
      </Container>
      </Provider>
  );
};





