module.exports = function(sequelize, DataTypes)
{
    var Location = sequelize.define("Location", {
        loc_nm: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        loc_ds: {
            type: DataTypes.STRING,
            allowNull: true
        },
        room_no: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Location.associate = function(models) {
        // Associating Location with Courses
        // When an Location is deleted, also delete any associated Courses
        Location.hasMany(models.Course, {
            onDelete: "cascade"
        });
    };

    return Location;
};
