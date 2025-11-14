module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define('Departamento', {
        cod_depto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        tableName: 'departamento',
        timestamps: false,
        underscored: true
    });

    Departamento.associate = (models) => {
        Departamento.hasMany(models.Empregado, {
            foreignKey: 'cod_depto',
            as: 'empregados'
        });
    };
    return Departamento;
};