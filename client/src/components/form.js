import React, { Component } from "react"
import {
	ChakraProvider,
	Box,
	Checkbox,
	CheckboxGroup,
	Center,
	Square,
	Circle,
	Card,
	AbsoluteCenter,
	CardHeader,
	Heading,
	CardBody,
	Text,
	CardFooter,
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Divider,
	Image,
	
} from "@chakra-ui/react"


import myImage from "../assets//logo-reg.png"

const Form = () => {
	return (
		<Center fontFamily={"Roboto Mono"}>
			<Card w={350} pos="relative" borderRadius={15}>
				<Box bg="#4fb9ff" w={350} h={100} pos="absolute" zIndex={1}></Box>
				<Center>
					<Text zIndex={3} fontSize="1xl">
						OvalOwl
					</Text>
				</Center>

				<CardHeader>
					<Center>
						<Image
							borderRadius="full"
							boxSize="100px"
							src={myImage}
							alt="OvalOwl"
							zIndex={2}
						/>
					</Center>
					<Center>
						<Heading size="md">Sign In</Heading>
					</Center>
					<Center>
						<Box display="block" marginTop={2}>
							<Text fontSize="xs">
								or <a href="https://meet.google.com/"> SignUp</a>
							</Text>
						</Box>
					</Center>
				</CardHeader>
				<CardBody>
					<Input type="email" variant="filled" placeholder="Email" />
					<Input
						type="password"
						mt="30px"
						variant="filled"
						placeholder="Password"
					/>
				</CardBody>
				<Center>
					<Divider w={300} />
				</Center>
				<Center>
					<CardFooter>
						<Button color="#4fb9ff" variant="outline">
							Сontinue
						</Button>
					</CardFooter>
				</Center>
			</Card>
		</Center>
	)
}

export default Form
