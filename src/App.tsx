import styled from "styled-components";

import One from './exercicios/one';
import Two from './exercicios/two';
import Three from './exercicios/three';
import Four from './exercicios/four';
import Five from './exercicios/five';
import Six from './exercicios/six';
import Seven from './exercicios/seven';
import Eight from './exercicios/eight';
import Nine from './exercicios/nine';
import Ten from './exercicios/ten';

const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	color: #7241c2;
	font-family: 'Roboto', sans-serif;
`;

const Text = styled.strong`
	font-size: 1.2rem;
	text-align: center;
	color: #1c7969;
	font-family: 'Roboto', sans-serif;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-width: 100vw;
	align-items: center;
`;

const SubWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50vw;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: space-around;	
`;

const Media = styled.div`
	overflow: hidden;
`;

function App() {
  return <Media>
			<Header>
				<Title> Obrigado pela oportunidade de participar do processo </Title>
				<Text>
					Para ver a Array estruturada, verifique nos logs do console.
				</Text>
			</Header>
			<Wrapper>
				<SubWrapper>
					<hr />
					<One />
					<br />
					<hr />
					<Two />
					<br />
					<hr />
					<Three />
					<br />
					<hr />
					<Four />
					<br />
					<hr />
					<Five />
					<br />
				</SubWrapper>
				<SubWrapper>
					<hr />
					<Six />
					<br />
					<hr />
					<Seven />
					<br />
					<hr />
					<Eight />
					<br />
					<hr />
					<Nine />
					<br />
					<hr />
					<Ten />
				</SubWrapper>
			</Wrapper>
		</Media>
}

export default App;
