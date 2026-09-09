const express = require("express");
const cors = require("cors");
const path = require("path");

const noticesRouter = require("./routes/notices");
const admissionsRouter = require("./routes/admissions");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve the frontend directly too, so the whole project can run from one server
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "sha-arts-science-portal-api", time: new Date().toISOString() });
});

app.use("/api/notices", noticesRouter);
app.use("/api/admissions", admissionsRouter);
app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Route not found." });
});

const HOST = "0.0.0.0";
const server = app.listen(PORT, HOST, () => {
  console.log(`\n==================================================`);
  console.log(`Sha's Arts and Science College portal API running at:`);
  console.log(`  👉 http://localhost:${PORT}`);
  console.log(`  👉 http://127.0.0.1:${PORT}`);
  console.log(`==================================================\n`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`\nNotice: Port ${PORT} is already in use (the portal is already actively running!).`);
    console.log(`You can open your browser directly at: http://localhost:${PORT}\n`);
    process.exit(0);
  } else {
    console.error("Server error:", err);
    process.exit(1);
  }
});
