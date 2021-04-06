import { connect } from "react-redux";
import {
  changeTestElementName,
  changeTestElementDescription,
  addNewTestElementName,
  addNewTestElementDescription,
  addIncomeForm,
  addNewIncomeEvent,
  changeNewIncomeEvent,
  addOutForm,
  addNewExitEvent,
  changeNewExitEvent,
} from "../Redux/testElementReducer";
import EditForm from "./EditForm";

let mapStateToProps = (state) => {
  return {
    testElement: state.testElementReducer,
  };
};

const EditFormContainer = connect(mapStateToProps, {
  changeTestElementName,
  changeTestElementDescription,
  addNewTestElementName,
  addNewTestElementDescription,
  addIncomeForm,
  addNewIncomeEvent,
  changeNewIncomeEvent,
  addOutForm,
  addNewExitEvent,
  changeNewExitEvent,
})(EditForm);

export default EditFormContainer;
