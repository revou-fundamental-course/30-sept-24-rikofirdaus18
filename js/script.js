function konversiSuhu() {
  const suhu = parseFloat(document.getElementById("suhu").value);
  const dariSatuan = document.getElementById("dari-satuan").value;
  const keSatuan = document.getElementById("ke-satuan").value;

  let hasil;
  let penjelasanManual = "";
  let rumus = "";

  if (isNaN(suhu)) {
    alert("Masukkan suhu yang valid.");
    return;
  }

  if (dariSatuan === keSatuan) {
    alert("Satuan asal dan tujuan tidak boleh sama.");
    return;
  }

  // Konversi ke Celsius dulu
  let suhuDalamCelsius;
  switch (dariSatuan) {
    case "C":
      suhuDalamCelsius = suhu;
      break;
    case "F":
      suhuDalamCelsius = ((suhu - 32) * 5) / 9;
      penjelasanManual += `${suhu}°F dikonversi ke Celsius: (${suhu} - 32) × 5/9 = ${suhuDalamCelsius.toFixed(
        2
      )}°C.<br>`;
      rumus += "Rumus: (°F - 32) × 5/9 = °C";
      break;
    case "K":
      suhuDalamCelsius = suhu - 273.15;
      penjelasanManual += `${suhu}K dikonversi ke Celsius: ${suhu} - 273.15 = ${suhuDalamCelsius.toFixed(
        2
      )}°C.<br>`;
      rumus += "Rumus: K - 273.15 = °C";
      break;
    case "R":
      suhuDalamCelsius = (suhu * 5) / 4;
      penjelasanManual += `${suhu}°R dikonversi ke Celsius: ${suhu} × 5/4 = ${suhuDalamCelsius.toFixed(
        2
      )}°C.<br>`;
      rumus += "Rumus: °R × 5/4 = °C";
      break;
  }

  // Konversi dari Celsius ke satuan yang dipilih
  switch (keSatuan) {
    case "C":
      hasil = suhuDalamCelsius;
      penjelasanManual += `Hasil sudah dalam Celsius: ${hasil.toFixed(
        2
      )}°C.<br>`;
      break;
    case "F":
      hasil = (suhuDalamCelsius * 9) / 5 + 32;
      penjelasanManual += `${suhuDalamCelsius.toFixed(
        2
      )}°C dikonversi ke Fahrenheit: (${suhuDalamCelsius.toFixed(
        2
      )} × 9/5) + 32 = ${hasil.toFixed(2)}°F.<br>`;
      rumus += "<br>Rumus: (°C × 9/5) + 32 = °F";
      break;
    case "K":
      hasil = suhuDalamCelsius + 273.15;
      penjelasanManual += `${suhuDalamCelsius.toFixed(
        2
      )}°C dikonversi ke Kelvin: ${suhuDalamCelsius.toFixed(
        2
      )} + 273.15 = ${hasil.toFixed(2)}K.<br>`;
      rumus += "<br>Rumus: °C + 273.15 = K";
      break;
    case "R":
      hasil = (suhuDalamCelsius * 4) / 5;
      penjelasanManual += `${suhuDalamCelsius.toFixed(
        2
      )}°C dikonversi ke Reamur: ${suhuDalamCelsius.toFixed(
        2
      )} × 4/5 = ${hasil.toFixed(2)}°R.<br>`;
      rumus += "<br>Rumus: °C × 4/5 = °R";
      break;
  }

  document.getElementById(
    "hasil"
  ).innerHTML = `${suhu}°${dariSatuan} adalah ${hasil.toFixed(2)}°${keSatuan}`;
  document.getElementById(
    "penjelasan"
  ).innerHTML = `<strong>Perhitungan Manual:</strong><br>${penjelasanManual}<br><strong>Rumus:</strong><br>${rumus}`;
}

function resetHasil() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("penjelasan").innerHTML = "";
}
