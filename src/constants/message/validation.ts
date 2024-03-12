import Limitation from "../limitation"

export const validationMessage = {
  notitle: "제목을 작성해주세요",
  underTitleLimit: `제목은 최소 ${Limitation.title_limit_under}자 이상이어야 합니다.`,
  overTitleLimit: `제목은 최대 ${Limitation.title_limit_over}자 이하이어야 합니다.`,
  noContent: "본문 내용을 작성해주세요",
  noAnswerContent: "답변 내용을 작성해주세요",
  noTime: "정확한 시간대를 설정해주세요",
  noLocation: "모임 위치를 설정해주세요",
  noHeadCnt: "모임 인원을 설정해주세요",
  underContentLimit: `본문 내용은 최소 ${Limitation.content_limit_under}자 이상이어야 합니다.`,
  overContentLimit: `본문 내용은 최대 ${Limitation.content_limit_over}자 이하이어야 합니다.`,
  underAnswerLimit: `댓글 내용은 최소 ${Limitation.answer_limit_under}자 이상이어야 합니다.`,
  overAnswerLimit: `댓글 내용은 최대 ${Limitation.answer_limit_over}자 이하이어야 합니다.`,
  introductionLimitOver: `최대 ${Limitation.introduction_limit_over}자까지 입력 가능합니다.`,
  introductionLimitUnder: `최소 ${Limitation.introduction_limit_under}자 이상 입력해야 합니다.`,
  imageLimitOver: `${Limitation.image.stringifyedSize} 이하의 이미지만 업로드할 수 있습니다.`,
  imageUploadLimit:
    Limitation.image.upload.maxLength === 1
      ? "이미지 파일 업로드는 1장만 가능합니다"
      : `이미지 파일 업로드는 최대${Limitation.image.upload.maxLength}장까지 가능합니다.`,
  invalidImageExtension: "올바른 형식의 이미지가 아닙니다.",
  notAllowedImageExtensions: `이미지 파일 업로드는 ${Limitation.image.extension.toString()} 확장자만 가능합니다`,
  duplicatedVote: "답변에 대한 투표는 한 번만 진행할 수 있습니다.",
  alreadyReserved: "이미 예약된 시간대입니다.",
  alreadySelected: "이미 선택된 시간대입니다.",
  youAlreadyReserved: "이미 동일한 멘토링을 예약하셨습니다.",
  noValue: "값이 비어있습니다. 정확한 값을 입력해주세요.",
  overHashtagCntLimit: `해시태그는 최대 ${Limitation.hashtags_cnt}개까지 입력 가능합니다.`,
  overHashtagWordLimit: `해시태그는 최대 ${Limitation.hashtags_word}자까지 입력 가능합니다.`,
  overtimeCntLimit: `멘토링 시간은 최대 ${Limitation.mentoring_time}개까지 선택 가능합니다.`,
  undertimeCntLimit: "멘토링 시간은 최소 하나 이상 선택해야 합니다.",
  preventSpecialCharacter: `문자와 숫자만 입력 가능합니다.`,
  preventDuplicateValue: "이미 입력된 값입니다.",
  voteForMe: "자신의 답변에는 투표할 수 없습니다.",
  timeError: "종료 시간은 시작 시간보다 앞설 수 없습니다.",
  sameTime: "종료 시간은 시작 시간과 동일할 수 없습니다.",
} as const
