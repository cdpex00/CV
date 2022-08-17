export const SET_SECTION_INFO = "SET_SECTION_INFO";
export const SAVE_NEW_SKILL = "SAVE_NEW_SKILL";

export const setSectionInfo = (sectionName) => dispatch => {
  dispatch({
    type: SET_SECTION_INFO,
    payload: sectionName,
  })
};

