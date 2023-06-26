import { Container, Grid,  Title } from "@mantine/core";
import { HeroImage } from "./components/HeroImage";
import { Clipboard } from "./components/clipboard";
import {ClipboardEmpty} from "./components/clipboardEmpty";

export default function Main() {
  return (
    <>
      <Container fluid h={60}></Container>
      <HeroImage />
      <Title order={2}>Projects</Title>
      <Grid>
        <Grid.Col span={6}><Clipboard/></Grid.Col>
        <Grid.Col span={6}><Clipboard/></Grid.Col>
        <Grid.Col span={6}><ClipboardEmpty /></Grid.Col>
        <Grid.Col span={6}><ClipboardEmpty /></Grid.Col>
        <Grid.Col span={6}><ClipboardEmpty /></Grid.Col>

      </Grid>
    </>
  );
}
