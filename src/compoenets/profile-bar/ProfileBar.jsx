import styled from "styled-components";
import { FaMicrophone, FaHeadphones, FaCog } from "react-icons/fa";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: var(--profilebar-bg-color);
  height: 60px;
  width: 250px;
  border-radius: 10px;
  position: fixed;
  bottom: 20px; /* 화면 아래에서 20px 위로 띄움 */
  left: 10px; /* 왼쪽 사이드바에서 약간 띄워서 위치 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 살짝 떠 있는 느낌 */
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--normal-txt-color);
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--normal-txt-color);
`;

export default function ProfileBar() {
  return (
    <MainDiv>
      <ProfileInfo>
        <ProfileIcon src="./src/assets/images/discord.png" alt="Profile" />
        <ProfileName>
          <span>김호영</span>
          <span>온라인</span>
        </ProfileName>
      </ProfileInfo>
      <Icons>
        <FaMicrophone size={20} />
        <FaHeadphones size={20} />
        <FaCog size={20} />
      </Icons>
    </MainDiv>
  );
}
