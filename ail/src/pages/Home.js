import React from "react";
import Filters from "./Filters";
import { Input, InputSelect } from "../assets/css/Input";
import { MdCreate } from "react-icons/md";
import LongText from "../components/LongText";
import Modal from "../components/Modal";
import ModalForm from "../components/ModalForm";
import { data } from "./mock/data";

export default function Home() {
  const SelectMetric = (element) => {
    //   element.map((data) => {
    //     console.log(data)
    //   return <option value={data.id}>{data.name}</option>;
    // });
  };

  return (
    <div>
      <Filters />
      <div className="row">
        <div className="d-flex justify-content-end my-2">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
          >
            <MdCreate className="mx-2" width={10} />
            Add Forum
          </button>
          <ModalForm title={"MODAL FORM"} container={"test"} />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table my-2 table-bordered">
          <thead>
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
          <tbody>
            {data
              ? data.map(function (element) {
                  console.log(element);
                  return (
                    <tr key={element.id}>
                      <td style={{ width: "10rem" }}>{element.forum_name}</td>
                      <td style={{ width: "10rem" }}>
                        <Input
                          className="form-control"
                          type="date"
                          name=""
                          defaultValue={element.date}
                        />
                      </td>
                      <td style={{ width: "50rem" }}>
                        <SelectMetric element={element.metric} />
                        {/* <InputSelect className="form-select">
                      <optgroup>
                        <option value="1">Select Metric</option>
                        <option value="2">Inventory Cost</option>
                        <option value="3">Internal Rejections</option>
                        <option value="4">Employee Engagement</option>
                        <option valuse="5">HC Reduction</option>
                        <option value="6">Efficiency Labor</option>
                        <option value="7">Efficiency</option>
                        <option value="8">Downtime</option>
                        <option value="9">CPM NCR %</option>
                        <option value="10">Adoptions Cycle Time</option>
                        <option value="11">Utilization</option>
                        <option value="12">Turnover</option>
                        <option value="13">Scrap</option>
                        <option value="14">Sales Growth</option>
                        <option value="15">RM Cost vs Sales %</option>
                        <option value="16">Output</option>
                        <option value="17">OTD</option>
                        <option value="18">MMW MRO Expense vs Sales %</option>
                        <option value="19">Labor Cost</option>
                      </optgroup>
                    </InputSelect> */}
                      </td>
                      <td style={{ width: "50rem" }}>{element.issue}</td>
                      <td style={{ width: "40rem" }}>{element.action}</td>
                      <td style={{ width: "10rem" }}>{element.responsable}</td>
                      <td style={{ width: "10rem" }}>
                        <Input
                          className="form-control"
                          type="date"
                          name=""
                          defaultValue={element.due_date}
                        />
                      </td>
                      <td style={{ width: "80rem" }}>
                        <LongText content={element.status} limit={250} />
                        <Modal title={"MODAL"} container={element.status} />
                      </td>
                      <td style={{ width: "10rem" }}>
                        <Input
                          className="form-control"
                          type="date"
                          name=""
                          defaultValue={element.close_date}
                        />
                        <br />
                        <h4 className="text-center">
                          <span className="badge rounded-pill bg-success">
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
