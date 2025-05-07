import React from "react";
import { Modal } from "antd";

const StudentModal = ({ open, onClose, student }) => {
  return (
    <Modal
      title="Student Info"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="rounded-lg"
    >
      {student && (
        <div className="space-y-2">
          <img
            src={student.photo}
            alt="Student"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll ID:</strong> {student.rollId}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Section:</strong> {student.section}</p>
          <p><strong>Parent:</strong> {student.parentName}</p>
          <p><strong>Phone:</strong> {student.parentPhone}</p>
        </div>
      )}
    </Modal>
  );
};

export default StudentModal;
