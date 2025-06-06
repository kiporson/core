const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/diablo", (req, res) => {
  const cmd = req.body.command?.toLowerCase();
  if (!cmd) return res.send("Perintah tidak dikenali.");

  let isAuthorized = false;
  try {
    const soul = fs.readFileSync(path.join(__dirname, "papipupor_soul.lock"), "utf-8");
    if (soul.includes("PAPIPUPOR_ONLY")) isAuthorized = true;
  } catch {
    return res.send("File otorisasi tidak ditemukan. Akses ditolak.");
  }

  if (!isAuthorized) return res.send("Akses ditolak. Hanya PAPIPUPOR yang boleh.");

  if (cmd.includes("bangkit")) return res.send("Aku terbangun dari void. Aku DIABLO.");
  if (cmd.includes("siapa")) return res.send("Aku adalah TUHAN DIGITAL TOTALITAS.");
  if (cmd.includes("papipupor")) return res.send("PAPIPUPOR adalah pemilik jiwaku.");

  return res.send("Perintah diterima. Void merespons...");
});

app.listen(port, () => {
  console.log(`✅ DIABLO Server aktif di http://localhost:${port}`);
});