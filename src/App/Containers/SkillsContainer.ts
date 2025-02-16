import { connect } from "react-redux";
import { ReduxDispatch } from "../Actions/Actions";
import * as SkillActions from "../Actions/SkillActions";
import { AppStateRecord } from "../Reducers/appReducer";
import { getAttributesForSheet } from "../Selectors/attributeSelectors";
import { getIsRemovingEnabled } from "../Selectors/phaseSelectors";
import { getFilteredSkills, getSkillRating } from "../Selectors/skillsSelectors";
import { getSkillsFilterText } from "../Selectors/stateSelectors";
import { getSkillsCultureRatingVisibility, getSkillsSortOrder } from "../Selectors/uisettingsSelectors";
import { Skills, SkillsDispatchProps, SkillsOwnProps, SkillsStateProps } from "../Views/Skills/Skills";
import { SortNames } from "../Views/Universal/SortOptions";

const mapStateToProps = (state: AppStateRecord, ownProps: SkillsOwnProps): SkillsStateProps => ({
  attributes: getAttributesForSheet (state, ownProps),
  isRemovingEnabled: getIsRemovingEnabled (state),
  list: getFilteredSkills (state, ownProps),
  sortOrder: getSkillsSortOrder (state),
  filterText: getSkillsFilterText (state),
  ratingVisibility: getSkillsCultureRatingVisibility (state),
  skillRating: getSkillRating (state),
})

const mapDispatchToProps =
  (dispatch: ReduxDispatch, { l10n }: SkillsOwnProps): SkillsDispatchProps => ({
    addPoint (id: string) {
      dispatch (SkillActions.addSkillPoint (l10n) (id))
    },
    removePoint (id: string) {
      dispatch (SkillActions.removeSkillPoint (id))
    },
    setSortOrder (sortOrder: SortNames) {
      dispatch (SkillActions.setSkillsSortOrder (sortOrder))
    },
    switchRatingVisibility () {
      dispatch (SkillActions.switchSkillRatingVisibility ())
    },
    setFilterText (filterText: string) {
      dispatch (SkillActions.setSkillsFilterText (filterText))
    },
  })

export const connectSkills =
  connect<SkillsStateProps, SkillsDispatchProps, SkillsOwnProps, AppStateRecord> (
    mapStateToProps,
    mapDispatchToProps
  )

export const SkillsContainer = connectSkills (Skills)
