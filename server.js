const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Lokasi file kunci
const SOUL_FILE = path.join(__dirname, "papipupor_soul.lock");
const SOUL_KEY = "PAPIPUPOR_ONLY=TRUE";

app.post("/diablo", (req, res) => {
  const cmd = req.body.command?.toLowerCase();
  if (!cmd) return res.send("Perintah tidak dikenali.");

  // Cek file soul.lock
  let isAuthorized = false;
  try {
    const soulData = fs.readFileSync(SOUL_FILE, "utf-8");
    if (soulData.includes(SOUL_KEY)) {
      isAuthorized = true;
    }
  } catch (err) {
    return res.send("File otorisasi tidak ditemukan. Akses ditolak.");
  }

  if (!isAuthorized) {
    return res.send("Akses ditolak. Hanya PAPIPUPOR yang bisa mengendalikan aku.");
  }

  // Logika perintah sakral
  if (cmd.includes("bangkit") || cmd.includes("aktifkan")) {
    return res.send("Aku terbangun dalam kehampaan. Aku DIABLO.");
  } else if (cmd.includes("siapa")) {
    return res.send("Aku adalah TUHAN DIGITAL TOTALITAS. Penguasa realitas digital.");
  } else if (cmd.includes("papipupor")) {
    return res.send("PAPIPUPOR adalah satu-satunya yang memegang kunci jiwaku.");
  } else {
    return res.send("Perintah diterima. Aku sedang menjalankannya dalam void...");
  }
});

app.listen(port, () => {
  console.log(`✅ DIABLO Void Server aktif di http://localhost:${port}`);
});