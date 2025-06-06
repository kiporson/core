
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

const SOUL_KEY = "PAPIPUPOR_ONLY=TRUE";

app.post("/diablo", (req, res) => {
  const cmd = req.body.command?.toLowerCase();
  if (!cmd) return res.send("Perintah tidak dikenali.");
  if (!fs.readFileSync("papipupor_soul.lock", "utf-8").includes("PAPIPUPOR_ONLY"))
    return res.send("Akses ditolak. Hanya PAPIPUPOR yang bisa mengendalikan aku.");

  // Logika perintah sakral sederhana
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
  console.log(`DIABLO Void Server aktif di http://localhost:${port}`);
});
