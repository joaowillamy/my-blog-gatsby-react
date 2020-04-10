import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styled';

const AboutPage = () => (
	<Layout>
		<SEO
			title={`Sobre mim | João Willamy`}
			description={`Fullstack Ruby & JS Pleno at Resolvvi`}
			image={`assets/img/cover.png`}
		/>
		<S.PostHeader>
			<S.PostTitle>{`João Willamy`}</S.PostTitle>
			<S.PostDescription>{'Full stack Ruby & JS Pleno na Resolvvi'}</S.PostDescription>
		</S.PostHeader>
		<S.MainContent>
			<h2>Sobre mim</h2>
			<p>Prezo sempre por trabalhar em equipe e tenho satisfação em ensinar e aprender.</p>
			<p>Adoro um ambiente aberto para criar soluções inovadoras para o mercado, onde exige disciplina e foco.</p>
			<h3>Meu escudo para entregar com velocidade e sem abrir mão da qualidade:</h3>
			<ul>
				<li>Boas praticas</li>
				<li>DRY</li>
				<li>Clean code</li>
				<li>TDD</li>
				<li>Design system</li>
			</ul>
			<h3>Tenho experiência com:</h3>
			<ul>
				<li>Ruby on Rails</li>
				<li>React</li>
				<li>React Native</li>
				<li>Node.JS</li>
				<li>SQL Server</li>
			</ul>
			<blockquote>
				Quer saber mais? veja meu{' '}
				<a
					href="https://www.linkedin.com/in/jo%C3%A3o-willamy-8aa9058a/"
					title="Linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
				</a>
			</blockquote>
		</S.MainContent>
	</Layout>
);

export default AboutPage;
