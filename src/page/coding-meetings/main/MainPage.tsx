import ListPage from "@/components/shared/page-template/ListPage"
import CodingMeetingListContainer from "./coding-meeting-list/CodingMeetingListContainer"
import ScrollTopButton from "./ScrollTopButton"

const CodingMeetingsMainPage = () => {
  return (
    <ListPage section="codingMeetings">
      <CodingMeetingListContainer />
      <ScrollTopButton />
    </ListPage>
  )
}

export default CodingMeetingsMainPage
