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
                type: DataTypes.STRING(50),
                allowNull: true,
                field: "logo",
                validate: {
                    notEmpty: false
                }
            },
            CreatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: "created_at",
                defaultValue: sequelize.fn('now'),
                validate: {
                    notEmpty: false
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
            UpdateAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: "update_at",
                defaultValue: sequelize.fn('now'),
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
            timestamps: false
        }
    );

    return MasterClients;
}