import { useEffect, useState } from "react";
import { ThumbUpOffAltOutlined,ThumbUp } from "@mui/icons-material/";
import "./App.css";
import { Stack,Paper } from "@mui/material";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map((post) => (
          <Paper elevation={16} key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-tags-reactions">
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <p key={tag} className="post-tag">
                    {tag}
                  </p>
                ))}
              </div>
              { 
                <div className="post-reaction">
                  <ThumbUpOffAltOutlined />
                  <p className="post-reactions">{post.reactions}</p>
                </div>
              }
            </div>
          </Paper>
        ))}
    </div>
  );
}

export default App;
