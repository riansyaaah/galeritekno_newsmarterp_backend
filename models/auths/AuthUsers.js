module.exports = (sequelize, Sequelize) => {
    const AuthUser = sequelize.define("AuthUser", {
        iduser: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            field: "iduser",
            autoIncrement: true,
        },
        idcabang: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        idclient: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        password_default: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        isactive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.fn('now'),
            allowNull: false
        },
        created_by: {
            type: Sequelize.STRING,
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            allowNull: true
        },
        updated_by: {
            type: Sequelize.STRING,
            allowNull: true
        },
        trash: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        freezeTableName: true,
        tableName: "auth_users",
        timestamps: false
    });

    return AuthUser;
};