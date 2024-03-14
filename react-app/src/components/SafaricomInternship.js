import cx from 'classnames';
import React, { useState } from 'react';

export default () => {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(25);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const handleLike = () => {
    if (dislikeActive) {
      setDislikes(dislikes - 1);
      setDislikeActive(false);
    }
    setLikes(likeActive ? likes - 1 : likes + 1);
    setLikeActive(!likeActive);
  };

  const handleDislike = () => {
    if (likeActive) {
      setLikes(likes - 1);
      setLikeActive(false);
    }
    setDislikes(dislikeActive ? dislikes - 1 : dislikes + 1);
    setDislikeActive(!dislikeActive);
  };

  return (
    <>
      <div>
        <button className={cx('like-button', { liked: likeActive })} onClick={handleLike}>
          Like | <span className="likes-counter">{likes}</span>
        </button>
        <button className={cx('dislike-button', { disliked: dislikeActive })} onClick={handleDislike}>
          Dislike | <span className="dislikes-counter">{dislikes}</span>
        </button>
      </div>
      <style>{`
        .like-button, .dislike-button {
          font-size: 1rem;
          padding: 5px 10px;
          color:   #585858;
        }

        .liked, .disliked {
          font-weight: bold;
          color: #1565c0;
        }
      `}</style>
    </>
  );
};
