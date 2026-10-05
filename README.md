# Soneca Hotéis: site de demonstração para hotel urbano

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página de um hotel urbano de rede. Nome, marca, unidades, preços e condições são fictícios.

## Inspiração
Hotelaria urbana moderna e simpática, no estilo das redes econômicas e midscale: muito branco, blocos de cor vivos, barra de reserva grande no topo, cards de ofertas, "por que reservar direto" e o sono como protagonista. É um trabalho "inspirado em": nome, logotipo (travesseiro-nuvem com lua, original em SVG), textos e ilustrações são próprios e não reproduzem nenhuma marca real.

- Paleta: azul-marinho `#0E1B3D`, coral `#F0413F`, menta `#2BB5A0`, amarelo-sol `#FFC93C`, branco e névoa `#F3F5FA`.
- Fonte: Figtree (Google Fonts), com fallback para fontes do sistema.
- Cantos arredondados de 14 a 20 px, ilustrações em SVG inline (sem imagens externas).

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-hotel/`.

## Personalizar para um cliente sem editar código
```
https://SEU-USUARIO.github.io/demo-hotel/?wa=5515991234567&nome=Hotel%20do%20Cliente
```
- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, a consulta de datas e o telefone exibido.
- `nome`: troca o nome da marca no topo, no rodapé e na aba do navegador.

## Checklist de entrega ao cliente
- [ ] Trocar o logotipo (`symbol#logo` no `index.html`) e o nome "Soneca Hotéis" pela marca do cliente.
- [ ] Número do WhatsApp: buscar `5500900000000` e `(00) 90000-0000`.
- [ ] Unidades (lista de destino na barra de reserva e no rodapé), endereço e link do mapa.
- [ ] Quartos, capacidades, metragens e camas. Trocar as ilustrações por fotos reais com `<img>` quando houver.
- [ ] Ofertas e pacotes (todos são exemplos): nomes, regras e validade.
- [ ] Café da manhã: horário e opções reais.
- [ ] Comodidades, políticas (check-in, check-out, cancelamento, crianças, pets) e perguntas frequentes.
- [ ] Atrações próximas e distâncias reais.
- [ ] Idiomas EN/ES: hoje apenas ilustrativos (desativados). Implementar ou remover.
- [ ] Não incluir depoimentos, notas ou prêmios sem comprovação.
- [ ] Remover a frase "Site de demonstração" do rodapé.

A barra de reserva valida entrada e saída (não aceita datas passadas nem saída igual ou anterior à entrada) e abre o WhatsApp com unidade, datas, hóspedes e código promocional. Não há sistema de reservas: a confirmação é feita pela recepção.

## Arquivos
`index.html` (conteúdo e ilustrações) · `style.css` (visual) · `script.js` (consulta de datas, WhatsApp, menu e parâmetros do link)
