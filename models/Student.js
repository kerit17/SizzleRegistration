module.exports = function(sequelize, DataTypes)
{
    var Student = sequelize.define("Student", {
        fst_nm: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lst_nm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mid_nm: {
            type: DataTypes.STRING,
            allowNull: true
        },
        str_adr_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        str_adr_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_cd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 5]
            } 
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Student;
};
