import Prop from 'prop-types';
import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: Prop.arrayOf(
    Prop.shape({
      title: Prop.string.isRequired,
      cover: Prop.string.isRequired,
      body: Prop.string.isRequired,
      id: Prop.number.isRequired,
    }),
  ),
};
