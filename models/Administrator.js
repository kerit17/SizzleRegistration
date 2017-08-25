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
        gender: {
            type: DataTypes.STRING,
            allowNull: false
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
