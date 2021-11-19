import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/slice/slice";
import css from "../PhoneItem/PhoneItem.module.css";

function PhoneItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <p>{name}</p>: <p className={css.text}>{number}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

PhoneItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default PhoneItem;
