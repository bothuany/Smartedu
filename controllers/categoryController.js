const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    const errors = validationResult(req);

    for (let i = 0; i < errors.array().length; i++) {
      req.flash("error", errors.array()[i].msg);
    }

    res.status(400).redirect("/users/dashboard");
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);

    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    const errors = validationResult(req);

    for (let i = 0; i < errors.array().length; i++) {
      req.flash("error", errors.array()[i].msg);
    }

    res.status(400).redirect("/users/dashboard");
  }
};
