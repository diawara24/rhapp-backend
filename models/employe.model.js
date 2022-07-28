module.exports=mongoose=>{
    var employeSchema = mongoose.Schema(
    {
        nom: {
            type: String
        },
        prenom: {
            type: String
        },
        email: {
            type: String
        },
        adresse: {
            type: String
        },
        telephone: {
            type: String
        },
        grade: {
            type: String
        },
        specialite: {
            type: String
        },
        salaire: {
            type: String
        }
    },
    { timestamps: true }
    );
    employeSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Employe = mongoose.model("employe", employeSchema);
    return Employe;
};

