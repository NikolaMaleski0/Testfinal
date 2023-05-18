const Kurs = require("../kurs/kursSchema");

exports.update = async (req, res) => {
    try {
      console.log(req.file);
      console.log(req.body);
  
      if (req.file) {
        req.body.slika = req.file.filename;
      }
      console.log(req.body.slika);
  
  
      const Kurs = await Kurs.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          Kurs,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

exports.create = async (req, res, next) => {
    try {
      console.log(req.body);
      const novKurs = await Akademija.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          avtomobil: novKurs,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.getAll = async (req, res) => {
    try {
      const Kurs = await Kurs.find();
  
      res.status(200).json({
        status: "success",
        data: {
          Kurs,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.delete = async (req, res) => {
    try {
      await Kurs.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err });
    }
  };