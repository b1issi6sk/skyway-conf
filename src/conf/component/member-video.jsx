import React from 'react';
import { observer } from 'mobx-react';

import Video from './video';

const LocalVideo = ({ room, action }) => (
  <div
    className="MemberVideo"
    onClick={() => action.$update('ui.isSettingOpen', true)}
  >
    <Video stream={room.localStream} muted />
  </div>
);

const RemoteVideos = ({ room, action }) => (
  <React.Fragment>
    {room.remoteStreams.slice().map(stream => (
      <div
        key={stream.id}
        className="MemberVideo"
        onClick={() => action.onClickRemotePeer(stream.peerId)}
      >
        <Video stream={stream} />
      </div>
    ))}
  </React.Fragment>
);

export default {
  LocalVideo: observer(LocalVideo),
  RemoteVideos: observer(RemoteVideos),
};