module.exports = (sequelize, DataTypes) => {
    const MasterClients = sequelize.define(
        "MasterClients",
        {
            IdClient: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "idclient",
                autoIncrement: true,
                validate: {
                    notEmpty: true
                }
            },
            NamaClient: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "namaclient",                
                validate: {
                    notEmpty: true
                }
            },
            Url: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "url",                
                validate: {
                    notEmpty: true
                }
            },
            Logo: {
                type: DataTypes.STRING(200),
                allowNull: true,
                field: "logo",                    
                validate: {
                    notEmpty: false
                }
            },
            IsActive: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "is_active",    
                defaultValue: 1,                 
                validate: {
                    notEmpty: true
                }
            },
            CreatedBy: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "created_by",                
                validate: {
                    notEmpty: false
                }
            },
            UpdateBy: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "update_by",                
                validate: {
                    notEmpty: false
                }
            },
        },
        {
            freezeTableName: true,
            tableName: "master_clients",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    MasterClients.associate = function(models) {
        MasterClients.hasMany(models.MasterCabangs, {
            foreignKey: "IdClient",
            as: "masterclients",
            onDelete: 'RESTRICT'
        })
    }

    return MasterClients;
}