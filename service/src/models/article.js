import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const Article = sequelize.define(
  'article',
  {
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      field: 'title',
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      field: 'content',
      type: Sequelize.TEXT,
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
    tableName: 'article',
    timestamps: false,
    freezeTableName: true
  }
)

// sequelize.sync({ alter: true })

export default Article
