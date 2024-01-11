"use client"

import { useProgressModal } from "@/hooks/useProgressModal"

const useQnADetail = () => {
  const checkNullValue = (submitValue: string | undefined) => {
    if (typeof submitValue === undefined) return true
    if (typeof submitValue === "string" && /^\s*$/.test(submitValue))
      return true
    return false
  }

  const { ProgressModalView, setStep } = useProgressModal()

  return {
    checkNullValue,
    ProgressModalView,
    setModalStart: () => setStep("start"),
    setModalSuccess: () => setStep("success"),
    setModalFail: () => setStep("fail"),
  }
}

export default useQnADetail
