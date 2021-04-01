import React from "react"
import { TextField } from "@material-ui/core"
import ExternalLink from "./ExternalLink"

export interface LinkedTextFieldProps {
  href: string
  linkTitle: string
  value: string
  label: string
  onChange: (e: string) => void
  helperText: string
  required?: true
  disabled?: boolean
}

const LinkedTextField: React.FC<LinkedTextFieldProps> = ({
  href,
  linkTitle,
  label,
  value,
  onChange,
  required,
  helperText,
  disabled,
}) => {
  return (
    <TextField
      InputProps={{
        endAdornment: <ExternalLink href={href} title={linkTitle} />,
      }}
      size="small"
      variant="outlined"
      fullWidth
      label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      helperText={helperText}
      disabled={disabled}
    />
  )
}

export default LinkedTextField