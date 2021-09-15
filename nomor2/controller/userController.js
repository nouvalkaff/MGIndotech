const mongoose = require("mongoose");
const userModel = require("../database/model/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await userModel.create({
      ...req.body,
    });

    return res.status(200).json({
      statusCode: 200,
      statusText: "OK",
      message: "Success",
      customer: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      statusCode: 409,
      statusText: "Conflict",
      message: "Input Customer Checkout Data Failed",
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const dataUser = await userModel.find();

    res.status(200).send({
      statusCode: 200,
      statusText: "OK",
      message: "Success",
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      statusMessage: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const newData = { ...req.body };

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(500).send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await userModel.findById(_id);
    if (!data) {
      return res.status(500).send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "ID not found",
      });
    } else {
      const updatedUser = await userModel.findByIdAndUpdate(_id, newData, {
        new: true,
      });
      return res.status(200).send({
        statusCode: 200,
        statusText: "success",
        data: updatedUser,
      });
    }
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format ID invalid",
    });
  } else {
    const data = await userModel.findById(id);
    if (!data) {
      return res.status(500).send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      await userModel.findByIdAndRemove(id);
      return res.status(500).send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "User data has been deleted succesfully",
      });
    }
  }
};
