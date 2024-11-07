// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
//   }
//   setInterval(setTime, 1000);
//   console.log("Program Finish");

function divideNumbers(a, b) {
  try {
    // Memeriksa apakah input adalah angka
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Input harus berupa angka.");
    }

    // Memeriksa apakah pembagi adalah nol
    if (b === 0) {
      throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }

    // Jika semua pemeriksaan terpenuhi, lakukan pembagian
    return a / b;
  } catch (error) {
    // Mengembalikan pesan kesalahan
    return error.message;
  }
}

function handleDivision() {
  // Mengambil nilai input dan mengonversi menjadi angka
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);

  // Memanggil fungsi divideNumbers dan menyimpan hasilnya
  const result = divideNumbers(num1, num2);

  // Menampilkan hasil atau pesan kesalahan
  document.getElementById("result").textContent = `Hasil: ${result}`;
}
