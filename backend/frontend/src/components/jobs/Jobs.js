import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJobs, getJob, deleteJob } from "../../actions/jobs";

export class Jobs extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
    getJobs: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getJobs();
  }
  render() {
    return (
      <Fragment>
        <h1>Jobs List</h1>
        <div className="table table-striped">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>
                    <button
                      onClick={this.props.getJob.bind(this, job.id)}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={this.props.deleteJob.bind(this, job.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
});

export default connect(mapStateToProps, { getJobs, getJob, deleteJob })(Jobs);
