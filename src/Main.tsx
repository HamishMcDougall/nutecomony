  import { Container, Flex, Image, Text, Button } from "@mantine/core";
  import { HeroImage } from "./components/HeroImage";
import { MainText } from "./components/mainText";
import { Roadmap } from "./components/Roadmap";
import { ClipboardComponent } from "./components/ClipboardComponent";

  export default function Main() {

   

    return (
      <>
        <Container fluid h={70}>
          <Flex
          justify="space-between"
          align="center"
          mih={70}
               direction="row"
         >
            <div><Image src="./NE_Logo.png" /> </div>
            <Flex 
              direction="row"
              gap="xl"
            style={{ color: '#F4D35E', fontSize: 26, fontFamily: 'ADLaM Display', wordWrap: 'break-word'}}>
              <Button variant="subtle" color="yellow" radius="xl" size="xl" uppercase>Summary</Button>
              <Button variant="subtle" color="yellow" radius="xl" size="xl" uppercase>Roadmap</Button>
              <Button variant="subtle" color="yellow" radius="xl" size="xl" uppercase>Projects</Button>
            </Flex>
          </Flex>
        </Container>
        <HeroImage />
        <Container>
        <MainText/>
        <Roadmap/>
        <ClipboardComponent/>

        </Container>
        <Container fluid style={{ marginTop:"20px",  padding:"50px", textAlign:"center" }} >
        
        <div style={{color: 'white', fontSize: 12, wordWrap: 'break-word'}}>Copyright © 2022 nutecomony. All Rights Reserved.</div>
   
        </Container>
      </>
    );
  }
