import PropTypes from "prop-types";
import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return <div className={css.container}>
 <div className={css.profile}> 
            <img
                className={css.profileImg}
 src={image}
 alt="User avatar"
 />
 <p className={css.name}>{name}</p>
 <p className={css.txt}>@{tag}</p>
 <p className={css.txt}>{location}</p>
 </div>

 <ul className={css.list}>
 <li className={css.item}>
 <span>Followers</span>
 <span>{stats.likes}</span>
 </li>
 <li className={css.item}>
 <span>Views</span>
 <span>{stats.views}</span>
 </li>
 <li className={css.item}>
 <span>Likes</span>
 <span>{stats.likes}</span>
 </li>
</ul>
</div>
}

Profile.propTypes = {
    userData: {
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stats: PropTypes.number.isRequired,
    }
};

export default Profile;