import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: Number,
      required: true,
      // unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Leave"],
      required: true,
    },
  },
  { timestamps: true },
);
attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

const Attendance = new mongoose.model("Attendance", attendanceSchema);

export default Attendance;
