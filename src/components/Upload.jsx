import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';


const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input required type={'file'}  
                  css ={{
                    "&::file-selector-button":{
                      border: 'none',
                      width: 'calc(100% + 36px)',
                      height: '100%',
                      marginLeft: '-18px',
                      color: 'purple',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                    }
                  }}
              />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>    
          </HStack>
        </form>

      </VStack>
    </Container>
  )
}

export default Upload


// &::file-selector-button: 
//This selector is targeting a pseudo-element, specifically the ::file-selector-button. 
//In HTML, this pseudo-element represents the button that allows a user to browse and select files when an <input type="file"> element is used. 
//It's a part of the browser's default styling for file input elements.