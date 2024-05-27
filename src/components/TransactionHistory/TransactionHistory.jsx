import PropTypes from "prop-types";
import css from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
    return <table className={css.container}>
        <thead className={css.head}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td className={css.type}>{type}</td>
                    <td>{amount}</td>
                    <td className={css.currency}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;