import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h2>Contact +998-87-293-11-22</h2>
      <form className="card wide form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ismingiz" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Xabaringiz" required />
        <button className="btn" type="submit">Yuborish</button>
        {sent && <p className="muted">Rahmat! Xabaringiz qabul qilindi.</p>}
      </form>
    </section>
  );
}
