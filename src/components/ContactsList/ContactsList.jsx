
import { getContactsFilter, getContactsList } from '../../redux/selector';

import { useSelector, useDispatch } from 'react-redux';
import { List, ItemContacts, ButtonContacts, Section, SectionTitle, Message } from '../ContactsList/ContactsList.styled.js';
import { deleteContact } from '../../redux/redusers/contacts';


export const ContactsList = () => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };
  
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];


  return (
    <Section>
      <SectionTitle>Contacts</SectionTitle> 
      <List>
        { visibleContacts.length !== 0 ? 
          (visibleContacts.map(({ name, number, id }) => (
        <ItemContacts key={id} id={id}>
           { name + ':' + number }   
              <ButtonContacts
                type="button"
                name="delete"
                onClick={() => handleDeleteContact(id)}
              >
                delete
            </ButtonContacts>
              </ItemContacts>
      ))) : 
      (<Message>
        There are no contacts in your phonebook. Please add your first
        contact!
      </Message>)}
      </List>
   </Section>
  );
};



