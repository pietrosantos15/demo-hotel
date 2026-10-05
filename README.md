# Hotel Ipê Real: site de demonstração para hotel de médio porte

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página de um hotel 3-4 estrelas em cidade turística, com reserva direta por WhatsApp. Nome, preços, endereço, distâncias e políticas são fictícios.

## Inspiração
Estrutura de páginas de hotéis de rede e de agregadores (página de hotel Mercure/Accor, Reserving e Expedia): hero com foto grande e barra de reserva, faixa de fatos (check-in, café, estacionamento), apartamentos com metragem, capacidade e preço, comodidades, localização com distâncias, políticas e FAQ. Nome, logotipo (arco em SVG), textos e layout são próprios.

- Paleta: verde-petróleo `#1E3B36`, areia `#F5F0E7`, papel `#FCFAF6`, latão `#7E5B25`, tinta `#1D2220`, verde WhatsApp `#1C7A4A`.
- Fontes (Google Fonts): Cormorant Garamond (títulos) e Source Sans 3 (texto).

## Personalizar sem editar código
`?wa=5515991234567&nome=Hotel%20do%20Cliente` troca os botões de WhatsApp, o telefone exibido e o nome da marca.

## Fotos (Unsplash, hotlink; trocar por fotos do cliente em `assets/`, basta alterar o `src`)
- Hero: fachada de hotel durante o dia (photo-1551016043-06ec2173531b)
- Standard: cama com roupa branca (1631049307264); Superior: cama de madeira com vista para jardim (1611892440504); Família: cama com cabeceira de madeira (1582719478250); Suíte: cama com almofadas (1618773928121)
- O hotel: recepção com móveis de madeira (1759038085950)
- Galeria: piscina com espreguiçadeiras (1549294413), saguão com lustre (1646991761123), fachada e jardim (1607320895054), área externa/piscina (1623718649591), cama branca (1631049552057)
- Café da manhã: buffet (1722477936580)

## Checklist de entrega
- [ ] Trocar nome, logotipo (`symbol#logo`) e fotos.
- [ ] Número de WhatsApp: buscar `5500900000000` e `(00) 90000-0000`.
- [ ] Apartamentos: metragens, capacidades e preços "a partir de" (exemplos).
- [ ] Endereço, distâncias e mapa (substituir o bloco `.mapa` por Google Maps).
- [ ] Políticas, horários do café, taxas de pet e FAQ.
- [ ] Não incluir notas, avaliações ou prêmios sem comprovação.
- [ ] Remover a barra "Proposta de demonstração" e a frase do rodapé.

A barra de reserva valida as datas (sem datas passadas, saída depois da entrada) e abre o WhatsApp com datas, noites, hóspedes e categoria.
