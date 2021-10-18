import React, { Fragment } from "react";
import Form from "./Form";
import Jobs from "./Jobs";
import UsedSkills from "./TopSkills";
import Job from "./Job";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm">
          <Form />
        </div>
        <div className="col-sm">
          <UsedSkills />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Jobs />
        </div>
        <div className="col-sm">
          <Job />
        </div>
      </div>
    </Fragment>
  );
}
