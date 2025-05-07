import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  InputLabel,
  Select,
  FormControl,
  InputAdornment,
  Box,
} from "@mui/material";
import {
  Person,
  Email,
  FamilyRestroom,
  AccountBalance,
  CalendarToday,
  Home,
  AdminPanelSettings,
  AddBox,
} from "@mui/icons-material";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Link } from "react-router-dom";

function AddCategory() {
  // Separate states for each field
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherId, setFatherId] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");

  const handleSubmit = () => {
    // Log all form data
    console.log({
      studentName,
      gender,
      dateOfBirth,
      fatherName,
      fatherId,
      fatherEmail,
    });
  };

  return (
    <div className="p-4 ">
      {/* Header Breadcrumb */}
      <div className="text-sm text-gray-500 bg-[#0000000f] mb-4 py-2 px-4 flex items-center">
        <nav>
          <Home fontSize="small" className="text-sm mx-1 mb-1" />{" "}
          <Link href="/">Dashboard</Link> /{" "}
          <AdminPanelSettings fontSize="small" className="mx-1 text-sm" />{" "}
          <Link href="/">Admission Management</Link> /{" "}
          <strong className="font-semibold text-gray-700">
            <AddBox fontSize="small mb-1" className="" /> Student Admission Form
          </strong>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {/* Student Information */}
        <div className="bg-white rounded-lg shadow p-4 space-y-10 gap-y-4">
          <h2 className="bg-blue-900 text-white px-4 py-2 rounded font-semibold">
            + Student Information
          </h2>

          <div className="flex items-center gap-x-4 mb-4 mt-7">
            <TextField
              fullWidth
              label="Student Name"
              variant="outlined"
              placeholder="Name of student..."
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <Person className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="flex items-center gap-x-4 mb-4 mt-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <TransgenderIcon className="icon" />
                    </Box>
                  </InputAdornment>
                }
              >
                <MenuItem value="" disabled>
                  Gender of student
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex items-center gap-x-4 mb-4 mt-4">
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <CalendarToday className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        {/* Parent Information */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="bg-blue-900 text-white px-4 py-2 rounded mb-4 font-semibold">
            + Parent Information
          </h2>

          <div className="mb-4 mt-7">
            <TextField
              fullWidth
              label="Father Name"
              variant="outlined"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              placeholder="Name of father..."
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <FamilyRestroom className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Father ID Card"
              value={fatherId}
              onChange={(e) => setFatherId(e.target.value)}
              placeholder="National ID card number..."
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <AccountBalance className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Father Email"
              type="email"
              value={fatherEmail}
              onChange={(e) => setFatherEmail(e.target.value)}
              placeholder="Email of father..."
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <Email className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div className=""></div>
        <div className=" flex justify-end">
          <Button
            variant="contained"
            color="primary"
            className="w-48 sm:w-auto"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* <StudentList /> */}
    </div>
  );
}

export default AddCategory;
