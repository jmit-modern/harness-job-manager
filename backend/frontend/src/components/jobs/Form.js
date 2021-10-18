import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addJob } from "../../actions/jobs";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: [{ name: "" }],
      title: "",
      description: "",
    };
  }

  static propTypes = {
    addJob: PropTypes.func.isRequired,
  };

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  handleSkillChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }
  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { name: "" }],
    });
  }
  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const job = {
      title,
      description,
      skills: [...this.state.formValues],
    };
    this.props.addJob(job);
  };

  render() {
    const { name, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Job Form</h1>
        <form>
          <div className="form-group">
            <label> Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={name}
            />
          </div>
          {this.state.formValues.map((element, index) => (
            <div className="form-group" key={index}>
              <label>Skill</label>
              <div className="d-flex">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => this.handleSkillChange(index, e)}
                />
                {index ? (
                  <button
                    type="button"
                    className="button remove"
                    onClick={() => this.removeFormFields(index)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="button add"
                    type="button"
                    onClick={() => this.addFormFields()}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="form-group">
            <label> Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addJob })(Form);
