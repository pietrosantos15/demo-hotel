# Hotel Alvorada Serra: site de demonstração para hotel e pousada

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página do hotel deles. Conteúdo, preços e lugares são fictícios.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-hotel/`.

## Personalizar para um cliente sem editar código
Acrescente parâmetros ao link:

```
https://SEU-USUARIO.github.io/demo-hotel/?wa=5515991234567&nome=Pousada%20do%20Cliente
```

- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, a consulta de datas e o telefone exibido.
- `nome`: troca o nome do hotel no topo, no rodapé e na aba do navegador.

## Entregar de verdade ao cliente
Antes de publicar para o cliente, troque no `index.html`:

- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, endereço e link do Google Maps.
- [ ] Acomodações, capacidades e preços. As ilustrações dos quartos são desenhos; troque por fotos reais com `<img>` quando o cliente tiver.
- [ ] Comodidades, políticas de entrada, saída, cancelamento e crianças.
- [ ] Atrações próximas e distâncias.
- [ ] **Depoimentos**: substitua pelos de hóspedes reais ou apague o bloco.
- [ ] Remova a frase "Site de demonstração" do rodapé.

O formulário de datas valida entrada e saída e abre o WhatsApp com a consulta pronta. Não há sistema de reservas: a confirmação é feita pela recepção.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (consulta de datas, WhatsApp e parâmetros do link)
