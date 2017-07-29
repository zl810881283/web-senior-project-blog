import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const Token = sequelize.define(
  'token',
  {
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    userId: {
      field: 'userId',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    token: {
      field: 'token',
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      field: 'createdAt',
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: new Date().getTime()
    },
    updatedAt: {
      field: 'updatedAt',
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: new Date().getTime()
    }
  }, {
    tableName: 'token',
    timestamps: false,
    freezeTableName: true
  }
)

// sequelize.sync({ alter: true })

export default Token
