import React from 'react';
import PropTypes from 'prop-types';
import WebView from 'react-native-webview';

const YouTubePlayer = ({ videoId, ...extraProps }) => (
  <WebView
    {...extraProps}
    source={{
      html: (typeof videoId === 'string') ? '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/' + videoId + '?playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>' : null
    }}
  />
);

YouTubePlayer.propTypes = {
  videoId: PropTypes.string,
};

YouTubePlayer.defaultProps = {
  videoId: null,
};

export default YouTubePlayer;
