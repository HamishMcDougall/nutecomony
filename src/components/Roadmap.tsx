import { Flex, Grid, Image, Space, Title } from '@mantine/core';

export interface IMainRoadMapProps { }


export function Roadmap(props: IMainRoadMapProps) {
    return (
        <div>
            <Flex
                gap="md"
                justify="center"
                align="center"
                direction="row"
            >
                <div style={{ width: 449, height: 0, border: '0.50px #F4D35E solid' }}></div>
                <Title order={3} style={{ color: "#F4D35E" }}>Roadmap</Title>
                <div style={{ width: 449, height: 0, border: '0.50px #F4D35E solid' }}></div>
            </Flex>
            <Space h="xl" />
            <Grid
                justify="center" 
                align="flex-end"
                gutter="xl"
            >
                <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_1.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q1 - 2023</div>
                        <Flex 
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Inception of the idea</div>
                            <div>Market research</div>
                            <div>Interviewing other founders and key people in the space</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_2.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q2 - 2023</div>
                        <Flex 
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Website and brand development </div>
                            <div>Bringing more people to the team</div>
                            <div>Establishing a community</div>
                            <div>Official launch of the peanutz token</div>
                            <div>Listing on Uniswap</div>
                            <div>DAO and governance system in development</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_3.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q3 - 2023</div>
                        <Flex 
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Starting and aggressive marketing campaign</div>
                            <div>Exchange listing</div>
                            <div>Collaboration with other players in the industry</div>
                            <div>Peanutz DAO and governance set in place</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_4.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q4 - 2023</div>
                        <Flex 
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Creating a Peanutz aggregator</div>
                            <div>Adding more DeFi features</div>
                            <div>Adding structure into Peanutz DAO with pools focused on specific niches in the blockchain space</div>
                            <div>Peanutz Labs set in place</div>
                            <div>And a lot more...</div>
                        </Flex>
                    </Flex></Grid.Col>
            </Grid>
        </div>
    );
}