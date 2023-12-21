import { Question } from "@/interfaces/question"
import { APIPagenationResponse, PaginationParams } from "../api-response"

export interface GetQuestionListRequest extends PaginationParams {}

export interface QuestionListPayload {
  list: Array<Question>
}

export interface GetQuestionListResponse
  extends APIPagenationResponse<QuestionListPayload> {}
