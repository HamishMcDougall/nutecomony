import { Flex, Grid, Space, Title } from '@mantine/core';

export interface IMainTextProps {}


export function MainText(props: IMainTextProps) {
  return (
    <div>
    <Flex
     gap="md"
     justify="center"
     align="center"
     direction="row"
    >
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
        <Title order={3} style={{ color:"#F4D35E" }}>Summary</Title>
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
    </Flex>
    <Space h="xl" />
    <Grid>
      <Grid.Col xs={6} span={12}><div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word'}}>This is a Headline the it should be large and yellow to stand out and include the main points for the user.</div></Grid.Col>
      <Grid.Col xs={6} span={12}><div style={{ paddingTop:"15px", color: 'white', fontSize: 16, wordWrap: 'break-word'}}>The next lines can be smaller allowing for more text and easer reading. On mobile this should stack under the headline on the left The next lines can be smaller allowing for more text and easer reading. The next lines can be smaller allowing for more text and easer reading. The next lines can be smaller allowing for more text and easer reading. <br/><br/>On mobile this should stack under the headline on the left .The next lines can be smaller allowing for more text and easer reading. On mobile this should stack under the headline on the left  The next lines can be smaller allowing for more text and easer reading. </div></Grid.Col>
    </Grid>
    </div>
  );
}