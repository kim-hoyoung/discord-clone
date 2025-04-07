import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHashtag,
  FaVolumeUp,
  FaUserFriends,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--channelList-bg-color);
  padding: 10px;
  width: 90%;
  height: 90%;
  overflow-y: auto;
`;

/* 4월 팀 스터디 제목 스타일 */
const ServerTitle = styled.div`
  color: white;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 100;
  border-radius: 6px;

  &:hover {
    background-color: #393c43; /* 수정: 호버 시 배경색 변경 */
  }
`;

const ChannelTitle = styled.div`
  color: #b9bbbe;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const ChannelGroup = styled.div`
  margin-bottom: 10px;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "#b9bbbe")};
  background-color: ${(props) => (props.selected ? "#393c43" : "transparent")};
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #393c43;
    color: white;
  }
`;

const ChannelIcon = styled.div`
  margin-right: 8px;
`;

const Separator = styled.div`
  border-top: 1px solid rgb(95, 95, 95);
`;

export default function SideChannelList({ onChannelSelect }) {
  const [selectedChannel, setSelectedChannel] = useState("chat-일반");
  const [isChatChannelsVisible, setIsChatChannelsVisible] = useState(true);
  const [isVoiceChannelsVisible, setIsVoiceChannelsVisible] = useState(true);

  const channels = [
    { key: "chat-클론코딩", name: "클론코딩", type: "text", hasUserIcon: true },
    { key: "chat-일반", name: "일반", type: "text", hasUserIcon: true },
    { key: "chat-exp미션", name: "exp미션", type: "text", hasUserIcon: true },
    { key: "chat-nextjs", name: "nextjs", type: "text", hasUserIcon: true },
  ];

  const voiceChannels = [{ key: "voice-일반", name: "일반", type: "voice" }];

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel.key);
    onChannelSelect(channel.name);
  };

  return (
    <MainDiv>
      <ServerTitle>4월 팀 스터디</ServerTitle>
      <Separator />

      {/* 채팅 채널 그룹 */}
      <ChannelTitle
        onClick={() => setIsChatChannelsVisible(!isChatChannelsVisible)}
      >
        채팅 채널{" "}
        {isChatChannelsVisible ? <FaChevronDown /> : <FaChevronRight />}
      </ChannelTitle>

      {isChatChannelsVisible && (
        <ChannelGroup>
          {channels.map((channel) => (
            <Channel
              key={channel.key}
              selected={selectedChannel === channel.key}
              onClick={() => handleChannelClick(channel)}
            >
              <ChannelIcon>
                <FaHashtag />
              </ChannelIcon>
              {channel.name}
              {channel.hasUserIcon && selectedChannel === channel.key && (
                <FaUserFriends style={{ marginLeft: "auto" }} />
              )}
            </Channel>
          ))}
        </ChannelGroup>
      )}

      {/* 음성 채널 그룹 */}
      <ChannelTitle
        onClick={() => setIsVoiceChannelsVisible(!isVoiceChannelsVisible)}
      >
        음성 채널{" "}
        {isVoiceChannelsVisible ? <FaChevronDown /> : <FaChevronRight />}
      </ChannelTitle>

      {isVoiceChannelsVisible && (
        <ChannelGroup>
          {voiceChannels.map((channel) => (
            <Channel
              key={channel.key}
              selected={selectedChannel === channel.key}
              onClick={() => handleChannelClick(channel)}
            >
              <ChannelIcon>
                <FaVolumeUp />
              </ChannelIcon>
              {channel.name}
            </Channel>
          ))}
        </ChannelGroup>
      )}
    </MainDiv>
  );
}
