'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert(
			'customers',
			[
				{
					fullname: 'John Doe',
          username: 'john',
          email: 'john@mail.com',
          phone_number: '089755554'
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
