import { equals } from "../../../../Data/Eq";
import { List } from "../../../../Data/List";
import { fromDefault, Record } from "../../../../Data/Record";
import { pipe } from "../../../Utilities/pipe";
import { AllRequirementObjects } from "../wikiTypeHelpers";
import { RequireActivatable } from "./ActivatableRequirement";

export interface RequirePrimaryAttribute {
  "@@name": "RequirePrimaryAttribute"
  id: "ATTR_PRIMARY"
  value: number
  type: PrimaryAttributeType
}

export enum PrimaryAttributeType {
  Magical = 1,
  Blessed = 2,
}

export const RequirePrimaryAttribute =
  fromDefault ("RequirePrimaryAttribute")
              <RequirePrimaryAttribute> ({
                id: "ATTR_PRIMARY",
                type: PrimaryAttributeType.Magical,
                value: 0,
              })

export const isPrimaryAttributeRequirement =
  pipe (RequireActivatable.AL.id, equals<string | List<string>> ("ATTR_PRIMARY")) as unknown as
    (req: AllRequirementObjects) => req is Record<RequirePrimaryAttribute>
