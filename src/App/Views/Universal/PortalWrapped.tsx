import * as React from "react";
import { Portal } from "react-portal";
import { List } from "../../../Data/List";
import { Just, Maybe } from "../../../Data/Maybe";
import { classListMaybe } from "../../Utilities/CSS";

interface CallBackProps extends React.Props<any> {
  closePortal (): void
}

interface ReactPortalProps {
  isOpen?: boolean
  openByClickOn?: React.ReactElement<CallBackProps>
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
  onOpen? (node: HTMLDivElement): void
  beforeClose? (node: HTMLDivElement, resetPortalState: () => void): void
  onClose? (): void
  onUpdate? (): void
}

export interface PortalWrappedOwnProps extends ReactPortalProps {
  children?: React.ReactNode
  className?: string
  id?: string
}

export interface PortalWrappedStateProps {
  theme: string
}

export interface PortalWrappedDispatchProps {}

export type PortalWrappedProps =
  PortalWrappedStateProps
  & PortalWrappedDispatchProps
  & PortalWrappedOwnProps

export function PortalWrapped (props: PortalWrappedProps) {
  const { children, className, theme, id, ...other } = props

  const { isOpen = false } = other

  return isOpen
    ? (
      <Portal {...other}>
        <div className={classListMaybe (List (Just (`theme-${theme}`), Maybe (className)))} id={id}>
          {children}
        </div>
      </Portal>
    )
    : null
}
