"use client"

import ConfirmModal from "@/components/shared/confirm-modal/ConfirmModal"
import { notificationMessage } from "@/constants/message"
import queryKey from "@/constants/queryKey"
import useModal from "@/hooks/useModal"
import { deleteQuestion } from "@/service/question"
import { sleep } from "@/util/sleep"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import type {
  DeleteQuestionProps,
  QuestionProps,
} from "./useHandleQuestion.types"
import Regex from "@/constants/regex"
import { useDeleteImage } from "@/hooks/image/useDeleteImage"

const useHandleQuestion = () => {
  const router = useRouter()
  const { openModal } = useModal()
  const queryClient = useQueryClient()
  const { deleteImage } = useDeleteImage()

  const handleEditQuestion = ({ questionId }: QuestionProps) =>
    router.push(`/question/u/${questionId}`)

  const handleDeleteQuestion = async ({
    question,
    successModal,
  }: DeleteQuestionProps) => {
    const onSuccess = async () => {
      try {
        const imageUrl = question.content?.match(Regex.mdImage)

        const res = await deleteQuestion({
          questionId: question.id,
        })
        console.log("success", res.data.msg)
        openModal({
          content: successModal,
          onClose() {
            queryClient.invalidateQueries({
              queryKey: [queryKey.question, question.id],
            })
          },
        })
        if (imageUrl)
          for (let image of imageUrl) {
            const url = image.split("(")[1].split(")")[0]
            deleteImage(url)
          }
        queryClient.invalidateQueries({
          queryKey: [queryKey.question],
        })
        router.replace("/")
      } catch (err) {
        console.error(err)
      }
    }
    const onCancel = () => {
      toast.error(notificationMessage.cancleDeleteQuestion, {
        position: "top-center",
      })
    }
    openModal({
      containsHeader: false,
      content: (
        <ConfirmModal.ModalContent
          onSuccess={onSuccess}
          onCancel={onCancel}
          situation="deleteContent"
        />
      ),
    })
  }

  return { handleEditQuestion, handleDeleteQuestion }
}

export default useHandleQuestion
