export function formaterDateFR(dateStr) {
  var parties = dateStr.split("-");
  var annee = parties[0];
  var mois = parties[1];
  var jour = parties[2];
  return jour + "/" + mois + "/" + annee;
}
