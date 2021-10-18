import {
  GET_JOBS,
  GET_JOB,
  DELETE_JOB,
  ADD_JOB,
  GET_TOP_SKILLS,
} from "../actions/types.js";

const initialState = {
  jobs: [],
  job: {},
  topSkills: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, jobs: action.payload };
    case GET_JOB:
      return { ...state, job: { ...action.payload } };
    case GET_TOP_SKILLS:
      return { ...state, topSkills: action.payload };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
}
