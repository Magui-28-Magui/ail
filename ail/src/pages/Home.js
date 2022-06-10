import React from "react";
import Filters from "./Filters";
import { MdCreate } from "react-icons/md";
import LongText from "../components/LongText";
import Modal from "../components/Modal";
import ModalActionForm from "../components/ModalActionForm";
import { data } from "./mock/data";
import ModalForumForm from "../components/ModalForumForm";

export default function Home() {
  return (
    <div>
      <Filters />
      <div className="row">
        <div className="d-flex justify-content-end my-2">
          <button
            className="btn btn-primary mx-3"
            data-bs-toggle="modal"
            data-bs-target="#modalForumForm"
          >
            <MdCreate className="mx-2" width={10} />
            Add Forum
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modalActionForm"
          >
            <MdCreate className="mx-2" width={10} />
            Add Action
          </button>
          <ModalActionForm title={"Add Action"} />
          <ModalForumForm title={"Add Forum"} />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table my-2 table-bordered">
          <thead className="table-success text-center">
            <tr>
              <th scope="col">Forum</th>
              <th scope="col">Date</th>
              <th scope="col">Impacted Metric</th>
              <th scope="col">Issue</th>
              <th scope="col">Action</th>
              <th scope="col">Responsable</th>
              <th scope="col">Due Date</th>
              <th scope="col">Status</th>
              <th scope="col">Closed Date</th>
            </tr>
          </thead>
          <tbody className="text-center align-middle">
            {data
              ? data.map(function (element) {
                  return (
                    <tr key={element.id}>
                      <td style={{ width: "10rem" }}>{element.forum_name}</td>
                      <td style={{ width: "10rem" }}>{element.date}</td>
                      <td style={{ width: "50rem" }}>Scrap</td>
                      <td style={{ width: "50rem" }}>{element.issue}</td>
                      <td style={{ width: "40rem" }}>{element.action}</td>
                      <td style={{ width: "10rem" }}>{element.responsable}</td>
                      <td style={{ width: "10rem" }}>{element.due_date}</td>
                      <td style={{ width: "80rem" }}>
                        <LongText content={element.status} limit={250} />
                        <Modal title={"MODAL"} container={element.status} />
                      </td>
                      <td style={{ width: "10rem" }}>
                        {element.closed_date}
                        <br />
                        <h4 className="text-center">
                          <span
                            className={`badge rounded-pill ${
                              element.status_action === "Finished"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {element.status_action}
                          </span>
                        </h4>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
