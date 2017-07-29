import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const User = sequelize.define(
  'user',
  {
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nickname: {
      field: 'nickname',
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      field: 'username',
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      field: 'password',
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
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  }
)

// sequelize.sync({ alter: true })

export default User
