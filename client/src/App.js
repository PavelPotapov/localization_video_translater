import logo from "./logo.svg"
import "./App.css"
import "./font.css"
import Form from "./components/form"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
	return (
		<ChakraProvider>
			<Form></Form>
		</ChakraProvider>
	)
}

export default App
