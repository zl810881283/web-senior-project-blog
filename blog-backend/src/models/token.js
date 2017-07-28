import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const Token = sequelize.define(
  'token',
  {
    userId: {
      field: 'user_id',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    token: {
      field: 'token',
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'token',
    timestamps: false,
    freezeTableName: true
  }
)

export default Token
