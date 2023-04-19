import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function PostsExcerpt({ post }) {
    return (
        <article>
            <h3>{post.title}</h3>
            <h4>{post.body.substring(0, 100)}</h4>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
}

export default PostsExcerpt;