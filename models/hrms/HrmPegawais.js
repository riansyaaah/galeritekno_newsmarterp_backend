module.exports = (sequelize, Sequelize) => {
    const HrmPegawai = sequelize.define("HrmPegawai", {
        idpegawai: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            field: "idpegawai",
            autoIncrement: true,
        },
        iduser: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        nama_lengkap: {
            type: Sequelize.STRING,
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
        tableName: "hrm_pegawais",
        timestamps: false
    });

    return HrmPegawai;
};