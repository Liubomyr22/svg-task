const CHANGE_TEST_ELEMENT_NAME = "CHANGE-TEST-ELEMENT-NAME";
const CHANGE_TEST_ELEMENT_DESCRIPTION = "CHANGE-TEST-ELEMENT-DESCRIPTION";
const ADD_NEW_TEST_ELEMENT_NAME = "ADD-NEW-TEST-ELEMENT-NAME";
const ADD_NEW_TEST_ELEMENT_DESCRIPTION = "ADD-NEW-TEST-ELEMENT-DESCRIPTION";
const ADD_INCOME_FORM = "ADD-INCOME-FORM";
const ADD_NEW_INCOME_EVENT = "ADD-NEW-INCOME-EVENT";
const CHANGE_NEW_INCOME_EVENT = "CHANGE-NEW-INCOME-EVENT";
const ADD_OUT_FORM = "ADD-OUT-FORM";
const ADD_NEW_OUT_EVENT = "ADD-NEW-OUT-EVENT";
const CHANGE_NEW_OUT_EVENT = "CHANGE-NEW-OUT-EVENT";
const GET_VALUE_FROM_DELETE_FORM = "GET-VALUE-FROM-DELETE-FORM";
const DELETE_INCOME_VALUE = "DELETE-INCOME-VALUE";
const DELETE_OUT_VALUE = "DELETE-OUT-VALUE";

let initialState = {
  elementName: "Test",
  description: "test description",
  incomeEvents: ["Системна подія створена"],
  exitEvents: ["Системна подія створена"],
  newElementName: "",
  newDescription: "",
  addIncomingForm: false,
  addOutForm: false,
  newIncomeEvent: "",
  NewExitEvent: "",
  elementHeight: 95,
  eventHeight: 20,
  deleteIncomeValue: "",
  deleteOutValue: "",
};

const testElementReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEST_ELEMENT_NAME:
      return {
        ...state,
        newElementName: action.name,
      };
    case CHANGE_TEST_ELEMENT_DESCRIPTION:
      return {
        ...state,
        newDescription: action.description,
      };
    case ADD_NEW_TEST_ELEMENT_NAME:
      return {
        ...state,
        elementName: state.newElementName,
      };
    case ADD_NEW_TEST_ELEMENT_DESCRIPTION:
      return {
        ...state,
        description: state.newDescription,
      };
    case ADD_INCOME_FORM:
      return {
        ...state,
        addIncomingForm: true,
      };
    case CHANGE_NEW_INCOME_EVENT:
      return {
        ...state,
        incomeEvents: [...state.incomeEvents, state.newIncomeEvent],
        elementHeight: state.elementHeight + 30,
        addIncomingForm: false,
      };
    case ADD_NEW_INCOME_EVENT:
      return {
        ...state,
        newIncomeEvent: action.incomeEvent,
      };
    case ADD_OUT_FORM:
      return {
        ...state,
        addOutForm: true,
      };
    case CHANGE_NEW_OUT_EVENT:
      return {
        ...state,
        exitEvents: [...state.exitEvents, state.newExitEvent],
        elementHeight: state.elementHeight + 33,
        addOutForm: false,
      };
    case ADD_NEW_OUT_EVENT:
      return {
        ...state,
        newExitEvent: action.exitEvent,
      };
    case GET_VALUE_FROM_DELETE_FORM:
      return {
        ...state,
        deleteIncomeValue: action.inValue,
        deleteOutValue: action.exitValue,
      };
    case DELETE_INCOME_VALUE:
      return {
        ...state,
        incomeEvents: state.incomeEvents.filter(
          (elem) => elem !== state.deleteIncomeValue
        ),
        elementHeight: state.elementHeight - 33,
      };
    case DELETE_OUT_VALUE:
      return {
        ...state,
        exitEvents: state.exitEvents.filter(
          (elem) => elem !== state.deleteOutValue
        ),
        elementHeight: state.elementHeight - 33,
      };

    default:
      return state;
  }
};

export const addNewTestElementName = () => {
  return {
    type: ADD_NEW_TEST_ELEMENT_NAME,
  };
};

export const changeTestElementName = (name) => {
  return {
    type: CHANGE_TEST_ELEMENT_NAME,
    name,
  };
};

export const addNewTestElementDescription = () => {
  return {
    type: ADD_NEW_TEST_ELEMENT_DESCRIPTION,
  };
};

export const changeTestElementDescription = (description) => {
  return {
    type: CHANGE_TEST_ELEMENT_DESCRIPTION,
    description,
  };
};

export const addIncomeForm = () => {
  return {
    type: ADD_INCOME_FORM,
  };
};

export const addNewIncomeEvent = (incomeEvent) => {
  return {
    type: ADD_NEW_INCOME_EVENT,
    incomeEvent,
  };
};
export const changeNewIncomeEvent = () => {
  return {
    type: CHANGE_NEW_INCOME_EVENT,
  };
};

export const addOutForm = () => {
  return {
    type: ADD_OUT_FORM,
  };
};
export const addNewExitEvent = (exitEvent) => {
  return {
    type: ADD_NEW_OUT_EVENT,
    exitEvent,
  };
};
export const changeNewExitEvent = () => {
  return {
    type: CHANGE_NEW_OUT_EVENT,
  };
};

export const getDeleteFormValues = (inValue, exitValue) => {
  return {
    type: GET_VALUE_FROM_DELETE_FORM,
    inValue,
    exitValue,
  };
};

export const deleteIncomeEvent = () => {
  return {
    type: DELETE_INCOME_VALUE,
  };
};

export const deleteOutEvent = () => {
  return {
    type: DELETE_OUT_VALUE,
  };
};

export default testElementReducer;
