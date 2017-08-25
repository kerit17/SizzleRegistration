module.exports = function(sequelize, DataTypes)
{
    var Course = sequelize.define("Course", {
        crs_nm: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },        
        crs_ds: {
            type: DataTypes.STRING,
            allowNull: true
        },        
        crs_dys: {
            type: DataTypes.STRING,
            allowNull: true
        },        
        crs_str_dt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },        
        crs_stp_dt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },        
        crs_str_tm: {
            type: DataTypes.TIME,
            allowNull: true
        },
        crs_end_tm: {
            type: DataTypes.TIME,
            allowNull: true
        }
    });

    Course.associate = function(models) {
        // We're saying that a Course can belong to an Administrator.
        // A Course can't be created without an Administrator due to foreign key constraint.
        Course.belongsTo(models.Administrator, {
            foreignKey: {
                allowNull: false
            }
        });
    };    

    Course.associate = function(models) {
        // We're saying that a Course should belong to an Location
        // A Course can't be created without a Location due to the foreign key constraint
        Course.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
    };    

    return Course;
};
