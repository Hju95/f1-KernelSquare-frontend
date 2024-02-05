"use client"

import type { TimeOptionsProps } from "../CreateCoffeeChatReservationPage.types"
import { useRecoilState } from "recoil"
import { ScheduleListAtomFamily } from "@/recoil/atoms/coffee-chat/schedule"
import { twJoin } from "tailwind-merge"
import Button from "@/components/shared/button/Button"

const TimeOptions = ({ date, selectedDay }: TimeOptionsProps) => {
  const [schedulelist, setSchedulelist] = useRecoilState(
    ScheduleListAtomFamily(selectedDay),
  )

  const handleRegister = (time: string) => {
    if (schedulelist.schedule.includes(time)) {
      setSchedulelist({
        schedule: schedulelist.schedule.filter((el) => el !== time),
      })
    } else {
      setSchedulelist({ schedule: [...schedulelist.schedule, time] })
    }
  }

  const timeClassName = (time: string) =>
    twJoin(
      [
        "flex px-6 py-2 rounded justify-center transition-colors break-all text-sm text-secondary font-semibold shadow-sm",
      ],
      [
        !schedulelist.schedule.includes(time) &&
          "border-[1px] border-slate-200 bg-white cursor-pointer bg-colorsLightGray hover:bg-colorsGray ",
      ],
      [
        schedulelist.schedule.includes(time) &&
          "flex cursor-default bg-slate-300",
      ],
    )
  return (
    <div className="grid grid-cols-1 sm:grid-rows-4 sm:grid-cols-4 gap-4 shrink-0 m-auto">
      {date.map((time, i) => (
        <Button
          className={"inline text-left leading-[30px] p-0"}
          key={time + i}
          onClick={() => handleRegister(time)}
        >
          <span className={timeClassName(time)}>
            <div>{time}</div>
          </span>
        </Button>
      ))}
    </div>
  )
}

export default TimeOptions
