import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema(
    {
        //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
        registrationNo: { type: Number, required: false },
        registrationDate: { type: Date, required: false },
        samajName: { type: String, required: false },
        NRI: { type: Boolean, required: false },
        gender: { type: String, required: false },
        name: { type: String, required: false },
        middleName: { type: String, required: false },
        lastName: { type: String, required: false },
        currentAddress: { type: String, required: false },
        permenantAddress: { type: String, required: false },
        parentsMobile: { type: Number, required: false },
        email: { type: String, required: false },
        native: { type: String, required: false },
        birthDate: { type: Date, required: false },
        birthTime: { type: Date, required: false },
        birthPlace: { type: String, required: false },
        subCaste: { type: String, required: false },
        mosal: { type: String, required: false },
        height: { type: String, required: false },
        weight: { type: Number, required: false },
        eyeSight: { type: Boolean, required: false },
        horoscopeBelief: { type: Boolean, required: false },
        saniMangal: { type: Boolean, required: false },
        complexion: { type: String, required: false },
        disability: { type: Boolean, required: false },
        hobby: { type: String, required: false },
        maritalStatus: { type: String, required: false },
        marriageDate: { type: Date, required: false },
        divorceDate: { type: Date, required: false },
        childResponsibility: { type: Boolean, required: false },
        education: { type: String, required: false },
        occupation: { type: String, required: false },
        title: { type: String, required: false },
        workAddress: { type: String, required: false },
        otherQualities: { type: String, required: false },
        monthlyIncome: { type: Number, required: false },
        currency: { type: String, required: false },
        ownHouse: { type: Boolean, required: false },
        preference: { type: String, required: false },
        familyBackground: { type: String, required: false },
        fatherName: { type: String, required: false },
        fatherEducation: { type: String, required: false },
        fatherOccupation: { type: String, required: false },
        fatherMobile: { type: Number, required: false },
        motherName: { type: Number, required: false },
        motherEducation: { type: String, required: false },
        motherOccupation: { type: String, required: false },
        motherMobile: { type: Number, required: false },
        familyIncome: { type: Number, required: false },
        grandfatherName: { type: String, required: false },
        brothers: { type: Number, required: false },
        brothersMaritalStatus: { type: String, required: false },
        sisters: { type: Number, required: false },
        sistersMaritalStatus: { type: String, required: false },
        whyMe: { type: String, required: false },
        reference: { type: Boolean, required: false },
        refName: { type: String, required: false },
        refVillage: { type: String, required: false },
        refMobile: { type: Number, required: false },
        image: { type: String, required: false },
    },
    {
        timestamps: false,
    },

);

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);
export default Candidate;
