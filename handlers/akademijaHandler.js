const Akademija = require("../akademija/akademijaSchema");

exports.update = async (req, res) => {
    try {
      console.log(req.file);
      console.log(req.body);
  
      if (req.file) {
        req.body.slika = req.file.filename;
      }
      console.log(req.body.slika);
  
  
      const Akademija = await Akademija.findByIdAndUpdate(
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
          Akademija,
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
      const novaAkademija = await Akademija.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          avtomobil: novaAkademija,
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
      const Akademija = await Akademija.find();
  
      res.status(200).json({
        status: "success",
        data: {
          Akademija,
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
      await Akademija.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err });
    }
  };