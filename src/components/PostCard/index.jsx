import Prop from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {id} - {title}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: Prop.string.isRequired,
  cover: Prop.string.isRequired,
  body: Prop.string.isRequired,
  id: Prop.number.isRequired,
};
