import { connect } from "react-redux";
import DeleteForm from "./DeleteForm";
import {
  getDeleteFormValues,
  deleteIncomeEvent,
  deleteOutEvent,
} from "../Redux/testElementReducer";

let mapStateToProps = (state) => {
  return {
    testElement: state.testElementReducer,
  };
};

const DeleteFormContainer = connect(mapStateToProps, {
  getDeleteFormValues,
  deleteIncomeEvent,
  deleteOutEvent,
})(DeleteForm);

export default DeleteFormContainer;
