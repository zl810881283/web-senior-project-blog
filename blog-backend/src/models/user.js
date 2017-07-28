import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const User = sequelize.define(
  'user',
  {
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
    }
  }, {
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  }
)

export default User
