import { confirmMessage } from "@/constants/message"

export type MessageKey = keyof typeof ConfirmModalMessage

const ConfirmModalMessage = {
  uploadProfileImage: confirmMessage.editProfileImage,
  resetProfileImage: confirmMessage.resetProfileImage,
  deleteContent: confirmMessage.deleteContent,
  cancleVote: confirmMessage.cancleVote,
  reserveCoffeeChat: confirmMessage.reserveCoffeeChat,
  deleteCoffeeChat: confirmMessage.deleteCoffeeChat,
} as const

export default ConfirmModalMessage
