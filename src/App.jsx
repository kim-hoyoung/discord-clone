import "./reset.css";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import SideChannelList from "./components/side-channel-list/SideChannelList";
import Message from "./components/message/Message";
import SideMemberList from "./components/side-member-list/SideMemberList";
import ProfileBar from "./components/profile-bar/ProfileBar";
import Header from "./components/header/Header";

// MainDiv: 전체 레이아웃을 감싸는 그리드 컨테이너
const MainDiv = styled.div`
  background-color: var(--main-bg-color);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 250px 1fr 250px; /* 사이드바, 메인 콘텐츠, 사용자 목록 */
  grid-template-rows: auto 1fr auto; /* 헤더, 콘텐츠, 하단 프로필 */
  grid-template-areas:
    "SideChannelList Header SideMemberList"
    "SideChannelList Message SideMemberList"
    "SideChannelList ProfileBar SideMemberList";
  overflow: hidden; /* 필요 시 추가 */
`;
// 사이드 채널 목록
const SideChannelArea = styled.div`
  grid-area: SideChannelList;
  background-color: var(--channelList-bg-color);
`;

// 메인 콘텐츠
const MainContent = styled.div`
  grid-area: Message;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

// 사이드 멤버 목록
const SideMemberArea = styled.div`
  grid-area: SideMemberList;
  background-color: var(--memberList-bg-color);
  height: 100%;
  overflow-y: auto; /* 스크롤이 필요할 경우 활성화 */
`;

// 헤더 영역
const HeaderArea = styled.div`
  grid-area: Header;
  width: 100%;
`;

// 하단 프로필 바
const ProfileBarArea = styled.div`
  grid-area: ProfileBar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--profilebar-bg-color);
  padding: 0 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function App() {
  const [currentChannel, setCurrentChannel] = useState("일반");

  const handleChannelSelect = (channelName) => {
    setCurrentChannel(channelName);
  };

  return (
    <MainDiv>
      <SideChannelArea>
        <SideChannelList onChannelSelect={handleChannelSelect} />
      </SideChannelArea>

      <HeaderArea>
        <Header currentChannel={currentChannel} />
      </HeaderArea>

      <MainContent>
        <Message />
      </MainContent>

      <SideMemberArea>
        <SideMemberList />
      </SideMemberArea>

      <ProfileBarArea>
        <ProfileBar />
      </ProfileBarArea>
    </MainDiv>
  );
}

export default App;
