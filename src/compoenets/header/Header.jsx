import React from "react";
import styled from "styled-components";
import {
  FaBell,
  FaSearch,
  FaUserFriends,
  FaCog,
  FaHashtag,
} from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  background-color: var(--main-bg-color);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #202225;
  padding: 6px 10px;
  border-radius: 5px;
  color: #b9bbbe;
  width: 200px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    margin-left: 8px;
    width: 100%;
  }
`;

export default function Header({ currentChannel }) {
  return (
    <HeaderContainer>
      {/* 왼쪽 채널 정보 */}
      <ChannelInfo>
        <ChannelName>
          <FaHashtag /> {currentChannel}
        </ChannelName>
      </ChannelInfo>

      {/* 오른쪽 툴바 */}
      <Toolbar>
        <FaBell />
        <FaUserFriends />
        <FaCog />
        <SearchBar>
          <FaSearch />
          <input type="text" placeholder="검색하기" />
        </SearchBar>
      </Toolbar>
    </HeaderContainer>
  );
}
