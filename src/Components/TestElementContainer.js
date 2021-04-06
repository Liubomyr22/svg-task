import { connect } from "react-redux";
import TestElement from "./TestElement";

let mapStateToProps = (state) => {
  return {
    testElement: state.testElementReducer,
  };
};

const TestElementContainer = connect(mapStateToProps)(TestElement);

export default TestElementContainer;
