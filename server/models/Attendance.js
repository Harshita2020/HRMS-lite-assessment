import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
        employeeId: {
            type: Number,
            required: true,
            // unique: true,
        },
        date: {
            type: Date,
            required: true
        },
        status:{
            type: "string",
            enum: ["Present", "Absent", "Leave"],
            required: true
        }
    },
    {timestamps: true}
);

const Attendance = new mongoose.model("Attendance", attendanceSchema);

export default Attendance;