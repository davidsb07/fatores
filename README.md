---
title: fatores
emoji: 📐
colorFrom: orange
colorTo: blue
sdk: docker
app_port: 7860
---

# App de Avaliacao Por Fatores

Projeto inicial criado na pasta `fatores/app`.

## Como testar localmente

No PowerShell:

```powershell
cd C:\Users\david\Projetos\fatores\app
py -m http.server 4173
```

Depois abra:

`http://localhost:4173`

## Estrutura

- `app/`: interface standalone em HTML/CSS/JS
- `Planilha_tratamento_fatores.xlsx`: planilha de referencia
- `.github/workflows/hf-space.yml`: sync automatico para o Space
- `Dockerfile`: execucao no Hugging Face Space

## Estado atual

- app standalone em HTML/CSS/JS
- linhas dinamicas
- tipologias adicionais
- primeira linha fixa como avaliando
- dicionarios editaveis
- calculo alinhado com o exemplo da planilha de apartamentos
- exportacao de relatorio HTML

## Deploy

Este projeto esta preparado para o mesmo fluxo do `cda`:

- repositorio git com branch `main`
- workflow `hf-space.yml`
- segredo `HF_TOKEN` no GitHub
- Space de destino configurado no workflow

## Observacao

O fluxo do Space foi configurado assumindo o destino:

`https://huggingface.co/spaces/ESJL/fatores`

Se o nome final do Space for outro, ajuste o arquivo:

`.github/workflows/hf-space.yml`
