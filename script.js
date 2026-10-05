/* Personalização por link: ?wa=5511999998888&nome=Nome%20do%20Hotel */
const params = new URLSearchParams(location.search);
const WA = (params.get("wa") || "5500900000000").replace(/\D/g, "");
const NOME = params.get("nome");
const waUrl = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const fmtPhone = n => {
  const d = n.replace(/^55/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
       : d.length === 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : n;
};

if (NOME) {
  document.querySelectorAll("[data-brand]").forEach(el => (el.textContent = NOME));
  document.title = NOME + " | Durma bem, acorde pronto";
}
document.querySelectorAll("a[data-wa]").forEach(a => (a.href = waUrl(a.dataset.wa)));
if (params.get("wa")) document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = fmtPhone(WA)));

/* Reserva: valida as datas e abre o WhatsApp com a consulta pronta */
const form = document.getElementById("reserva");
const err = document.getElementById("err");
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const br = s => s.split("-").reverse().join("/");
const dia = 86400000;

const hoje = new Date();
form.entrada.min = iso(hoje);
form.saida.min = iso(new Date(hoje.getTime() + dia));
form.entrada.addEventListener("change", () => {
  if (!form.entrada.value) return;
  const prox = new Date(new Date(form.entrada.value + "T12:00").getTime() + dia);
  form.saida.min = iso(prox);
  if (form.saida.value && form.saida.value <= form.entrada.value) form.saida.value = iso(prox);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const { entrada, saida, hospedes, unidade, promo } = form;
  let msg = "";
  if (!entrada.value || !saida.value) msg = "Escolha a data de entrada e a de saída.";
  else if (entrada.value < iso(new Date())) msg = "A entrada não pode ser em uma data passada.";
  else if (saida.value <= entrada.value) msg = "A saída precisa ser depois da entrada.";
  err.hidden = !msg;
  err.textContent = msg;
  if (msg) return;
  const noites = Math.round((new Date(saida.value) - new Date(entrada.value)) / dia);
  const n = hospedes.value;
  const cod = promo.value.trim();
  const texto = `Olá! Gostaria de consultar disponibilidade na unidade ${unidade.value} de ${br(entrada.value)} a ${br(saida.value)} (${noites} ${noites > 1 ? "noites" : "noite"}) para ${n} ${n === "1" ? "hóspede" : "hóspedes"}.` + (cod ? ` Código promocional: ${cod}.` : "");
  window.open(waUrl(texto), "_blank", "noopener");
});

/* Menu no celular */
const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
const fecha = () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
btn.addEventListener("click", () => {
  const abre = !menu.classList.contains("open");
  menu.classList.toggle("open", abre);
  btn.setAttribute("aria-expanded", String(abre));
});
menu.addEventListener("click", e => { if (e.target.closest("a")) fecha(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") fecha(); });
