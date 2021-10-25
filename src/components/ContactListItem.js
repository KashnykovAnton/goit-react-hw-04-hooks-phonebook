export default function ContactList({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" id={id} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
