# AplicarSaúde · página de venda

Página de venda do **AplicarSaúde** para o público final (pessoas idosas, famílias e cuidadores): app no navegador do celular para registrar **glicemia e pressão arterial** com uma foto do aparelho, conferir cada número em tamanho gigante e enviar no WhatsApp. Medir é grátis; a assinatura **AplicarSaúde Cuidado Diário** (R$ 29,90 por mês, cancela quando quiser) libera o painel da família e o relatório em PDF para a médica.

- Página: https://henrickbessa.github.io/aplicarsaude-landing/
- App: https://aplicarsaude.vercel.app

## O que a página mostra

1. **Hero**: a proposta e a tela inicial do app. Botão principal "Começar grátis" (abre o app).
2. **Vídeo**: a história da Dona Maria em 45 segundos, com narração (`img/video-lancamento.mp4`, gerado no projeto `video/` do repositório do app).
3. **O problema**: o caderninho que some, com números de diabetes e hipertensão com fonte.
4. **Como funciona**: o caminho da pressão e o da glicemia, pelo princípio "entender sem ler".
5. **Depois do toque**: a mensagem no WhatsApp, o Caderno com cores e o PDF para a médica.
6. **A família acompanha**: o link só de leitura e o painel.
7. **Plano**: o que é grátis e o que faz parte da assinatura, e para quem é (quem mede, a família, quem cuida).
8. **Segurança e ética**: aviso de valor crítico, sem dose nem diagnóstico, confirmação, privacidade e LGPD. Aviso fixo: "Registro feito em casa. Não substitui avaliação médica."
9. **Dúvidas** e **contato** (WhatsApp).

## Regras da página

- Os botões levam ao **app**, nunca direto ao checkout: "Assinar" abre `https://aplicarsaude.vercel.app/assinar`, onde o link de pagamento é gerado com um token. Quem paga assina no próprio celular e depois envia o link de ativação para quem mede; sem o token, a compra não fica ligada a ninguém.
- O preço aparece em `index.html` (plano, dúvidas e metadados) e em `img/og.png`: mudou a oferta, muda nos quatro.
- O repositório é público: nenhum segredo, chave ou identificador interno aqui.

## Arquivos

Site estático, sem build e sem framework: `index.html`, `css/estilo.css`, `js/main.js` e `img/`. Publicado pelo GitHub Pages; todos os caminhos são relativos (só `og:image`, `og:url` e `canonical` usam a URL absoluta, como o Open Graph exige).

- `img/aplicarsaude-horizontal.png`: logo (topo e rodapé).
- `img/favicon.ico` e `img/apple-touch-icon.png`: ícones, a partir do ícone oficial.
- `img/og.png`: imagem de compartilhamento (1200×630).
- `img/telas/*.webp`: capturas reais do app (celular 720 px de largura, painel no computador 1600×1000).

## Ver localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Dados fictícios

Todas as telas, nomes, números e conversas são **fictícios**. Nenhum dado real de saúde aparece na página.

Números citados na seção "O problema" têm a fonte no rodapé (IDF Diabetes Atlas 11ª ed. e Vigitel Brasil 2025 / Ministério da Saúde).
