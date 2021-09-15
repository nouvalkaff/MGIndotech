const express = require("express");
const app = express();

app.get("/nomor3", async (req, res) => {
  try {
    const arraysOfObject = [
      { nama: "Smith", hobi: "Self Service" },
      { nama: "Dio", hobi: "Design Grafis" },
      { nama: "Agung", hobi: "Bermain Game" },
    ];

    function getResult(nama, hobi) {
      let arr = [];
      let data = {
        nama: getName(nama),
        hobi: getHobi(hobi),
      };
      arr.push(data);
      return arr;
    }

    function getName(nama) {
      if (nama == "Smith") {
        const theName = Object.values(arraysOfObject)[0].nama;
        return theName;
      }
      if (nama == "Dio") {
        const theName = Object.values(arraysOfObject)[1].nama;
        return theName;
      }
      if (nama == "Agung") {
        const theName = Object.values(arraysOfObject)[2].nama;
        return theName;
      }
    }

    function getHobi(hobi) {
      if (hobi == "Self Service") {
        const theHobi = Object.values(arraysOfObject)[0].hobi;
        return theHobi;
      }
      if (hobi == "Design Grafis") {
        const theHobi = Object.values(arraysOfObject)[1].hobi;
        return theHobi;
      }
      if (hobi == "Bermain Game") {
        const theHobi = Object.values(arraysOfObject)[2].hobi;
        return theHobi;
      }
    }

    return res.status(200).json({
      result: getResult("Agung", "Self Service"),
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
