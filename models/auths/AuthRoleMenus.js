module.exports = (sequelize, Sequelize) => {
    const AuthRoleMenu = sequelize.define("AuthRoleMenu", {
        idrolemenu: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            field: "idrolemenu",
            autoIncrement: true,
        },
        iduser: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        idmenu: {
            type: Sequelize.BIGINT,
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
        tableName: "auth_role_menus",
        timestamps: false
    });

    return AuthRoleMenu;
};