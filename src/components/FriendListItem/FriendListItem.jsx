import PropTypes from "prop-types";
import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
    const classNames = clsx(css.ontine, isOnline ? css.isOnline : css.offline);
    return <li className={css.container}>
        <img src={avatar} alt="User avatar" width="48" />
         <p className={css.name}>{name}</p>
         <p>{(isOnline ? <span className={classNames}>Online</span> : <span className={classNames}>offline</span>)}</p>
    </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
