const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.getElementById('year');
const tripForm = document.getElementById('trip-form');
const tripDaysInput = document.getElementById('trip-days');
const tripStyleInput = document.getElementById('trip-style');
const tripPaceInput = document.getElementById('trip-pace');
const travelOutput = document.getElementById('travel-output');

const tripTemplates = {
  romantic: {
    leve: [
      'Manhã: caminhe pelo centro de Gramado e aproveite os cafés charmosos da rua principal.',
      'Tarde: visite o Lago Negro e reserve um momento para fotos e descanso no mirante.',
      'Noite: faça um jantar romântico com fondue e termine com uma vista tranquila.'
    ],
    equilibrado: [
      'Manhã: explore a Rua Coberta e os pontos de chocolate artesanal de Gramado.',
      'Tarde: passeie no Lago Negro, conheça mirantes e aproveite um momento de pausa em um café.',
      'Noite: escolha um restaurante com vista e uma sobremesa especial para fechar o dia.'
    ],
    intenso: [
      'Manhã: comece cedo com caminhada no centro e um passeio em pontos turísticos icônicos.',
      'Tarde: visite atrações como Mini Mundo e mini trilhas com cenário de montanhas.',
      'Noite: jantar no coração da cidade e passeio iluminado por ruas decoradas.'
    ]
  },
  familia: {
    leve: [
      'Manhã: conheça o Mini Mundo e aproveite uma manhã tranquila em família.',
      'Tarde: visite áreas de lazer e faça uma pausa para doces e cafés.',
      'Noite: horário livre para descansar e aproveitar o clima acolhedor da cidade.'
    ],
    equilibrado: [
      'Manhã: comece no Mini Mundo e depois caminhe pelo centro histórico.',
      'Tarde: experimente chocolate artesanal, lojas de souvenirs e uma caminhada leve.',
      'Noite: escolha um restaurante familiar e curta a atmosfera da cidade.'
    ],
    intenso: [
      'Manhã: visite atrações em sequência e aproveite lugares com muito visual e interatividade.',
      'Tarde: siga para novas descobertas em Gramado, incluindo pontos panorâmicos e compras.',
      'Noite: termine com a experiência de uma praça e gastronomia local em um ambiente animado.'
    ]
  },
  gastronomia: {
    leve: [
      'Manhã: comece com café da manhã acolhedor e uma visita às padarias e chocolaterias.',
      'Tarde: experimente doces, fondue e passeios pelas ruas gastronômicas.',
      'Noite: jantar em restaurante tradicional com pratos típicos da região.'
    ],
    equilibrado: [
      'Manhã: percorra áreas gastronômicas e prove cafés especiais.',
      'Tarde: faça degustação de chocolates e descubra sabores locais em lojas e cafés.',
      'Noite: escolha um jantar sofisticado em um espaço charmoso da cidade.'
    ],
    intenso: [
      'Manhã: roteiro gastronômico com cafés, padarias e quitutes de rua.',
      'Tarde: explore chocolates, sobremesas e degustações em diferentes pontos da cidade.',
      'Noite: jantar completo em restaurante com menu regional e sobremesa de destaque.'
    ]
  },
  cultural: {
    leve: [
      'Manhã: visite o centro histórico e conheça ruas com arquitetura charmosa.',
      'Tarde: caminhe por praças, lojas e pontos de interesse culturais locais.',
      'Noite: aproveite a atmosfera criativa e tranquilidade da cidade.'
    ],
    equilibrado: [
      'Manhã: explore o centro e a cultura local em um passeio mais pausado.',
      'Tarde: conheça pontos turísticos, cafés e detalhes arquitetônicos da cidade.',
      'Noite: faça um passeio noturno pelas ruas e termine com um momento de relaxamento.'
    ],
    intenso: [
      'Manhã: roteiros entre pontos históricos, cultura e arquitetura em sequência.',
      'Tarde: explore diferentes bairros e experiências culturais de Gramado.',
      'Noite: evento, música ou jantar em ambiente cultural para fechar bem o passeio.'
    ]
  },
  natureza: {
    leve: [
      'Manhã: vista panorâmica e caminhada leve nos arredores de Gramado.',
      'Tarde: pausa em mirantes e áreas verdes com paisagens de montanha.',
      'Noite: relaxe em um ambiente tranquilo e admire a paisagem ao pôr do sol.'
    ],
    equilibrado: [
      'Manhã: trilha leve e visita a mirantes com vistas belíssimas.',
      'Tarde: aproveite a natureza com momentos de descanso e fotos em locais tranquilos.',
      'Noite: jantar em espaço com atmosfera acolhedora e vista para a natureza.'
    ],
    intenso: [
      'Manhã: trilhas, mirantes e passeios ao ar livre em sequência.',
      'Tarde: explore paisagens, cachoeiras e diversos pontos de beleza natural.',
      'Noite: final com jantar aconchegante e descanso após um dia de muita descoberta.'
    ]
  }
};

function generateItinerary() {
  const days = Number(tripDaysInput.value);
  const style = tripStyleInput.value;
  const pace = tripPaceInput.value;

  const dayList = tripTemplates[style][pace];
  const output = [];

  for (let i = 1; i <= days; i += 1) {
    const step = dayList[(i - 1) % dayList.length];
    output.push(`
      <div class="itinerary-day">
        <span>Dia ${i}</span>
        <p>${step}</p>
      </div>
    `);
  }

  travelOutput.innerHTML = `
    <h3>Roteiro sugerido</h3>
    ${output.join('')}
  `;
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
  });
}

if (tripForm) {
  tripForm.addEventListener('submit', (event) => {
    event.preventDefault();
    generateItinerary();
  });

  generateItinerary();
}
