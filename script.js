// Fungsi untuk memformat angka dengan tanda ribuan
function formatInput(inputElement) {
  let rawValue = inputElement.value.replace(/\D/g, ""); // Hapus non-angka
  let formattedValue = new Intl.NumberFormat('id-ID').format(rawValue); // Format angka
  inputElement.value = formattedValue;
}

// Fungsi untuk menghitung total biaya
function calculateTotal() {
  const transport = parseInt(document.getElementById("transport").value.replace(/\D/g, "")) || 0;
  const accommodation = parseInt(document.getElementById("accommodation").value.replace(/\D/g, "")) || 0;
  const nights = parseInt(document.getElementById("nights").value) || 0;
  const food = parseInt(document.getElementById("food").value.replace(/\D/g, "")) || 0;
  const activities = parseInt(document.getElementById("activities").value.replace(/\D/g, "")) || 0;
  const snacking = parseInt(document.getElementById("snacking").value.replace(/\D/g, "")) || 0;

  const totalCost = transport + (accommodation * nights) + (food * nights) + activities + snacking;

  document.getElementById("total-cost").textContent = `Rp ${new Intl.NumberFormat('id-ID').format(totalCost)}`;
}

// Fungsi untuk mengganti bahasa
function changeLanguage() {
  const language = document.getElementById("language").value;

  const translations = {
    id: {
      appTitle: "Kalkulator Perjalanan",
      formTitle: "Kalkulator Biaya Liburan",
      labelLanguage: "Pilih Bahasa:",
      labelTransport: "Biaya Transportasi (Rp):",
      labelAccommodation: "Biaya Penginapan per Malam (Rp):",
      labelNights: "Jumlah Malam Menginap:",
      labelFood: "Biaya Makan per Hari (Rp):",
      labelActivities: "Biaya Aktivitas (Rp):",
      labelSnacking: "Biaya Jajan Cemilan (Rp):",
      resultTitle: "Total Biaya Liburan:",
      calculateButton: "Hitung Total Biaya",
    },
    en: {
      appTitle: "Journey Calculator",
      formTitle: "Vacation Cost Calculator",
      labelLanguage: "Choose Language:",
      labelTransport: "Transportation Cost (Rp):",
      labelAccommodation: "Accommodation per Night (Rp):",
      labelNights: "Number of Nights:",
      labelFood: "Meal Cost per Day (Rp):",
      labelActivities: "Activity Cost (Rp):",
      labelSnacking: "Snack Cost (Rp):",
      resultTitle: "Total Vacation Cost:",
      calculateButton: "Calculate Total Cost",
    },
  };

  const selectedLanguage = translations[language];

  document.getElementById("app-title").textContent = selectedLanguage.appTitle;
  document.getElementById("form-title").textContent = selectedLanguage.formTitle;
  document.getElementById("label-language").textContent = selectedLanguage.labelLanguage;
  document.getElementById("label-transport").textContent = selectedLanguage.labelTransport;
  document.getElementById("label-accommodation").textContent = selectedLanguage.labelAccommodation;
  document.getElementById("label-nights").textContent = selectedLanguage.labelNights;
  document.getElementById("label-food").textContent = selectedLanguage.labelFood;
  document.getElementById("label-activities").textContent = selectedLanguage.labelActivities;
  document.getElementById("label-snacking").textContent = selectedLanguage.labelSnacking;
  document.getElementById("result-title").textContent = selectedLanguage.resultTitle;
  document.getElementById("calculate-btn").textContent = selectedLanguage.calculateButton;
}
