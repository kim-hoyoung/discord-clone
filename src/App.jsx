import "./reset.css";
import "./App.css";
import styled from "styled-components";
import SideChannelList from "../src/compoenets/side-channel-list/SideChannelList";
import Message from "../src/compoenets/message/Message";
import SideMemberList from "../src/compoenets/side-member-list/SideMemberList";
import ProfileBar from "../src/compoenets/profile-bar/ProfileBar";

// styled-components 사용법
// const 변수이름 = styled.태그종류 `안에 작성` < 백틱
const MainDiv = styled.div`
  background-color: var(--main-bg-color);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr auto; /* MainContent와 ProfileBar로 구분 */
`;

// MainContent 컴포넌트: 사이드바, 메인, 사용자 목록으로 나뉨
const MainContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 250px 1fr 250px; /* 사이드바, 메인, 사용자 목록 */
  column-gap: 60px; /* 열 간격 추가 (채팅창을 오른쪽으로 밀기 위해) */
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <MainDiv>
        <MainContent className="MaiNContent">
          <SideChannelList />
          <Message />
          <SideMemberList />
        </MainContent>
        <ProfileBar />
      </MainDiv>
    </>
  );
}

export default App;
