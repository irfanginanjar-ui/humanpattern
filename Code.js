const SPREADSHEET_ID = "1jfrn54bF-yj_LOCmS7pUzm5IxTXB-Tq-frrBCoVFLw8";

function testAuth() {
  UrlFetchApp.fetch("https://oauth2.googleapis.com/tokeninfo");
}

// ==========================================
// 1. API ROUTER & INITIALIZATION
// ==========================================
function ensureSheetsExist(ss) {
  if(!ss.getSheetByName("Praktisi")) {
     ss.insertSheet("Praktisi").appendRow(["Nama", "Email", "Sisa Kredit", "Assessment Digunakan", "Foto", "Alamat", "WhatsApp", "Deskripsi"]);
  }
  if(!ss.getSheetByName("Riwayat Kredit")) {
     ss.insertSheet("Riwayat Kredit").appendRow(["Tanggal", "Email Praktisi", "Jenis Transaksi", "Jumlah Kredit", "Saldo Akhir", "Keterangan"]);
  }
  if(!ss.getSheetByName("Asesmen Links")) {
     ss.insertSheet("Asesmen Links").appendRow(["Token", "Email Praktisi", "Kategori", "Status", "Nama Klien", "Tanggal Dibuat", "Tanggal Digunakan"]);
  }
  if(!ss.getSheetByName("Group Links")) {
     ss.insertSheet("Group Links").appendRow(["Token", "Email Praktisi", "Nama Group", "Kategori", "Quota", "Terpakai", "Status", "Tanggal Dibuat"]);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "API HumanPattern™ Berjalan Lancar dengan Sistem Kredit & Multi-Kategori Usia!" })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  let result = { success: false, message: "Aksi tidak dikenali" };
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    ensureSheetsExist(ss);

    let params = JSON.parse(e.postData.contents);
    let action = params.action;
    let type = params.type ? params.type.toLowerCase() : "dewasa";
    
    // --- ROUTING DATA BERDASARKAN USIA ---
    if (action === "getNLPData") { 
      if (type === "remaja") {
        result = { 
          success: true, 
          data: { 
            questions: QUESTIONS_REMAJA, 
            kb: KNOWLEDGE_BASE_PREMIUM_REMAJA, 
            kbDewasa: KNOWLEDGE_BASE_PREMIUM,
            interpretation: INTERPRETATION_ENGINE_REMAJA, 
            narrative: NarrativeEngineRemaja, 
            career: CAREER_COMPASS_ENGINE
          } 
        };
      } else if (type === "anak") {
        result = { success: true, data: { questions: QUESTIONS_ANAK, kb: KNOWLEDGE_BASE_ANAK, kbDewasa: KNOWLEDGE_BASE_PREMIUM, interpretation: INTERPRETATION_ENGINE_ANAK, narrative: NARRATIVE_ENGINE_ANAK, career: CAREER_ENGINE_ANAK } };
      } else {
        // Default (Dewasa)
        result = { success: true, data: { questions: QUESTIONS, kb: KNOWLEDGE_BASE_PREMIUM, kbDewasa: KNOWLEDGE_BASE_PREMIUM, interpretation: INTERPRETATION_ENGINE, narrative: NARRATIVE_ENGINE, career: CAREER_ENGINE } }; 
      }
    } 
    // --- AKSI LAINNYA ---
    else if (action === "login") { result = loginUser(params.email, params.password); } 
    else if (action === "loginGoogle") { result = loginGoogle(params.idToken); }
    else if (action === "register") { result = registerUser(params.data); } 
    else if (action === "getAdminData") { result = { success: true, data: getAdminDashboardData() }; } 
    else if (action === "approveUser") { result = changeUserStatus(params.row, params.status); } 
    else if (action === "getPraktisiData") { result = { success: true, data: getPraktisiDashboardData(params.email) }; } 
    else if (action === "simpanPeserta") { result = { success: true, message: simpanPeserta(params.nama, params.email, params.wa, params.instansi, params.emailPraktisi) }; } 
    else if (action === "simpanHasil") { result = simpanHasil(params.data, type); } 
    else if (action === "getExportData") { result = { success: true, data: getExportData(params.type, params.email) }; }
    else if (action === "checkCredit") { result = checkCredit(params.emailPraktisi); }
    else if (action === "kelolaKredit") { result = kelolaKredit(params.email, params.jenis, params.jumlah, params.keterangan, params.durasiBulan); }
    else if (action === "hapusHasilKlien") { result = hapusHasilKlien(params.rowNum); }
    else if (action === "getClientScores") { result = getClientScores(params.rowNum); }
    else if (action === "getPublicPraktisiList") { result = getPublicPraktisiList(); }
    else if (action === "updatePraktisiProfil") { result = updatePraktisiProfil(params.email, params.data); }
    else if (action === "tambahPraktisiBaru") { result = tambahPraktisiBaru(params.data); }
    else if (action === "buatLinkAsesmen") { result = buatLinkAsesmen(params.emailPraktisi, params.kategori, params.namaKlien); }
    else if (action === "validateToken") { result = validateToken(params.token); }
    else if (action === "updateAsesmenLink") { result = updateAsesmenLink(params.token, params.emailPraktisi, params.namaKlien, params.kategori); }
    else if (action === "buatGroupAsesmen") { result = buatGroupAsesmen(params.emailPraktisi, params.namaGroup, params.kategori, params.quota); }
    else if (action === "tutupGroupAsesmen") { result = tutupGroupAsesmen(params.token, params.emailPraktisi); }
    else if (action === "validateGroupToken") { result = validateGroupToken(params.token); }
    else if (action === "updateGroupAsesmen") { result = updateGroupAsesmen(params.token, params.emailPraktisi, params.namaGroup, params.kategori); }
    else if (action === "editGroupQuota") { result = editGroupQuota(params.token, params.quota); }
    
  } catch (error) {
    result = { success: false, message: "Kesalahan server: " + error.message };
  }
  
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

// ==========================================
// 2. SISTEM KREDIT PRAKTISI
// ==========================================
function checkCredit(email) {
   let emailLower = email.toLowerCase();
   if (emailLower === "admin" || emailLower === "superadmin" || emailLower === "admin@humanpattern.com" || emailLower.includes("admin")) {
      return {success: true};
   }
   const pSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Praktisi");
   let data = pSheet.getDataRange().getValues();    
   let targetEmail = (email || "").toString().trim().toLowerCase();
   for(let i=1; i<data.length; i++) {
      let dbEmail = (data[i][1] || "").toString().trim().toLowerCase();
      if(dbEmail === targetEmail) {
         let regulerSisa = parseInt(data[i][2]) || 0;
         let freeSisa = 0;
         let freeExpiredStr = "";
         if (data[i].length > 8 && data[i][8] !== "") {
            freeSisa = parseInt(data[i][8]) || 0;
         }
         if (data[i].length > 9 && data[i][9] !== "") {
            freeExpiredStr = String(data[i][9]);
         }
         
         let now = new Date();
         let isFreeActive = freeSisa > 0 && (!freeExpiredStr || new Date(freeExpiredStr) >= now);
         
         if (regulerSisa > 0 || isFreeActive) {
            return {success: true};
         }
         return {success: false, kreditHabis: true};
      }
   }
   return {success: false, kreditHabis: true}; 
}

function kelolaKredit(email, jenis, jumlah, keterangan, durasiBulan) {
   const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
   const pSheet = ss.getSheetByName("Praktisi");
   const rSheet = ss.getSheetByName("Riwayat Kredit");

   let data = pSheet.getDataRange().getValues();
   let rowIndex = -1; 
   let regulerSisa = 0; 
   let digunakan = 0;
   let freeSisa = 0;
   let freeExpiredStr = "";
   let targetEmail = (email || "").toString().trim().toLowerCase();

   for(let i=1; i<data.length; i++) {
      let dbEmail = (data[i][1] || "").toString().trim().toLowerCase();
      if(dbEmail === targetEmail) { 
         rowIndex = i + 1; 
         regulerSisa = parseInt(data[i][2]) || 0; 
         digunakan = parseInt(data[i][3]) || 0; 
         if (data[i].length > 8 && data[i][8] !== "") {
            freeSisa = parseInt(data[i][8]) || 0;
         }
         if (data[i].length > 9 && data[i][9] !== "") {
            freeExpiredStr = String(data[i][9]);
         }
         break; 
      }
   }
   if(rowIndex === -1) return {success:false, message: "Praktisi tidak ditemukan di Database."};

   let numJumlah = parseInt(jumlah);
   let now = new Date();
   
   if (freeExpiredStr && new Date(freeExpiredStr) < now) {
      freeSisa = 0; 
   }

   if (jenis === "Top Up" || jenis === "Top Up Reguler") {
      let regulerBaru = regulerSisa + numJumlah;
      pSheet.getRange(rowIndex, 3).setValue(regulerBaru);
      rSheet.appendRow([new Date(), email, "Top Up Reguler", numJumlah, regulerBaru, keterangan]);
      return {success:true, message: "Kredit reguler berhasil ditambahkan!"};
   } 
   else if (jenis === "Kurangi" || jenis === "Kurangi Reguler") {
      if (numJumlah > regulerSisa) return {success:false, message: "Kredit reguler yang dikurangi melebihi saldo reguler."};
      let regulerBaru = regulerSisa - numJumlah;
      pSheet.getRange(rowIndex, 3).setValue(regulerBaru);
      rSheet.appendRow([new Date(), email, "Kurangi Reguler", -numJumlah, regulerBaru, keterangan]);
      return {success:true, message: "Kredit reguler berhasil dikurangi!"};
   } 
   else if (jenis === "Top Up Berjangka") {
      let freeBaru = freeSisa + numJumlah;
      let expiredDate = new Date();
      expiredDate.setMonth(expiredDate.getMonth() + parseInt(durasiBulan || 1));
      
      pSheet.getRange(rowIndex, 9).setValue(freeBaru);
      pSheet.getRange(rowIndex, 10).setValue(expiredDate.toISOString());
      
      let expiredStr = Utilities.formatDate(expiredDate, Session.getScriptTimeZone(), "dd-MM-yyyy HH:mm");
      rSheet.appendRow([new Date(), email, "Top Up Berjangka", numJumlah, freeBaru, keterangan + " (Berlaku s/d " + expiredStr + ")"]);
      return {success:true, message: "Kredit berjangka (free) berhasil ditambahkan sampai " + expiredStr + "!"};
   } 
   else if (jenis === "Kurangi Berjangka") {
      if (numJumlah > freeSisa) return {success:false, message: "Kredit berjangka yang dikurangi melebihi saldo berjangka saat ini."};
      let freeBaru = freeSisa - numJumlah;
      pSheet.getRange(rowIndex, 9).setValue(freeBaru);
      rSheet.appendRow([new Date(), email, "Kurangi Berjangka", -numJumlah, freeBaru, keterangan]);
      return {success:true, message: "Kredit berjangka (free) berhasil dikurangi!"};
   }

   return {success:false, message: "Jenis transaksi tidak dikenali."};
}

// ==========================================
// 3. FUNGSI DATABASE UTAMA
// ==========================================
function registerUser(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Users");
  const existingData = sheet.getDataRange().getValues();
  let newEmail = (data.email || "").toString().trim().toLowerCase();
  for (let i = 1; i < existingData.length; i++) { 
    let dbEmail = (existingData[i][1] || "").toString().trim().toLowerCase();
    if (dbEmail === newEmail) return { success: false, message: "Email ini sudah terdaftar." }; 
  }
  sheet.appendRow([new Date(), data.email.toString().trim(), data.password.toString().trim(), data.nama.toString().trim(), data.wa.toString().trim(), data.instansi.toString().trim(), "Praktisi", "Pending"]);
  return { success: true, message: "Pendaftaran berhasil. Menunggu persetujuan Admin." };
}

function loginUser(email, password) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Users");
  const data = sheet.getDataRange().getValues();
  let targetEmail = (email || "").toString().trim().toLowerCase();
  let targetPass = (password || "").toString().trim();
  for (let i = 1; i < data.length; i++) {
    let dbEmail = (data[i][1] || "").toString().trim().toLowerCase();
    let dbPass = (data[i][2] || "").toString().trim();
    if (dbEmail === targetEmail && dbPass === targetPass) { 
      return { 
        success: true, 
        user: { 
          email: data[i][1].toString().trim(), 
          nama: data[i][3].toString().trim(), 
          role: data[i][6].toString().trim(), 
          status: data[i][7].toString().trim() 
        } 
      }; 
    }
  }
  return { success: false, message: "Email atau Password salah." };
}

function verifyGoogleToken(idToken) {
  try {
    let url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken);
    let response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    let responseText = response.getContentText();
    let json = JSON.parse(responseText);
    if (json.email) {
      return { success: true, email: json.email, name: json.name || "" };
    } else {
      return { success: false, error: json.error_description || json.error || responseText };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

function loginGoogle(idToken) {
  let verification = verifyGoogleToken(idToken);
  if (!verification.success) {
    return { success: false, message: "Verifikasi akun Google gagal: " + (verification.error || "Token tidak valid atau kedaluwarsa.") };
  }
  
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Users");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][1].toLowerCase() === verification.email.toLowerCase()) {
      return { 
        success: true, 
        user: { 
          email: data[i][1], 
          nama: data[i][3], 
          role: data[i][6], 
          status: data[i][7] 
        } 
      };
    }
  }
  
  return { success: false, message: "Akun Google Anda (" + verification.email + ") belum terdaftar di platform. Silakan mendaftar terlebih dahulu." };
}

function getAdminDashboardData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const userSheet = ss.getSheetByName("Users"); const hasilSheet = ss.getSheetByName("hasil"); const pSheet = ss.getSheetByName("Praktisi"); const rSheet = ss.getSheetByName("Riwayat Kredit");
  const userData = userSheet ? userSheet.getDataRange().getValues() : [];
  
  // OPTIMISASI BACA DATA: Membaca secara selektif kolom 1-2 dan 4-9 untuk menghindari overload pembacaan JSON scores di kolom 3
  let hasilDataLength = 0;
  let daftarKlien = [];
  if (hasilSheet) {
    const lastRow = hasilSheet.getLastRow();
    hasilDataLength = lastRow > 1 ? lastRow - 1 : 0;
    if (lastRow > 1) {
      const range1 = hasilSheet.getRange(1, 1, lastRow, 2).getValues();
      const range2 = hasilSheet.getRange(1, 4, lastRow, 6).getValues();
      for (let i = 1; i < lastRow; i++) {
        let tipe = range2[i][5] ? range2[i][5].toUpperCase() : "DEWASA";
        daftarKlien.push({
          rowNum: i + 1,
          tanggal: String(range1[i][0]),
          nama_peserta: range1[i][1],
          top_profile: range2[i][1] || "-",
          wa: range2[i][2] || "-",
          instansi: range2[i][3] || "-",
          tipe_asesmen: tipe,
          praktisi: range2[i][0] || "Mandiri"
        });
      }
    }
  }

  let pData = pSheet ? pSheet.getDataRange().getValues() : [];
  
  let pEmails = pData.map(r => r[1]);
  for (let i = 1; i < userData.length; i++) {
      if (userData[i][6] === "Praktisi" && userData[i][7] === "Approved" && !pEmails.includes(userData[i][1])) {
         pSheet.appendRow([userData[i][3], userData[i][1], 0, 0]); pEmails.push(userData[i][1]);
      }
  }
  pData = pSheet.getDataRange().getValues();

  let totalPraktisi = 0; let praktisiPending = []; let semuaPraktisi = [];
  if(userData.length > 0) {
    for (let i = 1; i < userData.length; i++) {
      if (userData[i][6] === "Praktisi") {
        totalPraktisi++;
        let userObj = { row: i + 1, tanggal: String(userData[i][0]), email: userData[i][1], nama: userData[i][3], wa: userData[i][4], instansi: userData[i][5], status: userData[i][7] };
        semuaPraktisi.push(userObj); if (userData[i][7] === "Pending") praktisiPending.push(userObj);
      }
    }
  }

  let praktisiKreditList = [];
  let now = new Date();
  for(let i=1; i<pData.length; i++){ 
    let tempFree = 0;
    let tempExpired = "";
    if (pData[i].length > 8 && pData[i][8] !== "") {
      tempFree = parseInt(pData[i][8]) || 0;
    }
    if (pData[i].length > 9 && pData[i][9] !== "") {
      tempExpired = String(pData[i][9]);
    }
    
    if (tempExpired && new Date(tempExpired) < now) {
      tempFree = 0; 
    }

    praktisiKreditList.push({ 
      nama: pData[i][0], 
      email: pData[i][1], 
      sisa: pData[i][2], 
      digunakan: pData[i][3],
      freeKredit: tempFree,
      freeExpired: tempExpired,
      foto: pData[i][4] || "",
      alamat: pData[i][5] || "",
      wa: pData[i][6] || "",
      deskripsi: pData[i][7] || ""
    }); 
  }

  let riwayatGlobal = [];
  const rData = rSheet ? rSheet.getDataRange().getValues() : [];
  for(let i=rData.length-1; i>0; i--){ riwayatGlobal.push({ tanggal: String(rData[i][0]), praktisi: rData[i][1], jenis: rData[i][2], jumlah: rData[i][3], saldo: rData[i][4], ket: rData[i][5] }); }

  let daftarGroup = [];
  const gSheet = ss.getSheetByName("Group Links");
  if (gSheet) {
    const gData = gSheet.getDataRange().getValues();
    for (let i = gData.length - 1; i > 0; i--) {
      let emailOwner = gData[i][1];
      if (emailOwner === "admin" || emailOwner === "superadmin" || emailOwner === "admin@humanpattern.com" || emailOwner.toLowerCase().includes("admin")) {
        daftarGroup.push({
          token: gData[i][0],
          emailPraktisi: gData[i][1],
          namaGroup: gData[i][2],
          kategori: gData[i][3],
          quota: gData[i][4],
          terpakai: gData[i][5],
          status: gData[i][6],
          tanggalDibuat: String(gData[i][7])
        });
      }
    }
  }

  return { stats: { totalPraktisi: totalPraktisi, totalPeserta: hasilDataLength, totalPending: praktisiPending.length }, praktisiPending: praktisiPending, praktisiKreditList: praktisiKreditList, riwayatGlobal: riwayatGlobal, daftarGroup: daftarGroup, daftarKlien: daftarKlien };
}

function changeUserStatus(rowIndex, newStatus) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Users");
  sheet.getRange(rowIndex, 8).setValue(newStatus);
  return { success: true, message: "Status diubah menjadi " + newStatus };
}

function getExportData(exportType, emailPraktisi = "") {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  if (exportType === 'praktisi') return ss.getSheetByName("Users").getDataRange().getValues();
  if (exportType === 'peserta') return ss.getSheetByName("hasil").getDataRange().getValues();
  if (exportType === 'klien_praktisi') {
    const data = ss.getSheetByName("hasil").getDataRange().getValues();
    let exportData = [["Tanggal", "Nama Peserta", "Email Peserta", "WhatsApp", "Instansi", "Tipe Asesmen", "Top Profil Dominan", "Email Praktisi"]];
    for (let i = 1; i < data.length; i++) {
      if (data[i][3] === emailPraktisi) {
        exportData.push([ String(data[i][0]), data[i][1], (data[i][7] || "-"), (data[i][5] || "-"), (data[i][6] || "-"), (data[i][8] || "Dewasa"), (data[i][4] || "-"), data[i][3] ]);
      }
    }
    return exportData;
  }
  return [];
}

function getPraktisiDashboardData(emailPraktisi) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  // OPTIMISASI BACA DATA: Hindari membaca kolom 3 (Scores) yang berisi data JSON raksasa untuk mempercepat loading dashboard!
  const hasilSheet = ss.getSheetByName("hasil");
  const lastRow = hasilSheet.getLastRow();
  let myClients = [];
  
  if (lastRow > 1) {
    // Baca kolom 1-2 (Tanggal, Nama) dan kolom 4-9 (Praktisi, TopProfile, WA, Instansi, Email, Tipe)
    const range1 = hasilSheet.getRange(1, 1, lastRow, 2).getValues();
    const range2 = hasilSheet.getRange(1, 4, lastRow, 6).getValues();
    
    for (let i = 1; i < lastRow; i++) {
      if (range2[i][0] === emailPraktisi) { 
        let tipe = range2[i][5] ? range2[i][5].toUpperCase() : "DEWASA";
        myClients.push({ 
          rowNum: i + 1,
          tanggal: String(range1[i][0]), 
          nama_peserta: range1[i][1], 
          top_profile: range2[i][1] || "-", 
          wa: range2[i][2] || "-", 
          instansi: range2[i][3] || "-", 
          email_peserta: range2[i][4] || "-",
          tipe_asesmen: tipe 
        }); 
      }
    }
  }

  const pData = ss.getSheetByName("Praktisi").getDataRange().getValues();
  let sisaKredit = 0; let digunakan = 0;
  let freeKredit = 0;
  let freeExpired = "";
  let profil = { foto: "", alamat: "", wa: "", deskripsi: "" };
  let now = new Date();
  
  for(let i=1; i<pData.length; i++){ 
    let dbEmail = (pData[i][1] || "").toString().trim().toLowerCase();
    if(dbEmail === emailPraktisi.toString().trim().toLowerCase()){ 
      sisaKredit = parseInt(pData[i][2]) || 0; 
      digunakan = parseInt(pData[i][3]) || 0; 
      
      let tempFree = 0;
      let tempExpired = "";
      if (pData[i].length > 8 && pData[i][8] !== "") {
         tempFree = parseInt(pData[i][8]) || 0;
      }
      if (pData[i].length > 9 && pData[i][9] !== "") {
         tempExpired = String(pData[i][9]);
      }
      
      if (tempExpired && new Date(tempExpired) < now) {
         tempFree = 0; 
      }
      
      freeKredit = tempFree;
      freeExpired = tempExpired;

      profil = {
        nama: pData[i][0] || "",
        foto: pData[i][4] || "",
        alamat: pData[i][5] || "",
        wa: pData[i][6] || "",
        deskripsi: pData[i][7] || ""
      };
      break; 
    } 
  }

  const rData = ss.getSheetByName("Riwayat Kredit").getDataRange().getValues();
  let riwayatKu = [];
  for(let i=rData.length-1; i>0; i--){
      if(rData[i][1] === emailPraktisi) { riwayatKu.push({ tanggal: String(rData[i][0]), jenis: rData[i][2], jumlah: rData[i][3], saldo: rData[i][4], ket: rData[i][5] }); }
  }

  const lSheet = ss.getSheetByName("Asesmen Links");
  let daftarLink = [];
  if (lSheet) {
    let lData = lSheet.getDataRange().getValues();
    for (let i = 1; i < lData.length; i++) {
      if (lData[i][1] === emailPraktisi) {
        daftarLink.push({
          token: lData[i][0],
          kategori: lData[i][2],
          status: lData[i][3],
          namaKlien: lData[i][4] || "-",
          tanggalDibuat: String(lData[i][5]),
          tanggalDigunakan: lData[i][6] ? String(lData[i][6]) : "-"
        });
      }
    }
  }

  const gSheet = ss.getSheetByName("Group Links");
  let daftarGroup = [];
  if (gSheet) {
    let gData = gSheet.getDataRange().getValues();
    for (let i = 1; i < gData.length; i++) {
      if (gData[i][1] === emailPraktisi) {
        daftarGroup.push({
          token: gData[i][0],
          namaGroup: gData[i][2],
          kategori: gData[i][3],
          quota: parseInt(gData[i][4]) || 0,
          terpakai: parseInt(gData[i][5]) || 0,
          status: gData[i][6],
          tanggalDibuat: String(gData[i][7])
        });
      }
    }
  }

  return { 
    totalKlien: myClients.length, 
    daftarKlien: myClients.reverse(), 
    sisaKredit: sisaKredit,
    freeKredit: freeKredit,
    freeExpired: freeExpired,
    digunakan: digunakan, 
    riwayat: riwayatKu, 
    profil: profil,
    daftarLink: daftarLink.reverse(),
    daftarGroup: daftarGroup.reverse()
  };
}

function getClientScores(rowNum) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("hasil");
    // Ambil HANYA nilai kolom 3 (Scores) di baris yang cocok secara langsung dan cepat!
    let scoresValue = sheet.getRange(rowNum, 3).getValue();
    if (scoresValue) {
      return { success: true, scores: scoresValue };
    }
    return { success: false, message: "Data tidak ditemukan." };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function simpanPeserta(nama, email, wa, instansi, emailPraktisi = "") {
  SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("peserta").appendRow([ new Date(), nama, email, wa, instansi, emailPraktisi ]);
  return "Data disimpan";
}

function simpanHasil(data, type) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const pSheet = ss.getSheetByName("Praktisi");
  const rSheet = ss.getSheetByName("Riwayat Kredit");
  const lSheet = ss.getSheetByName("Asesmen Links");
  const gSheet = ss.getSheetByName("Group Links");
  
  try {
     let emailPrak = data.emailPraktisi || "";
     let tokenRowIndex = -1;
     let isGroup = false;
     let groupRowIndex = -1;
     let groupName = "";
     
     // 1. Jika menggunakan token group asesmen massal
     if (data.groupToken && data.groupToken !== "") {
         let gData = gSheet.getDataRange().getValues();
         for (let i = 1; i < gData.length; i++) {
             if (gData[i][0] === data.groupToken) {
                 if (gData[i][6] !== "Active") {
                     return { success: false, message: "Akses group asesmen ini sudah ditutup atau tidak aktif." };
                 }
                 let quota = parseInt(gData[i][4]) || 0;
                 let terpakai = parseInt(gData[i][5]) || 0;
                 if (terpakai >= quota) {
                     return { success: false, message: "Kuota pengerjaan untuk group asesmen ini sudah penuh." };
                 }
                 emailPrak = gData[i][1];
                 groupName = gData[i][2];
                 groupRowIndex = i + 1;
                 isGroup = true;
                 break;
             }
         }
         if (groupRowIndex === -1) {
             return { success: false, message: "Token group asesmen tidak valid." };
         }
     }
     
     // 2. Jika menggunakan token unik individu
     else if (data.token && data.token !== "") {
         let lData = lSheet.getDataRange().getValues();
         for (let i = 1; i < lData.length; i++) {
             if (lData[i][0] === data.token) {
                 if (lData[i][3] !== "Active") {
                     return { success: false, message: "Link asesmen sudah digunakan atau tidak aktif." };
                 }
                 emailPrak = lData[i][1];
                 tokenRowIndex = i + 1;
                 break;
             }
         }
         if (tokenRowIndex === -1) {
             return { success: false, message: "Link asesmen tidak ditemukan." };
         }
     }
     
     // 3. Pemotongan kredit praktisi (HANYA untuk non-group!)
      if (emailPrak !== "" && !isGroup) {
          let pData = pSheet.getDataRange().getValues();
          let rIndex = -1; 
          let regulerSisa = 0; 
          let pakai = 0;
          let freeSisa = 0;
          let freeExpiredStr = "";
          
          for(let i=1; i<pData.length; i++) { 
              let dbEmail = (pData[i][1] || "").toString().trim().toLowerCase();
              if(dbEmail === emailPrak.toString().trim().toLowerCase()) { 
                  rIndex = i + 1; 
                  regulerSisa = parseInt(pData[i][2])||0; 
                  pakai = parseInt(pData[i][3])||0; 
                  if (pData[i].length > 8 && pData[i][8] !== "") {
                      freeSisa = parseInt(pData[i][8]) || 0;
                  }
                  if (pData[i].length > 9 && pData[i][9] !== "") {
                      freeExpiredStr = String(pData[i][9]);
                  }
                  break; 
              } 
          }
          
          if(rIndex > -1) {
              let now = new Date();
              let isFreeActive = freeSisa > 0 && (!freeExpiredStr || new Date(freeExpiredStr) >= now);
              
              if (isFreeActive) {
                  freeSisa -= 1;
                  pakai += 1;
                  pSheet.getRange(rIndex, 9).setValue(freeSisa);
                  pSheet.getRange(rIndex, 4).setValue(pakai);
                  rSheet.appendRow([new Date(), emailPrak, "Assessment (Free)", -1, freeSisa, `Assessment Peserta (${type.toUpperCase()}): ` + data.nama + " (Menggunakan Kredit Berjangka)"]);
              } else {
                  if (regulerSisa < 1) return {success: false, message: "Kredit Praktisi Habis."};
                  regulerSisa -= 1;
                  pakai += 1;
                  pSheet.getRange(rIndex, 3).setValue(regulerSisa);
                  pSheet.getRange(rIndex, 4).setValue(pakai);
                  rSheet.appendRow([new Date(), emailPrak, "Assessment (Reguler)", -1, regulerSisa, `Assessment Peserta (${type.toUpperCase()}): ` + data.nama + " (Menggunakan Kredit Reguler)"]);
              }
          }
      }
     
     // 4. Update status token jika menggunakan token individu
     if (tokenRowIndex > -1) {
         lSheet.getRange(tokenRowIndex, 4).setValue("Completed");
         lSheet.getRange(tokenRowIndex, 7).setValue(new Date());
     }
     
     // 5. Update status token & used count jika menggunakan token group massal
     if (isGroup && groupRowIndex > -1) {
         let currentTerpakai = parseInt(gSheet.getRange(groupRowIndex, 6).getValue()) || 0;
         gSheet.getRange(groupRowIndex, 6).setValue(currentTerpakai + 1);
         data.instansi = `[Group: ${groupName}] ${data.instansi || ""}`;
     }

     ss.getSheetByName("hasil").appendRow([
        new Date(), data.nama, JSON.stringify(data.scores), emailPrak || "Mandiri", data.topProfiles || "-", data.wa || "-", data.instansi || "-", data.emailPeserta || "-", type
     ]);

     if(data.emailPeserta && data.htmlReport) { kirimPDFkeEmail(data.emailPeserta, data.nama, data.htmlReport, type); }
     
     return { success: true, message: "Assessment Selesai" };
  } catch(e) {
     return { success: false, message: e.message };
  }
}

function kirimPDFkeEmail(emailPeserta, namaPeserta, htmlReport, type) {
  try {
    let cleanHtml = `<html><head><style>body { font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; } h2, h3, h4 { color: #1e3a8a; } .bg-slate-800 { background-color: #1e293b; color: white; padding: 15px; border-radius: 8px; } .text-primary { color: #1e3a8a; } ul, ol { padding-left: 20px; margin-bottom: 15px; } li { margin-bottom: 5px; } .page-break { page-break-before: always; }</style></head><body>${htmlReport}</body></html>`;
    let pdfBlob = Utilities.newBlob(cleanHtml, MimeType.HTML, "report.html").getAs(MimeType.PDF);
    pdfBlob.setName(`Hasil_NLP_Profiler_${type.toUpperCase()}_${namaPeserta.replace(/\s+/g, '_')}.pdf`);
    MailApp.sendEmail({ to: emailPeserta, subject: `Hasil Assessment NLP Meta Program (${type.toUpperCase()}) - ` + namaPeserta, htmlBody: `Halo <b>${namaPeserta}</b>,<br><br>Terima kasih telah menyelesaikan <b>NLP Meta Program Profiler™</b>.<br><br>Bersama email ini, kami melampirkan dokumen PDF yang berisi detail Profil Inti, Rekomendasi, dan Personal Development Blueprint Anda.<br><br>Salam Sukses,<br><b>Tim Fasilitator & Praktisi</b>`, attachments: [pdfBlob] });
  } catch (error) {}
}

function hapusHasilKlien(rowNum) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("hasil");
    sheet.deleteRow(rowNum);
    return { success: true, message: "Data asesmen berhasil dihapus." };
  } catch(e) {
    return { success: false, message: e.message };
  }
}

function getPublicPraktisiList() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const pSheet = ss.getSheetByName("Praktisi");
    const pData = pSheet.getDataRange().getValues();
    
    let list = [];
    for (let i = 1; i < pData.length; i++) {
      list.push({
        nama: pData[i][0],
        email: pData[i][1],
        foto: pData[i][4] || "",
        alamat: pData[i][5] || "",
        wa: pData[i][6] || "",
        deskripsi: pData[i][7] || ""
      });
    }
    return { success: true, data: list };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function updatePraktisiProfil(email, data) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // 1. Update in Users sheet
    const uSheet = ss.getSheetByName("Users");
    if (uSheet) {
      const uData = uSheet.getDataRange().getValues();
      for (let i = 1; i < uData.length; i++) {
        if (uData[i][1].toLowerCase() === email.toLowerCase()) {
          uSheet.getRange(i + 1, 4).setValue(data.nama || uData[i][3]);
          break;
        }
      }
    }
    
    // 2. Update in Praktisi sheet
    const sheet = ss.getSheetByName("Praktisi");
    const pData = sheet.getDataRange().getValues();
    for (let i = 1; i < pData.length; i++) {
      if (pData[i][1].toLowerCase() === email.toLowerCase()) {
        sheet.getRange(i + 1, 1).setValue(data.nama || pData[i][0]);
        sheet.getRange(i + 1, 5).setValue(data.foto || "");
        sheet.getRange(i + 1, 6).setValue(data.alamat || "");
        sheet.getRange(i + 1, 7).setValue(data.wa || "");
        sheet.getRange(i + 1, 8).setValue(data.deskripsi || "");
        return { success: true, message: "Profil berhasil diperbarui." };
      }
    }
    return { success: false, message: "Praktisi tidak ditemukan." };
  } catch(e) {
    return { success: false, message: e.message };
  }
}

function tambahPraktisiBaru(pData) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const userSheet = ss.getSheetByName("Users");
    const pSheet = ss.getSheetByName("Praktisi");
    
    // 1. Cek apakah email sudah terdaftar di Users
    const uValues = userSheet.getDataRange().getValues();
    for (let i = 1; i < uValues.length; i++) {
      if (uValues[i][1] === pData.email) {
        return { success: false, message: "Email sudah terdaftar." };
      }
    }
    
    // 2. Tambah ke Users (Approved)
    userSheet.appendRow([
      new Date(),
      pData.email,
      pData.password,
      pData.nama,
      pData.wa,
      pData.instansi || "-",
      "Praktisi",
      "Approved"
    ]);
    
    // 3. Tambah ke Praktisi
    let kreditAwal = parseInt(pData.kredit) || 0;
    let kreditFreeAwal = parseInt(pData.kreditFree) || 0;
    let expiredStr = "";
    if (kreditFreeAwal > 0) {
      let expiredDate = new Date();
      expiredDate.setMonth(expiredDate.getMonth() + parseInt(pData.durasiFree || 1));
      expiredStr = expiredDate.toISOString();
    }
    
    pSheet.appendRow([
      pData.nama,
      pData.email,
      kreditAwal,
      0, // digunakan
      pData.foto || "",
      pData.alamat || "",
      pData.wa || "",
      pData.deskripsi || "",
      kreditFreeAwal,
      expiredStr
    ]);
    
    // Jika kredit awal > 0, catat mutasinya di Riwayat Kredit
    if (kreditAwal > 0) {
      const rSheet = ss.getSheetByName("Riwayat Kredit");
      rSheet.appendRow([
        new Date(),
        pData.email,
        "Top Up Reguler",
        kreditAwal,
        kreditAwal,
        "Kredit reguler awal ditambahkan oleh Admin"
      ]);
    }

    if (kreditFreeAwal > 0) {
      const rSheet = ss.getSheetByName("Riwayat Kredit");
      let expiredDate = new Date(expiredStr);
      let expiredStrFormatted = Utilities.formatDate(expiredDate, Session.getScriptTimeZone(), "dd-MM-yyyy HH:mm");
      rSheet.appendRow([
        new Date(),
        pData.email,
        "Top Up Berjangka",
        kreditFreeAwal,
        kreditFreeAwal,
        "Kredit free awal ditambahkan oleh Admin (Berlaku s/d " + expiredStrFormatted + ")"
      ]);
    }
    
    return { success: true, message: "Praktisi baru berhasil ditambahkan." };
  } catch(e) {
    return { success: false, message: e.message };
  }
}

// ==========================================
// 4. PENANGANAN LINK ASESMEN UNIK & KONTROL KREDIT
// ==========================================
function buatLinkAsesmen(emailPraktisi, kategori, namaKlien) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const pSheet = ss.getSheetByName("Praktisi");
     const lSheet = ss.getSheetByName("Asesmen Links");
     
     let pData = pSheet.getDataRange().getValues();
     let creditFound = false;
     let regulerSisa = 0;
     let freeSisa = 0;
     let freeExpiredStr = "";
     for (let i = 1; i < pData.length; i++) {
        let dbEmail = (pData[i][1] || "").toString().trim().toLowerCase();
        if (dbEmail === emailPraktisi.toString().trim().toLowerCase()) {
           creditFound = true;
           regulerSisa = parseInt(pData[i][2]) || 0;
           if (pData[i].length > 8 && pData[i][8] !== "") {
              freeSisa = parseInt(pData[i][8]) || 0;
           }
           if (pData[i].length > 9 && pData[i][9] !== "") {
              freeExpiredStr = String(pData[i][9]);
           }
           break;
        }
     }
     
     if (!creditFound) return { success: false, message: "Praktisi tidak ditemukan." };
     
     let now = new Date();
     let isFreeActive = freeSisa > 0 && (!freeExpiredStr || new Date(freeExpiredStr) >= now);
     if (regulerSisa <= 0 && !isFreeActive) return { success: false, message: "Kredit Anda habis. Tidak dapat membuat link asesmen baru." };
     
     let token = "";
     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     for (let i = 0; i < 12; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
     }
     
     lSheet.appendRow([token, emailPraktisi, kategori, "Active", namaKlien || "-", new Date(), ""]);
     
     return { success: true, token: token, message: "Link unik berhasil digenerate!" };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function validateToken(token) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const lSheet = ss.getSheetByName("Asesmen Links");
     const pSheet = ss.getSheetByName("Praktisi");
     
     let lData = lSheet.getDataRange().getValues();
     let foundRow = -1;
     for (let i = 1; i < lData.length; i++) {
        if (lData[i][0] === token) {
           foundRow = i;
           break;
        }
     }
     
     if (foundRow === -1) {
        return { success: false, message: "Link asesmen tidak ditemukan atau tidak valid." };
     }
     
     let emailPraktisi = lData[foundRow][1];
     let kategori = lData[foundRow][2];
     let status = lData[foundRow][3];
     let namaKlien = lData[foundRow][4];
     
     if (status !== "Active") {
        return { success: false, message: "Link asesmen ini sudah digunakan atau tidak aktif." };
     }
     
     let pData = pSheet.getDataRange().getValues();
     let creditFound = false;
     let regulerSisa = 0;
     let freeSisa = 0;
     let freeExpiredStr = "";
     for (let i = 1; i < pData.length; i++) {
        let dbEmail = (pData[i][1] || "").toString().trim().toLowerCase();
        if (dbEmail === emailPraktisi.toString().trim().toLowerCase()) {
           creditFound = true;
           regulerSisa = parseInt(pData[i][2]) || 0;
           if (pData[i].length > 8 && pData[i][8] !== "") {
              freeSisa = parseInt(pData[i][8]) || 0;
           }
           if (pData[i].length > 9 && pData[i][9] !== "") {
              freeExpiredStr = String(pData[i][9]);
           }
           break;
        }
     }
     
     let now = new Date();
     let isFreeActive = freeSisa > 0 && (!freeExpiredStr || new Date(freeExpiredStr) >= now);
     
     if (!creditFound || (regulerSisa <= 0 && !isFreeActive)) {
        return { success: false, message: "Asesmen tidak dapat digunakan karena kredit praktisi pengundang Anda sedang kosong." };
     }
     
     return { success: true, emailPraktisi: emailPraktisi, kategori: kategori, namaKlien: namaKlien };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function updateAsesmenLink(token, emailPraktisi, namaKlien, kategori) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const lSheet = ss.getSheetByName("Asesmen Links");
     let lData = lSheet.getDataRange().getValues();
     let rowIndex = -1;
     
     for (let i = 1; i < lData.length; i++) {
        if (lData[i][0] === token && lData[i][1] === emailPraktisi) {
           if (lData[i][3] !== "Active") {
              return { success: false, message: "Hanya link berstatus Active yang dapat diedit." };
           }
           rowIndex = i + 1;
           break;
        }
     }
     
     if (rowIndex === -1) return { success: false, message: "Link tidak ditemukan atau tidak memiliki hak akses." };
     
     lSheet.getRange(rowIndex, 3).setValue(kategori); // Kategori
     lSheet.getRange(rowIndex, 5).setValue(namaKlien || "-"); // Nama Klien
     
     return { success: true, message: "Detail link berhasil diperbarui!" };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

// ==========================================
// 5. ASESMEN MASSAL / GROUP SYSTEM
// ==========================================
function buatGroupAsesmen(emailPraktisi, namaGroup, kategori, quota) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const pSheet = ss.getSheetByName("Praktisi");
     const gSheet = ss.getSheetByName("Group Links");
     const rSheet = ss.getSheetByName("Riwayat Kredit");
     
     quota = parseInt(quota) || 0;
     if (quota <= 0) return { success: false, message: "Kuota group harus lebih besar dari 0." };
     
     // 1. Cek apakah praktisi terdaftar dan sisa kreditnya >= quota (lewati jika Admin)
     let isAdmin = (emailPraktisi === "admin" || emailPraktisi === "superadmin" || emailPraktisi === "admin@humanpattern.com" || emailPraktisi.toLowerCase().includes("admin"));
     
     if (!isAdmin) {
        let pData = pSheet.getDataRange().getValues();
        let rIndex = -1;
        let regulerSisa = 0;
        let pakai = 0;
        let freeSisa = 0;
        let freeExpiredStr = "";
        for (let i = 1; i < pData.length; i++) {
           let dbEmail = (pData[i][1] || "").toString().trim().toLowerCase();
           if (dbEmail === emailPraktisi.toString().trim().toLowerCase()) {
              rIndex = i + 1;
              regulerSisa = parseInt(pData[i][2]) || 0;
              pakai = parseInt(pData[i][3]) || 0;
              if (pData[i].length > 8 && pData[i][8] !== "") {
                 freeSisa = parseInt(pData[i][8]) || 0;
              }
              if (pData[i].length > 9 && pData[i][9] !== "") {
                 freeExpiredStr = String(pData[i][9]);
              }
              break;
           }
        }
        
        if (rIndex === -1) return { success: false, message: "Praktisi tidak ditemukan." };
        
        let now = new Date();
        let isFreeActive = freeSisa > 0 && (!freeExpiredStr || new Date(freeExpiredStr) >= now);
        let activeFree = isFreeActive ? freeSisa : 0;
        
        let totalActiveCredit = regulerSisa + activeFree;
        if (totalActiveCredit < quota) {
           return { success: false, message: `Kredit Anda tidak mencukupi. Sisa saldo Anda: ${regulerSisa} reguler, ${activeFree} berjangka.` };
        }
        
        let deductFree = Math.min(quota, activeFree);
        let deductReguler = quota - deductFree;
        
        let newFree = activeFree - deductFree;
        let newReguler = regulerSisa - deductReguler;
        let newPakai = pakai + quota;
        
        pSheet.getRange(rIndex, 3).setValue(newReguler);
        pSheet.getRange(rIndex, 4).setValue(newPakai);
        pSheet.getRange(rIndex, 9).setValue(newFree);
        
        if (deductFree > 0) {
           rSheet.appendRow([new Date(), emailPraktisi, "Buat Group (Free)", -deductFree, newFree, `Pembuatan group "${namaGroup}" (Kuota ${deductFree} dari Kredit Berjangka)`]);
        }
        if (deductReguler > 0) {
           rSheet.appendRow([new Date(), emailPraktisi, "Buat Group (Reguler)", -deductReguler, newReguler, `Pembuatan group "${namaGroup}" (Kuota ${deductReguler} dari Kredit Reguler)`]);
        }
      } else {
       // Log mutasi tanpa potong kredit untuk Internal Group
       rSheet.appendRow([new Date(), "Admin", "Buat Group Internal", 0, 0, `Pembuatan group internal "${namaGroup}" dengan kuota ${quota} peserta`]);
     }
     
     // 3. Generate token group unik
     let token = "GRP-";
     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     for (let i = 0; i < 8; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
     }
     
     // 4. Catat di Group Links sheet
     gSheet.appendRow([token, emailPraktisi, namaGroup, kategori, quota, 0, "Active", new Date()]);
     
     return { success: true, token: token, message: `Group "${namaGroup}" berhasil dibuat dengan kuota ${quota}!` };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function tutupGroupAsesmen(token, emailPraktisi) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const gSheet = ss.getSheetByName("Group Links");
     const pSheet = ss.getSheetByName("Praktisi");
     const rSheet = ss.getSheetByName("Riwayat Kredit");
     
     let gData = gSheet.getDataRange().getValues();
     let gRowIndex = -1;
     let namaGroup = "";
     let quota = 0;
     let terpakai = 0;
     let status = "";
     
     for (let i = 1; i < gData.length; i++) {
        if (gData[i][0] === token && gData[i][1] === emailPraktisi) {
           gRowIndex = i + 1;
           namaGroup = gData[i][2];
           quota = parseInt(gData[i][4]) || 0;
           terpakai = parseInt(gData[i][5]) || 0;
           status = gData[i][6];
           break;
        }
     }
     
     if (gRowIndex === -1) return { success: false, message: "Group tidak ditemukan atau Anda tidak memiliki akses." };
     if (status !== "Active") return { success: false, message: "Group ini sudah berstatus tidak aktif." };
     
     // 1. Ubah status group menjadi Closed
     gSheet.getRange(gRowIndex, 7).setValue("Closed");
     
     // 2. Refund sisa kuota ke kredit praktisi (lewati jika Admin)
     let refund = quota - terpakai;
     let isAdmin = (emailPraktisi === "admin" || emailPraktisi === "superadmin" || emailPraktisi === "admin@humanpattern.com" || emailPraktisi.toLowerCase().includes("admin"));
     
     if (refund > 0 && !isAdmin) {
        let pData = pSheet.getDataRange().getValues();
        let rIndex = -1;
        let saldo = 0;
        let pakai = 0;
        for (let i = 1; i < pData.length; i++) {
           if (pData[i][1] === emailPraktisi) {
              rIndex = i + 1;
              saldo = parseInt(pData[i][2]) || 0;
              pakai = parseInt(pData[i][3]) || 0;
              break;
           }
        }
        
        if (rIndex > -1) {
           saldo += refund;
           pakai -= refund;
           pSheet.getRange(rIndex, 3).setValue(saldo);
           pSheet.getRange(rIndex, 4).setValue(pakai);
           
           // Log mutasi
           rSheet.appendRow([new Date(), emailPraktisi, "Refund Group", refund, saldo, `Refund sisa kuota group "${namaGroup}" sebanyak ${refund} kredit`]);
        }
     }
     
     let successMsg = isAdmin 
        ? `Group Internal "${namaGroup}" berhasil ditutup.` 
        : `Group "${namaGroup}" berhasil ditutup. Sisa kuota sebanyak ${refund} kredit telah dikembalikan ke saldo Anda.`;
     return { success: true, message: successMsg };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function validateGroupToken(token) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const gSheet = ss.getSheetByName("Group Links");
     
     let gData = gSheet.getDataRange().getValues();
     let foundRow = -1;
     for (let i = 1; i < gData.length; i++) {
        if (gData[i][0] === token) {
           foundRow = i;
           break;
        }
     }
     
     if (foundRow === -1) {
        return { success: false, message: "Token group asesmen tidak valid." };
     }
     
     let emailPraktisi = gData[foundRow][1];
     let namaGroup = gData[foundRow][2];
     let kategori = gData[foundRow][3];
     let quota = parseInt(gData[foundRow][4]) || 0;
     let terpakai = parseInt(gData[foundRow][5]) || 0;
     let status = gData[foundRow][6];
     
     if (status !== "Active") {
        return { success: false, message: "Akses group asesmen ini sudah ditutup." };
     }
     if (terpakai >= quota) {
        return { success: false, message: "Kuota pengisian untuk group asesmen ini sudah habis." };
     }
     
     return { success: true, emailPraktisi: emailPraktisi, namaGroup: namaGroup, kategori: kategori };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function updateGroupAsesmen(token, emailPraktisi, namaGroup, kategori) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const gSheet = ss.getSheetByName("Group Links");
     let gData = gSheet.getDataRange().getValues();
     let rowIndex = -1;
     
     for (let i = 1; i < gData.length; i++) {
        if (gData[i][0] === token && gData[i][1] === emailPraktisi) {
           if (gData[i][6] !== "Active") {
              return { success: false, message: "Hanya group berstatus Active yang dapat diedit." };
           }
           rowIndex = i + 1;
           break;
        }
     }
     
     if (rowIndex === -1) return { success: false, message: "Group tidak ditemukan atau Anda tidak memiliki akses." };
     
     gSheet.getRange(rowIndex, 3).setValue(namaGroup); // Nama Group
     gSheet.getRange(rowIndex, 4).setValue(kategori); // Kategori
     
     return { success: true, message: "Detail group berhasil diperbarui!" };
  } catch (e) {
     return { success: false, message: e.message };
  }
}

function editGroupQuota(token, newQuota) {
  try {
     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
     const gSheet = ss.getSheetByName("Group Links");
     let gData = gSheet.getDataRange().getValues();
     let rowIndex = -1;
     let currentTerpakai = 0;
     
     for (let i = 1; i < gData.length; i++) {
        if (gData[i][0] === token) {
           if (gData[i][6] !== "Active") {
              return { success: false, message: "Hanya group berstatus Active yang dapat diedit kuotanya." };
           }
           currentTerpakai = parseInt(gData[i][5]) || 0;
           rowIndex = i + 1;
           break;
        }
     }
     
     if (rowIndex === -1) return { success: false, message: "Group tidak ditemukan." };
     if (newQuota < currentTerpakai) {
        return { success: false, message: `Kuota baru (${newQuota}) tidak boleh kurang dari jumlah kuota yang sudah terpakai (${currentTerpakai}).` };
     }
     
     gSheet.getRange(rowIndex, 5).setValue(newQuota); // Quota
     
     return { success: true, message: "Kuota group berhasil diperbarui!" };
  } catch (e) {
     return { success: false, message: e.message };
  }
}