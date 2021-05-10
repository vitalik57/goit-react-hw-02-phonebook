import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class Input extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: ""
  };
  handlChangeAll = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  // handleNameInput = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // handleNumberInput = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };
  handleSubmite = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmite}>
          <label>
            Name:
            <input
              onChange={this.handlChangeAll}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number:
            <input
              onChange={this.handlChangeAll}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </form>
      </>
    );
  }
}

export default Input;
