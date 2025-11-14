module.exports = (sequelize, DataTypes) => {
    const Empregado = sequelize.define('Empregado', {
        cod_emp: {
            type: DataTypes.INTEGER,
            primaryKey: true, autoIncrement: true
        },
        cod_depto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dt_nascimento: DataTypes.DATEONLY,
        sexo: DataTypes.CHAR(1),
        dt_admissao: DataTypes.DATEONLY,
        civil: DataTypes.CHAR(1),
        salario: DataTypes.DECIMAL(10, 2)
    }, {
        tableName: 'empregado',
        timestamps: false,
        underscored: true
    });

    Empregado.associate = (models) => {
        Empregado.belongsTo(models.Departamento, { foreignKey: 'cod_depto', as: 'departamento' });
        Empregado.hasMany(models.Dependente, { foreignKey: 'cod_emp', as: 'dependentes' });
    };
    return Empregado;
};