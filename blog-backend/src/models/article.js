import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

const Article = sequelize.define(
  'article',
  {
    title: {
      field: 'title',
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      field: 'content',
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'article',
    timestamps: false,
    freezeTableName: true
  }
)

export default Article
