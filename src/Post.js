import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerUserCred">
                  {verified && <VerifiedUserIcon className="post__verified" />}{" "}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon
              className="post__commentIcon"
              fontSize="small"
            />
            <RepeatIcon className="post__retweetIcon" fontSize="small" />
            <FavoriteBorderIcon className="post__likeIcon" fontSize="small" />
            <PublishIcon className="post__forwardIcon" fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
