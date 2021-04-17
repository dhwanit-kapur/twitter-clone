import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const submitTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Dhwanit Kapur",
      username: "DhwanitKapur",
      text: tweetMessage,
      avatar:
        "https://pbs.twimg.com/profile_images/1237830356096581633/kax2A6Xf_400x400.jpg",
      verified: true,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1237830356096581633/kax2A6Xf_400x400.jpg" />
          <input
            type="text"
            placeholder="What's happening ?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={submitTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
