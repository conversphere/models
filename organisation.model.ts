import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
// Define the schema for the organisation
const OrganisationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        optional: true,
    },
    description: {
        type: String,
        optional: true,
    },
});

// Hash the password before saving
OrganisationSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        // Hash the password
        const hash = bcrypt.hashSync(this.password, 10);

        // Set the password to the hash
        this.password = hash;
    }

    next();
});

// Create the model
const Organisation = mongoose.model('Organisation', OrganisationSchema);
export default Organisation;
