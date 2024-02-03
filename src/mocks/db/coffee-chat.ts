import { type CoffeeChatReservation } from "@/interfaces/dto/coffee-chat/get-all-coffeechat-reservation.dto"
import { mockUsers } from "./user"
import badge_url from "@/assets/images/badges"
import { CoffeeChatReservationTime } from "@/interfaces/dto/coffee-chat/coffeechat-reservation-detail.dto"

export interface MockCoffeechat extends CoffeeChatReservation {
  date_times: CoffeeChatReservationTime[]
}

export const mockCoffeeChatReservations: Array<MockCoffeechat> = [
  {
    article_id: 1,
    title: "홍주광의 알고리즘 특강",
    content: "콘텐츠 1",
    member_id: mockUsers[1].id,
    member_image_url: mockUsers[1].image_url!,
    nickname: mockUsers[1].nickname,
    level: mockUsers[1].level,
    level_image_url: badge_url[mockUsers[1].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 1,
        room_id: 1,
        start_time: "2024-01-25T10:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 2,
        room_id: 2,
        start_time: "2024-01-25T11:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 3,
        room_id: 3,
        start_time: "2024-01-25T12:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 4,
        room_id: 4,
        start_time: "2024-01-25T15:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 5,
        room_id: 5,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 6,
        room_id: 6,
        start_time: "2024-01-25T19:30:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-22T18:09:02",
    modified_date: "2024-01-22T18:09:02",
    article_status: true,
    full_check: 0,
  },
  {
    article_id: 2,
    title: "권원상의 CI/CD a부터z까지",
    content: "콘텐츠 2",
    member_id: mockUsers[2].id,
    member_image_url: mockUsers[2].image_url!,
    nickname: mockUsers[2].nickname,
    level: mockUsers[2].level,
    level_image_url: badge_url[mockUsers[2].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 3,
        room_id: 3,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 4,
        room_id: 4,
        start_time: "2024-01-25T09:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 5,
        room_id: 5,
        start_time: "2024-01-25T15:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 30,
        room_id: 30,
        start_time: "2024-01-26T19:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 40,
        room_id: 40,
        start_time: "2024-01-26T09:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 51,
        room_id: 51,
        start_time: "2024-01-26T15:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 31,
        room_id: 31,
        start_time: "2024-01-27T19:00:00",
        menti_nickname: mockUsers[1].nickname,
        menti_image_url: mockUsers[1].image_url!,
      },
      {
        reservation_id: 41,
        room_id: 41,
        start_time: "2024-01-27T09:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
      {
        reservation_id: 52,
        room_id: 52,
        start_time: "2024-01-27T15:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-31T18:40:02",
    modified_date: "2024-01-31T18:40:02",
    article_status: true,
    full_check: 0,
  },
  {
    article_id: 3,
    title: "홍주광의 알고리즘 특강",
    content: "콘텐츠 3",
    member_id: mockUsers[1].id,
    member_image_url: mockUsers[1].image_url!,
    nickname: mockUsers[1].nickname,
    level: mockUsers[1].level,
    level_image_url: badge_url[mockUsers[1].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 15,
        room_id: 15,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 6,
        room_id: 6,
        start_time: "2024-01-25T11:0:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-22T18:09:02",
    modified_date: "2024-01-22T18:09:02",
    article_status: true,
    full_check: 0,
  },
  {
    article_id: 4,
    title: "권원상의 CI/CD a부터z까지",
    content: "콘텐츠 4",
    member_id: mockUsers[2].id,
    member_image_url: mockUsers[2].image_url!,
    nickname: mockUsers[2].nickname,
    level: mockUsers[2].level,
    level_image_url: badge_url[mockUsers[2].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 7,
        room_id: 7,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 8,
        room_id: 8,
        start_time: "2024-01-25T19:30:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-21T18:40:02",
    modified_date: "2024-01-21T18:40:02",
    article_status: true,
    full_check: 0,
  },
  {
    article_id: 5,
    title: "홍주광의 알고리즘 특강",
    content: "콘텐츠 5",
    member_id: mockUsers[1].id,
    member_image_url: mockUsers[1].image_url!,
    nickname: mockUsers[1].nickname,
    level: mockUsers[1].level,
    level_image_url: badge_url[mockUsers[1].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 9,
        room_id: 9,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 10,
        room_id: 10,
        start_time: "2024-01-25T19:30:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-22T18:09:02",
    modified_date: "2024-01-22T18:09:02",
    article_status: true,
    full_check: 0,
  },
  {
    article_id: 6,
    title: "권원상의 CI/CD a부터z까지",
    content: "콘텐츠 6",
    member_id: mockUsers[2].id,
    member_image_url: mockUsers[2].image_url!,
    nickname: mockUsers[2].nickname,
    level: mockUsers[2].level,
    level_image_url: badge_url[mockUsers[2].level],
    hashtags: ["홍주광", "알고리즘"],
    date_times: [
      {
        reservation_id: 11,
        room_id: 11,
        start_time: "2024-01-25T19:00:00",
        menti_nickname: mockUsers[0].nickname,
        menti_image_url: mockUsers[0].image_url!,
      },
      {
        reservation_id: 12,
        room_id: 12,
        start_time: "2024-01-25T20:00:00",
        menti_nickname: null,
        menti_image_url: null,
      },
    ],
    created_date: "2024-01-21T18:40:02",
    modified_date: "2024-01-21T18:40:02",
    article_status: true,
    full_check: 0,
  },
]

export const MockReservations = mockCoffeeChatReservations.flatMap(
  (res) => res.date_times,
)
