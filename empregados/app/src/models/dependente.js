module.exports = (sequelize, DataTypes) => {
    const Dependente = sequelize.define('Dependente', {
      cod_dep: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
      cod_emp: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
      nome: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
      dt_nascimento: DataTypes.DATEONLY,
      sexo: DataTypes.CHAR(1)
    }, { 
        tableName: 'dependente', 
        timestamps: false, 
        underscored: true 
    });
  
    Dependente.associate = (models) => {
      Dependente.belongsTo(models.Empregado, { foreignKey: 'cod_emp', as: 'empregado' });
    };
    return Dependente;
  };