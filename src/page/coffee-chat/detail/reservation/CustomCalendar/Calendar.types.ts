import type { Dispatch, SetStateAction } from "react"

export type ValuePiece = Date | null

export type Value = ValuePiece | [ValuePiece, ValuePiece]

export type CustomCalendarProps = {
  start: string
  limit: number
  date: Value
  setDate: Dispatch<SetStateAction<Value>>
  isClass: boolean
}
