"use client"

import Calendar, { TileArgs } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./Calendar.css"
import { getDay } from "@/util/getDate"
import dayjs from "dayjs"
import Holidays from "@/constants/holidays"
import { Value } from "./Calendar.types"
import { Dispatch, SetStateAction } from "react"

const CustomCalendar = () => {
  const isHoliday = (date: Date) =>
    Holidays.some((day) => day.date === dayjs(date).format("YYYY-MM-DD"))
  const getHoliday = (date: Date) =>
    Holidays.find((day) => day.date === dayjs(date).format("YYYY-MM-DD"))
  // 공휴일 이름 formatting
  const formatName = (name: string) => name.replaceAll(" ", "\n")

  // 타일에 특정 정보 표시
  const showSpecificDays = ({ date }: TileArgs) => {
    const today = new Date()
    if (date === today) {
      return <div>Today</div>
    }
    if (isHoliday(date)) {
      const name = getHoliday(date)?.name
      if (name)
        return (
          <div className="text-[10px] whitespace-pre ">{formatName(name)}</div>
        )
    }
  }

  return (
    <div className="react-calendar">
      <Calendar
        locale="ko"
        onChange={setDate}
        value={date}
        // 숫자만 보이게 설정
        formatDay={(_, date) => getDay(date)}
        navigationLabel={undefined}
        minDetail="month"
        maxDetail="month"
        className={"mx-auto text-sm border-white"}
        allowPartialRange
        next2Label={null}
        prev2Label={null}
        minDate={new Date(start)}
        maxDate={calendarValue}
        // 날짜 타일에 추가할 컨텐츠
        tileContent={showSpecificDays}
      />
    </div>
  )
}

export default CustomCalendar
