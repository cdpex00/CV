import * as actions from './cv.actions';
import CV from '../../data/cv';

const { hero, education, experience, languages, skills } = CV;

const INITIAL_STATE = {
  hero,
  education,
  experience,
  languages,
  skills,
  sectionInfo: education,
  sectionName: "education",
};

const cvReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_SECTION_INFO: {
      return { ...state, sectionInfo: state[payload], sectionName: payload };
    }
    default:
      return state;
  }
};

export default cvReducer;