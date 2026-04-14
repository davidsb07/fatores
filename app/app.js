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
  conservacao_simplificada: {
    "Bom (aparencia de novo)": 1.0,
    "Bom (aparencia de usado)": 0.8421,
    "Regular (reparos simples)": 0.6842,
    "Regular (reparos importantes)": 0.4211,
    Ruim: 0.2105,
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
  padrao_simplificado: {
    "Minimo": 1.0,
    "Baixo": 1.15,
    "Normal (c/ aspectos de baixo)": 1.23,
    "Normal (forte predominancia)": 1.3,
    "Normal (c/ aspectos de alto)": 1.38,
    "Alto (por predominancia)": 1.48,
    "Alto (superior, luxo)": 1.6,
  },
  cub_simplificado: {
    "Minimo": 1.0,
    "Baixo": 1.2789,
    "Normal (c/ aspectos de baixo)": 1.3481,
    "Normal (forte predominancia)": 1.5313,
    "Normal (c/ aspectos de alto)": 1.7972,
    "Alto (por predominancia)": 1.9968,
    "Alto (superior, luxo)": 2.4383,
  },
  // Razoes pela media de 24 meses do CUB/RS, de abril/2024 a marco/2026, separadas por uso.
  cub_res: {
    "PIS - Projeto de interesse social": 1.0,
    "R 8-B - Residencia multifamiliar padrao baixo": 1.2466,
    "PP 4-B - Predio popular padrao baixo": 1.3112,
    "R 1-B - Residencia unifamiliar padrao baixo": 1.385,
    "RP1Q - Residencia popular": 1.418,
    "R 16-N - Residencia multifamiliar padrao normal": 1.5146,
    "R 8-N - Residencia multifamiliar padrao normal": 1.548,
    "PP 4-N - Predio popular padrao normal": 1.7774,
    "R 1-N - Residencia unifamiliar padrao normal": 1.817,
    "R 8-A - Residencia multifamiliar padrao alto": 1.9759,
    "R 16-A - Residencia multifamiliar padrao alto": 2.0177,
    "R 1-A - Residencia unifamiliar padrao alto": 2.4383,
  },
  cub_com: {
    "CSL 8-N - Comercial salas e lojas padrao normal": 1.0,
    "CSL 8-A - Comercial salas e lojas padrao alto": 1.1664,
    "CAL 8-N - Comercial andar livre padrao normal": 1.2943,
    "CSL 16-N - Comercial salas e lojas padrao normal": 1.3468,
    "CAL 8-A - Comercial andar livre padrao alto": 1.4855,
    "CSL 16-A - Comercial salas e lojas padrao alto": 1.5691,
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
  fon: {
    Oferta: 0.9,
    Transacao: 1.0,
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
  { id: "localizacao", label: "Localizacao", kind: "number", appliesTo: ["terreno", "gleba", "apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "area_construida", label: "Area construida", kind: "number", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "area_territorial", label: "Area territorial", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "testada", label: "Testada", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "prof_equivalente", label: "Prof. equivalente", kind: "number", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "topografia", label: "Topografia", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "relevo", label: "Relevo", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "superficie", label: "Superficie", kind: "option", appliesTo: ["terreno", "gleba", "casa", "predio", "galpao"] },
  { id: "aproveitamento", label: "Aproveitamento", kind: "option", appliesTo: ["terreno", "gleba", "predio", "galpao"] },
  { id: "acessibilidade", label: "Acessibilidade", kind: "option", appliesTo: ["terreno", "gleba", "casa", "loja", "predio", "galpao"] },
  { id: "idade_conservacao", label: "Idade e conservacao", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "conservacao_simplificada", label: "Conservacao simplificada", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "padrao_construtivo", label: "Padrao construtivo", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "padrao_simplificado", label: "Padrao simplificado", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "cub_simplificado", label: "CUB simplificado", kind: "option", appliesTo: ["apartamento", "sala", "casa", "loja", "predio", "galpao"] },
  { id: "cub_res", label: "CUB - res", kind: "option", appliesTo: ["apartamento", "casa", "predio"] },
  { id: "cub_com", label: "CUB - com", kind: "option", appliesTo: ["sala", "loja", "predio"] },
  { id: "vaga", label: "Vagas", kind: "number", appliesTo: ["apartamento", "sala", "casa", "loja"] },
  { id: "andar", label: "Andar", kind: "option", appliesTo: ["apartamento", "sala", "loja"] },
];

const DEFAULT_FACTORS = {
  terreno: ["localizacao", "area_territorial", "topografia", "relevo", "superficie"],
  gleba: ["localizacao", "area_territorial", "topografia", "relevo", "superficie"],
  apartamento: ["localizacao", "area_construida", "padrao_simplificado", "vaga", "andar"],
  sala: ["localizacao", "area_construida", "padrao_simplificado", "vaga", "andar"],
  casa: ["localizacao", "area_construida", "area_territorial", "padrao_simplificado", "conservacao_simplificada"],
  loja: ["localizacao", "area_construida", "padrao_simplificado", "vaga", "acessibilidade"],
  predio: ["localizacao", "area_construida", "area_territorial", "padrao_simplificado", "aproveitamento"],
  galpao: ["localizacao", "area_construida", "area_territorial", "padrao_simplificado", "conservacao_simplificada"],
};

const APARTMENT_CAROL_DEMO = {
  assetType: "apartamento",
  referenceMode: "Construida",
  activeFactors: ["localizacao", "area_construida", "padrao_construtivo", "andar"],
  rows: [
    { endereco: "Imovel avaliando", valor_total: "", fon: "1", incluir: false, campos: { localizacao: "1.1", area_construida: "150", padrao_construtivo: "normal res", andar: "4o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "1720000", fon: "0.9", incluir: true, campos: { localizacao: "1.3", area_construida: "209.07", padrao_construtivo: "alto res", andar: "1o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "1550000", fon: "0.9", incluir: true, campos: { localizacao: "1.2", area_construida: "195.01", padrao_construtivo: "alto res", andar: "4o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "620000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "67.66", padrao_construtivo: "alto res", andar: "2o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "672500", fon: "1", incluir: true, campos: { localizacao: "1.1", area_construida: "99.83", padrao_construtivo: "alto res", andar: "4o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "830000", fon: "0.9", incluir: true, campos: { localizacao: "1.2", area_construida: "99.83", padrao_construtivo: "alto res", andar: "1o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "720000", fon: "0.9", incluir: true, campos: { localizacao: "1.2", area_construida: "75", padrao_construtivo: "alto res", andar: "1o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "790000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "106.725", padrao_construtivo: "normal res", andar: "1o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "780000", fon: "1", incluir: true, campos: { localizacao: "1.2", area_construida: "127.25", padrao_construtivo: "alto res", andar: "5o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "890000", fon: "0.9", incluir: false, campos: { localizacao: "1.1", area_construida: "97", padrao_construtivo: "normal res", andar: "2o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "990000", fon: "1", incluir: true, campos: { localizacao: "1.2", area_construida: "147", padrao_construtivo: "alto res", andar: "7o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "1490000", fon: "0.9", incluir: true, campos: { localizacao: "1.3", area_construida: "226", padrao_construtivo: "alto res", andar: "1o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "740000", fon: "1", incluir: true, campos: { localizacao: "1.1", area_construida: "120.04", padrao_construtivo: "alto res", andar: "2o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "1300000", fon: "0.9", incluir: true, campos: { localizacao: "1.2", area_construida: "142.7", padrao_construtivo: "alto res", andar: "2o" } },
    { endereco: "Rua Vinte Quatro De Outubro", valor_total: "850000", fon: "0.9", incluir: true, campos: { localizacao: "1.1", area_construida: "168.37", padrao_construtivo: "normal res", andar: "3o" } },
  ],
};

const TERRAIN_CAROL_DEMO = {
  assetType: "terreno",
  referenceMode: "Terreno",
  activeFactors: ["localizacao", "area_territorial", "testada", "prof_equivalente", "topografia"],
  rows: [
    { endereco: "Imovel avaliando", valor_total: "", fon: "1", incluir: false, campos: { localizacao: "1", area_territorial: "500", testada: "10", prof_equivalente: "50", topografia: "plano <5%" } },
    { endereco: "AV UM, 900", valor_total: "750000", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "456", testada: "12", prof_equivalente: "38", topografia: "plano <5%" } },
    { endereco: "R DOIS, 107", valor_total: "540000", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "456", testada: "12", prof_equivalente: "38", topografia: "plano <5%" } },
    { endereco: "R DOIS, 110", valor_total: "850000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "456", testada: "12", prof_equivalente: "38", topografia: "plano <5%" } },
    { endereco: "R DOIS, 127", valor_total: "530000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "422", testada: "12", prof_equivalente: "35.17", topografia: "plano <5%" } },
    { endereco: "R DOIS, 255", valor_total: "745000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "705", testada: "16", prof_equivalente: "44.06", topografia: "plano <5%" } },
    { endereco: "R TRES, 80", valor_total: "630000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "432", testada: "18", prof_equivalente: "24", topografia: "plano <5%" } },
    { endereco: "R TRES, LD 92", valor_total: "630000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "420", testada: "18", prof_equivalente: "23.33", topografia: "plano <5%" } },
    { endereco: "R SETE, 570", valor_total: "520000", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "519", testada: "12", prof_equivalente: "43.25", topografia: "plano <5%" } },
    { endereco: "R QUATRO, 1100", valor_total: "914500", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "624.94", testada: "12", prof_equivalente: "52.08", topografia: "plano <5%" } },
    { endereco: "R QUATRO, 520", valor_total: "750000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "612.67", testada: "13.5", prof_equivalente: "45.38", topografia: "plano <5%" } },
    { endereco: "R QUATRO, 930", valor_total: "500000", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "426.32", testada: "8.5", prof_equivalente: "50.16", topografia: "plano <5%" } },
    { endereco: "R QUATRO, 950", valor_total: "730000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "426", testada: "8.5", prof_equivalente: "50.12", topografia: "plano <5%" } },
    { endereco: "R CINCO, 555", valor_total: "730000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "478", testada: "12", prof_equivalente: "39.83", topografia: "plano <5%" } },
    { endereco: "R SEIS, 315", valor_total: "705000", fon: "0.9", incluir: true, campos: { localizacao: "1", area_territorial: "565", testada: "12", prof_equivalente: "47.08", topografia: "plano <5%" } },
    { endereco: "R SEIS, 339", valor_total: "750000", fon: "1", incluir: true, campos: { localizacao: "1", area_territorial: "684", testada: "18", prof_equivalente: "38", topografia: "plano <5%" } },
  ],
};

const state = {
  workName: "",
  loadedModelName: "",
  adoptedValue: "",
  adoptedJustification: "",
  assetType: "apartamento",
  referenceMode: "Construida",
  activeFactors: [...DEFAULT_FACTORS.apartamento],
  selectedDictionary: "padrao_construtivo",
  dictionaries: JSON.parse(JSON.stringify(BASE_DICTIONARIES)),
  rows: [],
  dictionariesOpen: false,
  lastCalculation: null,
  customFactors: [],
  collapsedSteps: {},
  expandedTables: {
    editor: false,
    results: false,
  },
};

const el = {
  workName: document.querySelector("#workName"),
  adoptedValue: document.querySelector("#adoptedValue"),
  adoptedJustification: document.querySelector("#adoptedJustification"),
  assetType: document.querySelector("#assetType"),
  factorHint: document.querySelector("#factorHint"),
  factorList: document.querySelector("#factorList"),
  referenceConstruida: document.querySelector("#referenceConstruida"),
  referenceTerreno: document.querySelector("#referenceTerreno"),
  loadModelButton: document.querySelector("#loadModelButton"),
  loadModelInput: document.querySelector("#loadModelInput"),
  resetAppButton: document.querySelector("#resetAppButton"),
  loadedModelNotice: document.querySelector("#loadedModelNotice"),
  appNotice: document.querySelector("#appNotice"),
  exampleSelect: document.querySelector("#exampleSelect"),
  loadExampleButton: document.querySelector("#loadExampleButton"),
  toggleDictionariesButton: document.querySelector("#toggleDictionariesButton"),
  dictionaryStatus: document.querySelector("#dictionaryStatus"),
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
  technicalSummaryWrap: document.querySelector("#technicalSummaryWrap"),
  technicalSummaryBody: document.querySelector("#technicalSummaryBody"),
  resultBody: document.querySelector("#resultBody"),
  resultHint: document.querySelector("#resultHint"),
  editorTableWrap: document.querySelector("#editorTableWrap"),
  resultsTableWrap: document.querySelector("#resultsTableWrap"),
  toggleEditorTableButton: document.querySelector("#toggleEditorTableButton"),
  toggleResultsTableButton: document.querySelector("#toggleResultsTableButton"),
  recalculateButton: document.querySelector("#recalculateButton"),
  addRowButton: document.querySelector("#addRowButton"),
  calculateButton: document.querySelector("#calculateButton"),
  saveWorkButton: document.querySelector("#saveWorkButton"),
  previewReportButton: document.querySelector("#previewReportButton"),
  exportWordButton: document.querySelector("#exportWordButton"),
  exportReportButton: document.querySelector("#exportReportButton"),
  reportPreviewWrap: document.querySelector("#reportPreviewWrap"),
  reportPreviewContent: document.querySelector("#reportPreviewContent"),
  errorBox: document.querySelector("#errorBox"),
  processingOverlay: document.querySelector("#processingOverlay"),
  processingLabel: document.querySelector("#processingLabel"),
  sideDots: Array.from(document.querySelectorAll(".side-dot")),
  panelToggles: Array.from(document.querySelectorAll("[data-panel-toggle]")),
  stepPanels: Array.from(document.querySelectorAll("[data-step-panel]")),
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

function formatEditableDecimal(value, digits = 2) {
  const numericValue = toNumber(value);
  if (numericValue == null) return value ?? "";
  return numericValue.toFixed(digits);
}

function setError(message = "") {
  el.errorBox.textContent = message;
  el.errorBox.classList.toggle("hidden", !message);
}

let appNoticeTimer = null;

function setAppNotice(message = "") {
  el.appNotice.textContent = message;
  el.appNotice.classList.toggle("hidden", !message);
  if (appNoticeTimer) {
    window.clearTimeout(appNoticeTimer);
    appNoticeTimer = null;
  }
  if (message) {
    appNoticeTimer = window.setTimeout(() => {
      el.appNotice.textContent = "";
      el.appNotice.classList.add("hidden");
    }, 3200);
  }
}

function inferFonType(row = {}) {
  if (row.fonTipo && state.dictionaries.fon?.[row.fonTipo] != null) {
    return row.fonTipo;
  }
  const fonValue = toNumber(row.fon);
  if (fonValue === state.dictionaries.fon?.Oferta) return "Oferta";
  return "Transacao";
}

function syncFonValue(row) {
  const fonType = inferFonType(row);
  row.fonTipo = fonType;
  row.fon = String(state.dictionaries.fon?.[fonType] ?? 1);
}

function showProcessing(message = "Processando...") {
  el.processingLabel.textContent = message;
  el.processingOverlay.classList.remove("hidden");
}

function hideProcessing() {
  el.processingOverlay.classList.add("hidden");
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function withProcessing(message, action, minDuration = 450) {
  const startedAt = Date.now();
  showProcessing(message);
  await new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
  try {
    return await action();
  } finally {
    const elapsed = Date.now() - startedAt;
    if (elapsed < minDuration) {
      await wait(minDuration - elapsed);
    }
    hideProcessing();
  }
}

function getDictionaryAdjustmentCount() {
  let count = state.customFactors.length;
  Object.entries(state.dictionaries).forEach(([name, options]) => {
    const baseOptions = BASE_DICTIONARIES[name] || {};
    Object.entries(options).forEach(([label, value]) => {
      if (!(label in baseOptions) || baseOptions[label] !== value) {
        count += 1;
      }
    });
  });
  return count;
}

function getAssetTypeLabel(value) {
  return {
    apartamento: "Apartamento",
    terreno: "Terreno",
    gleba: "Gleba",
    sala: "Sala",
    casa: "Casa",
    loja: "Loja",
    predio: "Predio",
    galpao: "Galpao",
  }[value] || value;
}

function renderContextNotices() {
  el.loadedModelNotice.textContent = state.loadedModelName
    ? `Modelo carregado: ${state.loadedModelName}`
    : "";
  el.loadedModelNotice.classList.toggle("hidden", !state.loadedModelName);
  const adjustmentCount = getDictionaryAdjustmentCount();
  el.dictionaryStatus.textContent = adjustmentCount
    ? `Este trabalho usa ajustes proprios: ${adjustmentCount} alteracao(oes) em dicionarios/fatores.`
    : "";
  el.dictionaryStatus.classList.toggle("hidden", !adjustmentCount);
}

function renderExpandableTables() {
  const editorExpanded = Boolean(state.expandedTables.editor);
  const resultsExpanded = Boolean(state.expandedTables.results);

  el.editorTableWrap?.classList.toggle("is-expanded", editorExpanded);
  el.resultsTableWrap?.classList.toggle("is-expanded", resultsExpanded);

  if (el.toggleEditorTableButton) {
    el.toggleEditorTableButton.textContent = editorExpanded
      ? "Voltar para rolagem"
      : "Abrir planilha toda";
    el.toggleEditorTableButton.setAttribute("aria-expanded", String(editorExpanded));
  }

  if (el.toggleResultsTableButton) {
    el.toggleResultsTableButton.textContent = resultsExpanded
      ? "Voltar para rolagem"
      : "Abrir planilha toda";
    el.toggleResultsTableButton.setAttribute("aria-expanded", String(resultsExpanded));
  }
}

function getStepIds() {
  return el.stepPanels.map((panel) => panel.dataset.stepPanel).filter(Boolean);
}

function renderPanelStates() {
  el.stepPanels.forEach((panel) => {
    const stepId = panel.dataset.stepPanel;
    const collapsed = Boolean(state.collapsedSteps[stepId]);
    panel.classList.toggle("is-collapsed", collapsed);
  });
  el.panelToggles.forEach((button) => {
    const stepId = button.dataset.panelToggle;
    const collapsed = Boolean(state.collapsedSteps[stepId]);
    button.setAttribute("aria-expanded", String(!collapsed));
    button.textContent = collapsed ? "▼" : "▲";
    button.setAttribute(
      "aria-label",
      collapsed ? `Expandir ${stepId}` : `Recolher ${stepId}`,
    );
  });
}

function toggleStepPanel(stepId) {
  if (!stepId) return;
  state.collapsedSteps[stepId] = !state.collapsedSteps[stepId];
  renderPanelStates();
}

function scrollToStep(stepId) {
  const panel = el.stepPanels.find((item) => item.dataset.stepPanel === stepId);
  if (!panel) return;
  if (state.collapsedSteps[stepId]) {
    state.collapsedSteps[stepId] = false;
    renderPanelStates();
  }
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateActiveSideDot() {
  let activeStep = getStepIds()[0];
  const threshold = 180;
  el.stepPanels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    if (rect.top <= threshold && rect.bottom > threshold) {
      activeStep = panel.dataset.stepPanel;
    }
  });
  el.sideDots.forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.stepTarget === activeStep);
  });
}

function bindStepNavigation() {
  el.panelToggles.forEach((button) => {
    button.addEventListener("click", () => toggleStepPanel(button.dataset.panelToggle));
  });
  el.sideDots.forEach((dot) => {
    dot.addEventListener("click", () => scrollToStep(dot.dataset.stepTarget));
  });
  window.addEventListener("scroll", updateActiveSideDot, { passive: true });
  updateActiveSideDot();
}

function makeRow(index) {
  const row = {
    id: String(index + 1),
    papel: index === 0 ? "avaliando" : "amostra",
    endereco: index === 0 ? "Imovel avaliando" : "",
    origem: "",
    valor_total: "",
    fonTipo: "Transacao",
    fon: "1",
    incluir: index !== 0,
    campos: {},
  };
  syncFonValue(row);
  return row;
}

function resetRows() {
  state.rows = Array.from({ length: 5 }, (_, index) => makeRow(index));
}

function resetAppState() {
  state.workName = "";
  state.loadedModelName = "";
  state.adoptedValue = "";
  state.adoptedJustification = "";
  state.assetType = "apartamento";
  state.referenceMode = getSuggestedReferenceMode(state.assetType);
  state.activeFactors = [...DEFAULT_FACTORS[state.assetType]];
  state.selectedDictionary = "padrao_construtivo";
  state.dictionaries = clone(BASE_DICTIONARIES);
  state.customFactors = [];
  state.dictionariesOpen = false;
  state.collapsedSteps = {};
  resetRows();
  resetResults();
  renderAll();
  bindFactorEvents();
  bindDictionaryInputEvents();
  bindEditorEvents();
}

function applyDemoScenario(demo) {
  state.loadedModelName = "";
  state.adoptedValue = "";
  state.adoptedJustification = "";
  state.assetType = demo.assetType;
  state.referenceMode = demo.referenceMode;
  state.activeFactors = [...demo.activeFactors];
  state.dictionariesOpen = false;
  state.rows = demo.rows.map((source, index) => ({
    id: String(index + 1),
    papel: index === 0 ? "avaliando" : "amostra",
    endereco: source.endereco,
    origem: source.origem || "",
    valor_total: source.valor_total,
    fonTipo: inferFonType(source),
    fon: source.fon,
    incluir: index === 0 ? false : source.incluir,
    campos: { ...source.campos },
  }));
  state.rows.forEach(syncFonValue);
  resetResults();
  renderAll();
  bindFactorEvents();
  bindDictionaryInputEvents();
  bindEditorEvents();
}

function loadSelectedExample() {
  if (el.exampleSelect.value === "apartamento") {
    applyDemoScenario(APARTMENT_CAROL_DEMO);
    setAppNotice("Exemplo carregado: Apartamento.");
    return;
  }
  if (el.exampleSelect.value === "terreno") {
    applyDemoScenario(TERRAIN_CAROL_DEMO);
    setAppNotice("Exemplo carregado: Terreno.");
    return;
  }
  setError("Selecione um exemplo para carregar.");
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

function ensureRowCount(count) {
  while (state.rows.length < count) {
    state.rows.push(makeRow(state.rows.length));
  }
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
  el.resultHint.textContent = "Calcule para revisar os fatores e decidir a selecao final dos dados.";
  el.technicalSummaryWrap.classList.add("hidden");
  el.technicalSummaryBody.innerHTML = `
    <tr>
      <td colspan="2" class="empty-cell">Nenhum calculo executado ainda.</td>
    </tr>
  `;
  el.resultBody.innerHTML = `
    <tr>
      <td colspan="10" class="empty-cell">Nenhum calculo executado ainda.</td>
    </tr>
  `;
}

function renderSavedCalculation() {
  if (!state.lastCalculation) {
    resetResults();
    el.reportPreviewWrap.classList.add("hidden");
    el.reportPreviewContent.innerHTML = "";
    return;
  }
  renderSummary(state.lastCalculation.summary);
  renderResults(state.lastCalculation.lines, state.lastCalculation.summary);
  bindResultEvents();
}

function renderReportPreview() {
  if (!state.lastCalculation) {
    setError("Execute um calculo antes de visualizar o relatorio.");
    return;
  }

  const visibleFactors = getVisibleFactors();
  const factorLabels = new Map(visibleFactors.map((factor) => [factor.id, factor.label]));
  const summary = state.lastCalculation.summary;
  const areaBase =
    summary.areaAvaliando ??
    (summary.mediaSaneada && summary.valorEstimado ? summary.valorEstimado / summary.mediaSaneada : null);
  const arbitrioInferiorTotal =
    summary.arbitrioInferiorTotal ?? (areaBase != null ? summary.arbitrioInferior * areaBase : null);
  const arbitrioSuperiorTotal =
    summary.arbitrioSuperiorTotal ?? (areaBase != null ? summary.arbitrioSuperior * areaBase : null);
  const icInferiorTotal =
    summary.icInferiorTotal ?? (areaBase != null ? summary.icInferior * areaBase : null);
  const icSuperiorTotal =
    summary.icSuperiorTotal ?? (areaBase != null ? summary.icSuperior * areaBase : null);

  const marketHeaders = ["Papel", "Endereco", "Valor total", "FON", "Incluir", ...visibleFactors.map((factor) => factor.label)];
  const marketRows = state.rows.map((row, index) => [
    index === 0 ? "Avaliando" : "Dado",
    row.endereco || "",
    row.valor_total || "",
    row.fon || "",
    index === 0 ? "Nao" : row.incluir ? "Sim" : "Nao",
    ...visibleFactors.map((factor) => row.campos[factor.id] ?? ""),
  ]);

  const homogHeaders = ["Linha", "Papel", "VU", "VU * FON", "Fator final", "VU homogenizado", "Z-score", "Status", "Fatores"];
  const homogRows = state.lastCalculation.lines.map((line) => [
    line.id,
    line.papel,
    formatNumber(line.valorUnitario),
    formatNumber(line.valorUnitarioFon),
    formatNumber(line.fatorFinal, 4),
    formatNumber(line.valorHomogeneizado),
    formatNumber(line.zScore, 4),
    line.status,
    Object.entries(line.coeficientes).map(([key, value]) => `${factorLabels.get(key) || key}: ${formatNumber(value, 4)}`).join(" | "),
  ]);

  const summaryRows = [
    ["Numero de dados utilizados", summary.numeroDadosSaneados],
    ["Media saneada", formatNumber(summary.mediaSaneada)],
    ["Desvio padrao", formatNumber(summary.desvioSaneado)],
    ["VC de Chauvenet", formatNumber(summary.chauvenetCritico, 3)],
    ["t-valor critico (conf. 80%)", formatNumber(summary.tCritico, 3)],
    ["LI IC 80%", formatNumber(summary.icInferior)],
    ["LS IC 80%", formatNumber(summary.icSuperior)],
    ["Valor estimado", `R$ ${formatNumber(summary.valorEstimado)}`],
    ["LI Campo de Arbitrio", `R$ ${formatNumber(arbitrioInferiorTotal)}`],
    ["LS Campo de Arbitrio", `R$ ${formatNumber(arbitrioSuperiorTotal)}`],
    ["LI IC 80% total", `R$ ${formatNumber(icInferiorTotal)}`],
    ["LS IC 80% total", `R$ ${formatNumber(icSuperiorTotal)}`],
  ];

  function previewTable(headers, rows) {
    return `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  el.reportPreviewContent.innerHTML = `
    <div class="report-preview-block">
      <h3>Planilha de dados de mercado</h3>
      ${previewTable(marketHeaders, marketRows)}
    </div>
    <div class="report-preview-block">
      <h3>Homogeneizacao</h3>
      ${previewTable(homogHeaders, homogRows)}
    </div>
    <div class="report-preview-block">
      <h3>Resumo do relatorio</h3>
      ${previewTable(["Indicador", "Valor"], summaryRows)}
    </div>
  `;
  el.reportPreviewWrap.classList.remove("hidden");
}

function getSerializedState() {
  return {
    version: 1,
    workName: state.workName,
    adoptedValue: state.adoptedValue,
    adoptedJustification: state.adoptedJustification,
    assetType: state.assetType,
    referenceMode: state.referenceMode,
    activeFactors: clone(state.activeFactors),
    selectedDictionary: state.selectedDictionary,
    dictionaries: clone(state.dictionaries),
    rows: clone(state.rows),
    dictionariesOpen: state.dictionariesOpen,
    customFactors: clone(state.customFactors),
    lastCalculation: clone(state.lastCalculation),
  };
}

function sanitizeFileName(value) {
  const normalized = (value || "trabalho")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "trabalho";
}

function saveWorkFile() {
  const payload = getSerializedState();
  const fileName = `${sanitizeFileName(state.workName || "trabalho")}.fat`;
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  setAppNotice(`Trabalho salvo: ${fileName}`);
}

function loadWorkFile(file) {
  if (!file) return;
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result || "{}"));
        state.workName = payload.workName || "";
        state.loadedModelName = payload.workName || file.name.replace(/\.fat$/i, "");
        state.adoptedValue = payload.adoptedValue ?? "";
        state.adoptedJustification = payload.adoptedJustification || "";
        state.assetType = payload.assetType || "apartamento";
        state.referenceMode = payload.referenceMode || getSuggestedReferenceMode(state.assetType);
        state.activeFactors = Array.isArray(payload.activeFactors)
          ? payload.activeFactors
          : [...DEFAULT_FACTORS[state.assetType]];
        state.selectedDictionary = payload.selectedDictionary || "padrao_construtivo";
        state.dictionaries = payload.dictionaries ? clone(payload.dictionaries) : clone(BASE_DICTIONARIES);
        state.dictionaries.fon = {
          ...BASE_DICTIONARIES.fon,
          ...(payload.dictionaries?.fon || {}),
        };
        state.rows = Array.isArray(payload.rows) && payload.rows.length
          ? payload.rows.map((row, index) => {
              const loadedRow = {
                id: String(index + 1),
                papel: index === 0 ? "avaliando" : "dado",
                endereco: row.endereco || "",
                origem: row.origem || "",
                valor_total: row.valor_total ?? "",
                fonTipo: inferFonType(row),
                fon: row.fon ?? "1",
                incluir: index === 0 ? false : Boolean(row.incluir),
                campos: row.campos || {},
              };
              syncFonValue(loadedRow);
              return loadedRow;
            })
          : Array.from({ length: 5 }, (_, index) => makeRow(index));
        state.dictionariesOpen = false;
        state.customFactors = Array.isArray(payload.customFactors) ? payload.customFactors : [];
        state.lastCalculation = payload.lastCalculation ? clone(payload.lastCalculation) : null;

        renderAll();
        bindFactorEvents();
        bindDictionaryInputEvents();
        bindEditorEvents();
        renderSavedCalculation();
        setError("");
        setAppNotice(`Modelo carregado: ${(payload.workName || file.name.replace(/\.fat$/i, ""))}.`);
      } catch (error) {
        setError(`Falha ao carregar o arquivo .fat: ${error instanceof Error ? error.message : error}`);
      } finally {
        resolve();
      }
    };
    reader.readAsText(file);
  });
}

function renderSelectors() {
  el.workName.value = state.workName;
  el.adoptedValue.value = state.adoptedValue;
  el.adoptedJustification.value = state.adoptedJustification;
  el.assetType.innerHTML = `
    <option value="apartamento">Apartamento</option>
    <option value="terreno">Terreno</option>
    <option value="gleba">Gleba</option>
    <option value="sala">Sala</option>
    <option value="casa">Casa</option>
    <option value="loja">Loja</option>
    <option value="predio">Predio</option>
    <option value="galpao">Galpao</option>
  `;
  el.assetType.value = state.assetType;
  el.referenceConstruida.classList.toggle("active", state.referenceMode === "Construida");
  el.referenceTerreno.classList.toggle("active", state.referenceMode === "Terreno");
  renderContextNotices();
}

function renderFactors() {
  const essential = getEssentialFactor();
  const available = getAvailableFactors();
  el.factorHint.textContent = "";
  el.factorList.innerHTML = available
    .map((factor) => {
      const checked = state.activeFactors.includes(factor.id) || factor.id === essential;
      return `
        <div class="factor-card ${checked ? "active" : ""}" data-factor-card="${factor.id}">
          <label class="factor-toggle">
            <input type="checkbox" class="${factor.id === essential ? "reference-checkbox" : ""}" data-factor="${factor.id}" ${checked ? "checked" : ""} />
            <strong>${factor.label}</strong>
          </label>
          <span>${factor.kind === "option" ? "dicionario" : "numerico"}</span>
        </div>
      `;
    })
    .join("");
}

function updateFactorSelection(factorId, checked) {
  if (!factorId || factorId === getEssentialFactor()) return;
  if (checked) {
    if (!state.activeFactors.includes(factorId)) {
      state.activeFactors.push(factorId);
    }
  } else {
    state.activeFactors = state.activeFactors.filter((id) => id !== factorId);
  }
  renderEditor();
  bindEditorEvents();
  renderFactors();
}

function renderEditor() {
  const visibleFactors = getVisibleFactors();
  const fonOptions = Object.entries(state.dictionaries.fon || {});
  el.editorHead.innerHTML = `
    <tr>
      <th>Linha</th>
      <th>Papel</th>
      <th>Endereco</th>
      <th>Origem do anuncio</th>
      <th class="editor-col-valor-total">Valor total</th>
      <th class="editor-col-fon">FON</th>
      <th>Incluir</th>
      ${visibleFactors
        .map(
          (factor) =>
            `<th class="${factor.id === "andar" ? "editor-col-andar" : ""}">${factor.label}</th>`,
        )
        .join("")}
      <th></th>
    </tr>
  `;

  el.editorBody.innerHTML = state.rows
    .map((row, index) => {
      const roleBadge =
        index === 0
          ? '<span class="fixed-role">Avaliando</span>'
          : '<span class="fixed-role">Dado</span>';
      const rowClass = index === 0 ? "row-evaluating" : index > 0 && !row.incluir ? "row-off" : "";
      const cells = visibleFactors
        .map((factor) => {
          const current =
            factor.id === "prof_equivalente"
              ? formatEditableDecimal(row.campos[factor.id], 2)
              : row.campos[factor.id] ?? "";
          const compactField = ["localizacao", "area_construida", "area_territorial", "vaga", "testada", "prof_equivalente"].includes(factor.id);
          const integerField = factor.id === "vaga";
          if (factor.kind === "option") {
            const options = Object.keys(state.dictionaries[factor.id] || {});
            return `
              <td class="${factor.id === "andar" ? "editor-col-andar" : ""}">
                <select class="${factor.id === "andar" ? "editor-field-andar" : ""}" data-row-id="${row.id}" data-factor-id="${factor.id}">
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
              <input type="${integerField ? "number" : "text"}" ${integerField ? 'step="1" min="0" inputmode="numeric"' : 'inputmode="decimal"'} class="${compactField ? "compact-factor-field" : ""}" data-row-id="${row.id}" data-factor-id="${factor.id}" value="${current}" />
            </td>
          `;
        })
        .join("");

      return `
        <tr class="${rowClass}">
          <td class="line-index">${index === 0 ? "-" : index}</td>
          <td>${roleBadge}</td>
          <td><input data-row-id="${row.id}" data-basic="endereco" value="${row.endereco}" /></td>
          <td><input data-row-id="${row.id}" data-basic="origem" value="${row.origem || ""}" ${index === 0 ? "disabled" : ""} /></td>
          <td class="editor-col-valor-total"><input class="editor-field-valor-total" type="text" inputmode="decimal" data-row-id="${row.id}" data-basic="valor_total" value="${row.valor_total}" ${index === 0 ? "disabled" : ""} /></td>
          <td class="editor-col-fon">
            <select class="editor-field-fon" data-row-id="${row.id}" data-basic="fonTipo">
              ${fonOptions
                .map(([label, coefficient]) => `<option value="${label}" ${label === row.fonTipo ? "selected" : ""}>${label} (${formatNumber(coefficient, 2)})</option>`)
                .join("")}
            </select>
          </td>
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

function normalizePastedLines(text) {
  return String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
}

function applyColumnPaste(startRowId, targetKey, values, mode) {
  const startIndex = state.rows.findIndex((row) => row.id === startRowId);
  if (startIndex === -1 || !values.length) return;

  ensureRowCount(startIndex + values.length);

  values.forEach((value, offset) => {
    const row = state.rows[startIndex + offset];
    if (!row) return;
    if (mode === "basic") {
      if (targetKey === "fonTipo") {
        row.fonTipo = value;
        syncFonValue(row);
        return;
      }
      row[targetKey] = value;
      return;
    }
    row.campos[targetKey] = value;
  });

  renderEditor();
  bindEditorEvents();
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
  const areaBase =
    summary.areaAvaliando ??
    (summary.mediaSaneada && summary.valorEstimado ? summary.valorEstimado / summary.mediaSaneada : null);
  const arbitrioInferiorTotal =
    summary.arbitrioInferiorTotal ?? (areaBase != null ? summary.arbitrioInferior * areaBase : null);
  const arbitrioSuperiorTotal =
    summary.arbitrioSuperiorTotal ?? (areaBase != null ? summary.arbitrioSuperior * areaBase : null);
  const icInferiorTotal =
    summary.icInferiorTotal ?? (areaBase != null ? summary.icInferior * areaBase : null);
  const icSuperiorTotal =
    summary.icSuperiorTotal ?? (areaBase != null ? summary.icSuperior * areaBase : null);
  const sampleGrade = summary.grauAmostra || getSampleGrade(summary.numeroDadosSaneados);

  el.summaryGrid.className = "summary-grid";
  el.technicalSummaryWrap.classList.add("hidden");
  el.summaryGrid.innerHTML = `
    <article class="summary-card summary-card-wide">
      <span>Estatisticas iniciais</span>
      <div class="summary-list">
        <div><b>Numero de dados</b><strong>${summary.numeroDadosInicial}</strong></div>
        <div><b>Media</b><strong>${formatNumber(summary.mediaInicial)}</strong></div>
        <div><b>Graus de liberdade (n-1)</b><strong>${Math.max(summary.numeroDadosInicial - 1, 1)}</strong></div>
        <div><b>Valor maximo</b><strong>${formatNumber(summary.valorMaximoInicial)}</strong></div>
        <div><b>Valor minimo</b><strong>${formatNumber(summary.valorMinimoInicial)}</strong></div>
        <div><b>Limite superior (1,15 x media)</b><strong>${formatNumber(summary.limiteSuperiorInicial)}</strong></div>
        <div><b>Limite inferior (0,85 x media)</b><strong>${formatNumber(summary.limiteInferiorInicial)}</strong></div>
        <div><b>Desvio padrao</b><strong>${formatNumber(summary.desvioInicial)}</strong></div>
        <div><b>Coeficiente de variacao</b><strong>${formatNumber(summary.coeficienteVariacaoInicial)}%</strong></div>
      </div>
    </article>
    <article class="summary-card summary-card-wide">
      <span>Estatisticas apos o saneamento</span>
      <div class="summary-list">
        <div><b>Numero de dados utilizados</b><strong>${summary.numeroDadosSaneados}</strong></div>
        <div><b>Media saneada</b><strong>${formatNumber(summary.mediaSaneada)}</strong></div>
        <div><b>Desvio padrao</b><strong>${formatNumber(summary.desvioSaneado)}</strong></div>
        <div><b>Graus de liberdade (n-1)</b><strong>${summary.grausLiberdade}</strong></div>
        <div><b>VC de Chauvenet</b><strong>${formatNumber(summary.chauvenetCritico, 3)}</strong></div>
        <div><b>Limite superior (1,15 x media)</b><strong>${formatNumber(summary.arbitrioSuperior)}</strong></div>
        <div><b>Limite inferior (0,85 x media)</b><strong>${formatNumber(summary.arbitrioInferior)}</strong></div>
        <div><b>t-valor critico (conf. 80%)</b><strong>${formatNumber(summary.tCritico, 3)}</strong></div>
        <div><b>Limite inferior IC</b><strong>${formatNumber(summary.icInferior)}</strong></div>
        <div><b>Limite superior IC</b><strong>${formatNumber(summary.icSuperior)}</strong></div>
        <div><b>Amplitude</b><strong>${formatNumber(summary.amplitudeIC)}</strong></div>
        <div><b>Amplitude percentual</b><strong>${formatNumber(summary.amplitudePercentual)}%</strong></div>
      </div>
    </article>
    <article class="summary-card summary-card-wide">
      <span>Valores calculados</span>
      <div class="summary-subsection">
        <div><b>Area avaliando (m²)</b><strong>${formatNumber(areaBase)}</strong></div>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-subtitle">Valores Unitarios (R$/m²)</div>
      <div class="summary-list">
        <div><b>Medio estimado</b><strong>${formatNumber(summary.mediaSaneada)}</strong></div>
        <div><b>LI Campo de Arbitrio (-15%)</b><strong>${formatNumber(summary.arbitrioInferior)}</strong></div>
        <div><b>LS Campo de Arbitrio (+15%)</b><strong>${formatNumber(summary.arbitrioSuperior)}</strong></div>
        <div><b>LI Intervalo de Confianca 80%</b><strong>${formatNumber(summary.icInferior)}</strong></div>
        <div><b>LS Intervalo de Confianca 80%</b><strong>${formatNumber(summary.icSuperior)}</strong></div>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-subtitle">Valores Totais (R$)</div>
      <div class="summary-list">
        <div><b>Medio estimado</b><strong>R$ ${formatNumber(summary.valorEstimado)}</strong></div>
        <div><b>LI Campo de Arbitrio (-15%)</b><strong>R$ ${formatNumber(arbitrioInferiorTotal)}</strong></div>
        <div><b>LS Campo de Arbitrio (+15%)</b><strong>R$ ${formatNumber(arbitrioSuperiorTotal)}</strong></div>
        <div><b>LI Intervalo de Confianca 80%</b><strong>R$ ${formatNumber(icInferiorTotal)}</strong></div>
        <div><b>LS Intervalo de Confianca 80%</b><strong>R$ ${formatNumber(icSuperiorTotal)}</strong></div>
      </div>
    </article>
  `;
  el.technicalSummaryBody.innerHTML = "";
}

function buildResultInfoButton(key, message) {
  if (!message) return "";
  return `
    <span class="inline-info">
      <button
        type="button"
        class="info-chip"
        data-info-toggle="${key}"
        aria-expanded="false"
        aria-label="Ver explicacao"
      >i</button>
      <span class="info-popover hidden" data-info-panel="${key}">${message}</span>
    </span>
  `;
}

function getFinalFactorExplanation(value, grade) {
  if (value == null || grade === "-" || grade === "III") return "";
  if (grade === "Fora da faixa") {
    return `Fora da faixa porque, com menos de 5 dados, o fator final ${formatNumber(value, 4)} precisa ficar entre 0,8 e 1,25.`;
  }
  if (grade === "II") {
    return `Grau II porque o fator final ${formatNumber(value, 4)} saiu da faixa do Grau III (0,8 a 1,25), mas permaneceu entre 0,5 e 2,0.`;
  }
  if (grade === "I") {
    return `Grau I porque o fator final ${formatNumber(value, 4)} saiu da faixa do Grau II (0,5 a 2,0), mas permaneceu entre 0,4 e 2,5.`;
  }
  return `Fora da faixa porque o fator final ${formatNumber(value, 4)} ficou fora do intervalo admissivel de 0,4 a 2,5.`;
}

function getStatusExplanation(line, chauvenetCritico) {
  if (line.status === "REJEITAR") {
    if (chauvenetCritico != null && line.zScore != null) {
      return `Rejeitar porque o z-score ${formatNumber(line.zScore, 4)} ficou maior que o valor critico ${formatNumber(chauvenetCritico, 3)} do VC de Chauvenet.`;
    }
    return "Rejeitar por exceder o limite estatistico adotado.";
  }
  if (line.status === "REJEITADO") {
    if (chauvenetCritico != null && line.zScore != null) {
      return `Rejeitado porque o z-score ${formatNumber(line.zScore, 4)} ficou maior que o valor critico ${formatNumber(chauvenetCritico, 3)} do VC de Chauvenet.`;
    }
    return "Rejeitado por exceder o limite estatistico adotado.";
  }
  return "";
}

function renderResults(lines, summary = state.lastCalculation?.summary) {
  const factorLabels = new Map(getVisibleFactors().map((factor) => [factor.id, factor.label]));
  const flaggedCount = lines.filter((line) => line.status === "REJEITAR").length;
  const participatingCount = lines.filter(
    (line) => line.papel === "DADO" && line.participa && line.valorHomogeneizado != null,
  ).length;
  const chauvenetCritico = summary?.chauvenetCritico ?? null;
  const sampleGrade = getSampleGrade(participatingCount);
  const worstFinalFactorGrade = getWorstFinalFactorGrade(lines, participatingCount);
  const gradeLabel =
    sampleGrade === "Sem enquadramento" ? sampleGrade : `Grau ${sampleGrade}`;
  el.resultHint.innerHTML = `
    Quantidade de dados efetivamente utilizados: ${participatingCount} dados - ${gradeLabel}.<br />
    Intervalo admissivel de ajuste para o conjunto de fatores: ${worstFinalFactorGrade}.
  `;
  el.resultBody.innerHTML = lines
    .map(
      (line, index) => {
        const finalFactorGrade = getFinalFactorGrade(line.fatorFinal, participatingCount);
        const finalFactorInfo = buildResultInfoButton(
          `fator-final-${line.id}`,
          line.papel === "DADO" ? getFinalFactorExplanation(line.fatorFinal, finalFactorGrade) : "",
        );
        const finalFactorNumberAlert =
          line.papel === "DADO" &&
          line.fatorFinal != null &&
          finalFactorGrade === "Fora da faixa";
        const finalFactorMarkup = finalFactorNumberAlert
          ? `<span class="factor-number-alert">${formatNumber(line.fatorFinal, 4)}</span>`
          : formatNumber(line.fatorFinal, 4);
        const finalFactorCell = `
          <div class="factor-final-cell">
            <span>${finalFactorMarkup}</span>
            <span class="result-info-line">
              <span class="factor-final-grade ${getFinalFactorGradeClass(finalFactorGrade)}">${finalFactorGrade === "Fora da faixa" ? finalFactorGrade : `Grau ${finalFactorGrade}`}</span>
              ${finalFactorInfo}
            </span>
          </div>
        `;
        const zScoreInfo = buildResultInfoButton(
          `z-score-${line.id}`,
          line.papel === "DADO" &&
            line.participa &&
            chauvenetCritico != null &&
            line.zScore != null &&
            line.zScore > chauvenetCritico
            ? `Z-score ${formatNumber(line.zScore, 4)} maior que o VC de Chauvenet ${formatNumber(chauvenetCritico, 3)}.`
            : "",
        );
        const zScoreAlert =
          line.papel === "DADO" &&
          line.participa &&
          chauvenetCritico != null &&
          line.zScore != null &&
          line.zScore > chauvenetCritico;
        const highlightedFactors = Object.entries(line.coeficientes).filter(
          ([, value]) => value > 2 || value < 0.5,
        );
        const factorsInfo = buildResultInfoButton(
          `fatores-${line.id}`,
          highlightedFactors.length
            ? `Ha fator(es) fora da faixa 0,5 a 2,0: ${highlightedFactors
                .map(
                  ([key, value]) =>
                    `${factorLabels.get(key) || key} = ${formatNumber(value, 4)}`,
                )
                .join("; ")}.`
            : "",
        );
        const statusInfo = buildResultInfoButton(
          `status-${line.id}`,
          getStatusExplanation(line, chauvenetCritico),
        );
        return `
        <tr class="${line.papel === "AVALIANDO" ? "row-evaluating" : ""}">
          <td>${index === 0 ? "-" : index}</td>
          <td>${line.papel}</td>
          <td>
            <label class="checkbox-cell">
              <input type="checkbox" data-result-include-id="${line.id}" ${line.papel === "DADO" && line.participa ? "checked" : ""} ${line.papel === "AVALIANDO" ? "disabled" : ""} />
              <span>${line.papel === "AVALIANDO" ? "Nao" : line.participa ? "Sim" : "Nao"}</span>
            </label>
          </td>
          <td>${formatNumber(line.valorUnitario)}</td>
          <td>${formatNumber(line.valorUnitarioFon)}</td>
          <td>${finalFactorCell}</td>
          <td>${formatNumber(line.valorHomogeneizado)}</td>
          <td><span class="result-info-line"><span class="${zScoreAlert ? "zscore-alert" : ""}">${formatNumber(line.zScore, 4)}</span>${zScoreInfo}</span></td>
          <td><span class="result-info-line"><span class="status status-${line.status.toLowerCase()}">${line.status}</span>${statusInfo}</span></td>
          <td><div class="coef-list">${Object.entries(line.coeficientes)
            .map(([key, value]) => {
              const highlight = value > 2 || value < 0.5;
              const className = highlight ? ' class="factor-alert"' : "";
              return `<span${className}>${factorLabels.get(key) || key}: ${formatNumber(value, 4)}</span>`;
            })
            .join("")}</div>${factorsInfo}</td>
        </tr>
      `;
      },
    )
    .join("");
}

function exportWordReport() {
  if (!state.lastCalculation) {
    setError("Execute um calculo antes de exportar o relatorio.");
    return;
  }

  const visibleFactors = getVisibleFactors();
  const factorLabels = new Map(visibleFactors.map((factor) => [factor.id, factor.label]));
  const step2Headers = ["Papel", "Endereco", "Valor total", "fon", "Incluir", ...visibleFactors.map((factor) => factor.label)];
  const step2Rows = state.rows.map((row, index) => [
    index === 0 ? "Avaliando" : "Dado",
    row.endereco || "",
    row.valor_total || "",
    row.fon || "",
    index === 0 ? "Nao" : row.incluir ? "Sim" : "Nao",
    ...visibleFactors.map((factor) => row.campos[factor.id] ?? ""),
  ]);

  const step3Headers = ["Linha", "Papel", "VU", "VU * fon", "Fator final", "VU homogenizado", "Z-score", "Status", "Fatores"];
  const step3Rows = state.lastCalculation.lines.map((line) => [
    line.id,
    line.papel,
    formatNumber(line.valorUnitario),
    formatNumber(line.valorUnitarioFon),
    formatNumber(line.fatorFinal, 4),
    formatNumber(line.valorHomogeneizado),
    formatNumber(line.zScore, 4),
    line.status,
    Object.entries(line.coeficientes)
      .map(([key, value]) => `${factorLabels.get(key) || key}: ${formatNumber(value, 4)}`)
      .join(" | "),
  ]);

  const summary = state.lastCalculation.summary;
  const areaBase =
    summary.areaAvaliando ??
    (summary.mediaSaneada && summary.valorEstimado ? summary.valorEstimado / summary.mediaSaneada : null);
  const arbitrioInferiorTotal =
    summary.arbitrioInferiorTotal ?? (areaBase != null ? summary.arbitrioInferior * areaBase : null);
  const arbitrioSuperiorTotal =
    summary.arbitrioSuperiorTotal ?? (areaBase != null ? summary.arbitrioSuperior * areaBase : null);
  const icInferiorTotal =
    summary.icInferiorTotal ?? (areaBase != null ? summary.icInferior * areaBase : null);
  const icSuperiorTotal =
    summary.icSuperiorTotal ?? (areaBase != null ? summary.icSuperior * areaBase : null);
  const adoptedValueFormatted =
    toNumber(state.adoptedValue) != null ? `R$ ${formatNumber(toNumber(state.adoptedValue))}` : "-";
  const adoptedJustification = state.adoptedJustification || "-";
  const exportedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date());
  const reportHighlights = [
    ["Media saneada", `R$ ${formatNumber(summary.mediaSaneada)}`],
    ["Valor estimado total", `R$ ${formatNumber(summary.valorEstimado)}`],
    ["Valor adotado", adoptedValueFormatted],
    ["Campo de arbitrio total", `R$ ${formatNumber(arbitrioInferiorTotal)} a R$ ${formatNumber(arbitrioSuperiorTotal)}`],
    ["IC 80%", `${formatNumber(summary.icInferior)} a ${formatNumber(summary.icSuperior)}`],
    ["IC 80% total", `R$ ${formatNumber(icInferiorTotal)} a R$ ${formatNumber(icSuperiorTotal)}`],
    ["Dados aceitos", summary.amostras],
  ];
  const initialStatsRows = [
    ["Numero de dados", summary.numeroDadosInicial],
    ["Media", formatNumber(summary.mediaInicial)],
    ["Graus de liberdade (n-1)", Math.max(summary.numeroDadosInicial - 1, 1)],
    ["Valor maximo", formatNumber(summary.valorMaximoInicial)],
    ["Valor minimo", formatNumber(summary.valorMinimoInicial)],
    ["Limite superior (1,15 x media)", formatNumber(summary.limiteSuperiorInicial)],
    ["Limite inferior (0,85 x media)", formatNumber(summary.limiteInferiorInicial)],
    ["Desvio padrao", formatNumber(summary.desvioInicial)],
    ["Coeficiente de variacao", `${formatNumber(summary.coeficienteVariacaoInicial)}%`],
  ];
  const sanitizedStatsRows = [
    ["Numero de dados utilizados", summary.numeroDadosSaneados],
    ["Media saneada", formatNumber(summary.mediaSaneada)],
    ["Desvio padrao", formatNumber(summary.desvioSaneado)],
    ["Graus de liberdade (n-1)", summary.grausLiberdade],
    ["VC de Chauvenet", formatNumber(summary.chauvenetCritico, 3)],
    ["Limite superior (1,15 x media)", formatNumber(summary.arbitrioSuperior)],
    ["Limite inferior (0,85 x media)", formatNumber(summary.arbitrioInferior)],
    ["t-valor critico (conf. 80%)", formatNumber(summary.tCritico, 3)],
    ["Limite inferior IC", formatNumber(summary.icInferior)],
    ["Limite superior IC", formatNumber(summary.icSuperior)],
    ["Amplitude", formatNumber(summary.amplitudeIC)],
    ["Amplitude percentual", `${formatNumber(summary.amplitudePercentual)}%`],
  ];
  const calculatedValueRows = [
    ["Area avaliando (m²)", formatNumber(areaBase)],
    ["", ""],
    ["Valores Unitarios (R$/m²)", ""],
    ["Medio estimado", formatNumber(summary.mediaSaneada)],
    ["LI Campo de Arbitrio (-15%)", formatNumber(summary.arbitrioInferior)],
    ["LS Campo de Arbitrio (+15%)", formatNumber(summary.arbitrioSuperior)],
    ["LI Intervalo de Confianca 80%", formatNumber(summary.icInferior)],
    ["LS Intervalo de Confianca 80%", formatNumber(summary.icSuperior)],
    ["", ""],
    ["Valores Totais (R$)", ""],
    ["Medio estimado", `R$ ${formatNumber(summary.valorEstimado)}`],
    ["LI Campo de Arbitrio (-15%)", `R$ ${formatNumber(arbitrioInferiorTotal)}`],
    ["LS Campo de Arbitrio (+15%)", `R$ ${formatNumber(arbitrioSuperiorTotal)}`],
    ["LI Intervalo de Confianca 80%", `R$ ${formatNumber(icInferiorTotal)}`],
    ["LS Intervalo de Confianca 80%", `R$ ${formatNumber(icSuperiorTotal)}`],
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
        <title>${state.workName ? `${state.workName} - ` : ""}Tratamento por Fatores</title>
        <style>
          @page { size: A4 landscape; margin: 1.2cm; }
          body { font-family: Arial, sans-serif; margin: 18px; color: #1f2933; }
          h1, h2 { margin-bottom: 8px; }
          p { margin: 4px 0 14px; }
          section { margin-bottom: 28px; }
          .report-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
          .report-card { border: 1px solid #d8e1ea; border-radius: 12px; padding: 12px 14px; background: #f9fbfd; }
          .report-card strong { display: block; margin-top: 6px; font-size: 1rem; color: #1f3a5f; }
          .report-card span { color: #5a6b7c; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; }
          .summary-report { display: grid; gap: 16px; margin-top: 14px; }
          .summary-report-card { border: 1px solid #d8e1ea; border-radius: 14px; padding: 14px 16px; background: #fbfcfd; }
          .summary-report-card h3 { margin: 0 0 12px; color: #162a44; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.04em; }
          .summary-report-card table { margin-top: 0; }
          .summary-report-card td:first-child { width: 68%; color: #526577; }
          .summary-report-card tr.separator td { padding: 5px 10px; background: #fff; border-left-color: #fff; border-right-color: #fff; }
          .summary-report-card tr.section td { background: #f5f8fb; font-weight: 700; color: #1f3a5f; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          th, td { border: 1px solid #cfd8e3; padding: 5px 6px; text-align: left; vertical-align: top; font-size: 9pt; }
          th { background: #f3f7fb; font-size: 8pt; }
        </style>
      </head>
      <body>
        <h1>${state.workName || "Tratamento por Fatores"}</h1>
        <p>Metodo Comparativo Direto de Dados de Mercado - Tratamento por Fatores</p>
        <p>NBR 14.653-2 - item 8.2.1.4.2</p>
        <p>Tipologia: ${getAssetTypeLabel(state.assetType)}</p>
        <p>Area de calculo: ${state.referenceMode === "Terreno" ? "Area territorial" : "Area construida"}</p>
        <p>Fatores ativos: ${visibleFactors.map((factor) => factor.label).join(", ")}</p>
        <p>Emitido em: ${exportedAt}</p>
        <section>
          <h2>Planilha de dados de mercado</h2>
          ${table(step2Headers, step2Rows)}
        </section>
        <section>
          <h2>Homogeneizacao</h2>
          ${table(step3Headers, step3Rows)}
        </section>
        <section>
          <h2>Resultados</h2>
          <div class="summary-report">
            <div class="summary-report-card">
              <h3>Estatisticas iniciais</h3>
              ${table(["Indicador", "Valor"], initialStatsRows)}
            </div>
            <div class="summary-report-card">
              <h3>Estatisticas apos o saneamento</h3>
              ${table(["Indicador", "Valor"], sanitizedStatsRows)}
            </div>
            <div class="summary-report-card">
              <h3>Valores calculados</h3>
              <table>
                <tbody>
                  ${calculatedValueRows
                    .map(([label, value]) => {
                      if (!label && !value) return '<tr class="separator"><td colspan="2"></td></tr>';
                      if (label.includes("Valores Unitarios") || label.includes("Valores Totais")) {
                        return `<tr class="section"><td colspan="2">${label}</td></tr>`;
                      }
                      return `<tr><td>${label}</td><td>${value}</td></tr>`;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section>
          <h2>Valor adotado</h2>
          ${table(
            ["Campo", "Conteudo"],
            [
              ["Valor adotado", adoptedValueFormatted],
              ["Justificativa", adoptedJustification],
            ],
          )}
        </section>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${sanitizeFileName(state.workName || "trabalho")}-relatorio.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  setAppNotice(`Relatorio exportado: ${sanitizeFileName(state.workName || "trabalho")}-relatorio.doc`);
}

function exportPdfReport() {
  if (!state.lastCalculation) {
    setError("Execute um calculo antes de exportar o relatorio.");
    return;
  }
  if (!window.jspdf?.jsPDF) {
    setError("Biblioteca de PDF indisponivel no momento.");
    return;
  }

  const visibleFactors = getVisibleFactors();
  const factorLabels = new Map(visibleFactors.map((factor) => [factor.id, factor.label]));
  const step2Headers = ["Papel", "Endereco", "Origem do anuncio", "Valor total", "Tipo FON", "FON", "Incluir", ...visibleFactors.map((factor) => factor.label)];
  const step2Rows = state.rows.map((row, index) => [
    index === 0 ? "Avaliando" : "Dado",
    row.endereco || "",
    row.origem || "",
    row.valor_total || "",
    row.fonTipo || "",
    row.fon || "",
    index === 0 ? "Nao" : row.incluir ? "Sim" : "Nao",
    ...visibleFactors.map((factor) => row.campos[factor.id] ?? ""),
  ]);

  const step3Headers = ["Linha", "Papel", "VU", "VU * FON", "Fator final", "VU homogenizado", "Z-score", "Status", "Fatores"];
  const step3Rows = state.lastCalculation.lines.map((line) => [
    line.id,
    line.papel,
    formatNumber(line.valorUnitario),
    formatNumber(line.valorUnitarioFon),
    formatNumber(line.fatorFinal, 4),
    formatNumber(line.valorHomogeneizado),
    formatNumber(line.zScore, 4),
    line.status,
    Object.entries(line.coeficientes).map(([key, value]) => `${factorLabels.get(key) || key}: ${formatNumber(value, 4)}`).join(" | "),
  ]);

  const summary = state.lastCalculation.summary;
  const areaBase =
    summary.areaAvaliando ??
    (summary.mediaSaneada && summary.valorEstimado ? summary.valorEstimado / summary.mediaSaneada : null);
  const arbitrioInferiorTotal =
    summary.arbitrioInferiorTotal ?? (areaBase != null ? summary.arbitrioInferior * areaBase : null);
  const arbitrioSuperiorTotal =
    summary.arbitrioSuperiorTotal ?? (areaBase != null ? summary.arbitrioSuperior * areaBase : null);
  const icInferiorTotal =
    summary.icInferiorTotal ?? (areaBase != null ? summary.icInferior * areaBase : null);
  const icSuperiorTotal =
    summary.icSuperiorTotal ?? (areaBase != null ? summary.icSuperior * areaBase : null);
  const adoptedValueFormatted =
    toNumber(state.adoptedValue) != null ? `R$ ${formatNumber(toNumber(state.adoptedValue))}` : "-";
  const adoptedJustification = state.adoptedJustification || "-";
  const exportedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date());
  const initialStatsRows = [
    ["Numero de dados", summary.numeroDadosInicial],
    ["Media", formatNumber(summary.mediaInicial)],
    ["Graus de liberdade (n-1)", Math.max(summary.numeroDadosInicial - 1, 1)],
    ["Valor maximo", formatNumber(summary.valorMaximoInicial)],
    ["Valor minimo", formatNumber(summary.valorMinimoInicial)],
    ["Limite superior (1,15 x media)", formatNumber(summary.limiteSuperiorInicial)],
    ["Limite inferior (0,85 x media)", formatNumber(summary.limiteInferiorInicial)],
    ["Desvio padrao", formatNumber(summary.desvioInicial)],
    ["Coeficiente de variacao", `${formatNumber(summary.coeficienteVariacaoInicial)}%`],
  ];
  const sanitizedStatsRows = [
    ["Numero de dados utilizados", summary.numeroDadosSaneados],
    ["Media saneada", formatNumber(summary.mediaSaneada)],
    ["Desvio padrao", formatNumber(summary.desvioSaneado)],
    ["Graus de liberdade (n-1)", summary.grausLiberdade],
    ["VC de Chauvenet", formatNumber(summary.chauvenetCritico, 3)],
    ["Limite superior (1,15 x media)", formatNumber(summary.arbitrioSuperior)],
    ["Limite inferior (0,85 x media)", formatNumber(summary.arbitrioInferior)],
    ["t-valor critico (conf. 80%)", formatNumber(summary.tCritico, 3)],
    ["Limite inferior IC", formatNumber(summary.icInferior)],
    ["Limite superior IC", formatNumber(summary.icSuperior)],
    ["Amplitude", formatNumber(summary.amplitudeIC)],
    ["Amplitude percentual", `${formatNumber(summary.amplitudePercentual)}%`],
  ];
  const calculatedValueRows = [
    ["Area avaliando (m²)", formatNumber(areaBase)],
    ["Valores Unitarios (R$/m²)", ""],
    ["Medio estimado", formatNumber(summary.mediaSaneada)],
    ["LI Campo de Arbitrio (-15%)", formatNumber(summary.arbitrioInferior)],
    ["LS Campo de Arbitrio (+15%)", formatNumber(summary.arbitrioSuperior)],
    ["LI Intervalo de Confianca 80%", formatNumber(summary.icInferior)],
    ["LS Intervalo de Confianca 80%", formatNumber(summary.icSuperior)],
    ["Valores Totais (R$)", ""],
    ["Medio estimado", `R$ ${formatNumber(summary.valorEstimado)}`],
    ["LI Campo de Arbitrio (-15%)", `R$ ${formatNumber(arbitrioInferiorTotal)}`],
    ["LS Campo de Arbitrio (+15%)", `R$ ${formatNumber(arbitrioSuperiorTotal)}`],
    ["LI Intervalo de Confianca 80%", `R$ ${formatNumber(icInferiorTotal)}`],
    ["LS Intervalo de Confianca 80%", `R$ ${formatNumber(icSuperiorTotal)}`],
  ];

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  function addTitleBlock() {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(state.workName || "Tratamento por Fatores", 14, 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(
      [
        "Metodo Comparativo Direto de Dados de Mercado - Tratamento por Fatores",
        "NBR 14.653-2 - item 8.2.1.4.2",
        `Tipologia: ${getAssetTypeLabel(state.assetType)}`,
        `Area de calculo: ${state.referenceMode === "Terreno" ? "Area territorial" : "Area construida"}`,
        `Fatores ativos: ${visibleFactors.map((factor) => factor.label).join(", ")}`,
        `Emitido em: ${exportedAt}`,
      ],
      14,
      21,
    );
  }

  function addSectionTitle(title, y) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(title, 14, y);
  }

  addTitleBlock();
  addSectionTitle("Planilha de dados de mercado", 52);
  doc.autoTable({
    startY: 55,
    head: [step2Headers],
    body: step2Rows,
    styles: { fontSize: 7.5, cellPadding: 1.8, overflow: "linebreak" },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: 14, right: 14 },
  });

  doc.addPage();
  let currentY = 16;
  addSectionTitle("Homogeneizacao", currentY);
  doc.autoTable({
    startY: currentY + 3,
    head: [step3Headers],
    body: step3Rows,
    styles: { fontSize: 7.5, cellPadding: 1.8, overflow: "linebreak" },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: 14, right: 14 },
  });

  doc.addPage();
  currentY = 16;
  addSectionTitle("Resumo tecnico", currentY);
  doc.autoTable({
    startY: currentY + 3,
    head: [["Estatisticas iniciais", "Valor"]],
    body: initialStatsRows,
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: 14, right: pageWidth / 2 + 4 },
    tableWidth: "wrap",
  });
  doc.autoTable({
    startY: currentY + 3,
    head: [["Apos a homogeneizacao", "Valor"]],
    body: sanitizedStatsRows,
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: pageWidth / 2 + 2, right: 14 },
    tableWidth: "wrap",
  });

  doc.addPage();
  currentY = 16;
  addSectionTitle("Valores calculados", currentY);
  doc.autoTable({
    startY: currentY + 3,
    head: [["Campo", "Conteudo"]],
    body: calculatedValueRows,
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: 14, right: 14 },
  });

  currentY = doc.lastAutoTable.finalY + 10;
  addSectionTitle("Valor adotado", currentY);
  doc.autoTable({
    startY: currentY + 3,
    head: [["Campo", "Conteudo"]],
    body: [
      ["Valor adotado", adoptedValueFormatted],
      ["Justificativa", adoptedJustification],
    ],
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [31, 58, 95] },
    margin: { left: 14, right: 14 },
  });

  const fileName = `${sanitizeFileName(state.workName || "trabalho")}-relatorio.pdf`;
  doc.save(fileName);
  setAppNotice(`Relatorio exportado: ${fileName}`);
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

function getSampleGrade(sampleCount) {
  if (sampleCount >= 12) return "III";
  if (sampleCount >= 5) return "II";
  if (sampleCount >= 3) return "I";
  return "Sem enquadramento";
}

function getFinalFactorRange(sampleCount) {
  if (sampleCount < 5) {
    return { min: 0.8, max: 1.25, grade: "III" };
  }
  const grade = getSampleGrade(sampleCount);
  if (grade === "III") {
    return { min: 0.8, max: 1.25, grade };
  }
  if (grade === "II") {
    return { min: 0.5, max: 2.0, grade };
  }
  return { min: 0.4, max: 2.5, grade: "I" };
}

function getFinalFactorGrade(value, sampleCount = null) {
  if (value == null) return "-";
  if (sampleCount != null && sampleCount < 5) {
    if (value >= 0.8 && value <= 1.25) return "III";
    return "Fora da faixa";
  }
  if (value >= 0.8 && value <= 1.25) return "III";
  if (value >= 0.5 && value <= 2.0) return "II";
  if (value >= 0.4 && value <= 2.5) return "I";
  return "Fora da faixa";
}

function isFinalFactorWithinRange(value, sampleCount) {
  if (value == null) return false;
  const range = getFinalFactorRange(sampleCount);
  return value >= range.min && value <= range.max;
}

function getFinalFactorGradeClass(grade) {
  if (grade === "III") return "grau-iii";
  if (grade === "II") return "grau-ii";
  if (grade === "I") return "grau-i";
  return "grau-fora";
}

function getWorstFinalFactorGrade(lines, sampleCount) {
  const participatingLines = lines.filter(
    (line) => line.papel === "DADO" && line.participa && line.fatorFinal != null,
  );
  const grades = participatingLines.map((line) => getFinalFactorGrade(line.fatorFinal, sampleCount));

  if (sampleCount < 5) {
    const hasOutOfStrictRange = participatingLines.some(
      (line) => !isFinalFactorWithinRange(line.fatorFinal, sampleCount),
    );
    return hasOutOfStrictRange ? "Fora da faixa" : "Grau III";
  }

  if (grades.includes("Fora da faixa")) return "Fora da faixa";
  if (grades.includes("I")) return "Grau I";
  if (grades.includes("II")) return "Grau II";
  if (grades.includes("III")) return "Grau III";
  return "-";
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
      const fon = toNumber(row.fon) ?? (state.dictionaries.fon?.[row.fonTipo] ?? 1);
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
        papel: index === 0 ? "AVALIANDO" : "DADO",
        coeficientes,
        fatorFinal,
        valorUnitario,
        valorUnitarioFon,
        valorHomogeneizado,
        participa: index > 0 && row.incluir,
        zScore: null,
        status: index === 0 ? "AVALIANDO" : row.incluir ? "PENDENTE" : "REJEITADO",
      };
    });

    const initialValues = lines
      .filter((line) => line.papel === "DADO" && line.valorHomogeneizado != null)
      .map((line) => line.valorHomogeneizado);

    if (initialValues.length === 0) {
      setError("Inclua ao menos um dado com valor total e area preenchidos.");
      return;
    }

    const mediaInicial =
      initialValues.reduce((sum, value) => sum + value, 0) / initialValues.length;
    const desvioInicial =
      initialValues.length > 1
        ? Math.sqrt(
            initialValues.reduce((sum, value) => sum + (value - mediaInicial) ** 2, 0) /
              (initialValues.length - 1),
          )
        : 0;
    const participatingLines = lines.filter(
      (line) => line.papel === "DADO" && line.participa && line.valorHomogeneizado != null,
    );
    const participatingValues = participatingLines.map((line) => line.valorHomogeneizado);
    const participatingCount = participatingValues.length;
    const grausChauvenet = Math.max(participatingCount - 1, 2);
    const chauvenetCritico = CHAUVENET[grausChauvenet] ?? 2.31;
    const mediaSelecionada =
      participatingCount > 0
        ? participatingValues.reduce((sum, value) => sum + value, 0) / participatingCount
        : 0;
    const desvioSelecionado =
      participatingCount > 1
        ? Math.sqrt(
            participatingValues.reduce(
              (sum, value) => sum + (value - mediaSelecionada) ** 2,
              0,
            ) /
              (participatingCount - 1),
          )
        : 0;

    lines.forEach((line) => {
      if (line.papel !== "DADO" || line.valorHomogeneizado == null) return;
      if (!line.participa) {
        line.zScore = null;
        line.status = "REJEITADO";
        return;
      }
      line.zScore = desvioSelecionado
        ? Math.abs((line.valorHomogeneizado - mediaSelecionada) / desvioSelecionado)
        : 0;
      line.status = line.zScore > chauvenetCritico ? "REJEITAR" : "ACEITO";
    });

    if (participatingValues.length === 0) {
      setError("Inclua ao menos um dado marcado para participar do modelo.");
      return;
    }

    const mediaSaneada = mediaSelecionada;
    const desvioSaneado =
      participatingCount > 1 ? desvioSelecionado : 0;
    const quantidadeUsada = participatingCount;
    const grausLiberdade = Math.max(quantidadeUsada - 1, 1);
    const tCritico = T_STUDENT_80[grausLiberdade] ?? 1.319;
    const denominadorIC = Math.sqrt(Math.max(quantidadeUsada - 1, 1));
    const margem = tCritico * (desvioSaneado / denominadorIC);
    const icInferior = mediaSaneada - margem;
    const icSuperior = mediaSaneada + margem;
    const valorEstimado = mediaSaneada * areaAvaliando;

    const summary = {
      numeroDadosInicial: initialValues.length,
      mediaInicial,
      desvioInicial,
      valorMaximoInicial: Math.max(...initialValues),
      valorMinimoInicial: Math.min(...initialValues),
      limiteSuperiorInicial: mediaInicial * 1.15,
      limiteInferiorInicial: mediaInicial * 0.85,
      coeficienteVariacaoInicial: mediaInicial ? (desvioInicial / mediaInicial) * 100 : 0,
      numeroDadosSaneados: participatingCount,
      mediaSaneada,
      desvioSaneado,
      valorEstimado,
      arbitrioInferior: mediaSaneada * 0.85,
      arbitrioSuperior: mediaSaneada * 1.15,
      arbitrioInferiorTotal: mediaSaneada * 0.85 * areaAvaliando,
      arbitrioSuperiorTotal: mediaSaneada * 1.15 * areaAvaliando,
      icInferior,
      icSuperior,
      icInferiorTotal: icInferior * areaAvaliando,
      icSuperiorTotal: icSuperior * areaAvaliando,
      areaAvaliando,
      grausLiberdade,
      chauvenetCritico,
      tCritico,
      margemIC: margem,
      amplitudeIC: icSuperior - icInferior,
      amplitudePercentual: mediaSaneada ? ((icSuperior - icInferior) / mediaSaneada) * 100 : 0,
      amostras: `${participatingCount} de ${initialValues.length}`,
      grauAmostra: getSampleGrade(participatingCount),
    };
    renderSummary(summary);
    renderResults(lines, summary);
    bindResultEvents();
    state.lastCalculation = {
      lines: clone(lines),
      summary,
    };
    setAppNotice(`Calculo concluido. Grau de fundamentacao: ${summary.grauAmostra}.`);
  } catch (error) {
    console.error(error);
    setError(`Falha no calculo: ${error instanceof Error ? error.message : error}`);
  }
}

function bindTopControls() {
  el.workName.addEventListener("input", (event) => {
    state.workName = event.target.value;
  });

  el.adoptedValue.addEventListener("input", (event) => {
    state.adoptedValue = event.target.value;
  });

  el.adoptedJustification.addEventListener("input", (event) => {
    state.adoptedJustification = event.target.value;
  });

  el.assetType.addEventListener("change", (event) => {
    state.loadedModelName = "";
    state.adoptedValue = "";
    state.adoptedJustification = "";
    state.assetType = event.target.value;
    state.referenceMode = getSuggestedReferenceMode(state.assetType);
    state.activeFactors = [...DEFAULT_FACTORS[state.assetType]];
    state.dictionariesOpen = false;
    resetRows();
    resetResults();
    renderAll();
  });

  el.addRowButton.addEventListener("click", () => {
    state.rows.push(makeRow(state.rows.length));
    renderEditor();
    bindEditorEvents();
  });

  el.toggleEditorTableButton.addEventListener("click", () => {
    state.expandedTables.editor = !state.expandedTables.editor;
    renderExpandableTables();
  });

  el.toggleResultsTableButton.addEventListener("click", () => {
    state.expandedTables.results = !state.expandedTables.results;
    renderExpandableTables();
  });

  el.referenceConstruida.addEventListener("click", () => {
    state.referenceMode = "Construida";
    renderSelectors();
    renderFactors();
    renderEditor();
    bindFactorEvents();
    bindEditorEvents();
  });

  el.referenceTerreno.addEventListener("click", () => {
    state.referenceMode = "Terreno";
    renderSelectors();
    renderFactors();
    renderEditor();
    bindFactorEvents();
    bindEditorEvents();
  });

  el.loadModelButton.addEventListener("click", () => {
    el.loadModelInput.click();
  });
  el.loadModelInput.addEventListener("change", async (event) => {
    await withProcessing("Carregando trabalho...", () => loadWorkFile(event.target.files?.[0]));
    event.target.value = "";
  });
  el.loadExampleButton.addEventListener("click", () =>
    withProcessing("Carregando exemplo...", async () => {
      loadSelectedExample();
    }),
  );
  el.resetAppButton.addEventListener("click", () => {
    if (!window.confirm("Deseja reiniciar o app e limpar a avaliacao atual?")) return;
    resetAppState();
    setError("");
    setAppNotice("App reiniciado.");
  });

  el.toggleDictionariesButton.addEventListener("click", () => {
    state.dictionariesOpen = !state.dictionariesOpen;
    el.dictionaryPanel.classList.toggle("hidden", !state.dictionariesOpen);
    el.toggleDictionariesButton.textContent = state.dictionariesOpen
      ? "Ocultar coeficientes"
      : "Ajustar coeficientes";
  });

  el.calculateButton.addEventListener("click", () =>
    withProcessing("Calculando...", async () => {
      calculate();
    }),
  );
  el.recalculateButton.addEventListener("click", () =>
    withProcessing("Recalculando...", async () => {
      calculate();
    }),
  );
  el.saveWorkButton.addEventListener("click", () =>
    withProcessing("Salvando trabalho...", async () => {
      saveWorkFile();
    }),
  );
  el.previewReportButton.addEventListener("click", () => {
    renderReportPreview();
  });
  el.exportWordButton.addEventListener("click", () =>
    withProcessing("Gerando Word...", async () => {
      exportWordReport();
    }),
  );
  el.exportReportButton.addEventListener("click", () =>
    withProcessing("Gerando PDF...", async () => {
      exportPdfReport();
    }),
  );
  el.saveCustomFactorButton.addEventListener("click", saveCustomFactor);
}

function bindFactorEvents() {
  if (el.factorList.dataset.bound === "true") return;
  el.factorList.dataset.bound = "true";

  el.factorList.addEventListener("change", (event) => {
    const input = event.target.closest("[data-factor]");
    if (!input) return;
    updateFactorSelection(input.dataset.factor, input.checked);
  });

  el.factorList.addEventListener("click", (event) => {
    if (event.target.closest("input")) return;
    const card = event.target.closest("[data-factor-card]");
    if (!card) return;
    const factorId = card.dataset.factorCard;
    if (!factorId || factorId === getEssentialFactor()) return;
    const input = card.querySelector("[data-factor]");
    if (!input) return;
    updateFactorSelection(factorId, !input.checked);
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
      if (dictionaryName === "fon") {
        state.rows.forEach((row) => {
          if (row.fonTipo === optionName) {
            syncFonValue(row);
          }
        });
      }
      renderContextNotices();
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
        renderEditor();
        bindEditorEvents();
      } else {
        row[basicKey] = event.target.value;
        if (basicKey === "fonTipo") {
          syncFonValue(row);
          renderEditor();
          bindEditorEvents();
        }
      }
    });

    if (input.type !== "checkbox" && !input.disabled) {
      input.addEventListener("paste", (event) => {
        const clipboardText = event.clipboardData?.getData("text") || "";
        const values = normalizePastedLines(clipboardText);
        if (values.length <= 1) return;
        event.preventDefault();
        applyColumnPaste(input.dataset.rowId, input.dataset.basic, values, "basic");
      });
    }
  });

  el.editorBody.querySelectorAll("[data-factor-id]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      const rowId = event.target.dataset.rowId;
      const factorId = event.target.dataset.factorId;
      const row = state.rows.find((item) => item.id === rowId);
      if (!row) return;
      row.campos[factorId] =
        factorId === "prof_equivalente"
          ? formatEditableDecimal(event.target.value, 2)
          : event.target.value;
    });

    if (!input.disabled) {
      input.addEventListener("paste", (event) => {
        const clipboardText = event.clipboardData?.getData("text") || "";
        const values = normalizePastedLines(clipboardText);
        if (values.length <= 1) return;
        event.preventDefault();
        applyColumnPaste(input.dataset.rowId, input.dataset.factorId, values, "factor");
      });
    }
  });

  el.editorBody.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rowId = event.target.dataset.removeId;
      if (state.rows.length <= 2) return;
      state.rows = state.rows.filter((row) => row.id !== rowId);
      state.rows = state.rows.map((row, index) => ({
        ...row,
        id: String(index + 1),
        papel: index === 0 ? "avaliando" : "dado",
        incluir: index === 0 ? false : row.incluir,
      }));
      renderEditor();
      bindEditorEvents();
    });
  });
}

function bindResultEvents() {
  el.resultBody.querySelectorAll("[data-result-include-id]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const rowId = event.target.dataset.resultIncludeId;
      const row = state.rows.find((item) => item.id === rowId);
      if (!row || row.id === "1") return;
      row.incluir = event.target.checked;
      renderEditor();
      bindEditorEvents();
      if (state.lastCalculation) {
        calculate();
      }
    });
  });
}

function closeInfoPopovers() {
  document.querySelectorAll("[data-info-panel]").forEach((panel) => {
    panel.classList.add("hidden");
  });
  document.querySelectorAll("[data-info-toggle]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function bindInfoPopovers() {
  if (document.body.dataset.infoPopoversBound === "true") return;
  document.body.dataset.infoPopoversBound = "true";

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-info-toggle]");
    if (toggle) {
      const key = toggle.dataset.infoToggle;
      const panel = document.querySelector(`[data-info-panel="${key}"]`);
      if (!panel) return;
      const shouldOpen = panel.classList.contains("hidden");
      closeInfoPopovers();
      if (shouldOpen) {
        panel.classList.remove("hidden");
        toggle.setAttribute("aria-expanded", "true");
      }
      return;
    }

    if (!event.target.closest(".th-info")) {
      closeInfoPopovers();
    }
  });
}

function renderAll() {
  renderPanelStates();
  renderSelectors();
  renderFactors();
  renderEditor();
  renderDictionaries();
  renderExpandableTables();
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
      ? ["terreno", "gleba", "apartamento", "sala", "casa", "loja", "predio", "galpao"]
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
  renderContextNotices();
  setAppNotice(`Fator personalizado salvo: ${label}.`);
  renderAll();
  bindFactorEvents();
  bindDictionaryEvents();
  bindEditorEvents();
}

function bootstrap() {
  try {
    state.referenceMode = getSuggestedReferenceMode(state.assetType);
    state.collapsedSteps = {};
    resetRows();
    resetResults();
    renderAll();
    bindTopControls();
    bindFactorEvents();
    bindDictionaryEvents();
    bindEditorEvents();
    bindStepNavigation();
    bindInfoPopovers();
  } catch (error) {
    console.error(error);
    setError(`Falha ao iniciar o app: ${error instanceof Error ? error.message : error}`);
  }
}

bootstrap();
