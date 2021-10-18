import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTopSkills } from "../../actions/jobs";

export class TopSkills extends Component {
  static propTypes = {
    getTopSkills: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getTopSkills();
  }
  render() {
    return (
      <div className="card card-body p-4 mt-4 mb-4">
        <h1>Most used Skills</h1>
        <div className="">
          {this.props.topSkills &&
            this.props.topSkills.map((skill, index) => (
              <div className="mr-2" key={index}>
                {skill.name}: {skill.count} times
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topSkills: state.jobs.topSkills,
});

export default connect(mapStateToProps, { getTopSkills })(TopSkills);
