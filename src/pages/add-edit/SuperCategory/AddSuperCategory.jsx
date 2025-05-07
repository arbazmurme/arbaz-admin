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
import DiscountIcon from "@mui/icons-material/Discount";
import {
  PhotoCamera,
  Person,
  Email,
  Phone,
  FamilyRestroom,
  LocationOn,
  School,
  AccountBalance,
  CalendarToday,
  AttachMoney,
  Home,
  AdminPanelSettings,
  Add,
  DataArray,
  AddBox,
} from "@mui/icons-material";
import { Input } from "antd";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Link } from "react-router-dom";

function AddSuperCategory() {
  const { TextArea } = Input;

  // Separate states for each field
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherId, setFatherId] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");
  const [fatherPhone, setFatherPhone] = useState("");
  const [motherPhone, setMotherPhone] = useState("");
  const [address, setAddress] = useState("");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [discounted, setDiscounted] = useState("");
  const [transportRoute, setTransportRoute] = useState("");
  const [studentCode] = useState("ST14646");
  const [campus, setCampus] = useState("");
  const [classLevel, setClassLevel] = useState("");

  const handleSubmit = () => {
    // Log all form data
    console.log({
      studentName,
      gender,
      dateOfBirth,
      fatherName,
      fatherId,
      fatherEmail,
      fatherPhone,
      motherPhone,
      address,
      monthlyFee,
      discounted,
      transportRoute,
      studentCode,
      campus,
      classLevel,
    });
  };

  return (
    <div className="p-4 min-h-screen">
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
          <div className="flex items-center gap-x-4 mb-4 mt-4">
            <div className="col-start-1 col-end-2 relative border-2 border-gray-400 border-dashed rounded-lg p-6">
              <input
                multiple
                className="absolute inset-0 w-full h-full opacity-0 z-50"
                accept="image/png, image/jpeg, image/gif"
                type="file"
              />
              <div className="text-center">
                <img
                  className="mx-auto h-12 w-12"
                  alt="Upload"
                  src="https://www.svgrepo.com/show/357902/image-upload.svg"
                />
                <h3 className="mt-2 text-sm font-medium">
                  <label className="relative cursor-pointer">
                    <span>Drag and drop</span>
                    <span className="text-indigo-600 dark:text-yellow-500">
                      {" "}
                      or browse
                    </span>
                    <span> to upload</span>
                  </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <div className="col-start-1 col-end-2 relative border-2 border-gray-400 border-dashed rounded-lg p-6">
            <input
              multiple
              className="absolute inset-0 w-full h-full opacity-0 z-50"
              accept="image/png, image/jpeg, image/gif"
              type="file"
            />
            <div className="text-center">
              <img
                className="mx-auto h-12 w-12"
                alt="Upload"
                src="https://www.svgrepo.com/show/357902/image-upload.svg"
              />
              <h3 className="mt-2 text-sm font-medium">
                <label className="relative cursor-pointer">
                  <span>Drag and drop</span>
                  <span className="text-indigo-600 dark:text-yellow-500">
                    {" "}
                    or browse
                  </span>
                  <span> to upload</span>
                </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            </div>
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

          <div className="mb-4">
            <TextField
              fullWidth
              label="Father Phone"
              value={fatherPhone}
              onChange={(e) => setFatherPhone(e.target.value)}
              placeholder="Without Zero (i.e 3482258263)"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <Phone className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Mother Phone"
              value={motherPhone}
              onChange={(e) => setMotherPhone(e.target.value)}
              placeholder="Without Zero (i.e 3482258263)"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <Phone className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              <LocationOn fontSize="small" /> Address{" "}
              <span className="text-red-500">*</span>
            </label>
            <TextArea
              id="Address"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              style={{ fontSize: "1.1rem" }}
            />
          </div>
        </div>

        {/* Other Information */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="bg-blue-900 text-white px-4 py-2 rounded mb-4 font-semibold">
            + Other Information
          </h2>

          <div className="mb-4 mt-7">
            <TextField
              fullWidth
              label="Monthly Fee"
              value={monthlyFee}
              onChange={(e) => setMonthlyFee(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="MuiInputAdornment-root"
                  >
                    <Box className="icon-wrapper">
                      <AttachMoney className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>Discounted Student?</InputLabel>
              <Select
                value={discounted}
                onChange={(e) => setDiscounted(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <DiscountIcon className="icon" />
                    </Box>
                  </InputAdornment>
                }
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>Transport Route</InputLabel>
              <Select
                value={transportRoute}
                onChange={(e) => setTransportRoute(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <DiscountIcon className="icon" />
                    </Box>
                  </InputAdornment>
                }
                label="Transport Route"
              >
                <MenuItem value="route1">Route 1</MenuItem>
                <MenuItem value="route2">Route 2</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="bg-blue-900 text-white px-4 py-2 rounded mb-4 font-semibold">
            + Academic Information
          </h2>

          <div className="mb-4 mt-7">
            <TextField
              fullWidth
              label="Student Code"
              value={studentCode}
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <School className="icon" />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>Campus</InputLabel>
              <Select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <DiscountIcon className="icon" />
                    </Box>
                  </InputAdornment>
                }
              >
                <MenuItem value="main">Main Campus</MenuItem>
                <MenuItem value="east">East Campus</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>Class</InputLabel>
              <Select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Box className="icon-wrapper">
                      <DiscountIcon className="icon" />
                    </Box>
                  </InputAdornment>
                }
              >
                <MenuItem value="1">Class 1</MenuItem>
                <MenuItem value="2">Class 2</MenuItem>
              </Select>
            </FormControl>
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

      {/* Submit Button */}
    </div>
  );
}

export default AddSuperCategory;
