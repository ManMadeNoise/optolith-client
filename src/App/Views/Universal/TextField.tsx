// import { TextareaAutosize } from 'react-textarea-autosize'
import * as classNames from "classnames";
import * as React from "react";
import { findDOMNode } from "react-dom";
import { fmapF } from "../../../Data/Functor";
import { notNullStr } from "../../../Data/List";
import { bindF, ensure, fromMaybe, fromMaybeR, Maybe, maybeR, normalize } from "../../../Data/Maybe";
import { InputKeyEvent, InputTextEvent } from "../../Models/Hero/heroTypeHelpers";
import { pipe_ } from "../../Utilities/pipe";
import { isNumber } from "../../Utilities/typeCheckUtils";
import { Label } from "./Label";

export interface TextFieldProps {
  autoFocus?: boolean | Maybe<boolean>
  className?: string
  countCurrent?: number
  countMax?: number
  disabled?: boolean
  fullWidth?: boolean
  hint?: Maybe<string> | string
  label?: Maybe<string> | string
  multiLine?: boolean
  onChange? (event: InputTextEvent): void
  onChangeString? (updatedText: string): void
  onKeyDown? (event: InputKeyEvent): void
  type?: string
  value?: string | number | Maybe<string | number>
  valid?: boolean
}

export class TextField extends React.Component<TextFieldProps, {}> {
  inputRef: HTMLInputElement | null = null

  componentDidMount () {
    if (Maybe.elem (true) (Maybe.normalize (this.props.autoFocus)) && this.inputRef !== null) {
      (findDOMNode (this.inputRef) as HTMLInputElement).focus ()
    }
  }

  render () {
    const {
      className,
      countCurrent,
      countMax,
      disabled,
      fullWidth,
      label,
      onChange,
      onChangeString,
      onKeyDown,
      type = "text",
      valid,
    } = this.props

    const value = fromMaybe<string | number> ("") (normalize (this.props.value))

    const mlabel = normalize (label)

    const mhint = normalize (this.props.hint)

    const hintElement =
      fmapF (mhint)
            (hint => (
              <div
                className={classNames ("textfield-hint", value !== "" ? "hide" : undefined)}
                >
                {hint}
              </div>
            ))

    // const inputElement = this.props.multiLine ? (
    // 	<TextareaAutosize
    // 		defaultValue={trueValue}
    // 		onChange={onChange}
    // 		onKeyPress={onKeyDown}
    // 	/>
    // ) : (
    const inputElement = (
      <input
        type={type}
        value={value}
        onChange={
          disabled === true
            ? undefined
            : (onChange && onChangeString)
            ? event => {
              onChange (event)
              onChangeString (event.target.value)
            }
            : onChangeString
            ? event => onChangeString (event.target.value)
            : onChange
        }
        onKeyPress={disabled === true ? undefined : onKeyDown}
        readOnly={disabled}
        ref={node => this.inputRef = node}
      />
    )

    const counterTextElement =
      isNumber (countMax) ? <div>{countCurrent} / {countMax}</div> : null

    return (
      <div className={classNames (className, {
        textfield: true,
        fullWidth,
        disabled,
        invalid: valid === false,
      })}>
        {pipe_ (mlabel, bindF (ensure (notNullStr)), maybeR (null) (l => <Label text={l} />))}
        {inputElement}
        {fromMaybeR (null) (hintElement)}
        {counterTextElement}
      </div>
    )
  }
}