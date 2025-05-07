import { AddBox } from "@mui/icons-material";
import React, { useState } from "react";
import StudentModal from "./StudentModal";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import AddCategory from "./AddCategory";

const students = [
  {
    rollId: "ST83924",
    photo: "https://picsum.photos/200",
    name: "Abdullah",
    parentName: "test",
    class: "One",
    section: "A",
    campus: "Main Campus",
    parentPhone: "00",
  },
  {
    rollId: "ST3345",
    photo: "https://picsum.photos/200",
    name: "Eshaal Marwa",
    parentName: "Akram Bhatti",
    class: "One",
    section: "A",
    campus: "Main Campus",
    parentPhone: "03482258263",
  },
  // Add more student data as needed...
];

const StudentTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpen = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(students);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "students.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    if (typeof doc.autoTable !== "function") {
      console.error("autoTable method is not available.");
      return;
    }
    doc.autoTable({
      body: students.map((student) => [student.name, student.rollId]),
    });

    doc.save("table.pdf");
  };

  const exportToCSV = () => {
    const headers = [
      "Roll ID",
      "Photo",
      "Name",
      "Parent Name",
      "Class",
      "Section",
      "Campus",
      "Parent Phone",
    ];

    const rows = students.map((student) => [
      student.rollId,
      student.photo,
      student.name,
      student.parentName,
      student.class,
      student.section,
      student.campus,
      student.parentPhone,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))]
      .join("\n")
      .replace(/(?:\r\n|\r|\n)/g, "\r\n");

    const csvBlob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(csvBlob);
    link.download = "students.csv";
    link.click();
  };

  const handlePrint = (contentId) => {
    const printContent = document.getElementById(contentId);
    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
            .print-container { width: 100%; padding: 20px; text-align: left; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
            th, td { padding: 8px; border: 1px solid #ddd; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            td { background-color: #fff; }
            .footer { position: absolute; bottom: 0; width: 100%; text-align: center; font-size: 10px; }
          </style>
        </head>
        <body>
          <div class="print-container">
            <h2>Print View</h2>
            ${printContent.innerHTML}
            <div class="footer">
              <p>Printed on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  // Filter students based on the search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AddCategory />
      <div className="p-4 text-stone-50">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
            <button
              className="bg-[#ef9d10] px-3 py-1 rounded flex items-center gap-1"
              onClick={exportToExcel}
            >
              <AddBox fontSize="small" sx={{ color: "white" }} />
              Excel
            </button>
            <button
              className="bg-[#65be6c] px-3 py-1 rounded flex items-center gap-1"
              onClick={exportToCSV}
            >
              <AddBox fontSize="small" sx={{ color: "white" }} />
              CSV
            </button>
            <button
              className="bg-[#0171b9] px-3 py-1 rounded flex items-center gap-1"
              onClick={exportToPDF}
            >
              <AddBox fontSize="small" sx={{ color: "white" }} />
              PDF
            </button>
            <button
              className="bg-[#ed5150] px-3 py-1 rounded flex items-center gap-1"
              onClick={() => handlePrint("student-table")}
            >
              <AddBox fontSize="small" sx={{ color: "white" }} />
              Print
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 px-2 py-1 rounded"
            style={{
              width: "200px",
              borderColor: "gray", // Ensure it's visible
              backgroundColor: "#fff", // Ensure contrast against the background
              color: "black", // Set text color
            }}
          />
        </div>

        <div className="overflow-x-auto shadow rounded" id="student-table">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Roll ID",
                  "Photo",
                  "Name",
                  "Parent Name",
                  "Class",
                  "Section",
                  "Campus",
                  "Parent Phone",
                  "ID Card",
                  "Reset Password",
                  "Profile",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-2 text-gray-600 font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((stu, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.rollId}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={stu.photo}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.name}
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.parentName}
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.class}
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.section}
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.campus}
                  </td>
                  <td className="px-4 py-2 text-black/70 font-medium">
                    {stu.parentPhone}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-[#ed5150] px-2 py-1 rounded text-xs flex items-center gap-1"
                      onClick={() => handleOpen(stu)}
                    >
                      <AddBox fontSize="small" sx={{ color: "white" }} />
                      Generate ID
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-[#65be6c] px-2 py-1 rounded text-xs flex items-center gap-1">
                      <AddBox fontSize="small" sx={{ color: "white" }} />
                      Reset Password
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-[#0171b9] px-2 py-1 rounded text-xs flex items-center gap-1">
                      <AddBox fontSize="small" sx={{ color: "white" }} />
                      View Profile
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative group">
                      <button className="bg-[#ed5150] px-2 py-1 rounded text-xs flex items-center gap-1">
                        <AddBox fontSize="small" sx={{ color: "white" }} />
                        Action ▼
                      </button>
                      {/* Optional dropdown here */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-2 text-xs text-gray-600">
            Showing 1 to {filteredStudents.length} of {filteredStudents.length}{" "}
            entries
          </div>
        </div>
        <StudentModal
          open={isModalOpen}
          onClose={handleCancel}
          student={selectedStudent}
        />
      </div>
    </>
  );
};

export default StudentTable;
