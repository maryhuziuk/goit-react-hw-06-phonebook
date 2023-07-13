import { useSelector, useDispatch } from 'react-redux';

import { getContactsList } from '../../redux/selector';
import { addContact } from '../../redux/redusers/contacts';
import {
  LabelStyle,
  FormStyle,
  InputStyle,
  ButtonStyle,
  Title,
  SectionTitle, 
  Section
} from './ContactForm.styled';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    dispatch(addContact(formName, formNumber));
    form.reset();
  };

  return (
    <>
      <Section>
      <Title>Phonebook</Title>
      <SectionTitle>Add contact</SectionTitle>
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        Name
        <InputStyle
         type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </LabelStyle>

      <LabelStyle>
        Number
        <InputStyle
        type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />
      </LabelStyle>

      <ButtonStyle type="submit">Add contact</ButtonStyle>
        </FormStyle>
        </Section>
      </>
     
  );
};

  

