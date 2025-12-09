import express from "express";
import Items from "./models/items.js";
import db from "./models/connection.js";

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function initDB() {
    try {
        await db.authenticate(); 
        console.log('Berhasil connect cuy');
        
        await Items.sync(); 
        console.log('Table items sudah tersinkronisasi');
    } catch (error) {
        console.error('Koneksi Gagal:', error);
    }
}
initDB();

app.get("/", async (req, res) => {
    try {
        const result = await Items.findAll(); 
        
        res.render("index", { barang: result });
    } catch (err) {
        console.error("Error mengambil data:", err);
        res.render("index", { barang: [] }); 
    }
});

app.get("/tambah", (req, res) => {
    res.render("addData");
});

app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Items.findOne({ where: { id: id } }); 

        if (result != null) {
            res.render("editData", { barang: result });
        } else {
            res.redirect("/");
        }
    } catch (err) {
        console.error("Error mencari data:", err);
        res.redirect("/");
    }
});

app.post("/api/items", async (req, res) => { 
    const { name, qty_stock, price } = req.body;

    try {
        const result = await Items.create({ name, qty_stock, price });
        res.status(200).send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    } catch (err) {
        console.error("Error membuat data:", err);
        res.status(500).send(JSON.stringify({ "status": 500, "error": err, "response": null }));
    }
});

app.put("/api/items/:id", async (req, res) => {
    const { name, qty_stock, price } = req.body;
    const id = req.params.id;

    try {
        const result = await Items.update({ name, qty_stock, price }, { where: { id: id } });
        res.status(200).send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    } catch (err) {
        console.error("Error update data:", err);
        res.status(500).send(JSON.stringify({ "status": 500, "error": err, "response": null }));
    }
});

app.delete("/api/items/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Items.destroy({ where: { id: id } });
        res.status(200).send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    } catch (err) {
        console.error("Error delete data:", err);
        res.status(500).send(JSON.stringify({ "status": 500, "error": err, "response": null }));
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});