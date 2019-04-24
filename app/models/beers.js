module.exports = function(sequelize, Sequelize) {
  var Beer = sequelize.define(
    "beer",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beer_name: { type: Sequelize.STRING, notEmpty: true },
      brewery: { type: Sequelize.STRING, notEmpty: true },
      beer_type: { type: Sequelize.STRING, notEmpty: true },
      prof: { type: Sequelize.STRING, notEmpty: true }
    },
    {
      timestamps: false
    }
  );

  return Beer;
};
