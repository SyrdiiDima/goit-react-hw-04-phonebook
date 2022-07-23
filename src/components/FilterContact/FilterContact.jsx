import PropTypes from "prop-types";
import css from "./FilterContact.module.css"

const FilterContact = ({ value, onChange }) => {
    return (
        <div>
            <p className={css.title}>Find contact by name</p>
            <input
                className={css.flt_input}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default FilterContact;

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};