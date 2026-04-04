const BASE_DICTIONARIES = {
  topografia: {
    "plano <5%": 1.0,
    "acl. leve 5% e 30%": 0.95,
    "dec._leve 5% e 30%": 0.9,
    "acl._acent. >30%": 0.85,
    "dec._acent. >30%": 0.8,
  },
  relevo: {
    Plana: 1.1,
    Ondulada: 1.0,
    Acidentada: 0.8,
  },
  superficie: {
    Seca: 1.0,
    "Inundavel sazonal": 0.9,
    "Inundavel periodica": 0.7,
    Alagada: 0.6,
  },
  aproveitamento: {
    Loteamento: 1.0,
    Industria: 0.9,
    Culturas: 0.8,
  },
  acessibilidade: {
    Otima: 1.0,
    "Muito boa": 0.95,
    Boa: 0.9,
    Desfavoravel: 0.8,
    Ma: 0.75,
    Pessima: 0.7,
  },
  idade_conservacao: {
    "id<5_novo": 1.0,
    "id<5_bom": 0.95,
    "id<5_rep. simp.": 0.8,
    "id<5_ rep. imp.": 0.45,
    "id  de 6 e 10_novo": 0.95,
    "id  de 6 e 10_bom": 0.9,
    "id  de 6 e 10_rep. simp.": 0.75,
    "id  de 6 e 10_rep. imp.": 0.4,
    "id  de 11 e 30_novo": 0.85,
    "id  de 11 e 30_bom": 0.8,
    "id  de 11 e 30_rep. simp.": 0.65,
    "id  de 11 e 30_rep. imp.": 0.35,
    "id  de 31 e 50_novo": 0.55,
    "id  de 31 e 50_bom": 0.5,
    "id  de 31 e 50_rep. simp.": 0.45,
    "id  de 31 e 50_rep. imp.": 0.25,
    "id>50_novo": 0.3,
    "id>50_bom": 0.2,
    "id>50_ rep. simp.": 0.15,
    "id>50_ rep. imp.": 0.1,
  },
  padrao_construtivo: {
    "popular res": 1.0,
    "baixo res": 1.15,
    "normal res": 1.3,
    "alto res": 1.45,
    "luxo res": 1.65,
    "popular com": 1.0,
    "baixo com": 1.08,
    "normal com": 1.15,
    "alto com": 1.25,
    "luxo com": 1.4,
  },
  andar: {
    Terreo: 1.0,
    "1o": 1.02,
    "2o": 1.04,
    "3o": 1.061,
    "4o": 1.082,
    "5o": 1.104,
    "6o": 1.126,
    "7o": 1.149,
    "8o": 1.172,
    "9o": 1.195,
    "10o": 1.219,
    "11o": 1.243,
    "12o": 1.268,
    "13o": 1.293,
    "14o": 1.319,
    "15o": 1.345,
    "16o": 1.372,
    "17o": 1.399,
    "18o": 1.427,
    "19o": 1.456,
    "20o": 1.485,
  },
};

const CHAUVENET = {
  2: 1.15,
  3: 1.38,
  4: 1.54,
  5: 1.65,
  6: 1.73,
  7: 1.8,
  8: 1.85,
  9: 1.91,
  10: 1.96,
  11: 1.99,
  12: 2.03,
  13: 2.06,
  14: 2.1,
  15: 2.13,
  16: 2.16,
  17: 2.18,
  18: 2.2,
  19: 2.21,
  20: 2.24,
  21: 2.26,
  22: 2.28,
  23: 2.3,
  24: 2.31,
};

const T_STUDENT_80 = {
  1: 3.078,
  2: 1.886,
  3: 1.638,
  4: 1.533,
  5: 1.476,
  6: 1.44,
  7: 1.415,
  8: 1.397,
  9: 1.383,
  10: 1.372,
  11: 1.363,
  12: 1.356,
  13: 1.35,
  14: 1.345,
  15: 1.341,
  16: 1.337,
  17: 1.333,
  18: 1.33,
  19: 1.328,
  20: 1.325,
  21: 1.323,
  22: 1.321,
  23: 1.319,
};

const FACTORS = [
  { id: "localizacao", label: "Localizacao", kind: "number", appliesTo: ["terreno", "gleba", "apartamento", "sala", "casa", "loja", "predio"] },
  { id: "area_construida", label: "Area construida", kind: "number", appliesTo: ["apartamento", "sala", "casa", "loja", "predio"] },
  { id: "area_territorial", label: "Area territorial", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "testada", label: "Testada", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "prof_equivalente", label: "Prof. equivalente", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "topografia", label: "Topografia", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "relevo", label: "Relevo", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "superficie", label: "Superficie", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio"] },
  { id: "aproveitamento", label: "Aproveitamento", kind: "option", appliesTo: ["terreno", "gleba", "predio"] },
  { id: "acessibilidade", label: "Acessibilidade", kind: "option", appliesTo: ["terreno", "gleba", "casa", "loja", "predio"] },
  { id: "idade_conservacao", label: "Idade e conservacao", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio"] },
  { id: "padrao_construtivo", label: "Padrao construtivo", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio"] },
  { id: "vaga", label: "Vagas", kind: "number", appliesTo: ["apartamento", "sala", "casa", "loja"] },
  { id: "andar", label: "Andar", kind: "option", appliesTo: ["apartamento", "sala", "loja"] },
];

const DEFAULT_FACTORS = {
  terreno: ["localizacao", "area_territorial", "topografia", "relevo", "superficie"],
  gleba: ["localizacao", "area_territorial", "topografia", "relevo", "superficie"],
  apartamento: ["localizacao", "area_construida", "padrao_construtivo", "vaga", "andar"],
  sala: ["localizacao", "area_construida", "padrao_construtivo", "vaga", "andar"],
  casa: ["localizacao", "area_construida", "area_territorial", "padrao_construtivo", "idade_conservacao"],
  loja: ["localizacao", "area_construida", "padrao_construtivo", "vaga", "acessibilidade"],
  predio: ["localizacao", "area_construida", "area_territorial", "padrao_construtivo", "aproveitamento"],
};

const APARTMENT_EXAMPLE = {
  assetType: "apartamento",
  referenceMode: "Construida",
  activeFactors: ["localizacao", "area_construida", "padrao_construtivo", "vaga", "andar"],
  rows: [
    { endereco: "Imovel avaliando", valor_total: "", fon: "1", incluir: false, campos: { localizacao: "1.1", area_construida: "90", padrao_construtivo: "alto res", vaga: "2", andar: "2o" } },
    { endereco: "Rua B, 761", valor_total: "636000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_construida: "92.09", padrao_construtivo: "normal res", vaga: "1", andar: "1o" } },
    { endereco: "Rua E, 698", valor_total: "670000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "96.05", padrao_construtivo: "normal res", vaga: "2", andar: "2o" } },
    { endereco: "Rua A", valor_total: "636000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_construida: "87.11", padrao_construtivo: "normal res", vaga: "1", andar: "1o" } },
    { endereco: "Rua G, 66", valor_total: "742000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "95.02", padrao_construtivo: "alto res", vaga: "1", andar: "3o" } },
    { endereco: "Rua C, 161", valor_total: "696150", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "88.14", padrao_construtivo: "alto res", vaga: "1", andar: "3o" } },
    { endereco: "Rua B, 00", valor_total: "650000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "81.43", padrao_construtivo: "alto res", vaga: "1", andar: "2o" } },
    { endereco: "Rua C, 161", valor_total: "703800", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "88.14", padrao_construtivo: "alto res", vaga: "1", andar: "4o" } },
    { endereco: "Rua C, 161", valor_total: "710736", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "88.14", padrao_construtivo: "alto res", vaga: "1", andar: "4o" } },
    { endereco: "Rua C, 161", valor_total: "728222.8", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "88.14", padrao_construtivo: "alto res", vaga: "1", andar: "5o" } },
    { endereco: "Rua D, 475", valor_total: "710200", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "84.93", padrao_construtivo: "alto res", vaga: "1", andar: "2o" } },
    { endereco: "Rua F, 550", valor_total: "480000", fon: "0.9", incluir: false, campos: { localizacao: "1", area_construida: "97.94", padrao_construtivo: "alto res", vaga: "1", andar: "3o" } },
    { endereco: "Rua F, 550", valor_total: "799000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_construida: "91.44", padrao_construtivo: "alto res", vaga: "1", andar: "4o" } },
    { endereco: "Rua C, 161", valor_total: "771120", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "88.14", padrao_construtivo: "normal res", vaga: "1", andar: "5o" } },
    { endereco: "Rua F, 550", valor_total: "848000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_construida: "91.44", padrao_construtivo: "alto res", vaga: "1", andar: "5o" } },
    { endereco: "Rua F, 550", valor_total: "850000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_construida: "91.44", padrao_construtivo: "alto res", vaga: "2", andar: "4o" } },
  ],
};

const state = {
  assetType: "apartamento",
  referenceMode: "Construida",
  activeFactors: [...DEFAULT_FACTORS.apartamento],
  selectedDictionary: "padrao_construtivo",
  dictionaries: JSON.parse(JSON.stringify(BASE_DICTIONARIES)),
  rows: [],
  dictionariesOpen: false,
  lastCalculation: null,
  customFactors: [],
};

const el = {
  assetType: document.querySelector("#assetType"),
  referenceMode: document.querySelector("#referenceMode"),
  factorHint: document.querySelector("#factorHint"),
  factorList: document.querySelector("#factorList"),
  loadExampleButton: document.querySelector("#loadExampleButton"),
  toggleDictionariesButton: document.querySelector("#toggleDictionariesButton"),
  dictionaryPanel: document.querySelector("#dictionaryPanel"),
  editorHead: document.querySelector("#editorHead"),
  editorBody: document.querySelector("#editorBody"),
  dictionarySelect: document.querySelector("#dictionarySelect"),
  dictionaryBody: document.querySelector("#dictionaryBody"),
  customFactorLabel: document.querySelector("#customFactorLabel"),
  customFactorAppliesTo: document.querySelector("#customFactorAppliesTo"),
  customFactorOptions: document.querySelector("#customFactorOptions"),
  saveCustomFactorButton: document.querySelector("#saveCustomFactorButton"),
  summaryGrid: document.querySelector("#summaryGrid"),
  technicalSummaryBody: document.querySelector("#technicalSummaryBody"),
  resultBody: document.querySelector("#resultBody"),
  addRowButton: document.querySelector("#addRowButton"),
  calculateButton: document.querySelector("#calculateButton"),
  exportReportButton: document.querySelector("#exportReportButton"),
  errorBox: document.querySelector("#errorBox"),
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function formatNumber(value, digits = 2) {
  if (value === null || value === undefined || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function toNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function setError(message = "") {
  el.errorBox.textContent = message;
  el.errorBox.classList.toggle("hidden", !message);
}

function makeRow(index) {
  return {
    id: String(index + 1),
    papel: index === 0 ? "avaliando" : "amostra",
    endereco: index === 0 ? "Imovel avaliando" : "",
    valor_total: "",
    fon: "1",
    incluir: index !== 0,
    campos: {},
  };
}

function resetRows() {
  state.rows = Array.from({ length: 5 }, (_, index) => makeRow(index));
}

function loadApartmentExample() {
  state.assetType = APARTMENT_EXAMPLE.assetType;
  state.referenceMode = APARTMENT_EXAMPLE.referenceMode;
  state.activeFactors = [...APARTMENT_EXAMPLE.activeFactors];
  state.rows = APARTMENT_EXAMPLE.rows.map((source, index) => ({
    id: String(index + 1),
    papel: index === 0 ? "avaliando" : "amostra",
    endereco: source.endereco,
    valor_total: source.valor_total,
    fon: source.fon,
    incluir: index === 0 ? false : source.incluir,
    campos: { ...source.campos },
  }));
  resetResults();
  renderAll();
  bindFactorEvents();
  bindDictionaryInputEvents();
  bindEditorEvents();
}

function getEssentialFactor() {
  return state.referenceMode === "Terreno" ? "area_territorial" : "area_construida";
}

function getSuggestedReferenceMode(assetType) {
  return assetType === "terreno" || assetType === "gleba" ? "Terreno" : "Construida";
}

function getAvailableFactors() {
  return [...FACTORS, ...state.customFactors].filter((factor) =>
    factor.appliesTo.includes(state.assetType),
  );
}

function getVisibleFactors() {
  const factorMap = new Map(getAvailableFactors().map((factor) => [factor.id, factor]));
  const ids = Array.from(new Set([...state.activeFactors, getEssentialFactor()]));
  return ids.map((id) => factorMap.get(id)).filter(Boolean);
}

function resetResults() {
  state.lastCalculation = null;
  el.summaryGrid.className = "summary-grid empty-block";
  el.summaryGrid.textContent = "Preencha a grade e clique em calcular.";
  el.technicalSummaryBody.innerHTML = `
    <tr>
      <td colspan="2" class="empty-cell">Nenhum calculo executado ainda.</td>
    </tr>
  `;
  el.resultBody.innerHTML = `
    <tr>
      <td colspan="9" class="empty-cell">Nenhum calculo executado ainda.</td>
    </tr>
  `;
}

function renderSelectors() {
  el.assetType.innerHTML = `
    <option value="apartamento">Apartamento</option>
    <option value="terreno">Terreno</option>
    <option value="gleba">Gleba</option>
    <option value="sala">Sala</option>
    <option value="casa">Casa</option>
    <option value="loja">Loja</option>
    <option value="predio">Predio</option>
  `;
  el.assetType.value = state.assetType;

  el.referenceMode.innerHTML = `
    <option value="Construida">Area construida</option>
    <option value="Terreno">Area territorial</option>
  `;
  el.referenceMode.value = state.referenceMode;
}

function renderFactors() {
  const essential = getEssentialFactor();
  const available = getAvailableFactors();
  el.factorHint.textContent = `${state.rows.length} linhas configuradas`;
  el.factorList.innerHTML = available
    .map((factor) => {
      const checked = state.activeFactors.includes(factor.id) || factor.id === essential;
      const disabled = factor.id === essential ? "disabled" : "";
      return `
        <label class="factor-card ${checked ? "active" : ""}">
          <input type="checkbox" data-factor="${factor.id}" ${checked ? "checked" : ""} ${disabled} />
          <strong>${factor.label}</strong>
          <span>${factor.kind === "option" ? "dicionario" : "numerico"}</span>
        </label>
      `;
    })
    .join("");
}

function renderEditor() {
  const visibleFactors = getVisibleFactors();
  el.editorHead.innerHTML = `
    <tr>
      <th>Papel</th>
      <th>Endereco</th>
      <th>Valor total</th>
      <th>fon</th>
      <th>Incluir</th>
      ${visibleFactors.map((factor) => `<th>${factor.label}</th>`).join("")}
      <th></th>
    </tr>
  `;

  el.editorBody.innerHTML = state.rows
    .map((row, index) => {
      const roleBadge =
        index === 0
          ? '<span class="fixed-role">Avaliando</span>'
          : '<span class="fixed-role">Amostra</span>';
      const rowClass = index > 0 && !row.incluir ? "row-off" : "";
      const cells = visibleFactors
        .map((factor) => {
          const current = row.campos[factor.id] ?? "";
          if (factor.kind === "option") {
            const options = Object.keys(state.dictionaries[factor.id] || {});
            return `
              <td>
                <select data-row-id="${row.id}" data-factor-id="${factor.id}">
                  <option value="">Selecione</option>
                  ${options
                    .map(
                      (option) =>
                        `<option value="${option}" ${option === current ? "selected" : ""}>${option}</option>`,
                    )
                    .join("")}
                </select>
              </td>
            `;
          }
          return `
            <td>
              <input type="number" step="0.01" data-row-id="${row.id}" data-factor-id="${factor.id}" value="${current}" />
            </td>
          `;
        })
        .join("");

      return `
        <tr class="${rowClass}">
          <td>${roleBadge}</td>
          <td><input data-row-id="${row.id}" data-basic="endereco" value="${row.endereco}" /></td>
          <td><input type="number" step="0.01" data-row-id="${row.id}" data-basic="valor_total" value="${row.valor_total}" ${index === 0 ? "disabled" : ""} /></td>
          <td><input type="number" step="0.01" data-row-id="${row.id}" data-basic="fon" value="${row.fon}" /></td>
          <td>
            <label class="checkbox-cell">
              <input type="checkbox" data-row-id="${row.id}" data-basic="incluir" ${row.incluir ? "checked" : ""} ${index === 0 ? "disabled" : ""} />
              <span>${index === 0 ? "Nao" : "Sim"}</span>
            </label>
          </td>
          ${cells}
          <td>${index === 0 ? "" : `<div class="row-actions"><button class="secondary" type="button" data-remove-id="${row.id}">Excluir</button></div>`}</td>
        </tr>
      `;
    })
    .join("");
}

function renderDictionaries() {
  const names = Object.keys(state.dictionaries);
  if (!names.includes(state.selectedDictionary)) {
    state.selectedDictionary = names[0];
  }

  el.dictionarySelect.innerHTML = names
    .map(
      (name) => `<option value="${name}" ${name === state.selectedDictionary ? "selected" : ""}>${name}</option>`,
    )
    .join("");

  el.dictionaryBody.innerHTML = Object.entries(state.dictionaries[state.selectedDictionary])
    .map(
      ([label, coefficient]) => `
        <tr class="dictionary-row">
          <td>${label}</td>
          <td><input type="number" step="0.001" data-dictionary="${state.selectedDictionary}" data-option="${label}" value="${coefficient}" /></td>
        </tr>
      `,
    )
    .join("");
}

function renderSummary(summary) {
  el.summaryGrid.className = "summary-grid";
  el.summaryGrid.innerHTML = `
    <article class="summary-card"><span>Media saneada</span><strong>R$ ${formatNumber(summary.mediaSaneada)}</strong></article>
    <article class="summary-card"><span>Valor estimado total</span><strong>R$ ${formatNumber(summary.valorEstimado)}</strong></article>
    <article class="summary-card"><span>Campo de arbitrio</span><strong>${formatNumber(summary.arbitrioInferior)} a ${formatNumber(summary.arbitrioSuperior)}</strong></article>
    <article class="summary-card"><span>IC 80%</span><strong>${formatNumber(summary.icInferior)} a ${formatNumber(summary.icSuperior)}</strong></article>
    <article class="summary-card"><span>Amostras aceitas</span><strong>${summary.amostras}</strong></article>
  `;
  el.technicalSummaryBody.innerHTML = `
    <tr><td>Media inicial</td><td>${formatNumber(summary.mediaInicial)}</td></tr>
    <tr><td>Desvio padrao inicial</td><td>${formatNumber(summary.desvioInicial)}</td></tr>
    <tr><td>Media saneada</td><td>${formatNumber(summary.mediaSaneada)}</td></tr>
    <tr><td>Desvio padrao saneado</td><td>${formatNumber(summary.desvioSaneado)}</td></tr>
    <tr><td>Graus de liberdade</td><td>${summary.grausLiberdade}</td></tr>
    <tr><td>Chauvenet critico</td><td>${formatNumber(summary.chauvenetCritico, 3)}</td></tr>
    <tr><td>t critico 80%</td><td>${formatNumber(summary.tCritico, 3)}</td></tr>
    <tr><td>Margem do IC</td><td>${formatNumber(summary.margemIC)}</td></tr>
    <tr><td>Amplitude do IC</td><td>${formatNumber(summary.amplitudeIC)}</td></tr>
    <tr><td>Area adotada</td><td>${formatNumber(summary.areaAvaliando)}</td></tr>
  `;
}

function renderResults(lines) {
  el.resultBody.innerHTML = lines
    .map(
      (line) => `
        <tr>
          <td>${line.id}</td>
          <td>${line.papel}</td>
          <td>${formatNumber(line.valorUnitario)}</td>
          <td>${formatNumber(line.valorUnitarioFon)}</td>
          <td>${formatNumber(line.fatorFinal, 4)}</td>
          <td>${formatNumber(line.valorHomogeneizado)}</td>
          <td>${formatNumber(line.zScore, 4)}</td>
          <td><span class="status status-${line.status.toLowerCase()}">${line.status}</span></td>
          <td><div class="coef-list">${Object.entries(line.coeficientes)
            .map(([key, value]) => `<span>${key}: ${formatNumber(value, 4)}</span>`)
            .join("")}</div></td>
        </tr>
      `,
    )
    .join("");
}

function exportReport() {
  if (!state.lastCalculation) {
    setError("Execute um calculo antes de exportar o relatorio.");
    return;
  }

  const visibleFactors = getVisibleFactors();
  const step2Headers = ["Papel", "Endereco", "Valor total", "fon", "Incluir", ...visibleFactors.map((factor) => factor.label)];
  const step2Rows = state.rows.map((row, index) => [
    index === 0 ? "Avaliando" : "Amostra",
    row.endereco || "",
    row.valor_total || "",
    row.fon || "",
    index === 0 ? "Nao" : row.incluir ? "Sim" : "Nao",
    ...visibleFactors.map((factor) => row.campos[factor.id] ?? ""),
  ]);

  const step3Headers = ["Linha", "Papel", "VU", "VU * fon", "Fator final", "VU homogenizado", "Z-score", "Status"];
  const step3Rows = state.lastCalculation.lines.map((line) => [
    line.id,
    line.papel,
    formatNumber(line.valorUnitario),
    formatNumber(line.valorUnitarioFon),
    formatNumber(line.fatorFinal, 4),
    formatNumber(line.valorHomogeneizado),
    formatNumber(line.zScore, 4),
    line.status,
  ]);

  const summary = state.lastCalculation.summary;
  const step4Rows = [
    ["Media saneada", `R$ ${formatNumber(summary.mediaSaneada)}`],
    ["Valor estimado total", `R$ ${formatNumber(summary.valorEstimado)}`],
    ["Campo de arbitrio", `${formatNumber(summary.arbitrioInferior)} a ${formatNumber(summary.arbitrioSuperior)}`],
    ["IC 80%", `${formatNumber(summary.icInferior)} a ${formatNumber(summary.icSuperior)}`],
    ["Amostras aceitas", summary.amostras],
  ];

  function table(headers, rows) {
    return `
      <table>
        <thead>
          <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    `;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Relatorio de Avaliacao por Fatores</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 24px; color: #1f2933; }
          h1, h2 { margin-bottom: 8px; }
          p { margin: 4px 0 14px; }
          section { margin-bottom: 28px; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          th, td { border: 1px solid #cfd8e3; padding: 8px 10px; text-align: left; vertical-align: top; }
          th { background: #f3f7fb; }
        </style>
      </head>
      <body>
        <h1>Relatorio de Avaliacao por Fatores</h1>
        <p>Tipologia: ${state.assetType}</p>
        <p>Area de calculo: ${state.referenceMode === "Terreno" ? "Area territorial" : "Area construida"}</p>
        <p>Fatores ativos: ${visibleFactors.map((factor) => factor.label).join(", ")}</p>
        <section>
          <h2>Passo 2 - Linhas da amostra</h2>
          ${table(step2Headers, step2Rows)}
        </section>
        <section>
          <h2>Passo 3 - Resultado por linha</h2>
          ${table(step3Headers, step3Rows)}
        </section>
        <section>
          <h2>Passo 4 - Resumo consolidado</h2>
          ${table(["Indicador", "Valor"], step4Rows)}
        </section>
      </body>
    </html>
  `;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "relatorio_avaliacao_fatores.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function depthCoefficient(area, testada, profEquivalente) {
  let prof = profEquivalente;
  if (prof == null && area != null && testada && testada !== 0) {
    prof = area / testada;
  }
  if (prof == null) return 1;
  if (area && area > 5000 && prof > 90) {
    return testada ? 4.8 * testada * testada * area ** -0.4 : 1;
  }
  if (prof < 20) return Number(((prof / 20) ** 0.5).toFixed(3));
  if (prof < 33) return 1;
  if (prof < 90) return Number(((33 / prof) ** 0.5).toFixed(3));
  return 0.6;
}

function areaFactor(sample, target) {
  if (!sample || !target) return 1;
  const ratio = sample / target;
  const exponent = Math.abs(sample - target) <= target * 0.3 ? 0.25 : 0.125;
  return ratio ** exponent;
}

function buildCoefficient(factorId, row, evaluating) {
  const sampleValue = row.campos[factorId];
  const targetValue = evaluating.campos[factorId];

  if (factorId === "localizacao") {
    const sample = toNumber(sampleValue);
    const target = toNumber(targetValue);
    return sample && target ? target / sample : 1;
  }

  if (factorId === "area_construida" || factorId === "area_territorial") {
    return areaFactor(toNumber(sampleValue), toNumber(targetValue));
  }

  if (factorId === "prof_equivalente") {
    const sampleCoef = depthCoefficient(
      toNumber(row.campos.area_territorial),
      toNumber(row.campos.testada),
      toNumber(sampleValue),
    );
    const targetCoef = depthCoefficient(
      toNumber(evaluating.campos.area_territorial),
      toNumber(evaluating.campos.testada),
      toNumber(targetValue),
    );
    return sampleCoef ? targetCoef / sampleCoef : 1;
  }

  if (factorId === "vaga") {
    const sample = toNumber(sampleValue);
    const target = toNumber(targetValue);
    if (sample == null || target == null) return 1;
    return 1 - 0.067 * (sample - target);
  }

  if (state.dictionaries[factorId]) {
    const sampleCoef = state.dictionaries[factorId][sampleValue] ?? 1;
    const targetCoef = state.dictionaries[factorId][targetValue] ?? 1;
    return sampleCoef ? targetCoef / sampleCoef : 1;
  }

  return 1;
}

function calculate() {
  try {
    setError("");
    const visibleFactors = getVisibleFactors();
    const factorIds = visibleFactors.map((factor) => factor.id);
    const evaluating = state.rows[0];
    const essentialFactor = getEssentialFactor();
    const areaAvaliando = toNumber(evaluating.campos[essentialFactor]);

    if (!areaAvaliando || areaAvaliando <= 0) {
      setError("O avaliando precisa informar a area de referencia.");
      return;
    }

    const lines = state.rows.map((row, index) => {
      const area = toNumber(row.campos[essentialFactor]);
      const valorTotal = toNumber(row.valor_total);
      const fon = toNumber(row.fon) ?? 1;
      const coeficientes = {};

      factorIds.forEach((factorId) => {
        coeficientes[factorId] = buildCoefficient(factorId, row, evaluating);
      });

      const fatorFinal = 1 + Object.values(coeficientes).reduce((sum, value) => sum + (value - 1), 0);
      const valorUnitario = valorTotal && area ? valorTotal / area : null;
      const valorUnitarioFon = valorUnitario == null ? null : valorUnitario * fon;
      const valorHomogeneizado =
        valorUnitarioFon == null ? null : valorUnitarioFon * fatorFinal;

      return {
        id: row.id,
        papel: index === 0 ? "AVALIANDO" : "AMOSTRA",
        coeficientes,
        fatorFinal,
        valorUnitario,
        valorUnitarioFon,
        valorHomogeneizado,
        participa: index > 0 && row.incluir,
        zScore: null,
        status: index === 0 ? "AVALIANDO" : "PENDENTE",
      };
    });

    const sampleValues = lines
      .filter((line) => line.participa && line.valorHomogeneizado != null)
      .map((line) => line.valorHomogeneizado);

    if (sampleValues.length === 0) {
      setError("Inclua ao menos uma amostra com valor total e area preenchidos.");
      return;
    }

    const mediaInicial =
      sampleValues.reduce((sum, value) => sum + value, 0) / sampleValues.length;
    const desvioInicial =
      sampleValues.length > 1
        ? Math.sqrt(
            sampleValues.reduce((sum, value) => sum + (value - mediaInicial) ** 2, 0) /
              (sampleValues.length - 1),
          )
        : 0;
    const grausChauvenet = Math.max(sampleValues.length - 1, 2);
    const chauvenetCritico = CHAUVENET[grausChauvenet] ?? 2.31;

    const aceitos = [];
    lines.forEach((line) => {
      if (!line.participa || line.valorHomogeneizado == null) return;
      line.zScore = desvioInicial
        ? Math.abs((line.valorHomogeneizado - mediaInicial) / desvioInicial)
        : 0;
      line.status = line.zScore <= chauvenetCritico ? "ACEITO" : "REJEITADO";
      if (line.status === "ACEITO") {
        aceitos.push(line.valorHomogeneizado);
      }
    });

    if (aceitos.length === 0) {
      setError("Todas as amostras foram rejeitadas.");
      return;
    }

    const mediaSaneada = aceitos.reduce((sum, value) => sum + value, 0) / aceitos.length;
    const desvioSaneado =
      aceitos.length > 1
        ? Math.sqrt(
            aceitos.reduce((sum, value) => sum + (value - mediaSaneada) ** 2, 0) /
              (aceitos.length - 1),
          )
        : 0;
    const quantidadeUsada = aceitos.length;
    const grausLiberdade = Math.max(quantidadeUsada - 1, 1);
    const tCritico = T_STUDENT_80[grausLiberdade] ?? 1.319;
    const denominadorIC = Math.sqrt(Math.max(quantidadeUsada - 1, 1));
    const margem = tCritico * (desvioSaneado / denominadorIC);
    const icInferior = mediaSaneada - margem;
    const icSuperior = mediaSaneada + margem;
    const valorEstimado = mediaSaneada * areaAvaliando;

    const summary = {
      mediaInicial,
      desvioInicial,
      mediaSaneada,
      desvioSaneado,
      valorEstimado,
      arbitrioInferior: mediaSaneada * 0.85,
      arbitrioSuperior: mediaSaneada * 1.15,
      icInferior,
      icSuperior,
      areaAvaliando,
      grausLiberdade,
      chauvenetCritico,
      tCritico,
      margemIC: margem,
      amplitudeIC: icSuperior - icInferior,
      amostras: `${aceitos.length} de ${sampleValues.length}`,
    };
    renderSummary(summary);
    renderResults(lines);
    state.lastCalculation = {
      lines: clone(lines),
      summary,
    };
  } catch (error) {
    console.error(error);
    setError(`Falha no calculo: ${error instanceof Error ? error.message : error}`);
  }
}

function bindTopControls() {
  el.assetType.addEventListener("change", (event) => {
    state.assetType = event.target.value;
    state.referenceMode = getSuggestedReferenceMode(state.assetType);
    state.activeFactors = [...DEFAULT_FACTORS[state.assetType]];
    resetRows();
    resetResults();
    renderAll();
  });

  el.referenceMode.addEventListener("change", (event) => {
    state.referenceMode = event.target.value;
  });

  el.addRowButton.addEventListener("click", () => {
    state.rows.push(makeRow(state.rows.length));
    renderEditor();
    bindEditorEvents();
  });

  el.loadExampleButton.addEventListener("click", loadApartmentExample);

  el.toggleDictionariesButton.addEventListener("click", () => {
    state.dictionariesOpen = !state.dictionariesOpen;
    el.dictionaryPanel.classList.toggle("hidden", !state.dictionariesOpen);
    el.toggleDictionariesButton.textContent = state.dictionariesOpen
      ? "Ocultar coeficientes"
      : "Ajustar coeficientes";
  });

  el.calculateButton.addEventListener("click", calculate);
  el.exportReportButton.addEventListener("click", exportReport);
  el.saveCustomFactorButton.addEventListener("click", saveCustomFactor);
}

function bindFactorEvents() {
  el.factorList.querySelectorAll("[data-factor]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const factorId = event.target.dataset.factor;
      if (!factorId || factorId === getEssentialFactor()) return;
      if (event.target.checked) {
        if (!state.activeFactors.includes(factorId)) {
          state.activeFactors.push(factorId);
        }
      } else {
        state.activeFactors = state.activeFactors.filter((id) => id !== factorId);
      }
      renderEditor();
      bindEditorEvents();
      renderFactors();
      bindFactorEvents();
    });
  });
}

function bindDictionaryEvents() {
  el.dictionarySelect.addEventListener("change", (event) => {
    state.selectedDictionary = event.target.value;
    renderDictionaries();
    bindDictionaryInputEvents();
  });
  bindDictionaryInputEvents();
}

function bindDictionaryInputEvents() {
  el.dictionaryBody.querySelectorAll("[data-dictionary]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const dictionaryName = event.target.dataset.dictionary;
      const optionName = event.target.dataset.option;
      const value = toNumber(event.target.value);
      if (!dictionaryName || !optionName || value == null) return;
      state.dictionaries[dictionaryName][optionName] = value;
      renderEditor();
      bindEditorEvents();
    });
  });
}

function bindEditorEvents() {
  el.editorBody.querySelectorAll("[data-basic]").forEach((input) => {
    const eventName = input.type === "checkbox" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      const rowId = event.target.dataset.rowId;
      const basicKey = event.target.dataset.basic;
      const row = state.rows.find((item) => item.id === rowId);
      if (!row) return;
      if (input.type === "checkbox") {
        row[basicKey] = event.target.checked;
      } else {
        row[basicKey] = event.target.value;
      }
      renderEditor();
      bindEditorEvents();
    });
  });

  el.editorBody.querySelectorAll("[data-factor-id]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      const rowId = event.target.dataset.rowId;
      const factorId = event.target.dataset.factorId;
      const row = state.rows.find((item) => item.id === rowId);
      if (!row) return;
      row.campos[factorId] = event.target.value;
    });
  });

  el.editorBody.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rowId = event.target.dataset.removeId;
      if (state.rows.length <= 2) return;
      state.rows = state.rows.filter((row) => row.id !== rowId);
      state.rows = state.rows.map((row, index) => ({
        ...row,
        id: String(index + 1),
        papel: index === 0 ? "avaliando" : "amostra",
        incluir: index === 0 ? false : row.incluir,
      }));
      renderEditor();
      bindEditorEvents();
    });
  });
}

function renderAll() {
  renderSelectors();
  renderFactors();
  renderEditor();
  renderDictionaries();
  el.dictionaryPanel.classList.toggle("hidden", !state.dictionariesOpen);
  el.toggleDictionariesButton.textContent = state.dictionariesOpen
    ? "Ocultar coeficientes"
    : "Ajustar coeficientes";
}

function saveCustomFactor() {
  const label = (el.customFactorLabel.value || "").trim();
  const appliesToMode = el.customFactorAppliesTo.value;
  const optionsText = (el.customFactorOptions.value || "").trim();

  if (!label) {
    setError("Informe um nome para o fator personalizado.");
    return;
  }

  const id = label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  if (!id) {
    setError("Nao foi possivel gerar um identificador para o fator.");
    return;
  }

  if ([...FACTORS, ...state.customFactors].some((factor) => factor.id === id)) {
    setError("Ja existe um fator com esse nome.");
    return;
  }

  const appliesTo =
    appliesToMode === "all"
      ? ["terreno", "gleba", "apartamento", "sala", "casa", "loja", "predio"]
      : [state.assetType];

  const lines = optionsText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) {
    setError("Informe as caracteristicas e coeficientes do fator.");
    return;
  }

  const dictionary = {};
  for (const line of lines) {
    const [name, coefText] = line.split("=");
    const coefficient = toNumber(coefText);
    if (!name || coefficient == null) {
      setError("Use o formato Caracteristica=1.05 em cada linha.");
      return;
    }
    dictionary[name.trim()] = coefficient;
  }

  const factor = { id, label, kind: "option", appliesTo };
  state.dictionaries[id] = dictionary;

  state.customFactors.push(factor);
  if (!state.activeFactors.includes(id)) {
    state.activeFactors.push(id);
  }

  el.customFactorLabel.value = "";
  el.customFactorOptions.value = "";
  setError("");
  renderAll();
  bindFactorEvents();
  bindDictionaryEvents();
  bindEditorEvents();
}

function bootstrap() {
  try {
    state.referenceMode = getSuggestedReferenceMode(state.assetType);
    resetRows();
    resetResults();
    renderAll();
    bindTopControls();
    bindFactorEvents();
    bindDictionaryEvents();
    bindEditorEvents();
  } catch (error) {
    console.error(error);
    setError(`Falha ao iniciar o app: ${error instanceof Error ? error.message : error}`);
  }
}

bootstrap();
