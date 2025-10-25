import React from "react";

export default function App() {
  return (
    <div style={{ padding: "1.25rem" }}>
      <h1>WorkSquad + React + Vite 🎉</h1>
      <p>
        This page is served through Nginx → proxied to the frontend container.
      </p>
      <p>
        CSS is loaded from <code>/static/style.css</code> directly by Nginx.
      </p>
      <ul>
        <li><a href="/">/</a> (this page)</li>
        <li><a href="/healthz">/healthz</a> (Nginx)</li>
        <li><a href="/static/style.css">/static/style.css</a> (Nginx static)</li>
      </ul>
    </div>
  );
}
