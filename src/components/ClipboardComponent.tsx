import { Flex, Grid, Space, Title } from '@mantine/core';
import { Clipboard } from "./clipboard";
import {ClipboardEmpty} from "./clipboardEmpty";

export interface IClipboardComponent{}


export function ClipboardComponent(props: IClipboardComponent) {

    const projectInfoPeanutz = {
        projectName: "./peanutz_logo.png", 
        projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the ", 
        projectLinkWeb: "http://www.cashew.io", 
        projectLinkTelegram: "www.telegram/cashue", 
        projectLinkTwitter: "twitter.com/cashue", 
        projectLinkdextools: "www.dex"
      };
  
      const projectInfoCashew = {
        projectName: "./cashew_logo.png", 
        projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the ", 
        projectLinkWeb: "cashue.io", 
        projectLinkTelegram: "www.telegram/cashue", 
        projectLinkTwitter: "twitter.com/cashue", 
        projectLinkdextools: "www.dex"
      };
  

  return (
    <div>
            <Flex
     gap="md"
     justify="center"
     align="center"
     direction="row"
    >
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
        <Title order={3} style={{ color:"#F4D35E" }}>Projects</Title>
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
    </Flex>
    <Space h="xl" />
          <Grid>
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoCashew} /></Grid.Col>  
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoPeanutz} /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
        </Grid>
    </div>
  );
}