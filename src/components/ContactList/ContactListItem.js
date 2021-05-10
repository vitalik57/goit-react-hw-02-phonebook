import React from "react";
import PropTypes from "prop-types";
import styles from "../ContactList/Contact.module.css";

const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <>
      <li>
        {name} : {number}
      </li>

      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
