import ContactListItem from './ContactListItem';

export default function ContactList({ list, onDeleteContact }) {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
