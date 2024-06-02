import { useState } from "react";
import { FaList } from "react-icons/fa";

export default function AddProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");

  const onSubmit = (e => {
    e.preventDefault();

    if (name === '' || description === '' || status === '')
      return alert("Please fill in all fields")


    setName('')
    setDescription('')
    setStatus('new')
    setClientId('')
  })

  return (
    <>
      <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#addProjectModal">
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>
      <div className="modal fade" id="addProjectModal" aria-labelledby="addProjectModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addProjectModalLabel">
                New Project</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" >
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Name</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) =>
                    setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Description</label>
                  <textarea className="form-control" id="description" value={description} onChange={(e) =>
                    setDescription(e.target.value)} ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Status</label>
                  <select className="form-select" id="status" value={status} onChange={(e) =>
                    setStatus(e.target.value)}>
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 