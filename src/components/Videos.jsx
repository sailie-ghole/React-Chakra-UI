
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {

    //array
    const videosArr = [
        {
            title: 'Art Video 1',
            src: 'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        },
        {
            title: 'Art Video 2',
            src: 'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        },
        {
            title: 'Art Video 3',
            src:  'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        },
        {
            title: 'Art Video 4',
            src: 'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        },
        {
            title: 'Art Video 5',
            src: 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        },
        {
            title: 'Art Video 6',
            src: 'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        },
        {
            title: 'Art Video 7',
            src: 'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        },    
          
        ];

    // usestate hook to store the title and src of current video
    const [videoSrc , setVideoSrc] = useState(videosArr[0].src);
    const [videoTitle, setVideoTitle] = useState(videosArr[0].title);

    const changeVideo = (newVideo) => {
        setVideoSrc(newVideo.src);
        setVideoTitle(newVideo.title);
      };
    

  return (
  <Stack direction={['column', 'row']} h={'100vh'}>
    <VStack w={'full'}>
        <video
        controls
        controlsList="nodownload" 
        src={videoSrc}
        style={{
            width:'100%',
        }}>
        </video>

    
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
        <Heading>{videoTitle}</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
    </VStack>

    <VStack 
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'} 
        overflowY={'auto'}
      >
        {
            videosArr.map((item, index) => (
            <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={() => changeVideo(item)}
            >
                {item.title}
            </Button>
            ))
        }
    </VStack>
  </Stack>
  );
};


export default Videos



// 1. **Video Data Array (`videosArr`)**: The `videosArr` array contains objects, each representing a video lecture. Each object has two properties: `title` (the title of the video) and `src` (the source URL of the video). You can add more video objects to this array to represent additional videos.

// 2. **State Variables (`videoSrc` and `videoTitle`)**: Two state variables are defined using the `useState` hook:

//    - `videoSrc`: This state variable is used to store the URL (`src`) of the currently selected video. Initially, it's set to the `src` of the first video in the `videosArr`.

//    - `videoTitle`: This state variable is used to store the title (`title`) of the currently selected video. Initially, it's set to the `title` of the first video in the `videosArr`.

// 3. **`changeVideo` Function**: The `changeVideo` function is called when a button representing a video lecture is clicked. It takes a `newVideo` argument, which is an object representing the selected video. Inside this function:

//    - `setVideoSrc(newVideo.src)` updates the `videoSrc` state with the URL of the selected video, changing the source of the `<video>` element to the new video.

//    - `setVideoTitle(newVideo.title)` updates the `videoTitle` state with the title of the selected video, changing the heading displayed above the video player.

// 4. **Rendering Videos and Buttons**:
//    - The video player is displayed with its source (`src`) set to `videoSrc`, which is controlled by the `videoSrc` state.

//    - The title of the video lecture is displayed using the `Heading` component, and its content is dynamically set to `videoTitle`, which is controlled by the `videoTitle` state. This means that the heading will change whenever `videoTitle` changes.

//    - The buttons representing different video lectures are rendered based on the `videosArr`. When a button is clicked, it calls the `changeVideo` function with the corresponding video object as an argument.

// In summary, when you click on a button, it triggers the `changeVideo` function, which updates both the video source (`videoSrc`) and the video title (`videoTitle`) state variables. As a result, the video player source and the heading above it change to match the selected video, providing a dynamic and interactive user experience for selecting and playing different video lectures.