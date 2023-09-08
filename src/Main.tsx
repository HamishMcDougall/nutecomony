  import { Container, Flex, Image, Text, NavLink } from "@mantine/core";
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
              <NavLink>Summary</NavLink>
              <NavLink>Roadmap</NavLink>
              <NavLink>Projects</NavLink>
            </Flex>
          </Flex>
        </Container>
        <HeroImage />
        <Container>
        <MainText/>
        <Roadmap/>
        <ClipboardComponent/>

        </Container>
        <Container fluid style={{ marginTop:"20px",  padding:"50px" , backgroundColor:"#0D3B66" }} >
          <Flex direction="column" justify="center" align="center">
          <Image src="./NutE_Logo.png" alt="NutE Logo" width="190px" height="100%" />
  
          <Text>Copyright © 2023 nuteconomy. All Rights Reserved.</Text>
          </Flex>
        </Container>
      </>
    );
  }
