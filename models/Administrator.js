module.exports = function(sequelize, DataTypes)
{
    var Administrator = sequelize.define("Administrator", {
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
            allowNull: true
        },
        str_adr_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip_cd: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 5]
            } 
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Administrator.associate = function(models) {
        // Associating Administrator with Courses
        // When an Administrator is deleted, also delete any associated Courses
        Administrator.hasMany(models.Course, {
            onDelete: "cascade"
        });
    };

    return Administrator;
};
