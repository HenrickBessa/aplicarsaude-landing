# Cuidar · landing page

Página de apresentação do **Cuidar** (nome provisório), piloto de app no navegador do celular para idosos com pouca leitura registrarem a glicemia: foto do visor do glicosímetro, confirmação com número gigante, envio no WhatsApp e relatório em PDF para a médica.

Site estático, sem build e sem framework: `index.html`, `css/estilo.css`, `js/main.js` e `img/`. Publicado pelo GitHub Pages; todos os caminhos são relativos (só `og:image` e `canonical` usam a URL absoluta, como o Open Graph exige).

## Ver localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Dados fictícios

Todas as telas, nomes, números, conversas e o painel da UBS são **fictícios**. Nenhum dado real de saúde aparece na página. As imagens em `img/telas/` são prévias e devem ser trocadas por capturas reais do app mantendo os mesmos nomes (retrato, 720×1560 px).

Números citados na seção "O problema" têm a fonte no rodapé (IDF Diabetes Atlas 11ª ed. e Vigitel Brasil 2025 / Ministério da Saúde).
