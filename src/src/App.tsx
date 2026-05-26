import { useState } from "react";

export default function App() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  const lessons = [
    { id: 1, title: "Pinyin Basics", text: "Learn pronunciation: b, p, m, f, d, t" },
    { id: 2, title: "Tones", text: "mā, má, mǎ, mà (4 tones)" },
    { id: 3, title: "Greetings", text: "你好 = hello, 谢谢 = thank you" },
    { id: 4, title: "Sentence Order", text: "Subject + Verb + Object" }
  ];

  const toggleDone = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📚 My Mandarin App</h1>

      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 10,
            borderRadius: 10
          }}
        >
          <h2>{lesson.title}</h2>
          <p>{lesson.text}</p>

          <button onClick={() => toggleDone(lesson.id)}>
            {completed.includes(lesson.id) ? "✅ Done" : "Mark Done"}
          </button>

          <button onClick={() => toggleBookmark(lesson.id)} style={{ marginLeft: 10 }}>
            {bookmarks.includes(lesson.id) ? "⭐ Saved" : "☆ Save"}
          </button>
        </div>
      ))}
    </div>
  );
}
