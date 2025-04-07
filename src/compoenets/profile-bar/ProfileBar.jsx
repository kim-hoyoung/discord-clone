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
  bottom: 20px;
  left: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileIcon = styled.div`
  position: relative;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ba55d;
  img {
    width: 26px;
    height: 20px;
  }
`;

const StatusIcon = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #3ba55d;
  bottom: -2px;
  right: -4px;
  border: 4px solid var(--profilebar-bg-color); /* 테두리로 잘린 부분 보정 */
`;

const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--normal-txt-color);
  margin-left: 10px;

  span:nth-child(1) {
    font-size: 17px; /* 이름 글자 크기 */
    color: #ffff;
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 13px; /* 온라인 텍스트 크기 */
    margin-top: 5px;
    color: #b9bbbe;
  }
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
        <ProfileIcon>
          <img src="./src/assets/images/discord-ProfileBar.png" alt="Profile" />
          <StatusIcon />
        </ProfileIcon>
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
