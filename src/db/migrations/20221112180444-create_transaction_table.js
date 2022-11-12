'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      transactionId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
      },
      vendorName: {
        type: Sequelize.STRING,
      },
      customerName: {
        type: Sequelize.STRING,
      },      
      total: {
        type: Sequelize.INTEGER,
      },
      notificationUrl: {
        type: Sequelize.STRING,
      },
      bcaVa: {
        type: Sequelize.STRING,
      },
      bniVa: {
        type: Sequelize.STRING,
      },
      briVa: {
        type: Sequelize.STRING,
      },
      mandiriVa: {
        type: Sequelize.STRING,
      },
      alfamartCode: {
        type: Sequelize.STRING,
      },
      indomartCode: {
        type: Sequelize.STRING,
      },
      brilinkCode: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};