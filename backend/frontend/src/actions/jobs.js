import axios from "axios";
import { createMessage } from "./messages";

import {
  GET_JOBS,
  GET_JOB,
  DELETE_JOB,
  ADD_JOB,
  GET_TOP_SKILLS,
  GET_ERRORS,
} from "./types";

// GET JOBS
export const getJobs = () => (dispatch) => {
  axios
    .get("/api/jobs/")
    .then((res) => {
      dispatch({ type: GET_JOBS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

// GET JOBS
export const getJob = (id) => (dispatch) => {
  axios
    .get(`/api/jobs/${id}/`)
    .then((res) => {
      dispatch({ type: GET_JOB, payload: res.data });
    })
    .catch((err) => console.log(err));
};

//DELETE JOBS
export const deleteJob = (id) => (dispatch) => {
  axios
    .delete(`/api/jobs/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteJob: "Job DELETED" }));
      dispatch({ type: DELETE_JOB, payload: id });
    })
    .catch((err) => console.log(err));
};

//ADD_JOB
export const addJob = (job) => (dispatch) => {
  axios
    .post("/api/jobs/", job)
    .then((res) => {
      dispatch(createMessage({ addJob: "Job Added" }));
      dispatch(getTopSkills());
      dispatch({ type: ADD_JOB, payload: res.data });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({ type: GET_ERRORS, payload: errors });
    });
};

//GET TOP SKILLS
export const getTopSkills = () => (dispatch) => {
  axios
    .get("/api/jobs/used_skills/")
    .then((res) => {
      dispatch({ type: GET_TOP_SKILLS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
