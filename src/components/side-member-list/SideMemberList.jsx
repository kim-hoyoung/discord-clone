import React from "react";
import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import discordIcon from "../../../public/images/discord-ProfileBar.png"; // 아이콘 이미지 가져오기

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: var(--memberList-bg-color);
  color: var(--normal-txt-color);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  width: ;100%
`;

const MemberListTitle = styled.h3`
  font-size: 14px;
  color: #b9bbbe;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  margin-bottom: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #40444b;
  }
`;

const ProfileIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ba55d;
  margin-right: 10px;

  img {
    width: 26px;
    height: 20px;
  }
`;

const MemberName = styled.span`
  color: rgb(143, 146, 150);
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const StatusIcon = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #3ba55d;
  bottom: -2px;
  right: -4px;
  border: 4px solid var(--memberList-bg-color); /* 테두리로 잘린 부분 보정 */
`;

export default function SideMemberList() {
  const members = [
    { name: "김호영", icon: discordIcon, status: "online" },
    { name: "이예도", icon: discordIcon, status: "online", isAdmin: true },
    { name: "양아름", icon: discordIcon, status: "online" },
    { name: "조연경", icon: discordIcon, status: "online" },
  ];

  return (
    <MainDiv>
      <MemberListTitle>온라인 — {members.length}</MemberListTitle>
      {members.map((member, index) => (
        <Member key={index}>
          <ProfileIcon>
            <img src={member.icon} alt="Profile" />
            <StatusIcon />
          </ProfileIcon>
          <MemberName>
            {member.name}
            {member.isAdmin && (
              <FaCrown style={{ marginLeft: "5px", color: "#F7BA00" }} />
            )}
          </MemberName>
        </Member>
      ))}
    </MainDiv>
  );
}
