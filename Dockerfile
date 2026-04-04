FROM python:3.13-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=7860

COPY app/ /app/app/
COPY Planilha_tratamento_fatores.xlsx /app/Planilha_tratamento_fatores.xlsx
COPY README.md /app/README.md

EXPOSE 7860

CMD ["sh", "-c", "cd /app/app && python -m http.server ${PORT}"]
