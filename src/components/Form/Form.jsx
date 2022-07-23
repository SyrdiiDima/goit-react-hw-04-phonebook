import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css'




class Form extends Component {
    state = {
        name:'',
        number: '',
    };


     
    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
        //  console.log(event.currentTarget);
    }

     
     
    handleSubmit = event => {
        const { name, number } = this.state;
        event.preventDefault();

       
        const contactItem = {
            id: nanoid(10),
            name,number,
        }

        const matchName = this.props.contactsName.some(
            contactName => name.toLowerCase() === contactName.toLowerCase()
        );
        if (matchName) {
            return alert(`${name} is already in contacts`);
        }

        this.props.onSubmit(contactItem);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };

    
    render() {

        return (
            <form onSubmit={this.handleSubmit} className={css.form} >
                <label >
                    Name
                    <input
                        className={css.form_input}
                        type="text"
                        name="name"
           
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        value={this.state.name}
            
                    />
                </label>

                <label >
                    Number
                    <input
                         className={css.form_input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        value={this.state.number}
                    />
                </label>

                <button type="submit" className={css.btn_close}>
                    Add contact
                </button>
            </form>
        );
    }
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsName: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form