---
title: Tratamento por Fatores
emoji: "📐"
colorFrom: blue
colorTo: gray
sdk: static
app_file: app/index.html
---

# Tratamento por Fatores

Aplicativo estático de avaliação imobiliária por fatores, com:

- seleção dinâmica de fatores
- linhas dinâmicas de dados de mercado
- homogeneização
- saneamento com apoio de Chauvenet
- valor adotado e relatório exportável
- salvamento de trabalhos em `.fat`

## Estrutura

- `app/`: interface HTML/CSS/JS
- `Planilha_tratamento_fatores.xlsx`: planilha de referência
- `.github/workflows/hf-space.yml`: sincronização do GitHub para o Hugging Face Space

## Teste local

No PowerShell:

```powershell
cd C:\Users\david\Projetos\fatores\app
py -m http.server 4173
```

Depois abra:

`http://localhost:4173`

## Hugging Face Space

Este projeto está preparado para um Space `static`.

Configuração atual do workflow:

- Space alvo: `DavidSB/Fatores`
- segredo esperado no GitHub: `HF_TOKEN`

Se o nome final do seu Space for outro, ajuste em:

- `.github/workflows/hf-space.yml`

## Token

Depois de criar o Space, gere um token no Hugging Face com permissão de escrita no repositório/Space e salve-o no GitHub como:

- `HF_TOKEN`
