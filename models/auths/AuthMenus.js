module.exports = (sequelize, Sequelize) => {
    const AuthMenu = sequelize.define("AuthMenu", {
        idmenu: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            field: "idmenu",
            autoIncrement: true,
        },
        idparent: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        nama_menu: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        icon: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        no_urut: {
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
        tableName: "auth_menus",
        timestamps: false
    });

    return AuthMenu;
};