import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setPost(null);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Post topilmadi");
        return res.json();
      })
      .then(setPost)
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <section>
      <Link to="/posts" className="back">← Orqaga</Link>
      {error && <p className="muted">{error}</p>}
      {!post && !error && <p className="muted">Yuklanmoqda...</p>}
      {post && (
        <div className="card wide">
          <span className="num">{post.id}</span>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </section>
  );
}
