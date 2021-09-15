const express = require("express");
const app = express();

app.get("/nomor1", async (req, res) => {
  try {
    const produk = [
      { id_produk: 1, nama_produk: "Huawei P30 pro" },
      { id_produk: 2, nama_produk: "Huawei Nova 5T" },
    ];

    const stok_produk = [
      { id_produk: 1, qty: 15 },
      { id_produk: 1, qty: 6 },
      { id_produk: 2, qty: 4 },
      { id_produk: 2, qty: 18 },
    ];

    let arr1 = [];
    for (let i = 0; i < 2; i++) {
      let nameAndQty = {
        nama_produk: Object.values(produk)[i].nama_produk,
        total_stock:
          Object.values(stok_produk)[i * 2].qty +
          Object.values(stok_produk)[i * 2 + 1].qty,
      };
      arr1.push(nameAndQty);
    }

    return res.status(200).json({
      result: arr1,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      statustext: "Internal Server Error",
      success: false,
      message: "Failed to get data",
    });
    console.log(err);
  }
});

const PORT = 1927;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
