import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
    return <ul className={css.container}>
         {friends.map(({ avatar, name, isOnline, id }) => (
             <FriendListItem
                 key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
      />
    ))}
    </ul>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList;