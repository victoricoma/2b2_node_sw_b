const {Sequelize, DataType, DataTypes} = require('sequelize')
const config = require('./app/src/db/config')

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
)

const models = {
    Departamento: require('./app/src/models/departamento')(sequelize, DataTypes),
    Empregado: require('./app/src/models/empregado')(sequelize, DataTypes),
    Dependente: require('./app/src/models/dependente')(sequelize, DataTypes),
}
Object.values(models).forEach(m => m.associate && m.associate(models));

module.exports = {sequelize, Sequelize, ...models}