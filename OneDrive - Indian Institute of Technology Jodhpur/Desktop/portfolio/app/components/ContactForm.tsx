"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const endpoint =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/yourFormId";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setSuccess("Thanks! Your message was sent.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await res.json();
        setError(data?.error || "Submission failed. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="mt-1 w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 bg-transparent"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="mt-1 w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 bg-transparent"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="mt-1 w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 bg-transparent"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows={6}
            placeholder="Your message"
            required
            className="mt-1 w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 bg-transparent"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <div className="text-sm text-green-600">{success}</div>}
          {error && <div className="text-sm text-red-600">{error}</div>}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400">Powered by Formspree — set NEXT_PUBLIC_FORM_ENDPOINT in .env.local</p>
    </form>
  );
}
