# AplicarSaúde · landing page

Página de apresentação do **AplicarSaúde**, piloto de app no navegador do celular para idosos com pouca leitura registrarem **glicemia e pressão arterial**: foto do visor do aparelho, confirmação de cada número em tamanho gigante, envio no WhatsApp, painel de acompanhamento para a família e relatório em PDF para a médica.

- Página: https://henrickbessa.github.io/aplicarsaude-landing/
- Piloto no ar: https://aplicarsaude.vercel.app

## O que a página mostra

1. **Hero**: a proposta (glicemia e pressão com uma foto) e a tela inicial com os botões Glicose e Pressão.
2. **O problema**: o caderninho que some, com números de diabetes e hipertensão com fonte.
3. **Como funciona**: o caminho da pressão (escolher, fotografar o aparelho de braço ou de pulso, confirmar máxima, mínima e pulso, momento, enviar), a voz que fala "13 por 8" e o mesmo caminho na glicemia. Princípio "entender sem ler".
4. **Depois do toque**: a mensagem no WhatsApp, o Caderno com cores e o PDF para a médica com glicemia e pressão.
5. **A família acompanha**: o botão Família cria um link só de leitura; o painel (cartões, gráficos de 14 dias, linha do tempo, PDF); ela pode parar de compartilhar quando quiser.
6. **Para quem**: família e idoso (no piloto), empresas de cuidadores (em parte no piloto) e UBS (próximo passo, painel ilustrativo).
7. **Segurança e ética**: aviso de valor crítico, sem dose nem diagnóstico, confirmação, link da família com a chave depois do "#" e só o hash no banco, RLS, LGPD, custo zero de API.
8. **Próximos passos** e **contato** (WhatsApp).

## Arquivos

Site estático, sem build e sem framework: `index.html`, `css/estilo.css`, `js/main.js` e `img/`. Publicado pelo GitHub Pages; todos os caminhos são relativos (só `og:image`, `og:url` e `canonical` usam a URL absoluta, como o Open Graph exige).

- `img/aplicarsaude-horizontal.png`: logo (topo e rodapé).
- `img/favicon.ico` e `img/apple-touch-icon.png`: ícones, a partir do ícone oficial.
- `img/og.png`: imagem de compartilhamento (1200×630).
- `img/telas/*.webp`: capturas reais do piloto (celular 720 px de largura, painel no computador 1600×1000).

## Ver localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Dados fictícios

Todas as telas, nomes, números, conversas e o painel da UBS são **fictícios**. Nenhum dado real de saúde aparece na página. O painel da UBS é uma ilustração de próximo passo, não uma tela do app.

Números citados na seção "O problema" têm a fonte no rodapé (IDF Diabetes Atlas 11ª ed. e Vigitel Brasil 2025 / Ministério da Saúde).
