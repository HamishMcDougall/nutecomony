import { Link, Element } from 'react-scroll';


import { Container, Flex, Image, Text, Button } from "@mantine/core";
import { HeroImage } from "./components/HeroImage";
import { MainText } from "./components/mainText";
import { Roadmap } from "./components/Roadmap";
import { ClipboardComponent } from "./components/ClipboardComponent";

export default function Main() {



  return (
    <>
      <Container fluid h={70} style={{ backgroundColor:'#000000', position: 'sticky', top: 0, zIndex: 1000 }}>
        <Flex
          justify="space-between"
          align="center"
          mih={70}
          direction="row"
        >
          <div>
          <Link to="Home" smooth duration={500} offset={-70}>
            <Image src="./NE_Logo.png" /> 
          </Link>
          </div>
      
          <Flex
            direction="row"
            gap="xl"
            style={{ color: '#F4D35E', fontSize: 26, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>
            <Button variant="menu"  radius="xl" size="xl" uppercase>
              <Link to="mainText" smooth duration={500} offset={-70}>
                Summary
              </Link>
            </Button>

            <Button variant="menu" radius="xl" size="xl" uppercase>
              <Link to="Roadmap" smooth duration={500} offset={-70}>
              Roadmap
              </Link>
            </Button>
            
            
            <Button variant="menu" radius="xl" size="xl" uppercase>
            <Link to="Projects" smooth duration={500} offset={-70}>
              Projects
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
      
      <Element name="Home">
        <HeroImage />
       
      </Element>
      <Container>
        <Element name="mainText">
          <MainText />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>
        <Element name="Roadmap">
          <Roadmap />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>
        <Element name="Projects">
          <ClipboardComponent />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>


      </Container>
      <Container fluid style={{ marginTop: "20px", padding: "50px", textAlign: "center" }} >

        <div style={{ color: 'white', fontSize: 12, wordWrap: 'break-word' }}>Copyright © 2022 nutecomony. All Rights Reserved.</div>

      </Container>
    </>
  );
}
