import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import * as AlertActions from "../Actions/AlertActions";
import { AppStateRecord } from "../Reducers/appReducer";
import { getCurrentAlert } from "../Selectors/stateSelectors";
import { Alerts, AlertsDispatchProps, AlertsOwnProps, AlertsStateProps } from "../Views/Alerts/Alerts";

const mapStateToProps = (state: AppStateRecord) => ({
  options: getCurrentAlert (state),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  close () {
    dispatch (AlertActions.removeAlert ())
  },
  dispatch,
})

const connectAlertsContainer =
  connect<AlertsStateProps, AlertsDispatchProps, AlertsOwnProps, AppStateRecord> (
    mapStateToProps, mapDispatchToProps
  )

export const AlertsContainer = connectAlertsContainer (Alerts)
