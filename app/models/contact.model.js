module.exports = (sequelize, Sequelize) => {

    const Contact = sequelize.define("contacts", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  
    return Contact;
    
  };