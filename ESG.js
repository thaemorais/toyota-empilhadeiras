const esgData = {
	environmental: [
		{
			title: "Energia Renovável",
			description:
				"Implementação de painéis solares em todas as unidades, reduzindo em 40% o consumo de energia não-renovável.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Gestão de Resíduos",
			description:
				"Programa de reciclagem que processou mais de 10 toneladas de materiais em 2024.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Redução de Emissões",
			description:
				"Diminuição de 30% nas emissões de CO2 através da otimização logística.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Conservação da Água",
			description:
				"Sistema de reaproveitamento de água que economiza 5 milhões de litros anualmente.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Biodiversidade",
			description:
				"Projeto de preservação de espécies locais e restauração de habitats naturais.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Economia Circular",
			description:
				"Implementação de processos de reaproveitamento e zero desperdício na produção.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Carbono Neutro",
			description:
				"Programa de compensação de carbono através do plantio de árvores nativas.",
			image: "https://picsum.photos/500/200",
		},
	],
	social: [
		{
			title: "Diversidade e Inclusão",
			description:
				"Programa de mentoria para grupos subrepresentados, com mais de 200 participantes.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Desenvolvimento Comunitário",
			description:
				"Investimento em projetos sociais locais, beneficiando mais de 1000 famílias.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Bem-estar dos Colaboradores",
			description:
				"Implementação de programas de saúde mental e equilíbrio trabalho-vida.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Educação Profissional",
			description: "Programa de capacitação técnica para jovens da comunidade.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Saúde e Segurança",
			description:
				"Investimento em equipamentos e treinamentos de segurança no trabalho.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Voluntariado Corporativo",
			description:
				"Programa que incentiva funcionários a participarem de ações sociais.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Direitos Humanos",
			description:
				"Política de respeito aos direitos humanos em toda cadeia produtiva.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Relacionamento com Stakeholders",
			description: "Canal de diálogo aberto com todas as partes interessadas.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Desenvolvimento Local",
			description: "Priorização de fornecedores e mão de obra local.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Acessibilidade",
			description:
				"Adaptação de espaços e processos para pessoas com deficiência.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Qualidade de Vida",
			description:
				"Programas de benefícios e suporte ao colaborador e sua família.",
			image: "https://picsum.photos/500/200",
		},
	],
	governance: [
		{
			title: "Transparência",
			description:
				"Publicação trimestral de relatórios detalhados sobre práticas ESG.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Ética Empresarial",
			description:
				"Código de conduta atualizado e treinamentos regulares para todos os funcionários.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Gestão de Riscos",
			description:
				"Sistema integrado de monitoramento e prevenção de riscos ambientais e sociais.",
			image: "https://picsum.photos/500/200",
		},
		{
			title: "Compliance",
			description:
				"Programa robusto de conformidade com legislações e normas internacionais.",
			image: "https://picsum.photos/500/200",
		},
	],
};

function createOrbitingCircles() {
	const container = document.querySelector(".bloco_interativo .container");

	Object.keys(esgData).forEach((category) => {
		let centerX, centerY;

		if (category === "environmental") {
			centerX = window.innerWidth * 0.4;
			centerY = window.innerHeight * 0.175;
		} else if (category === "social") {
			centerX = window.innerWidth * 0.5 - 545;
			centerY = window.innerHeight * 0.175;
		} else if (category === "governance") {
			centerX = window.innerWidth * 0.5 + 255;
			centerY = window.innerHeight * 0.175;
		}

		// Define um raio fixo para manter a proporção da órbita
		const orbitRadius = 120;

		esgData[category].forEach((item, index) => {
			const orbit = document.createElement("div");
			orbit.className = "orbit-circle";
			orbit.innerHTML = `Ação ${index + 1}`;

			const angle = index * (360 / esgData[category].length) * (Math.PI / 180);
			const x = centerX + Math.cos(angle) * orbitRadius - 15;
			const y = centerY + Math.sin(angle) * orbitRadius - 15;

			orbit.style.position = "absolute";
			orbit.style.left = `${x}px`;
			orbit.style.top = `${y}px`;

			orbit.onclick = () => showPopup(item);
			container.appendChild(orbit);
		});
	});
}

function showPopup(data) {
	const popup = document.querySelector(".popup");
	const overlay = document.querySelector(".overlay");

	popup.querySelector("img").src = data.image;
	popup.querySelector("h2").textContent = data.title;
	popup.querySelector("p").textContent = data.description;

	popup.style.display = "block";
	overlay.style.display = "block";
}

document.querySelector(".close-popup").onclick = () => {
	document.querySelector(".popup").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
};

document.querySelector(".overlay").onclick = () => {
	document.querySelector(".popup").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
};

// Inicializa os círculos orbitantes quando a página carrega
window.onload = createOrbitingCircles;
