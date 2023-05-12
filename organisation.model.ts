import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
// Define the schema for the organisation
const OrganisationSchema = new mongoose.Schema(
    {
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
    },
    {
        virtuals: {
            orgId: {
                get() {
                    return this._id;
                },
            },
        },
    },
);

// Create the model
const Organisation = mongoose.model('Organisation', OrganisationSchema);
export default Organisation;
