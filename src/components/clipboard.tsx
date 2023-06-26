import { Box, Button, Flex, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaExternalLinkSquareAlt, FaTelegram, FaTwitter } from "react-icons/fa";

export interface IclipboardProps {
  projectName: string;
  projectDescription: string;
  projectLinkWeb: string;
  projectLinkTwitter: string;
  projectLinkTelegram: string;
  projectLinkdextools: string;
}

export function Clipboard(props: IclipboardProps) {
  const theme = useMantineTheme();
    // const isMobile = useMediaQuery("(max-width: 800px)");
  const isSmall = useMediaQuery("(max-width: 500px)");

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image src="./clipboard.png" alt="clipboard" width="100%" height="100%" />
      <Box
        style={{
          position: "absolute",
          width: "85%", height: "85%",
          top: isSmall ? '40px' : '50px',
          left: isSmall ? '15px' : '20px',
          // backgroundColor:
          //   theme.colorScheme === "dark"
          //     ? theme.colors.dark[6]
          //     : theme.colors.gray[0],
          textAlign: "left",
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
          cursor: "pointer",
        }}
      >
        {/* This will now sit over the clipboard image */}
        <Flex  justify="center" align="center" mih={isSmall ? 80: 120} >
        <Image src={props.projectName} />
        </Flex>
        <p>{props.projectDescription}</p>
        <Flex justify="space-between" align="center">
          <Button
            component="a"
            href={props.projectLinkWeb}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Button>
          <Flex justify="space-between" align="center"  columnGap={isSmall ? '2px' : '8px'}>
            <Button
              component="a"
              href={props.projectLinkTwitter}
              target="_blank"
              rel="noopener noreferrer"
              variant="link"
            ><FaTwitter /> </Button>
            <Button
              component="a"
              href={props.projectLinkTelegram}
              target="_blank"
              rel="noopener noreferrer"
              variant="link"
            > <FaTelegram /></Button>
            <Button
              component="a"
              href={props.projectLinkdextools}
              target="_blank"
              rel="noopener noreferrer"
              variant="link"
            ><FaExternalLinkSquareAlt /></Button>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
