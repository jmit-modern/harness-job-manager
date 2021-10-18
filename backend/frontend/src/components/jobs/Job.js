import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Job extends Component {
  static propTypes = {
    job: PropTypes.object.isRequired,
  };
  render() {
    const { job } = this.props;
    return (
      <div className="card card-body p-4">
        <h1>Single Job Card</h1>
        <h1 className="text-center">{job.title}</h1>
        <div className="d-flex justify-content-center">
          {job.skills &&
            job.skills.map((skill) => (
              <span className="mr-2" key={skill.id}>
                {skill.name}
              </span>
            ))}
        </div>
        {job.description && (
          <div>
            <p>Description</p>
            <span>{job.description}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  job: state.jobs.job,
});

export default connect(mapStateToProps)(Job);
