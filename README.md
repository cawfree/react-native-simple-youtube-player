# react-native-simple-youtube-player
A &lt;YouTubePlayer /> for React Native, without SDK or API dependencies.

## 🚀 Getting Started

Using [`npm`]():

```sh
yarn add react-native-simple-youtube-player
```

Using [`yarn`]():

```sh
yarn add react-native-simple-youtube-player
```

## ✍️ Example

The `<SimpleYouTubePlayer/>` exported by this library is trivial to get started with; after all, it _is_ just a `<WebView/>`. Just define the `videoId` of the content you wish to render, and the `style` of your `<WebView/>`, and away you go!

```javascript
import React from 'react';
import { WebView } from 'react-native';
import SimpleYouTubePlayer from 'react-native-simple-youtube-player';

export default () => (
  <SimpleYouTubePlayer
    style={{ flex: 1 }}
    WebView={WebView}
    videoId="BxYsnSnV6cQ"
  />
);
```

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
