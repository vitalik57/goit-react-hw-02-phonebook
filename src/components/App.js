import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Section from "./Section/Section";
import { addContact, removeContact, getAllContacts } from "../redux/clientsActions";
import { connect } from "react-redux";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    // this.props.getAllContacts(e);
  };

  removeContact = id => {
    const { contacts } = this.state;
    const updated = contacts.filter(contact => contact.id !== id);
    // this.setState({
    //   contacts: [...updated]
    // });
    this.props.removeContact(id);
  };

  addContact = contact => {
    const newName = contact.name;
    // const names = this.props.contacts.map(contact => contact.name.toLowerCase());
    const names = this.state.contacts.map(contact => contact.name.toLowerCase());

    if (names.includes(newName.toLowerCase())) {
      alert(`${newName} is already in contact list`);
    } else {
      // this.setState(state => ({
      //   contacts: [...state.contacts, contact]
      // }));
      this.props.addContact({ ...this.state.contacts, contact });
      //без this не працюэ
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.handleChange} />}
          {contacts.length ? (
            <ContactList contacts={this.getVisibleContacts()} onRemove={this.removeContact} />
          ) : (
            //  <ContactList contacts={this.getVisibleContacts()} onRemove={this.removeContact} />
            <p>There are no contacts here</p>
          )}
        </Section>
      </>
    );
  }
}
const mSTP = state => ({
  contacts: state.contacts
});
// const mapStateToProps = (state, ownProps) => {
//   return {
//     prop: state.prop
//   };
// };
export default connect(
  mSTP,
  { addContact, removeContact, getAllContacts }
)(App);
