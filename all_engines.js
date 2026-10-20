/* BUNDLED ENGINES */
// --- questions.js ---
const QUESTIONS = [
  // --- DIMENSI 1: TOWARD vs AWAY ---
  { id: 1, category: "TowardAway", question: "Ketika memikirkan masa depan atau target, saya lebih sering:", a: "Fokus pada apa yang ingin saya capai atau dapatkan.", b: "Fokus pada masalah atau kegagalan yang ingin saya hindari.", aScore: "Toward", bScore: "Away" },
  { id: 2, category: "TowardAway", question: "Saya biasanya lebih semangat untuk mulai bergerak karena:", a: "Ada hadiah, nilai bagus, atau keuntungan yang menanti saya.", b: "Ada hukuman, teguran, atau risiko yang tidak ingin saya alami.", aScore: "Toward", bScore: "Away" },
  { id: 3, category: "TowardAway", question: "Ketika dihadapkan pada ujian atau tantangan berat, hal yang paling saya pikirkan adalah:", a: "Berapa besar nilai atau hasil memuaskan yang bisa saya raih.", b: "Bagaimana caranya agar saya tidak gagal dan terhindar dari rasa malu.", aScore: "Toward", bScore: "Away" },
  { id: 4, category: "TowardAway", question: "Saya lebih memilih sebuah kompetisi atau pilihan karir yang:", a: "Hadiah atau potensi keuntungannya sangat besar meskipun sulit.", b: "Risiko kerugian atau kegagalannya sangat kecil dan aman.", aScore: "Toward", bScore: "Away" },

  // --- DIMENSI 2: INTERNAL vs EXTERNAL ---
  { id: 5, category: "InternalExternal", question: "Ketika selesai mengerjakan tugas atau proyek, saya merasa yakin hasilnya bagus jika:", a: "Saya sendiri merasa puas dan tahu itu sudah sesuai standar saya.", b: "Guru, atasan, atau teman memuji dan mengakui hasil kerja saya.", aScore: "Internal", bScore: "External" },
  { id: 6, category: "InternalExternal", question: "Saat mengambil keputusan penting, saya cenderung:", a: "Lebih percaya pada insting dan keyakinan saya sendiri.", b: "Lebih butuh saran, masukan, atau persetujuan dari orang lain.", aScore: "Internal", bScore: "External" },
  { id: 7, category: "InternalExternal", question: "Ketika saya memakai baju baru atau membuat sebuah karya, saya merasa bangga saat:", a: "Saya sendiri merasa karya itu bagus dan pas untuk saya.", b: "Banyak orang yang memuji, mendukung, atau memberikan 'like'.", aScore: "Internal", bScore: "External" },
  { id: 8, category: "InternalExternal", question: "Jika ada orang yang mengkritik cara saya belajar atau bekerja, saya akan:", a: "Tetap pakai cara saya jika saya merasa itu yang paling benar.", b: "Langsung ragu dan mencoba mengikuti saran dari orang tersebut.", aScore: "Internal", bScore: "External" },

  // --- DIMENSI 3: OPTIONS vs PROCEDURES ---
  { id: 9, category: "OptionsProcedures", question: "Saat mengerjakan suatu kegiatan, saya lebih suka:", a: "Bebas berkreasi dan mencoba berbagai cara baru yang berbeda.", b: "Mengikuti panduan, aturan, atau langkah-langkah yang sudah jelas.", aScore: "Options", bScore: "Procedures" },
  { id: 10, category: "OptionsProcedures", question: "Jika dihadapkan pada rutinitas yang itu-itu saja, saya biasanya:", a: "Cepat bosan dan selalu ingin mencari alternatif atau cara lain.", b: "Merasa nyaman karena sudah terbiasa dan tahu persis urutannya.", aScore: "Options", bScore: "Procedures" },
  { id: 11, category: "OptionsProcedures", question: "Jika disuruh merakit barang atau menyusun laporan, saya cenderung:", a: "Mencoba-coba dan merangkai sendiri dulu sebelum membaca buku panduan.", b: "Membaca buku panduan langkah demi langkah agar tidak ada yang salah.", aScore: "Options", bScore: "Procedures" },
  { id: 12, category: "OptionsProcedures", question: "Saya paling merasa terkekang atau tidak nyaman jika:", a: "Harus mematuhi aturan kaku yang tidak boleh diubah sama sekali.", b: "Diberi tugas tapi tidak ada petunjuk atau aturan main yang jelas.", aScore: "Options", bScore: "Procedures" },

  // --- DIMENSI 4: BIG PICTURE vs DETAIL ---
  { id: 13, category: "BigPictureDetail", question: "Ketika mempelajari materi atau informasi baru, saya lebih mudah paham jika:", a: "Mendapat gambaran besarnya atau tujuan utamanya terlebih dahulu.", b: "Mendapat fakta, contoh spesifik, dan rinciannya terlebih dahulu.", aScore: "BigPicture", bScore: "Detail" },
  { id: 14, category: "BigPictureDetail", question: "Saat seseorang bercerita atau menjelaskan sesuatu, saya lebih tertarik pada:", a: "Inti cerita dan kesimpulan akhirnya.", b: "Proses, urutan kejadian, dan detail-detail kecilnya.", aScore: "BigPicture", bScore: "Detail" },
  { id: 15, category: "BigPictureDetail", question: "Saat merencanakan liburan atau acara, saya lebih suka memikirkan:", a: "Tujuan utamanya dan tema acaranya akan seperti apa secara keseluruhan.", b: "Jadwal per jam, rincian biaya, dan daftar barang bawaan yang lengkap.", aScore: "BigPicture", bScore: "Detail" },
  { id: 16, category: "BigPictureDetail", question: "Menurut saya, sebuah laporan atau penjelasan itu terasa membosankan jika:", a: "Terlalu banyak menjelaskan hal-hal teknis dan angka-angka yang rumit.", b: "Hanya membahas teori atau konsep tanpa menjelaskan bagaimana rincian nyatanya.", aScore: "BigPicture", bScore: "Detail" },

  // --- DIMENSI 5: MATCHING vs MISMATCHING ---
  { id: 17, category: "MatchingMismatching", question: "Ketika membandingkan dua hal, pikiran saya secara otomatis akan:", a: "Mencari kesamaannya terlebih dahulu.", b: "Mencari perbedaannya terlebih dahulu.", aScore: "Matching", bScore: "Mismatching" },
  { id: 18, category: "MatchingMismatching", question: "Saat ada ide atau rencana baru yang ditawarkan, reaksi pertama saya adalah:", a: "Melihat bagian mana yang cocok, bagus, dan bisa diterima.", b: "Melihat bagian mana yang kurang pas, salah, atau perlu diperbaiki.", aScore: "Matching", bScore: "Mismatching" },
  { id: 19, category: "MatchingMismatching", question: "Saat masuk ke lingkungan atau kelas baru, hal pertama yang saya sadari adalah:", a: "Siapa saja orang yang punya hobi atau sifat mirip dengan saya.", b: "Apa saja perbedaan kebiasaan di sini dibandingkan tempat lama saya.", aScore: "Matching", bScore: "Mismatching" },
  { id: 20, category: "MatchingMismatching", question: "Ketika teman saya membagikan pendapatnya, respon otomatis pikiran saya adalah:", a: "Menyetujui atau mengangguk pada bagian yang sejalan dengan pikiran saya.", b: "Mencari celah, kelemahan, atau bagian yang tidak saya setujui dari pendapatnya.", aScore: "Matching", bScore: "Mismatching" },

  // --- DIMENSI 6: SELF vs OTHERS ---
  { id: 21, category: "SelfOthers", question: "Saat mengambil keputusan yang sulit, saya lebih banyak mempertimbangkan:", a: "Apa dampaknya bagi kemajuan dan keuntungan saya pribadi.", b: "Apa dampaknya bagi perasaan dan keadaan orang lain di sekitar saya.", aScore: "Self", bScore: "Others" },
  { id: 22, category: "SelfOthers", question: "Dalam sebuah kelompok, saya merasa lebih bertanggung jawab untuk:", a: "Menyelesaikan bagian tugas saya sendiri sebaik mungkin.", b: "Memastikan semua anggota merasa dilibatkan dan hidup rukun.", aScore: "Self", bScore: "Others" },
  { id: 23, category: "SelfOthers", question: "Ketika saya mendapat rejeki atau kesuksesan, pikiran pertama saya adalah:", a: "Menikmatinya untuk kepuasan dan kebahagiaan diri sendiri.", b: "Membagikannya agar teman atau orang terdekat saya juga ikut merasa senang.", aScore: "Self", bScore: "Others" },
  { id: 24, category: "SelfOthers", question: "Jika terjadi perbedaan kepentingan antara saya dan orang lain, saya akan:", a: "Berusaha memperjuangkan hak dan kepentingan saya terlebih dahulu.", b: "Seringkali mengalah atau menyesuaikan diri demi kebaikan dan kedamaian bersama.", aScore: "Self", bScore: "Others" },

  // --- DIMENSI 7: PROACTIVE vs REACTIVE ---
  { id: 25, category: "ProactiveReactive", question: "Ketika ada kesempatan atau tugas baru:", a: "Saya langsung inisiatif bergerak dan mengambil tindakan.", b: "Saya mengamati, memikirkan, dan menunggu instruksi dulu.", aScore: "Proactive", bScore: "Reactive" },
  { id: 26, category: "ProactiveReactive", question: "Saat menghadapi masalah yang mendadak, biasanya saya:", a: "Spontan langsung mencoba berbagai solusi saat itu juga.", b: "Menganalisis situasinya dengan tenang sebelum bertindak.", aScore: "Proactive", bScore: "Reactive" },
  { id: 27, category: "ProactiveReactive", question: "Saat guru atau atasan bertanya 'Siapa yang mau mencoba?', saya biasanya:", a: "Langsung mengangkat tangan, urusan benar atau salah dipikirkan nanti.", b: "Menunggu sejenak untuk memikirkan jawabannya dengan matang sebelum angkat tangan.", aScore: "Proactive", bScore: "Reactive" },
  { id: 28, category: "ProactiveReactive", question: "Dalam menghadapi proyek yang rumit, gaya saya adalah:", a: "Langsung terjun mencoba mengerjakannya sambil belajar di jalan.", b: "Mengumpulkan semua informasi, membaca, dan merencanakan dulu sebelum mulai.", aScore: "Proactive", bScore: "Reactive" },

  // --- DIMENSI 8: GENERAL vs SPECIFIC ---
  { id: 29, category: "GeneralSpecific", question: "Saat berbicara atau menjelaskan sesuatu kepada teman, saya cenderung:", a: "Berbicara secara garis besar dan langsung ke intinya.", b: "Berbicara sangat rinci, spesifik, dan runut dari awal sampai akhir.", aScore: "General", bScore: "Specific" },
  { id: 30, category: "GeneralSpecific", question: "Saya lebih nyaman menerima instruksi atau perintah yang:", a: "Pendek, jelas arah akhirnya, dan membebaskan saya memilih caranya.", b: "Panjang, lengkap, dan menyebutkan langkah-langkahnya dengan detail.", aScore: "General", bScore: "Specific" },
  { id: 31, category: "GeneralSpecific", question: "Kalau saya disuruh merangkum sebuah film atau pengalaman liburan, saya akan:", a: "Menceritakan jalan cerita atau kesan utamanya saja secara singkat.", b: "Menyebutkan nama tempat, waktu, dan urutan kejadiannya secara lengkap.", aScore: "General", bScore: "Specific" },
  { id: 32, category: "GeneralSpecific", question: "Jika saya memimpin sebuah kegiatan, saya akan membagi tugas dengan cara:", a: "Menyampaikan visi kegiatan dan membiarkan anggota menentukan detailnya.", b: "Memberikan daftar tugas (to-do list) yang spesifik untuk setiap orang.", aScore: "General", bScore: "Specific" },

  // --- DIMENSI 9: SAMENESS vs DIFFERENCE ---
  { id: 33, category: "SamenessDifference", question: "Dalam menjalani keseharian, saya lebih menyukai:", a: "Keteraturan, kestabilan, dan lingkungan yang tidak banyak berubah.", b: "Variasi, tantangan baru, dan perubahan suasana secara berkala.", aScore: "Sameness", bScore: "Difference" },
  { id: 34, category: "SamenessDifference", question: "Terhadap lingkungan atau rutinitas yang sudah lama, saya merasa:", a: "Tetap nyaman dan ingin mempertahankannya selama masih berfungsi baik.", b: "Cepat bosan dan merasa segala sesuatu harus terus-menerus diperbarui.", aScore: "Sameness", bScore: "Difference" },
  { id: 35, category: "SamenessDifference", question: "Jika disuruh memilih tempat makan atau aktivitas akhir pekan, saya lebih sering:", a: "Memilih tempat atau aktivitas langganan yang sudah pasti nyaman.", b: "Mencari tempat atau aktivitas baru yang belum pernah saya coba sebelumnya.", aScore: "Sameness", bScore: "Difference" },
  { id: 36, category: "SamenessDifference", question: "Saya sudah melakukan sebuah aktivitas atau hobi yang sama bertahun-tahun. Saat ini saya merasa:", a: "Sangat menikmati karena saya semakin ahli dan terbiasa dengan ritmenya.", b: "Mulai kehilangan gairah dan sangat butuh beralih ke minat atau hobi yang lain.", aScore: "Sameness", bScore: "Difference" },

  // --- DIMENSI 10: PAST vs PRESENT ---
  { id: 37, category: "PastPresent", question: "Dalam menyelesaikan suatu persoalan, pikiran saya lebih sering:", a: "Mengingat pengalaman atau kejadian masa lalu sebagai panduan.", b: "Fokus total pada apa yang sedang terjadi di depan mata saat ini.", aScore: "Past", bScore: "Present" },
  { id: 38, category: "PastPresent", question: "Topik pembicaraan yang paling sering melintas di pikiran saya adalah:", a: "Sejarah, kenangan, memori lama, atau kejadian yang sudah terlewat.", b: "Kondisi saat ini, berita terbaru, atau hal-hal yang sedang ramai hari ini.", aScore: "Past", bScore: "Present" },
  { id: 39, category: "PastPresent", question: "Saat sedang bersantai sendirian, pikiran saya lebih sering melayang ke:", a: "Momen-momen atau masa-masa indah (maupun sedih) yang pernah saya alami.", b: "Menikmati perasaan, suasana, dan kegiatan yang sedang saya lakukan detik ini.", aScore: "Past", bScore: "Present" },
  { id: 40, category: "PastPresent", question: "Ketika terjadi konflik atau masalah di antara teman sebaya, hal pertama yang saya bahas adalah:", a: "Mencari tahu latar belakang masalahnya dan siapa yang salah di masa lalu.", b: "Mencari tahu bagaimana cara terbaik meredakan masalahnya sekarang juga.", aScore: "Past", bScore: "Present" },

  // --- DIMENSI 11: PRESENT vs FUTURE ---
  { id: 41, category: "PresentFuture", question: "Saat membuat rencana, saya lebih peduli pada:", a: "Kebutuhan mendesak yang harus diselesaikan hari ini atau minggu ini.", b: "Cita-cita dan dampak jangka panjang di masa depan.", aScore: "Present", bScore: "Future" },
  { id: 42, category: "PresentFuture", question: "Saya lebih tertarik dan bersemangat jika membahas tentang:", a: "Realita kehidupan dan kondisi nyata yang sedang dijalani sekarang.", b: "Inovasi, teknologi, dan bayangan tentang bagaimana dunia di masa depan.", aScore: "Present", bScore: "Future" },
  { id: 43, category: "PresentFuture", question: "Saya lebih suka menghabiskan tabungan atau tenaga saya untuk:", a: "Menikmati pengalaman, hobi, dan kebahagiaan untuk hari ini.", b: "Disimpan, diinvestasikan, atau disiapkan demi kesuksesan di masa depan.", aScore: "Present", bScore: "Future" },
  { id: 44, category: "PresentFuture", question: "Jika ada dua pilihan kegiatan, saya akan memilih:", a: "Kegiatan yang hasilnya bisa langsung terlihat dan dinikmati sekarang.", b: "Kegiatan yang mungkin sekarang susah, tapi menjanjikan manfaat besar di masa depan.", aScore: "Present", bScore: "Future" },

  // --- DIMENSI 12: INDEPENDENT vs COOPERATIVE ---
  { id: 45, category: "IndependentCooperative", question: "Saya merasa bisa memusatkan perhatian dengan paling maksimal jika:", a: "Dibiarkan bekerja atau belajar sendirian tanpa gangguan orang lain.", b: "Bisa berdiskusi, berinteraksi, atau belajar bersama orang lain.", aScore: "Independent", bScore: "Cooperative" },
  { id: 46, category: "IndependentCooperative", question: "Saat mengalami kesulitan atau jalan buntu, hal pertama yang saya lakukan:", a: "Berusaha keras mencari tahu dan menyelesaikannya sendiri dulu.", b: "Langsung bertanya, meminta bantuan, atau bertukar pikiran dengan teman.", aScore: "Independent", bScore: "Cooperative" },
  { id: 47, category: "IndependentCooperative", question: "Saya merasa jauh lebih bangga terhadap hasil kerja saya jika:", a: "Karya itu murni 100% hasil jerih payah, pemikiran, dan usaha saya sendiri.", b: "Karya itu adalah hasil kekompakan dan kolaborasi yang hebat dengan tim.", aScore: "Independent", bScore: "Cooperative" },
  { id: 48, category: "IndependentCooperative", question: "Ketika mendapat tugas atau proyek yang sangat berat, saya otomatis akan berpikir:", a: "\"Bagaimana caranya saya bisa membagi waktu untuk menyelesaikan ini sendirian?\"", b: "\"Siapa ya teman atau orang ahli yang bisa diajak kerja sama mengerjakan ini?\"", aScore: "Independent", bScore: "Cooperative" },

  // --- DIMENSI 13: PEOPLE vs TASK ---
  { id: 49, category: "PeopleTask", question: "Dalam sebuah kelompok kerja atau tugas sekolah, prioritas utama saya adalah:", a: "Menjaga suasana tetap asyik, kompak, dan tidak ada anggota yang tersinggung.", b: "Memastikan semua target tugas tercapai dan selesai tepat waktu.", aScore: "People", bScore: "Task" },
  { id: 50, category: "PeopleTask", question: "Jika teman satu tim saya kinerjanya tiba-tiba menurun drastis, saya akan:", a: "Bertanya tentang keadaannya secara personal dan memberikan dukungan moral.", b: "Lebih fokus menagih tugasnya atau segera mengambil alih bagian pekerjaannya.", aScore: "People", bScore: "Task" },
  { id: 51, category: "PeopleTask", question: "Jika jadwal nongkrong/kumpul bersama teman berbenturan dengan tugas yang belum selesai, saya cenderung:", a: "Memilih ikut kumpul demi menjaga hubungan pertemanan tetap baik.", b: "Membatalkan kumpul dan tetap di rumah/kantor untuk menuntaskan tugas.", aScore: "People", bScore: "Task" },
  { id: 52, category: "PeopleTask", question: "Menurut saya, seorang pemimpin (ketua/manajer) yang luar biasa adalah mereka yang bisa:", a: "Membuat semua anggotanya merasa dihargai, dipedulikan, dan bahagia.", b: "Mendorong semua anggotanya bekerja cepat dan mencapai prestasi yang tinggi.", aScore: "People", bScore: "Task" },

  // --- DIMENSI 14: POSSIBILITY vs NECESSITY ---
  { id: 53, category: "PossibilityNecessity", question: "Saya biasanya mulai bergerak melakukan sesuatu karena:", a: "Melihat ada peluang seru, tantangan baru, atau kesempatan untuk berkembang.", b: "Merasa itu adalah sebuah keharusan, tanggung jawab, atau aturan yang wajib diikuti.", aScore: "Possibility", bScore: "Necessity" },
  { id: 54, category: "PossibilityNecessity", question: "Alasan utama saya bertahan melakukan suatu rutinitas adalah:", a: "Karena masih banyak tantangan dan hal menarik yang belum saya eksplorasi.", b: "Karena rutinitas itu memang sudah menjadi kewajiban dan peran saya.", aScore: "Possibility", bScore: "Necessity" },
  { id: 55, category: "PossibilityNecessity", question: "Saya memutuskan untuk mempelajari ilmu atau *skill* baru karena:", a: "Ilmu ini sepertinya sangat menyenangkan dan bisa membuka jalan baru.", b: "Ilmu ini diwajibkan oleh sekolah/perusahaan, atau sangat mendesak dibutuhkan saat ini.", aScore: "Possibility", bScore: "Necessity" },
  { id: 56, category: "PossibilityNecessity", question: "Ketika saya diajak bergabung ke dalam sebuah kepanitiaan atau organisasi, saya ikut karena:", a: "Ini adalah kesempatan emas untuk mencoba pengalaman dan berkreasi.", b: "Saya merasa punya kewajiban moral untuk membantu karena mereka sedang butuh orang.", aScore: "Possibility", bScore: "Necessity" }
];

// --- questions_remaja.js ---
const QUESTIONS_REMAJA = [
  // --- TowardAway (1-4) ---
  { id: 1, category: "TowardAway", question: "Saat memutuskan untuk rajin belajar menghadapi ujian sekolah, motivasi utamamu adalah:", a: "Ingin mendapat nilai tinggi, masuk ranking kelas, atau memperoleh hadiah.", b: "Ingin menghindari remedial, tidak dimarahi orang tua, atau tidak malu.", aScore: "Toward", bScore: "Away" },
  { id: 2, category: "TowardAway", question: "Ketika kamu menetapkan target harian atau cita-cita baru, kamu lebih terdorong karena:", a: "Membayangkan serunya pencapaian atau keberhasilan yang akan didapat.", b: "Membayangkan akibat buruk jika kamu bermalas-malasan dan gagal.", aScore: "Toward", bScore: "Away" },
  { id: 3, category: "TowardAway", question: "Jika kamu diajak ikut kompetisi atau perlombaan di sekolah, kamu biasanya fokus pada:", a: "Peluang untuk menang, dapat piala, atau menjadi yang terbaik.", b: "Risiko kalah, rasa gugup, atau bagaimana agar tidak memalukan kelompok.", aScore: "Toward", bScore: "Away" },
  { id: 4, category: "TowardAway", question: "Saat memilih kegiatan liburan atau ekskul, kamu lebih menyukai:", a: "Mencoba kegiatan baru yang seru meskipun menantang dan ada risiko gagal.", b: "Pilihan yang aman dan santai agar liburan berjalan tanpa masalah.", aScore: "Toward", bScore: "Away" },

  // --- InternalExternal (5-8) ---
  { id: 5, category: "InternalExternal", question: "Setelah menyelesaikan sebuah tugas sekolah atau karya seni, kamu merasa yakin hasilnya bagus jika:", a: "Kamu sendiri merasa puas dan tahu itu sudah maksimal sesuai standar belajarmu.", b: "Guru memberikan nilai bagus, atau teman-teman memberikan pujian.", aScore: "Internal", bScore: "External" },
  { id: 6, category: "InternalExternal", question: "Ketika harus memilih jurusan sekolah, universitas, atau ekskul, kamu biasanya:", a: "Memutuskan sendiri berdasarkan minat dan keyakinan dalam dirimu.", b: "Mengikuti saran orang tua, arahan guru BK, atau pilihan teman dekat.", aScore: "Internal", bScore: "External" },
  { id: 7, category: "InternalExternal", question: "Saat memakai pakaian baru atau gaya rambut baru ke sekolah, kamu merasa percaya diri jika:", a: "Kamu merasa nyaman dan suka dengan penampilan barumu itu.", b: "Teman-teman sekelas memberikan pujian atau reaksi positif.", aScore: "Internal", bScore: "External" },
  { id: 8, category: "InternalExternal", question: "Jika ada teman yang mengkritik cara belajarmu, reaksi pertamamu adalah:", a: "Mengabaikannya jika kamu merasa caramu sudah paling cocok buat dirimu.", b: "Ragu dan langsung mencoba mengubah caramu mengikuti sarannya.", aScore: "Internal", bScore: "External" },

  // --- OptionsProcedures (9-12) ---
  { id: 9, category: "OptionsProcedures", question: "Saat mengerjakan tugas proyek dari guru, kamu lebih senang:", a: "Membuat konsep kreatif sendiri dan mencoba berbagai cara yang berbeda.", b: "Mengikuti instruksi langkah demi langkah yang sudah ditulis guru di lembar panduan.", aScore: "Options", bScore: "Procedures" },
  { id: 10, category: "OptionsProcedures", question: "Jika cara belajarmu di kelas diatur dengan sangat kaku dan rutin, kamu biasanya:", a: "Merasa bosan dan mencari alternatif atau cara lain agar belajar lebih menyenangkan.", b: "Merasa nyaman karena sudah terbiasa dan tidak perlu bingung mencari cara baru.", aScore: "Options", bScore: "Procedures" },
  { id: 11, category: "OptionsProcedures", question: "Saat memainkan game baru atau merakit mainan rakitan (Lego/puzzle), kamu biasanya:", a: "Langsung mencobanya dan meraba-raba sendiri cara mainnya.", b: "Membaca panduan atau tutorialnya terlebih dahulu agar tidak salah langkah.", aScore: "Options", bScore: "Procedures" },
  { id: 12, category: "OptionsProcedures", question: "Kamu paling merasa tidak nyaman atau kesal jika:", a: "Harus mengikuti peraturan ekskul yang sangat kaku tanpa boleh dimodifikasi.", b: "Diberi tugas kelompok tapi tidak ada instruksi pembagian tugas yang jelas.", aScore: "Options", bScore: "Procedures" },

  // --- BigPictureDetail (13-16) ---
  { id: 13, category: "BigPictureDetail", question: "Ketika guru menerangkan pelajaran baru di papan tulis, kamu lebih mudah paham jika:", a: "Mendengar garis besar, tujuan belajar, atau manfaat materi itu dulu.", b: "Diberi contoh soal yang detail, langkah rumus, dan penjelasan lengkap dulu.", aScore: "BigPicture", bScore: "Detail" },
  { id: 14, category: "BigPictureDetail", question: "Saat kamu menceritakan pengalaman liburan atau menonton film baru kepada teman, kamu cenderung:", a: "Menceritakan inti cerita atau bagian paling seru saja secara singkat.", b: "Menceritakan secara urut, mulai dari awal kejadian, nama tempat, hingga detail kecilnya.", aScore: "BigPicture", bScore: "Detail" },
  { id: 15, category: "BigPictureDetail", question: "Saat merencanakan kegiatan kelompok bersama teman-teman, kamu lebih suka memikirkan:", a: "Tujuan umum acara dan ide seru apa saja yang akan dilakukan.", b: "Rincian jam acara, perlengkapan yang harus dibawa, dan pembagian dana.", aScore: "BigPicture", bScore: "Detail" },
  { id: 16, category: "BigPictureDetail", question: "Menurutmu, presentasi teman sekelas di depan kelas itu membosankan jika:", a: "Terlalu banyak angka, data teknis, atau slide yang penuh dengan tulisan detail.", b: "Hanya membahas konsep umum atau teori tanpa contoh nyata yang jelas.", aScore: "BigPicture", bScore: "Detail" },

  // --- MatchingMismatching (17-20) ---
  { id: 17, category: "MatchingMismatching", question: "Saat membandingkan dua mata pelajaran atau dua game, pikiranmu secara otomatis:", a: "Mencari kesamaannya (apa yang membuat keduanya mirip atau sejenis).", b: "Mencari perbedaannya (apa keunikan atau perbedaan mencolok di antara keduanya).", aScore: "Matching", bScore: "Mismatching" },
  { id: 18, category: "MatchingMismatching", question: "Saat diajak berdiskusi tentang suatu ide acara kelas, tanggapan pertamamu biasanya:", a: "Mendukung dan melihat bagian mana dari ide itu yang sudah bagus.", b: "Menyadari bagian mana yang kurang realistis atau perlu diperbaiki lagi.", aScore: "Matching", bScore: "Mismatching" },
  { id: 19, category: "MatchingMismatching", question: "Ketika kamu masuk ke kelas baru atau sekolah baru, hal pertama yang kamu perhatikan adalah:", a: "Teman-teman yang memiliki hobi atau selera musik yang mirip dengamu.", b: "Perbedaan kebiasaan atau peraturan di kelas baru ini dibanding kelas lamamu.", aScore: "Matching", bScore: "Mismatching" },
  { id: 20, category: "MatchingMismatching", question: "Saat mendengarkan curhat atau pendapat temanmu, respon otomatis pikiranmu adalah:", a: "Menyetujui atau mengangguk pada bagian yang sejalan dengan pikiran saya.", b: "Mencari celah, kelemahan, atau bagian yang tidak saya setujui dari pendapatnya.", aScore: "Matching", bScore: "Mismatching" },

  // --- SelfOthers (21-24) ---
  { id: 21, category: "SelfOthers", question: "Saat kamu memilih untuk istirahat di rumah daripada pergi main dengan teman, kamu merasa:", a: "Tenang karena fokus memenuhi kebutuhan dirimu sendiri untuk memulihkan energi.", b: "Kurang enak hati karena khawatir temanmu merasa kecewa atau tersinggung.", aScore: "Self", bScore: "Others" },
  { id: 22, category: "SelfOthers", question: "Dalam kerja kelompok, kamu merasa tugas utamamu adalah:", a: "Mengerjakan bagian tugas pribadimu dengan sebaik-baiknya agar tidak membebani tim.", b: "Membantu teman kelompok yang kesulitan agar semua anggota bisa selesai bersama.", aScore: "Self", bScore: "Others" },
  { id: 23, category: "SelfOthers", question: "Ketika kamu memiliki uang jajan lebih atau makanan kesukaan, kamu cenderung:", a: "Menyimpannya untuk keperluan pribadimu atau dinikmati sendiri nanti.", b: "Membagikannya langsung kepada teman atau saudaramu agar senang bersama.", aScore: "Self", bScore: "Others" },
  { id: 24, category: "SelfOthers", question: "Jika ada perbedaan keinginan saat nongkrong bersama sahabat, kamu akan:", a: "Mengusulkan pilihanmu terlebih dahulu dan meyakinkan mereka agar setuju.", b: "Mengikuti saja apa suara terbanyak dari teman agar tidak ada konflik.", aScore: "Self", bScore: "Others" },

  // --- ProactiveReactive (25-28) ---
  { id: 25, category: "ProactiveReactive", question: "Saat ditugaskan membuat kelompok belajar baru di kelas:", a: "Kamu langsung bergerak mengajak teman dan mengatur pembagian tugas kelompok.", b: "Kamu menunggu diajak oleh teman lain atau menunggu guru yang menunjuk kelompokmu.", aScore: "Proactive", bScore: "Reactive" },
  { id: 26, category: "ProactiveReactive", question: "Jika ada masalah mendadak di sekolah (misal: tugas tertinggal di rumah), kamu biasanya:", a: "Spontan mencari solusi tercepat saat itu juga (menghubungi orang rumah/cetak ulang).", b: "Menganalisis situasinya dulu dengan tenang, baru mengambil tindakan.", aScore: "Proactive", bScore: "Reactive" },
  { id: 27, category: "ProactiveReactive", question: "Saat guru bertanya, 'Siapa yang mau maju ke depan untuk mencoba soal ini?', kamu biasanya:", a: "Langsung angkat tangan tanpa ragu, urusan benar atau salah dipikirkan nanti.", b: "Menunggu teman lain maju dulu, atau berpikir dulu sampai yakin baru angkat tangan.", aScore: "Proactive", bScore: "Reactive" },
  { id: 28, category: "ProactiveReactive", question: "Gaya belajarmu saat menghadapi materi praktik (seperti komputer atau sains) adalah:", a: "Langsung mencoba mengotak-atik aplikasinya/alatnya secara langsung.", b: "Mendengarkan penjelasan teori atau membaca modulnya dulu sebelum menyentuh alat.", aScore: "Proactive", bScore: "Reactive" },

  // --- GeneralSpecific (29-32) ---
  { id: 29, category: "GeneralSpecific", question: "Saat menjelaskan rencana liburan atau pensi sekolah ke teman, kamu cenderung:", a: "Menjelaskan garis besarnya saja (tujuan utama dan keseruan besarnya).", b: "Menjelaskan rincian jadwal, biaya, pakaian, dan pembagian tugas dengan detail.", aScore: "General", bScore: "Specific" },
  { id: 30, category: "GeneralSpecific", question: "Kamu lebih suka menerima instruksi tugas sekolah yang:", a: "Singkat, langsung ke hasil akhir yang diinginkan, dan bebas menentukan cara kerjanya.", b: "Panjang lebar, rinci, lengkap dengan kriteria penilaian per poin.", aScore: "General", bScore: "Specific" },
  { id: 31, category: "GeneralSpecific", question: "Saat menceritakan kejadian seru di sekolah hari ini ke orang tua, kamu cenderung:", a: "Hanya menyebutkan intinya saja (Misal: 'Seru Pa, tadi ada pentas musik').", b: "Menceritakan kronologi lengkap, siapa saja yang tampil, dan lagu yang dibawakan.", aScore: "General", bScore: "Specific" },
  { id: 32, category: "GeneralSpecific", question: "Jika kamu dipercaya menjadi ketua kelas atau panitia acara, kamu akan:", a: "Menjelaskan target utama acara dan membiarkan teman-teman berkreasi sendiri.", b: "Membuat daftar tugas (to-do list) yang sangat mendetail untuk setiap seksi.", aScore: "General", bScore: "Specific" },

  // --- SamenessDifference (33-36) ---
  { id: 33, category: "SamenessDifference", question: "Dalam menjalani aktivitas sehari-hari (seperti rute jalan, jam belajar), kamu menyukai:", a: "Keteraturan, jadwal yang stabil, dan tidak banyak perubahan mendadak.", b: "Variasi, tantangan baru, dan fleksibilitas dalam mengatur waktu.", aScore: "Sameness", bScore: "Difference" },
  { id: 34, category: "SamenessDifference", question: "Jika lingkungan pertemanan atau kelasmu tidak berubah dalam waktu lama, kamu merasa:", a: "Sangat nyaman karena merasa aman dan sudah saling memahami.", b: "Mulai bosan dan ingin mencari tantangan atau teman baru di luar.", aScore: "Sameness", bScore: "Difference" },
  { id: 35, category: "SamenessDifference", question: "Saat akhir pekan atau waktu libur sekolah tiba, kamu lebih sering:", a: "Pergi ke tempat nongkrong atau melakukan hobi langganan yang sudah biasa.", b: "Mencari tempat nongkrong baru atau mencoba aktivitas yang belum pernah dicoba.", aScore: "Sameness", bScore: "Difference" },
  { id: 36, category: "SamenessDifference", question: "Jika kamu sudah menekuni satu ekskul atau olahraga yang sama selama bertahun-tahun, kamu merasa:", a: "Sangat senang karena keahlianmu terus terasah dan ritmenya sudah kamu kuasai.", b: "Mulai jenuh dan ingin sekali mencoba pindah ke ekskul atau cabang olahraga lain.", aScore: "Sameness", bScore: "Difference" },

  // --- PastPresent (37-40) ---
  { id: 37, category: "PastPresent", question: "Saat menyelesaikan tugas atau masalah belajar, pikiranmu cenderung:", a: "Mengingat-ingat bagaimana cara kakak kelas atau dirimu menyelesaikannya dulu.", b: "Fokus pada apa yang bisa dan harus kamu lakukan saat ini agar cepat selesai.", aScore: "Past", bScore: "Present" },
  { id: 38, category: "PastPresent", question: "Ketika sedang melamun atau santai, pikiranmu paling sering melayang ke:", a: "Memori masa kecil, kejadian lucu masa lalu, atau kenangan bersama teman lama.", b: "Menikmati lagu, makanan, atau suasana yang sedang kamu rasakan saat ini.", aScore: "Past", bScore: "Present" },
  { id: 39, category: "PastPresent", question: "Jika kamu melakukan kesalahan (seperti terlambat masuk kelas), kamu lebih sering:", a: "Memikirkan penyebabnya di masa lalu (misal: begadang semalam, macet di jalan).", b: "Menerima keadaan sekarang dan fokus meminta maaf serta mengikuti pelajaran.", aScore: "Past", bScore: "Present" },
  { id: 40, category: "PastPresent", question: "Saat terjadi salah paham di antara teman-teman dekat, hal pertama yang kamu lakukan:", a: "Membahas kembali awal mula terjadinya masalah dan siapa yang salah sejak awal.", b: "Fokus mendiskusikan bagaimana cara agar situasi pertemanan kembali tenang sekarang.", aScore: "Past", bScore: "Present" },

  // --- PresentFuture (41-44) ---
  { id: 41, category: "PresentFuture", question: "Saat merencanakan target mingguan, kamu lebih mengutamakan:", a: "Tugas dan kebutuhan mendesak yang harus diselesaikan hari ini atau besok.", b: "Mempersiapkan bekal nilai atau portofolio untuk kuliah/kerja di masa depan.", aScore: "Present", bScore: "Future" },
  { id: 42, category: "PresentFuture", question: "Ketika mengobrol santai bersama sahabat, topik yang membuatmu paling antusias:", a: "Hal-hal seru yang sedang viral saat ini atau gosip sekolah terbaru.", b: "Cita-cita, rencana kuliah, impian karier, atau nanti ingin jadi apa.", aScore: "Present", bScore: "Future" },
  { id: 43, category: "PresentFuture", question: "Bagaimana cara kamu menghabiskan uang jajan tambahan dari orang tua?", a: "Langsung dibelikan barang yang diinginkan atau makanan enak hari ini.", b: "Ditabung untuk rencana pembelian barang impian di masa depan.", aScore: "Present", bScore: "Future" },
  { id: 44, category: "PresentFuture", question: "Jika ada dua pilihan kegiatan ekskul atau magang, kamu memilih:", a: "Kegiatan yang seru dan bisa langsung dinikmati kesenangannya saat ini.", b: "Kegiatan yang mungkin sekarang terasa melelahkan, tapi sangat berguna untuk masa depan.", aScore: "Present", bScore: "Future" },

  // --- IndependentCooperative (45-48) ---
  { id: 45, category: "IndependentCooperative", question: "Kamu merasa bisa fokus belajar dan memahami materi dengan maksimal jika:", a: "Belajar sendirian di kamar yang tenang tanpa suara bising orang lain.", b: "Belajar kelompok, berdiskusi, dan saling tanya jawab dengan teman.", aScore: "Independent", bScore: "Cooperative" },
  { id: 46, category: "IndependentCooperative", question: "Ketika kamu mendapat kesulitan saat belajar coding atau matematika:", a: "Kamu akan berusaha keras memikirkan dan mencari jawabannya sendiri dulu di internet.", b: "Kamu langsung bertanya pada guru les, orang tua, atau berdiskusi dengan teman sekelas.", aScore: "Independent", bScore: "Cooperative" },
  { id: 47, category: "IndependentCooperative", question: "Kamu merasa lebih bangga saat tugas kelompokmu selesai karena:", a: "Bagian tugas yang kamu kerjakan mendapat nilai tertinggi dan diakui sangat bagus.", b: "Seluruh tim kompak, saling bantu, dan kerja sama timnya berjalan sangat seru.", aScore: "Independent", bScore: "Cooperative" },
  { id: 48, category: "IndependentCooperative", question: "Ketika mendapat proyek sekolah yang besar, reaksi pertamamu adalah berpikir:", a: "\"Bagaimana cara saya membagi waktu agar bisa menyelesaikan tugas ini sendiri?\"", b: "\"Siapa saja teman kelas yang bisa saya ajak kerja sama untuk menyelesaikan tugas ini?\"", aScore: "Independent", bScore: "Cooperative" },

  // --- PeopleTask (49-52) ---
  { id: 49, category: "PeopleTask", question: "Dalam pengerjaan tugas kelompok sekolah, hal yang paling kamu prioritaskan:", a: "Menjaga kebersamaan, keceriaan kelompok, dan menghindari perselisihan teman.", b: "Memastikan target tugas kelompok selesai tepat waktu dengan hasil terbaik.", aScore: "People", bScore: "Task" },
  { id: 50, category: "PeopleTask", question: "Jika ada teman kelompokmu yang kinerjanya menurun karena sedang ada masalah keluarga:", a: "Kamu akan menghiburnya secara personal, menanyakan kabarnya, dan mendengarkan curhatnya.", b: "Kamu akan mengingatkannya tentang deadline tugas atau mengambil alih pekerjaannya agar target selesai.", aScore: "People", bScore: "Task" },
  { id: 51, category: "PeopleTask", question: "Jika jadwal main bersama teman sekelas bentrok dengan PR yang belum selesai, kamu cenderung:", a: "Tetap pergi main bersama teman demi menjaga keakraban pertemanan.", b: "Membatalkan rencana main dan fokus mengerjakan PR sampai selesai.", aScore: "People", bScore: "Task" },
  { id: 52, category: "PeopleTask", question: "Menurutmu, ketua kelas yang sangat hebat adalah ketua kelas yang:", a: "Bisa merangkul semua teman, adil, peduli, dan membuat kelas kompak menyenangkan.", b: "Bisa mengatur kelas dengan tertib, tugas-tugas kelas beres, dan berprestasi.", aScore: "People", bScore: "Task" },

  // --- PossibilityNecessity (53-56) ---
  { id: 53, category: "PossibilityNecessity", question: "Kamu memutuskan untuk mendaftar ekskul atau kegiatan volunter baru karena:", a: "Melihat adanya peluang menarik untuk menambah relasi, ilmu, dan pengalaman seru.", b: "Merasa kegiatan itu penting sebagai kewajiban sekolah atau syarat kelulusan ekskul.", aScore: "Possibility", bScore: "Necessity" },
  { id: 54, category: "PossibilityNecessity", question: "Alasan utamamu tetap rajin mengikuti les atau bimbingan belajar:", a: "Karena les tersebut seru dan membuka wawasan baru yang tidak diajarkan di kelas.", b: "Karena les tersebut memang sudah menjadi aturan orang tua dan kebutuhan kelulusan.", aScore: "Possibility", bScore: "Necessity" },
  { id: 55, category: "PossibilityNecessity", question: "Ketika kamu memutuskan membeli buku bacaan baru atau belajar bahasa asing baru:", a: "Kamu didorong rasa penasaran dan ingin mengeksplorasi ilmu baru tersebut.", b: "Kamu merasa itu adalah kebutuhan mendesak untuk menunjang nilai akademismu.", aScore: "Possibility", bScore: "Necessity" },
  { id: 56, category: "PossibilityNecessity", question: "Jika kamu diajak berpartisipasi dalam pentas seni kelas, kamu ikut karena:", a: "Ini adalah kesempatan yang sangat bagus untuk unjuk gigi dan mengekspresikan diri.", b: "Kamu merasa memiliki tanggung jawab moral untuk mewakili kelas agar kelas memiliki perwakilan.", aScore: "Possibility", bScore: "Necessity" }
];

// --- questions_anak.js ---
const QUESTIONS_ANAK = [
  // --- TowardAway (1-4) ---
  { id: 1, category: "TowardAway", question: "Saat meminta anak merapikan mainan atau mengerjakan tugas/PR, mana yang lebih ampuh?", a: "Menjanjikan kesenangan (Misal: 'Ayo rapikan mainannya, nanti kita jalan-jalan!').", b: "Mengingatkan akibat/konsekuensi (Misal: 'Ayo beresin, nanti mainannya disita Papa lho!').", aScore: "Toward", bScore: "Away" },
  { id: 2, category: "TowardAway", question: "Saat anak menetapkan target bermain atau belajarnya, ia lebih terdorong karena:", a: "Antusias dengan hadiah, pujian, atau piala yang akan didapatkannya.", b: "Takut membuat orang tua kecewa, cemas dengan nilai jelek, atau menghindari hukuman.", aScore: "Toward", bScore: "Away" },
  { id: 3, category: "TowardAway", question: "Jika anak diajak ikut perlombaan atau pentas seni anak, fokus utamanya biasanya pada:", a: "Keinginan untuk menang, mendapatkan medali, atau tampil di panggung.", b: "Rasa cemas jika melakukan kesalahan, takut ditertawakan, atau malu ditonton orang.", aScore: "Toward", bScore: "Away" },
  { id: 4, category: "TowardAway", question: "Ketika diajak berlibur atau bermain ke tempat baru, anak cenderung lebih menyukai:", a: "Mencoba permainan/aktivitas baru yang seru dan menantang meskipun berisiko jatuh.", b: "Memilih aktivitas yang aman, santai, dan sudah pasti ia kuasai agar tidak cedera/takut.", aScore: "Toward", bScore: "Away" },

  // --- InternalExternal (5-8) ---
  { id: 5, category: "InternalExternal", question: "Setelah anak menggambar atau merakit sesuatu (seperti Lego), ia merasa karyanya bagus jika:", a: "Ia sendiri merasa puas dan bangga dengan hasilnya tanpa mempedulikan penilaian orang lain.", b: "Orang tua atau orang di sekitarnya memuji dan memberikan apresiasi atas karyanya.", aScore: "Internal", bScore: "External" },
  { id: 6, category: "InternalExternal", question: "Ketika anak harus memilih pakaian, sepatu, atau mainan baru yang ingin dibeli, ia biasanya:", a: "Bersikeras memilih sendiri sesuai seleranya, meskipun pilihan warnanya tidak serasi.", b: "Sering bertanya 'Ini bagus gak, Pa?' atau meminta Anda untuk memilihkan untuknya.", aScore: "Internal", bScore: "External" },
  { id: 7, category: "InternalExternal", question: "Saat anak memakai pakaian baru atau membawakan bekal unik ke sekolah, ia percaya diri saat:", a: "Ia sendiri merasa nyaman dan suka dengan pakaian/bekal yang dibawanya.", b: "Teman-teman sekolah atau gurunya memuji penampilan atau bekalnya.", aScore: "Internal", bScore: "External" },
  { id: 8, category: "InternalExternal", question: "Jika ada teman sebaya yang mengomentari atau mengkritik cara bermainnya, reaksi anak adalah:", a: "Mengabaikan komentar tersebut dan tetap asyik bermain dengan caranya sendiri.", b: "Terlihat ragu, sedih, dan langsung mencoba mengikuti cara bermain temannya.", aScore: "Internal", bScore: "External" },

  // --- OptionsProcedures (9-12) ---
  { id: 9, category: "OptionsProcedures", question: "Saat anak dibelikan mainan konstruksi (seperti Lego atau puzzle), bagaimana ia memainkannya?", a: "Mengabaikan buku petunjuk dan merakit dengan bebas menggunakan imajinasinya sendiri.", b: "Meminta dibukakan buku panduan dan ingin merakit langkah demi langkah sesuai gambar.", aScore: "Options", bScore: "Procedures" },
  { id: 10, category: "OptionsProcedures", question: "Jika aktivitas bermain anak diatur secara kaku dengan jadwal dan instruksi ketat, ia biasanya:", a: "Cepat bosan, rewel, atau berusaha mencari-cari cara/mainan alternatif lainnya.", b: "Merasa nyaman karena ia tahu persis urutan mainnya dan tidak perlu menebak-nebak.", aScore: "Options", bScore: "Procedures" },
  { id: 11, category: "OptionsProcedures", question: "Saat anak diajarkan menggambar atau mewarnai gambar baru di rumah:", a: "Ia lebih suka bereksperimen sendiri mewarnai dengan warna-warna pilihannya.", b: "Ia lebih suka diajarkan contohnya dulu langkah demi langkah lalu menirunya.", aScore: "Options", bScore: "Procedures" },
  { id: 12, category: "OptionsProcedures", question: "Anak terlihat paling tidak nyaman atau rewel jika:", a: "Harus mengikuti rutinitas yang sangat kaku tanpa ada variasi bermain sama sekali.", b: "Diberi tugas belajar/merapikan kamar tanpa petunjuk yang jelas dari orang tua.", aScore: "Options", bScore: "Procedures" },

  // --- BigPictureDetail (13-16) ---
  { id: 13, category: "BigPictureDetail", question: "Saat anak diajarkan pelajaran/konsep baru (seperti berhitung), ia lebih mudah paham jika:", a: "Mendapatkan gambaran umum atau tujuan dari apa yang dipelajarinya terlebih dahulu.", b: "Diberi contoh angka-angka spesifik, benda nyata, dan penjelasan rinci satu per satu.", aScore: "BigPicture", bScore: "Detail" },
  { id: 14, category: "BigPictureDetail", question: "Ketika anak menceritakan film kartun baru yang ditonton atau kegiatan di sekolah, ia cenderung:", a: "Hanya menceritakan inti cerita atau kejadian paling lucu secara singkat.", b: "Menceritakan urutan kejadian secara detail, nama-nama karakter, hingga detail kecilnya.", aScore: "BigPicture", bScore: "Detail" },
  { id: 15, category: "BigPictureDetail", question: "Saat anak merencanakan bermain atau menggambar bersama saudara, ia lebih fokus pada:", a: "Ide umum permainan apa yang akan dimainkan bersama.", b: "Pembagian peran yang detail, daftar mainan yang dikeluarkan, dan aturan mainnya.", aScore: "BigPicture", bScore: "Detail" },
  { id: 16, category: "BigPictureDetail", question: "Menurut Anda, buku cerita bergambar itu kurang menarik bagi anak jika:", a: "Terlalu banyak tulisan penjelasan yang detail dan padat.", b: "Hanya ada gambar besar tanpa penjelasan detail tentang apa yang sedang terjadi.", aScore: "BigPicture", bScore: "Detail" },

  // --- MatchingMismatching (17-20) ---
  { id: 17, category: "MatchingMismatching", question: "Saat membandingkan dua mainan atau dua hewan, anak secara spontan cenderung:", a: "Melihat kesamaannya terlebih dahulu (Misal: 'Sama-sama punya kaki empat', 'Sama-sama berbulu').", b: "Melihat perbedaannya terlebih dahulu (Misal: 'Yang ini warnanya beda', 'Yang ini lebih besar').", aScore: "Matching", bScore: "Mismatching" },
  { id: 18, category: "MatchingMismatching", question: "Saat Anda memberikan ide mainan baru atau rencana bepergian, reaksi pertama anak:", a: "Menyambut baik dan berfokus pada kesenangan yang bisa didapatkan.", b: "Menyoroti kekurangan atau kekhawatiran dari ide tersebut (Misal: 'Tapi nanti capek').", aScore: "Matching", bScore: "Mismatching" },
  { id: 19, category: "MatchingMismatching", question: "Ketika anak masuk ke taman bermain atau kelas baru, hal pertama yang disadarinya adalah:", a: "Anak-anak lain yang memiliki kesamaan (misal: memakai baju bergambar sama).", b: "Hal-hal atau aturan baru di tempat itu yang berbeda dari rumah/sekolah lamanya.", aScore: "Matching", bScore: "Mismatching" },
  { id: 20, category: "MatchingMismatching", question: "Saat Anda mengajarkan nasihat atau aturan baru, anak secara otomatis:", a: "Mengangguk setuju dan mencari kesamaan dengan pengalamannya yang lalu.", b: "Mencari celah pengecualian (Misal: 'Tapi kemarin Kakak boleh gak gitu?').", aScore: "Matching", bScore: "Mismatching" },

  // --- SelfOthers (21-24) ---
  { id: 21, category: "SelfOthers", question: "Saat anak lebih memilih bermain sendiri di kamarnya ketimbang berbagi mainan dengan teman:", a: "Ia tampak tenang dan asyik fokus memenuhi kepuasan bermainnya sendiri.", b: "Ia tampak gelisah dan merasa kurang nyaman jika temannya merasa diabaikan.", aScore: "Self", bScore: "Others" },
  { id: 22, category: "SelfOthers", question: "Dalam permainan kelompok (seperti lari estafet atau permainan papan), anak cenderung:", a: "Fokus menyelesaikan bagian permainannya sendiri dengan sebaik mungkin agar menang.", b: "Membantu temannya yang tertinggal atau menyemangati temannya agar kompak.", aScore: "Self", bScore: "Others" },
  { id: 23, category: "SelfOthers", question: "Ketika anak mendapatkan jajanan atau mainan favoritnya, kecenderungan spontannya:", a: "Menyimpannya rapat-rapat atau memakannya sendiri sampai habis.", b: "Membagikannya dengan senang hati kepada teman, saudara, atau orang tuanya.", aScore: "Self", bScore: "Others" },
  { id: 24, category: "SelfOthers", question: "Jika terjadi perbedaan keinginan bermain antara anak dan teman bermainnya, anak biasanya:", a: "Berkeras menginginkan permainannya yang dipilih dan tidak mau mengalah.", b: "Mudah mengalah dan mengikuti keinginan temannya demi menjaga kedamaian bermain.", aScore: "Self", bScore: "Others" },

  // --- ProactiveReactive (25-28) ---
  { id: 25, category: "ProactiveReactive", question: "Saat berada di tempat bermain baru (playground) atau bertemu teman baru:", a: "Ia langsung berlari mencoba mainan atau menyapa temannya tanpa ragu-ragu.", b: "Ia mengamati keadaan sekitar dari jauh dulu, atau menempel pada Anda sebelum mulai bermain.", aScore: "Proactive", bScore: "Reactive" },
  { id: 26, category: "ProactiveReactive", question: "Saat mainannya rusak atau mengalami kesulitan (misal: botol minum macet), anak biasanya:", a: "Langsung mencoba memperbaikinya sendiri atau mencari cara sendiri saat itu juga.", b: "Diam sejenak, mengamati kerusakannya, lalu meminta bantuan Anda untuk memperbaikinya.", aScore: "Proactive", bScore: "Reactive" },
  { id: 27, category: "ProactiveReactive", question: "Saat guru di kelas bertanya 'Siapa yang mau mencoba menjawab?', kecenderungan anak:", a: "Langsung mengacungkan tangan dengan spontan meskipun belum tentu tahu jawabannya.", b: "Berpikir dahulu, menunggu teman lain maju, baru mengacungkan tangan jika sudah yakin.", aScore: "Proactive", bScore: "Reactive" },
  { id: 28, category: "ProactiveReactive", question: "Gaya anak saat belajar mengoperasikan mainan interaktif/aplikasi edukatif baru:", a: "Langsung menekan berbagai tombol secara acak untuk tahu reaksinya.", b: "Menunggu Anda memberi contoh cara menekannya terlebih dahulu baru ia meniru.", aScore: "Proactive", bScore: "Reactive" },

  // --- GeneralSpecific (29-32) ---
  { id: 29, category: "GeneralSpecific", question: "Saat menceritakan pengalaman liburan atau kejadian di sekolah kepada Anda, anak cenderung:", a: "Bercerita secara singkat dan langsung menyebutkan intinya saja.", b: "Bercerita dengan sangat detail, runut dari awal kejadian sampai akhir cerita.", aScore: "General", bScore: "Specific" },
  { id: 30, category: "GeneralSpecific", question: "Anak lebih mudah memahami dan mengikuti instruksi tugas/tanggung jawab yang:", a: "Singkat, padat, dan langsung menjelaskan target akhir yang harus diselesaikan.", b: "Panjang, mendetail, dan menyebutkan langkah-langkahnya secara bertahap.", aScore: "General", bScore: "Specific" },
  { id: 31, category: "GeneralSpecific", question: "Ketika anak diajak bercerita tentang temannya di sekolah, ia cenderung menceritakan:", a: "Gambaran umumnya saja (Misal: 'Temanku asyik-asyik semua').", b: "Menyebutkan nama-namanya, kebiasaan mereka, dan mainan apa saja yang dimainkan.", aScore: "General", bScore: "Specific" },
  { id: 32, category: "GeneralSpecific", question: "Jika anak diberi tugas membantu merapikan mainan bersama saudaranya, anak akan:", a: "Menyuruh saudaranya membantu merapikan tanpa membagi tugas secara khusus.", b: "Membagi mainan mana yang harus dimasukkan kotak oleh saudaranya secara spesifik.", aScore: "General", bScore: "Specific" },

  // --- SamenessDifference (33-36) ---
  { id: 33, category: "SamenessDifference", question: "Dalam hal menu makanan bekal atau makanan sehari-hari, anak lebih menyukai:", a: "Menu yang itu-itu saja yang sudah ia kenal rasanya (merasa aman).", b: "Suka meminta menu baru dan antusias mencoba makanan yang belum pernah ia makan.", aScore: "Sameness", bScore: "Difference" },
  { id: 34, category: "SamenessDifference", question: "Terhadap rutinitas harian yang sama berulang-ulang, bagaimana reaksi anak?", a: "Sangat nyaman karena ia merasa aman ketika jadwal hariannya teratur.", b: "Cepat bosan dan sering meminta aktivitas/suasana bermain baru.", aScore: "Sameness", bScore: "Difference" },
  { id: 35, category: "SamenessDifference", question: "Saat akhir pekan diajak bepergian, anak lebih sering meminta:", a: "Pergi ke tempat rekreasi langganan yang sudah biasa ia kunjungi.", b: "Diajak ke tempat rekreasi atau wahana bermain baru yang belum pernah dikunjungi.", aScore: "Sameness", bScore: "Difference" },
  { id: 36, category: "SamenessDifference", question: "Jika anak memiliki satu mainan favorit, ia biasanya:", a: "Bisa memainkan mainan yang sama selama berbulan-bulan tanpa bosan.", b: "Cepat bosan and selalu meminta dibelikan mainan baru setelah beberapa hari.", aScore: "Sameness", bScore: "Difference" },

  // --- PastPresent (37-40) ---
  { id: 37, category: "PastPresent", question: "Saat anak berbuat salah (seperti menumpahkan air/susu), apa reaksi pertamanya?", a: "Mencari alasan masa lalu (Misal: 'Tadi tersenggol kucing', 'Kakak yang taruh situ').", b: "Fokus pada keadaan sekarang (Minta maaf atau langsung mengambil lap).", aScore: "Past", bScore: "Present" },
  { id: 38, category: "PastPresent", question: "Ketika sedang santai atau menjelang tidur, anak lebih sering membicarakan:", a: "Mengingat kejadian seru sekolah kemarin atau menceritakan memori masa kecilnya.", b: "Membicarakan tentang apa yang sedang ia rasakan atau ingin lakukan saat ini.", aScore: "Past", bScore: "Present" },
  { id: 39, category: "PastPresent", question: "Saat bermain game atau menyusun puzzle, jika anak gagal, ia cenderung:", a: "Mengingat kegagalan sebelumnya dan merasa cemas tidak bisa menyelesaikannya.", b: "Fokus pada langkah penyusunan yang sedang ia kerjakan di depannya saat ini.", aScore: "Past", bScore: "Present" },
  { id: 40, category: "PastPresent", question: "Jika anak bertengkar dengan saudaranya, apa yang pertama kali anak ungkit?", a: "Membahas kesalahan saudaranya di masa lalu ('Kemarin juga gitu').", b: "Fokus pada apa yang dipermasalahkan saat ini agar permainannya bisa dilanjutkan.", aScore: "Past", bScore: "Present" },

  // --- PresentFuture (41-44) ---
  { id: 41, category: "PresentFuture", question: "Bagaimana cara anak menikmati makanan atau jajanan favoritnya?", a: "Langsung dihabiskan saat itu juga demi kepuasan saat ini.", b: "Disimpan sebagian, direncanakan mau dimakan kapan, dibayangkan untuk nanti.", aScore: "Present", bScore: "Future" },
  { id: 42, category: "PresentFuture", question: "Ketika diajak mengobrol tentang kegemarannya, anak lebih bersemangat jika membahas:", a: "Mainan atau aktivitas nyata yang sedang ia mainkan hari ini.", b: "Cita-citanya nanti saat sudah besar atau apa yang ingin ia capai esok hari.", aScore: "Present", bScore: "Future" },
  { id: 43, category: "PresentFuture", question: "Bagaimana anak menyikapi tabungan atau uang saku yang didapatkannya?", a: "Langsung ingin dibelikan mainan atau jajanan saat itu juga.", b: "Dengan senang hati menabung di celengan untuk membeli barang impiannya kelak.", aScore: "Present", bScore: "Future" },
  { id: 44, category: "PresentFuture", question: "Jika diberi pilihan antara hadiah kecil sekarang atau hadiah besar nanti, anak cenderung:", a: "Memilih hadiah kecil asalkan bisa didapatkan dan dimainkan saat ini juga.", b: "Sabar menunggu beberapa hari demi mendapatkan hadiah yang jauh lebih besar.", aScore: "Present", bScore: "Future" },

  // --- IndependentCooperative (45-48) ---
  { id: 45, category: "IndependentCooperative", question: "Di rumah, anak tampak lebih sering dan nyaman menghabiskan waktu luangnya dengan:", a: "Bermain, menggambar, atau merakit mainannya sendiri secara mandiri.", b: "Mencari teman, memanggil saudaranya, atau meminta Anda menemani bermain.", aScore: "Independent", bScore: "Cooperative" },
  { id: 46, category: "IndependentCooperative", question: "Saat anak kesulitan mengenakan sepatu atau mengerjakan tugas sekolah:", a: "Ia akan berusaha keras mencobanya sendiri dulu dan menolak dibantu.", b: "Ia langsung memanggil Anda atau saudaranya untuk meminta bantuan.", aScore: "Independent", bScore: "Cooperative" },
  { id: 47, category: "IndependentCooperative", question: "Anak tampak lebih bersemangat dan gembira dalam aktivitas bermain jika:", a: "Ia berhasil menyelesaikan karyanya sendiri dan diakui kehebatannya.", b: "Ia bermain bersama teman-teman secara ramai dan kompak.", aScore: "Independent", bScore: "Cooperative" },
  { id: 48, category: "IndependentCooperative", question: "Ketika anak mendapat mainan baru yang rumit (seperti puzzle raksasa):", a: "Ia langsung membawanya ke kamarnya untuk mencoba memecahkannya sendirian.", b: "Ia mengajak kakak, adik, atau Anda untuk merakitnya bersama-sama.", aScore: "Independent", bScore: "Cooperative" },

  // --- PeopleTask (49-52) ---
  { id: 49, category: "PeopleTask", question: "Saat bermain peran bersama temannya (seperti main rumah-rumahan):", a: "Anak lebih mengutamakan agar semua teman senang dan akrab tanpa ada yang menangis.", b: "Anak sangat fokus agar jalan ceritanya selesai atau mainannya tersusun rapi.", aScore: "People", bScore: "Task" },
  { id: 50, category: "PeopleTask", question: "Jika teman bermain anak menangis karena terjatuh saat bermain bersama:", a: "Anak langsung berhenti bermain, menghampiri, dan berusaha menghibur temannya.", b: "Anak tetap melanjutkan permainannya atau melaporkannya pada Anda agar tugas mainnya beres.", aScore: "People", bScore: "Task" },
  { id: 51, category: "PeopleTask", question: "Saat anak sedang asyik bermain bersama saudaranya, ia lebih mengutamakan:", a: "Keceriaan dan kebersamaan mengobrol/tertawa bersama saudaranya.", b: "Fokus menyelesaikan bentuk mainannya dan tidak suka diganggu/dihentikan.", aScore: "People", bScore: "Task" },
  { id: 52, category: "PeopleTask", question: "Saat anak diajarkan aturan bermain baru bersama keluarganya:", a: "Ia lebih peduli agar semua anggota keluarga ikut bermain dengan gembira.", b: "Ia sangat fokus mematuhi aturan agar ia bisa menyelesaikan permainan dengan benar.", aScore: "People", bScore: "Task" },

  // --- PossibilityNecessity (53-56) ---
  { id: 53, category: "PossibilityNecessity", question: "Apa yang membuat anak bersemangat belajar naik sepeda atau belajar berenang?", a: "Karena ia merasa penasaran, seru, dan ingin mencoba hal baru.", b: "Karena ia merasa itu adalah keharusan (karena teman seusianya sudah bisa semua).", aScore: "Possibility", bScore: "Necessity" },
  { id: 54, category: "PossibilityNecessity", question: "Alasan utama anak bersedia mandi atau merapikan tempat tidurnya:", a: "Karena ia melihat ada kesempatan bermain air atau merapikan dengan seru.", b: "Karena ia tahu itu adalah aturan wajib di rumah yang harus ia taati.", aScore: "Possibility", bScore: "Necessity" },
  { id: 55, category: "PossibilityNecessity", question: "Ketika anak diajak belajar membaca atau menulis hal baru di rumah:", a: "Ia terdorong karena rasa ingin tahu yang tinggi tentang isi buku tersebut.", b: "Ia terdorong karena merasa itu adalah hal penting yang harus dipelajari untuk sekolah.", aScore: "Possibility", bScore: "Necessity" },
  { id: 56, category: "PossibilityNecessity", question: "Jika anak diajak berpartisipasi dalam pentas kelas atau lomba menggambar:", a: "Ia ikut karena merasa senang dengan aktivitasnya dan ingin mencoba keseruannya.", b: "Ia ikut karena merasa itu adalah tugas sekolah yang wajib ia ikuti sebagai murid.", aScore: "Possibility", bScore: "Necessity" }
];

// --- knowledgeBase.js ---
const KNOWLEDGE_BASE = {

Toward:{
title:"Toward",
summary:"Anda lebih termotivasi oleh tujuan, impian, peluang, dan hasil yang ingin dicapai.",
strengths:[
"Visioner",
"Optimis",
"Berorientasi target",
"Mudah termotivasi",
"Berani mencoba hal baru"
],
challenges:[
"Kadang mengabaikan risiko",
"Terlalu cepat mengambil keputusan",
"Kurang memperhatikan detail"
],
career:[
"Trainer",
"Entrepreneur",
"Sales",
"Marketing",
"Business Development"
],
development:"Latih kemampuan analisis risiko dan evaluasi sebelum mengambil keputusan besar."
},

Away:{
title:"Away From",
summary:"Anda lebih termotivasi untuk menghindari masalah, risiko, dan konsekuensi yang tidak diinginkan.",
strengths:[
"Teliti",
"Waspada",
"Analitis",
"Mampu mengantisipasi risiko",
"Berpikir preventif"
],
challenges:[
"Mudah khawatir",
"Terlalu hati-hati",
"Kadang sulit mengambil keputusan cepat"
],
career:[
"Auditor",
"Quality Control",
"Legal",
"Compliance",
"Risk Management"
],
development:"Latih kemampuan melihat peluang selain fokus pada risiko."
},

Internal:{
title:"Internal",
summary:"Anda lebih percaya pada penilaian diri sendiri dibandingkan pendapat orang lain.",
strengths:[
"Mandiri",
"Percaya diri",
"Tegas",
"Konsisten",
"Tidak mudah terpengaruh"
],
challenges:[
"Kadang sulit menerima kritik",
"Terlalu yakin pada pendapat sendiri"
],
career:[
"Leader",
"Konsultan",
"Entrepreneur",
"Trainer"
],
development:"Belajar menerima feedback tanpa kehilangan keyakinan diri."
},

External:{
title:"External",
summary:"Anda cenderung mempertimbangkan masukan dan umpan balik dari orang lain.",
strengths:[
"Terbuka",
"Adaptif",
"Mudah belajar",
"Kooperatif"
],
challenges:[
"Kadang terlalu membutuhkan validasi"
],
career:[
"Coach",
"HRD",
"Konselor",
"Customer Service"
],
development:"Latih kepercayaan terhadap penilaian diri sendiri."
},
Options:{
title:"Options",
summary:"Anda menyukai kebebasan memilih dan cenderung mencari berbagai alternatif dalam menyelesaikan sesuatu.",
strengths:[
"Kreatif",
"Fleksibel",
"Inovatif",
"Adaptif",
"Cepat melihat peluang"
],
challenges:[
"Kurang konsisten",
"Mudah berpindah fokus",
"Sering memiliki terlalu banyak pilihan"
],
career:[
"Entrepreneur",
"Marketing",
"Trainer",
"Content Creator",
"Konsultan"
],
development:"Latih kemampuan menyelesaikan apa yang sudah dimulai."
},

Procedures:{
title:"Procedures",
summary:"Anda lebih nyaman bekerja dengan langkah-langkah yang jelas dan terstruktur.",
strengths:[
"Disiplin",
"Konsisten",
"Teratur",
"Sistematis",
"Dapat diandalkan"
],
challenges:[
"Kurang fleksibel",
"Sulit menghadapi perubahan mendadak"
],
career:[
"Administrator",
"Akuntan",
"Operasional",
"Project Manager",
"Auditor"
],
development:"Latih kemampuan beradaptasi terhadap perubahan."
},

BigPicture:{
title:"Big Picture",
summary:"Anda cenderung melihat gambaran besar sebelum memperhatikan detail.",
strengths:[
"Strategis",
"Visioner",
"Cepat memahami konsep",
"Melihat hubungan antar ide",
"Berpikir jangka panjang"
],
challenges:[
"Kurang teliti",
"Mengabaikan detail penting"
],
career:[
"CEO",
"Trainer",
"Konsultan",
"Entrepreneur",
"Strategist"
],
development:"Biasakan memeriksa detail sebelum mengeksekusi ide."
},

Detail:{
title:"Detail",
summary:"Anda memperhatikan rincian dan fakta secara mendalam.",
strengths:[
"Teliti",
"Akurat",
"Sistematis",
"Cermat",
"Minim kesalahan"
],
challenges:[
"Terlalu lama menganalisis",
"Sulit melihat gambaran besar"
],
career:[
"Auditor",
"Programmer",
"Akuntan",
"Quality Control",
"Analis"
],
development:"Latih kemampuan melihat konteks yang lebih luas."
},

Matching:{
title:"Matching",
summary:"Anda secara alami lebih mudah melihat kesamaan dan titik temu.",
strengths:[
"Kooperatif",
"Mudah akrab",
"Membangun hubungan",
"Menciptakan harmoni",
"Kolaboratif"
],
challenges:[
"Terlalu mudah setuju",
"Kurang kritis"
],
career:[
"HRD",
"Guru",
"Konselor",
"Mediator",
"Coach"
],
development:"Latih kemampuan berpikir kritis dan evaluatif."
},

Mismatching:{
title:"Mismatching",
summary:"Anda lebih cepat melihat perbedaan, kekurangan, dan hal yang perlu diperbaiki.",
strengths:[
"Kritis",
"Analitis",
"Jeli",
"Objektif",
"Fokus perbaikan"
],
challenges:[
"Terlihat terlalu kritis",
"Sulit puas"
],
career:[
"Auditor",
"Reviewer",
"Quality Assurance",
"Evaluator",
"Konsultan"
],
development:"Latih kemampuan mengapresiasi hal yang sudah berjalan baik."
},

Self:{
title:"Self",
summary:"Anda cenderung memprioritaskan kebutuhan dan tujuan pribadi.",
strengths:[
"Mandiri",
"Tegas",
"Mengenal diri",
"Berani mengambil keputusan",
"Memiliki batasan yang jelas"
],
challenges:[
"Kurang peka terhadap kebutuhan orang lain"
],
career:[
"Entrepreneur",
"Konsultan",
"Freelancer",
"Profesional Independen"
],
development:"Latih empati dan kemampuan memahami perspektif orang lain."
},

Others:{
title:"Others",
summary:"Anda cenderung mempertimbangkan kebutuhan dan perasaan orang lain terlebih dahulu.",
strengths:[
"Empati tinggi",
"Peduli",
"Kooperatif",
"Mudah membangun hubungan",
"Supportif"
],
challenges:[
"Sulit berkata tidak",
"Mengabaikan kebutuhan diri sendiri"
],
career:[
"Guru",
"Konselor",
"HRD",
"Coach",
"Perawat"
],
development:"Belajar menjaga keseimbangan antara membantu orang lain dan menjaga diri sendiri."
},
Proactive:{
title:"Proactive",
summary:"Anda cenderung cepat bertindak ketika melihat peluang atau menghadapi tantangan.",
strengths:[
"Inisiatif tinggi",
"Cepat bergerak",
"Berani mengambil keputusan",
"Berorientasi tindakan",
"Tidak suka menunda"
],
challenges:[
"Kadang terlalu cepat bertindak",
"Kurang mempertimbangkan risiko",
"Cenderung terburu-buru"
],
career:[
"Entrepreneur",
"Sales",
"Leader",
"Business Development",
"Project Initiator"
],
development:"Biasakan melakukan analisis singkat sebelum mengambil tindakan penting."
},

Reactive:{
title:"Reactive",
summary:"Anda lebih suka mengamati, menganalisis, dan mempertimbangkan situasi sebelum bertindak.",
strengths:[
"Analitis",
"Hati-hati",
"Objektif",
"Mempertimbangkan risiko",
"Minim kesalahan"
],
challenges:[
"Terlalu lama berpikir",
"Menunda keputusan",
"Kehilangan momentum"
],
career:[
"Analis",
"Peneliti",
"Auditor",
"Quality Assurance",
"Konsultan"
],
development:"Latih keberanian mengambil keputusan lebih cepat."
},

General:{
title:"General",
summary:"Anda lebih nyaman memahami dan menyampaikan informasi dalam bentuk gambaran besar.",
strengths:[
"Cepat memahami inti",
"Strategis",
"Efisien",
"Melihat pola besar",
"Berpikir konseptual"
],
challenges:[
"Kurang detail",
"Kadang terlalu umum",
"Menimbulkan salah tafsir"
],
career:[
"Trainer",
"Motivator",
"Strategist",
"Manager",
"Konsultan"
],
development:"Biasakan menambahkan contoh konkret dan detail pendukung."
},

Specific:{
title:"Specific",
summary:"Anda lebih nyaman dengan informasi yang rinci, detail, dan lengkap.",
strengths:[
"Teliti",
"Akurat",
"Sistematis",
"Rinci",
"Terstruktur"
],
challenges:[
"Terlalu banyak detail",
"Sulit menyederhanakan",
"Kurang ringkas"
],
career:[
"Administrator",
"Akuntan",
"Programmer",
"Auditor",
"Analis Data"
],
development:"Latih kemampuan menyampaikan inti informasi secara singkat."
},

Sameness:{
title:"Sameness",
summary:"Anda menyukai kestabilan, konsistensi, dan pola yang dapat diprediksi.",
strengths:[
"Konsisten",
"Loyal",
"Stabil",
"Dapat diandalkan",
"Menjaga standar"
],
challenges:[
"Sulit menerima perubahan",
"Kurang fleksibel",
"Lambat beradaptasi"
],
career:[
"Administrasi",
"Operasional",
"Quality Control",
"Keuangan",
"Compliance"
],
development:"Mulai mencoba perubahan kecil secara bertahap."
},

Difference:{
title:"Difference",
summary:"Anda menyukai variasi, tantangan baru, dan perubahan.",
strengths:[
"Kreatif",
"Inovatif",
"Adaptif",
"Dinamis",
"Mudah menemukan peluang baru"
],
challenges:[
"Mudah bosan",
"Sulit mempertahankan rutinitas",
"Kurang konsisten"
],
career:[
"Marketing",
"Entrepreneur",
"Creative Industry",
"Business Development",
"Content Creator"
],
development:"Latih disiplin untuk menyelesaikan pekerjaan hingga tuntas."
},

Past:{
title:"Past",
summary:"Anda sering menggunakan pengalaman masa lalu sebagai referensi utama dalam mengambil keputusan.",
strengths:[
"Bijaksana",
"Belajar dari pengalaman",
"Hati-hati",
"Menghindari kesalahan berulang",
"Menghargai sejarah"
],
challenges:[
"Sulit melepaskan pengalaman buruk",
"Terlalu terikat masa lalu"
],
career:[
"Mentor",
"Konsultan",
"Sejarawan",
"Guru",
"Pembimbing"
],
development:"Fokus menggunakan masa lalu sebagai pelajaran, bukan sebagai batasan."
},

Present:{
title:"Present",
summary:"Anda fokus pada apa yang sedang terjadi saat ini dan apa yang bisa dilakukan sekarang.",
strengths:[
"Praktis",
"Realistis",
"Responsif",
"Adaptif",
"Mudah menikmati proses"
],
challenges:[
"Kurang memikirkan masa depan",
"Cenderung reaktif"
],
career:[
"Customer Service",
"Operasional",
"Hospitality",
"Event Organizer",
"Supervisor Lapangan"
],
development:"Biasakan membuat tujuan jangka menengah dan jangka panjang."
},
Future:{
title:"Future",
summary:"Anda cenderung memikirkan peluang, visi, dan konsekuensi jangka panjang sebelum mengambil keputusan.",
strengths:[
"Visioner",
"Strategis",
"Mampu merencanakan",
"Berorientasi tujuan",
"Melihat peluang jangka panjang"
],
challenges:[
"Terlalu banyak merencanakan",
"Kurang menikmati proses saat ini",
"Mudah khawatir terhadap masa depan"
],
career:[
"CEO",
"Strategist",
"Entrepreneur",
"Business Planner",
"Konsultan"
],
development:"Belajar lebih hadir dan menikmati proses saat ini."
},

Independent:{
title:"Independent",
summary:"Anda lebih nyaman bekerja dan mengambil keputusan secara mandiri.",
strengths:[
"Mandiri",
"Bertanggung jawab",
"Percaya diri",
"Inisiatif tinggi",
"Tidak bergantung pada orang lain"
],
challenges:[
"Sulit meminta bantuan",
"Kurang kolaboratif",
"Cenderung mengerjakan semuanya sendiri"
],
career:[
"Entrepreneur",
"Freelancer",
"Konsultan",
"Profesional Independen"
],
development:"Latih kemampuan bekerja sama tanpa kehilangan kemandirian."
},

Cooperative:{
title:"Cooperative",
summary:"Anda merasa lebih nyaman ketika dapat bekerja sama dengan orang lain.",
strengths:[
"Kolaboratif",
"Team player",
"Mudah membangun hubungan",
"Kooperatif",
"Mudah beradaptasi dalam tim"
],
challenges:[
"Terlalu bergantung pada tim",
"Kurang nyaman bekerja sendiri"
],
career:[
"HRD",
"Guru",
"Coach",
"Project Manager",
"Team Leader"
],
development:"Latih kemampuan mengambil keputusan secara mandiri."
},

People:{
title:"People",
summary:"Dalam bekerja dan berinteraksi, perhatian Anda lebih tertuju pada manusia dibanding tugas.",
strengths:[
"Empati tinggi",
"Mudah membangun hubungan",
"Disukai banyak orang",
"Komunikatif",
"Peduli"
],
challenges:[
"Kadang mengabaikan target",
"Sulit bersikap tegas",
"Terlalu mempertimbangkan perasaan orang lain"
],
career:[
"Trainer",
"Guru",
"Konselor",
"Coach",
"HRD"
],
development:"Belajar menjaga keseimbangan antara hubungan dan hasil."
},

Task:{
title:"Task",
summary:"Anda lebih fokus pada target, hasil, dan penyelesaian pekerjaan.",
strengths:[
"Produktif",
"Efisien",
"Fokus hasil",
"Berorientasi pencapaian",
"Tegas"
],
challenges:[
"Kurang memperhatikan perasaan orang lain",
"Terlihat terlalu keras",
"Kurang sabar terhadap proses"
],
career:[
"Project Manager",
"Operations Manager",
"Supervisor",
"Entrepreneur",
"Leader"
],
development:"Latih kemampuan membangun hubungan tanpa mengurangi produktivitas."
},

Possibility:{
title:"Possibility",
summary:"Anda lebih termotivasi oleh peluang, ide baru, dan kemungkinan yang dapat dicapai.",
strengths:[
"Kreatif",
"Visioner",
"Inovatif",
"Cepat melihat peluang",
"Berpikiran terbuka"
],
challenges:[
"Terlalu banyak ide",
"Kurang fokus eksekusi",
"Mudah berpindah proyek"
],
career:[
"Entrepreneur",
"Marketing",
"Business Development",
"Creative Industry",
"Trainer"
],
development:"Latih disiplin untuk mengeksekusi ide hingga selesai."
},

Necessity:{
title:"Necessity",
summary:"Anda lebih termotivasi ketika ada kewajiban, tanggung jawab, atau kebutuhan yang harus dipenuhi.",
strengths:[
"Disiplin",
"Konsisten",
"Bertanggung jawab",
"Dapat diandalkan",
"Komitmen tinggi"
],
challenges:[
"Kurang spontan",
"Sulit bergerak tanpa tekanan",
"Kurang tertarik pada eksperimen"
],
career:[
"Administrasi",
"Keuangan",
"Operasional",
"Compliance",
"Quality Assurance"
],
development:"Belajar menciptakan motivasi dari peluang, bukan hanya kewajiban."
}

};

// --- knowledgeBasePremium.js ---
const KNOWLEDGE_BASE_PREMIUM = {

Toward:{

title:"Toward",

summary:"Anda cenderung termotivasi oleh tujuan, peluang, impian, dan hasil yang ingin dicapai. Fokus perhatian Anda lebih banyak tertuju pada apa yang ingin diraih dibandingkan apa yang ingin dihindari.",

strengths:[

"Optimis terhadap masa depan",

"Cepat melihat peluang",

"Mudah termotivasi",

"Berorientasi target",

"Berani mencoba hal baru",

"Mampu menginspirasi orang lain"

],

challenges:[

"Kadang mengabaikan risiko",

"Terlalu cepat mengambil keputusan",

"Kurang memperhatikan detail",

"Mudah berpindah ke target baru"

],

career:[

"Trainer",

"Entrepreneur",

"Sales",

"Marketing",

"Business Development",

"Public Speaker"

],

communication:[

"Berbicara dengan fokus pada tujuan",

"Mudah membangkitkan semangat",

"Cenderung menggunakan bahasa positif",

"Kurang sabar membahas masalah terlalu lama"

],

leadership:[

"Menginspirasi tim",

"Membangun visi",

"Mendorong pencapaian target",

"Perlu meningkatkan analisis risiko"

],

relationship:[

"Fokus pada masa depan hubungan",

"Senang membuat rencana bersama",

"Mudah memberikan motivasi",

"Perlu belajar lebih peka terhadap kekhawatiran pasangan"

],

development:[

"Latih kemampuan analisis risiko",

"Tingkatkan perhatian terhadap detail",

"Biasakan evaluasi sebelum bertindak",

"Perkuat disiplin penyelesaian tugas"

],

action30:[

"Tentukan 3 target utama",

"Buat indikator keberhasilan",

"Evaluasi mingguan",

"Catat hambatan yang muncul"

],

action90:[

"Membangun sistem pencapaian target",

"Melatih konsistensi",

"Menyeimbangkan optimisme dan realitas",

"Meningkatkan kemampuan perencanaan"

]
},

Away:{

title:"Away",

summary:"Anda lebih termotivasi untuk menghindari masalah, risiko, kesalahan, dan konsekuensi yang tidak diinginkan. Anda cenderung memikirkan apa yang perlu dicegah agar situasi tetap aman.",

strengths:[

"Mampu mengidentifikasi risiko",

"Berpikir preventif",

"Hati-hati dalam bertindak",

"Teliti terhadap potensi masalah",

"Baik dalam mitigasi risiko"

],

challenges:[

"Mudah khawatir",

"Terlalu berhati-hati",

"Lambat mengambil keputusan",

"Kurang agresif mengejar peluang"

],

career:[

"Auditor",

"Quality Control",

"Compliance",

"Risk Management",

"Analis",

"Keuangan"

],

communication:[

"Sering mengingatkan risiko",

"Fokus pada pencegahan masalah",

"Berpikir realistis",

"Kadang dianggap terlalu pesimis"

],

leadership:[

"Mampu menjaga stabilitas",

"Pandai mengelola risiko",

"Teliti terhadap kesalahan",

"Perlu lebih berani mengambil peluang"

],

relationship:[

"Berusaha melindungi orang yang dicintai",

"Peka terhadap masalah",

"Bertanggung jawab",

"Perlu mengurangi kekhawatiran berlebihan"

],

development:[

"Belajar melihat peluang",

"Melatih keberanian mengambil keputusan",

"Menyeimbangkan kewaspadaan dan optimisme",

"Meningkatkan kepercayaan diri"

],

action30:[

"Catat peluang setiap minggu",

"Ambil satu keputusan lebih cepat",

"Kurangi overthinking",

"Latih berpikir positif"

],

action90:[

"Meningkatkan keberanian bertindak",

"Membangun mindset peluang",

"Menyeimbangkan risiko dan kesempatan",

"Mengembangkan fleksibilitas berpikir"

]

},

Internal:{

title:"Internal",

summary:"Anda lebih mengandalkan standar, penilaian, dan keyakinan pribadi ketika menentukan apakah sesuatu sudah baik atau belum.",

strengths:[

"Percaya diri",

"Mandiri",

"Tidak mudah terpengaruh",

"Konsisten dengan prinsip",

"Mampu mengambil keputusan sendiri"

],

challenges:[

"Kurang menerima masukan",

"Terkadang keras kepala",

"Sulit menerima kritik",

"Kurang mencari validasi eksternal"

],

career:[

"Entrepreneur",

"Konsultan",

"Trainer",

"Coach",

"Pemimpin Tim"

],

communication:[

"Berbicara dengan keyakinan tinggi",

"Tegas dalam menyampaikan pendapat",

"Mandiri dalam berpikir",

"Kadang kurang mendengarkan"

],

leadership:[

"Mampu mengambil keputusan",

"Tidak mudah goyah",

"Menjadi panutan",

"Perlu meningkatkan keterbukaan terhadap masukan"

],

relationship:[

"Memiliki pendirian kuat",

"Memberi rasa stabil",

"Setia pada prinsip",

"Perlu lebih menghargai sudut pandang pasangan"

],

development:[

"Latih mendengarkan aktif",

"Membuka diri terhadap umpan balik",

"Meningkatkan fleksibilitas",

"Mengembangkan empati"

],

action30:[

"Meminta feedback dari 3 orang",

"Mencatat masukan yang diterima",

"Melatih mendengar tanpa membantah",

"Evaluasi keputusan penting"

],

action90:[

"Membangun keseimbangan keyakinan dan keterbukaan",

"Meningkatkan kemampuan kolaborasi",

"Memperluas perspektif",

"Mengembangkan kepemimpinan yang inklusif"

]

},

External:{

title:"External",

summary:"Anda cenderung menggunakan masukan, penilaian, dan umpan balik dari lingkungan untuk menentukan apakah sesuatu sudah baik atau belum.",

strengths:[

"Terbuka terhadap masukan",

"Mudah belajar",

"Kooperatif",

"Adaptif",

"Peka terhadap kebutuhan orang lain"

],

challenges:[

"Mudah terpengaruh",

"Terlalu mencari persetujuan",

"Kurang percaya diri",

"Ragu mengambil keputusan sendiri"

],

career:[

"Customer Service",

"HR",

"Trainer",

"Konselor",

"Public Relations"

],

communication:[

"Mudah menerima saran",

"Kooperatif",

"Ramah",

"Peka terhadap reaksi lawan bicara"

],

leadership:[

"Mendengarkan tim",

"Membangun kerja sama",

"Mendorong partisipasi",

"Perlu meningkatkan ketegasan"

],

relationship:[

"Peduli terhadap pasangan",

"Perhatian",

"Mudah berempati",

"Perlu membangun kepercayaan diri"

],

development:[

"Belajar mempercayai penilaian diri",

"Mengurangi ketergantungan pada validasi",

"Meningkatkan ketegasan",

"Melatih pengambilan keputusan"

],

action30:[

"Mengambil keputusan kecil secara mandiri",

"Mencatat keberhasilan pribadi",

"Mengurangi kebutuhan persetujuan",

"Melatih percaya diri"

],

action90:[

"Membangun self-confidence",

"Meningkatkan kemandirian",

"Mengembangkan ketegasan",

"Menciptakan keseimbangan internal-eksternal"

]

},

Options:{

title:"Options",

summary:"Anda lebih menyukai kebebasan memilih dibandingkan mengikuti langkah yang sudah ditentukan. Anda cenderung mencari berbagai alternatif, peluang, dan cara baru dalam menyelesaikan sesuatu.",

strengths:[

"Kreatif",

"Inovatif",

"Fleksibel",

"Cepat melihat peluang",

"Mudah menghasilkan ide baru",

"Adaptif terhadap perubahan"

],

challenges:[

"Kurang konsisten",

"Mudah berpindah fokus",

"Sering memiliki terlalu banyak pilihan",

"Sulit menyelesaikan sesuatu sampai tuntas"

],

career:[

"Entrepreneur",

"Marketing",

"Business Development",

"Trainer",

"Content Creator",

"Konsultan"

],

communication:[

"Suka brainstorming",

"Senang berdiskusi ide",

"Kreatif dalam menyampaikan gagasan",

"Kadang melompat-lompat dalam pembicaraan"

],

leadership:[

"Mendorong inovasi",

"Membuka banyak peluang",

"Menghasilkan ide kreatif",

"Perlu meningkatkan kemampuan eksekusi"

],

relationship:[

"Menyukai variasi dan pengalaman baru",

"Tidak suka hubungan yang monoton",

"Senang mencoba hal baru bersama pasangan",

"Perlu meningkatkan konsistensi dan komitmen"

],

development:[

"Fokus pada satu prioritas utama",

"Kurangi terlalu banyak pilihan",

"Latih disiplin menyelesaikan tugas",

"Buat sistem kerja yang terstruktur"

],

action30:[

"Tentukan satu prioritas utama",

"Selesaikan satu proyek sampai selesai",

"Kurangi distraksi",

"Buat daftar tugas harian"

],

action90:[

"Meningkatkan konsistensi",

"Membangun sistem kerja",

"Melatih disiplin eksekusi",

"Mengembangkan fokus jangka panjang"

]

},

Procedures:{

title:"Procedures",

summary:"Anda lebih nyaman bekerja dengan langkah-langkah yang jelas, sistematis, dan terstruktur. Anda cenderung menyukai kepastian dibanding improvisasi.",

strengths:[

"Disiplin",

"Konsisten",

"Sistematis",

"Terstruktur",

"Teliti",

"Dapat diandalkan"

],

challenges:[

"Kurang fleksibel",

"Sulit menghadapi perubahan mendadak",

"Terlalu bergantung pada prosedur",

"Kurang spontan"

],

career:[

"Akuntan",

"Administrator",

"Project Manager",

"Operasional",

"Auditor",

"Quality Control"

],

communication:[

"Terstruktur",

"Runut",

"Jelas",

"Mudah dipahami"

],

leadership:[

"Membangun sistem kerja",

"Menjaga standar",

"Mengontrol kualitas",

"Perlu meningkatkan fleksibilitas"

],

relationship:[

"Konsisten",

"Dapat dipercaya",

"Menjaga komitmen",

"Perlu lebih spontan dan ekspresif"

],

development:[

"Belajar beradaptasi",

"Meningkatkan fleksibilitas",

"Melatih improvisasi",

"Menerima perubahan sebagai peluang"

],

action30:[

"Mencoba cara baru dalam satu aktivitas",

"Keluar dari rutinitas kecil",

"Belajar improvisasi",

"Melatih fleksibilitas berpikir"

],

action90:[

"Meningkatkan adaptabilitas",

"Mengembangkan kreativitas",

"Menyeimbangkan sistem dan inovasi",

"Membangun pola pikir bertumbuh"

]

},

BigPicture:{

title:"Big Picture",

summary:"Anda lebih suka memahami gambaran besar terlebih dahulu sebelum masuk ke detail. Fokus Anda adalah arah, tujuan, strategi, dan pola besar.",

strengths:[

"Visioner",

"Strategis",

"Cepat memahami konsep",

"Melihat pola besar",

"Berpikir jangka panjang",

"Mudah menghubungkan berbagai ide"

],

challenges:[

"Kurang detail",

"Melewatkan informasi penting",

"Terlalu konseptual",

"Kurang teliti dalam eksekusi"

],

career:[

"CEO",

"Trainer",

"Konsultan",

"Strategist",

"Entrepreneur",

"Business Planner"

],

communication:[

"Fokus pada inti pesan",

"Menjelaskan konsep besar",

"Menginspirasi",

"Kadang kurang detail"

],

leadership:[

"Membangun visi",

"Mengarahkan strategi",

"Menginspirasi tim",

"Perlu dukungan orang detail"

],

relationship:[

"Fokus pada tujuan hubungan",

"Melihat masa depan bersama",

"Kurang memperhatikan detail kecil",

"Perlu meningkatkan perhatian pada kebutuhan sehari-hari"

],

development:[

"Melatih ketelitian",

"Mengecek detail sebelum eksekusi",

"Membuat checklist",

"Melibatkan orang yang detail"

],

action30:[

"Gunakan checklist harian",

"Periksa detail sebelum keputusan",

"Evaluasi kesalahan kecil",

"Biasakan membaca instruksi lengkap"

],

action90:[

"Meningkatkan ketelitian",

"Membangun keseimbangan strategi dan eksekusi",

"Melatih perhatian terhadap detail",

"Meningkatkan kualitas implementasi"

]

},


Detail:{

title:"Detail",

summary:"Anda cenderung fokus pada fakta, rincian, dan informasi spesifik. Anda ingin memahami sesuatu secara lengkap sebelum mengambil keputusan.",

strengths:[

"Teliti",

"Akurat",

"Cermat",

"Minim kesalahan",

"Sistematis",

"Memperhatikan kualitas"

],

challenges:[

"Terlalu lama menganalisis",

"Sulit melihat gambaran besar",

"Perfeksionis",

"Terlalu fokus pada hal kecil"

],

career:[

"Programmer",

"Akuntan",

"Auditor",

"Analis",

"Quality Assurance",

"Administrator"

],

communication:[

"Detail",

"Jelas",

"Spesifik",

"Berbasis fakta"

],

leadership:[

"Menjaga kualitas",

"Mengontrol detail operasional",

"Meminimalkan kesalahan",

"Perlu meningkatkan visi strategis"

],

relationship:[

"Perhatian pada detail pasangan",

"Ingat hal-hal kecil",

"Peduli",

"Perlu melihat gambaran besar hubungan"

],

development:[

"Belajar melihat konteks yang lebih luas",

"Meningkatkan kemampuan strategis",

"Fokus pada prioritas utama",

"Mengurangi perfeksionisme"

],

action30:[

"Membuat ringkasan inti sebelum detail",

"Menentukan prioritas",

"Melatih berpikir strategis",

"Mengurangi analisis berlebihan"

],

action90:[

"Mengembangkan kemampuan melihat gambaran besar",

"Meningkatkan kecepatan pengambilan keputusan",

"Membangun keseimbangan detail dan strategi",

"Meningkatkan efektivitas kerja"

]

},

Matching:{

title:"Matching",

summary:"Anda secara alami lebih mudah melihat kesamaan, kecocokan, dan titik temu dibandingkan perbedaan. Fokus perhatian Anda tertuju pada apa yang dapat menyatukan berbagai pihak.",

strengths:[

"Mudah membangun hubungan",

"Menciptakan keharmonisan",

"Kooperatif",

"Kolaboratif",

"Mudah menemukan kesepakatan",

"Membangun rasa kebersamaan"

],

challenges:[

"Kurang kritis",

"Terlalu mudah setuju",

"Kadang mengabaikan masalah",

"Kurang objektif saat mengevaluasi"

],

career:[

"HRD",

"Konselor",

"Coach",

"Trainer",

"Mediator",

"Customer Relationship"

],

communication:[

"Ramah",

"Mudah mencairkan suasana",

"Mencari persamaan",

"Mengurangi konflik"

],

leadership:[

"Membangun kekompakan tim",

"Menciptakan lingkungan kerja harmonis",

"Mendorong kerja sama",

"Perlu meningkatkan kemampuan evaluasi"

],

relationship:[

"Mudah membangun kedekatan",

"Menciptakan rasa nyaman",

"Menghindari konflik",

"Perlu lebih berani membahas masalah"

],

development:[

"Latih berpikir kritis",

"Berani memberikan umpan balik",

"Meningkatkan objektivitas",

"Belajar mengidentifikasi area perbaikan"

],

action30:[

"Memberikan feedback konstruktif",

"Mencatat area perbaikan",

"Melatih evaluasi objektif",

"Mengurangi sikap terlalu permisif"

],

action90:[

"Membangun keseimbangan harmoni dan objektivitas",

"Meningkatkan kemampuan evaluasi",

"Melatih ketegasan",

"Mengembangkan kemampuan problem solving"

]

},

Mismatching:{

title:"Mismatching",

summary:"Anda lebih mudah melihat perbedaan, ketidaksesuaian, kesalahan, dan area yang perlu diperbaiki dibandingkan kesamaan.",

strengths:[

"Kritis",

"Analitis",

"Jeli",

"Objektif",

"Fokus pada perbaikan",

"Minim kompromi terhadap kualitas"

],

challenges:[

"Terlalu kritis",

"Mudah mengkritik",

"Kurang apresiatif",

"Terlihat negatif"

],

career:[

"Auditor",

"Quality Assurance",

"Reviewer",

"Evaluator",

"Konsultan",

"Analis"

],

communication:[

"Langsung pada masalah",

"Kritis",

"Objektif",

"Fokus pada perbaikan"

],

leadership:[

"Meningkatkan kualitas tim",

"Menjaga standar",

"Mengidentifikasi kelemahan",

"Perlu meningkatkan apresiasi"

],

relationship:[

"Peka terhadap masalah",

"Fokus pada perbaikan hubungan",

"Perlu lebih banyak apresiasi",

"Perlu meningkatkan empati"

],

development:[

"Latih kemampuan menghargai hal positif",

"Berikan apresiasi lebih sering",

"Seimbangkan kritik dan pujian",

"Tingkatkan empati"

],

action30:[

"Memberikan apresiasi setiap hari",

"Mencatat hal positif",

"Mengurangi kritik yang tidak perlu",

"Melatih komunikasi positif"

],

action90:[

"Membangun pola pikir seimbang",

"Meningkatkan hubungan interpersonal",

"Melatih empati",

"Mengembangkan komunikasi apresiatif"

]

},

Self:{

title:"Self",

summary:"Anda cenderung mempertimbangkan kebutuhan, tujuan, dan kepentingan diri sendiri terlebih dahulu sebelum orang lain.",

strengths:[

"Mandiri",

"Tegas",

"Memiliki batasan yang jelas",

"Berani mengambil keputusan",

"Fokus pada tujuan pribadi"

],

challenges:[

"Kurang peka terhadap kebutuhan orang lain",

"Terlalu fokus pada diri sendiri",

"Kurang kolaboratif"

],

career:[

"Entrepreneur",

"Konsultan",

"Freelancer",

"Leader",

"Profesional Independen"

],

communication:[

"Tegas",

"Jelas",

"Langsung",

"Berorientasi hasil"

],

leadership:[

"Berani mengambil keputusan",

"Mandiri",

"Fokus pada target",

"Perlu meningkatkan empati"

],

relationship:[

"Memiliki identitas diri yang kuat",

"Mandiri",

"Perlu meningkatkan kepedulian",

"Perlu lebih banyak mendengarkan"

],

development:[

"Latih empati",

"Perhatikan kebutuhan orang lain",

"Meningkatkan kemampuan mendengarkan",

"Membangun kerja sama"

],

action30:[

"Mendengarkan tanpa menyela",

"Menanyakan kebutuhan orang lain",

"Melatih empati",

"Memberi bantuan tanpa diminta"

],

action90:[

"Membangun keseimbangan diri dan orang lain",

"Meningkatkan kerja sama",

"Melatih kepedulian",

"Mengembangkan kecerdasan emosional"

]

},


Others:{

title:"Others",

summary:"Anda cenderung mempertimbangkan kebutuhan dan kepentingan orang lain sebelum diri sendiri.",

strengths:[

"Empati tinggi",

"Peduli",

"Kooperatif",

"Supportif",

"Mudah membangun hubungan"

],

challenges:[

"Sulit berkata tidak",

"Mengabaikan kebutuhan diri sendiri",

"Terlalu mengutamakan orang lain"

],

career:[

"Guru",

"Konselor",

"Coach",

"Perawat",

"HRD"

],

communication:[

"Hangat",

"Empatik",

"Pendengar yang baik",

"Supportif"

],

leadership:[

"Peduli pada tim",

"Membangun loyalitas",

"Supportif",

"Perlu meningkatkan ketegasan"

],

relationship:[

"Perhatian",

"Penuh kepedulian",

"Mudah memahami pasangan",

"Perlu menjaga batasan pribadi"

],

development:[

"Belajar berkata tidak",

"Menjaga kebutuhan pribadi",

"Meningkatkan ketegasan",

"Membangun batasan sehat"

],

action30:[

"Mengatakan tidak pada satu hal yang tidak penting",

"Menjadwalkan waktu untuk diri sendiri",

"Meningkatkan self-care",

"Mencatat kebutuhan pribadi"

],

action90:[

"Membangun keseimbangan memberi dan menerima",

"Meningkatkan assertiveness",

"Menjaga kesehatan emosional",

"Mengembangkan batasan sehat"

]

},

Proactive:{

title:"Proactive",

summary:"Anda cenderung bertindak lebih cepat dibandingkan kebanyakan orang ketika melihat peluang atau tantangan.",

strengths:[

"Inisiatif tinggi",

"Cepat bergerak",

"Berani mencoba",

"Berorientasi tindakan",

"Tidak suka menunda"

],

challenges:[

"Terlalu cepat bertindak",

"Kurang analisis",

"Mudah terburu-buru",

"Kurang mempertimbangkan risiko"

],

career:[

"Entrepreneur",

"Sales",

"Business Development",

"Leader",

"Project Initiator"

],

communication:[

"Langsung",

"Enerjik",

"Persuasif",

"Berorientasi solusi"

],

leadership:[

"Menggerakkan tim",

"Mendorong aksi",

"Membangun momentum",

"Perlu meningkatkan analisis"

],

relationship:[

"Proaktif menjaga hubungan",

"Cepat mengambil inisiatif",

"Perlu meningkatkan kesabaran",

"Perlu mendengar lebih banyak"

],

development:[

"Latih berpikir sebelum bertindak",

"Tingkatkan analisis risiko",

"Kurangi impulsivitas",

"Membangun kesabaran"

],

action30:[

"Berhenti 5 menit sebelum keputusan penting",

"Membuat daftar risiko",

"Meningkatkan evaluasi",

"Mencatat hasil keputusan"

],

action90:[

"Meningkatkan kualitas pengambilan keputusan",

"Membangun keseimbangan aksi dan analisis",

"Mengembangkan kesabaran",

"Meningkatkan efektivitas kepemimpinan"

]

},

Reactive:{

title:"Reactive",

summary:"Anda lebih suka mengamati, menganalisis, dan mempertimbangkan berbagai faktor sebelum mengambil tindakan.",

strengths:[

"Analitis",

"Hati-hati",

"Objektif",

"Minim kesalahan",

"Mempertimbangkan risiko"

],

challenges:[

"Terlalu lama berpikir",

"Kehilangan momentum",

"Menunda keputusan",

"Kurang cepat bertindak"

],

career:[

"Analis",

"Peneliti",

"Auditor",

"Konsultan",

"Quality Assurance"

],

communication:[

"Tenang",

"Terukur",

"Logis",

"Objektif"

],

leadership:[

"Mengambil keputusan matang",

"Mengelola risiko",

"Objektif",

"Perlu meningkatkan kecepatan aksi"

],

relationship:[

"Bijaksana",

"Mempertimbangkan dampak keputusan",

"Perlu lebih ekspresif",

"Perlu lebih proaktif"

],

development:[

"Latih pengambilan keputusan lebih cepat",

"Meningkatkan keberanian bertindak",

"Mengurangi overthinking",

"Membangun momentum"

],

action30:[

"Membatasi waktu analisis",

"Mengambil keputusan lebih cepat",

"Melakukan tindakan kecil setiap hari",

"Mengurangi penundaan"

],

action90:[

"Meningkatkan keberanian bertindak",

"Membangun kepercayaan diri",

"Mengembangkan kecepatan eksekusi",

"Menciptakan keseimbangan analisis dan aksi"

]

},

General:{

title:"General",

summary:"Anda cenderung menyukai informasi yang ringkas, langsung ke inti, dan berfokus pada gambaran umum dibanding detail yang terlalu rinci.",

strengths:[

"Cepat memahami inti informasi",

"Efisien",

"Strategis",

"Melihat pola besar",

"Tidak mudah terjebak detail"

],

challenges:[

"Kurang detail",

"Berpotensi melewatkan informasi penting",

"Terlalu menyederhanakan masalah"

],

career:[

"Trainer",

"Motivator",

"Manager",

"Konsultan",

"Strategist"

],

communication:[

"To the point",

"Ringkas",

"Mudah dipahami",

"Berorientasi inti pesan"

],

leadership:[

"Fokus pada arah besar",

"Mudah menyampaikan visi",

"Perlu meningkatkan perhatian pada detail implementasi"

],

relationship:[

"Mudah memahami gambaran besar hubungan",

"Perlu meningkatkan perhatian terhadap detail kebutuhan pasangan"

],

development:[

"Latih kemampuan memperhatikan detail",

"Biasakan membuat checklist",

"Periksa ulang informasi penting"

],

action30:[

"Membuat checklist harian",

"Melatih membaca detail",

"Melakukan review pekerjaan sebelum selesai"

],

action90:[

"Membangun keseimbangan antara strategi dan detail",

"Meningkatkan kualitas implementasi"

]

},

Specific:{

title:"Specific",

summary:"Anda menyukai informasi yang rinci, lengkap, dan spesifik sebelum mengambil keputusan.",

strengths:[

"Teliti",

"Akurat",

"Sistematis",

"Minim kesalahan",

"Memahami detail mendalam"

],

challenges:[

"Terlalu lama menganalisis",

"Sulit menyederhanakan informasi",

"Kurang melihat gambaran besar"

],

career:[

"Analis",

"Programmer",

"Auditor",

"Akuntan",

"Administrator"

],

communication:[

"Detail",

"Terstruktur",

"Berbasis fakta",

"Spesifik"

],

leadership:[

"Menjaga kualitas",

"Memastikan akurasi",

"Perlu meningkatkan visi strategis"

],

relationship:[

"Perhatian terhadap detail pasangan",

"Ingat hal-hal kecil",

"Peduli"

],

development:[

"Belajar melihat gambaran besar",

"Mengurangi perfeksionisme",

"Meningkatkan kecepatan keputusan"

],

action30:[

"Latihan membuat ringkasan",

"Menentukan prioritas utama",

"Mengurangi analisis berlebihan"

],

action90:[

"Mengembangkan kemampuan strategis",

"Meningkatkan efektivitas pengambilan keputusan"

]

},

Specific:{

title:"Specific",

summary:"Anda menyukai informasi yang rinci, lengkap, dan spesifik sebelum mengambil keputusan.",

strengths:[

"Teliti",

"Akurat",

"Sistematis",

"Minim kesalahan",

"Memahami detail mendalam"

],

challenges:[

"Terlalu lama menganalisis",

"Sulit menyederhanakan informasi",

"Kurang melihat gambaran besar"

],

career:[

"Analis",

"Programmer",

"Auditor",

"Akuntan",

"Administrator"

],

communication:[

"Detail",

"Terstruktur",

"Berbasis fakta",

"Spesifik"

],

leadership:[

"Menjaga kualitas",

"Memastikan akurasi",

"Perlu meningkatkan visi strategis"

],

relationship:[

"Perhatian terhadap detail pasangan",

"Ingat hal-hal kecil",

"Peduli"

],

development:[

"Belajar melihat gambaran besar",

"Mengurangi perfeksionisme",

"Meningkatkan kecepatan keputusan"

],

action30:[

"Latihan membuat ringkasan",

"Menentukan prioritas utama",

"Mengurangi analisis berlebihan"

],

action90:[

"Mengembangkan kemampuan strategis",

"Meningkatkan efektivitas pengambilan keputusan"

]

},


Sameness:{

title:"Sameness",

summary:"Anda menyukai kestabilan, konsistensi, dan pola yang dapat diprediksi. Rutinitas yang konsisten membuat Anda merasa nyaman dan aman.",

strengths:[

"Sangat konsisten",

"Loyal dan berdedikasi",

"Menjaga standar kualitas",

"Dapat diandalkan dalam jangka panjang",

"Disiplin terhadap rutinitas"

],

challenges:[

"Sulit menerima perubahan mendadak",

"Kurang fleksibel",

"Memerlukan waktu adaptasi yang lama"

],

career:[

"Administrasi",

"Operasional",

"Quality Control",

"Keuangan",

"Compliance"

],

communication:[

"Terstruktur",

"Faktual",

"Konsisten",

"Menghindari spekulasi"

],

leadership:[

"Menjaga stabilitas organisasi",

"Memperkuat sistem yang sudah ada",

"Menjamin konsistensi hasil",

"Perlu meningkatkan kelenturan beradaptasi"

],

relationship:[

"Penyedia kepastian dan keamanan",

"Setia pada komitmen jangka panjang",

"Menghargai tradisi keluarga",

"Perlu melatih diri menerima kejutan atau variasi baru"

],

development:[

"Latih kesiapan menghadapi perubahan kecil",

"Tingkatkan fleksibilitas dalam rencana",

"Buka diri terhadap ide-ide baru"

],

action30:[

"Membuat rencana alternatif untuk setiap target",

"Mencoba rute atau menu baru setiap minggu",

"Mendengarkan saran perbaikan dari rekan"

],

action90:[

"Memimpin proyek perbaikan sistem kecil",

"Mengikuti pelatihan keterampilan baru di luar bidang utama"

]

},


Difference:{

title:"Difference",

summary:"Anda menyukai variasi, perubahan, tantangan baru, dan pengalaman berbeda.",

strengths:[

"Kreatif",

"Inovatif",

"Adaptif",

"Dinamis",

"Cepat melihat peluang baru"

],

challenges:[

"Mudah bosan",

"Kurang konsisten",

"Sulit mempertahankan rutinitas"

],

career:[

"Marketing",

"Entrepreneur",

"Content Creator",

"Business Development",

"Creative Industry"

],

communication:[

"Dinamis",

"Antusias",

"Kreatif"

],

leadership:[

"Mendorong inovasi",

"Membawa perubahan",

"Perlu meningkatkan konsistensi"

],

relationship:[

"Membawa warna baru dalam hubungan",

"Perlu menjaga komitmen jangka panjang"

],

development:[

"Membangun disiplin",

"Meningkatkan konsistensi"

],

action30:[

"Menyelesaikan satu proyek sampai tuntas",

"Membuat rutinitas sederhana"

],

action90:[

"Meningkatkan disiplin",

"Membangun keseimbangan inovasi dan konsistensi"

]

},

Past:{

title:"Past",

summary:"Anda sering menggunakan pengalaman masa lalu sebagai referensi utama dalam mengambil keputusan.",

strengths:[

"Belajar dari pengalaman",

"Bijaksana",

"Hati-hati",

"Menghindari kesalahan berulang"

],

challenges:[

"Sulit melepaskan pengalaman buruk",

"Terlalu terikat masa lalu"

],

career:[

"Mentor",

"Guru",

"Konsultan",

"Pembimbing"

],

communication:[

"Kaya pengalaman",

"Suka berbagi pelajaran"

],

leadership:[

"Belajar dari sejarah",

"Menghindari kesalahan yang sama"

],

relationship:[

"Menghargai kenangan",

"Menjaga nilai-nilai hubungan"

],

development:[

"Menggunakan masa lalu sebagai pelajaran, bukan batasan"

],

action30:[

"Menulis pelajaran hidup",

"Melepaskan pengalaman yang menghambat"

],

action90:[

"Membangun orientasi masa depan yang sehat"

]

},


Present:{

title:"Present",

summary:"Anda fokus pada apa yang sedang terjadi sekarang dan bagaimana bertindak secara efektif saat ini.",

strengths:[

"Praktis",

"Realistis",

"Responsif",

"Fleksibel"

],

challenges:[

"Kurang memikirkan masa depan",

"Cenderung reaktif"

],

career:[

"Supervisor Lapangan",

"Customer Service",

"Event Organizer",

"Hospitality"

],

communication:[

"Praktis",

"Langsung",

"Berorientasi tindakan"

],

leadership:[

"Responsif",

"Cepat menangani masalah"

],

relationship:[

"Mudah menikmati momen bersama",

"Hadir secara emosional"

],

development:[

"Membuat tujuan jangka panjang"

],

action30:[

"Menyusun target 6 bulan",

"Membuat rencana mingguan"

],

action90:[

"Membangun visi jangka panjang"

]

},


Future:{

title:"Future",

summary:"Anda cenderung berpikir jauh ke depan dan mempertimbangkan konsekuensi jangka panjang.",

strengths:[

"Visioner",

"Strategis",

"Mampu merencanakan",

"Berorientasi tujuan"

],

challenges:[

"Terlalu banyak merencanakan",

"Kurang menikmati proses saat ini"

],

career:[

"CEO",

"Strategist",

"Business Planner",

"Entrepreneur"

],

communication:[

"Berorientasi masa depan",

"Inspiratif"

],

leadership:[

"Membangun visi jangka panjang",

"Mengarahkan organisasi"

],

relationship:[

"Merencanakan masa depan bersama",

"Memiliki tujuan hubungan yang jelas"

],

development:[

"Belajar menikmati proses saat ini"

],

action30:[

"Menyusun roadmap 1 tahun",

"Membuat target triwulan"

],

action90:[

"Membangun sistem pencapaian tujuan"

]

},

Independent:{

title:"Independent",

summary:"Anda lebih nyaman bekerja, berpikir, dan mengambil keputusan secara mandiri. Anda memiliki kebutuhan yang tinggi untuk kebebasan dan otonomi.",

strengths:[

"Mandiri",

"Percaya diri",

"Bertanggung jawab",

"Tidak bergantung pada orang lain",

"Mampu bekerja sendiri"

],

challenges:[

"Sulit meminta bantuan",

"Kurang kolaboratif",

"Cenderung mengerjakan semuanya sendiri"

],

career:[

"Entrepreneur",

"Konsultan",

"Freelancer",

"Peneliti",

"Profesional Independen"

],

communication:[

"Langsung",

"Mandiri dalam berpikir",

"Tegas"

],

leadership:[

"Mampu mengambil keputusan sendiri",

"Tidak mudah dipengaruhi",

"Perlu meningkatkan kolaborasi"

],

relationship:[

"Menghargai ruang pribadi",

"Mandiri",

"Perlu lebih terbuka terhadap bantuan pasangan"

],

development:[

"Belajar berkolaborasi",

"Meningkatkan kemampuan delegasi"

],

action30:[

"Meminta bantuan dalam satu proyek",

"Berkolaborasi dengan orang lain"

],

action90:[

"Membangun keseimbangan antara kemandirian dan kerja sama"

]

},

Cooperative:{

title:"Cooperative",

summary:"Anda merasa lebih nyaman ketika dapat bekerja sama, berdiskusi, dan melibatkan orang lain dalam proses kerja.",

strengths:[

"Kolaboratif",

"Team Player",

"Mudah membangun hubungan",

"Kooperatif",

"Mudah beradaptasi dalam tim"

],

challenges:[

"Terlalu bergantung pada tim",

"Kurang nyaman bekerja sendiri"

],

career:[

"HRD",

"Project Manager",

"Coach",

"Guru",

"Team Leader"

],

communication:[

"Kooperatif",

"Terbuka",

"Kolaboratif"

],

leadership:[

"Membangun kekompakan",

"Mendorong partisipasi tim"

],

relationship:[

"Mudah membangun kedekatan",

"Senang berbagi"

],

development:[

"Melatih kemandirian",

"Mengambil keputusan sendiri"

],

action30:[

"Mengambil keputusan tanpa konsultasi berlebihan",

"Bekerja mandiri dalam satu proyek"

],

action90:[

"Membangun keseimbangan kerja sama dan kemandirian"

]

},

People:{

title:"People",

summary:"Fokus utama Anda adalah manusia, hubungan, komunikasi, dan kesejahteraan orang lain.",

strengths:[

"Empati tinggi",

"Mudah membangun hubungan",

"Komunikatif",

"Peduli",

"Disukai banyak orang"

],

challenges:[

"Terlalu mempertimbangkan perasaan orang lain",

"Sulit bersikap tegas",

"Kadang mengabaikan target"

],

career:[

"Trainer",

"Coach",

"Guru",

"HRD",

"Konselor",

"Public Relations"

],

communication:[

"Hangat",

"Empatik",

"Ramah"

],

leadership:[

"People Oriented",

"Membangun loyalitas tim"

],

relationship:[

"Penuh perhatian",

"Mudah memahami kebutuhan pasangan"

],

development:[

"Meningkatkan ketegasan",

"Menyeimbangkan hubungan dan hasil"

],

action30:[

"Belajar memberikan batasan",

"Melatih komunikasi asertif"

],

action90:[

"Membangun keseimbangan antara empati dan produktivitas"

]

},

Task:{

title:"Task",

summary:"Anda lebih fokus pada target, hasil, pencapaian, dan penyelesaian pekerjaan dibanding hubungan interpersonal.",

strengths:[

"Produktif",

"Efisien",

"Berorientasi hasil",

"Tegas",

"Fokus target"

],

challenges:[

"Kurang memperhatikan perasaan orang lain",

"Terlihat terlalu keras",

"Kurang sabar"

],

career:[

"Project Manager",

"Operations Manager",

"Supervisor",

"Entrepreneur",

"Leader"

],

communication:[

"Langsung",

"To The Point",

"Berorientasi solusi"

],

leadership:[

"Fokus hasil",

"Mendorong produktivitas"

],

relationship:[

"Perlu meningkatkan empati",

"Perlu lebih memperhatikan kebutuhan emosional pasangan"

],

development:[

"Meningkatkan kecerdasan emosional",

"Membangun hubungan yang lebih hangat"

],

action30:[

"Melatih empati",

"Memberikan apresiasi kepada orang lain"

],

action90:[

"Membangun keseimbangan hasil dan hubungan"

]

},

Possibility:{

title:"Possibility",

summary:"Anda lebih termotivasi oleh peluang, kemungkinan, ide baru, dan potensi yang dapat dicapai.",

strengths:[

"Kreatif",

"Visioner",

"Inovatif",

"Cepat melihat peluang",

"Berpikiran terbuka"

],

challenges:[

"Terlalu banyak ide",

"Kurang fokus eksekusi",

"Mudah berpindah proyek"

],

career:[

"Entrepreneur",

"Marketing",

"Business Development",

"Creative Industry",

"Trainer"

],

communication:[

"Inspiratif",

"Kreatif",

"Visioner"

],

leadership:[

"Mendorong inovasi",

"Menciptakan peluang baru"

],

relationship:[

"Membawa energi positif",

"Senang mengeksplorasi pengalaman baru"

],

development:[

"Meningkatkan fokus",

"Membangun disiplin eksekusi"

],

action30:[

"Menyelesaikan satu ide sampai selesai",

"Mengurangi proyek yang tidak prioritas"

],

action90:[

"Membangun sistem eksekusi yang konsisten"

]

},

Necessity:{

title:"Necessity",

summary:"Anda lebih termotivasi ketika ada kewajiban, tanggung jawab, atau kebutuhan yang harus dipenuhi.",

strengths:[

"Disiplin",

"Bertanggung jawab",

"Konsisten",

"Dapat diandalkan",

"Komitmen tinggi"

],

challenges:[

"Kurang spontan",

"Sulit bergerak tanpa tekanan",

"Kurang tertarik bereksperimen"

],

career:[

"Administrasi",

"Keuangan",

"Operasional",

"Compliance",

"Quality Assurance"

],

communication:[

"Serius",

"Bertanggung jawab",

"Berorientasi kewajiban"

],

leadership:[

"Menjaga komitmen",

"Menegakkan standar"

],

relationship:[

"Setia",

"Bertanggung jawab",

"Dapat dipercaya"

],

development:[

"Belajar melihat peluang",

"Meningkatkan fleksibilitas"

],

action30:[

"Mencoba satu hal baru setiap minggu",

"Mencari peluang di luar rutinitas"

],

action90:[

"Membangun keseimbangan antara kewajiban dan peluang"

]

}



};

// --- knowledgeBase_remaja.js ---
const KNOWLEDGE_BASE_PREMIUM_REMAJA = {
   
Toward:{

title:"Toward",

summary:"Anda merupakan remaja yang lebih mudah termotivasi oleh tujuan, impian, harapan, dan pencapaian yang ingin diraih. Ketika memiliki target yang jelas, seperti memperoleh nilai yang lebih baik, diterima di sekolah atau perguruan tinggi impian, memenangkan perlombaan, menjadi pengurus organisasi, atau mengembangkan bakat tertentu, Anda cenderung menunjukkan semangat belajar dan usaha yang tinggi. Dibandingkan memikirkan kegagalan atau kesalahan yang mungkin terjadi, perhatian Anda lebih banyak tertuju pada hasil positif yang ingin dicapai. Pola berpikir ini membuat Anda terlihat optimis, antusias mencoba pengalaman baru, serta cepat bangkit ketika menghadapi tantangan. Namun, karena terlalu fokus pada tujuan, terkadang Anda kurang memperhatikan hambatan, risiko, atau langkah-langkah kecil yang diperlukan untuk mencapainya. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan semangat meraih prestasi dengan kemampuan membuat perencanaan yang matang dan disiplin menjalankan prosesnya.",

strengths:[

"Memiliki semangat belajar ketika memiliki target yang jelas",

"Optimis menghadapi tantangan baru",

"Mudah termotivasi oleh cita-cita dan impian",

"Berani mencoba pengalaman baru",

"Cepat melihat peluang untuk berkembang",

"Mampu menginspirasi teman melalui sikap positif"

],

challenges:[

"Terkadang terlalu fokus pada hasil sehingga mengabaikan proses",

"Kurang memperhatikan risiko atau konsekuensi",

"Mudah berpindah ke tujuan baru sebelum target lama selesai",

"Kadang kehilangan motivasi jika tujuan terasa terlalu jauh",

"Kurang sabar menjalani proses yang membutuhkan waktu lama"

],

career:[

"Memiliki potensi berkembang pada bidang kepemimpinan",

"Cocok mengikuti organisasi sekolah atau OSIS",

"Berpotensi pada bidang kewirausahaan muda",

"Cocok mengembangkan kemampuan public speaking",

"Berpotensi pada bidang kreatif dan inovasi",

"Memiliki peluang menjadi penggerak komunitas atau kegiatan sosial"

],

communication:[

"Berbicara dengan penuh semangat dan optimisme",

"Mudah memberikan motivasi kepada teman",

"Lebih sering membahas impian, target, dan rencana masa depan",

"Mampu membangun suasana yang positif",

"Perlu belajar mendengarkan kekhawatiran orang lain sebelum memberi solusi"

],

leadership:[

"Mampu mengajak teman bergerak menuju tujuan bersama",

"Pandai membangun semangat kelompok",

"Berani mengambil inisiatif dalam kegiatan sekolah",

"Cocok menjadi ketua kelas, pengurus organisasi, atau ketua panitia",

"Perlu meningkatkan kemampuan membuat perencanaan yang lebih rinci"

],

relationship:[

"Senang memiliki teman yang sama-sama memiliki tujuan positif",

"Mudah memberikan dukungan dan motivasi kepada sahabat",

"Lebih menyukai lingkungan yang penuh semangat berkembang",

"Perlu belajar lebih peka terhadap perasaan teman yang sedang mengalami kesulitan",

"Perlu memahami bahwa setiap orang memiliki kecepatan berkembang yang berbeda"

],

development:[

"Belajar menikmati proses, bukan hanya mengejar hasil",

"Melatih kemampuan membuat rencana belajar yang realistis",

"Meningkatkan perhatian terhadap detail sebelum mengambil keputusan",

"Melatih konsistensi menyelesaikan apa yang sudah dimulai",

"Menyeimbangkan optimisme dengan perencanaan yang matang"

],

action30:[

"Menentukan tiga target belajar atau pengembangan diri selama satu bulan",

"Membuat jadwal harian sederhana untuk mendukung pencapaian target",

"Melakukan evaluasi perkembangan setiap akhir minggu",

"Mencatat hambatan yang dihadapi beserta solusi yang dapat dilakukan",

"Memberikan apresiasi kepada diri sendiri setiap berhasil mencapai target kecil"

],

action90:[

"Membangun kebiasaan disiplin dalam mengejar tujuan",

"Menyelesaikan minimal satu proyek atau target hingga tuntas",

"Meningkatkan kemampuan merencanakan langkah-langkah sebelum bertindak",

"Membangun keseimbangan antara semangat, disiplin, dan tanggung jawab",

"Menjadikan proses belajar sebagai kebiasaan yang menyenangkan"

]

},

Away:{

title:"Away",

summary:"Anda merupakan remaja yang lebih termotivasi ketika ingin menghindari masalah, kesalahan, konsekuensi negatif, atau situasi yang tidak diinginkan. Dalam kehidupan sehari-hari, Anda cenderung berpikir terlebih dahulu mengenai apa yang bisa terjadi jika mengambil keputusan tertentu. Misalnya, Anda belajar agar tidak mendapatkan nilai jelek, menjaga pergaulan agar tidak terpengaruh hal negatif, atau menyelesaikan tugas agar tidak mendapat teguran dari guru maupun orang tua. Pola berpikir ini membuat Anda menjadi pribadi yang lebih berhati-hati, teliti, dan mampu mengantisipasi berbagai risiko sebelum bertindak. Anda tidak mudah mengambil keputusan secara impulsif karena terbiasa mempertimbangkan kemungkinan buruk yang dapat muncul. Namun, jika dilakukan secara berlebihan, Anda dapat menjadi terlalu khawatir, kurang percaya diri mencoba hal baru, atau kehilangan kesempatan yang sebenarnya dapat membawa perkembangan positif. Anda akan berkembang lebih optimal apabila mampu menjaga keseimbangan antara sikap waspada dengan keberanian untuk mencoba pengalaman baru yang telah dipertimbangkan secara matang.",

strengths:[

"Berpikir hati-hati sebelum mengambil keputusan",

"Mampu mengenali risiko sejak awal",

"Teliti dalam mengerjakan tugas sekolah",

"Tidak mudah terpengaruh ajakan negatif",

"Memiliki kesadaran terhadap konsekuensi dari setiap tindakan",

"Mampu menjaga diri dalam lingkungan pergaulan"

],

challenges:[

"Mudah merasa khawatir terhadap kemungkinan gagal",

"Kurang percaya diri mencoba pengalaman baru",

"Sering berpikir terlalu lama sebelum bertindak",

"Cenderung memilih zona nyaman",

"Kadang kehilangan peluang karena terlalu berhati-hati"

],

career:[

"Berpotensi berkembang pada bidang penelitian",

"Cocok pada bidang sains dan analisis",

"Memiliki potensi dalam bidang kesehatan",

"Cocok pada bidang teknologi dan pemrograman",

"Berpotensi dalam bidang akuntansi atau keuangan",

"Memiliki kemampuan pada bidang pengawasan dan evaluasi"

],

communication:[

"Berbicara dengan mempertimbangkan dampak perkataan",

"Sering mengingatkan teman terhadap risiko",

"Cenderung realistis dalam berdiskusi",

"Menyukai pembicaraan yang logis dan berdasarkan fakta",

"Perlu lebih sering menyampaikan apresiasi dan harapan positif"

],

leadership:[

"Mampu menjaga ketertiban dalam kelompok",

"Berhati-hati sebelum mengambil keputusan bersama",

"Pandai mengidentifikasi potensi masalah dalam sebuah kegiatan",

"Menjaga agar rencana berjalan sesuai aturan",

"Perlu lebih berani mengambil peluang yang telah diperhitungkan"

],

relationship:[

"Berusaha menjaga persahabatan agar tetap baik",

"Peduli terhadap keselamatan dan kebaikan teman",

"Cenderung mengingatkan teman ketika melihat sesuatu yang berisiko",

"Perlu mengurangi rasa khawatir yang berlebihan terhadap hubungan sosial",

"Belajar lebih percaya kepada orang lain yang telah menunjukkan sikap positif"

],

development:[

"Melatih keberanian mencoba pengalaman baru",

"Belajar melihat peluang selain risiko",

"Meningkatkan rasa percaya diri terhadap kemampuan sendiri",

"Menyeimbangkan sikap hati-hati dengan keberanian bertindak",

"Melatih pola pikir yang lebih optimis tanpa mengabaikan kewaspadaan"

],

action30:[

"Mencoba satu kegiatan baru yang positif di sekolah atau luar sekolah",

"Menuliskan tiga peluang yang ditemukan setiap minggu",

"Mengambil satu keputusan sederhana tanpa menunda terlalu lama",

"Mengurangi kebiasaan overthinking melalui evaluasi fakta",

"Mencatat setiap keberhasilan kecil sebagai penguat rasa percaya diri"

],

action90:[

"Membangun keberanian menghadapi tantangan baru",

"Meningkatkan rasa percaya diri dalam mengambil keputusan",

"Menciptakan keseimbangan antara kewaspadaan dan optimisme",

"Mengembangkan kemampuan melihat peluang secara objektif",

"Membangun karakter yang berani, bijaksana, dan bertanggung jawab"

]

},

Internal:{

title:"Internal",

summary:"Anda merupakan remaja yang cenderung menggunakan penilaian, keyakinan, dan standar pribadi sebagai acuan utama dalam mengambil keputusan. Ketika menentukan apakah suatu hasil sudah baik atau belum, Anda lebih mengandalkan kepuasan terhadap diri sendiri dibandingkan sekadar pujian atau penilaian dari orang lain. Pola ini membuat Anda memiliki kemandirian berpikir dan tidak mudah terpengaruh oleh tekanan lingkungan atau tren yang sedang berkembang. Dalam proses belajar maupun kehidupan sosial, Anda lebih nyaman melakukan sesuatu karena memang Anda menganggapnya benar, bukan hanya karena mengikuti teman. Karakter ini menjadi modal penting dalam membangun integritas dan rasa percaya diri. Namun, apabila tidak diimbangi dengan keterbukaan terhadap masukan, Anda dapat terlihat keras kepala, sulit menerima kritik, atau kurang menyadari adanya area yang masih perlu diperbaiki. Anda akan berkembang lebih optimal apabila mampu mempertahankan keyakinan diri sekaligus tetap terbuka terhadap saran dan pengalaman baru yang dapat membantu Anda bertumbuh.",

strengths:[

"Percaya pada kemampuan diri sendiri",

"Memiliki pendirian yang kuat",

"Tidak mudah terpengaruh tekanan teman sebaya",

"Mandiri dalam mengambil keputusan",

"Berani mempertahankan nilai dan prinsip yang diyakini",

"Memiliki rasa tanggung jawab terhadap pilihan sendiri"

],

challenges:[

"Kadang sulit menerima kritik",

"Cenderung mempertahankan pendapat sendiri",

"Kurang meminta bantuan ketika mengalami kesulitan",

"Berpotensi terlihat keras kepala",

"Kadang menganggap pendapat sendiri selalu paling tepat"

],

career:[

"Berpotensi menjadi pemimpin organisasi sekolah",

"Cocok mengembangkan jiwa kewirausahaan sejak dini",

"Memiliki potensi pada bidang riset dan inovasi",

"Cocok menjadi mentor atau tutor sebaya",

"Berpotensi berkembang pada bidang kepemimpinan dan manajemen",

"Memiliki kemampuan mengambil keputusan secara mandiri"

],

communication:[

"Berbicara dengan penuh keyakinan",

"Berani mengemukakan pendapat di depan kelas",

"Tidak mudah berubah hanya karena tekanan kelompok",

"Cenderung berbicara secara tegas dan langsung",

"Perlu meningkatkan kemampuan mendengarkan sudut pandang orang lain"

],

leadership:[

"Berani mengambil keputusan ketika memimpin kelompok",

"Mampu menjadi panutan karena memiliki prinsip yang jelas",

"Tidak mudah goyah oleh tekanan lingkungan",

"Mendorong anggota tim untuk bertanggung jawab",

"Perlu membuka ruang diskusi sebelum menetapkan keputusan"

],

relationship:[

"Memiliki identitas diri yang kuat dalam pergaulan",

"Tidak mudah ikut-ikutan melakukan hal negatif",

"Setia terhadap persahabatan yang sehat",

"Perlu lebih menghargai perbedaan pendapat teman",

"Belajar menerima bahwa setiap orang memiliki cara berpikir yang berbeda"

],

development:[

"Melatih kemampuan menerima kritik secara positif",

"Membuka diri terhadap pengalaman baru",

"Belajar meminta masukan sebelum mengambil keputusan penting",

"Meningkatkan kemampuan bekerja sama",

"Menumbuhkan sikap rendah hati tanpa kehilangan rasa percaya diri"

],

action30:[

"Meminta umpan balik dari guru, orang tua, atau teman yang dipercaya",

"Mencatat tiga masukan yang dapat membantu perkembangan diri",

"Berlatih mendengarkan pendapat orang lain tanpa langsung membantah",

"Melibatkan teman ketika mengerjakan proyek kelompok",

"Melakukan evaluasi diri setiap akhir minggu"

],

action90:[

"Membangun keseimbangan antara kepercayaan diri dan kerendahan hati",

"Meningkatkan kemampuan bekerja sama dalam berbagai kegiatan",

"Mengembangkan pola pikir terbuka terhadap pembelajaran baru",

"Menjadi pribadi yang percaya diri sekaligus mudah menerima masukan",

"Membangun karakter pemimpin yang kuat, bijaksana, dan kolaboratif"

]

},

External:{

title:"External",

summary:"Anda merupakan remaja yang cenderung menggunakan masukan, pendapat, serta umpan balik dari lingkungan sebagai bahan pertimbangan dalam menilai diri sendiri maupun mengambil keputusan. Ketika mendapatkan apresiasi dari guru, orang tua, atau teman, Anda biasanya merasa lebih percaya diri dan semakin bersemangat untuk berkembang. Sebaliknya, kritik atau penolakan juga dapat memengaruhi perasaan dan motivasi Anda. Karakter ini membuat Anda menjadi pribadi yang terbuka terhadap pembelajaran, mudah menerima arahan, serta memiliki kemampuan beradaptasi yang baik dengan lingkungan baru. Anda juga cenderung memperhatikan bagaimana tindakan Anda berdampak pada orang lain sehingga lebih mudah bekerja sama dalam kelompok. Namun apabila terlalu bergantung pada penilaian lingkungan, Anda dapat kehilangan kepercayaan terhadap kemampuan diri sendiri, menjadi sulit mengambil keputusan secara mandiri, atau terlalu takut melakukan kesalahan karena khawatir dinilai negatif. Anda akan berkembang lebih optimal apabila mampu menjadikan masukan dari orang lain sebagai bahan belajar tanpa kehilangan keyakinan terhadap nilai dan kemampuan diri sendiri.",

strengths:[

"Mudah menerima saran dan masukan yang membangun",

"Terbuka terhadap proses belajar",

"Mampu bekerja sama dengan berbagai karakter teman",

"Adaptif terhadap lingkungan baru",

"Peka terhadap kebutuhan dan perasaan orang lain",

"Memiliki semangat berkembang melalui evaluasi"

],

challenges:[

"Mudah terpengaruh pendapat orang lain",

"Terlalu membutuhkan pengakuan atau pujian",

"Kurang percaya pada kemampuan diri sendiri",

"Ragu mengambil keputusan tanpa meminta pendapat orang lain",

"Takut melakukan kesalahan karena khawatir dinilai negatif"

],

career:[

"Berpotensi berkembang pada bidang pendidikan",

"Cocok dalam organisasi yang mengutamakan kerja sama",

"Memiliki potensi pada bidang pelayanan masyarakat",

"Cocok pada bidang psikologi atau konseling",

"Berpotensi berkembang pada bidang komunikasi",

"Memiliki kemampuan membangun hubungan interpersonal"

],

communication:[

"Mudah menerima masukan ketika berdiskusi",

"Menjadi pendengar yang baik",

"Komunikatif dan mudah diajak bekerja sama",

"Peka terhadap ekspresi dan perasaan lawan bicara",

"Perlu meningkatkan keberanian menyampaikan pendapat pribadi"

],

leadership:[

"Membangun suasana kerja sama yang positif",

"Mudah melibatkan seluruh anggota kelompok",

"Terbuka terhadap ide dan masukan tim",

"Mampu menjadi pemimpin yang suportif",

"Perlu meningkatkan ketegasan ketika mengambil keputusan"

],

relationship:[

"Mudah menjalin persahabatan",

"Peduli terhadap kenyamanan teman",

"Senang memberikan dukungan kepada orang lain",

"Berusaha menjaga hubungan tetap harmonis",

"Perlu belajar menjaga batasan agar tidak selalu mengutamakan orang lain"

],

development:[

"Melatih kepercayaan terhadap kemampuan diri sendiri",

"Belajar mengambil keputusan sederhana secara mandiri",

"Mengurangi ketergantungan terhadap validasi dari lingkungan",

"Meningkatkan keberanian mengemukakan pendapat",

"Membangun keseimbangan antara mendengarkan orang lain dan mempercayai diri sendiri"

],

action30:[

"Mengambil satu keputusan setiap hari tanpa meminta persetujuan orang lain",

"Menuliskan tiga keberhasilan diri setiap minggu",

"Berlatih menyampaikan pendapat saat diskusi kelas",

"Menerima kritik dengan sikap terbuka tanpa merasa rendah diri",

"Menentukan target pribadi yang berasal dari keinginan diri sendiri"

],

action90:[

"Membangun rasa percaya diri yang lebih kuat",

"Meningkatkan kemandirian dalam mengambil keputusan",

"Mengembangkan keberanian menyampaikan ide di depan orang lain",

"Menciptakan keseimbangan antara menerima masukan dan mempercayai diri sendiri",

"Menjadi pribadi yang terbuka, percaya diri, dan mampu bekerja sama secara sehat"

]

},

Options:{

title:"Options",

summary:"Anda merupakan remaja yang menyukai kebebasan untuk memilih, mencoba berbagai pengalaman baru, dan mengeksplorasi banyak kemungkinan sebelum menentukan keputusan. Anda biasanya merasa lebih bersemangat ketika memiliki kesempatan untuk berkreasi, bereksperimen, atau menemukan cara yang berbeda dalam menyelesaikan suatu tugas. Dibandingkan mengikuti aturan yang terlalu kaku, Anda lebih nyaman apabila diberikan ruang untuk mengembangkan ide sesuai gaya Anda sendiri. Karakter ini membuat Anda cepat melihat peluang, mudah beradaptasi terhadap perubahan, dan memiliki rasa ingin tahu yang tinggi terhadap berbagai hal. Tidak jarang Anda memiliki banyak hobi, minat, atau cita-cita sekaligus karena senang mempelajari hal-hal baru. Namun, tantangan terbesar Anda adalah menjaga konsistensi. Ketika menemukan sesuatu yang lebih menarik, Anda mungkin mudah berpindah fokus sehingga beberapa target belum sempat diselesaikan. Anda akan berkembang lebih optimal apabila mampu menggabungkan kreativitas yang tinggi dengan disiplin dalam menyelesaikan setiap tanggung jawab yang telah dimulai.",

strengths:[

"Memiliki kreativitas yang tinggi",

"Mudah menemukan ide-ide baru",

"Cepat beradaptasi terhadap perubahan",

"Senang belajar hal-hal baru",

"Berani mencoba pengalaman yang berbeda",

"Fleksibel dalam mencari solusi"

],

challenges:[

"Mudah berpindah minat",

"Sering memiliki terlalu banyak pilihan",

"Kurang konsisten menyelesaikan tugas",

"Mudah terdistraksi oleh hal baru",

"Kadang sulit menentukan prioritas"

],

career:[

"Berpotensi berkembang pada bidang kreatif",

"Cocok mengikuti ekstrakurikuler yang beragam",

"Memiliki potensi dalam dunia desain, seni, atau media digital",

"Cocok mengembangkan jiwa kewirausahaan muda",

"Berpotensi pada bidang teknologi dan inovasi",

"Mudah berkembang dalam lingkungan yang dinamis"

],

communication:[

"Senang berdiskusi dan bertukar ide",

"Antusias saat membahas sesuatu yang menarik",

"Mampu menghasilkan banyak gagasan kreatif",

"Mudah menghidupkan suasana diskusi",

"Perlu belajar menyampaikan ide secara lebih terstruktur"

],

leadership:[

"Mendorong inovasi dalam kelompok",

"Menginspirasi teman untuk mencoba cara baru",

"Terbuka terhadap berbagai pendapat",

"Mampu melihat banyak alternatif solusi",

"Perlu meningkatkan kemampuan mengeksekusi rencana hingga selesai"

],

relationship:[

"Senang berteman dengan banyak orang",

"Mudah bergaul dengan lingkungan baru",

"Menyukai aktivitas bersama yang bervariasi",

"Membawa energi positif dalam pertemanan",

"Perlu menjaga komitmen dan konsistensi dalam hubungan"

],

development:[

"Belajar menentukan prioritas utama",

"Melatih konsistensi dalam menyelesaikan tugas",

"Membatasi jumlah target yang dikerjakan secara bersamaan",

"Membangun kebiasaan membuat rencana sebelum memulai aktivitas",

"Menyeimbangkan kreativitas dengan kedisiplinan"

],

action30:[

"Menentukan satu target utama yang harus diselesaikan bulan ini",

"Membuat daftar prioritas harian",

"Menyelesaikan satu proyek tanpa berpindah ke proyek lain",

"Mengurangi distraksi saat belajar",

"Melakukan evaluasi kemajuan setiap minggu"

],

action90:[

"Membangun kebiasaan menyelesaikan setiap tanggung jawab hingga tuntas",

"Meningkatkan disiplin dalam mengelola waktu",

"Mengembangkan kemampuan fokus jangka panjang",

"Menggabungkan kreativitas dengan konsistensi",

"Menjadi pribadi yang inovatif sekaligus dapat diandalkan"

]

},

Procedures:{

title:"Procedures",

summary:"Anda merupakan remaja yang merasa lebih nyaman ketika memiliki langkah-langkah yang jelas dalam mengerjakan sesuatu. Sebelum memulai suatu aktivitas, Anda cenderung ingin memahami aturan, urutan pekerjaan, atau cara yang benar agar hasilnya sesuai harapan. Dalam belajar, Anda biasanya lebih mudah memahami materi apabila guru memberikan penjelasan secara sistematis dan terstruktur. Anda juga senang membuat jadwal, daftar tugas, atau target yang dapat diikuti secara bertahap. Karakter ini membuat Anda dikenal sebagai pribadi yang disiplin, konsisten, serta dapat dipercaya dalam menjalankan tanggung jawab. Teman dan guru biasanya melihat Anda sebagai seseorang yang mampu menjaga komitmen dan menyelesaikan pekerjaan dengan baik. Namun, ketika menghadapi perubahan mendadak atau situasi yang tidak sesuai rencana, Anda mungkin membutuhkan waktu lebih lama untuk menyesuaikan diri. Anda juga dapat merasa kurang nyaman ketika harus berimprovisasi tanpa arahan yang jelas. Anda akan berkembang lebih optimal apabila mampu mempertahankan kedisiplinan sekaligus melatih fleksibilitas dalam menghadapi perubahan yang tidak dapat dihindari.",

strengths:[

"Disiplin dalam menjalankan tanggung jawab",

"Konsisten menyelesaikan tugas hingga selesai",

"Mudah mengikuti aturan dan prosedur",

"Teratur dalam mengelola waktu",

"Teliti ketika mengerjakan pekerjaan",

"Dapat dipercaya dalam menjalankan amanah"

],

challenges:[

"Kurang nyaman dengan perubahan mendadak",

"Cenderung kaku terhadap aturan",

"Kurang spontan dalam mengambil keputusan",

"Membutuhkan waktu untuk beradaptasi",

"Kadang terlalu bergantung pada petunjuk"

],

career:[

"Berpotensi berkembang pada bidang teknik",

"Cocok pada bidang kesehatan",

"Memiliki potensi dalam bidang administrasi",

"Cocok pada bidang akuntansi dan keuangan",

"Berpotensi pada bidang teknologi dan pemrograman",

"Mudah berkembang pada lingkungan yang memiliki sistem kerja yang jelas"

],

communication:[

"Berbicara secara runtut dan sistematis",

"Mudah menjelaskan langkah-langkah kepada orang lain",

"Menyampaikan informasi dengan jelas",

"Senang menggunakan contoh yang terstruktur",

"Perlu lebih terbuka terhadap ide yang berbeda"

],

leadership:[

"Mampu membuat perencanaan kegiatan dengan baik",

"Menjaga kelompok tetap berjalan sesuai jadwal",

"Disiplin dalam membagi tugas",

"Menjadi contoh dalam tanggung jawab",

"Perlu meningkatkan kemampuan menghadapi perubahan secara fleksibel"

],

relationship:[

"Dapat dipercaya oleh teman",

"Menjaga komitmen dalam persahabatan",

"Disiplin menghargai waktu dan janji",

"Memberikan rasa aman karena konsisten",

"Perlu belajar lebih santai dan menikmati momen bersama teman"

],

development:[

"Melatih kemampuan beradaptasi terhadap perubahan",

"Mencoba cara baru dalam belajar atau menyelesaikan tugas",

"Mengembangkan kreativitas tanpa meninggalkan kedisiplinan",

"Belajar menerima bahwa tidak semua situasi dapat direncanakan",

"Menumbuhkan pola pikir yang lebih fleksibel"

],

action30:[

"Mencoba satu metode belajar baru setiap minggu",

"Mengikuti satu kegiatan di luar rutinitas harian",

"Melatih improvisasi dalam diskusi kelompok",

"Menyelesaikan tugas dengan cara yang berbeda dari biasanya",

"Mengevaluasi kebiasaan yang masih terlalu kaku"

],

action90:[

"Membangun keseimbangan antara disiplin dan fleksibilitas",

"Meningkatkan kemampuan beradaptasi terhadap perubahan",

"Mengembangkan kreativitas dalam menyelesaikan masalah",

"Menjadi pribadi yang terstruktur namun tetap terbuka terhadap inovasi",

"Meningkatkan kepercayaan diri menghadapi situasi baru"

]

},

BigPicture:{

title:"Big Picture",

summary:"Anda merupakan remaja yang lebih mudah memahami sesuatu apabila terlebih dahulu mengetahui gambaran besarnya. Sebelum mempelajari detail, Anda biasanya ingin memahami tujuan, manfaat, dan hubungan antar konsep. Ketika guru menjelaskan materi secara menyeluruh sebelum masuk ke pembahasan yang lebih rinci, Anda cenderung lebih cepat memahami pelajaran. Anda juga senang membayangkan cita-cita, merancang masa depan, dan melihat bagaimana setiap pengalaman yang dijalani saat ini akan membantu mencapai tujuan tersebut. Kemampuan melihat pola membuat Anda mampu menghubungkan berbagai informasi yang tampaknya berbeda menjadi satu pemahaman yang utuh. Anda sering menjadi orang yang mampu memberikan ide, arah, atau solusi strategis dalam diskusi kelompok. Namun, karena terlalu fokus pada gambaran besar, Anda terkadang kurang memperhatikan rincian penting, petunjuk teknis, atau langkah-langkah kecil yang menentukan keberhasilan sebuah pekerjaan. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan kemampuan berpikir strategis dengan ketelitian dalam menjalankan setiap proses.",

strengths:[

"Mudah memahami konsep secara menyeluruh",

"Memiliki visi dan cita-cita yang jelas",

"Mampu melihat hubungan antar berbagai ide",

"Berpikir strategis dalam menyelesaikan masalah",

"Senang merancang tujuan jangka panjang",

"Mudah menemukan arah dalam sebuah proyek"

],

challenges:[

"Kurang memperhatikan detail kecil",

"Kadang melewatkan instruksi penting",

"Cenderung terburu-buru memulai sebelum memahami langkah teknis",

"Kurang teliti dalam pemeriksaan akhir",

"Kadang menganggap detail sebagai hal yang membosankan"

],

career:[

"Berpotensi pada bidang kepemimpinan",

"Cocok mengembangkan kemampuan perencanaan strategis",

"Memiliki potensi dalam bidang bisnis dan kewirausahaan",

"Cocok pada bidang pendidikan dan pelatihan",

"Berpotensi pada bidang inovasi dan pengembangan",

"Mudah berkembang sebagai penggerak organisasi"

],

communication:[

"Menjelaskan ide secara menyeluruh",

"Mudah menginspirasi teman melalui visi yang dimiliki",

"Lebih nyaman membahas tujuan dibanding rincian teknis",

"Mampu menyederhanakan konsep yang kompleks",

"Perlu meningkatkan kemampuan menjelaskan detail secara runtut"

],

leadership:[

"Mampu membangun visi bersama",

"Mengarahkan kelompok menuju tujuan yang jelas",

"Pandai melihat peluang jangka panjang",

"Menginspirasi anggota kelompok untuk berkembang",

"Perlu melibatkan anggota yang teliti dalam proses pelaksanaan"

],

relationship:[

"Senang berteman dengan orang yang memiliki tujuan positif",

"Mendorong teman untuk berkembang bersama",

"Lebih fokus pada hubungan jangka panjang",

"Perlu memberikan perhatian pada hal-hal kecil yang berarti bagi orang lain",

"Belajar menghargai proses, bukan hanya hasil akhir"

],

development:[

"Melatih ketelitian dalam setiap pekerjaan",

"Membiasakan membaca instruksi secara lengkap",

"Membuat daftar pemeriksaan sebelum mengumpulkan tugas",

"Belajar membagi tujuan besar menjadi langkah-langkah kecil",

"Mengembangkan keseimbangan antara visi dan pelaksanaan"

],

action30:[

"Membuat checklist sebelum menyelesaikan tugas",

"Memeriksa kembali hasil pekerjaan sebelum dikumpulkan",

"Membagi target besar menjadi beberapa target mingguan",

"Melatih diri membaca instruksi sampai selesai",

"Mencatat detail penting dalam setiap kegiatan"

],

action90:[

"Meningkatkan ketelitian dalam menjalankan rencana",

"Membangun keseimbangan antara strategi dan pelaksanaan",

"Mengembangkan kemampuan mengelola proyek secara menyeluruh",

"Menjadi pribadi yang visioner sekaligus teliti",

"Meningkatkan kualitas hasil melalui perhatian terhadap detail"

]

},

Detail:{

title:"Detail",

summary:"Anda merupakan remaja yang cenderung memperhatikan rincian, fakta, dan informasi secara teliti sebelum mengambil keputusan. Ketika mempelajari suatu materi, Anda biasanya ingin memahami setiap bagian secara lengkap agar tidak ada informasi yang terlewat. Dalam mengerjakan tugas sekolah maupun kegiatan organisasi, Anda lebih nyaman apabila mengetahui petunjuk secara jelas dan memiliki waktu untuk memeriksa kembali hasil pekerjaan sebelum dikumpulkan. Karakter ini membuat Anda dikenal sebagai pribadi yang cermat, rapi, dan mampu menghasilkan pekerjaan yang berkualitas. Teman maupun guru sering mempercayai Anda untuk menangani bagian yang membutuhkan ketelitian karena Anda mampu menemukan kesalahan yang sering tidak disadari oleh orang lain. Namun, perhatian yang sangat besar terhadap detail terkadang membuat Anda membutuhkan waktu lebih lama dalam menyelesaikan pekerjaan. Anda juga dapat menjadi terlalu perfeksionis sehingga merasa hasil pekerjaan belum cukup baik meskipun sebenarnya sudah memenuhi standar. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan ketelitian dengan kemampuan menentukan prioritas dan melihat gambaran besar dari tujuan yang ingin dicapai.",

strengths:[

"Teliti dalam mengerjakan tugas",

"Mampu menemukan kesalahan yang sering terlewat",

"Menghasilkan pekerjaan yang rapi dan akurat",

"Memiliki perhatian tinggi terhadap kualitas",

"Disiplin mengikuti petunjuk",

"Berorientasi pada hasil yang baik"

],

challenges:[

"Cenderung perfeksionis",

"Membutuhkan waktu lebih lama untuk menyelesaikan pekerjaan",

"Kadang terlalu fokus pada hal-hal kecil",

"Sulit menentukan kapan pekerjaan sudah cukup baik",

"Kurang melihat tujuan besar karena terlalu fokus pada rincian"

],

career:[

"Berpotensi pada bidang sains",

"Cocok mengembangkan kemampuan penelitian",

"Memiliki potensi pada bidang teknologi",

"Cocok pada bidang kesehatan",

"Berpotensi pada bidang desain teknis",

"Memiliki kemampuan analisis yang baik"

],

communication:[

"Menjelaskan sesuatu secara rinci",

"Menyampaikan informasi dengan jelas dan lengkap",

"Jarang melewatkan fakta penting",

"Mudah dipercaya ketika menjelaskan materi",

"Perlu belajar menyampaikan inti informasi terlebih dahulu"

],

leadership:[

"Mampu menjaga kualitas pekerjaan kelompok",

"Memastikan setiap tugas diselesaikan dengan baik",

"Teliti dalam memeriksa hasil kerja tim",

"Mendorong anggota kelompok bekerja lebih rapi",

"Perlu meningkatkan kemampuan melihat prioritas utama"

],

relationship:[

"Peduli terhadap hal-hal kecil yang berarti bagi teman",

"Ingat detail penting tentang orang lain",

"Dapat dipercaya karena konsisten",

"Menunjukkan perhatian melalui tindakan nyata",

"Perlu belajar tidak terlalu mempermasalahkan kesalahan kecil"

],

development:[

"Belajar menentukan prioritas",

"Mengurangi kecenderungan perfeksionis",

"Melatih kemampuan melihat tujuan besar",

"Menentukan batas waktu dalam menyelesaikan pekerjaan",

"Membangun keseimbangan antara kualitas dan efisiensi"

],

action30:[

"Menyelesaikan tugas sesuai batas waktu yang ditentukan",

"Membatasi waktu untuk memeriksa ulang pekerjaan",

"Membuat ringkasan sebelum mempelajari detail",

"Menentukan tiga prioritas utama setiap hari",

"Melatih diri menerima bahwa hasil yang baik tidak selalu harus sempurna"

],

action90:[

"Membangun keseimbangan antara ketelitian dan produktivitas",

"Meningkatkan kemampuan menentukan prioritas",

"Mengembangkan pola pikir yang lebih fleksibel",

"Menjadi pribadi yang teliti tanpa kehilangan efisiensi",

"Menghasilkan pekerjaan berkualitas secara konsisten"

]

},

Matching:{

title:"Matching",

summary:"Anda merupakan remaja yang secara alami lebih mudah melihat persamaan, kesamaan tujuan, dan titik temu dibandingkan perbedaan. Dalam pergaulan, Anda cenderung berusaha menjaga hubungan tetap harmonis serta menghindari konflik yang tidak perlu. Ketika bekerja dalam kelompok, Anda biasanya menjadi orang yang mampu menyatukan berbagai pendapat dan membantu teman-teman menemukan kesepakatan. Sikap ini membuat Anda mudah diterima di berbagai lingkungan karena mampu menghargai perbedaan tanpa kehilangan rasa kebersamaan. Anda juga lebih mudah membangun persahabatan baru karena terbiasa mencari hal-hal positif yang dimiliki orang lain. Namun, keinginan menjaga keharmonisan terkadang membuat Anda enggan menyampaikan pendapat yang berbeda atau menghindari pembicaraan yang sebenarnya penting untuk menyelesaikan masalah. Anda mungkin memilih diam agar tidak menimbulkan konflik, meskipun ada hal yang perlu diperbaiki. Anda akan berkembang lebih optimal apabila mampu menjaga hubungan baik sekaligus berani menyampaikan pendapat secara jujur, sopan, dan konstruktif ketika diperlukan.",

strengths:[

"Mudah menjalin persahabatan",

"Mampu menciptakan suasana yang harmonis",

"Kooperatif dalam kerja kelompok",

"Mudah menemukan kesamaan dengan orang lain",

"Menjadi penengah ketika terjadi perbedaan pendapat",

"Membangun rasa kebersamaan dalam tim"

],

challenges:[

"Kurang nyaman menghadapi konflik",

"Terlalu mudah menyetujui pendapat orang lain",

"Kadang mengabaikan masalah demi menjaga hubungan",

"Sulit memberikan kritik yang membangun",

"Berpotensi kurang objektif ketika mengevaluasi teman"

],

career:[

"Berpotensi pada bidang pendidikan",

"Cocok menjadi mentor atau tutor sebaya",

"Memiliki potensi dalam organisasi sekolah",

"Cocok pada bidang pelayanan masyarakat",

"Berpotensi dalam bidang komunikasi",

"Memiliki kemampuan membangun kerja sama tim"

],

communication:[

"Berbicara dengan ramah dan mudah diterima",

"Menggunakan bahasa yang menjaga perasaan orang lain",

"Mudah membangun suasana yang nyaman",

"Senang mencari solusi yang menguntungkan semua pihak",

"Perlu belajar menyampaikan kritik secara konstruktif"

],

leadership:[

"Mampu membangun kekompakan kelompok",

"Mendorong kerja sama antar anggota",

"Menciptakan lingkungan yang saling mendukung",

"Mudah mendapatkan kepercayaan dari teman",

"Perlu meningkatkan ketegasan ketika mengambil keputusan"

],

relationship:[

"Mudah membangun persahabatan yang erat",

"Peduli terhadap kenyamanan teman",

"Menjadi pendengar yang baik",

"Berusaha menjaga hubungan tetap harmonis",

"Perlu berani menyelesaikan konflik secara terbuka tanpa menghindarinya"

],

development:[

"Belajar menyampaikan pendapat meskipun berbeda",

"Melatih keberanian memberikan umpan balik yang membangun",

"Meningkatkan kemampuan berpikir objektif",

"Belajar menghadapi konflik sebagai proses belajar",

"Menjaga keseimbangan antara harmoni dan kejujuran"

],

action30:[

"Menyampaikan satu pendapat berbeda dalam diskusi kelas secara sopan",

"Memberikan umpan balik positif dan saran kepada teman",

"Melatih komunikasi asertif ketika terjadi perbedaan pendapat",

"Mencatat situasi ketika berhasil menyelesaikan konflik dengan baik",

"Berlatih mengatakan 'tidak' terhadap hal yang tidak sesuai dengan nilai diri"

],

action90:[

"Membangun keberanian berkomunikasi secara jujur dan terbuka",

"Meningkatkan kemampuan menyelesaikan konflik secara dewasa",

"Mengembangkan keseimbangan antara empati dan ketegasan",

"Menjadi pribadi yang mampu menjaga hubungan tanpa mengorbankan prinsip",

"Membangun kepemimpinan yang harmonis sekaligus objektif"

]

},

Mismatching:{

title:"Mismatching",

summary:"Anda merupakan remaja yang secara alami lebih mudah melihat perbedaan, kekurangan, kesalahan, maupun hal-hal yang dapat diperbaiki dibandingkan kesamaannya. Ketika mengerjakan tugas, mengikuti pelajaran, atau berdiskusi bersama teman, perhatian Anda sering tertuju pada bagian yang kurang tepat atau masih bisa ditingkatkan. Kemampuan ini membuat Anda memiliki pola pikir kritis dan analitis sehingga tidak mudah menerima informasi begitu saja tanpa dipikirkan terlebih dahulu. Anda cenderung bertanya, mengevaluasi, dan mencari alasan mengapa sesuatu dilakukan dengan cara tertentu. Dalam kelompok, Anda sering menjadi orang yang menemukan kesalahan yang tidak disadari teman-teman sehingga dapat membantu meningkatkan kualitas hasil kerja bersama. Namun, apabila kemampuan ini tidak diimbangi dengan empati dan komunikasi yang baik, orang lain dapat menganggap Anda terlalu kritis, sulit puas, atau sering mencari kesalahan. Padahal tujuan Anda biasanya bukan untuk menjatuhkan orang lain, melainkan agar hasilnya menjadi lebih baik. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan kemampuan berpikir kritis dengan sikap menghargai usaha dan kelebihan orang lain.",

strengths:[

"Berpikir kritis terhadap berbagai situasi",

"Mudah menemukan kesalahan yang perlu diperbaiki",

"Teliti dalam mengevaluasi hasil pekerjaan",

"Berani mempertanyakan informasi yang kurang jelas",

"Memiliki kemampuan analisis yang baik",

"Mendorong peningkatan kualitas dalam setiap pekerjaan"

],

challenges:[

"Kadang terlihat terlalu kritis",

"Lebih mudah melihat kekurangan daripada kelebihan",

"Dapat membuat teman merasa dikritik",

"Kurang memberikan apresiasi",

"Berpotensi dianggap perfeksionis"

],

career:[

"Berpotensi pada bidang penelitian",

"Cocok dalam bidang teknologi dan pemrograman",

"Memiliki potensi pada bidang sains",

"Cocok pada bidang audit dan evaluasi",

"Berpotensi pada bidang desain dan pengembangan produk",

"Memiliki kemampuan dalam pemecahan masalah"

],

communication:[

"Berani menyampaikan pendapat yang berbeda",

"Menggunakan alasan dan logika ketika berdiskusi",

"Mampu memberikan masukan yang membantu",

"Tidak mudah menerima informasi tanpa bukti",

"Perlu meningkatkan cara menyampaikan kritik agar lebih membangun"

],

leadership:[

"Mendorong kelompok untuk terus berkembang",

"Mampu menemukan kelemahan dalam sebuah rencana",

"Menjaga kualitas hasil kerja tim",

"Berani mengoreksi apabila terjadi kesalahan",

"Perlu meningkatkan kemampuan memberikan apresiasi kepada anggota tim"

],

relationship:[

"Jujur ketika melihat sesuatu yang perlu diperbaiki",

"Peduli agar teman berkembang menjadi lebih baik",

"Tidak mudah terpengaruh hanya karena ingin diterima kelompok",

"Perlu belajar menghargai usaha teman sebelum memberikan kritik",

"Menjaga agar komunikasi tetap hangat meskipun berbeda pendapat"

],

development:[

"Belajar menyeimbangkan kritik dengan apresiasi",

"Melatih kemampuan menyampaikan masukan secara positif",

"Meningkatkan empati terhadap perasaan orang lain",

"Belajar melihat kelebihan sebelum membahas kekurangan",

"Mengembangkan komunikasi yang lebih membangun"

],

action30:[

"Memberikan minimal satu apresiasi setiap hari kepada teman atau keluarga",

"Menggunakan metode 'pujian-saran-pujian' saat memberikan masukan",

"Mencatat tiga hal positif dari setiap pengalaman belajar",

"Berlatih mendengarkan pendapat orang lain sampai selesai",

"Mengurangi kebiasaan mengkritik hal-hal yang kurang penting"

],

action90:[

"Membangun keseimbangan antara berpikir kritis dan empati",

"Meningkatkan kemampuan komunikasi konstruktif",

"Menjadi pribadi yang objektif sekaligus menyenangkan",

"Mengembangkan kepemimpinan yang mendorong pertumbuhan orang lain",

"Menggunakan kemampuan analisis untuk menghasilkan solusi, bukan hanya menemukan masalah"

]

},

Self:{

title:"Self",

summary:"Anda merupakan remaja yang cenderung mempertimbangkan kebutuhan, tujuan, dan tanggung jawab pribadi sebelum memikirkan kepentingan orang lain. Dalam banyak situasi, Anda lebih mudah menentukan apa yang penting bagi diri sendiri dan berusaha mencapainya dengan sungguh-sungguh. Anda memiliki keinginan untuk berkembang, mandiri, dan membuktikan kemampuan yang dimiliki. Karakter ini membantu Anda lebih fokus terhadap target belajar, pengembangan bakat, maupun pencapaian cita-cita tanpa terlalu mudah terpengaruh oleh tekanan lingkungan. Anda juga cenderung memiliki batasan yang jelas mengenai apa yang sesuai dengan nilai dan prinsip yang Anda yakini. Namun apabila kecenderungan ini terlalu dominan, Anda dapat terlihat kurang peka terhadap kebutuhan teman, lebih mengutamakan kepentingan pribadi, atau kurang memperhatikan pentingnya kerja sama dalam kelompok. Anda akan berkembang lebih optimal apabila mampu menjaga keseimbangan antara mengejar tujuan pribadi dengan tetap menghargai, mendukung, dan bekerja sama dengan orang lain.",

strengths:[

"Memiliki tujuan pribadi yang jelas",

"Mandiri dalam mengambil keputusan",

"Fokus terhadap pengembangan diri",

"Berani mempertahankan prinsip yang diyakini",

"Mampu menetapkan batasan yang sehat",

"Tidak mudah terpengaruh tekanan teman sebaya"

],

challenges:[

"Kadang terlalu fokus pada kepentingan sendiri",

"Kurang memperhatikan kebutuhan teman",

"Sulit meminta bantuan ketika mengalami kesulitan",

"Dapat terlihat kurang peduli terhadap lingkungan",

"Kurang menikmati proses kerja sama"

],

career:[

"Berpotensi menjadi wirausaha muda",

"Cocok mengembangkan proyek atau karya pribadi",

"Memiliki potensi kepemimpinan yang mandiri",

"Cocok pada bidang inovasi dan teknologi",

"Berpotensi menjadi pembelajar yang mandiri",

"Memiliki kemampuan membangun prestasi secara individual"

],

communication:[

"Menyampaikan pendapat dengan tegas",

"Berbicara secara langsung dan jujur",

"Percaya diri ketika menjelaskan ide",

"Berani mempertahankan pendapat yang diyakini benar",

"Perlu meningkatkan kemampuan mendengarkan secara aktif"

],

leadership:[

"Berani mengambil keputusan",

"Fokus pada pencapaian tujuan",

"Mampu bekerja secara mandiri",

"Memberikan contoh melalui tindakan nyata",

"Perlu meningkatkan kemampuan melibatkan seluruh anggota kelompok"

],

relationship:[

"Memiliki rasa percaya diri dalam pergaulan",

"Tidak mudah mengikuti ajakan negatif",

"Menghargai ruang pribadi diri sendiri maupun orang lain",

"Perlu meningkatkan kepedulian terhadap kebutuhan teman",

"Belajar menunjukkan perhatian melalui tindakan sederhana"

],

development:[

"Melatih empati terhadap orang lain",

"Belajar bekerja sama dalam kelompok",

"Meningkatkan kemampuan mendengarkan",

"Belajar meminta bantuan ketika diperlukan",

"Menyeimbangkan pencapaian pribadi dengan kepedulian sosial"

],

action30:[

"Mendengarkan teman tanpa memotong pembicaraan",

"Memberikan bantuan kepada teman yang membutuhkan",

"Melibatkan anggota kelompok dalam setiap keputusan",

"Menanyakan pendapat orang lain sebelum mengambil keputusan bersama",

"Mencatat satu tindakan peduli yang dilakukan setiap hari"

],

action90:[

"Membangun keseimbangan antara kemandirian dan kerja sama",

"Meningkatkan kecerdasan emosional",

"Mengembangkan kepemimpinan yang peduli terhadap orang lain",

"Menjadi pribadi yang mandiri sekaligus mudah diajak bekerja sama",

"Membangun karakter yang percaya diri, bertanggung jawab, dan berempati"

]

},

Others:{

title:"Others",

summary:"Anda merupakan remaja yang cenderung lebih memperhatikan kebutuhan, perasaan, dan kesejahteraan orang lain ketika mengambil keputusan. Anda merasa senang apabila dapat membantu teman, mendukung anggota kelompok, atau membuat orang lain merasa nyaman. Dalam lingkungan sekolah maupun organisasi, Anda sering menjadi pribadi yang mudah diajak bekerja sama karena mampu memahami sudut pandang orang lain dan menciptakan suasana yang hangat. Teman-teman biasanya merasa nyaman bercerita kepada Anda karena Anda dikenal sebagai pendengar yang baik dan tidak mudah menghakimi. Karakter ini merupakan modal yang sangat baik untuk membangun hubungan sosial yang sehat serta menjadi pemimpin yang melayani. Namun apabila kecenderungan ini terlalu dominan, Anda dapat lebih sering mengutamakan kepentingan orang lain dibanding kebutuhan diri sendiri. Anda mungkin merasa tidak enak menolak permintaan teman, mudah merasa bersalah, atau kesulitan menetapkan batasan yang sehat. Anda akan berkembang lebih optimal apabila mampu menjaga keseimbangan antara kepedulian terhadap orang lain dan penghargaan terhadap kebutuhan diri sendiri.",

strengths:[

"Memiliki empati yang tinggi",

"Mudah memahami perasaan orang lain",

"Senang membantu teman yang membutuhkan",

"Mudah bekerja sama dalam kelompok",

"Mampu menciptakan suasana yang nyaman",

"Menjadi pendengar yang baik"

],

challenges:[

"Sulit mengatakan 'tidak' ketika diminta bantuan",

"Kadang mengabaikan kebutuhan diri sendiri",

"Mudah merasa bersalah ketika menolak permintaan orang lain",

"Terlalu memikirkan perasaan orang lain",

"Berpotensi dimanfaatkan apabila tidak memiliki batasan yang sehat"

],

career:[

"Berpotensi pada bidang pendidikan",

"Cocok menjadi konselor atau pendamping sebaya",

"Memiliki potensi dalam bidang kesehatan",

"Cocok pada bidang pelayanan masyarakat",

"Berpotensi menjadi pemimpin yang melayani",

"Memiliki kemampuan membangun hubungan interpersonal"

],

communication:[

"Berbicara dengan hangat dan penuh perhatian",

"Menjadi pendengar yang baik",

"Mudah memberikan dukungan emosional",

"Menyesuaikan cara berbicara dengan lawan bicara",

"Perlu meningkatkan keberanian menyampaikan kebutuhan pribadi"

],

leadership:[

"Membangun budaya saling mendukung",

"Peduli terhadap perkembangan setiap anggota kelompok",

"Menciptakan lingkungan yang aman dan nyaman",

"Mendorong kerja sama yang harmonis",

"Perlu meningkatkan ketegasan saat mengambil keputusan"

],

relationship:[

"Mudah menjalin persahabatan yang erat",

"Setia mendukung teman dalam berbagai situasi",

"Menunjukkan kepedulian melalui tindakan nyata",

"Berusaha menjaga hubungan tetap harmonis",

"Perlu belajar menetapkan batasan yang sehat agar hubungan tetap seimbang"

],

development:[

"Belajar mengatakan 'tidak' dengan sopan ketika diperlukan",

"Menjadwalkan waktu untuk mengembangkan diri",

"Meningkatkan kepercayaan diri dalam menyampaikan pendapat",

"Menjaga keseimbangan antara memberi dan menerima",

"Membangun batasan yang sehat tanpa kehilangan rasa peduli"

],

action30:[

"Menolak satu permintaan yang memang tidak mampu dipenuhi dengan cara yang sopan",

"Meluangkan waktu setiap minggu untuk mengembangkan kemampuan diri",

"Menyampaikan pendapat pribadi dalam diskusi kelompok",

"Mencatat kebutuhan diri yang perlu dipenuhi",

"Berlatih membantu orang lain tanpa mengorbankan tanggung jawab utama"

],

action90:[

"Membangun keseimbangan antara kepedulian dan ketegasan",

"Meningkatkan kemampuan menjaga batasan pribadi",

"Mengembangkan rasa percaya diri tanpa kehilangan empati",

"Menjadi pribadi yang suportif sekaligus mandiri",

"Membangun hubungan yang sehat, saling menghargai, dan bertumbuh bersama"

]

},

Proactive:{

title:"Proactive",

summary:"Anda merupakan remaja yang cenderung lebih suka bertindak daripada menunggu. Ketika melihat peluang, tantangan, atau pekerjaan yang harus diselesaikan, Anda biasanya lebih cepat mengambil inisiatif dibandingkan teman-teman seusia Anda. Anda tidak terlalu nyaman hanya menjadi penonton dan lebih senang terlibat langsung dalam kegiatan, baik di kelas, organisasi, ekstrakurikuler, maupun lingkungan pergaulan. Karakter ini membuat Anda dikenal sebagai pribadi yang aktif, energik, dan memiliki semangat tinggi untuk mencoba hal-hal baru. Anda juga tidak mudah menyerah ketika menghadapi hambatan karena lebih memilih mencari solusi daripada terus memikirkan masalah. Namun, semangat bertindak yang tinggi terkadang membuat Anda bergerak terlalu cepat tanpa mempertimbangkan seluruh informasi yang diperlukan. Dalam beberapa situasi, Anda dapat menjadi terburu-buru, kurang sabar menunggu orang lain, atau mengambil keputusan sebelum melakukan analisis yang cukup. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan keberanian bertindak dengan kemampuan berpikir matang sebelum mengambil keputusan penting.",

strengths:[

"Memiliki inisiatif yang tinggi",

"Berani mencoba pengalaman baru",

"Cepat mengambil tindakan ketika melihat peluang",

"Tidak mudah menunda pekerjaan",

"Berorientasi pada solusi",

"Mampu menjadi penggerak dalam kelompok"

],

challenges:[

"Kadang bertindak terlalu cepat",

"Kurang mempertimbangkan semua risiko",

"Mudah merasa tidak sabar",

"Cenderung mengambil keputusan secara impulsif",

"Kurang memberi kesempatan orang lain untuk menyampaikan pendapat"

],

career:[

"Berpotensi menjadi pemimpin organisasi sekolah",

"Cocok mengembangkan jiwa kewirausahaan muda",

"Memiliki potensi pada bidang olahraga dan kegiatan lapangan",

"Cocok pada bidang kepemimpinan dan manajemen",

"Berpotensi menjadi penggerak komunitas",

"Mudah berkembang dalam lingkungan yang dinamis"

],

communication:[

"Berbicara dengan penuh semangat",

"Mudah memotivasi teman untuk bertindak",

"Berorientasi pada solusi daripada masalah",

"Komunikatif dan energik",

"Perlu meningkatkan kemampuan mendengarkan sebelum mengambil keputusan"

],

leadership:[

"Berani mengambil inisiatif",

"Mampu menggerakkan kelompok menuju tujuan",

"Menjadi contoh dalam semangat bekerja",

"Cepat merespons tantangan",

"Perlu meningkatkan kemampuan mempertimbangkan berbagai sudut pandang"

],

relationship:[

"Aktif menjaga hubungan pertemanan",

"Sering menjadi penggagas kegiatan bersama",

"Mudah mengajak teman melakukan hal-hal positif",

"Memberikan energi positif kepada lingkungan",

"Perlu belajar menghargai ritme dan kesiapan setiap orang"

],

development:[

"Melatih kebiasaan berpikir sebelum bertindak",

"Meningkatkan kemampuan menganalisis risiko",

"Belajar lebih sabar mendengarkan pendapat orang lain",

"Menyeimbangkan kecepatan dengan ketelitian",

"Mengembangkan pengendalian diri dalam mengambil keputusan"

],

action30:[

"Berhenti sejenak selama beberapa menit sebelum mengambil keputusan penting",

"Mencatat keuntungan dan risiko dari setiap keputusan besar",

"Meminta pendapat guru atau teman sebelum memulai proyek penting",

"Melatih kesabaran dalam diskusi kelompok",

"Mengevaluasi hasil dari setiap keputusan yang telah diambil"

],

action90:[

"Membangun keseimbangan antara aksi dan perencanaan",

"Meningkatkan kualitas pengambilan keputusan",

"Mengembangkan kepemimpinan yang bijaksana",

"Menjadi pribadi yang cepat bertindak namun tetap penuh pertimbangan",

"Membangun karakter yang proaktif, bertanggung jawab, dan visioner"

]

},

Proactive:{

title:"Proactive",

summary:"Anda merupakan remaja yang cenderung lebih suka bertindak daripada menunggu. Ketika melihat peluang, tantangan, atau pekerjaan yang harus diselesaikan, Anda biasanya lebih cepat mengambil inisiatif dibandingkan teman-teman seusia Anda. Anda tidak terlalu nyaman hanya menjadi penonton dan lebih senang terlibat langsung dalam kegiatan, baik di kelas, organisasi, ekstrakurikuler, maupun lingkungan pergaulan. Karakter ini membuat Anda dikenal sebagai pribadi yang aktif, energik, dan memiliki semangat tinggi untuk mencoba hal-hal baru. Anda juga tidak mudah menyerah ketika menghadapi hambatan karena lebih memilih mencari solusi daripada terus memikirkan masalah. Namun, semangat bertindak yang tinggi terkadang membuat Anda bergerak terlalu cepat tanpa mempertimbangkan seluruh informasi yang diperlukan. Dalam beberapa situasi, Anda dapat menjadi terburu-buru, kurang sabar menunggu orang lain, atau mengambil keputusan sebelum melakukan analisis yang cukup. Anda akan berkembang lebih optimal apabila mampu menyeimbangkan keberanian bertindak dengan kemampuan berpikir matang sebelum mengambil keputusan penting.",

strengths:[

"Memiliki inisiatif yang tinggi",

"Berani mencoba pengalaman baru",

"Cepat mengambil tindakan ketika melihat peluang",

"Tidak mudah menunda pekerjaan",

"Berorientasi pada solusi",

"Mampu menjadi penggerak dalam kelompok"

],

challenges:[

"Kadang bertindak terlalu cepat",

"Kurang mempertimbangkan semua risiko",

"Mudah merasa tidak sabar",

"Cenderung mengambil keputusan secara impulsif",

"Kurang memberi kesempatan orang lain untuk menyampaikan pendapat"

],

career:[

"Berpotensi menjadi pemimpin organisasi sekolah",

"Cocok mengembangkan jiwa kewirausahaan muda",

"Memiliki potensi pada bidang olahraga dan kegiatan lapangan",

"Cocok pada bidang kepemimpinan dan manajemen",

"Berpotensi menjadi penggerak komunitas",

"Mudah berkembang dalam lingkungan yang dinamis"

],

communication:[

"Berbicara dengan penuh semangat",

"Mudah memotivasi teman untuk bertindak",

"Berorientasi pada solusi daripada masalah",

"Komunikatif dan energik",

"Perlu meningkatkan kemampuan mendengarkan sebelum mengambil keputusan"

],

leadership:[

"Berani mengambil inisiatif",

"Mampu menggerakkan kelompok menuju tujuan",

"Menjadi contoh dalam semangat bekerja",

"Cepat merespons tantangan",

"Perlu meningkatkan kemampuan mempertimbangkan berbagai sudut pandang"

],

relationship:[

"Aktif menjaga hubungan pertemanan",

"Sering menjadi penggagas kegiatan bersama",

"Mudah mengajak teman melakukan hal-hal positif",

"Memberikan energi positif kepada lingkungan",

"Perlu belajar menghargai ritme dan kesiapan setiap orang"

],

development:[

"Melatih kebiasaan berpikir sebelum bertindak",

"Meningkatkan kemampuan menganalisis risiko",

"Belajar lebih sabar mendengarkan pendapat orang lain",

"Menyeimbangkan kecepatan dengan ketelitian",

"Mengembangkan pengendalian diri dalam mengambil keputusan"

],

action30:[

"Berhenti sejenak selama beberapa menit sebelum mengambil keputusan penting",

"Mencatat keuntungan dan risiko dari setiap keputusan besar",

"Meminta pendapat guru atau teman sebelum memulai proyek penting",

"Melatih kesabaran dalam diskusi kelompok",

"Mengevaluasi hasil dari setiap keputusan yang telah diambil"

],

action90:[

"Membangun keseimbangan antara aksi dan perencanaan",

"Meningkatkan kualitas pengambilan keputusan",

"Mengembangkan kepemimpinan yang bijaksana",

"Menjadi pribadi yang cepat bertindak namun tetap penuh pertimbangan",

"Membangun karakter yang proaktif, bertanggung jawab, dan visioner"

]

},

General:{

title:"General",

summary:"Anda merupakan remaja yang cenderung lebih mudah memahami informasi apabila disampaikan secara ringkas, sederhana, dan langsung menuju inti pembahasan. Ketika belajar, Anda biasanya ingin mengetahui gambaran umum terlebih dahulu sebelum mendalami penjelasan yang lebih rinci. Anda lebih tertarik memahami konsep utama dibanding menghafalkan setiap detail kecil. Karakter ini membuat Anda mampu menangkap inti pelajaran dengan cepat serta melihat hubungan antara berbagai materi yang dipelajari. Dalam diskusi, Anda sering menjadi orang yang mampu menyederhanakan informasi yang rumit sehingga lebih mudah dipahami oleh teman-teman. Namun karena lebih fokus pada gambaran umum, terkadang Anda melewatkan rincian penting yang sebenarnya menentukan keberhasilan suatu tugas atau ujian. Anda juga dapat merasa bosan ketika harus membaca penjelasan yang terlalu panjang atau menghafalkan informasi yang sangat detail. Anda akan berkembang lebih optimal apabila mampu mempertahankan kemampuan melihat inti persoalan sekaligus melatih ketelitian terhadap informasi yang benar-benar penting.",

strengths:[

"Cepat memahami inti pelajaran",

"Mudah melihat hubungan antar konsep",

"Berpikir secara sederhana dan efisien",

"Mampu merangkum informasi dengan baik",

"Fokus pada tujuan utama",

"Mudah menjelaskan konsep kepada orang lain"

],

challenges:[

"Kadang melewatkan detail penting",

"Kurang teliti membaca instruksi",

"Mudah bosan dengan penjelasan yang terlalu panjang",

"Berpotensi melakukan kesalahan kecil karena kurang cermat",

"Kadang terlalu menyederhanakan suatu masalah"

],

career:[

"Berpotensi pada bidang kepemimpinan",

"Cocok mengembangkan kemampuan presentasi",

"Memiliki potensi dalam bidang pendidikan",

"Cocok pada bidang komunikasi",

"Berpotensi menjadi perencana atau koordinator",

"Mudah berkembang pada bidang yang membutuhkan pemikiran strategis"

],

communication:[

"Berbicara secara singkat dan langsung pada inti",

"Mudah menjelaskan konsep yang rumit dengan bahasa sederhana",

"Fokus pada informasi yang paling penting",

"Komunikasi efektif dan efisien",

"Perlu meningkatkan kemampuan menjelaskan rincian ketika diperlukan"

],

leadership:[

"Mampu mengarahkan kelompok menuju tujuan utama",

"Membantu tim tetap fokus pada prioritas",

"Tidak mudah terdistraksi oleh hal-hal kecil",

"Mampu menyusun strategi secara sederhana",

"Perlu memastikan setiap anggota memahami detail pelaksanaan"

],

relationship:[

"Lebih menghargai kualitas hubungan daripada hal-hal kecil",

"Tidak mudah mempermasalahkan kesalahan yang sepele",

"Mampu melihat tujuan besar dalam persahabatan",

"Menjadi teman yang praktis dan mudah diajak berdiskusi",

"Perlu lebih memperhatikan bentuk perhatian kecil yang berarti bagi orang lain"

],

development:[

"Melatih ketelitian terhadap detail penting",

"Membiasakan membaca instruksi sampai selesai",

"Mengecek kembali tugas sebelum dikumpulkan",

"Belajar membedakan detail yang penting dan yang kurang penting",

"Mengembangkan keseimbangan antara efisiensi dan ketelitian"

],

action30:[

"Membuat checklist sebelum mengumpulkan tugas",

"Membaca kembali instruksi guru sebelum mulai mengerjakan",

"Meminta teman memeriksa hasil pekerjaan sebelum dikumpulkan",

"Menuliskan poin-poin penting dari setiap materi pelajaran",

"Melakukan evaluasi terhadap kesalahan kecil yang masih sering terjadi"

],

action90:[

"Membangun kebiasaan belajar yang lebih teliti",

"Meningkatkan keseimbangan antara kecepatan dan ketelitian",

"Mengembangkan kemampuan memahami konsep sekaligus detail",

"Menjadi pribadi yang strategis namun tetap akurat",

"Meningkatkan kualitas hasil belajar secara konsisten"

]

},

General:{

title:"General",

summary:"Anda merupakan remaja yang cenderung lebih mudah memahami informasi apabila disampaikan secara ringkas, sederhana, dan langsung menuju inti pembahasan. Ketika belajar, Anda biasanya ingin mengetahui gambaran umum terlebih dahulu sebelum mendalami penjelasan yang lebih rinci. Anda lebih tertarik memahami konsep utama dibanding menghafalkan setiap detail kecil. Karakter ini membuat Anda mampu menangkap inti pelajaran dengan cepat serta melihat hubungan antara berbagai materi yang dipelajari. Dalam diskusi, Anda sering menjadi orang yang mampu menyederhanakan informasi yang rumit sehingga lebih mudah dipahami oleh teman-teman. Namun karena lebih fokus pada gambaran umum, terkadang Anda melewatkan rincian penting yang sebenarnya menentukan keberhasilan suatu tugas atau ujian. Anda juga dapat merasa bosan ketika harus membaca penjelasan yang terlalu panjang atau menghafalkan informasi yang sangat detail. Anda akan berkembang lebih optimal apabila mampu mempertahankan kemampuan melihat inti persoalan sekaligus melatih ketelitian terhadap informasi yang benar-benar penting.",

strengths:[

"Cepat memahami inti pelajaran",

"Mudah melihat hubungan antar konsep",

"Berpikir secara sederhana dan efisien",

"Mampu merangkum informasi dengan baik",

"Fokus pada tujuan utama",

"Mudah menjelaskan konsep kepada orang lain"

],

challenges:[

"Kadang melewatkan detail penting",

"Kurang teliti membaca instruksi",

"Mudah bosan dengan penjelasan yang terlalu panjang",

"Berpotensi melakukan kesalahan kecil karena kurang cermat",

"Kadang terlalu menyederhanakan suatu masalah"

],

career:[

"Berpotensi pada bidang kepemimpinan",

"Cocok mengembangkan kemampuan presentasi",

"Memiliki potensi dalam bidang pendidikan",

"Cocok pada bidang komunikasi",

"Berpotensi menjadi perencana atau koordinator",

"Mudah berkembang pada bidang yang membutuhkan pemikiran strategis"

],

communication:[

"Berbicara secara singkat dan langsung pada inti",

"Mudah menjelaskan konsep yang rumit dengan bahasa sederhana",

"Fokus pada informasi yang paling penting",

"Komunikasi efektif dan efisien",

"Perlu meningkatkan kemampuan menjelaskan rincian ketika diperlukan"

],

leadership:[

"Mampu mengarahkan kelompok menuju tujuan utama",

"Membantu tim tetap fokus pada prioritas",

"Tidak mudah terdistraksi oleh hal-hal kecil",

"Mampu menyusun strategi secara sederhana",

"Perlu memastikan setiap anggota memahami detail pelaksanaan"

],

relationship:[

"Lebih menghargai kualitas hubungan daripada hal-hal kecil",

"Tidak mudah mempermasalahkan kesalahan yang sepele",

"Mampu melihat tujuan besar dalam persahabatan",

"Menjadi teman yang praktis dan mudah diajak berdiskusi",

"Perlu lebih memperhatikan bentuk perhatian kecil yang berarti bagi orang lain"

],

development:[

"Melatih ketelitian terhadap detail penting",

"Membiasakan membaca instruksi sampai selesai",

"Mengecek kembali tugas sebelum dikumpulkan",

"Belajar membedakan detail yang penting dan yang kurang penting",

"Mengembangkan keseimbangan antara efisiensi dan ketelitian"

],

action30:[

"Membuat checklist sebelum mengumpulkan tugas",

"Membaca kembali instruksi guru sebelum mulai mengerjakan",

"Meminta teman memeriksa hasil pekerjaan sebelum dikumpulkan",

"Menuliskan poin-poin penting dari setiap materi pelajaran",

"Melakukan evaluasi terhadap kesalahan kecil yang masih sering terjadi"

],

action90:[

"Membangun kebiasaan belajar yang lebih teliti",

"Meningkatkan keseimbangan antara kecepatan dan ketelitian",

"Mengembangkan kemampuan memahami konsep sekaligus detail",

"Menjadi pribadi yang strategis namun tetap akurat",

"Meningkatkan kualitas hasil belajar secara konsisten"

]

},


Sameness:{

title:"Sameness",

summary:"Anda merupakan remaja yang cenderung merasa nyaman dengan hal-hal yang sudah dikenal, memiliki pola yang konsisten, dan berlangsung secara stabil. Dalam belajar maupun kehidupan sehari-hari, Anda biasanya lebih menyukai rutinitas yang jelas dibandingkan perubahan yang terlalu sering. Ketika menemukan cara belajar yang efektif, Anda cenderung mempertahankannya daripada mencoba metode baru setiap saat. Begitu pula dalam pergaulan, Anda merasa lebih nyaman bersama teman-teman yang sudah dikenal dan membangun hubungan yang berlangsung dalam jangka panjang. Karakter ini membuat Anda menjadi pribadi yang konsisten, dapat dipercaya, dan mampu menjaga komitmen terhadap tanggung jawab yang telah diberikan. Guru, orang tua, maupun teman biasanya melihat Anda sebagai seseorang yang stabil dan tidak mudah berubah hanya karena pengaruh lingkungan. Namun apabila kecenderungan ini terlalu dominan, Anda dapat merasa kurang nyaman menghadapi perubahan, enggan mencoba pengalaman baru, atau membutuhkan waktu lebih lama untuk beradaptasi dengan lingkungan yang berbeda. Anda akan berkembang lebih optimal apabila mampu mempertahankan konsistensi yang menjadi kekuatan Anda sambil membuka diri terhadap perubahan yang dapat memberikan pengalaman dan pembelajaran baru.",

strengths:[

"Memiliki konsistensi dalam belajar",

"Mudah membangun kebiasaan yang positif",

"Menjaga komitmen terhadap tanggung jawab",

"Dapat dipercaya oleh guru maupun teman",

"Setia dalam persahabatan",

"Stabil dalam mengambil keputusan"

],

challenges:[

"Kurang nyaman menghadapi perubahan",

"Membutuhkan waktu untuk beradaptasi",

"Cenderung mempertahankan cara lama",

"Kurang tertarik mencoba pengalaman baru",

"Kadang merasa khawatir ketika rutinitas berubah"

],

career:[

"Berpotensi pada bidang pendidikan",

"Cocok pada bidang administrasi",

"Memiliki potensi dalam bidang kesehatan",

"Cocok pada bidang teknik",

"Berpotensi dalam bidang pelayanan publik",

"Mudah berkembang pada lingkungan yang memiliki sistem yang jelas"

],

communication:[

"Berbicara dengan tenang dan konsisten",

"Mudah dipahami karena tidak berubah-ubah",

"Menjaga komitmen terhadap apa yang telah disampaikan",

"Membangun rasa percaya melalui konsistensi",

"Perlu lebih terbuka terhadap ide-ide baru"

],

leadership:[

"Mampu menjaga stabilitas kelompok",

"Konsisten dalam menjalankan aturan",

"Menjadi teladan dalam kedisiplinan",

"Membangun rasa percaya di dalam tim",

"Perlu meningkatkan kemampuan beradaptasi terhadap perubahan"

],

relationship:[

"Setia terhadap sahabat",

"Menghargai hubungan jangka panjang",

"Mudah dipercaya karena konsisten",

"Menjaga komitmen dalam pertemanan",

"Perlu membuka diri terhadap teman dan pengalaman baru"

],

development:[

"Belajar menerima perubahan sebagai bagian dari proses bertumbuh",

"Mencoba pengalaman baru secara bertahap",

"Meningkatkan fleksibilitas dalam berpikir",

"Membuka diri terhadap berbagai sudut pandang",

"Menjaga keseimbangan antara konsistensi dan kemampuan beradaptasi"

],

action30:[

"Mencoba satu aktivitas baru setiap minggu",

"Berkenalan dengan teman baru di sekolah atau organisasi",

"Menggunakan satu metode belajar baru",

"Mencatat pengalaman positif dari setiap perubahan",

"Melatih diri keluar dari zona nyaman dalam hal-hal kecil"

],

action90:[

"Membangun kemampuan beradaptasi tanpa kehilangan jati diri",

"Meningkatkan fleksibilitas menghadapi perubahan",

"Mengembangkan rasa percaya diri di lingkungan baru",

"Membangun keseimbangan antara stabilitas dan inovasi",

"Menjadi pribadi yang konsisten sekaligus terbuka terhadap perkembangan"

]

},

Difference:{

title:"Difference",

summary:"Anda merupakan remaja yang cenderung mudah tertarik pada hal-hal baru, pengalaman yang berbeda, serta tantangan yang memberikan variasi dalam kehidupan sehari-hari. Anda biasanya cepat merasa bosan apabila harus melakukan aktivitas yang sama secara berulang dalam waktu yang lama. Sebaliknya, Anda akan merasa lebih bersemangat ketika memiliki kesempatan mencoba cara belajar baru, mengikuti kegiatan yang berbeda, mengenal teman baru, atau mengeksplorasi berbagai minat dan bakat. Karakter ini membuat Anda menjadi pribadi yang kreatif, fleksibel, dan mudah beradaptasi terhadap perubahan lingkungan. Anda tidak takut keluar dari zona nyaman apabila melihat adanya peluang untuk berkembang. Dalam organisasi maupun kegiatan sekolah, Anda sering menjadi orang yang membawa ide-ide segar dan cara berpikir yang inovatif. Namun, apabila kecenderungan ini terlalu dominan, Anda dapat menjadi kurang konsisten, mudah berpindah minat, atau sulit mempertahankan komitmen dalam jangka panjang. Anda akan berkembang lebih optimal apabila mampu menggabungkan semangat mencoba hal baru dengan kemampuan menjaga komitmen terhadap tujuan yang telah ditetapkan.",

strengths:[

"Mudah beradaptasi dengan lingkungan baru",

"Memiliki rasa ingin tahu yang tinggi",

"Kreatif dalam menemukan ide-ide baru",

"Senang mempelajari hal-hal yang berbeda",

"Berani keluar dari zona nyaman",

"Mudah melihat peluang untuk berkembang"

],

challenges:[

"Mudah merasa bosan terhadap rutinitas",

"Sering berpindah minat sebelum tuntas",

"Kurang konsisten dalam menjalankan rencana",

"Cenderung mencari variasi secara terus-menerus",

"Kadang sulit mempertahankan komitmen jangka panjang"

],

career:[

"Berpotensi pada bidang kreatif",

"Cocok mengembangkan kemampuan di bidang media digital",

"Memiliki potensi dalam dunia teknologi dan inovasi",

"Cocok pada bidang desain dan komunikasi visual",

"Berpotensi menjadi entrepreneur muda",

"Mudah berkembang dalam lingkungan yang dinamis"

],

communication:[

"Antusias ketika membahas ide-ide baru",

"Mudah memulai percakapan dengan orang baru",

"Membawa energi positif dalam diskusi",

"Terbuka terhadap berbagai sudut pandang",

"Perlu meningkatkan konsistensi dalam menyampaikan komitmen"

],

leadership:[

"Mendorong tim untuk terus berinovasi",

"Membawa semangat perubahan yang positif",

"Mudah menemukan alternatif solusi",

"Berani mencoba pendekatan yang berbeda",

"Perlu menjaga konsistensi hingga program selesai"

],

relationship:[

"Mudah menjalin pertemanan baru",

"Terbuka terhadap berbagai karakter teman",

"Senang berbagi pengalaman baru bersama sahabat",

"Membawa semangat dan keceriaan dalam kelompok",

"Perlu menjaga komitmen agar hubungan tetap kuat dan bertahan lama"

],

development:[

"Melatih konsistensi dalam menyelesaikan tanggung jawab",

"Belajar mempertahankan komitmen meskipun mulai merasa bosan",

"Mengembangkan disiplin terhadap target yang telah dibuat",

"Menentukan prioritas sebelum mencoba hal baru",

"Menyeimbangkan eksplorasi dengan tanggung jawab"

],

action30:[

"Menyelesaikan satu proyek atau target hingga selesai sebelum memulai yang baru",

"Membuat daftar prioritas mingguan",

"Mengurangi distraksi yang tidak mendukung tujuan utama",

"Menentukan satu kebiasaan positif yang dijalankan setiap hari",

"Melakukan evaluasi terhadap komitmen yang telah dibuat"

],

action90:[

"Membangun keseimbangan antara kreativitas dan konsistensi",

"Meningkatkan disiplin dalam mencapai tujuan",

"Mengembangkan kemampuan menyelesaikan setiap tanggung jawab hingga tuntas",

"Menjadi pribadi yang inovatif sekaligus dapat diandalkan",

"Membangun karakter yang adaptif, kreatif, dan bertanggung jawab"

]

},


Difference:{

title:"Difference",

summary:"Anda merupakan remaja yang cenderung mudah tertarik pada hal-hal baru, pengalaman yang berbeda, serta tantangan yang memberikan variasi dalam kehidupan sehari-hari. Anda biasanya cepat merasa bosan apabila harus melakukan aktivitas yang sama secara berulang dalam waktu yang lama. Sebaliknya, Anda akan merasa lebih bersemangat ketika memiliki kesempatan mencoba cara belajar baru, mengikuti kegiatan yang berbeda, mengenal teman baru, atau mengeksplorasi berbagai minat dan bakat. Karakter ini membuat Anda menjadi pribadi yang kreatif, fleksibel, dan mudah beradaptasi terhadap perubahan lingkungan. Anda tidak takut keluar dari zona nyaman apabila melihat adanya peluang untuk berkembang. Dalam organisasi maupun kegiatan sekolah, Anda sering menjadi orang yang membawa ide-ide segar dan cara berpikir yang inovatif. Namun, apabila kecenderungan ini terlalu dominan, Anda dapat menjadi kurang konsisten, mudah berpindah minat, atau sulit mempertahankan komitmen dalam jangka panjang. Anda akan berkembang lebih optimal apabila mampu menggabungkan semangat mencoba hal baru dengan kemampuan menjaga komitmen terhadap tujuan yang telah ditetapkan.",

strengths:[

"Mudah beradaptasi dengan lingkungan baru",

"Memiliki rasa ingin tahu yang tinggi",

"Kreatif dalam menemukan ide-ide baru",

"Senang mempelajari hal-hal yang berbeda",

"Berani keluar dari zona nyaman",

"Mudah melihat peluang untuk berkembang"

],

challenges:[

"Mudah merasa bosan terhadap rutinitas",

"Sering berpindah minat sebelum tuntas",

"Kurang konsisten dalam menjalankan rencana",

"Cenderung mencari variasi secara terus-menerus",

"Kadang sulit mempertahankan komitmen jangka panjang"

],

career:[

"Berpotensi pada bidang kreatif",

"Cocok mengembangkan kemampuan di bidang media digital",

"Memiliki potensi dalam dunia teknologi dan inovasi",

"Cocok pada bidang desain dan komunikasi visual",

"Berpotensi menjadi entrepreneur muda",

"Mudah berkembang dalam lingkungan yang dinamis"

],

communication:[

"Antusias ketika membahas ide-ide baru",

"Mudah memulai percakapan dengan orang baru",

"Membawa energi positif dalam diskusi",

"Terbuka terhadap berbagai sudut pandang",

"Perlu meningkatkan konsistensi dalam menyampaikan komitmen"

],

leadership:[

"Mendorong tim untuk terus berinovasi",

"Membawa semangat perubahan yang positif",

"Mudah menemukan alternatif solusi",

"Berani mencoba pendekatan yang berbeda",

"Perlu menjaga konsistensi hingga program selesai"

],

relationship:[

"Mudah menjalin pertemanan baru",

"Terbuka terhadap berbagai karakter teman",

"Senang berbagi pengalaman baru bersama sahabat",

"Membawa semangat dan keceriaan dalam kelompok",

"Perlu menjaga komitmen agar hubungan tetap kuat dan bertahan lama"

],

development:[

"Melatih konsistensi dalam menyelesaikan tanggung jawab",

"Belajar mempertahankan komitmen meskipun mulai merasa bosan",

"Mengembangkan disiplin terhadap target yang telah dibuat",

"Menentukan prioritas sebelum mencoba hal baru",

"Menyeimbangkan eksplorasi dengan tanggung jawab"

],

action30:[

"Menyelesaikan satu proyek atau target hingga selesai sebelum memulai yang baru",

"Membuat daftar prioritas mingguan",

"Mengurangi distraksi yang tidak mendukung tujuan utama",

"Menentukan satu kebiasaan positif yang dijalankan setiap hari",

"Melakukan evaluasi terhadap komitmen yang telah dibuat"

],

action90:[

"Membangun keseimbangan antara kreativitas dan konsistensi",

"Meningkatkan disiplin dalam mencapai tujuan",

"Mengembangkan kemampuan menyelesaikan setiap tanggung jawab hingga tuntas",

"Menjadi pribadi yang inovatif sekaligus dapat diandalkan",

"Membangun karakter yang adaptif, kreatif, dan bertanggung jawab"

]

},


Present:{

title:"Present",

summary:"Anda merupakan remaja yang lebih berfokus pada apa yang sedang terjadi saat ini dibandingkan terlalu memikirkan masa lalu atau masa depan. Anda cenderung menikmati setiap pengalaman yang sedang dijalani dan mampu menyesuaikan diri dengan situasi yang ada. Dalam proses belajar, Anda lebih mudah memahami materi ketika langsung dipraktikkan daripada hanya membayangkan hasil akhirnya. Anda juga senang terlibat dalam aktivitas, diskusi, maupun pengalaman baru yang dapat dirasakan secara langsung. Karakter ini membuat Anda menjadi pribadi yang fleksibel, responsif, dan mampu menghadapi perubahan dengan lebih tenang. Ketika muncul tantangan, Anda lebih memilih mencari solusi yang dapat dilakukan sekarang daripada terlalu lama memikirkan penyebab ataupun konsekuensi yang masih jauh. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi kurang memperhatikan perencanaan jangka panjang, mudah terdistraksi oleh hal-hal yang menyenangkan saat ini, atau kurang mempersiapkan diri untuk tujuan yang lebih besar. Anda akan berkembang lebih optimal apabila mampu menikmati proses yang sedang dijalani sambil tetap memiliki arah dan tujuan yang jelas untuk masa depan.",

strengths:[

"Mudah menikmati proses belajar",

"Fleksibel menghadapi perubahan",

"Responsif terhadap situasi yang sedang terjadi",

"Mudah beradaptasi dengan lingkungan baru",

"Fokus menyelesaikan tugas yang sedang dikerjakan",

"Mampu menikmati setiap pengalaman secara utuh"

],

challenges:[

"Kurang memikirkan tujuan jangka panjang",

"Mudah terdistraksi oleh hal-hal yang menyenangkan saat ini",

"Kadang menunda persiapan untuk masa depan",

"Cenderung mengambil keputusan berdasarkan kondisi saat ini",

"Kurang membuat perencanaan yang matang"

],

career:[

"Berpotensi pada bidang olahraga",

"Cocok pada bidang seni pertunjukan",

"Memiliki potensi dalam bidang hospitality",

"Cocok pada bidang event dan organisasi",

"Berpotensi pada bidang pelayanan",

"Mudah berkembang dalam pekerjaan yang dinamis"

],

communication:[

"Mudah membangun percakapan yang hangat",

"Fokus mendengarkan lawan bicara",

"Responsif terhadap situasi",

"Mudah mencairkan suasana",

"Perlu meningkatkan kebiasaan menghubungkan pembicaraan dengan tujuan jangka panjang"

],

leadership:[

"Cepat merespons kebutuhan kelompok",

"Mampu mengambil tindakan sesuai kondisi lapangan",

"Fleksibel menghadapi perubahan",

"Mudah menjaga semangat tim",

"Perlu meningkatkan kemampuan membuat perencanaan jangka panjang"

],

relationship:[

"Mudah menikmati waktu bersama teman",

"Hadir sepenuhnya ketika berinteraksi",

"Membangun hubungan melalui pengalaman bersama",

"Mudah beradaptasi dengan lingkungan sosial",

"Perlu menjaga komitmen terhadap tujuan hubungan jangka panjang"

],

development:[

"Belajar membuat target jangka menengah dan jangka panjang",

"Meningkatkan kemampuan merencanakan masa depan",

"Menyeimbangkan kesenangan saat ini dengan tanggung jawab",

"Mengembangkan disiplin terhadap tujuan yang telah dibuat",

"Melatih konsistensi dalam mencapai cita-cita"

],

action30:[

"Membuat target belajar untuk satu bulan ke depan",

"Menyusun jadwal kegiatan mingguan",

"Menentukan prioritas harian sebelum memulai aktivitas",

"Melakukan evaluasi pencapaian setiap akhir minggu",

"Menyeimbangkan waktu belajar, istirahat, dan hobi"

],

action90:[

"Membangun kebiasaan merencanakan masa depan",

"Meningkatkan disiplin terhadap target yang telah dibuat",

"Mengembangkan keseimbangan antara menikmati proses dan mencapai tujuan",

"Menjadi pribadi yang adaptif sekaligus visioner",

"Membangun karakter yang bertanggung jawab terhadap masa depan"

]

},

Future:{

title:"Future",

summary:"Anda merupakan remaja yang cenderung lebih sering memikirkan masa depan, tujuan hidup, dan berbagai kemungkinan yang ingin dicapai. Ketika mengambil keputusan, Anda biasanya mempertimbangkan bagaimana pilihan tersebut akan memengaruhi kehidupan beberapa bulan atau bahkan beberapa tahun ke depan. Dalam belajar, Anda lebih termotivasi apabila memahami bahwa apa yang dipelajari hari ini akan membantu mencapai cita-cita di masa depan. Anda senang membuat target, menyusun rencana, serta membayangkan kehidupan yang ingin diwujudkan. Karakter ini membuat Anda memiliki orientasi yang jelas dalam mengembangkan kemampuan, memilih kegiatan, maupun menentukan prioritas. Anda cenderung mampu menunda kesenangan sesaat demi memperoleh hasil yang lebih besar di kemudian hari. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi terlalu sibuk memikirkan masa depan sehingga kurang menikmati proses yang sedang dijalani. Anda juga mungkin merasa cemas apabila rencana tidak berjalan sesuai harapan. Anda akan berkembang lebih optimal apabila mampu memadukan visi jangka panjang dengan kemampuan menikmati proses belajar, bertumbuh, dan menghargai setiap langkah kecil yang dilakukan hari ini.",

strengths:[

"Memiliki cita-cita dan tujuan yang jelas",

"Mampu merencanakan langkah-langkah menuju masa depan",

"Termotivasi oleh impian yang ingin dicapai",

"Disiplin mempersiapkan diri untuk tujuan jangka panjang",

"Mampu menentukan prioritas berdasarkan manfaat jangka panjang",

"Berorientasi pada pengembangan diri secara berkelanjutan"

],

challenges:[

"Terkadang terlalu memikirkan masa depan",

"Mudah merasa cemas apabila rencana berubah",

"Kurang menikmati proses yang sedang dijalani",

"Berpotensi merasa kecewa ketika hasil belum sesuai harapan",

"Kadang menunda menikmati pencapaian kecil karena terlalu fokus pada target berikutnya"

],

career:[

"Berpotensi menjadi pemimpin masa depan",

"Cocok mengembangkan kemampuan perencanaan strategis",

"Memiliki potensi dalam bidang bisnis dan kewirausahaan",

"Cocok pada bidang teknologi dan inovasi",

"Berpotensi dalam bidang pendidikan dan penelitian",

"Mudah berkembang pada profesi yang membutuhkan visi jangka panjang"

],

communication:[

"Sering membahas cita-cita dan tujuan hidup",

"Mampu memotivasi teman untuk mempersiapkan masa depan",

"Berbicara dengan orientasi solusi jangka panjang",

"Mudah menghubungkan aktivitas hari ini dengan manfaat di masa depan",

"Perlu belajar menikmati percakapan tanpa selalu membahas target atau rencana"

],

leadership:[

"Mampu membangun visi bersama",

"Merencanakan kegiatan dengan baik",

"Mengajak kelompok memiliki tujuan yang jelas",

"Mendorong anggota tim untuk terus berkembang",

"Perlu menjaga keseimbangan antara perencanaan dan pelaksanaan"

],

relationship:[

"Memilih persahabatan yang mendukung pertumbuhan",

"Senang berteman dengan orang yang memiliki tujuan positif",

"Berusaha membangun hubungan yang sehat dan bertahan lama",

"Memberikan dukungan agar teman berkembang bersama",

"Perlu menikmati momen kebersamaan tanpa selalu membahas masa depan"

],

development:[

"Belajar menikmati proses belajar dan bertumbuh",

"Mengurangi kecemasan terhadap hal-hal yang belum terjadi",

"Menjaga keseimbangan antara target dan kesehatan mental",

"Melatih fleksibilitas ketika rencana berubah",

"Membangun keyakinan bahwa setiap langkah kecil memiliki nilai"

],

action30:[

"Menyusun target belajar dan pengembangan diri selama tiga bulan",

"Membuat langkah-langkah kecil menuju cita-cita",

"Menuliskan satu keberhasilan setiap hari sebagai bentuk apresiasi terhadap proses",

"Menyusun jadwal belajar yang realistis",

"Melakukan evaluasi mingguan terhadap kemajuan yang telah dicapai"

],

action90:[

"Membangun kebiasaan merencanakan sekaligus mengeksekusi target",

"Meningkatkan disiplin dalam mencapai tujuan jangka panjang",

"Mengembangkan keseimbangan antara visi dan tindakan nyata",

"Menjadi pribadi yang optimis, terarah, dan konsisten",

"Membangun fondasi yang kuat untuk pendidikan, karier, dan kehidupan di masa depan"

]

},

Independent:{

title:"Independent",

summary:"Anda merupakan remaja yang cenderung merasa nyaman ketika memiliki kesempatan untuk berpikir, belajar, dan mengambil keputusan secara mandiri. Anda senang diberi kepercayaan untuk menyelesaikan tugas dengan cara Anda sendiri tanpa terlalu banyak bergantung pada arahan orang lain. Dalam proses belajar, Anda biasanya memiliki inisiatif mencari informasi, mempelajari materi tambahan, atau menemukan solusi secara mandiri sebelum meminta bantuan. Karakter ini membuat Anda berkembang menjadi pribadi yang percaya diri, bertanggung jawab, dan mampu menghadapi tantangan dengan kemampuan sendiri. Anda juga memiliki dorongan untuk membuktikan bahwa Anda mampu mencapai sesuatu melalui usaha pribadi. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi kurang terbuka terhadap bantuan, masukan, maupun kerja sama dengan orang lain. Anda mungkin merasa harus menyelesaikan semuanya sendiri sehingga terkadang menjadi lebih lelah atau kehilangan kesempatan belajar dari pengalaman orang lain. Anda akan berkembang lebih optimal apabila mampu mempertahankan kemandirian sekaligus menyadari bahwa bekerja sama dan meminta bantuan pada saat yang tepat merupakan bagian dari proses menjadi pribadi yang lebih matang.",

strengths:[

"Memiliki inisiatif belajar yang tinggi",

"Percaya terhadap kemampuan diri sendiri",

"Mampu mengambil keputusan secara mandiri",

"Bertanggung jawab terhadap tugas yang diberikan",

"Tidak mudah bergantung kepada orang lain",

"Memiliki motivasi untuk terus berkembang"

],

challenges:[

"Kadang enggan meminta bantuan",

"Cenderung ingin mengerjakan semuanya sendiri",

"Kurang memanfaatkan kerja sama dalam kelompok",

"Berpotensi terlihat tertutup terhadap masukan",

"Mudah merasa terbebani karena memikul terlalu banyak tanggung jawab sendiri"

],

career:[

"Berpotensi menjadi wirausaha muda",

"Cocok mengembangkan proyek atau karya mandiri",

"Memiliki potensi pada bidang teknologi dan inovasi",

"Cocok menjadi peneliti atau pengembang",

"Berpotensi pada bidang kepemimpinan",

"Mudah berkembang dalam profesi yang membutuhkan kemandirian tinggi"

],

communication:[

"Menyampaikan pendapat dengan percaya diri",

"Berani mempertahankan ide yang diyakini",

"Mudah berbicara secara langsung dan jelas",

"Mandiri dalam menyampaikan solusi",

"Perlu meningkatkan kebiasaan meminta masukan sebelum mengambil keputusan besar"

],

leadership:[

"Mampu menjadi teladan melalui tindakan",

"Berani mengambil tanggung jawab",

"Memiliki kepercayaan diri dalam memimpin",

"Menjadi pribadi yang dapat diandalkan",

"Perlu lebih banyak melibatkan anggota tim dalam proses pengambilan keputusan"

],

relationship:[

"Memiliki identitas diri yang kuat",

"Tidak mudah terpengaruh tekanan teman sebaya",

"Menghargai ruang pribadi diri sendiri maupun orang lain",

"Mampu menjaga prinsip dalam pergaulan",

"Perlu lebih terbuka menerima bantuan dan dukungan dari teman"

],

development:[

"Belajar meminta bantuan ketika diperlukan",

"Meningkatkan kemampuan bekerja sama",

"Membuka diri terhadap masukan yang membangun",

"Menyadari bahwa kolaborasi dapat menghasilkan hasil yang lebih baik",

"Menjaga keseimbangan antara kemandirian dan kerja sama"

],

action30:[

"Meminta pendapat guru atau teman terhadap satu tugas yang sedang dikerjakan",

"Bekerja sama secara aktif dalam satu proyek kelompok",

"Berlatih menerima kritik tanpa merasa disalahkan",

"Mencatat manfaat yang diperoleh dari kerja sama",

"Belajar mendelegasikan tugas ketika memimpin kelompok"

],

action90:[

"Membangun keseimbangan antara kemandirian dan kolaborasi",

"Meningkatkan kemampuan memimpin sekaligus bekerja sama",

"Mengembangkan rasa percaya diri yang tetap terbuka terhadap pembelajaran",

"Menjadi pribadi yang mandiri namun tidak menutup diri",

"Membangun karakter yang percaya diri, bertanggung jawab, dan kolaboratif"

]

},


Cooperative:{

title:"Cooperative",

summary:"Anda merupakan remaja yang cenderung merasa lebih nyaman ketika dapat belajar, berdiskusi, dan bekerja bersama orang lain. Anda menikmati proses bertukar ide, saling membantu, serta membangun keberhasilan melalui kerja sama. Dalam kegiatan sekolah, organisasi, maupun ekstrakurikuler, Anda biasanya lebih bersemangat ketika menjadi bagian dari sebuah tim dibandingkan harus mengerjakan semuanya sendirian. Karakter ini membuat Anda mudah membangun hubungan yang positif, menghargai pendapat orang lain, dan mampu menciptakan suasana kerja sama yang menyenangkan. Anda juga memiliki kemampuan untuk menyatukan berbagai karakter sehingga kelompok dapat bekerja lebih harmonis. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi terlalu bergantung pada dukungan kelompok, merasa kurang percaya diri ketika harus mengambil keputusan sendiri, atau sulit bergerak apabila tidak ada teman yang menemani. Anda akan berkembang lebih optimal apabila mampu mempertahankan semangat kolaborasi sekaligus membangun keberanian untuk bertindak secara mandiri ketika situasi mengharuskannya.",

strengths:[

"Mudah bekerja sama dengan berbagai karakter teman",

"Menghargai pendapat orang lain",

"Memiliki kemampuan komunikasi yang baik",

"Mudah membangun kekompakan dalam kelompok",

"Senang membantu dan saling mendukung",

"Mampu menciptakan suasana kerja sama yang positif"

],

challenges:[

"Kadang terlalu bergantung pada kelompok",

"Kurang percaya diri ketika harus bekerja sendiri",

"Sulit mengambil keputusan tanpa berdiskusi",

"Berusaha menyenangkan semua orang sehingga sulit bersikap tegas",

"Kurang nyaman ketika harus menghadapi konflik"

],

career:[

"Berpotensi pada bidang pendidikan",

"Cocok mengembangkan kemampuan kepemimpinan tim",

"Memiliki potensi dalam bidang psikologi dan konseling",

"Cocok pada bidang komunikasi",

"Berpotensi dalam manajemen organisasi",

"Mudah berkembang pada profesi yang membutuhkan kolaborasi"

],

communication:[

"Mudah mengajak orang lain berdiskusi",

"Menjadi pendengar yang baik",

"Menghargai setiap pendapat yang disampaikan",

"Mampu membangun komunikasi yang hangat",

"Perlu meningkatkan keberanian menyampaikan keputusan pribadi"

],

leadership:[

"Membangun kerja sama yang solid",

"Mendorong partisipasi seluruh anggota kelompok",

"Menciptakan suasana yang saling mendukung",

"Mampu menjadi penghubung antar anggota tim",

"Perlu meningkatkan ketegasan ketika mengambil keputusan"

],

relationship:[

"Mudah menjalin persahabatan",

"Senang berbagi pengalaman dengan teman",

"Membangun hubungan yang saling mendukung",

"Menghargai kebersamaan dan kerja sama",

"Perlu menjaga keseimbangan antara kepentingan kelompok dan kebutuhan pribadi"

],

development:[

"Melatih keberanian mengambil keputusan sendiri",

"Meningkatkan rasa percaya diri saat bekerja secara mandiri",

"Belajar mengatakan pendapat yang berbeda dengan cara yang sopan",

"Mengembangkan keseimbangan antara kerja sama dan kemandirian",

"Menjadi pribadi yang suportif sekaligus memiliki pendirian yang kuat"

],

action30:[

"Mengambil satu keputusan sederhana tanpa bergantung pada pendapat teman",

"Mengerjakan satu tugas secara mandiri hingga selesai",

"Menyampaikan pendapat pribadi dalam diskusi kelompok",

"Melatih mengatakan 'tidak' dengan sopan apabila diperlukan",

"Melakukan refleksi mengenai kontribusi pribadi dalam kerja sama tim"

],

action90:[

"Membangun keseimbangan antara kolaborasi dan kemandirian",

"Meningkatkan rasa percaya diri dalam mengambil keputusan",

"Mengembangkan kemampuan memimpin sekaligus bekerja sama",

"Menjadi pribadi yang mudah berkolaborasi namun tetap memiliki pendirian",

"Membangun karakter yang komunikatif, bertanggung jawab, dan mampu bertumbuh bersama orang lain"

]

},


People:{

title:"People",

summary:"Anda merupakan remaja yang secara alami lebih berfokus pada manusia dibandingkan tugas atau hasil pekerjaan. Bagi Anda, hubungan yang baik, kerja sama, dan kenyamanan orang lain sering kali menjadi prioritas utama. Dalam lingkungan sekolah, Anda biasanya senang berinteraksi dengan teman, berdiskusi, membantu orang lain, atau terlibat dalam kegiatan yang memungkinkan Anda membangun hubungan yang positif. Anda lebih mudah termotivasi ketika belajar atau bekerja bersama orang-orang yang membuat Anda merasa dihargai dan diterima. Karakter ini membuat Anda memiliki empati yang tinggi, mudah membangun kepercayaan, dan mampu menciptakan suasana yang hangat di dalam kelompok. Teman-teman sering merasa nyaman berbicara dengan Anda karena Anda mampu mendengarkan tanpa mudah menghakimi. Namun apabila kecenderungan ini terlalu dominan, Anda dapat lebih mementingkan hubungan dibanding penyelesaian tugas. Anda mungkin merasa tidak enak menegur teman yang tidak bertanggung jawab atau mengorbankan target pribadi demi menjaga perasaan orang lain. Anda akan berkembang lebih optimal apabila mampu menjaga hubungan yang hangat sekaligus tetap bertanggung jawab terhadap tujuan dan komitmen yang telah dibuat.",

strengths:[

"Memiliki empati yang tinggi",

"Mudah membangun persahabatan",

"Senang membantu orang lain berkembang",

"Mampu menciptakan suasana yang nyaman",

"Komunikatif dan mudah bergaul",

"Mudah mendapatkan kepercayaan dari teman"

],

challenges:[

"Terlalu memikirkan perasaan orang lain",

"Sulit bersikap tegas ketika diperlukan",

"Kadang mengabaikan target demi menjaga hubungan",

"Mudah merasa bersalah ketika mengecewakan orang lain",

"Berpotensi dimanfaatkan karena terlalu baik"

],

career:[

"Berpotensi pada bidang pendidikan",

"Cocok menjadi konselor sebaya",

"Memiliki potensi pada bidang psikologi",

"Cocok pada bidang komunikasi",

"Berpotensi dalam bidang pelayanan masyarakat",

"Mudah berkembang pada profesi yang berorientasi pada hubungan antar manusia"

],

communication:[

"Hangat dan mudah didekati",

"Mampu menjadi pendengar yang baik",

"Mudah membangun percakapan yang positif",

"Senang memberikan dukungan dan motivasi",

"Perlu meningkatkan ketegasan ketika menghadapi situasi yang sulit"

],

leadership:[

"Membangun hubungan yang harmonis dalam tim",

"Peduli terhadap perkembangan setiap anggota",

"Menciptakan lingkungan yang aman dan suportif",

"Meningkatkan semangat kebersamaan",

"Perlu lebih berani mengambil keputusan yang mungkin tidak disukai semua orang"

],

relationship:[

"Setia terhadap persahabatan",

"Mudah membangun hubungan yang akrab",

"Peduli terhadap kebutuhan teman",

"Menjadi tempat bercerita yang dipercaya",

"Perlu menjaga batasan yang sehat agar tidak mengorbankan diri sendiri"

],

development:[

"Belajar menyeimbangkan empati dengan ketegasan",

"Meningkatkan kemampuan mengatakan 'tidak' secara sopan",

"Menjaga komitmen terhadap target pribadi",

"Membangun batasan yang sehat dalam hubungan",

"Mengembangkan kepemimpinan yang peduli sekaligus objektif"

],

action30:[

"Melatih komunikasi asertif dalam situasi sederhana",

"Menolak satu permintaan yang tidak sesuai prioritas dengan cara yang sopan",

"Menyelesaikan tanggung jawab pribadi sebelum membantu orang lain",

"Mencatat tiga keberhasilan dalam menjaga keseimbangan antara hubungan dan tugas",

"Melakukan refleksi mengenai batasan pribadi yang sehat"

],

action90:[

"Membangun keseimbangan antara empati dan tanggung jawab",

"Meningkatkan kemampuan memimpin dengan hati sekaligus ketegasan",

"Mengembangkan hubungan sosial yang sehat dan saling menghargai",

"Menjadi pribadi yang peduli tanpa kehilangan jati diri",

"Membangun karakter yang hangat, bijaksana, dan bertanggung jawab"

]

},


Task:{

title:"Task",

summary:"Anda merupakan remaja yang cenderung lebih berfokus pada penyelesaian tugas, pencapaian target, dan hasil yang ingin diraih. Ketika diberikan tanggung jawab, perhatian Anda biasanya tertuju pada bagaimana pekerjaan tersebut dapat diselesaikan dengan baik, tepat waktu, dan sesuai tujuan. Dalam kegiatan belajar, organisasi, maupun proyek sekolah, Anda lebih mudah termotivasi apabila memiliki target yang jelas dan ukuran keberhasilan yang dapat dilihat. Anda senang bekerja secara efektif, mengatur prioritas, serta memastikan setiap tanggung jawab dapat diselesaikan dengan baik. Karakter ini membuat Anda dikenal sebagai pribadi yang disiplin, bertanggung jawab, dan dapat diandalkan ketika diberi amanah. Guru maupun teman sering mempercayai Anda untuk menangani tugas yang membutuhkan komitmen tinggi karena Anda berusaha memberikan hasil terbaik. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi terlalu fokus pada hasil sehingga kurang memperhatikan perasaan atau kebutuhan orang lain. Anda mungkin merasa kurang sabar ketika bekerja dengan teman yang ritmenya lebih lambat atau lebih mengutamakan hubungan daripada target. Anda akan berkembang lebih optimal apabila mampu menjaga keseimbangan antara produktivitas, empati, dan kemampuan bekerja sama sehingga keberhasilan yang dicapai tidak hanya menghasilkan prestasi, tetapi juga hubungan yang sehat.",

strengths:[

"Memiliki tanggung jawab yang tinggi",

"Berorientasi pada penyelesaian tugas",

"Disiplin terhadap target yang telah ditetapkan",

"Mampu mengatur prioritas dengan baik",

"Dapat diandalkan dalam menyelesaikan amanah",

"Memiliki motivasi kuat untuk mencapai hasil terbaik"

],

challenges:[

"Kadang terlalu fokus pada hasil",

"Kurang sabar terhadap teman yang bekerja lebih lambat",

"Cenderung mengabaikan kebutuhan emosional orang lain",

"Berpotensi mengalami kelelahan karena terlalu mengejar target",

"Kadang sulit menikmati proses karena terlalu fokus pada pencapaian"

],

career:[

"Berpotensi pada bidang teknik",

"Cocok pada bidang sains dan teknologi",

"Memiliki potensi pada bidang manajemen proyek",

"Cocok mengembangkan kemampuan kewirausahaan",

"Berpotensi dalam bidang operasional dan manajemen",

"Mudah berkembang pada profesi yang membutuhkan disiplin dan tanggung jawab tinggi"

],

communication:[

"Berbicara langsung pada inti pembahasan",

"Berorientasi pada solusi",

"Menyampaikan arahan dengan jelas",

"Fokus pada tindakan yang perlu dilakukan",

"Perlu meningkatkan perhatian terhadap perasaan lawan bicara"

],

leadership:[

"Mampu menjaga tim tetap fokus pada tujuan",

"Disiplin dalam mengelola waktu dan pekerjaan",

"Menjadi teladan dalam tanggung jawab",

"Mendorong anggota tim menyelesaikan tugas dengan baik",

"Perlu meningkatkan kemampuan memberikan apresiasi dan dukungan emosional"

],

relationship:[

"Dapat dipercaya karena menepati janji",

"Menunjukkan kepedulian melalui tindakan nyata",

"Bertanggung jawab dalam menjaga komitmen",

"Memberikan contoh melalui kedisiplinan",

"Perlu lebih meluangkan waktu untuk membangun kedekatan emosional dengan teman"

],

development:[

"Melatih empati dalam bekerja sama",

"Belajar menikmati proses selain mengejar hasil",

"Meningkatkan kemampuan memberikan apresiasi kepada orang lain",

"Menyeimbangkan produktivitas dengan hubungan sosial",

"Mengembangkan kepemimpinan yang berorientasi pada hasil sekaligus peduli terhadap manusia"

],

action30:[

"Memberikan apresiasi kepada anggota kelompok setelah menyelesaikan tugas bersama",

"Menyediakan waktu untuk mendengarkan pendapat teman sebelum mengambil keputusan",

"Menyeimbangkan jadwal belajar dengan waktu beristirahat",

"Mengevaluasi proses, bukan hanya hasil akhir",

"Membangun kebiasaan mengucapkan terima kasih kepada orang yang membantu"

],

action90:[

"Membangun keseimbangan antara produktivitas dan empati",

"Meningkatkan kualitas kepemimpinan melalui komunikasi yang lebih hangat",

"Mengembangkan kemampuan bekerja sama tanpa mengurangi fokus pada target",

"Menjadi pribadi yang disiplin sekaligus mudah diajak bekerja sama",

"Membangun karakter yang bertanggung jawab, efektif, dan menghargai orang lain"

]

},


Possibility:{

title:"Possibility",

summary:"Anda merupakan remaja yang lebih termotivasi oleh peluang, impian, kemungkinan, dan berbagai kesempatan yang dapat membawa Anda berkembang. Ketika melihat sesuatu yang baru, perhatian Anda biasanya langsung tertuju pada apa yang bisa dilakukan, apa yang mungkin dicapai, dan bagaimana sebuah ide dapat diwujudkan. Anda senang membayangkan masa depan, mengeksplorasi berbagai minat, serta mencoba pengalaman baru yang dapat memperluas kemampuan diri. Dalam proses belajar, Anda akan lebih bersemangat apabila diberikan kebebasan untuk berkreasi, menemukan solusi, atau mengembangkan ide-ide baru dibandingkan hanya mengikuti cara yang sudah ada. Karakter ini membuat Anda memiliki pola pikir yang terbuka, kreatif, dan optimis terhadap masa depan. Anda juga lebih mudah melihat kesempatan di balik tantangan sehingga tidak mudah menyerah ketika menghadapi kesulitan. Namun apabila kecenderungan ini terlalu dominan, Anda dapat memiliki terlalu banyak ide tanpa menyelesaikannya, mudah berpindah fokus, atau kurang disiplin dalam mengeksekusi rencana. Anda akan berkembang lebih optimal apabila mampu menggabungkan kreativitas yang tinggi dengan konsistensi dalam menjalankan setiap langkah menuju tujuan yang telah ditetapkan.",

strengths:[

"Memiliki kreativitas yang tinggi",

"Mudah melihat peluang untuk berkembang",

"Berani mencoba pengalaman baru",

"Memiliki rasa ingin tahu yang besar",

"Optimis terhadap masa depan",

"Mudah menemukan solusi alternatif"

],

challenges:[

"Memiliki terlalu banyak ide dalam waktu bersamaan",

"Mudah berpindah fokus",

"Kurang konsisten dalam menyelesaikan rencana",

"Sering memulai lebih banyak daripada yang diselesaikan",

"Kadang terlalu optimis tanpa memperhitungkan tantangan"

],

career:[

"Berpotensi pada bidang inovasi",

"Cocok mengembangkan startup atau bisnis sejak muda",

"Memiliki potensi dalam bidang teknologi",

"Cocok pada bidang desain dan industri kreatif",

"Berpotensi menjadi content creator atau inovator",

"Mudah berkembang dalam profesi yang membutuhkan kreativitas tinggi"

],

communication:[

"Antusias ketika membahas ide-ide baru",

"Mudah menginspirasi teman",

"Senang melakukan brainstorming",

"Berbicara dengan penuh semangat",

"Perlu meningkatkan kemampuan menyusun rencana yang realistis"

],

leadership:[

"Mendorong tim untuk berpikir kreatif",

"Menghasilkan banyak ide baru",

"Menginspirasi perubahan positif",

"Membantu kelompok melihat peluang baru",

"Perlu meningkatkan kemampuan mengeksekusi ide hingga selesai"

],

relationship:[

"Senang mengajak teman mencoba pengalaman baru",

"Membawa energi positif dalam pergaulan",

"Mudah membangun suasana yang penuh semangat",

"Terbuka terhadap berbagai karakter teman",

"Perlu menjaga komitmen dalam hubungan dan kerja sama"

],

development:[

"Melatih konsistensi menyelesaikan setiap target",

"Belajar menentukan prioritas utama",

"Mengembangkan disiplin dalam menjalankan rencana",

"Menyeimbangkan kreativitas dengan tanggung jawab",

"Mengubah ide menjadi tindakan nyata"

],

action30:[

"Memilih satu ide terbaik untuk diselesaikan terlebih dahulu",

"Membuat rencana langkah demi langkah sebelum memulai proyek",

"Mengurangi jumlah target yang dikerjakan secara bersamaan",

"Melakukan evaluasi mingguan terhadap perkembangan proyek",

"Menyelesaikan satu target sebelum memulai target berikutnya"

],

action90:[

"Membangun kebiasaan mengeksekusi ide hingga selesai",

"Meningkatkan disiplin terhadap target jangka panjang",

"Mengembangkan kemampuan mengubah peluang menjadi prestasi",

"Menjadi pribadi yang kreatif sekaligus konsisten",

"Membangun karakter inovatif, visioner, dan bertanggung jawab"

]

},

Necessity:{

title:"Necessity",

summary:"Anda merupakan remaja yang lebih termotivasi ketika memiliki tanggung jawab, kewajiban, atau komitmen yang harus diselesaikan. Anda cenderung bergerak karena memahami bahwa ada sesuatu yang memang perlu dilakukan, bukan hanya karena sedang bersemangat atau tertarik. Dalam kehidupan sekolah, Anda biasanya berusaha menyelesaikan tugas tepat waktu, memenuhi janji, mengikuti aturan, dan menjalankan tanggung jawab yang telah diberikan oleh guru, orang tua, maupun organisasi. Karakter ini membuat Anda menjadi pribadi yang disiplin, dapat dipercaya, dan memiliki rasa tanggung jawab yang tinggi. Teman-teman maupun guru sering melihat Anda sebagai seseorang yang konsisten menjalankan kewajibannya tanpa harus selalu diingatkan. Anda memahami bahwa keberhasilan tidak hanya ditentukan oleh bakat, tetapi juga oleh kedisiplinan dan komitmen terhadap proses. Namun apabila kecenderungan ini terlalu dominan, Anda dapat menjadi terlalu serius, kurang menikmati proses belajar, atau merasa sulit bergerak apabila tidak ada tuntutan maupun target yang jelas. Anda juga mungkin kurang berani mencoba sesuatu yang baru karena terlalu berfokus pada apa yang dianggap sebagai kewajiban. Anda akan berkembang lebih optimal apabila mampu mempertahankan rasa tanggung jawab yang tinggi sambil tetap membuka ruang bagi kreativitas, eksplorasi, dan pengalaman baru yang dapat memperkaya potensi diri.",

strengths:[

"Memiliki rasa tanggung jawab yang tinggi",

"Disiplin dalam menjalankan kewajiban",

"Dapat dipercaya memegang amanah",

"Konsisten menyelesaikan tugas",

"Mampu menjaga komitmen yang telah dibuat",

"Memiliki etos belajar yang baik"

],

challenges:[

"Cenderung terlalu serius",

"Kurang menikmati proses belajar",

"Sulit bergerak apabila tidak memiliki target yang jelas",

"Kurang spontan mencoba hal baru",

"Kadang terlalu membebani diri dengan tanggung jawab"

],

career:[

"Berpotensi pada bidang kesehatan",

"Cocok pada bidang pendidikan",

"Memiliki potensi dalam bidang teknik",

"Cocok pada bidang administrasi dan manajemen",

"Berpotensi dalam bidang pelayanan publik",

"Mudah berkembang pada profesi yang membutuhkan disiplin dan integritas tinggi"

],

communication:[

"Berbicara dengan penuh tanggung jawab",

"Konsisten antara perkataan dan tindakan",

"Mudah dipercaya ketika diberikan amanah",

"Menyampaikan komitmen dengan jelas",

"Perlu lebih banyak memberikan semangat dan apresiasi dalam komunikasi"

],

leadership:[

"Menjadi teladan dalam kedisiplinan",

"Mampu menjaga komitmen kelompok",

"Mendorong anggota tim bertanggung jawab",

"Menjalankan tugas dengan penuh integritas",

"Perlu meningkatkan fleksibilitas ketika menghadapi perubahan"

],

relationship:[

"Menjaga kepercayaan dalam persahabatan",

"Setia terhadap komitmen yang telah dibuat",

"Dapat diandalkan ketika teman membutuhkan bantuan",

"Menghargai aturan dan kesepakatan bersama",

"Perlu lebih menikmati kebersamaan tanpa selalu memikirkan tanggung jawab"

],

development:[

"Belajar menikmati proses, bukan hanya kewajiban",

"Membuka diri terhadap pengalaman baru",

"Meningkatkan kreativitas dalam belajar",

"Menyeimbangkan disiplin dengan fleksibilitas",

"Mengembangkan motivasi yang berasal dari tujuan pribadi, bukan hanya kewajiban"

],

action30:[

"Mencoba satu aktivitas baru di luar rutinitas belajar",

"Memberikan waktu untuk menjalankan hobi setiap minggu",

"Mencari cara belajar yang lebih menyenangkan",

"Memberikan penghargaan kepada diri sendiri setelah menyelesaikan target",

"Melatih melihat setiap kewajiban sebagai kesempatan untuk berkembang"

],

action90:[

"Membangun keseimbangan antara disiplin dan kreativitas",

"Meningkatkan motivasi intrinsik dalam belajar",

"Mengembangkan pola pikir yang lebih fleksibel",

"Menjadi pribadi yang bertanggung jawab sekaligus terbuka terhadap peluang baru",

"Membangun karakter yang disiplin, berintegritas, adaptif, dan terus berkembang"

]

},



}

// --- knowledgeBase_anak.js ---
const KNOWLEDGE_BASE_ANAK = {
  Toward: {
    title: "Toward (Orientasi Target & Hadiah)",
    summary: "Anak terdorong oleh pencapaian, kesenangan, dan hasil positif yang akan didapatkannya.",
    strengths: [
      "Antusias memulai tugas baru",
      "Penuh energi saat mengejar target",
      "Mudah termotivasi oleh reward"
    ],
    challenges: [
      "Cepat bosan jika tidak ada reward",
      "Kurang memperhatikan risiko/bahaya",
      "Sering terburu-buru menyelesaikan tugas"
    ],
    career: [
      "Eksplorasi Sains dengan target eksperimen",
      "Game edukatif berbasis pencapaian skor",
      "Proyek seni dengan pameran hasil karya"
    ],
    action30: [
      "Gunakan sistem papan bintang (star chart) untuk tugas harian",
      "Ingatkan anak untuk memeriksa ulang hasil kerjanya",
      "Fokuskan pujian pada proses, bukan hanya hasil akhir"
    ]
  },
  Away: {
    title: "Away From (Antisipasi Masalah & Konsekuensi)",
    summary: "Anak terdorong untuk menghindari teguran, kesalahan, ketidaknyamanan, atau kegagalan.",
    strengths: [
      "Waspada dan peduli keselamatan",
      "Teliti menghindari kesalahan",
      "Mudah mengikuti aturan keselamatan"
    ],
    challenges: [
      "Mudah cemas/takut berbuat salah",
      "Ragu mencoba hal baru yang tidak pasti",
      "Butuh rasa aman ekstra untuk memulai"
    ],
    career: [
      "Aktivitas merakit lego sesuai instruksi",
      "Pecahkan teka-teki logika/detektif",
      "Belajar sains melalui analisis sebab-akibat"
    ],
    action30: [
      "Berikan penegasan bahwa 'salah itu wajar dalam belajar'",
      "Kurangi nada suara yang mengancam atau memberi hukuman keras",
      "Bantu anak merencanakan langkah-langkah aman sebelum memulai tugas"
    ]
  },
  Internal: {
    title: "Internal (Pendirian & Keyakinan Kuat)",
    summary: "Anak memiliki keputusan dan standar sendiri dari dalam dirinya, cenderung teguh pendirian.",
    strengths: [
      "Mandiri dalam menentukan pilihan",
      "Tidak mudah terpengaruh tekanan teman sebaya",
      "Memiliki rasa percaya diri yang tinggi"
    ],
    challenges: [
      "Cenderung keras kepala dan sulit dinasihati",
      "Menolak aturan jika tidak masuk akal baginya",
      "Sulit menerima arahan langsung secara otoriter"
    ],
    career: [
      "Proyek mandiri pilihan anak",
      "Eksplorasi seni bebas tanpa contoh kaku",
      "Tugas riset sederhana tentang minat khususnya"
    ],
    action30: [
      "Berikan pilihan (misal: 'Mau mandi sebelum atau sesudah makan?')",
      "Jelaskan alasan logis di balik setiap aturan yang Anda buat",
      "Ajak anak berdiskusi daripada mendiktenya secara langsung"
    ]
  },
  External: {
    title: "External (Membutuhkan Arahan & Pujian)",
    summary: "Anak membutuhkan validasi, pujian, dan petunjuk jelas dari luar untuk merasa yakin.",
    strengths: [
      "Kooperatif dan mudah diarahkan",
      "Senang mendengarkan umpan balik orang tua/guru",
      "Mudah beradaptasi dengan standar kelas"
    ],
    challenges: [
      "Kurang percaya diri mengambil keputusan sendiri",
      "Sangat sensitif terhadap kritik atau penolakan",
      "Ragu melangkah tanpa persetujuan verbal"
    ],
    career: [
      "Belajar klasikal dengan instruktur aktif",
      "Kegiatan kelompok dengan pembagian peran jelas",
      "Aktivitas yang mendapatkan apresiasi berkala"
    ],
    action30: [
      "Berikan pujian spesifik secara teratur atas usahanya",
      "Latih anak memilih hal kecil secara mandiri secara bertahap",
      "Hindari kritik tajam di depan orang lain untuk menjaga mentalnya"
    ]
  },
  Options: {
    title: "Options (Suka Alternatif & Kreativitas Bebas)",
    summary: "Anak menyukai kebebasan untuk mencoba berbagai cara dan mengeksplorasi ide baru.",
    strengths: [
      "Sangat kreatif dan penuh ide orisinal",
      "Suka bereksperimen dengan cara-cara unik",
      "Cepat menemukan solusi alternatif saat buntu"
    ],
    challenges: [
      "Sulit mengikuti aturan/prosedur yang kaku",
      "Cenderung bosan dengan rutinitas berulang",
      "Kadang melompati langkah penting dalam belajar"
    ],
    career: [
      "Kelas seni lukis/prakarya bebas",
      "Pemrograman anak (Scratch/Coding Blocks)",
      "Bermain peran kreatif dan teater anak"
    ],
    action30: [
      "Sediakan ruang baginya untuk bereksperimen secara aman",
      "Berikan variasi dalam metode belajarnya agar tidak monoton",
      "Bantu dia memahami kapan aturan mutlak harus diikuti (misal: keselamatan)"
    ]
  },
  Procedures: {
    title: "Procedures (Menyukai Langkah & Keteraturan)",
    summary: "Anak merasa nyaman jika ada instruksi langkah-demi-langkah yang jelas dan runtut.",
    strengths: [
      "Sangat baik dalam mengikuti panduan",
      "Sistematis dan teratur dalam bekerja",
      "Menyelesaikan tugas secara bertahap hingga selesai"
    ],
    challenges: [
      "Bingung jika tidak ada instruksi yang jelas",
      "Mudah stres jika rencana berubah mendadak",
      "Kesulitan berpikir 'out of the box'"
    ],
    career: [
      "Merakit mainan mekanis sesuai buku manual",
      "Belajar memasak/membuat kue sederhana",
      "Belajar alat musik secara formal"
    ],
    action30: [
      "Berikan instruksi tugas secara tertulis atau visual bertahap",
      "Berikan pemberitahuan awal jika akan ada perubahan rutinitas",
      "Latih kelenturan berpikirnya lewat permainan alternatif"
    ]
  },
  BigPicture: {
    title: "Big Picture (Gambaran Besar & Global)",
    summary: "Anak menangkap ide utama secara cepat namun cenderung mengabaikan rincian kecil.",
    strengths: [
      "Cepat memahami konsep umum/inti cerita",
      "Visioner dalam berimajinasi",
      "Fokus pada tujuan utama aktivitas"
    ],
    challenges: [
      "Sering melewatkan detail/instruksi kecil",
      "Ceroboh dalam menulis atau berhitung",
      "Cepat bosan dengan penjelasan yang bertele-tele"
    ],
    career: [
      "Membaca peta atau membuat rancangan maket",
      "Bercerita/presentasi ide visual",
      "Permainan strategi kelompok"
    ],
    action30: [
      "Ajarkan anak membuat daftar periksa (checklist) sederhana untuk tugasnya",
      "Gunakan analogi cerita besar sebelum mengajari materi detail",
      "Bantu dia menandai bagian-bagian penting dengan spidol warna"
    ]
  },
  Detail: {
    title: "Detail (Fokus Rincian & Ketelitian)",
    summary: "Anak sangat teliti dan tertarik pada bagian-bagian kecil dari sebuah objek atau aktivitas.",
    strengths: [
      "Sangat detail dan akurat",
      "Menyadari kesalahan kecil dengan cepat",
      "Sabar mengamati hal-hal mikroskopis"
    ],
    challenges: [
      "Butuh waktu lama untuk memulai atau menyelesaikan tugas",
      "Kerap kehilangan fokus pada tujuan utama karena asyik pada detail",
      "Mudah merasa terbebani jika tugas terlalu kompleks"
    ],
    career: [
      "Menggambar detail halus atau mewarnai rumit",
      "Eksplorasi sains dengan mikroskop/kaca pembesar",
      "Menyusun puzzle kecil atau robotika mikro"
    ],
    action30: [
      "Bantu anak membatasi waktu pengerjaan agar tidak terlalu lama di satu detail",
      "Ingatkan dia kembali tentang tujuan utama tugasnya secara berkala",
      "Latih dia menyederhanakan informasi sebelum memulai bekerja"
    ]
  },
  Matching: {
    title: "Matching (Menyukai Kesamaan & Kecocokan)",
    summary: "Anak lebih mudah menerima informasi baru dengan mencari kesamaan dengan apa yang telah diketahui.",
    strengths: [
      "Mudah sepakat dan beradaptasi",
      "Membangun hubungan harmonis dengan teman",
      "Menghargai tradisi keluarga dan kebiasaan baik"
    ],
    challenges: [
      "Takut menghadapi perubahan drastis",
      "Kurang kritis terhadap informasi baru",
      "Cenderung menghindari konflik secara berlebihan"
    ],
    career: [
      "Aktivitas drama yang meniru tokoh favorit",
      "Belajar sejarah melalui perbandingan cerita",
      "Bermain kelompok dengan aturan konvensional"
    ],
    action30: [
      "Hubungkan materi pelajaran baru dengan hobi/hal yang sudah disukainya",
      "Latih anak menyatakan pendapat pribadinya secara berani",
      "Kenalkan perubahan-perubahan kecil secara bertahap agar dia terbiasa"
    ]
  },
  Mismatching: {
    title: "Mismatching (Kritis & Menyukai Perbedaan)",
    summary: "Anak secara alami kritis, cepat mendeteksi ketidaksesuaian, dan menyukai hal berbeda.",
    strengths: [
      "Berpikir kritis dan analitis sejak dini",
      "Kreatif menemukan celah yang salah",
      "Memiliki gaya unik tersendiri dalam bermain"
    ],
    challenges: [
      "Sering terlihat membantah atau suka berargumen",
      "Sulit menerima kesepakatan umum secara langsung",
      "Bisa dianggap kurang kooperatif oleh guru/teman"
    ],
    career: [
      "Kuis tebak kesalahan/detektif cilik",
      "Lomba debat atau diskusi kritis anak",
      "Eksperimen sains membuktikan teori"
    ],
    action30: [
      "Salurkan sikap kritisnya melalui diskusi logis, bukan bentakan",
      "Latih dia menyampaikan koreksi dengan bahasa yang sopan",
      "Gunakan teknik 'reverse psychology' jika ia menolak instruksi dasar"
    ]
  },
  Self: {
    title: "Self (Fokus Keinginan & Standar Diri)",
    summary: "Anak memprioritaskan kenyamanan, kebutuhan, dan kepuasan dirinya sendiri terlebih dahulu.",
    strengths: [
      "Mandiri dan tahu persis apa yang ia inginkan",
      "Memiliki batas diri yang kuat (tidak mudah dipaksa)",
      "Fokus pada kenyamanan pribadi"
    ],
    challenges: [
      "Sulit berbagi barang atau perhatian",
      "Kurang peka terhadap perasaan teman bermain",
      "Bisa egois jika tidak dibimbing berempati"
    ],
    career: [
      "Aktivitas olahraga individu (berenang, bela diri)",
      "Proyek seni personal",
      "Tugas mandiri dengan kendali penuh di tangan anak"
    ],
    action30: [
      "Latih empati anak lewat diskusi perasaan tokoh dalam buku cerita",
      "Ajarkan konsep berbagi secara logis dan adil (bergantian)",
      "Hargai kepemilikan pribadinya agar ia merasa aman untuk berbagi"
    ]
  },
  Others: {
    title: "Others (Peka Sosial & Suka Berbagi)",
    summary: "Anak sangat peka terhadap perasaan, kebutuhan, dan reaksi orang-orang di sekitarnya.",
    strengths: [
      "Sangat berempati dan suka menolong",
      "Peka terhadap suasana hati orang tua/teman",
      "Mudah berteman dan disukai sekelilingnya"
    ],
    challenges: [
      "Mudah sedih/terpengaruh suasana hati orang lain",
      "Kadang mengabaikan kenyamanan dirinya sendiri",
      "Sering mendahulukan orang lain hingga merugikan diri"
    ],
    career: [
      "Kegiatan sosial, pramuka, atau palang merah cilik",
      "Tugas kelompok berbasis kolaborasi",
      "Memelihara hewan atau tanaman bersama"
    ],
    action30: [
      "Ajarkan anak untuk berani berkata 'tidak' jika merasa tidak nyaman",
      "Latih dia mengenali dan memvalidasi perasaan pribadinya",
      "Lindungi dia dari konflik orang dewasa di rumah agar tidak stres"
    ]
  },
  Proactive: {
    title: "Proactive (Langsung Bertindak & Mencoba)",
    summary: "Anak bersemangat untuk langsung bertindak dan belajar melalui eksperimen fisik tanpa ragu.",
    strengths: [
      "Berani memulai tindakan",
      "Belajar cepat lewat praktik langsung",
      "Penuh inisiatif dalam bermain"
    ],
    challenges: [
      "Kurang perencanaan dan sering ceroboh",
      "Sulit duduk tenang mendengar instruksi lama",
      "Sering membuat kekacauan fisik (tumpah, rusak)"
    ],
    career: [
      "Aktivitas luar ruangan (outbound cilik)",
      "Sains eksperimental langsung",
      "Prakarya fisik menggunakan tanah liat/kayu lunak"
    ],
    action30: [
      "Berikan ruang yang aman untuknya bergerak aktif",
      "Latih dia berhenti sejenak dan berpikir 3 detik sebelum bertindak",
      "Gunakan instruksi pendek dan langsung pada sasaran"
    ]
  },
  Reactive: {
    title: "Reactive (Mengamati & Berpikir Terlebih Dahulu)",
    summary: "Anak membutuhkan waktu untuk mengamati, menganalisis situasi, dan merasa aman sebelum melangkah.",
    strengths: [
      "Sangat berhati-hati dan penuh pertimbangan",
      "Pengamat yang hebat terhadap lingkungan sekitar",
      "Mengikuti instruksi secara matang"
    ],
    challenges: [
      "Lambat memulai hal baru atau membaur",
      "Terlihat pasif atau pemalu di lingkungan baru",
      "Butuh dorongan ekstra untuk mengambil tindakan fisik"
    ],
    career: [
      "Permainan papan strategi (catur anak, monopoli)",
      "Membaca buku pengetahuan bergambar",
      "Aktivitas mengamati alam/hewan"
    ],
    action30: [
      "Jangan paksa anak untuk langsung membaur di lingkungan baru",
      "Berikan waktu persiapan sebelum memulai aktivitas baru",
      "Hargai proses berpikirnya dan berikan dukungan tanpa menghakimi pasif"
    ]
  },
  General: {
    title: "General (Gaya Belajar Global/Konseptual)",
    summary: "Anak lebih mudah belajar jika memahami konsep dasar dan gambaran umum terlebih dahulu.",
    strengths: [
      "Memahami esensi pelajaran dengan cepat",
      "Mampu membuat kesimpulan global",
      "Berimajinasi luas"
    ],
    challenges: [
      "Malas membaca rincian teks yang panjang",
      "Sering melewatkan detail soal saat ujian",
      "Kesulitan menyusun langkah terperinci"
    ],
    career: [
      "Peta pikiran (mind mapping) bergambar",
      "Diskusi interaktif tentang tema besar",
      "Buku cerita dengan pesan moral utama yang jelas"
    ],
    action30: [
      "Gunakan peta pikiran (mind map) visual untuk menjelaskan pelajaran",
      "Mulai penjelasan dari kesimpulan akhir baru masuk ke teori",
      "Bantu dia melatih ketelitian dengan mengecek 3 detail penting"
    ]
  },
  Specific: {
    title: "Specific (Gaya Belajar Detail/Rinci)",
    summary: "Anak membutuhkan penjelasan yang bertahap, rinci, dan terperinci untuk bisa memahami.",
    strengths: [
      "Sangat teliti memahami instruksi rinci",
      "Menyukai fakta konkret dan angka",
      "Mampu menjelaskan sesuatu secara kronologis"
    ],
    challenges: [
      "Bingung jika instruksi terlalu umum/abstrak",
      "Kesulitan merangkum inti dari teks panjang",
      "Mudah macet jika ada satu detail kecil yang membingungkan"
    ],
    career: [
      "Belajar berhitung menggunakan sempoa/alat bantu",
      "Menulis jurnal harian anak",
      "Menggambar teknik sederhana/origami presisi"
    ],
    action30: [
      "Pecah tugas besar menjadi beberapa tugas kecil yang spesifik",
      "Berikan instruksi yang konkret (hindari bahasa kiasan/abstrak)",
      "Bantu dia menyusun informasi secara kronologis"
    ]
  },
  Sameness: {
    title: "Sameness (Kenyamanan Rutinitas & Stabilitas)",
    summary: "Anak sangat menyukai rutinitas, ketertiban, dan lingkungan belajar yang stabil.",
    strengths: [
      "Sangat disiplin pada jadwal rutin yang disepakati",
      "Konsisten dalam belajar",
      "Merasa nyaman dengan lingkungan rumah yang stabil"
    ],
    challenges: [
      "Sangat cemas dengan perubahan mendadak",
      "Kesulitan beradaptasi dengan guru/sekolah baru",
      "Enggan mencoba metode bermain baru"
    ],
    career: [
      "Jadwal belajar rutin dengan meja belajar tetap",
      "Membaca buku favorit secara berulang-ulang",
      "Permainan dengan aturan baku yang konsisten"
    ],
    action30: [
      "Jaga jadwal tidur, makan, dan belajar anak tetap konsisten",
      "Persiapkan anak jauh-jauh hari jika ada transisi besar",
      "Gunakan metode belajar yang sudah terbukti ia sukai"
    ]
  },
  Difference: {
    title: "Difference (Menyukai Variasi & Pengalaman Baru)",
    summary: "Anak sangat antusias pada perubahan, hal-hal baru, dan cepat bosan dengan rutinitas.",
    strengths: [
      "Sangat adaptif dengan situasi baru",
      "Suka mencari tantangan baru",
      "Memiliki rasa penasaran yang tinggi"
    ],
    challenges: [
      "Sulit fokus pada rutinitas harian (PR, sikat gigi)",
      "Mudah mengabaikan aktivitas lama yang belum selesai",
      "Cepat bosan dengan mainan atau metode belajar yang sama"
    ],
    career: [
      "Belajar sains melalui kunjungan museum/alam bebas",
      "Game edukasi digital interaktif yang berganti level",
      "Eksplorasi seni dengan media berbeda tiap minggu"
    ],
    action30: [
      "Selingi rutinitas belajarnya dengan permainan atau variasi tempat",
      "Berikan tantangan bertahap yang dinamis agar ia tidak bosan",
      "Ajarkan komitmen untuk menyelesaikan tugas lama sebelum memulai yang baru"
    ]
  },
  Past: {
    title: "Past (Belajar Dari Pengalaman Lalu)",
    summary: "Anak sering mengaitkan kejadian hari ini dengan apa yang telah terjadi sebelumnya.",
    strengths: [
      "Daya ingat kuat terhadap memori lama",
      "Belajar dari kesalahan masa lalu",
      "Menghargai kenangan dan barang bersejarah pribadinya"
    ],
    challenges: [
      "Mudah trauma atau takut mengulangi kesalahan masa lalu",
      "Suka mengungkit masalah yang sudah lewat",
      "Sulit menerima keadaan baru jika pernah kecewa"
    ],
    career: [
      "Belajar sejarah lewat dongeng",
      "Membuat album kenangan/scrapbook anak",
      "Analisis perbandingan perilaku hewan"
    ],
    action30: [
      "Ajak anak merefleksikan keberhasilan masa lalunya untuk membangun rasa percaya diri",
      "Bantu dia melepas emosi negatif dari kegagalan sebelumnya",
      "Fokuskan evaluasi pada 'apa pelajaran yang bisa kita ambil'"
    ]
  },
  Present: {
    title: "Present (Menikmati Momen Saat Ini)",
    summary: "Anak berfokus penuh pada apa yang sedang terjadi sekarang, sangat spontan dan rileks.",
    strengths: [
      "Konsentrasi penuh pada aktivitas saat ini",
      "Cenderung santai dan tidak mudah cemas",
      "Menikmati proses bermain dengan tulus"
    ],
    challenges: [
      "Sulit memikirkan konsekuensi tindakannya di masa depan",
      "Enggan menabung atau menyimpan mainan untuk esok",
      "Kurang termotivasi oleh rencana jangka panjang"
    ],
    career: [
      "Aktivitas drama spontan atau tebak gaya",
      "Menggambar ekspresif sesuai emosi saat ini",
      "Olahraga motorik cepat (berlari, menari)"
    ],
    action30: [
      "Gunakan alarm atau timer visual untuk menunjukkan sisa waktu bermain",
      "Ajarkan konsep sebab-akibat sederhana yang berakibat langsung",
      "Berikan konsekuensi instan (baik positif maupun negatif)"
    ]
  },
  Future: {
    title: "Future (Orientasi Rencana & Impian)",
    summary: "Anak sering mengkhayal, merencanakan, dan bersemangat tentang apa yang akan terjadi nanti.",
    strengths: [
      "Penuh impian dan cita-cita menarik",
      "Suka merencanakan liburan atau permainan besok",
      "Termotivasi oleh visi masa depan"
    ],
    challenges: [
      "Sering melamun/kurang fokus pada tugas saat ini",
      "Mudah cemas memikirkan hal buruk yang belum terjadi",
      "Kurang menikmati momen santai hari ini"
    ],
    career: [
      "Merancang kota masa depan dengan lego/gambar",
      "Menulis/menggambar cita-cita masa depan",
      "Belajar konsep sains tentang luar angkasa/masa depan"
    ],
    action30: [
      "Salurkan imajinasinya ke dalam rencana aksi konkret hari ini",
      "Bantu menenangkannya jika ia cemas tentang hari esok",
      "Ajak anak berlatih menikmati aktivitas saat ini (mindfulness cilik)"
    ]
  },
  Independent: {
    title: "Independent (Kemandirian Bermain & Belajar)",
    summary: "Anak nyaman bermain, berkreasi, dan menyelesaikan masalah secara mandiri.",
    strengths: [
      "Sangat mandiri dan asyik dengan dirinya sendiri",
      "Mampu berkonsentrasi lama tanpa pengawasan konstan",
      "Memiliki inisiatif tinggi untuk belajar sendiri"
    ],
    challenges: [
      "Cenderung menarik diri dari aktivitas sosial kelompok",
      "Sulit berbagi wilayah bermain dengan anak lain",
      "Bisa dianggap kurang peka oleh teman bermain"
    ],
    career: [
      "Eksplorasi membaca mandiri",
      "Coding anak mandiri",
      "Seni melukis/mematung personal"
    ],
    action30: [
      "Sediakan waktu dan tempat khusus baginya untuk bermain sendiri",
      "Latih kemampuan sosialnya secara perlahan tanpa paksaan drastis",
      "Hargai kemandiriannya dengan memberikan tanggung jawab pribadi"
    ]
  },
  Cooperative: {
    title: "Cooperative (Kerjasama & Interaksi Teman)",
    summary: "Anak belajar dan bermain paling optimal ketika berada di tengah interaksi kelompok.",
    strengths: [
      "Sangat baik bekerja sama dalam tim",
      "Mendengar dan menghargai masukan teman bermain",
      "Suka berbagi kebahagiaan dengan orang lain"
    ],
    challenges: [
      "Kesulitan menyelesaikan tugas jika harus sendirian",
      "Mudah terpengaruh keputusan kelompok",
      "Butuh kehadiran teman agar bersemangat"
    ],
    career: [
      "Olahraga tim (futsal cilik, basket anak)",
      "Proyek prakarya kelompok",
      "Bermain musik ansambel anak"
    ],
    action30: [
      "Latih kemandiriannya melalui tugas individu yang menyenangkan",
      "Ajarkan anak untuk berani mengambil keputusan sendiri sebelum diskusi kelompok",
      "Fasilitasi kegiatan bermain bersama teman sebaya secara rutin"
    ]
  },
  People: {
    title: "People (Fokus Interaksi & Hubungan Sosial)",
    summary: "Anak memprioritaskan perasaan orang lain dan kualitas hubungan sosial saat bermain.",
    strengths: [
      "Sangat peka dan penuh perhatian",
      "Mudah membangun keakraban sosial",
      "Menjaga suasana bermain tetap damai"
    ],
    challenges: [
      "Tugas akademiknya terabaikan karena asyik bersosialisasi",
      "Sangat sedih jika ada konflik teman",
      "Mudah terpengaruh bujukan buruk teman demi diterima"
    ],
    career: [
      "Bermain peran/sosiodrama",
      "Kegiatan OSIS/komunitas anak",
      "Kerjasama proyek kreatif sosial"
    ],
    action30: [
      "Ajarkan batasan sosial yang sehat (kapan harus belajar, kapan bermain)",
      "Bantu anak meredakan emosinya saat terjadi konflik pertemanan",
      "Tanamkan prinsip kepemimpinan mandiri agar ia tidak sekadar membebek"
    ]
  },
  Task: {
    title: "Task (Fokus Hasil & Penyelesaian Tugas)",
    summary: "Anak memprioritaskan penyelesaian tugas, mainan, atau target aktivitas di atas segalanya.",
    strengths: [
      "Fokus dan berorientasi hasil yang tinggi",
      "Disiplin menyelesaikan mainan/PR hingga tuntas",
      "Sangat andal menyelesaikan tugas"
    ],
    challenges: [
      "Mudah marah/frustrasi jika mainannya diganggu anak lain",
      "Kurang peduli dengan perasaan teman kelompok",
      "Terlihat kaku dan kurang santai saat beraktivitas"
    ],
    career: [
      "Menyusun lego mekanis/puzzle besar",
      "Latihan matematika/logika terstruktur",
      "Kompetisi sains/proyek hasil konkret"
    ],
    action30: [
      "Ajarkan anak bahwa hubungan pertemanan lebih penting daripada sekadar memenangkan game",
      "Berikan waktu jeda santai di sela-sela aktivitas terstrukturnya",
      "Latih dia meminta maaf jika tanpa sengaja mengabaikan temannya demi tugas"
    ]
  },
  Possibility: {
    title: "Possibility (Motivasi Ide & Keingintahuan)",
    summary: "Anak termotivasi oleh ide-ide baru, eksplorasi rasa ingin tahu, dan kemungkinan kreatif.",
    strengths: [
      "Rasa ingin tahu yang luar biasa",
      "Penuh ide-ide kreatif dan imajinatif",
      "Antusias mempelajari hal di luar kurikulum"
    ],
    challenges: [
      "Kesulitan mengikuti tugas rutin yang monoton",
      "Sering meninggalkan proyek lama demi ide baru",
      "Cenderung mengabaikan batasan aturan baku"
    ],
    career: [
      "Eksplorasi sains bebas dan eksperimen mandiri",
      "Menulis/menggambar cerita fiksi anak",
      "Aktivitas perancangan kreatif"
    ],
    action30: [
      "Salurkan rasa ingin tahunya lewat ensiklopedia menarik dan eksperimen rumah",
      "Latih komitmen menyelesaikan satu tugas sebelum membuka buku/aktivitas baru",
      "Hargai ide uniknya tanpa terburu-buru menyalahkannya karena berbeda"
    ]
  },
  Necessity: {
    title: "Necessity (Motivasi Aturan & Kewajiban)",
    summary: "Anak merasa aman dan termotivasi melakukan sesuatu karena ada aturan, tugas wajib, atau keharusan.",
    strengths: [
      "Sangat disiplin mematuhi instruksi wajib",
      "Menyukai kepastian hukum/aturan di rumah",
      "Memiliki rasa tanggung jawab yang tinggi"
    ],
    challenges: [
      "Takut mencoba hal baru jika tidak diwajibkan",
      "Kurang memiliki inisiatif kreatif sendiri",
      "Terlihat kaku dan cemas jika aturan kurang jelas"
    ],
    career: [
      "Latihan instrumen musik klasik dengan kurikulum jelas",
      "Mengikuti aturan disiplin bela diri (taekwondo/karate)",
      "Pelajaran sekolah formal dengan standar kelulusan terukur"
    ],
    action30: [
      "Berikan instruksi tertulis yang jelas mengenai tugasnya",
      "Latih anak mengambil inisiatif mandiri di luar aturan dasar",
      "Berikan apresiasi tinggi atas kepatuhan dan kedisiplinannya"
    ]
  }
};


// --- interpretationEngine.js ---
const INTERPRETATION_ENGINE = {

Toward:
"berorientasi pada tujuan dan peluang",

Away:
"berorientasi pada keamanan dan pencegahan risiko",

Internal:
"percaya pada penilaian diri sendiri",

External:
"terbuka terhadap masukan dan umpan balik",

Options:
"menyukai kebebasan dan banyak pilihan",

Procedures:
"menyukai sistem dan langkah yang jelas",

BigPicture:
"visioner dan strategis",

Detail:
"teliti dan detail",

Matching:
"mudah menemukan kesamaan",

Mismatching:
"kritis dan fokus pada perbaikan",

Self:
"mandiri dan fokus pada tujuan pribadi",

Others:
"peduli terhadap kebutuhan orang lain",

Proactive:
"cepat bertindak",

Reactive:
"analitis sebelum bertindak",

General:
"menyukai gambaran besar",

Specific:
"menyukai rincian yang lengkap",

Sameness:
"menyukai stabilitas",

Difference:
"menyukai perubahan",

Past:
"belajar dari pengalaman",

Present:
"fokus pada kondisi saat ini",

Future:
"berorientasi masa depan",

Independent:
"mandiri dalam bekerja",

Cooperative:
"kuat dalam kerja sama",

People:
"berorientasi pada hubungan",

Task:
"berorientasi pada hasil",

Possibility:
"termotivasi oleh peluang",

Necessity:
"termotivasi oleh tanggung jawab"

};

// --- interpretationEngineRemaja.js ---
const INTERPRETATION_ENGINE_REMAJA = {

Toward:
"lebih fokus pada tujuan dan peluang yang ingin dicapai",

Away:
"lebih berhati-hati dan berusaha menghindari masalah",

Internal:
"percaya pada kemampuan dan penilaian diri sendiri",

External:
"terbuka terhadap saran dan masukan dari orang lain",

Options:
"menyukai kebebasan untuk mencoba berbagai cara",

Procedures:
"menyukai langkah-langkah yang teratur dan jelas",

BigPicture:
"lebih mudah melihat gambaran besar",

Detail:
"teliti dan memperhatikan hal-hal kecil",

Matching:
"mudah menemukan kesamaan dan kecocokan",

Mismatching:
"mudah menemukan perbedaan dan hal yang perlu diperbaiki",

Self:
"mempertimbangkan kebutuhan dan tujuan diri sendiri",

Others:
"memperhatikan kebutuhan dan perasaan orang lain",

Proactive:
"suka segera bertindak dan mencoba",

Reactive:
"lebih suka berpikir sebelum bertindak",

General:
"lebih nyaman memahami konsep utama terlebih dahulu",

Specific:
"lebih nyaman memahami informasi secara rinci",

Sameness:
"menyukai suasana yang stabil dan konsisten",

Difference:
"menyukai hal-hal baru dan perubahan",

Past:
"sering belajar dari pengalaman sebelumnya",

Present:
"lebih fokus pada apa yang sedang terjadi saat ini",

Future:
"sering memikirkan tujuan dan rencana masa depan",

Independent:
"nyaman belajar dan mengambil keputusan secara mandiri",

Cooperative:
"senang belajar dan bekerja sama dengan orang lain",

People:
"menyukai kegiatan yang melibatkan banyak orang",

Task:
"lebih fokus menyelesaikan tugas dan mencapai tujuan",

Possibility:
"termotivasi oleh ide, peluang, dan kemungkinan baru",

Necessity:
"termotivasi oleh tanggung jawab dan kewajiban"

};

// --- interpretationEngineAnak.js ---
const INTERPRETATION_ENGINE_ANAK = {
  Toward: "termotivasi oleh target/hadiah",
  Away: "termotivasi menghindari teguran/masalah",
  Internal: "mandiri dan memiliki pendirian yang kuat",
  External: "membutuhkan pujian dan bimbingan",
  Options: "kreatif dan menyukai kebebasan beraktivitas",
  Procedures: "menyukai keteraturan dan langkah-langkah jelas",
  BigPicture: "memahami gambaran besar secara cepat",
  Detail: "teliti dan berfokus pada detail kecil",
  Matching: "mudah beradaptasi dan mencari kesamaan",
  Mismatching: "kritis dan suka melihat perbedaan",
  Self: "berfokus pada kenyamanan dan keinginan diri sendiri",
  Others: "peka terhadap sekitar dan suka berbagi",
  Proactive: "langsung bertindak tanpa ragu-ragu",
  Reactive: "mengamati keadaan sebelum mulai bermain",
  General: "cukup memahami gagasan utama aktivitas",
  Specific: "memerlukan arahan aktivitas yang rinci",
  Sameness: "menyukai rutinitas belajar yang stabil",
  Difference: "senang mencoba hal-hal baru dan tantangan",
  Past: "belajar dari pengalaman sebelumnya",
  Present: "fokus menikmati aktivitas saat ini juga",
  Future: "bersemangat merencanakan atau mengkhayal masa depan",
  Independent: "mandiri dan asyik dengan kegiatannya sendiri",
  Cooperative: "senang berinteraksi dan bermain kelompok",
  People: "menyukai interaksi sosial dan ramah",
  Task: "fokus menyelesaikan tugas atau permainan hingga tuntas",
  Possibility: "termotivasi oleh rasa ingin tahu dan kreasi baru",
  Necessity: "termotivasi oleh aturan atau kewajiban"
};


// --- narrativeEngine.js ---
const NARRATIVE_ENGINE = {

THINKING_STYLE:{

Toward:`Anda cenderung memusatkan perhatian pada peluang, tujuan, dan hasil yang ingin dicapai. Ketika menghadapi situasi baru, pikiran Anda lebih sering mencari kemungkinan keberhasilan dibanding hambatan yang mungkin muncul.`,

Away:`Anda cenderung berpikir secara antisipatif dan waspada terhadap potensi masalah yang mungkin muncul. Sebelum bertindak, Anda sering mempertimbangkan risiko dan konsekuensi yang perlu dihindari.`,

Internal:`Anda memiliki pola pikir yang mandiri dan percaya pada penilaian pribadi. Sebelum menerima pendapat orang lain, Anda biasanya sudah memiliki standar penilaian sendiri.`,

External:`Anda terbuka terhadap masukan dan perspektif dari lingkungan sekitar. Anda percaya bahwa informasi dari orang lain dapat membantu memperkaya cara berpikir.`,

Options:`Pikiran Anda senang mengeksplorasi berbagai kemungkinan. Anda jarang melihat sesuatu hanya dari satu sudut pandang dan sering menemukan alternatif yang tidak terpikirkan oleh orang lain.`,

Procedures:`Anda berpikir secara sistematis dan bertahap. Anda lebih nyaman ketika terdapat langkah yang jelas dan urutan yang logis dalam memahami sesuatu.`,

BigPicture:`Anda memiliki kemampuan alami melihat pola, arah, dan gambaran besar. Anda sering memahami inti sebuah situasi lebih cepat dibanding kebanyakan orang.`,

Detail:`Anda memperhatikan rincian yang sering terlewat oleh orang lain. Ketelitian menjadi salah satu kekuatan utama Anda dalam menganalisis situasi.`,

Matching:`Anda cenderung melihat kesamaan, keterhubungan, dan pola yang konsisten. Hal ini membantu Anda memahami hubungan antar informasi dengan cepat.`,

Mismatching:`Anda secara alami lebih mudah menemukan perbedaan, ketidaksesuaian, atau area yang perlu diperbaiki. Pola ini membuat Anda unggul dalam evaluasi.`,

Self:`Saat berpikir, Anda cenderung mempertimbangkan dampaknya terhadap kebutuhan, tujuan, dan kepentingan pribadi terlebih dahulu.`,

Others:`Pola pikir Anda sering mempertimbangkan dampak terhadap orang lain. Anda relatif mudah memahami sudut pandang dan kebutuhan orang di sekitar.`,

Proactive:`Anda cenderung berpikir sambil bergerak. Ide sering muncul ketika Anda mulai bertindak dibanding hanya menganalisis.`,

Reactive:`Anda lebih nyaman mengamati, memahami situasi, dan mempertimbangkan berbagai faktor sebelum bertindak.`,

General:`Anda lebih suka memahami konsep utama terlebih dahulu dibanding langsung masuk ke rincian teknis.`,

Specific:`Anda lebih nyaman memahami informasi secara rinci, spesifik, dan lengkap sebelum menarik kesimpulan.`,

Sameness:`Anda cenderung mencari pola yang stabil dan konsisten. Pikiran Anda lebih mudah mengenali hal-hal yang tetap dan berulang.`,

Difference:`Anda lebih cepat menyadari perubahan, variasi, dan hal-hal baru yang muncul dalam suatu situasi.`,

Past:`Pikiran Anda sering menggunakan pengalaman masa lalu sebagai referensi utama dalam memahami situasi saat ini.`,

Present:`Anda lebih fokus pada apa yang sedang terjadi sekarang dibanding terlalu lama memikirkan masa lalu atau masa depan.`,

Future:`Anda memiliki kecenderungan memikirkan kemungkinan, arah, dan konsekuensi jangka panjang dari sebuah keputusan.`,

Independent:`Anda cenderung berpikir secara mandiri dan nyaman membangun kesimpulan sendiri tanpa banyak bergantung pada orang lain.`,

Cooperative:`Anda senang mengembangkan pemikiran melalui diskusi, kolaborasi, dan pertukaran ide dengan orang lain.`,

People:`Perhatian Anda banyak tertuju pada manusia, hubungan, dan dinamika sosial dalam sebuah situasi.`,

Task:`Anda lebih fokus pada tujuan, target, proses kerja, dan hasil yang perlu dicapai.`,

Possibility:`Pikiran Anda mudah tertarik pada peluang, inovasi, dan berbagai kemungkinan yang dapat diwujudkan.`,

Necessity:`Anda lebih sering mempertimbangkan kewajiban, tanggung jawab, dan hal-hal yang memang harus dilakukan.`

},


DECISION_STYLE:{

Toward:`Dalam mengambil keputusan, Anda lebih fokus pada manfaat, peluang, dan hasil yang ingin dicapai dibanding risiko yang ingin dihindari.`,

Away:`Dalam mengambil keputusan, Anda cenderung mempertimbangkan risiko, hambatan, dan potensi masalah yang mungkin muncul terlebih dahulu.`,

Internal:`Anda memiliki kepercayaan yang kuat terhadap penilaian pribadi dan relatif tidak bergantung pada validasi eksternal sebelum menentukan keputusan.`,

External:`Anda menghargai masukan, saran, dan perspektif orang lain sebagai bahan pertimbangan sebelum mengambil keputusan penting.`,

Options:`Anda suka mempertimbangkan berbagai alternatif sebelum menentukan pilihan yang dirasa paling sesuai.`,

Procedures:`Anda lebih nyaman mengambil keputusan berdasarkan proses, aturan, atau langkah yang jelas dan terstruktur.`,

BigPicture:`Anda lebih mempertimbangkan dampak jangka panjang dibanding manfaat jangka pendek dalam mengambil keputusan.`,

Detail:`Anda cenderung mengumpulkan informasi secara rinci sebelum merasa cukup yakin untuk menentukan pilihan.`,

Matching:`Anda lebih mudah memilih sesuatu yang sesuai dengan pengalaman, nilai, atau pola yang sudah terbukti berhasil sebelumnya.`,

Mismatching:`Anda cenderung menghindari pilihan yang terlihat memiliki kelemahan atau ketidaksesuaian yang signifikan.`,

Self:`Keputusan Anda banyak dipengaruhi oleh tujuan, kebutuhan, dan kepentingan pribadi yang ingin dicapai.`,

Others:`Anda sering mempertimbangkan dampak keputusan terhadap orang lain sebelum menentukan langkah yang akan diambil.`,

Proactive:`Anda cenderung mengambil keputusan dengan cepat dan lebih nyaman belajar dari pengalaman setelah bertindak.`,

Reactive:`Anda lebih suka mempertimbangkan berbagai faktor terlebih dahulu sebelum menentukan keputusan.`,

General:`Anda lebih fokus pada arah besar dan manfaat utama dibanding rincian teknis dalam proses pengambilan keputusan.`,

Specific:`Anda lebih percaya diri mengambil keputusan setelah memahami detail, data, dan fakta yang relevan.`,

Sameness:`Anda lebih nyaman memilih opsi yang memberikan stabilitas, konsistensi, dan kepastian.`,

Difference:`Anda lebih tertarik pada keputusan yang membawa perubahan, pembaruan, atau pengalaman baru.`,

Past:`Anda sering menggunakan pengalaman masa lalu sebagai referensi utama ketika mengambil keputusan.`,

Present:`Anda lebih mempertimbangkan kondisi nyata yang sedang terjadi saat ini dibanding faktor lain.`,

Future:`Anda mempertimbangkan konsekuensi dan dampak jangka panjang sebelum menentukan pilihan.`,

Independent:`Anda nyaman mengambil keputusan secara mandiri dan bertanggung jawab atas hasilnya.`,

Cooperative:`Anda lebih nyaman menentukan keputusan setelah berdiskusi dan mendapatkan masukan dari pihak lain.`,

People:`Anda mempertimbangkan aspek hubungan, perasaan, dan kebutuhan manusia dalam proses pengambilan keputusan.`,

Task:`Anda lebih fokus pada efektivitas, target, dan hasil yang ingin dicapai ketika mengambil keputusan.`,

Possibility:`Anda tertarik pada keputusan yang membuka peluang, potensi, dan kemungkinan baru.`,

Necessity:`Anda lebih mudah memutuskan sesuatu ketika ada kewajiban, tanggung jawab, atau kebutuhan yang jelas untuk dipenuhi.`

},



WORK_STYLE:{

Toward:`Anda bekerja dengan energi tinggi ketika memiliki target yang jelas dan menarik untuk dicapai. Semakin besar tujuan yang ingin diraih, biasanya semakin tinggi motivasi kerja Anda.`,

Away:`Anda bekerja paling baik ketika mengetahui risiko, kesalahan, atau masalah yang perlu dicegah. Kualitas kerja Anda meningkat ketika ada standar yang harus dijaga.`,

Internal:`Anda mampu bekerja secara mandiri dan tidak membutuhkan banyak pengawasan. Anda cenderung memiliki standar kualitas pribadi yang kuat.`,

External:`Anda berkembang ketika mendapatkan umpan balik, arahan, apresiasi, atau dukungan dari lingkungan kerja.`,

Options:`Anda menyukai fleksibilitas dalam menentukan cara kerja. Kebebasan untuk mencoba pendekatan baru biasanya meningkatkan kreativitas dan motivasi Anda.`,

Procedures:`Anda bekerja paling efektif ketika memiliki sistem, langkah kerja, dan prosedur yang jelas untuk diikuti.`,

BigPicture:`Anda lebih tertarik pada tujuan besar, arah organisasi, dan dampak jangka panjang dibanding aktivitas teknis sehari-hari.`,

Detail:`Anda unggul dalam pekerjaan yang membutuhkan akurasi, ketelitian, dan perhatian terhadap rincian.`,

Matching:`Anda bekerja dengan baik dalam lingkungan yang stabil dan memiliki pola kerja yang konsisten.`,

Mismatching:`Anda memiliki kemampuan menemukan kesalahan, ketidaksesuaian, dan area yang perlu diperbaiki dalam pekerjaan.`,

Self:`Anda termotivasi ketika pekerjaan mendukung pencapaian tujuan pribadi dan pengembangan diri Anda.`,

Others:`Anda lebih bersemangat ketika pekerjaan memberi manfaat bagi orang lain atau lingkungan sekitar.`,

Proactive:`Anda lebih nyaman bekerja dengan bergerak cepat, mengambil inisiatif, dan langsung bertindak.`,

Reactive:`Anda lebih efektif ketika memiliki waktu untuk mengamati, memahami situasi, dan merencanakan langkah yang tepat.`,

General:`Anda lebih fokus pada tujuan utama dibanding detail-detail kecil dalam pekerjaan sehari-hari.`,

Specific:`Anda menyukai pekerjaan yang membutuhkan kejelasan, rincian, dan informasi yang lengkap.`,

Sameness:`Anda berkembang dalam lingkungan kerja yang stabil, konsisten, dan dapat diprediksi.`,

Difference:`Anda berkembang ketika menghadapi variasi, tantangan baru, dan perubahan yang dinamis.`,

Past:`Anda sering menggunakan pengalaman sebelumnya sebagai referensi dalam menyelesaikan pekerjaan.`,

Present:`Anda fokus pada tugas dan kebutuhan yang sedang berlangsung saat ini.`,

Future:`Anda termotivasi oleh visi jangka panjang dan peluang pengembangan di masa depan.`,

Independent:`Anda nyaman bekerja sendiri dan memiliki kemampuan mengelola tanggung jawab secara mandiri.`,

Cooperative:`Anda berkembang ketika dapat berkolaborasi, berdiskusi, dan bekerja bersama tim.`,

People:`Anda lebih menikmati pekerjaan yang melibatkan interaksi, komunikasi, dan pengembangan hubungan dengan orang lain.`,

Task:`Anda lebih fokus pada pencapaian target, produktivitas, dan penyelesaian pekerjaan secara efektif.`,

Possibility:`Anda termotivasi oleh peluang baru, ide segar, dan kemungkinan pengembangan yang dapat dicapai.`,

Necessity:`Anda bekerja dengan baik ketika memiliki tanggung jawab, kewajiban, atau target yang harus dipenuhi.`

},



COMMUNICATION_STYLE:{

Toward:`Anda lebih suka berbicara mengenai peluang, tujuan, solusi, dan hal-hal positif yang dapat dicapai dibanding membahas masalah terlalu lama.`,

Away:`Anda sering mengingatkan orang lain mengenai risiko, hambatan, dan hal-hal yang perlu diperhatikan agar tidak terjadi kesalahan.`,

Internal:`Anda berkomunikasi dengan keyakinan yang kuat terhadap apa yang Anda yakini benar. Pendapat yang Anda sampaikan biasanya lahir dari penilaian pribadi yang matang.`,

External:`Anda terbuka terhadap masukan dan senang mendengar perspektif orang lain dalam percakapan.`,

Options:`Anda senang bertukar ide, membahas berbagai kemungkinan, dan mengeksplorasi alternatif yang dapat dicoba.`,

Procedures:`Anda cenderung menjelaskan sesuatu secara sistematis, bertahap, dan mudah diikuti.`,

BigPicture:`Anda lebih sering berbicara tentang visi, arah, peluang, dan konsep besar dibanding rincian teknis.`,

Detail:`Anda menyampaikan informasi secara rinci dan spesifik agar tidak terjadi salah pengertian.`,

Matching:`Anda mudah menemukan titik temu dan membangun hubungan yang harmonis dengan orang lain.`,

Mismatching:`Anda sering menunjukkan area yang kurang tepat atau yang masih dapat diperbaiki untuk meningkatkan kualitas hasil.`,

Self:`Dalam komunikasi, Anda cenderung menyampaikan kebutuhan, pandangan, dan tujuan pribadi secara cukup jelas.`,

Others:`Anda memiliki kecenderungan menjadi pendengar yang baik dan memperhatikan kebutuhan lawan bicara.`,

Proactive:`Anda berbicara dengan cepat, langsung pada inti, dan sering mengambil inisiatif dalam percakapan.`,

Reactive:`Anda lebih banyak mengamati, mendengarkan, dan mempertimbangkan informasi sebelum memberikan tanggapan.`,

General:`Anda menyukai komunikasi yang ringkas, sederhana, dan langsung pada inti pembahasan.`,

Specific:`Anda lebih nyaman memberikan penjelasan yang lengkap, rinci, dan mendalam.`,

Sameness:`Anda cenderung membangun hubungan melalui kesamaan pengalaman, nilai, dan kebiasaan yang dimiliki bersama.`,

Difference:`Anda sering membawa perspektif baru dan menunjukkan sudut pandang yang berbeda dalam percakapan.`,

Past:`Anda sering menggunakan pengalaman masa lalu, cerita, dan pembelajaran sebelumnya sebagai bagian dari komunikasi.`,

Present:`Anda lebih fokus membahas situasi yang sedang berlangsung dan kebutuhan yang sedang dihadapi saat ini.`,

Future:`Anda senang membicarakan rencana, peluang, visi, dan kemungkinan yang akan terjadi di masa depan.`,

Independent:`Anda menyampaikan pendapat dengan mandiri dan tidak mudah terpengaruh oleh tekanan sosial dalam komunikasi.`,

Cooperative:`Anda senang berdiskusi, bertukar pikiran, dan membangun pemahaman bersama dengan orang lain.`,

People:`Anda berkomunikasi dengan hangat, empatik, dan memperhatikan hubungan interpersonal.`,

Task:`Anda berkomunikasi secara langsung, fokus pada tujuan, dan berorientasi pada penyelesaian masalah.`,

Possibility:`Anda sering mengajak orang lain melihat peluang, potensi, dan kemungkinan yang dapat dikembangkan.`,

Necessity:`Anda lebih sering membahas tanggung jawab, kewajiban, dan hal-hal yang perlu diselesaikan.`

},

LEADERSHIP_STYLE:{

Toward:`
Anda memiliki kecenderungan menjadi pemimpin yang mampu menggerakkan orang menuju tujuan, peluang, dan hasil yang lebih besar. Fokus Anda adalah membantu tim melihat apa yang bisa dicapai.
`,

Away:`
Anda cenderung menjadi pemimpin yang waspada terhadap risiko dan berupaya melindungi tim dari potensi masalah yang dapat menghambat keberhasilan.
`,

Internal:`
Anda memiliki keberanian mengambil keputusan dan mempertahankan prinsip yang diyakini benar meskipun menghadapi tekanan dari luar.
`,

External:`
Anda membangun kepemimpinan melalui keterlibatan, masukan, dan partisipasi orang lain dalam proses pengambilan keputusan.
`,

Options:`
Anda membawa kreativitas, inovasi, dan ide-ide baru dalam memimpin maupun menyelesaikan masalah.
`,

Procedures:`
Anda memimpin melalui sistem, standar kerja, dan proses yang jelas sehingga tim memiliki arah yang terstruktur.
`,

BigPicture:`
Anda memiliki kemampuan membangun visi dan membantu orang lain memahami arah jangka panjang yang ingin dicapai.
`,

Detail:`
Anda memastikan kualitas pelaksanaan melalui perhatian terhadap detail dan pengawasan yang cermat.
`,

Matching:`
Anda mampu menjaga kekompakan tim dengan membangun kesamaan nilai, tujuan, dan budaya kerja.
`,

Mismatching:`
Anda membantu tim berkembang dengan mengidentifikasi area yang perlu diperbaiki dan ditingkatkan.
`,

Self:`
Anda memimpin dengan keyakinan terhadap tujuan dan prinsip pribadi yang kuat.
`,

Others:`
Anda membangun kepemimpinan melalui kepedulian terhadap kebutuhan dan perkembangan anggota tim.
`,

Proactive:`
Anda cenderung menjadi pemimpin yang cepat mengambil tindakan dan mendorong tim untuk segera bergerak.
`,

Reactive:`
Anda lebih banyak mengamati, menganalisis, dan mempertimbangkan berbagai faktor sebelum mengambil langkah.
`,

General:`
Anda memimpin dengan fokus pada arah besar, visi, dan tujuan utama organisasi.
`,

Specific:`
Anda memastikan setiap anggota tim memahami detail tugas, standar, dan ekspektasi yang harus dicapai.
`,

Sameness:`
Anda menjaga stabilitas, konsistensi, dan keberlangsungan sistem yang sudah berjalan baik.
`,

Difference:`
Anda menjadi penggerak perubahan dan mendorong inovasi untuk meningkatkan kualitas organisasi.
`,

Past:`
Anda sering menggunakan pengalaman dan pembelajaran masa lalu sebagai dasar dalam memimpin tim.
`,

Present:`
Anda fokus pada kebutuhan, tantangan, dan prioritas yang sedang dihadapi saat ini.
`,

Future:`
Anda mampu menginspirasi orang lain melalui visi dan arah masa depan yang jelas.
`,

Independent:`
Anda memimpin dengan tingkat kemandirian yang tinggi dan mampu mengambil tanggung jawab besar secara langsung.
`,

Cooperative:`
Anda membangun kepemimpinan melalui kerja sama, kolaborasi, dan keterlibatan aktif seluruh anggota tim.
`,

People:`
Anda memimpin melalui hubungan, empati, komunikasi, dan pengembangan manusia.
`,

Task:`
Anda memimpin dengan fokus pada target, produktivitas, pencapaian hasil, dan efektivitas kerja.
`,

Possibility:`
Anda menginspirasi orang lain untuk melihat peluang baru dan berani mengejar potensi yang lebih besar.
`,

Necessity:`
Anda memimpin dengan menekankan tanggung jawab, komitmen, dan penyelesaian kewajiban secara konsisten.
`

},

BLINDSPOT:{

Toward:`
Terlalu fokus pada peluang dan tujuan sehingga terkadang mengabaikan risiko, hambatan, atau konsekuensi yang perlu diperhitungkan.
`,

Away:`
Terlalu fokus pada risiko sehingga terkadang kehilangan peluang yang sebenarnya layak dicoba.
`,

Internal:`
Kadang terlalu yakin terhadap penilaian pribadi sehingga kurang terbuka terhadap masukan yang sebenarnya bermanfaat.
`,

External:`
Terlalu bergantung pada pendapat orang lain sehingga dapat memperlambat pengambilan keputusan.
`,

Options:`
Mudah tertarik pada ide baru sehingga berisiko kehilangan fokus terhadap prioritas utama.
`,

Procedures:`
Sulit beradaptasi ketika menghadapi perubahan mendadak atau situasi yang tidak memiliki struktur yang jelas.
`,

BigPicture:`
Sering melihat gambaran besar tetapi melewatkan detail penting yang memengaruhi hasil akhir.
`,

Detail:`
Terlalu fokus pada rincian sehingga kehilangan arah besar atau tujuan utama yang ingin dicapai.
`,

Matching:`
Terlalu fokus pada kesamaan sehingga kurang peka terhadap kebutuhan perubahan dan inovasi.
`,

Mismatching:`
Terlalu fokus melihat kekurangan sehingga dapat terlihat kritis, sulit puas, atau kurang apresiatif.
`,

Self:`
Terkadang terlalu berfokus pada kebutuhan dan tujuan pribadi sehingga kurang mempertimbangkan dampaknya terhadap orang lain.
`,

Others:`
Terlalu memikirkan kebutuhan orang lain hingga mengabaikan kebutuhan diri sendiri.
`,

Proactive:`
Terlalu cepat bertindak sehingga terkadang kurang mempertimbangkan informasi atau risiko yang tersedia.
`,

Reactive:`
Terlalu lama menganalisis sehingga kehilangan momentum untuk bertindak.
`,

General:`
Mudah memahami konsep besar tetapi terkadang mengabaikan rincian yang penting dalam pelaksanaan.
`,

Specific:`
Terlalu tenggelam dalam detail sehingga proses menjadi lambat atau kurang efisien.
`,

Sameness:`
Kurang nyaman terhadap perubahan sehingga berisiko tertinggal ketika lingkungan berkembang.
`,

Difference:`
Mudah bosan terhadap rutinitas sehingga sulit mempertahankan konsistensi jangka panjang.
`,

Past:`
Terlalu sering merujuk pengalaman masa lalu sehingga kurang terbuka terhadap pendekatan baru.
`,

Present:`
Terlalu fokus pada kondisi saat ini sehingga kurang memperhatikan dampak jangka panjang.
`,

Future:`
Terlalu fokus pada masa depan sehingga kurang menikmati dan mengelola realitas saat ini.
`,

Independent:`
Terlalu mengandalkan diri sendiri sehingga enggan meminta bantuan atau berkolaborasi.
`,

Cooperative:`
Terlalu bergantung pada diskusi dan kesepakatan sehingga pengambilan keputusan menjadi lambat.
`,

People:`
Terlalu memperhatikan hubungan dan perasaan sehingga terkadang mengorbankan produktivitas atau target.
`,

Task:`
Terlalu fokus pada hasil sehingga dapat mengabaikan kebutuhan emosional dan hubungan interpersonal.
`,

Possibility:`
Memiliki banyak ide dan peluang tetapi berisiko kurang fokus pada eksekusi yang konsisten.
`,

Necessity:`
Terlalu fokus pada kewajiban sehingga kurang melihat peluang baru yang sebenarnya bermanfaat.
`

},

DEVELOPMENT:{

Toward:`
Latih kemampuan mengevaluasi risiko sebelum mengambil keputusan penting agar antusiasme Anda tetap diimbangi dengan perhitungan yang matang.
`,

Away:`
Latih kemampuan melihat peluang dan manfaat yang mungkin diperoleh, bukan hanya risiko yang perlu dihindari.
`,

Internal:`
Perluas perspektif dengan lebih aktif menerima umpan balik dan sudut pandang dari orang lain.
`,

External:`
Bangun kepercayaan yang lebih kuat terhadap penilaian dan keputusan pribadi tanpa selalu membutuhkan validasi eksternal.
`,

Options:`
Bangun kebiasaan menyelesaikan satu prioritas sebelum memulai prioritas baru agar ide-ide yang dimiliki benar-benar menghasilkan dampak.
`,

Procedures:`
Tingkatkan fleksibilitas dan kemampuan beradaptasi ketika menghadapi perubahan atau situasi yang tidak terstruktur.
`,

BigPicture:`
Perkuat perhatian terhadap detail dan kualitas implementasi agar visi besar dapat diwujudkan secara nyata.
`,

Detail:`
Biasakan melihat gambaran besar dan tujuan utama sebelum tenggelam dalam rincian teknis.
`,

Matching:`
Latih kemampuan melihat kebutuhan perubahan dan area yang perlu ditingkatkan tanpa kehilangan sikap positif.
`,

Mismatching:`
Seimbangkan kemampuan evaluasi dengan apresiasi terhadap hal-hal yang sudah berjalan baik.
`,

Self:`
Tingkatkan sensitivitas terhadap kebutuhan dan perspektif orang lain agar keputusan menjadi lebih seimbang.
`,

Others:`
Belajar menetapkan batasan yang sehat dan memperhatikan kebutuhan diri sendiri tanpa merasa bersalah.
`,

Proactive:`
Biasakan melakukan evaluasi singkat sebelum bertindak agar keputusan yang diambil lebih efektif.
`,

Reactive:`
Latih kemampuan mengambil keputusan lebih cepat ketika informasi yang tersedia sudah cukup memadai.
`,

General:`
Perkuat kemampuan memperhatikan detail-detail penting yang memengaruhi kualitas hasil akhir.
`,

Specific:`
Latih kemampuan menyederhanakan informasi dan fokus pada hal-hal yang paling penting.
`,

Sameness:`
Mulailah membuka diri terhadap perubahan kecil secara bertahap untuk meningkatkan kemampuan adaptasi.
`,

Difference:`
Bangun disiplin dan konsistensi agar ide-ide baru dapat diwujudkan hingga menghasilkan hasil nyata.
`,

Past:`
Gunakan pengalaman masa lalu sebagai pelajaran tanpa membiarkannya membatasi kemungkinan baru.
`,

Present:`
Mulailah membangun kebiasaan merencanakan tujuan dan strategi jangka panjang.
`,

Future:`
Belajar menikmati proses saat ini dan memastikan langkah harian tetap sejalan dengan visi besar yang dimiliki.
`,

Independent:`
Perkuat kemampuan kolaborasi dan delegasi agar hasil yang dicapai dapat lebih besar dan berkelanjutan.
`,

Cooperative:`
Bangun keberanian mengambil keputusan secara mandiri ketika situasi menuntut kecepatan dan ketegasan.
`,

People:`
Latih keseimbangan antara empati dan ketegasan agar hubungan tetap terjaga tanpa mengorbankan hasil.
`,

Task:`
Tingkatkan kemampuan memahami kebutuhan emosional dan membangun hubungan yang lebih hangat dengan orang lain.
`,

Possibility:`
Perkuat fokus, disiplin, dan kemampuan eksekusi agar peluang yang terlihat dapat diwujudkan menjadi hasil nyata.
`,

Necessity:`
Latih kemampuan melihat peluang baru dan keluar dari zona nyaman tanpa kehilangan rasa tanggung jawab.
`

}


};

// --- NarrativeEngineRemaja.js ---
const NarrativeEngineRemaja = {

THINKING_STYLE:{

Toward:`Kamu cenderung memusatkan perhatian pada tujuan, impian, dan hal-hal positif yang ingin dicapai. Saat menghadapi tantangan di sekolah, organisasi, maupun kehidupan sehari-hari, pikiranmu lebih sering mencari peluang untuk berhasil daripada memikirkan hambatan. Pola ini membuatmu lebih mudah termotivasi untuk mencoba, berkembang, dan terus bergerak menuju cita-cita yang kamu inginkan.`,

Away:`Kamu memiliki kebiasaan berpikir dengan penuh pertimbangan. Sebelum mengambil keputusan, kamu biasanya memikirkan risiko, kesalahan, atau masalah yang mungkin terjadi. Sikap ini membantumu lebih berhati-hati sehingga mampu mengurangi kemungkinan melakukan kesalahan yang sebenarnya bisa dihindari.`,

Internal:`Kamu memiliki kepercayaan yang cukup kuat terhadap penilaian diri sendiri. Sebelum mengikuti pendapat teman, guru, atau orang lain, biasanya kamu akan mempertimbangkannya terlebih dahulu berdasarkan keyakinan dan pemikiranmu sendiri. Hal ini membuatmu lebih mandiri dalam menentukan pilihan.`,

External:`Kamu terbuka terhadap saran, masukan, dan pendapat dari orang-orang di sekitarmu. Kamu percaya bahwa guru, orang tua, teman, atau mentor dapat memberikan sudut pandang yang membantu melihat suatu masalah dengan lebih lengkap. Karena itu, kamu cukup nyaman belajar dari pengalaman maupun masukan orang lain.`,

Options:`Kamu senang mengeksplorasi berbagai kemungkinan. Ketika menghadapi tugas, tantangan, atau sebuah masalah, biasanya kamu mampu memikirkan beberapa alternatif solusi sekaligus. Kreativitas ini membuatmu lebih mudah menemukan cara baru yang menarik dibanding hanya terpaku pada satu pilihan saja.`,

Procedures:`Kamu lebih nyaman memahami sesuatu melalui langkah-langkah yang jelas dan terstruktur. Saat belajar, mengerjakan tugas, atau mempelajari keterampilan baru, kamu cenderung mengikuti urutan yang sistematis agar lebih mudah dipahami dan menghasilkan hasil yang maksimal.`,

BigPicture:`Kamu memiliki kemampuan melihat gambaran besar sebelum memikirkan hal-hal yang lebih rinci. Saat mempelajari sesuatu, biasanya kamu ingin memahami tujuan utama, manfaat, atau konsep besarnya terlebih dahulu. Cara berpikir ini membantumu lebih cepat memahami arah dari apa yang sedang dipelajari.`,

Detail:`Kamu memiliki perhatian yang baik terhadap rincian. Hal-hal kecil yang sering tidak disadari orang lain justru mudah kamu perhatikan. Ketelitian ini membantumu memahami informasi dengan lebih lengkap, mengurangi kesalahan, serta menghasilkan pekerjaan atau tugas yang lebih rapi dan akurat.`,

Matching:`Kamu cenderung lebih mudah menemukan persamaan, hubungan, dan pola yang saling berkaitan. Saat belajar atau menghadapi situasi baru, kamu sering menghubungkan informasi yang baru dengan pengalaman atau pengetahuan yang sudah dimiliki. Kemampuan ini membantumu memahami materi lebih cepat dan membangun pemahaman yang lebih utuh.`,

Mismatching:`Kamu secara alami lebih cepat menemukan perbedaan, ketidaksesuaian, atau hal-hal yang menurutmu masih bisa diperbaiki. Saat melihat suatu pekerjaan, tugas, atau situasi, perhatianmu sering tertuju pada bagian yang belum tepat. Kemampuan ini membuatmu cukup baik dalam mengevaluasi, memberikan masukan, dan menemukan peluang untuk meningkatkan kualitas hasil.`,

Self:`Saat memikirkan sesuatu, kamu biasanya mempertimbangkan terlebih dahulu apakah hal tersebut sesuai dengan kebutuhan, tujuan, atau nilai yang kamu yakini. Cara berpikir ini membuatmu lebih mengenal apa yang benar-benar penting bagi dirimu dan membantu mengambil keputusan yang sesuai dengan prinsip pribadi.`,

Others:`Kamu sering mempertimbangkan bagaimana tindakan atau keputusanmu akan memengaruhi orang lain. Saat berpikir, kamu tidak hanya memikirkan dirimu sendiri, tetapi juga mencoba memahami kebutuhan, perasaan, atau sudut pandang teman, keluarga, maupun orang-orang di sekitarmu. Hal ini membuatmu lebih mudah membangun hubungan yang baik dengan orang lain.`,

Proactive:`Kamu cenderung mendapatkan ide ketika mulai bertindak. Daripada terlalu lama memikirkan berbagai kemungkinan, kamu lebih memilih mencoba terlebih dahulu lalu belajar dari pengalaman yang didapat. Cara berpikir ini membuatmu lebih berani mengambil inisiatif dan tidak mudah menunda tindakan.`,

Reactive:`Kamu lebih nyaman mengamati keadaan sebelum bertindak. Biasanya kamu ingin memahami situasi, mengumpulkan informasi, dan mempertimbangkan berbagai kemungkinan terlebih dahulu. Setelah merasa cukup yakin, barulah kamu melangkah dengan lebih percaya diri dan penuh pertimbangan.`,

General:`Kamu lebih suka memahami inti atau konsep utama terlebih dahulu sebelum mempelajari rincian yang lebih mendalam. Ketika belajar, kamu ingin mengetahui gambaran besarnya agar lebih mudah memahami hubungan antar materi. Cara ini membantumu melihat arah pembelajaran dengan lebih jelas.`,

Specific:`Kamu merasa lebih nyaman ketika mendapatkan informasi yang lengkap, rinci, dan jelas. Semakin banyak detail yang kamu pahami, biasanya semakin mudah bagimu untuk memahami suatu materi atau mengambil kesimpulan. Ketelitian ini membuatmu lebih percaya diri dalam belajar maupun menyelesaikan tugas.`,

Sameness:`Kamu cenderung menyukai hal-hal yang konsisten, teratur, dan memiliki pola yang jelas. Rutinitas yang stabil membuatmu lebih mudah berkonsentrasi dan merasa nyaman. Kamu juga lebih cepat mengenali hal-hal yang tetap atau tidak banyak berubah dalam suatu situasi.`,

Difference:`Kamu mudah tertarik pada hal-hal baru, perubahan, dan pengalaman yang berbeda. Saat menghadapi situasi baru, rasa ingin tahumu mendorongmu untuk mencoba, belajar, dan menemukan cara yang lebih baik. Variasi membuatmu lebih bersemangat dan tidak mudah merasa bosan.`,

Past:`Kamu sering menggunakan pengalaman yang pernah dialami sebagai bahan pertimbangan ketika menghadapi situasi yang serupa. Pengalaman, keberhasilan, maupun kesalahan di masa lalu menjadi pelajaran berharga yang membantumu mengambil keputusan dengan lebih bijaksana.`,

Present:`Kamu lebih fokus pada apa yang sedang terjadi saat ini. Perhatianmu biasanya tertuju pada tugas, aktivitas, atau tantangan yang sedang dihadapi sehingga kamu mampu memberikan energi dan konsentrasi penuh pada hal-hal yang menjadi prioritas saat ini.`,

Future:`Kamu sering memikirkan cita-cita, impian, dan tujuan yang ingin dicapai di masa depan. Sebelum mengambil keputusan, kamu cenderung mempertimbangkan dampaknya terhadap langkah-langkah yang akan membawamu menuju masa depan yang diinginkan. Cara berpikir ini membuatmu lebih mudah memiliki arah dan motivasi dalam berkembang.`,

Independent:`Kamu nyaman membangun pemahaman dan mengambil kesimpulan secara mandiri. Kamu tidak selalu bergantung pada pendapat orang lain untuk menentukan apa yang menurutmu benar. Kemandirian ini membantumu lebih percaya diri dalam belajar, mengambil keputusan, dan bertanggung jawab atas pilihanmu.`,

Cooperative:`Kamu senang belajar melalui diskusi, kerja kelompok, dan bertukar ide dengan orang lain. Mendengarkan berbagai sudut pandang membuatmu memperoleh wawasan baru yang mungkin belum pernah terpikirkan sebelumnya. Kamu juga menikmati proses mencapai tujuan bersama melalui kerja sama yang baik.`,

People:`Perhatianmu lebih banyak tertuju pada manusia dan hubungan dengan orang lain. Kamu senang memahami perasaan, kebutuhan, dan cara berpikir teman maupun orang-orang di sekitarmu. Karena itu, kamu biasanya lebih mudah membangun kedekatan, bekerja sama, dan menciptakan hubungan yang positif.`,

Task:`Kamu lebih fokus pada tugas, target, dan hasil yang ingin dicapai. Ketika memiliki tanggung jawab, pikiranmu akan lebih banyak mencari cara agar pekerjaan dapat diselesaikan dengan baik, tepat waktu, dan memberikan hasil yang memuaskan.`,

Possibility:`Kamu mudah tertarik pada ide-ide baru, peluang, dan berbagai kemungkinan yang dapat dikembangkan. Rasa ingin tahumu membuatmu senang mencoba pengalaman baru serta membayangkan berbagai cara untuk berkembang. Pola pikir ini mendukung kreativitas dan kemampuanmu dalam menemukan solusi yang inovatif.`,

Necessity:`Kamu lebih sering memikirkan apa yang menjadi tanggung jawab dan kewajiban. Sebelum melakukan hal lain, biasanya kamu ingin memastikan tugas atau komitmen yang menjadi tanggung jawabmu telah diselesaikan dengan baik. Sikap ini membantumu menjadi pribadi yang lebih disiplin dan dapat dipercaya.`

},

DECISION_STYLE:{

Toward:`Saat mengambil keputusan, kamu lebih fokus pada manfaat, peluang, dan tujuan yang ingin dicapai. Daripada terlalu memikirkan kemungkinan gagal, kamu lebih termotivasi oleh hasil positif yang dapat diraih. Cara ini membuatmu lebih berani mencoba pengalaman baru dan terus bergerak menuju impianmu.`,

Away:`Saat mengambil keputusan, kamu cenderung mempertimbangkan risiko, hambatan, dan kemungkinan masalah yang dapat terjadi. Kamu ingin memastikan keputusan yang diambil tidak menimbulkan dampak yang merugikan. Sikap ini membantumu menjadi lebih berhati-hati dan mampu mengurangi kesalahan yang sebenarnya bisa dihindari.`,

Internal:`Dalam menentukan pilihan, kamu lebih percaya pada penilaian dan keyakinanmu sendiri. Walaupun tetap mendengarkan pendapat orang lain, keputusan akhir biasanya didasarkan pada apa yang menurutmu paling tepat dan sesuai dengan prinsip yang kamu pegang.`,

External:`Sebelum mengambil keputusan penting, kamu senang mencari masukan dari guru, orang tua, teman, atau orang yang lebih berpengalaman. Berbagai sudut pandang tersebut membantumu merasa lebih yakin sebelum menentukan pilihan yang terbaik.`,

Options:`Kamu senang mempertimbangkan berbagai alternatif sebelum menentukan keputusan. Daripada langsung memilih satu jalan, kamu biasanya ingin melihat beberapa kemungkinan terlebih dahulu agar dapat menemukan pilihan yang paling sesuai dengan kebutuhan dan tujuanmu.`,

Procedures:`Kamu lebih nyaman mengambil keputusan melalui proses yang teratur dan bertahap. Biasanya kamu ingin memahami langkah-langkahnya terlebih dahulu sebelum menentukan pilihan, sehingga keputusan yang diambil terasa lebih terencana dan meyakinkan.`,

BigPicture:`Saat membuat keputusan, kamu lebih memperhatikan tujuan besar dan dampak jangka panjang daripada hanya memikirkan manfaat sesaat. Kamu cenderung memilih sesuatu yang dapat mendukung perkembangan diri dan cita-citamu di masa depan.`,

Detail:`Sebelum memutuskan sesuatu, kamu lebih percaya diri jika sudah memahami informasi secara rinci. Kamu senang mengumpulkan fakta, mencari penjelasan, dan memastikan berbagai hal telah dipahami dengan baik sebelum menentukan pilihan.`,

Matching:`Saat mengambil keputusan, kamu cenderung memilih pilihan yang terasa sesuai dengan pengalaman, nilai, atau cara yang sudah terbukti memberikan hasil yang baik. Kamu merasa lebih yakin ketika keputusan yang diambil memiliki hubungan dengan hal-hal yang sudah kamu kenal atau pernah berhasil dilakukan sebelumnya.`,

Mismatching:`Saat menentukan pilihan, perhatianmu lebih mudah tertuju pada hal-hal yang kurang sesuai atau berpotensi menimbulkan masalah. Kamu cenderung menghindari keputusan yang memiliki banyak kelemahan dan lebih memilih alternatif yang menurutmu memiliki risiko paling kecil. Cara berpikir ini membuatmu cukup teliti sebelum mengambil keputusan penting.`,

Self:`Keputusan yang kamu ambil biasanya dipengaruhi oleh tujuan, kebutuhan, dan perkembangan dirimu sendiri. Kamu cenderung bertanya pada diri sendiri apakah pilihan tersebut benar-benar sesuai dengan apa yang ingin kamu capai. Hal ini membantumu mengambil keputusan yang lebih selaras dengan nilai dan impian pribadimu.`,

Others:`Dalam mengambil keputusan, kamu sering mempertimbangkan dampaknya terhadap orang lain. Kamu memikirkan bagaimana keputusan tersebut akan memengaruhi teman, keluarga, atau orang-orang di sekitarmu. Sikap ini menunjukkan bahwa kamu memiliki kepedulian dan keinginan untuk menjaga hubungan yang baik dengan orang lain.`,

Proactive:`Kamu cenderung mengambil keputusan dengan cukup cepat ketika merasa informasi yang dimiliki sudah memadai. Daripada terlalu lama menunggu, kamu lebih memilih segera bertindak lalu belajar dari pengalaman yang diperoleh. Cara ini membuatmu lebih berani mengambil peluang dan tidak mudah kehilangan momentum.`,

Reactive:`Kamu lebih nyaman mempertimbangkan berbagai informasi sebelum mengambil keputusan. Biasanya kamu ingin memahami situasi dari berbagai sisi agar pilihan yang diambil benar-benar matang. Sikap ini membantumu membuat keputusan yang lebih terukur dan penuh pertimbangan.`,

General:`Saat menentukan pilihan, kamu lebih fokus pada tujuan utama dan manfaat besarnya dibanding terlalu memikirkan rincian kecil. Kamu ingin memastikan bahwa keputusan yang diambil benar-benar mendukung arah dan tujuan yang ingin dicapai.`,

Specific:`Kamu merasa lebih yakin mengambil keputusan setelah memahami detail, fakta, dan informasi yang lengkap. Semakin jelas informasi yang kamu miliki, semakin besar rasa percaya dirimu dalam menentukan pilihan yang menurutmu paling tepat.`,

Sameness:`Kamu cenderung memilih keputusan yang memberikan rasa aman, stabil, dan konsisten. Pilihan yang sudah terbukti berjalan dengan baik biasanya terasa lebih nyaman bagimu dibanding harus mengambil risiko yang belum diketahui hasilnya.`,

Difference:`Kamu cenderung tertarik pada pilihan yang menawarkan pengalaman baru, tantangan, atau cara yang berbeda. Saat mengambil keputusan, kamu sering mempertimbangkan apakah pilihan tersebut dapat membantumu berkembang, belajar hal baru, atau memberikan pengalaman yang lebih menarik. Pola ini membuatmu lebih terbuka terhadap perubahan dan inovasi.`,

Past:`Saat mengambil keputusan, kamu sering menjadikan pengalaman masa lalu sebagai bahan pertimbangan. Keberhasilan maupun kegagalan yang pernah dialami menjadi pelajaran berharga agar keputusan yang diambil saat ini lebih bijaksana dan tidak mengulangi kesalahan yang sama.`,

Present:`Dalam menentukan pilihan, kamu lebih fokus pada kondisi dan kebutuhan yang sedang dihadapi saat ini. Kamu cenderung memilih keputusan yang paling sesuai dengan situasi sekarang sehingga dapat memberikan manfaat yang langsung dirasakan dan membantu menyelesaikan prioritas yang ada.`,

Future:`Saat mengambil keputusan, kamu sering memikirkan dampaknya terhadap masa depan. Kamu mempertimbangkan apakah pilihan tersebut dapat mendukung cita-cita, perkembangan diri, dan kesempatan yang ingin kamu raih di kemudian hari. Cara berpikir ini membuatmu lebih mudah menyusun langkah menuju tujuan jangka panjang.`,

Independent:`Kamu merasa nyaman mengambil keputusan secara mandiri setelah mempertimbangkan berbagai hal yang menurutmu penting. Meskipun tetap menghargai pendapat orang lain, kamu percaya bahwa keputusan terbaik adalah keputusan yang benar-benar kamu pahami dan siap kamu pertanggungjawabkan.`,

Cooperative:`Kamu lebih nyaman mengambil keputusan melalui diskusi dan bertukar pendapat dengan orang lain. Mendengarkan berbagai sudut pandang membantumu melihat pilihan secara lebih luas sehingga keputusan yang diambil terasa lebih matang dan seimbang.`,

People:`Saat menentukan pilihan, kamu sering mempertimbangkan perasaan, kebutuhan, dan hubungan dengan orang lain. Kamu ingin keputusan yang diambil tidak hanya baik untuk dirimu sendiri, tetapi juga memberikan dampak positif bagi teman, keluarga, atau lingkungan sekitarmu. Kepedulian ini membuatmu lebih mudah membangun hubungan yang harmonis.`,

Task:`Dalam mengambil keputusan, perhatianmu lebih banyak tertuju pada tujuan, hasil, dan penyelesaian tanggung jawab. Kamu cenderung memilih langkah yang paling efektif untuk mencapai target sehingga berbagai tugas dapat diselesaikan dengan baik dan tepat waktu.`,

Possibility:`Kamu tertarik pada keputusan yang membuka peluang baru untuk belajar, berkembang, dan mencoba pengalaman yang berbeda. Sebelum memilih, kamu sering membayangkan berbagai kemungkinan positif yang dapat terjadi jika kesempatan tersebut dimanfaatkan dengan baik. Cara berpikir ini membuatmu lebih mudah melihat potensi di balik setiap kesempatan.`,

Necessity:`Kamu lebih mudah menentukan keputusan ketika memahami dengan jelas tanggung jawab atau kewajiban yang harus dipenuhi. Bagimu, menyelesaikan komitmen dan melakukan hal yang memang perlu dilakukan merupakan bagian penting dalam mengambil keputusan yang bertanggung jawab.`

},



LEARNING_STYLE:{

Toward:`Kamu lebih bersemangat belajar ketika memiliki tujuan yang jelas. Mengetahui manfaat dari suatu pelajaran atau bagaimana materi tersebut dapat membantumu meraih cita-cita akan meningkatkan motivasimu. Semakin kamu melihat peluang untuk berkembang, biasanya semakin besar semangatmu dalam belajar.`,

Away:`Kamu terdorong untuk belajar karena ingin menghindari kesalahan, nilai yang kurang baik, atau ketidaksiapan saat menghadapi ujian. Mengetahui apa yang harus diperbaiki membuatmu lebih berhati-hati dan lebih serius mempersiapkan diri sehingga peluang untuk berhasil menjadi lebih besar.`,

Internal:`Kamu lebih percaya pada cara belajarmu sendiri. Setelah menemukan metode yang menurutmu paling efektif, kamu cenderung menggunakannya secara konsisten. Kamu juga lebih mudah memahami materi ketika belajar dengan ritme yang sesuai dengan kenyamananmu.`,

External:`Kamu belajar lebih optimal ketika mendapatkan arahan, penjelasan, atau umpan balik dari guru, orang tua, mentor, maupun teman. Diskusi dan masukan dari orang lain membantumu memahami materi dari sudut pandang yang lebih luas sehingga proses belajarmu menjadi lebih efektif.`,

Options:`Kamu senang mencoba berbagai cara belajar. Kamu tidak terpaku pada satu metode, tetapi suka mengeksplorasi video pembelajaran, diskusi, praktik langsung, membaca, maupun media digital lainnya hingga menemukan cara yang paling menarik dan sesuai untukmu.`,

Procedures:`Kamu lebih mudah memahami materi ketika belajar secara bertahap dan terstruktur. Mengikuti urutan pembelajaran yang jelas membuatmu lebih mudah menghubungkan setiap materi sehingga proses belajar terasa lebih terarah dan tidak membingungkan.`,

BigPicture:`Sebelum mempelajari detail, kamu ingin memahami gambaran besarnya terlebih dahulu. Kamu lebih mudah memahami materi ketika mengetahui tujuan, manfaat, dan hubungan antar topik sehingga setiap pelajaran terasa lebih bermakna bagimu.`,

Detail:`Kamu lebih mudah memahami pelajaran ketika setiap bagian dijelaskan secara rinci. Penjelasan yang lengkap, contoh yang jelas, dan langkah-langkah yang sistematis membuatmu lebih percaya diri dalam memahami materi dan mengerjakan tugas.`,

Matching:`Kamu lebih mudah memahami materi baru ketika dapat menghubungkannya dengan pengetahuan atau pengalaman yang sudah kamu miliki. Semakin banyak hubungan yang dapat kamu temukan, semakin mudah pula kamu mengingat dan memahami pelajaran. Cara belajar ini membantumu membangun pemahaman yang lebih utuh dan tidak sekadar menghafal.`,

Mismatching:`Kamu lebih mudah memahami pelajaran dengan menemukan perbedaan, kesalahan, atau hal-hal yang belum sesuai. Kamu senang membandingkan informasi, mengkritisi isi materi, dan mencari alasan mengapa sesuatu bisa berbeda. Cara belajar ini membuat kemampuan analisismu berkembang dengan baik.`,

Self:`Kamu belajar paling efektif ketika memiliki tujuan yang berasal dari dirimu sendiri. Saat menyadari manfaat suatu pelajaran bagi perkembangan diri atau cita-citamu, motivasi belajarmu akan meningkat secara alami. Kamu juga lebih nyaman menentukan target belajarmu sendiri.`,

Others:`Semangat belajarmu sering muncul ketika kamu merasa apa yang dipelajari dapat membantu orang lain. Kamu juga menikmati belajar bersama, saling berbagi pengetahuan, atau membantu teman yang mengalami kesulitan. Interaksi seperti ini membuat proses belajar terasa lebih menyenangkan dan bermakna.`,

Proactive:`Kamu lebih cepat memahami materi dengan langsung mencoba. Daripada hanya membaca atau mendengarkan penjelasan, kamu lebih suka mengerjakan latihan, praktik, eksperimen, atau langsung memecahkan soal. Bagimu, pengalaman langsung merupakan cara belajar yang paling efektif.`,

Reactive:`Kamu lebih nyaman memahami materi dengan mengamati, mendengarkan, dan memikirkan informasi terlebih dahulu sebelum mulai mencoba. Setelah merasa benar-benar memahami konsepnya, kamu akan lebih percaya diri untuk mempraktikkan atau mengerjakan tugas yang diberikan.`,

General:`Kamu lebih mudah belajar ketika memahami konsep utama terlebih dahulu. Setelah mengetahui inti pembahasan dan hubungan antar materi, barulah kamu merasa lebih siap mempelajari bagian-bagian yang lebih rinci. Pendekatan ini membantumu memahami pelajaran secara lebih menyeluruh.`,

Specific:`Kamu lebih nyaman belajar melalui penjelasan yang rinci, contoh yang lengkap, dan informasi yang jelas. Semakin detail materi yang kamu pelajari, semakin mudah bagimu memahami setiap langkah dan mengurangi kemungkinan terjadinya kesalahan.`,

Sameness:`Kamu belajar lebih optimal melalui kebiasaan dan rutinitas yang konsisten. Memiliki jadwal belajar yang teratur, metode yang sudah terbukti cocok, dan lingkungan belajar yang nyaman membuatmu lebih mudah berkonsentrasi serta mempertahankan semangat belajar dalam jangka panjang.`,

Difference:`Kamu mudah tertarik pada cara belajar yang baru dan berbeda. Menggunakan media, metode, atau pengalaman belajar yang bervariasi membuatmu lebih bersemangat dan tidak mudah merasa bosan. Tantangan baru justru dapat meningkatkan rasa ingin tahu dan mendorongmu untuk terus berkembang.`,

Past:`Kamu sering memanfaatkan pengalaman belajar sebelumnya sebagai bekal untuk memahami materi baru. Keberhasilan maupun kesalahan yang pernah dialami menjadi pelajaran berharga dalam menentukan strategi belajar yang paling efektif untukmu. Cara ini membantumu terus memperbaiki proses belajar dari waktu ke waktu.`,

Present:`Kamu lebih mudah berkonsentrasi ketika fokus pada materi dan tugas yang sedang dihadapi saat ini. Daripada memikirkan terlalu banyak hal sekaligus, kamu lebih nyaman menyelesaikan satu demi satu dengan penuh perhatian. Pendekatan ini membantumu belajar dengan lebih fokus dan terarah.`,

Future:`Semangat belajarmu meningkat ketika mengetahui bahwa apa yang dipelajari akan bermanfaat bagi masa depan. Membayangkan cita-cita, karier, atau impian yang ingin diraih membuatmu lebih termotivasi untuk terus belajar dan mempersiapkan diri sejak sekarang.`,

Independent:`Kamu nyaman belajar secara mandiri dan memiliki kemampuan mengatur proses belajarmu sendiri. Ketika diberikan kepercayaan untuk menentukan target, jadwal, atau cara belajar, kamu cenderung lebih bertanggung jawab dan termotivasi untuk mencapai hasil terbaik.`,

Cooperative:`Kamu belajar lebih optimal melalui diskusi, kerja kelompok, dan bertukar ide dengan orang lain. Mendengarkan penjelasan dari teman atau menjelaskan kembali materi yang telah dipahami membuat pemahamanmu semakin kuat. Proses belajar terasa lebih menyenangkan ketika dilakukan bersama.`,

People:`Kamu lebih bersemangat belajar ketika ada interaksi dengan orang lain. Diskusi di kelas, kerja kelompok, berbagi pengalaman, atau mendapatkan dukungan dari guru dan teman membuatmu lebih mudah memahami materi sekaligus menjaga motivasi belajar tetap tinggi.`,

Task:`Kamu lebih fokus belajar ketika memiliki target yang jelas untuk diselesaikan. Adanya tugas, proyek, latihan soal, atau tujuan yang terukur membantumu tetap disiplin dan termotivasi untuk menyelesaikan setiap tanggung jawab dengan sebaik mungkin.`,

Possibility:`Kamu menikmati pembelajaran yang membuka wawasan baru dan memberikan banyak kemungkinan untuk berkembang. Materi yang menantang imajinasi, mendorong kreativitas, atau mengajakmu berpikir di luar kebiasaan biasanya lebih mudah menarik perhatian dan membuatmu antusias untuk terus belajar.`,

Necessity:`Kamu lebih termotivasi belajar ketika memahami bahwa materi tersebut memang penting dan perlu dikuasai. Mengetahui manfaat, tanggung jawab, atau tujuan yang jelas membuatmu lebih disiplin dalam menyelesaikan proses belajar hingga tuntas.`

},

COMMUNICATION_STYLE:{

Toward:`Kamu lebih suka berbicara tentang harapan, tujuan, peluang, dan solusi dibanding terlalu lama membahas masalah. Saat berdiskusi dengan teman atau guru, kamu cenderung mengarahkan pembicaraan pada hal-hal yang dapat dilakukan untuk mencapai hasil yang lebih baik. Sikap ini membuatmu mampu menyebarkan semangat dan optimisme kepada orang-orang di sekitarmu.`,

Away:`Saat berkomunikasi, kamu sering mengingatkan orang lain tentang hal-hal yang perlu diperhatikan agar tidak terjadi kesalahan. Kamu terbiasa memikirkan risiko dan konsekuensi sebelum memberikan saran atau pendapat. Cara berkomunikasi ini membuatmu terlihat lebih berhati-hati dan peduli terhadap kemungkinan yang dapat terjadi.`,

Internal:`Kamu menyampaikan pendapat berdasarkan keyakinan dan pemahaman yang kamu miliki. Sebelum berbicara, biasanya kamu sudah mempertimbangkan apa yang menurutmu benar sehingga pendapatmu terdengar cukup mantap dan percaya diri. Kamu juga tidak mudah berubah hanya karena tekanan dari lingkungan.`,

External:`Kamu senang mendengarkan pendapat orang lain dan terbuka terhadap berbagai sudut pandang. Dalam percakapan, kamu menikmati proses saling bertukar ide sehingga komunikasi terasa lebih hidup. Sikap ini membuatmu lebih mudah belajar dari pengalaman dan membangun hubungan yang positif dengan orang lain.`,

Options:`Kamu senang berdiskusi tentang berbagai ide, kemungkinan, dan alternatif solusi. Saat berbicara, kamu sering mengajak orang lain melihat lebih dari satu pilihan sehingga percakapan menjadi lebih kreatif dan terbuka terhadap berbagai peluang.`,

Procedures:`Kamu cenderung menjelaskan sesuatu secara runtut dan mudah diikuti. Saat menceritakan pengalaman, menjelaskan pelajaran, atau menyampaikan pendapat, kamu lebih nyaman menggunakan urutan yang jelas sehingga lawan bicara lebih mudah memahami maksudmu.`,

BigPicture:`Kamu lebih sering membahas tujuan utama, manfaat, atau gambaran besar daripada rincian yang terlalu teknis. Saat menjelaskan sesuatu, kamu ingin orang lain memahami inti pembahasan terlebih dahulu sehingga arah percakapan menjadi lebih jelas.`,

Detail:`Kamu senang memberikan penjelasan yang lengkap dan rinci. Saat berbicara, kamu berusaha menyampaikan informasi secara jelas agar tidak terjadi kesalahpahaman. Ketelitianmu membuat orang lain lebih mudah memahami apa yang ingin kamu sampaikan.`,

Matching:`Kamu lebih mudah membangun komunikasi dengan menemukan kesamaan pengalaman, minat, atau tujuan dengan lawan bicara. Kamu senang menciptakan suasana yang akrab dan membuat orang lain merasa nyaman ketika berbicara denganmu. Kemampuan ini membantumu menjalin hubungan yang lebih dekat dan membangun kerja sama yang baik.`,

Mismatching:`Kamu cenderung lebih cepat menyadari hal-hal yang kurang tepat atau berbeda dalam sebuah pembicaraan. Saat berdiskusi, kamu tidak ragu menyampaikan pendapat atau memberikan masukan jika merasa ada sesuatu yang perlu diluruskan atau diperbaiki. Cara ini membuatmu mampu melihat sisi yang mungkin belum disadari oleh orang lain.`,

Self:`Saat berkomunikasi, kamu cukup terbuka dalam menyampaikan pendapat, kebutuhan, maupun apa yang kamu pikirkan. Kamu merasa penting untuk mengungkapkan apa yang kamu yakini sehingga orang lain dapat memahami sudut pandangmu dengan lebih jelas.`,

Others:`Dalam berkomunikasi, kamu lebih banyak memperhatikan kebutuhan dan perasaan lawan bicara. Kamu berusaha menjadi pendengar yang baik serta memberikan tanggapan yang membuat orang lain merasa dihargai dan dipahami. Sikap ini membuatmu lebih mudah membangun hubungan yang hangat dan saling percaya.`,

Proactive:`Kamu cenderung aktif memulai percakapan dan tidak ragu menyampaikan ide atau pertanyaan. Saat berdiskusi, kamu lebih suka langsung membahas inti pembicaraan dan mendorong percakapan agar terus berjalan. Sikap ini membuatmu terlihat percaya diri dan penuh inisiatif.`,

Reactive:`Kamu lebih nyaman mendengarkan dan memahami pembicaraan terlebih dahulu sebelum memberikan tanggapan. Setelah merasa cukup memahami situasinya, barulah kamu menyampaikan pendapat dengan tenang dan penuh pertimbangan. Cara ini membuat setiap ucapanmu biasanya lebih matang dan terarah.`,

General:`Kamu lebih suka menyampaikan inti pembahasan tanpa terlalu banyak membahas rincian. Saat berbicara, kamu ingin lawan bicara segera memahami pesan utama sehingga komunikasi terasa lebih sederhana, ringkas, dan mudah dipahami.`,

Specific:`Kamu lebih nyaman menjelaskan sesuatu secara rinci dan lengkap. Saat bercerita atau menjelaskan materi, kamu berusaha memberikan informasi yang jelas agar orang lain memahami maksudmu tanpa menimbulkan kebingungan atau salah pengertian.`,

Sameness:`Kamu cenderung membangun komunikasi melalui kesamaan pengalaman, nilai, atau kebiasaan yang dimiliki bersama. Menemukan titik kesamaan membuatmu lebih mudah menciptakan suasana yang akrab, nyaman, dan penuh kepercayaan dalam berinteraksi dengan orang lain.`,

Difference:`Kamu senang membawa sudut pandang baru dalam sebuah percakapan. Saat berdiskusi, kamu tidak ragu menyampaikan ide, cara berpikir, atau solusi yang berbeda dari kebanyakan orang. Hal ini membuat percakapan menjadi lebih kaya, mendorong munculnya ide-ide baru, dan membuka wawasan bagi orang-orang di sekitarmu.`,

Past:`Saat berkomunikasi, kamu sering menggunakan pengalaman yang pernah dialami sebagai contoh atau bahan cerita. Pengalaman tersebut membantumu menjelaskan sesuatu dengan lebih mudah dipahami sekaligus memberikan pelajaran yang dapat diambil oleh orang lain.`,

Present:`Kamu lebih fokus membahas apa yang sedang terjadi saat ini. Dalam percakapan, perhatianmu biasanya tertuju pada kebutuhan, situasi, atau tantangan yang sedang dihadapi sehingga komunikasi terasa relevan, praktis, dan mudah diterapkan.`,

Future:`Kamu senang berbicara tentang rencana, impian, tujuan, dan berbagai kemungkinan yang dapat terjadi di masa depan. Saat berdiskusi, kamu sering mengajak orang lain memikirkan langkah-langkah yang dapat dilakukan untuk mencapai tujuan bersama. Cara ini membuatmu mampu menginspirasi dan membangun semangat orang lain.`,

Independent:`Kamu menyampaikan pendapat dengan keyakinan yang berasal dari pemikiranmu sendiri. Walaupun tetap menghargai pendapat orang lain, kamu tidak mudah berubah hanya karena tekanan dari lingkungan. Sikap ini membuatmu terlihat mandiri dan percaya diri dalam menyampaikan pandangan.`,

Cooperative:`Kamu menikmati komunikasi yang melibatkan diskusi, kerja sama, dan saling bertukar ide. Bagimu, percakapan bukan hanya untuk menyampaikan pendapat, tetapi juga untuk membangun pemahaman bersama. Hal ini membuatmu lebih mudah bekerja sama dan menjalin hubungan yang harmonis.`,

People:`Kamu berkomunikasi dengan hangat serta memperhatikan hubungan dan perasaan orang lain. Kamu berusaha menciptakan suasana yang nyaman sehingga lawan bicara merasa dihargai dan didengarkan. Kemampuan ini membuatmu lebih mudah membangun kepercayaan dan menjalin persahabatan yang baik.`,

Task:`Saat berkomunikasi, kamu lebih fokus pada tujuan, penyelesaian masalah, dan hasil yang ingin dicapai. Kamu cenderung menyampaikan informasi secara langsung agar pembicaraan tetap efektif dan tidak berlarut-larut. Cara ini membuat komunikasi menjadi lebih jelas dan terarah.`,

Possibility:`Kamu senang mengajak orang lain membicarakan ide-ide baru, peluang, dan berbagai kemungkinan yang dapat dikembangkan. Antusiasmemu dalam mengeksplorasi gagasan membuat percakapan terasa lebih hidup, kreatif, dan penuh inspirasi.`,

Necessity:`Kamu lebih sering membahas hal-hal yang perlu dilakukan, tanggung jawab yang harus diselesaikan, atau komitmen yang perlu dijaga. Saat berkomunikasi, kamu membantu orang lain tetap fokus pada prioritas sehingga tujuan bersama dapat dicapai dengan lebih baik.`

},

LEADERSHIP_STYLE:{

Toward:`Kamu memiliki kecenderungan memimpin dengan mengajak orang lain melihat tujuan, peluang, dan harapan yang ingin dicapai. Saat bekerja dalam kelompok, organisasi, atau kegiatan sekolah, kamu mampu membangkitkan semangat teman-temanmu untuk bergerak bersama mencapai hasil yang lebih baik. Cara ini membuatmu menjadi sosok yang mampu memberikan motivasi kepada orang lain.`,

Away:`Kamu cenderung memimpin dengan memastikan berbagai risiko dan masalah dapat diantisipasi sejak awal. Saat bekerja bersama teman, kamu sering mengingatkan hal-hal yang perlu diperhatikan agar kegiatan berjalan lancar dan kesalahan dapat diminimalkan. Sikap ini membuatmu menjadi pribadi yang bertanggung jawab dan dapat diandalkan.`,

Internal:`Kamu memiliki keyakinan yang kuat terhadap keputusan dan prinsip yang kamu pegang. Saat dipercaya memimpin atau mengoordinasikan sebuah kegiatan, kamu mampu mengambil keputusan dengan percaya diri tanpa mudah terpengaruh oleh tekanan dari lingkungan. Sikap ini membuatmu terlihat tegas dan memiliki pendirian.`,

External:`Kamu lebih suka membangun kepemimpinan melalui diskusi dan keterlibatan semua anggota. Kamu senang mendengarkan saran, menerima masukan, dan mengajak setiap orang ikut berpartisipasi sebelum menentukan keputusan. Cara ini membuat anggota kelompok merasa dihargai dan lebih bersemangat untuk bekerja sama.`,

Options:`Kamu membawa kreativitas dalam memimpin. Saat menghadapi tantangan, kamu mampu menghasilkan berbagai ide, alternatif, dan cara baru yang dapat membantu kelompok mencapai tujuan dengan lebih efektif. Kreativitasmu sering menjadi sumber inspirasi bagi teman-teman di sekitarmu.`,

Procedures:`Kamu lebih nyaman memimpin melalui perencanaan yang jelas dan langkah-langkah yang teratur. Kamu senang membuat pembagian tugas, menyusun urutan pekerjaan, dan memastikan setiap orang memahami perannya. Cara ini membantu kelompok bekerja lebih terarah dan terorganisasi.`,

BigPicture:`Kamu memiliki kemampuan melihat tujuan besar yang ingin dicapai oleh kelompok. Sebelum memikirkan rincian pekerjaan, kamu lebih dulu memahami arah, manfaat, dan hasil yang ingin diwujudkan sehingga dapat membantu teman-teman tetap fokus pada tujuan bersama.`,

Detail:`Kamu memiliki perhatian yang baik terhadap hal-hal kecil yang memengaruhi keberhasilan sebuah kegiatan. Saat memimpin, kamu berusaha memastikan setiap tugas dikerjakan dengan teliti sehingga hasil akhirnya menjadi lebih rapi, berkualitas, dan sesuai dengan harapan.`,

Matching:`Kamu cenderung membangun kepemimpinan dengan menciptakan kesamaan tujuan, semangat, dan kerja sama di dalam kelompok. Kamu berusaha menjaga hubungan yang harmonis sehingga setiap anggota merasa menjadi bagian penting dari tim. Kemampuan ini membuatmu lebih mudah membangun kekompakan dan kebersamaan.`,

Mismatching:`Kamu memiliki kemampuan melihat hal-hal yang masih perlu diperbaiki dalam sebuah kelompok atau kegiatan. Saat bekerja bersama, kamu sering menemukan ide untuk meningkatkan kualitas hasil dan tidak ragu menyampaikan saran yang membangun. Sikap ini membantu kelompok terus berkembang dan tidak cepat merasa puas dengan hasil yang ada.`,

Self:`Kamu memimpin berdasarkan keyakinan, nilai, dan tanggung jawab yang kamu pegang. Ketika dipercaya memegang peran penting, kamu berusaha menjalankannya dengan sungguh-sungguh tanpa mudah terpengaruh oleh tekanan dari lingkungan. Sikap ini membuatmu menjadi pribadi yang memiliki pendirian dan integritas.`,

Others:`Kamu membangun kepemimpinan dengan memperhatikan kebutuhan dan perkembangan setiap anggota kelompok. Kamu senang membantu, memberikan dukungan, dan memastikan semua orang merasa dihargai. Kepedulian ini membuatmu lebih mudah mendapatkan kepercayaan dan membangun hubungan yang positif.`,

Proactive:`Kamu cenderung menjadi orang yang berinisiatif ketika melihat sesuatu perlu dilakukan. Tanpa harus menunggu diminta, kamu bersedia mengambil langkah pertama, mengajak teman untuk bergerak, dan membantu kelompok tetap fokus mencapai tujuan. Sikap ini membuatmu sering menjadi penggerak dalam berbagai kegiatan.`,

Reactive:`Kamu lebih memilih memahami situasi terlebih dahulu sebelum mengambil tindakan. Saat memimpin atau bekerja bersama, kamu mengamati kondisi, mendengarkan pendapat anggota, lalu menentukan langkah yang menurutmu paling tepat. Cara ini membuat keputusanmu biasanya lebih matang dan penuh pertimbangan.`,

General:`Kamu memimpin dengan berfokus pada tujuan utama yang ingin dicapai. Kamu membantu kelompok memahami arah kegiatan sehingga setiap anggota mengetahui apa yang menjadi prioritas bersama. Kemampuan ini membuat kelompok tetap fokus pada hasil yang ingin diwujudkan.`,

Specific:`Kamu memperhatikan rincian yang diperlukan agar setiap kegiatan berjalan dengan baik. Saat mengoordinasikan kelompok, kamu memastikan pembagian tugas, jadwal, dan tanggung jawab dipahami dengan jelas sehingga pelaksanaan kegiatan menjadi lebih tertata dan efektif.`,

Sameness:`Kamu cenderung menjaga stabilitas, kekompakan, dan kebiasaan baik yang sudah berjalan dalam kelompok. Kamu berusaha mempertahankan hal-hal yang terbukti efektif sehingga anggota merasa nyaman dan dapat bekerja sama dengan lebih percaya diri.`,

Difference:`Kamu cenderung menjadi penggerak perubahan ketika melihat adanya cara yang lebih baik untuk mencapai tujuan. Kamu tidak ragu mengusulkan ide baru, mencoba pendekatan yang berbeda, atau mengajak teman-teman melakukan perbaikan. Sikap ini membuatmu mampu membawa semangat pembaruan dan mendorong kelompok untuk terus berkembang.`,

Past:`Saat memimpin atau bekerja bersama, kamu sering memanfaatkan pengalaman sebelumnya sebagai bahan pembelajaran. Keberhasilan maupun tantangan yang pernah dialami menjadi bekal untuk mengambil keputusan yang lebih baik dan menghindari kesalahan yang sama di masa mendatang. Cara ini membuatmu terus berkembang dari setiap pengalaman.`,

Present:`Kamu lebih fokus pada kebutuhan dan tantangan yang sedang dihadapi saat ini. Ketika memimpin sebuah kegiatan atau kelompok, kamu berusaha menyelesaikan prioritas yang ada terlebih dahulu sehingga setiap langkah dapat berjalan dengan baik. Sikap ini membuatmu mampu menjaga kelompok tetap fokus pada apa yang paling penting saat ini.`,

Future:`Kamu memiliki kemampuan mengajak orang lain melihat tujuan jangka panjang. Saat memimpin, kamu sering membantu teman-teman memahami manfaat dari usaha yang dilakukan hari ini untuk mencapai impian atau tujuan yang lebih besar di masa depan. Cara ini mampu membangun semangat dan memberikan arah yang jelas bagi kelompok.`,

Independent:`Kamu memiliki kemampuan memimpin secara mandiri dan bertanggung jawab terhadap keputusan yang diambil. Walaupun tetap menghargai masukan dari orang lain, kamu mampu menentukan langkah dengan percaya diri ketika situasi membutuhkan ketegasan. Sikap ini membuatmu menjadi pribadi yang dapat diandalkan.`,

Cooperative:`Kamu percaya bahwa keberhasilan lebih mudah dicapai melalui kerja sama yang baik. Saat memimpin, kamu senang melibatkan semua anggota dalam berdiskusi, berbagi ide, dan saling membantu. Kemampuan ini membuat suasana kerja sama menjadi lebih harmonis dan setiap anggota merasa memiliki peran penting.`,

People:`Kamu membangun kepemimpinan melalui hubungan yang baik dengan orang lain. Kamu mampu memahami kebutuhan, memberikan dukungan, dan menciptakan suasana yang membuat setiap anggota merasa dihargai. Sikap ini membuatmu lebih mudah mendapatkan kepercayaan serta membangun tim yang solid.`,

Task:`Kamu memimpin dengan berorientasi pada pencapaian tujuan dan penyelesaian tanggung jawab. Kamu membantu kelompok tetap fokus pada target yang ingin dicapai serta mendorong setiap anggota menyelesaikan tugasnya dengan baik. Cara ini membuat kegiatan berjalan lebih efektif dan terarah.`,

Possibility:`Kamu mampu menginspirasi orang lain untuk melihat berbagai peluang yang dapat dikembangkan. Saat menghadapi tantangan, kamu tidak mudah terpaku pada kesulitan, tetapi berusaha menemukan ide, solusi, dan kesempatan baru yang dapat membawa kelompok menuju hasil yang lebih baik.`,

Necessity:`Kamu menunjukkan kepemimpinan melalui rasa tanggung jawab dan komitmen terhadap setiap amanah yang diberikan. Kamu berusaha menyelesaikan kewajiban dengan sungguh-sungguh serta mengajak teman-teman melakukan hal yang sama. Sikap ini membuatmu dikenal sebagai pribadi yang dapat dipercaya dan bertanggung jawab.`

},

BLINDSPOT:{

Toward:`Karena sangat fokus pada tujuan dan peluang, terkadang kamu terlalu bersemangat sehingga kurang memperhatikan risiko atau tantangan yang mungkin muncul. Sesekali luangkan waktu untuk mempertimbangkan berbagai kemungkinan agar keputusan yang diambil menjadi lebih matang dan seimbang.`,

Away:`Karena terbiasa memikirkan risiko, terkadang kamu menjadi terlalu berhati-hati sehingga melewatkan kesempatan yang sebenarnya baik untuk dicoba. Belajar melihat peluang di balik setiap tantangan akan membantumu berkembang dengan lebih percaya diri.`,

Internal:`Kepercayaanmu terhadap penilaian sendiri merupakan kekuatan. Namun, pada situasi tertentu kamu mungkin kurang terbuka terhadap masukan yang sebenarnya dapat memperkaya sudut pandangmu. Mendengarkan pendapat orang lain bukan berarti mengurangi keyakinan diri, tetapi dapat membantu menghasilkan keputusan yang lebih baik.`,

External:`Kamu senang mendengarkan masukan dari orang lain, namun terkadang terlalu banyak mempertimbangkan berbagai pendapat hingga menjadi ragu menentukan pilihan. Percayalah bahwa kemampuanmu sendiri juga dapat menjadi dasar yang kuat dalam mengambil keputusan.`,

Options:`Kamu memiliki banyak ide dan senang mencoba berbagai kemungkinan. Namun, terkadang perhatianmu mudah berpindah ke hal baru sebelum menyelesaikan apa yang sedang dikerjakan. Menyelesaikan satu prioritas terlebih dahulu akan membantu ide-idemu menghasilkan manfaat yang lebih nyata.`,

Procedures:`Kamu menyukai langkah-langkah yang jelas dan teratur. Namun, ketika menghadapi perubahan mendadak atau situasi yang tidak sesuai rencana, kamu mungkin membutuhkan waktu lebih lama untuk menyesuaikan diri. Melatih fleksibilitas akan membuatmu lebih siap menghadapi berbagai keadaan.`,

BigPicture:`Kemampuanmu melihat gambaran besar merupakan kelebihan yang berharga. Namun, terkadang kamu terlalu fokus pada tujuan utama sehingga ada beberapa rincian penting yang terlewat. Memberikan perhatian pada hal-hal kecil akan membantu rencanamu berjalan lebih baik.`,

Detail:`Ketelitianmu membuat hasil belajarmu menjadi lebih rapi dan akurat. Namun, pada beberapa situasi kamu bisa terlalu lama memperhatikan rincian hingga lupa melihat tujuan utamanya. Sesekali lihat kembali gambaran besarnya agar usahamu tetap berjalan secara efektif.`,

Matching:`Kemampuanmu menemukan kesamaan membuatmu mudah membangun hubungan dan bekerja sama dengan orang lain. Namun, terkadang kamu terlalu nyaman dengan cara yang sudah dikenal sehingga kurang memperhatikan perlunya perubahan atau ide baru. Membuka diri terhadap sudut pandang yang berbeda akan membantu kemampuanmu berkembang lebih jauh.`,

Mismatching:`Kemampuanmu melihat hal-hal yang perlu diperbaiki merupakan kelebihan yang tidak dimiliki semua orang. Namun, terkadang perhatianmu lebih banyak tertuju pada kekurangan daripada hal-hal yang sudah berjalan dengan baik. Memberikan apresiasi sebelum menyampaikan masukan akan membuat pendapatmu lebih mudah diterima oleh orang lain.`,

Self:`Kamu memiliki kemampuan mengenali kebutuhan dan tujuan pribadimu dengan baik. Namun, pada situasi tertentu kamu mungkin terlalu fokus pada apa yang kamu inginkan sehingga kurang memperhatikan kebutuhan atau perasaan orang lain. Menyeimbangkan kepentingan diri dan orang lain akan membantumu membangun hubungan yang lebih baik.`,

Others:`Kepedulianmu terhadap orang lain merupakan kekuatan yang sangat berharga. Namun, terkadang kamu terlalu memikirkan kebutuhan orang lain hingga mengabaikan kebutuhan atau batasan dirimu sendiri. Ingatlah bahwa menjaga diri sendiri juga penting agar kamu tetap mampu membantu orang lain dengan baik.`,

Proactive:`Semangatmu untuk segera bertindak merupakan kelebihan yang membuatmu tidak mudah menunda pekerjaan. Namun, pada beberapa situasi kamu mungkin bergerak terlalu cepat sebelum memiliki informasi yang cukup. Membiasakan diri berhenti sejenak untuk mengevaluasi keadaan akan membuat keputusanmu menjadi lebih efektif.`,

Reactive:`Kemampuanmu mempertimbangkan berbagai hal sebelum bertindak merupakan kekuatan yang membantu mengurangi kesalahan. Namun, terkadang kamu terlalu lama menganalisis sehingga kesempatan yang baik terlewat begitu saja. Belajar menentukan kapan saatnya berpikir dan kapan saatnya bertindak akan membantumu berkembang lebih optimal.`,

General:`Kemampuanmu melihat inti permasalahan membuatmu cepat memahami sebuah konsep. Namun, terkadang kamu melewatkan rincian kecil yang ternyata berpengaruh terhadap hasil akhir. Memberikan sedikit perhatian tambahan pada detail akan membuat hasil belajarmu menjadi lebih maksimal.`,

Specific:`Ketelitianmu merupakan salah satu kekuatan yang sangat membantu dalam belajar maupun menyelesaikan tugas. Namun, pada beberapa keadaan kamu bisa terlalu fokus pada rincian hingga membutuhkan waktu lebih lama untuk menyelesaikan pekerjaan. Mengingat kembali tujuan utamanya akan membantumu bekerja dengan lebih efektif.`,

Sameness:`Konsistensi membuatmu mampu menjaga kebiasaan dan rutinitas yang baik. Namun, terkadang kamu merasa kurang nyaman ketika harus menghadapi perubahan yang terjadi secara tiba-tiba. Melatih diri menerima perubahan kecil secara bertahap akan membantumu menjadi lebih mudah beradaptasi.`,

Difference:`Kemampuanmu melihat perubahan dan menemukan cara baru merupakan kekuatan yang membuatmu terus berkembang. Namun, terkadang kamu mudah merasa bosan dengan rutinitas sehingga sulit mempertahankan konsistensi dalam jangka panjang. Menyelesaikan apa yang sudah dimulai sebelum mencari tantangan baru akan membantumu mencapai hasil yang lebih maksimal.`,

Past:`Pengalaman yang kamu miliki merupakan sumber pembelajaran yang sangat berharga. Namun, terkadang kamu terlalu mengandalkan pengalaman masa lalu sehingga ragu mencoba pendekatan yang baru. Menggunakan pengalaman sebagai pelajaran tanpa membatasi diri terhadap peluang baru akan membuatmu semakin berkembang.`,

Present:`Kemampuanmu fokus pada apa yang sedang dihadapi saat ini membantumu menyelesaikan berbagai tanggung jawab dengan baik. Namun, terkadang kamu terlalu berkonsentrasi pada kebutuhan saat ini hingga kurang mempersiapkan langkah untuk masa depan. Menyeimbangkan fokus antara hari ini dan tujuan jangka panjang akan memberikan hasil yang lebih baik.`,

Future:`Kemampuanmu memikirkan masa depan membuatmu memiliki arah dan tujuan yang jelas. Namun, terkadang kamu terlalu sibuk memikirkan apa yang akan terjadi sehingga lupa menikmati proses yang sedang dijalani. Menghargai setiap langkah kecil yang kamu lakukan hari ini akan membantumu mencapai tujuan dengan lebih tenang dan konsisten.`,

Independent:`Kemandirianmu merupakan kekuatan yang membuatmu mampu bertanggung jawab terhadap keputusan yang diambil. Namun, terkadang kamu terlalu mengandalkan diri sendiri sehingga enggan meminta bantuan ketika menghadapi kesulitan. Belajar bekerja sama dan menerima bantuan bukanlah tanda kelemahan, melainkan bagian dari proses bertumbuh.`,

Cooperative:`Kemampuanmu bekerja sama membuatmu mudah membangun hubungan yang baik dengan orang lain. Namun, terkadang kamu terlalu menunggu kesepakatan atau persetujuan dari orang lain sebelum bertindak. Melatih keberanian mengambil keputusan sendiri pada situasi tertentu akan membantu meningkatkan rasa percaya dirimu.`,

People:`Kepedulianmu terhadap orang lain merupakan kualitas yang sangat berharga. Namun, terkadang kamu terlalu menjaga hubungan hingga merasa tidak enak untuk mengatakan "tidak" atau menyampaikan pendapat yang berbeda. Belajar menyampaikan pendapat dengan jujur dan tetap menghargai orang lain akan membuat hubunganmu menjadi lebih sehat.`,

Task:`Kemampuanmu fokus pada target dan tanggung jawab membantumu menyelesaikan banyak hal dengan baik. Namun, terkadang perhatianmu terhadap hasil membuatmu kurang menyadari kebutuhan emosional orang-orang di sekitarmu. Memberikan sedikit waktu untuk mendengarkan dan memahami orang lain akan membuat kerja sama menjadi lebih baik.`,

Possibility:`Kreativitas dan banyaknya ide yang kamu miliki merupakan kekuatan yang luar biasa. Namun, terkadang kamu terlalu bersemangat memulai hal baru sehingga ada beberapa rencana yang belum sempat diselesaikan. Membiasakan diri menuntaskan satu tujuan sebelum memulai tujuan berikutnya akan membuat potensimu menghasilkan dampak yang lebih besar.`,

Necessity:`Rasa tanggung jawabmu membuatmu dapat dipercaya dalam menjalankan berbagai kewajiban. Namun, terkadang kamu terlalu fokus pada apa yang harus dilakukan sehingga kurang memberi ruang untuk mencoba peluang atau pengalaman baru. Sesekali keluar dari zona nyaman akan membantumu menemukan potensi yang mungkin belum pernah kamu sadari.`

},



DEVELOPMENT:{

Toward:`Teruslah mempertahankan semangatmu dalam mengejar tujuan dan melihat peluang. Agar potensimu berkembang lebih optimal, biasakan meluangkan waktu sejenak untuk mempertimbangkan tantangan yang mungkin muncul sebelum mengambil keputusan. Dengan memadukan optimisme dan perencanaan yang matang, kamu akan lebih siap menghadapi berbagai situasi dan mencapai tujuanmu dengan lebih percaya diri.`,

Away:`Kemampuanmu mengantisipasi risiko merupakan bekal yang sangat baik. Agar terus berkembang, cobalah sesekali mengalihkan perhatian dari apa yang perlu dihindari menjadi apa yang dapat kamu capai. Dengan berani melihat peluang di balik setiap tantangan, kamu akan lebih percaya diri mencoba pengalaman baru dan mengembangkan potensimu.`,

Internal:`Kepercayaanmu terhadap kemampuan diri merupakan kekuatan yang berharga. Agar semakin berkembang, biasakan mendengarkan masukan dari guru, orang tua, atau teman tanpa merasa harus kehilangan pendirianmu. Menggabungkan keyakinan diri dengan sudut pandang orang lain akan membuat keputusanmu menjadi lebih bijaksana.`,

External:`Kemampuanmu menerima masukan membuatmu lebih mudah belajar dari orang lain. Langkah berikutnya adalah membangun keyakinan terhadap kemampuanmu sendiri. Mulailah berlatih mengambil keputusan sederhana berdasarkan pertimbangan pribadimu agar rasa percaya dirimu terus bertumbuh.`,

Options:`Kreativitasmu membuka banyak peluang untuk berkembang. Agar ide-idemu benar-benar menghasilkan manfaat, biasakan memilih satu prioritas untuk diselesaikan terlebih dahulu sebelum memulai hal baru. Kebiasaan ini akan membantumu melihat hasil nyata dari setiap usaha yang kamu lakukan.`,

Procedures:`Kemampuanmu mengikuti proses secara teratur merupakan modal yang sangat baik. Agar lebih siap menghadapi berbagai situasi, latih dirimu untuk tetap tenang ketika rencana berubah. Semakin fleksibel kamu menghadapi perubahan, semakin mudah pula kamu beradaptasi dengan tantangan baru.`,

BigPicture:`Kemampuanmu melihat tujuan besar merupakan kekuatan yang dapat membawamu berkembang jauh. Agar setiap rencana berjalan dengan baik, biasakan membagi tujuan besar menjadi langkah-langkah kecil yang dapat dilakukan setiap hari. Cara ini akan membantumu mewujudkan impian secara lebih nyata.`,

Detail:`Ketelitianmu merupakan kelebihan yang sangat berharga. Agar hasil yang dicapai semakin optimal, biasakan sesekali melihat kembali tujuan besarnya sehingga perhatianmu tidak hanya tertuju pada rincian. Dengan menjaga keseimbangan antara detail dan arah utama, usahamu akan menjadi lebih efektif.`,

Matching:`Kemampuanmu menemukan kesamaan membuatmu mudah membangun hubungan dan bekerja sama dengan orang lain. Agar terus berkembang, cobalah sesekali melihat sudut pandang yang berbeda dan terbuka terhadap perubahan. Semakin mampu menggabungkan konsistensi dengan ide-ide baru, semakin luas pula kemampuanmu dalam menghadapi berbagai situasi.`,

Mismatching:`Kemampuanmu menemukan hal-hal yang perlu diperbaiki merupakan kekuatan yang sangat bermanfaat. Agar masukanmu semakin bernilai, biasakan juga memberikan apresiasi terhadap hal-hal yang sudah berjalan dengan baik. Dengan menyeimbangkan kritik dan penghargaan, kamu akan lebih mudah diterima dan dipercaya oleh orang lain.`,

Self:`Kemampuanmu memahami tujuan dan kebutuhan diri sendiri merupakan bekal yang penting untuk berkembang. Agar potensimu semakin maksimal, biasakan juga mendengarkan kebutuhan serta sudut pandang orang lain. Semakin seimbang kamu memperhatikan diri sendiri dan lingkungan, semakin baik pula hubungan yang dapat kamu bangun.`,

Others:`Kepedulianmu terhadap orang lain adalah kualitas yang sangat berharga. Agar terus berkembang, belajarlah menetapkan batasan yang sehat dan tetap memperhatikan kebutuhan dirimu sendiri. Saat dirimu terjaga dengan baik, kamu akan memiliki energi yang lebih besar untuk membantu orang lain.`,

Proactive:`Semangatmu untuk segera bertindak merupakan kekuatan yang membawamu terus maju. Agar hasilnya semakin baik, biasakan berhenti sejenak untuk menyusun rencana sederhana sebelum mulai bertindak. Langkah kecil ini akan membantumu bekerja lebih terarah tanpa mengurangi semangat yang kamu miliki.`,

Reactive:`Kemampuanmu berpikir sebelum bertindak merupakan bekal yang sangat baik dalam mengambil keputusan. Agar potensimu semakin berkembang, latih keberanian untuk mulai bertindak ketika informasi yang kamu miliki sudah cukup. Semakin sering kamu mengambil langkah nyata, semakin besar pula rasa percaya dirimu.`,

General:`Kemampuanmu memahami konsep besar membantumu melihat arah dengan jelas. Agar hasil belajarmu semakin optimal, biasakan melengkapi pemahaman tersebut dengan memperhatikan rincian yang benar-benar penting. Keseimbangan antara gambaran besar dan detail akan membuat kemampuanmu semakin kuat.`,

Specific:`Ketelitianmu membuatmu mampu menghasilkan pekerjaan yang rapi dan berkualitas. Agar proses belajarmu lebih efektif, biasakan menentukan prioritas dan fokus pada hal-hal yang paling penting terlebih dahulu. Cara ini akan membantumu menyelesaikan tugas dengan lebih efisien tanpa mengurangi kualitas hasilnya.`,

Sameness:`Konsistensimu merupakan kekuatan yang membantu membangun kebiasaan baik. Agar terus berkembang, cobalah sesekali keluar dari rutinitas untuk mencoba pengalaman, cara belajar, atau tantangan baru. Kemampuan beradaptasi akan membuatmu semakin siap menghadapi perubahan di masa depan.`,

Difference:`Kemampuanmu melihat peluang perubahan merupakan kekuatan yang membuatmu terus berkembang. Agar potensimu menghasilkan dampak yang nyata, biasakan menyelesaikan setiap komitmen yang sudah kamu mulai sebelum mencari tantangan berikutnya. Dengan menyeimbangkan semangat mencoba hal baru dan konsistensi, kamu akan mencapai hasil yang lebih maksimal.`,

Past:`Pengalaman yang kamu miliki merupakan sumber pembelajaran yang sangat berharga. Agar terus berkembang, gunakan setiap pengalaman sebagai bekal untuk mengambil keputusan yang lebih baik, tanpa membiarkan pengalaman tersebut membatasi keberanianmu mencoba hal-hal baru. Dengan begitu, kamu akan menjadi pribadi yang lebih bijaksana sekaligus lebih terbuka terhadap peluang.`,

Present:`Kemampuanmu fokus pada apa yang sedang dihadapi saat ini membantumu menyelesaikan berbagai tanggung jawab dengan baik. Agar perkembanganmu semakin terarah, biasakan meluangkan waktu untuk menetapkan tujuan jangka panjang serta langkah-langkah kecil yang dapat kamu lakukan mulai hari ini. Kebiasaan ini akan membantu setiap usahamu memiliki arah yang lebih jelas.`,

Future:`Kemampuanmu memikirkan masa depan merupakan kekuatan yang membantumu memiliki impian dan tujuan yang jelas. Agar cita-citamu lebih mudah tercapai, biasakan menikmati proses belajar, menghargai setiap kemajuan kecil, dan tetap konsisten menjalankan kebiasaan baik setiap hari. Langkah sederhana yang dilakukan secara terus-menerus akan membawamu lebih dekat pada tujuanmu.`,

Independent:`Kemandirianmu menunjukkan bahwa kamu mampu bertanggung jawab terhadap pilihan yang diambil. Agar potensimu berkembang lebih besar, jangan ragu membangun kerja sama, berdiskusi, dan meminta bantuan ketika diperlukan. Belajar dari orang lain akan memperkaya pengalamanmu tanpa mengurangi kemampuanmu untuk tetap mandiri.`,

Cooperative:`Kemampuanmu bekerja sama merupakan modal yang sangat baik untuk berkembang bersama orang lain. Agar rasa percaya dirimu semakin kuat, latih keberanian mengambil keputusan sendiri pada situasi-situasi sederhana. Dengan begitu, kamu akan mampu bekerja sama sekaligus memiliki keyakinan terhadap kemampuan pribadimu.`,

People:`Kemampuanmu memahami dan membangun hubungan dengan orang lain merupakan kualitas yang sangat berharga. Agar berkembang secara seimbang, biasakan juga menyampaikan pendapat, menjaga batasan yang sehat, dan menghargai kebutuhan dirimu sendiri. Hubungan yang baik akan semakin kuat ketika kamu mampu menghargai diri sendiri maupun orang lain.`,

Task:`Kemampuanmu fokus pada target membuatmu mampu menyelesaikan berbagai tanggung jawab dengan baik. Agar menjadi pribadi yang semakin lengkap, luangkan waktu untuk mendengarkan, memahami, dan menghargai orang-orang yang bekerja atau belajar bersamamu. Ketika hasil dan hubungan berkembang bersama, keberhasilan yang kamu capai akan terasa lebih bermakna.`,

Possibility:`Kreativitas dan imajinasimu membuka banyak kesempatan untuk berkembang. Agar setiap ide menghasilkan manfaat yang nyata, biasakan membuat rencana sederhana, menentukan prioritas, dan menyelesaikan satu langkah sebelum berpindah ke langkah berikutnya. Konsistensi akan mengubah ide-ide besarmu menjadi pencapaian yang nyata.`,

Necessity:`Rasa tanggung jawabmu merupakan fondasi yang kuat untuk meraih kepercayaan dari orang lain. Agar potensimu semakin berkembang, berikan ruang bagi dirimu untuk mencoba pengalaman baru, mengeksplorasi minat, dan keluar dari zona nyaman secara bertahap. Dengan memadukan disiplin dan keberanian mencoba, kamu akan menemukan potensi yang lebih besar dalam dirimu.`

}

};

// --- narrativeEngineAnak.js ---
const NARRATIVE_ENGINE_ANAK = {
  THINKING_STYLE: {
    Toward: "Anak Anda cenderung berorientasi pada pencapaian, kesenangan, dan hasil akhir yang menarik. Ketika diberi tahu tentang suatu kegiatan, pikirannya langsung membayangkan hadiah atau keseruan yang bisa didapatkan. Hal ini membuatnya mudah bersemangat untuk memulai hal baru, namun membutuhkan bimbingan agar tidak mudah bosan saat daya tarik awalnya mulai berkurang.",
    Away: "Anak Anda memiliki cara berpikir yang waspada dan preventif. Ia cenderung memikirkan konsekuensi negatif, kesalahan, atau ketidaknyamanan yang ingin ia hindari sebelum bertindak. Hal ini membuatnya menjadi anak yang patuh pada aturan keselamatan, namun ia sering kali memerlukan dorongan mental ekstra agar berani menghadapi tantangan baru tanpa rasa takut salah.",
    Internal: "Anak Anda memiliki standar penilaian sendiri dari dalam dirinya. Ia sangat mandiri dalam berpikir dan memiliki pendirian yang teguh. Ketika memilih pakaian atau mainan, ia bersikeras pada seleranya sendiri meskipun berbeda dari saran Anda. Karakter ini sangat baik untuk kemandiriannya, namun menuntut Anda untuk lebih banyak memberikan alasan logis daripada perintah mutlak.",
    External: "Anak Anda sangat peka terhadap masukan, arahan, dan persetujuan dari orang-orang di sekitarnya, terutama orang tua dan guru. Ia memproses pikirannya dengan mendengarkan respon luar. Anak ini sangat kooperatif, namun membutuhkan pujian dan konfirmasi berkala agar ia merasa yakin dengan tindakannya dan tidak mudah ragu.",
    Options: "Anak Anda menyukai variasi dan kebebasan bereksplorasi. Pikirannya selalu mencari alternatif cara yang tidak biasa. Ketika menggambar atau bermain, ia tidak suka dibatasi oleh satu contoh kaku. Imajinasi kreatifnya sangat luas, namun ia cenderung kesulitan fokus pada instruksi yang menuntut kepatuhan mutlak.",
    Procedures: "Anak Anda merasa paling nyaman dan aman ketika mengetahui alur dan urutan yang jelas dari suatu aktivitas. Ia menyukai langkah-demi-langkah terstruktur. Cara berpikir yang teratur ini membantunya menyelesaikan tugas sekolah dengan rapi, namun ia cenderung cemas jika alur kegiatannya berubah mendadak tanpa persiapan.",
    BigPicture: "Anak Anda cenderung memahami dunia melalui gambaran besarnya terlebih dahulu. Ia cepat menangkap inti cerita atau maksud utama dari instruksi Anda, namun cenderung mengabaikan detail-detail kecil. Ia adalah anak konseptual yang membutuhkan bantuan Anda untuk belajar lebih teliti pada rincian tugas.",
    Detail: "Anak Anda memiliki ketelitian yang luar biasa terhadap detail kecil di sekitarnya. Ia senang mengamati rincian mainan atau menyusun benda-benda kecil dengan sabar. Konsentrasi detail ini sangat bagus untuk ketelitian akademis, namun kadang membuatnya lambat memulai karena terlalu lama terpaku pada satu bagian kecil.",
    Matching: "Anak Anda secara alami mencari kesamaan dan kecocokan dalam setiap situasi baru. Ia mudah beradaptasi karena selalu menghubungkan materi baru dengan hal yang sudah ia ketahui. Anak ini menyukai suasana damai dan cenderung menghindari konflik di lingkungan bermainnya.",
    Mismatching: "Anak Anda secara alami kritis dan jeli melihat perbedaan atau hal yang kurang pas. Ia sering kali mempertanyakan aturan atau mencari pengecualian ('Tapi kenapa tidak begini, Pa?'). Sikap kritis ini adalah tanda kecerdasan analitis yang baik, namun Anda perlu mengarahkannya agar cara menyampaikannya tetap sopan.",
    Self: "Anak Anda cenderung memprioritaskan kenyamanan, kepuasan, dan kebutuhannya sendiri terlebih dahulu sebelum memikirkan orang lain. Ia tahu persis apa yang ia inginkan dan konsisten menjaganya. Ini adalah modal pertahanan diri yang kuat, namun ia membutuhkan bimbingan bertahap untuk belajar berbagi dan berempati.",
    Others: "Anak Anda memiliki empati yang tinggi dan sangat peka terhadap perasaan orang lain. Saat bermain, ia sering kali mengalah atau membagikan mainannya agar temannya senang. Karakter sosialnya sangat indah, namun Anda perlu mengajarinya untuk tetap menjaga batas diri agar tidak mudah dimanfaatkan anak lain.",
    Proactive: "Anak Anda bertipe aktif dan spontan. Ia cenderung langsung bertindak fisik, menyentuh, atau mencoba mainan baru sebelum mendengarkan instruksi Anda. Ia belajar paling cepat melalui aksi fisik langsung, namun membutuhkan pengawasan ekstra agar terhindar dari kecerobohan.",
    Reactive: "Anak Anda adalah pengamat yang tenang. Ia membutuhkan waktu untuk berdiri di samping Anda, melihat situasi, dan memahami keadaan sebelum akhirnya mau ikut bergabung bermain. Jangan menganggapnya pemalu; ia hanya sedang memproses rasa amannya sebelum mengambil tindakan.",
    General: "Anak Anda lebih nyaman memahami ide pokok pelajaran atau aturan bermain. Ia tidak terlalu memusingkan detail teknis. Cara ini membuatnya menjadi anak yang praktis dan fleksibel, tetapi ia butuh diajarkan untuk lebih sabar saat harus berurusan dengan rincian yang rumit.",
    Specific: "Anak Anda membutuhkan instruksi yang sangat jelas, rinci, dan konkret agar bisa bertindak dengan percaya diri. Bahasa kiasan atau arahan abstrak sering kali membuatnya bingung. Ia menyukai kepastian informasi dalam belajar.",
    Sameness: "Anak Anda sangat menyukai stabilitas dan kebiasaan yang teratur. Rutinitas harian yang tetap membuatnya merasa aman dan tenang. Ia cenderung memilih makanan, tempat liburan, atau game yang itu-itu saja karena kenyamanan yang sudah pasti.",
    Difference: "Anak Anda adalah pencari petualangan baru. Ia cepat sekali bosan jika harus melakukan rutinitas yang sama setiap hari. Ia sangat antusias jika diajak ke tempat baru, mencoba makanan baru, atau mengubah metode bermainnya.",
    Past: "Anak Anda sangat menghargai ingatan dan pengalaman yang sudah lewat. Ia sering mengaitkan kejadian hari ini dengan apa yang ia alami kemarin. Anak ini belajar dari kesalahan masa lalu dengan baik, namun rentan menyimpan trauma jika mengalami kejadian tidak menyenangkan.",
    Present: "Anak Anda hidup sepenuhnya untuk menikmati momen saat ini. Ia sangat spontan, ekspresif, dan ceria saat bermain. Kelemahannya adalah ia cenderung sulit diajak memikirkan akibat jangka panjang dari tindakannya saat ini.",
    Future: "Anak Anda adalah pemimpi kecil yang suka membayangkan hari esok atau cita-citanya kelak. Ia senang merencanakan mainan apa yang ingin dibeli besok atau liburan nanti. Visi ini memotivasinya, namun ia butuh diajarkan untuk tetap menghargai waktu saat ini.",
    Independent: "Anak Anda sangat mandiri dan asyik dengan dunianya sendiri. Ia bisa bermain sendiri dengan tenang selama berjam-jam tanpa menuntut kehadiran Anda. Ini sangat baik untuk kemandiriannya, namun Anda perlu menjadwalkan waktu interaksi aktif agar kemampuan sosialnya tetap terasah.",
    Cooperative: "Anak Anda tumbuh optimal melalui interaksi kelompok dan bermain bersama. Ia senang mengobrol, berbagi peran, dan melakukan aktivitas bersama orang lain. Baginya, keseruan bermain terletak pada kebersamaan.",
    People: "Anak Anda sangat mengutamakan hubungan sosial dan keharmonisan pertemanan. Ia lebih peduli pada suasana bermain yang ceria bersama teman daripada memenangkan permainan itu sendiri. Ia anak yang hangat dan penyayang.",
    Task: "Anak Anda sangat berfokus pada target dan penyelesaian tugas atau permainan. Saat merakit lego atau mewarnai, ia tidak ingin diganggu sebelum karyanya selesai sempurna. Ia memiliki kedisiplinan kerja yang baik sejak dini.",
    Possibility: "Anak Anda digerakkan oleh rasa penasaran yang besar terhadap peluang baru. Ia selalu ingin tahu 'bagaimana jika...' dan suka mengeksplorasi hal-hal unik. Imajinasi kreatifnya adalah kekuatan utamanya.",
    Necessity: "Anak Anda merasa paling aman bertindak ketika ada kewajiban atau aturan yang jelas. Ia mematuhi aturan belajar karena menganggapnya sebagai keharusan yang memang harus dilakukan. Ia adalah anak yang sangat bertanggung jawab."
  },
  DECISION_STYLE: {
    Toward: "Dalam memilih mainan, buku, atau makanan, anak Anda memilih berdasarkan kesenangan yang langsung didapatnya. Ia cepat mengambil keputusan jika melihat ada hal menarik di depannya.",
    Away: "Anak Anda memilih sesuatu setelah memastikan tidak ada risiko buruk. Misalnya, ia akan menghindari mainan yang bersuara terlalu keras atau yang terlihat menakutkan baginya.",
    Internal: "Keputusan anak Anda murni didasarkan pada seleranya sendiri. Usaha Anda untuk membujuknya memilih warna lain sering kali berakhir dengan penolakan jika ia tidak menyukainya dari dalam hati.",
    External: "Anak Anda sangat mengandalkan persetujuan Anda sebelum memutuskan. Ia akan sering menatap mata Anda untuk mencari sinyal persetujuan ('Pilihan ini bagus kan, Bun?').",
    Options: "Anak Anda kesulitan memilih jika dihadapkan pada terlalu banyak opsi, karena ia ingin mencoba semua cara dan kemungkinan bermain secara bergantian.",
    Procedures: "Anak Anda membuat keputusan dengan mengikuti alur kebiasaan yang sudah biasa dilakukan. Ia merasa aman dengan pilihan yang prosedural.",
    BigPicture: "Ia memilih mainan berdasarkan tema besarnya (misal: 'Pokoknya yang bertema robot'), tanpa terlalu memedulikan spesifikasi atau kelengkapan detail dari mainan tersebut.",
    Detail: "Anak Anda akan memeriksa setiap detail mainan sebelum membelinya, memastikan tidak ada cacat terkecil pun dan semua aksesoris lengkap.",
    Matching: "Anak Anda memilih hal baru yang memiliki kemiripan dengan mainan atau pengalaman lamanya yang menyenangkan agar ia merasa familiar.",
    Mismatching: "Anak Anda sengaja memilih sesuatu yang berbeda dari anak-anak lain agar terlihat unik dan memiliki keistimewaan tersendiri.",
    Self: "Keputusannya murni untuk memuaskan keinginannya saat itu, tanpa terlalu memedulikan apakah mainan tersebut bisa dimainkan bersama saudaranya atau tidak.",
    Others: "Saat memilih mainan atau bekal, ia sering kali memikirkan apakah teman atau saudaranya akan menyukainya juga agar mereka bisa menikmatinya bersama.",
    Proactive: "Ia langsung menunjuk dan mengambil barang yang ia inginkan tanpa banyak berpikir panjang terlebih dahulu.",
    Reactive: "Ia berdiri diam mengamati semua pilihan, membandingkannya satu per satu dalam pikirannya sebelum akhirnya menunjuk pilihan terbaik.",
    General: "Ia memilih berdasarkan kategori umum (misal: 'Buku tentang dinosaurus') tanpa memusingkan jenis dinosaurus apa yang ada di dalamnya.",
    Specific: "Ia memilih barang dengan spesifikasi yang sangat khusus dan tidak mau diganti dengan barang sejenis yang fiturnya berbeda sedikit saja.",
    Sameness: "Ia selalu memilih barang, makanan, atau tempat bermain yang sama persis dengan kunjungan sebelumnya karena rasa aman yang konsisten.",
    Difference: "Ia menolak memilih hal yang sama dengan sebelumnya karena selalu mendambakan sensasi petualangan dan kebaruan.",
    Past: "Pilihannya dipengaruhi oleh kenangan manis masa lalu ('Aku mau es krim cokelat seperti waktu ulang tahun kemarin').",
    Present: "Pilihannya dipicu oleh apa yang paling menarik perhatiannya secara visual pada detik ini juga.",
    Future: "Ia memilih mainan yang bisa ia bayangkan akan digunakan untuk bermain jangka panjang atau proyek masa depannya.",
    Independent: "Ia ingin memutuskan semuanya sendiri tanpa campur tangan atau bantuan dari orang tua.",
    Cooperative: "Ia ingin berdiskusi dahulu dengan Anda sebelum menentukan pilihan terbaik bagi dirinya.",
    People: "Keputusannya sangat dipengaruhi oleh tren pertemanan di sekolahnya agar ia merasa menjadi bagian dari kelompok bermainnya.",
    Task: "Ia memilih barang yang paling fungsional dan berguna langsung untuk menyelesaikan tugas sekolah atau hobinya.",
    Possibility: "Ia memilih barang yang menawarkan banyak fungsi kreatif dan cara bermain alternatif yang tak terbatas.",
    Necessity: "Ia memilih sesuatu karena merasa itu adalah kebutuhan wajib yang memang harus ia miliki untuk sekolah atau belajarnya."
  },
  LEARNING_STYLE: {
    Toward: "Anak belajar dengan sangat baik ketika ia mengetahui manfaat langsung dari pelajaran tersebut atau dijanjikan apresiasi/kegiatan menyenangkan setelah ia selesai belajar.",
    Away: "Anak terdorong belajar secara disiplin untuk menghindari kegagalan, nilai merah, atau rasa malu saat ditanya guru di kelas. Gunakan pendekatan pencegahan secara lembut.",
    Internal: "Anak belajar paling efektif ketika ia diberikan ruang untuk mencoba memahami materi dengan metodenya sendiri. Memaksanya menghafal dengan cara kaku akan membuatnya mogok belajar.",
    External: "Anak sangat membutuhkan umpan balik verbal yang positif dari Anda ('Hebat sekali tulisanmu, Kak!'). Pujian yang tulus adalah bahan bakar utama semangat belajarnya.",
    Options: "Anak menyukai metode belajar yang variatif dan kreatif. Selingi belajar membaca dengan permainan kartu kata, video animasi, atau kuis interaktif agar ia tetap antusias.",
    Procedures: "Anak membutuhkan jadwal belajar yang konsisten dan runtut. Mulailah dari berdoa, mengerjakan PR, lalu membaca buku pelajaran secara terstruktur setiap hari.",
    BigPicture: "Mulailah mengajari anak dengan menjelaskan manfaat atau kesimpulan dari bab pelajaran terlebih dahulu sebelum masuk ke rumus atau rincian materi yang rumit.",
    Detail: "Anak membutuhkan penjelasan materi yang rinci, contoh soal yang konkret, dan panduan belajar yang bertahap agar tidak merasa bingung.",
    Matching: "Bantulah anak memahami materi baru dengan mengaitkannya pada hobi atau kartun kesukaannya (misal: belajar berhitung menggunakan gambar mobil mainan kesukaannya).",
    Mismatching: "Tantang anak dengan kuis mencari kesalahan atau perbedaan pada gambar/tulisan. Cara belajar kritis ini sangat menantang dan menyenangkan bagi kecerdasannya.",
    Self: "Anak belajar paling bersemangat ketika ia sendiri yang menentukan target belajarnya (misal: 'Hari ini aku mau menyelesaikan 2 halaman buku gambar ya, Ma').",
    Others: "Ajak anak belajar melalui diskusi aktif, tanya-jawab dengan Anda, atau bermain peran menjadi guru dan murid di rumah.",
    Proactive: "Gunakan metode belajar praktis (hands-on learning). Biarkan anak memegang benda konkret, melakukan eksperimen sains sederhana, atau bergerak aktif sambil menghafal.",
    Reactive: "Berikan waktu bagi anak untuk membaca dengan tenang atau mendengarkan penjelasan Anda terlebih dahulu secara utuh sebelum memintanya menjawab soal latihan.",
    General: "Gunakan peta pikiran (mind mapping) visual yang menyederhanakan bab pelajaran menjadi poin-poin utama yang mudah diingat anak.",
    Specific: "Gunakan alat peraga konkret (sempoa, balok angka) untuk menjelaskan konsep matematika secara visual dan mendalam bagi anak.",
    Sameness: "Sediakan sudut belajar yang stabil dengan suasana yang tenang dan rapi untuk mendukung konsentrasi belajarnya sehari-hari.",
    Difference: "Ubah sesekali suasana belajarnya (misal: belajar di taman rumah, perpustakaan, atau kafe ramah anak) untuk menyegarkan pikiran dan semangatnya.",
    Past: "Review kembali materi pelajaran hari kemarin sebelum memulai materi baru untuk memperkuat ingatan jangka panjangnya.",
    Present: "Fokuskan sesi belajarnya pada durasi yang pendek namun berkualitas (misal: 20 menit fokus penuh, diikuti 5 menit istirahat bermain).",
    Future: "Hubungkan materi pelajaran dengan cita-cita atau impian masa depannya (misal: 'Dokter hebat harus rajin belajar tentang tubuh manusia sejak kecil').",
    Independent: "Biarkan anak menyelesaikan tugasnya sendiri terlebih dahulu, dan berikan bantuan hanya ketika ia memintanya secara langsung.",
    Cooperative: "Fasilitasi sesi belajar bersama teman sebaya atau dampingi ia secara aktif dengan berdiskusi interaktif selama ia belajar.",
    People: "Gunakan pendekatan bercerita (storytelling) yang melibatkan interaksi emosional antar tokoh cerita untuk menjelaskan materi IPS atau bahasa.",
    Task: "Buatlah daftar tugas belajar harian yang bisa dicentang anak setelah selesai. Proses mencentang ini memberikan kepuasan tersendiri baginya.",
    Possibility: "Berikan pertanyaan terbuka yang memicu imajinasi ('Menurutmu, apa yang terjadi jika bumi tidak memiliki bulan?'). Ini merangsang kecerdasan analitisnya.",
    Necessity: "Jelaskan dengan tegas aturan sekolah dan pentingnya menyelesaikan kewajiban PR sebagai bentuk tanggung jawab anak yang baik."
  },
  COMMUNICATION_STYLE: {
    Toward: "Anak berbicara tentang impian, rencana seru, dan hal-hal yang ia sukai dengan nada bicara yang ceria dan penuh semangat.",
    Away: "Anak lebih sering menceritakan kekhawatirannya, apa yang ia takuti, atau mengadukan hal-hal yang menurutnya mengganggu keselamatannya.",
    Internal: "Anak berbicara dengan nada yang mantap dan yakin dengan pendapatnya, terkadang sulit didebat oleh orang dewasa di sekitarnya.",
    External: "Anak sering meminta pendapat Anda di tengah ceritanya untuk memastikan bahwa cara bicaranya sudah benar dan disukai Anda.",
    Options: "Anak menceritakan banyak hal sekaligus secara melompat-lompat dari satu topik kreatif ke topik seru lainnya dengan ekspresi yang kaya.",
    Procedures: "Anak menceritakan kejadian secara runtut dari awal kejadian secara kronologis ('Tadi pagi di sekolah awalnya begini, terus...').",
    BigPicture: "Anak menyampaikan maksud bicaranya secara singkat langsung pada intinya tanpa suka bertele-tele menjelaskan kejadian kecil.",
    Detail: "Anak menceritakan sesuatu dengan sangat detail, menyebutkan warna baju, nama teman, jam kejadian, hingga rincian kecil lainnya.",
    Matching: "Anak berbicara dengan intonasi yang ramah, berusaha menyenangkan lawan bicaranya, dan selalu setuju dengan ucapan Anda.",
    Mismatching: "Anak suka menggunakan kata 'Tapi...' atau menyanggah ucapan Anda untuk menunjukkan sudut pandang yang berbeda.",
    Self: "Cenderung menceritakan dirinya sendiri, apa yang ia rasakan, dan apa yang menjadi keinginannya tanpa bertanya balik tentang Anda.",
    Others: "Anak sering menceritakan tentang kondisi temannya, menanyakan perasaan Anda, dan sangat menjaga sopan santun bicaranya.",
    Proactive: "Anak langsung memotong pembicaraan karena tidak sabar ingin segera menyampaikan idenya saat itu juga.",
    Reactive: "Anak cenderung diam mendengarkan percakapan keluarga terlebih dahulu, baru berbicara ketika ditanya atau suasana sudah tenang.",
    General: "Menggunakan kalimat-kalimat umum yang sederhana untuk menyampaikan perasaannya ('Aku senang sekali hari ini').",
    Specific: "Menggunakan kosakata yang sangat spesifik dan konkret saat menjelaskan keinginannya kepada Anda.",
    Sameness: "Menggunakan kosakata dan gaya bahasa yang konsisten, sering mengulang frasa cerita favorit yang sama.",
    Difference: "Senang menggunakan ekspresi baru, meniru istilah unik yang baru ia dengar dari media/lingkungan luar.",
    Past: "Suka mengawali pembicaraan dengan mengingat kenangan lama ('Ingat tidak waktu kita pergi ke kebun binatang dulu?').",
    Present: "Bicaranya didominasi oleh apa yang ia lihat, rasakan, dan inginkan pada detik ini juga secara spontan.",
    Future: "Suka bercerita tentang impian esok hari, rencana liburan nanti, atau imajinasi masa depannya saat dewasa.",
    Independent: "Menyampaikan pendapatnya secara mandiri tanpa terpengaruh oleh bujukan saudaranya di rumah.",
    Cooperative: "Menyukai komunikasi timbal balik, sering mengajak Anda berdiskusi dan senang ditanya balik tentang ceritanya.",
    People: "Percakapannya selalu berfokus pada orang (guru, teman sekelas, sepupu) dan hubungan pertemanan mereka.",
    Task: "Percakapannya berfokus pada tugas, prestasi, mainan baru yang berhasil ia rakit, atau game yang berhasil ia menangkan.",
    Possibility: "Senang mendiskusikan hal-hal imajinatif, hipotesis, dan ide-ide unik yang menantang kreativitas berpikirnya.",
    Necessity: "Bicaranya terfokus pada aturan, janji yang harus ditepati, dan hal-hal wajib yang menurutnya harus segera dilaksanakan."
  },
  LEADERSHIP_STYLE: {
    Toward: "Anak memimpin temannya dengan mengajak mereka menuju keseruan atau aktivitas baru yang menantang. Ia adalah inisiator permainan yang optimis.",
    Away: "Anak menjaga kelompok bermainnya dengan mengingatkan bahaya atau kesalahan yang harus dihindari ('Jangan main di sana, nanti jatuh'). Ia adalah penjaga keamanan tim.",
    Internal: "Anak memimpin kelompok dengan menetapkan standar dan idenya sendiri secara kuat, tidak mudah goyah oleh protes temannya.",
    External: "Anak memimpin dengan gaya yang demokratis, selalu berkoordinasi dan mencari persetujuan guru atau orang tua di dekatnya.",
    Options: "Anak memperkaya permainan tim dengan memberikan banyak alternatif game baru agar suasana bermain selalu segar.",
    Procedures: "Anak mengatur tim bermain dengan membuat aturan main tertulis atau membagi peran secara sistematis dan rapi.",
    BigPicture: "Ia memimpin kelompok dengan memberikan visi permainan besar, membiarkan teman-temannya yang mengatur detail teknisnya.",
    Detail: "Ia memimpin dengan mengatur posisi bermain secara sangat terperinci dan teliti agar semua berjalan sempurna tanpa kesalahan.",
    Matching: "Ia menyatukan kelompok bermain dengan merangkul semua anak agar merasa nyaman dan menghindari perpecahan kelompok.",
    Mismatching: "Ia berani tampil beda dalam kelompok dan sering memberikan solusi alternatif yang tidak terpikirkan oleh anak lain.",
    Self: "Ia memimpin permainan agar berjalan sesuai dengan kenyamanan dan keinginannya sendiri sebagai prioritas utama.",
    Others: "Ia memimpin dengan sangat peduli pada kenyamanan seluruh temannya, memastikan tidak ada anak yang merasa sedih atau tersisih.",
    Proactive: "Ia langsung mengambil kendali permainan, mengajak teman-temannya berlari dan bertindak secara fisik tanpa ragu.",
    Reactive: "Ia memimpin di balik layar, menganalisis jalannya permainan kelompok dan memberikan saran taktis yang cerdas.",
    General: "Menjelaskan aturan bermain kelompok secara garis besar saja agar permainan bisa segera dimulai.",
    Specific: "Mengatur aturan bermain tim dengan sangat rinci hingga tidak ada celah bagi perdebatan aturan main.",
    Sameness: "Suka memimpin permainan tradisional atau game akrab yang sudah biasa mereka mainkan bersama.",
    Difference: "Senang mengusulkan game baru yang unik dan belum pernah dimainkan kelompoknya sebelumnya.",
    Past: "Memimpin dengan menerapkan aturan sukses dari permainan hari kemarin yang terbukti menyenangkan kelompoknya.",
    Present: "Fokus menjaga permainan tim berjalan seru pada detik ini juga tanpa memikirkan skor akhir.",
    Future: "Memimpin dengan menyusun strategi matang untuk memenangkan kompetisi permainan di akhir acara.",
    Independent: "Cenderung memilih menyelesaikan tugas kelompoknya sendiri daripada harus membagi tugas dengan teman lain.",
    Cooperative: "Sangat menonjol dalam membagi peran secara adil dan menikmati kolaborasi interaktif bersama seluruh anggota kelompok.",
    People: "Ia memimpin kelompok dengan mengutamakan keceriaan hubungan pertemanan di atas kemenangan permainan.",
    Task: "Ia memimpin dengan sangat disiplin mengejar kemenangan tim, marah jika ada temannya yang bermain asal-asalan.",
    Possibility: "Membawa energi imajinatif ke dalam kelompok, mengajak teman-temannya berpetualang dalam permainan fantasi.",
    Necessity: "Menjaga disiplin kelompok bermain dengan ketat agar semua anak mematuhi jadwal dan aturan main bersama secara bertanggung jawab."
  },
  BLINDSPOT: {
    Toward: "Terlalu fokus pada hadiah atau keseruan sehingga mengabaikan bahaya fisik atau mengabaikan ketelitian tugas sekolah.",
    Away: "Mudah cemas, takut gagal, atau terlalu cepat menyerah sebelum mencoba hal baru yang menantang kemampuannya.",
    Internal: "Bisa dicap keras kepala, menolak dinasihati, dan kesulitan menerima aturan formal dari otoritas luar jika ia tidak setuju.",
    External: "Sangat tergantung pada pujian orang lain, mudah patah semangat jika dikritik sedikit saja, dan kurang mandiri berinisiatif.",
    Options: "Kesulitan menyelesaikan tugas hingga tuntas karena perhatiannya mudah teralihkan oleh ide-ide baru yang lebih menarik.",
    Procedures: "Kaku menghadapi perubahan rencana, mudah panik jika alur berantakan, dan kesulitan berkreasi tanpa panduan tertulis.",
    BigPicture: "Sering ceroboh dalam tugas sekolah, melewatkan bagian penting soal ujian, dan kesulitan menyusun rencana belajar yang detail.",
    Detail: "Menghabiskan waktu terlalu lama pada satu bagian kecil sehingga tugas besarnya tidak selesai tepat waktu.",
    Matching: "Cenderung membebek opini teman demi diterima secara sosial, dan takut menyatakan kebenaran jika berisiko konflik.",
    Mismatching: "Terdengar suka membantah, memicu perdebatan kecil dengan orang tua, dan sulit diajak bersepakat secara cepat.",
    Self: "Terlihat egois dalam berteman, kurang peduli perasaan orang lain, dan enggan membagi mainan kesayangannya.",
    Others: "Rentan kelelahan mental karena terlalu memikirkan kenyamanan teman, dan kesulitan mempertahankan hak/keinginannya sendiri.",
    Proactive: "Rentan mengalami cedera fisik ringan karena langsung bertindak tanpa melihat risiko bahaya di sekelilingnya.",
    Reactive: "Bisa kehilangan banyak kesempatan emas karena terlalu lama ragu-ragu dan mengamati di awal permainan.",
    General: "Kesulitan memahami detail materi pelajaran hafalan yang menuntut ketelitian kata-demi-kata.",
    Specific: "Mudah stres jika diberi instruksi umum yang menuntut kemandirian anak dalam menjabarkan langkah kerjanya.",
    Sameness: "Kesulitan beradaptasi dengan perubahan besar (seperti pindah kelas atau sekolah baru) dan rentan mengalami kecemasan sosial.",
    Difference: "Kesulitan membangun konsentrasi jangka panjang pada satu hobi atau pelajaran yang menuntut latihan berulang.",
    Past: "Cenderung menyimpan dendam atau rasa bersalah terlalu lama atas kejadian tidak menyenangkan yang sudah lewat.",
    Present: "Kurang memiliki kedisiplinan menabung dan kesulitan memahami pentingnya belajar hari ini untuk masa depan.",
    Future: "Sering melamun di kelas membayangkan hal-hal lain, dan mudah cemas memikirkan skenario terburuk masa depan.",
    Independent: "Menjauhkan diri dari pertemanan sosial, kesulitan bekerja kelompok, dan terlihat tertutup dari lingkungan luar.",
    Cooperative: "Kesulitan mandiri menyelesaikan tugas individu dan selalu menuntut kehadiran Anda untuk mendampinginya belajar.",
    People: "Mudah mengabaikan tugas akademis demi bermain dengan teman, dan rentan menjadi korban tekanan teman sebaya.",
    Task: "Bisa dicap kaku dan tidak asyik oleh temannya karena terlalu berambisi menang dan kurang sabar menghadapi kelemahan teman.",
    Possibility: "Rentan tidak menyelesaikan tugas sekolah karena terlalu asyik mengkhayal dan menjelajahi ide-ide baru yang tak berujung.",
    Necessity: "Kurang memiliki inisiatif kreatif sendiri, hanya bertindak jika disuruh secara tegas, dan kaku jika menghadapi ketidakpastian aturan."
  },
  DEVELOPMENT: {
    Toward: "Latihlah anak untuk berhenti sejenak dan memeriksa kembali pekerjaannya sebelum diserahkan, serta ajarkan kesabaran melalui aktivitas bertahap.",
    Away: "Bantu anak meredakan kecemasannya dengan memvalidasi perasaannya, serta berikan tantangan kecil berisiko rendah untuk membangun keberaniannya secara bertahap.",
    Internal: "Gunakan teknik diskusi dua arah dengan memberikan pilihan alternatif dan menjelaskan alasan logis di balik setiap aturan yang Anda tetapkan.",
    External: "Latihlah anak mengambil keputusan kecil mandiri (seperti memilih menu bekalnya) dan kurangi ketergantungan verbalnya pada pujian Anda secara perlahan.",
    Options: "Bimbing anak untuk menyelesaikan satu aktivitas/tugas sebelum memulai aktivitas baru dengan membuat kesepakatan tertulis yang menyenangkan.",
    Procedures: "Latihlah anak menghadapi perubahan kecil (seperti rute jalan yang berbeda) secara santai untuk melatih kelenturan mentalnya dalam ketidakpastian.",
    BigPicture: "Gunakan checklist bergambar untuk membimbingnya memperhatikan langkah-langkah detail tugas sekolahnya secara menyenangkan.",
    Detail: "Bantu anak melihat tujuan utama dengan menanyakan 'Apa inti tugas ini?' dan gunakan timer untuk membantunya mengatur waktu pengerjaan detail.",
    Matching: "Dukung anak untuk berani menyampaikan pendapat pribadinya yang berbeda, serta ajarkan bahwa perbedaan pendapat itu wajar dan aman.",
    Mismatching: "Arahkan argumen kritisnya ke dalam diskusi cerdas, ajarkan etika berargumen yang sopan, dan berikan ia ruang untuk bernegosiasi secara adil.",
    Self: "Latih kepedulian sosialnya dengan mengajaknya bermain game berbagi peran atau melibatkan dirinya dalam kegiatan sosial keluarga secara aktif.",
    Others: "Ajarkan anak konsep batasan diri yang sehat (boundaries) dan beri penguatan bahwa kenyamanan dirinya sendiri juga sangat penting dan patut dihargai.",
    Proactive: "Ajarkan aturan keselamatan fisik dengan tegas sebelum beraktivitas, dan latih ia merencanakan tindakan sederhana sebelum melangkah.",
    Reactive: "Berikan waktu persiapan sebelum memulai aktivitas baru, dan temani ia mengamati di pinggir lapangan hingga ia merasa siap bergabung sendiri.",
    General: "Gunakan media belajar visual konseptual (seperti infografis) dan latih ketelitian membacanya lewat permainan mencari kata detail.",
    Specific: "Berikan contoh konkret atau demonstrasi fisik terlebih dahulu sebelum memintanya mengerjakan tugas belajar yang baru.",
    Sameness: "Kenalkan perubahan-perubahan kecil dalam kehidupan sehari-hari (seperti menu sarapan baru) secara menyenangkan untuk membangun kelenturan adaptasinya.",
    Difference: "Bantu anak menemukan keunikan atau tantangan baru di dalam aktivitas rutin agar ia tidak mudah bosan dan kehilangan minat belajarnya.",
    Past: "Bantu anak melepaskan beban emosi negatif masa lalunya dengan mengajaknya memvisualisasikan kegagalan sebagai pelajaran berharga yang sudah selesai.",
    Present: "Ajarkan konsep menabung sederhana menggunakan celengan transparan agar ia bisa melihat hasil akumulasi usahanya secara visual dari waktu ke waktu.",
    Future: "Latihlah ia untuk memfokuskan pikirannya pada apa yang bisa ia lakukan hari ini untuk mewujudkan impian masa depannya.",
    Independent: "Ajak ia bergabung dalam komunitas minat bakat anak (seperti klub menggambar atau olahraga) untuk merangsang kemampuan sosialnya secara bertahap.",
    Cooperative: "Berikan tugas individu kecil yang menarik di rumah untuk melatih kemandiriannya menyelesaikan tanggung jawab tanpa bantuan konstan.",
    People: "Terapkan aturan waktu belajar yang disiplin di rumah, serta bimbing ia cara memilih teman bergaul yang memberikan pengaruh positif bagi dirinya.",
    Task: "Latih kepekaan sosialnya melalui permainan kolaboratif bebas tanpa skor kemenangan untuk melunakkan sikap kompetitifnya yang berlebihan.",
    Possibility: "Bantu anak menyusun rencana penyelesaian ide-idenya ke dalam langkah praktis terukur agar hasil kreativitasnya benar-benar terwujud.",
    Necessity: "Ajak anak berkreasi bebas tanpa aturan main kaku sesekali, dan berikan ia ruang untuk mengambil keputusan spontan dalam liburan keluarga."
  }
};


// --- careerEngine.js ---
const CAREER_ENGINE = {

Trainer:[
"Toward",
"People",
"Options",
"BigPicture",
"Future"
],

Coach:[
"People",
"Others",
"Toward",
"BigPicture",
"Future"
],

Entrepreneur:[
"Toward",
"Internal",
"Options",
"Possibility",
"BigPicture"
],

PublicSpeaker:[
"Toward",
"People",
"General",
"Future",
"Options"
],

Consultant:[
"Internal",
"BigPicture",
"Options",
"People",
"Future"
],

HRD:[
"People",
"Others",
"Cooperative",
"Matching",
"Future"
],

Sales:[
"Toward",
"People",
"Options",
"Possibility",
"Proactive"
],

Marketing:[
"Options",
"Possibility",
"Difference",
"Future",
"People"
],

Teacher:[
"People",
"Others",
"Cooperative",
"Matching",
"Procedures"
],

Manager:[
"Task",
"Future",
"BigPicture",
"Procedures",
"Internal"
],

Leader:[
"Task",
"Future",
"Toward",
"Internal",
"BigPicture"
],

ProjectManager:[
"Task",
"Procedures",
"Future",
"Specific",
"Internal"
],

BusinessDevelopment:[
"Possibility",
"Future",
"Options",
"People",
"Toward"
],

CustomerService:[
"People",
"Others",
"Matching",
"Cooperative",
"Present"
],

ContentCreator:[
"Difference",
"Possibility",
"Options",
"Future",
"People"
]

};

// --- CareerCompassEngine.js ---
const CAREER_COMPASS_ENGINE = {

TechnologyDigital:{

meta:[
"Internal",
"Specific",
"Task",
"Procedures",
"Future"
],

title:"Teknologi, Pemrograman & Pengembangan Digital",

icon:"💻",

overview:"Bidang ini berfokus pada pengembangan teknologi, perangkat lunak, sistem digital, aplikasi, kecerdasan buatan, keamanan siber, dan berbagai inovasi berbasis teknologi yang terus berkembang di era digital.",

whyFit:`Berdasarkan pola Meta Program yang kamu miliki, kamu cenderung nyaman berpikir secara logis, sistematis, dan terstruktur. Kamu senang memahami cara kerja suatu sistem, menyelesaikan masalah secara bertahap, serta terus mempelajari hal-hal baru yang dapat meningkatkan kemampuanmu. Kombinasi ini merupakan modal yang sangat baik untuk berkembang di bidang teknologi digital. Walaupun tetap dapat sukses di berbagai bidang lain, karakteristikmu menunjukkan potensi yang kuat untuk menikmati pekerjaan yang membutuhkan analisis, ketelitian, dan kemampuan memecahkan masalah.`,

majors:[
"Teknik Informatika",
"Ilmu Komputer",
"Sistem Informasi",
"Rekayasa Perangkat Lunak",
"Teknologi Informasi",
"Computer Engineering",
"Cyber Security",
"Artificial Intelligence",
"Data Science",
"Software Engineering"
],

schoolSubjects:[
"Informatika",
"Matematika",
"Fisika",
"Bahasa Inggris",
"Logika",
"Statistika"
],

activities:[
"Belajar dasar pemrograman.",
"Membuat website sederhana.",
"Membuat aplikasi mobile sederhana.",
"Mengikuti lomba coding.",
"Mengikuti Hackathon.",
"Bergabung dengan komunitas programmer.",
"Belajar Artificial Intelligence.",
"Membuat portofolio proyek digital.",
"Mengikuti bootcamp teknologi.",
"Belajar UI/UX Design."
],

skills:[
"Logical Thinking",
"Problem Solving",
"Critical Thinking",
"Programming",
"Analytical Thinking",
"Computational Thinking",
"English Communication",
"Team Collaboration",
"Creativity",
"Continuous Learning"
],

careers:[
"Software Engineer",
"Backend Developer",
"Frontend Developer",
"Full Stack Developer",
"Mobile App Developer",
"Artificial Intelligence Engineer",
"Machine Learning Engineer",
"Data Engineer",
"Cloud Engineer",
"Cyber Security Analyst",
"DevOps Engineer",
"UI Engineer",
"System Analyst",
"Database Engineer",
"Technology Consultant",
"Solutions Architect",
"Game Developer",
"Product Manager"
]

},

ArtificialIntelligence:{

meta:[
"Internal",
"Specific",
"Reactive",
"Future",
"Task"
],

title:"Artificial Intelligence, Machine Learning & Data",

icon:"🤖",

overview:"Bidang ini berfokus pada pengembangan kecerdasan buatan, analisis data, machine learning, automation, dan teknologi yang membantu manusia mengambil keputusan menggunakan data.",

whyFit:`Kamu memiliki kecenderungan berpikir analitis, teliti, dan nyaman mempelajari sesuatu secara mendalam sebelum mengambil kesimpulan. Kamu juga menikmati tantangan intelektual dan memiliki kesabaran dalam memahami pola yang kompleks. Karakteristik tersebut sangat mendukung perkembanganmu di bidang Artificial Intelligence, Data Science, maupun teknologi berbasis analisis data yang saat ini berkembang sangat pesat di berbagai industri.`,

majors:[
"Artificial Intelligence",
"Data Science",
"Computer Science",
"Machine Learning",
"Informatika",
"Matematika",
"Statistika",
"Computer Engineering",
"Data Analytics"
],

schoolSubjects:[
"Matematika",
"Statistika",
"Informatika",
"Fisika",
"Bahasa Inggris"
],

activities:[
"Belajar Python.",
"Mengikuti kompetisi AI.",
"Mempelajari Machine Learning.",
"Membuat proyek analisis data.",
"Mengikuti bootcamp AI.",
"Membaca jurnal teknologi.",
"Belajar Data Visualization.",
"Belajar SQL.",
"Membangun portofolio AI."
],

skills:[
"Analytical Thinking",
"Problem Solving",
"Python Programming",
"Machine Learning",
"Statistics",
"Mathematics",
"Critical Thinking",
"Data Visualization",
"Research Skill",
"Continuous Learning"
],

careers:[
"AI Engineer",
"Machine Learning Engineer",
"Data Scientist",
"Data Analyst",
"Business Intelligence Analyst",
"Research Scientist",
"Computer Vision Engineer",
"NLP Engineer",
"Robotics Engineer",
"AI Consultant",
"Data Engineer",
"Analytics Engineer",
"Decision Scientist",
"Deep Learning Engineer",
"AI Product Manager"
]

},
DataScienceAnalytics:{

meta:[
"Internal",
"Specific",
"Task",
"Future",
"Matching"
],

title:"📊 Data Science, Analytics & Business Intelligence",

icon:"📊",

overview:"Bidang ini berfokus pada pengolahan data menjadi informasi yang bermanfaat untuk membantu pengambilan keputusan dalam bisnis, pemerintahan, kesehatan, pendidikan, maupun teknologi.",

whyFit:`Kamu memiliki kecenderungan menyukai fakta, data, dan pola yang dapat dianalisis. Kamu menikmati proses menemukan hubungan antar informasi dan menarik kesimpulan berdasarkan bukti yang ada. Cara berpikirmu sangat mendukung untuk berkembang di bidang analisis data yang membutuhkan ketelitian, logika, serta kemampuan berpikir kritis.`,

majors:[
"Data Science",
"Statistika",
"Matematika",
"Sistem Informasi",
"Business Analytics",
"Data Analytics",
"Computer Science",
"Aktuaria",
"Artificial Intelligence"
],

schoolSubjects:[
"Matematika",
"Statistika",
"Informatika",
"Ekonomi",
"Bahasa Inggris"
],

activities:[
"Mempelajari Excel tingkat lanjut.",
"Belajar SQL.",
"Belajar Power BI.",
"Belajar Tableau.",
"Membuat dashboard data.",
"Mengikuti kompetisi data.",
"Belajar Python.",
"Menganalisis data sederhana.",
"Mengikuti bootcamp Data Analytics."
],

skills:[
"Analytical Thinking",
"Statistics",
"Problem Solving",
"Critical Thinking",
"Data Visualization",
"SQL",
"Python",
"Excel",
"Business Analysis",
"Communication"
],

careers:[
"Data Analyst",
"Business Intelligence Analyst",
"Business Analyst",
"Data Scientist",
"Marketing Analyst",
"Financial Analyst",
"Risk Analyst",
"Operations Analyst",
"Research Analyst",
"Data Engineer",
"Analytics Consultant",
"Decision Scientist",
"Product Analyst",
"Market Intelligence Analyst",
"Business Intelligence Developer"
]

},

Engineering:{

meta:[
"Task",
"Procedures",
"Specific",
"Internal",
"Future"
],

title:"⚙️ Teknik & Rekayasa",

icon:"⚙️",

overview:"Bidang teknik berfokus pada perancangan, pembangunan, pengembangan, dan penyempurnaan berbagai sistem, mesin, bangunan, maupun teknologi yang memberikan solusi nyata bagi kehidupan manusia.",

whyFit:`Kamu memiliki kecenderungan berpikir sistematis, menyukai tantangan teknis, dan menikmati proses menyelesaikan masalah secara bertahap. Kamu juga nyaman bekerja dengan aturan, prosedur, dan ketelitian sehingga potensimu sangat mendukung untuk berkembang di berbagai bidang rekayasa dan teknik.`,

majors:[
"Teknik Mesin",
"Teknik Sipil",
"Teknik Industri",
"Teknik Elektro",
"Teknik Kimia",
"Teknik Lingkungan",
"Teknik Material",
"Teknik Perkapalan",
"Teknik Penerbangan"
],

schoolSubjects:[
"Matematika",
"Fisika",
"Kimia",
"Informatika",
"Bahasa Inggris"
],

activities:[
"Mengikuti klub robotik.",
"Membuat proyek teknik sederhana.",
"Mengikuti lomba Karya Ilmiah.",
"Mempelajari CAD.",
"Mengikuti Olimpiade Sains.",
"Membuat prototype.",
"Mengikuti workshop engineering.",
"Belajar Arduino.",
"Membuat proyek IoT."
],

skills:[
"Problem Solving",
"Analytical Thinking",
"Engineering Design",
"Critical Thinking",
"Creativity",
"Mathematics",
"Project Management",
"Technical Drawing",
"Communication",
"Teamwork"
],

careers:[
"Mechanical Engineer",
"Civil Engineer",
"Industrial Engineer",
"Electrical Engineer",
"Chemical Engineer",
"Environmental Engineer",
"Automation Engineer",
"Project Engineer",
"Manufacturing Engineer",
"Quality Engineer",
"Process Engineer",
"Construction Manager",
"Maintenance Engineer",
"Energy Engineer",
"Engineering Consultant"
]

},

ArchitectureDesign:{

meta:[
"BigPicture",
"Difference",
"Specific",
"Future",
"Task"
],

title:"🏛️ Arsitektur, Interior & Perencanaan Ruang",

icon:"🏛️",

overview:"Bidang ini menggabungkan kreativitas, estetika, fungsi, serta kemampuan teknis untuk merancang bangunan dan ruang yang nyaman, indah, aman, dan bermanfaat bagi masyarakat.",

whyFit:`Kamu memiliki kemampuan melihat gambaran besar sekaligus memperhatikan detail-detail penting. Kamu juga cenderung kreatif, menyukai inovasi, serta mampu membayangkan berbagai kemungkinan sebelum diwujudkan menjadi sebuah karya. Kombinasi ini sangat mendukung untuk berkembang di bidang arsitektur dan desain ruang.`,

majors:[
"Arsitektur",
"Desain Interior",
"Perencanaan Wilayah dan Kota",
"Arsitektur Lanskap",
"Teknik Sipil",
"Desain Produk"
],

schoolSubjects:[
"Matematika",
"Fisika",
"Seni Budaya",
"Informatika",
"Bahasa Inggris"
],

activities:[
"Belajar SketchUp.",
"Belajar AutoCAD.",
"Membuat desain rumah.",
"Menggambar perspektif.",
"Mengikuti lomba desain.",
"Membangun portofolio karya.",
"Belajar 3D Modeling.",
"Mengikuti komunitas arsitektur."
],

skills:[
"Creativity",
"Spatial Thinking",
"Design Thinking",
"Problem Solving",
"Sketching",
"3D Visualization",
"Communication",
"Project Planning",
"Attention to Detail",
"Presentation Skill"
],

careers:[
"Architect",
"Interior Designer",
"Landscape Architect",
"Urban Planner",
"Building Consultant",
"3D Visualizer",
"BIM Engineer",
"Project Architect",
"Furniture Designer",
"Property Consultant",
"Design Consultant",
"Exhibition Designer",
"Set Designer",
"Urban Designer",
"Construction Planner"
]

},

HealthMedicine:{

meta:[
"People",
"Others",
"Specific",
"Procedures",
"Matching"
],

title:"🩺 Kedokteran & Ilmu Kesehatan",

icon:"🩺",

overview:"Bidang ini berfokus pada upaya menjaga, meningkatkan, dan memulihkan kesehatan manusia melalui ilmu pengetahuan, pelayanan kesehatan, penelitian, serta perkembangan teknologi medis.",

whyFit:`Kamu memiliki kepedulian terhadap orang lain, mampu memperhatikan detail, serta nyaman bekerja mengikuti prosedur yang jelas. Kamu juga cenderung teliti, sabar, dan ingin memberikan manfaat nyata bagi kehidupan orang lain. Karakteristik tersebut menjadi fondasi yang sangat baik untuk berkembang di bidang kesehatan dan pelayanan medis.`,

majors:[
"Kedokteran",
"Kedokteran Gigi",
"Keperawatan",
"Kebidanan",
"Farmasi",
"Gizi",
"Kesehatan Masyarakat",
"Fisioterapi",
"Teknologi Laboratorium Medis",
"Radiologi"
],

schoolSubjects:[
"Biologi",
"Kimia",
"Fisika",
"Matematika",
"Bahasa Inggris"
],

activities:[
"Mengikuti PMR.",
"Mengikuti kegiatan sosial kesehatan.",
"Belajar Pertolongan Pertama (P3K).",
"Mengikuti seminar kesehatan.",
"Mengikuti Olimpiade Biologi.",
"Mengikuti kegiatan volunteer kesehatan.",
"Membaca jurnal kesehatan populer.",
"Mengunjungi laboratorium atau rumah sakit edukatif."
],

skills:[
"Empathy",
"Attention to Detail",
"Communication",
"Critical Thinking",
"Scientific Thinking",
"Problem Solving",
"Teamwork",
"Discipline",
"Observation",
"Continuous Learning"
],

careers:[
"Dokter",
"Dokter Gigi",
"Perawat",
"Bidan",
"Apoteker",
"Ahli Gizi",
"Fisioterapis",
"Analis Laboratorium",
"Radiografer",
"Epidemiolog",
"Health Educator",
"Peneliti Medis",
"Medical Representative",
"Healthcare Consultant",
"Dosen Bidang Kesehatan"
]

},

PsychologyHumanDevelopment:{

meta:[
"People",
"Others",
"BigPicture",
"Future",
"Matching"
],

title:"🧠 Psikologi, Konseling & Pengembangan Manusia",

icon:"🧠",

overview:"Bidang ini mempelajari perilaku manusia, proses berpikir, emosi, hubungan sosial, serta berbagai pendekatan untuk membantu individu berkembang dan mencapai kualitas hidup yang lebih baik.",

whyFit:`Kamu memiliki ketertarikan untuk memahami cara berpikir, perasaan, dan perilaku manusia. Kamu juga cenderung mampu mendengarkan, memahami sudut pandang orang lain, serta ingin membantu mereka berkembang. Karakteristik tersebut menjadi modal yang sangat baik untuk menekuni bidang psikologi, konseling, maupun pengembangan sumber daya manusia.`,

majors:[
"Psikologi",
"Bimbingan dan Konseling",
"Psikologi Pendidikan",
"Psikologi Industri",
"Psikologi Klinis",
"Kesejahteraan Sosial",
"Human Development"
],

schoolSubjects:[
"Biologi",
"Sosiologi",
"Bahasa Indonesia",
"Bahasa Inggris",
"Pendidikan Pancasila"
],

activities:[
"Menjadi mentor sebaya.",
"Mengikuti organisasi sosial.",
"Belajar public speaking.",
"Mengikuti seminar psikologi.",
"Menjadi relawan.",
"Membaca buku psikologi populer.",
"Mengikuti pelatihan konseling dasar.",
"Mengembangkan kemampuan mendengar aktif."
],

skills:[
"Empathy",
"Active Listening",
"Communication",
"Observation",
"Critical Thinking",
"Problem Solving",
"Counseling",
"Public Speaking",
"Relationship Building",
"Emotional Intelligence"
],

careers:[
"Psikolog",
"Konselor",
"Coach",
"Trainer",
"HR Specialist",
"Talent Development",
"Career Counselor",
"Education Consultant",
"Learning Specialist",
"Community Facilitator",
"Organizational Development",
"Behavior Analyst",
"Family Counselor",
"Child Development Specialist",
"Dosen Psikologi"
]

},

BusinessEntrepreneurship:{

meta:[
"Toward",
"Internal",
"Options",
"Possibility",
"Future"
],

title:"🚀 Bisnis, Kewirausahaan & Inovasi",

icon:"🚀",

overview:"Bidang ini berfokus pada menciptakan peluang, membangun usaha, mengembangkan produk atau layanan, serta menghasilkan solusi yang memiliki nilai bagi masyarakat.",

whyFit:`Kamu memiliki semangat untuk berkembang, melihat peluang, dan mencoba berbagai kemungkinan baru. Kamu juga cenderung percaya pada kemampuan diri sendiri serta menikmati tantangan dalam membangun sesuatu dari awal. Karakteristik ini menjadi modal yang sangat baik untuk berkembang sebagai wirausahawan maupun inovator bisnis.`,

majors:[
"Manajemen",
"Kewirausahaan",
"Bisnis Digital",
"Administrasi Bisnis",
"Ekonomi",
"Manajemen Bisnis",
"E-Commerce",
"Inovasi Bisnis"
],

schoolSubjects:[
"Ekonomi",
"Matematika",
"Bahasa Inggris",
"Informatika",
"Bahasa Indonesia"
],

activities:[
"Membuka usaha kecil.",
"Berjualan secara online.",
"Mengikuti Business Plan Competition.",
"Membuat produk digital.",
"Mengikuti inkubator bisnis.",
"Belajar digital marketing.",
"Mengikuti seminar kewirausahaan.",
"Membangun personal branding."
],

skills:[
"Leadership",
"Communication",
"Negotiation",
"Problem Solving",
"Creativity",
"Innovation",
"Financial Literacy",
"Decision Making",
"Sales",
"Marketing"
],

careers:[
"Entrepreneur",
"Startup Founder",
"Business Owner",
"Business Consultant",
"Business Development",
"Product Manager",
"Innovation Manager",
"Digital Entrepreneur",
"E-Commerce Specialist",
"Franchise Developer",
"Business Strategist",
"CEO",
"Social Entrepreneur",
"Venture Builder",
"Business Coach"
]

},

CommunicationMedia:{

meta:[
"People",
"General",
"Options",
"Toward",
"Future"
],

title:"🎤 Komunikasi, Media & Public Relations",

icon:"🎤",

overview:"Bidang ini berfokus pada kemampuan menyampaikan ide, membangun hubungan, memengaruhi orang lain secara positif, serta mengelola informasi melalui berbagai media komunikasi.",

whyFit:`Kamu memiliki kemampuan berinteraksi dengan orang lain, menikmati proses bertukar ide, dan mampu melihat gambaran besar dalam sebuah pembahasan. Kamu juga cenderung berpikir kreatif serta mampu menyampaikan pesan dengan cara yang mudah dipahami. Karakteristik ini sangat mendukung untuk berkembang di bidang komunikasi, media, hubungan masyarakat, maupun penyiaran.`,

majors:[
"Ilmu Komunikasi",
"Public Relations",
"Broadcasting",
"Jurnalistik",
"Media Digital",
"Hubungan Masyarakat",
"Advertising",
"Komunikasi Bisnis",
"Penyiaran",
"Event Communication"
],

schoolSubjects:[
"Bahasa Indonesia",
"Bahasa Inggris",
"Sosiologi",
"Sejarah",
"Informatika"
],

activities:[
"Mengikuti organisasi sekolah.",
"Menjadi MC acara sekolah.",
"Mengikuti lomba pidato atau debat.",
"Membuat podcast.",
"Mengelola media sosial organisasi.",
"Mengikuti pelatihan public speaking.",
"Menjadi penyiar radio sekolah.",
"Membangun personal branding."
],

skills:[
"Communication",
"Public Speaking",
"Storytelling",
"Presentation",
"Negotiation",
"Networking",
"Writing",
"Leadership",
"Creativity",
"Teamwork"
],

careers:[
"Public Relations Specialist",
"Communication Specialist",
"Corporate Communication",
"Media Planner",
"Broadcaster",
"News Presenter",
"Journalist",
"TV Host",
"Radio Announcer",
"Master of Ceremony",
"Communication Consultant",
"Spokesperson",
"Event Organizer",
"Corporate Trainer",
"Brand Communication Specialist"
]

},

CreativeDesign:{

meta:[
"Difference",
"Possibility",
"BigPicture",
"Options",
"Future"
],

title:"🎨 Desain Kreatif, Visual & Multimedia",

icon:"🎨",

overview:"Bidang ini menggabungkan kreativitas, estetika, teknologi, dan kemampuan memvisualisasikan ide menjadi karya yang menarik, komunikatif, dan memiliki nilai bagi masyarakat.",

whyFit:`Kamu memiliki imajinasi yang baik, senang mencoba ide baru, dan mampu melihat berbagai kemungkinan yang belum tentu terpikirkan oleh orang lain. Kamu juga menikmati proses menciptakan sesuatu yang unik serta memiliki ketertarikan terhadap seni, visual, maupun media digital. Potensi ini sangat mendukung untuk berkembang di industri kreatif.`,

majors:[
"Desain Komunikasi Visual",
"Desain Grafis",
"Animasi",
"Multimedia",
"Film",
"Fotografi",
"Desain Produk",
"UI/UX Design",
"Game Design",
"Seni Rupa"
],

schoolSubjects:[
"Seni Budaya",
"Informatika",
"Bahasa Indonesia",
"Bahasa Inggris",
"Matematika"
],

activities:[
"Membuat desain digital.",
"Membangun portofolio karya.",
"Mengikuti lomba desain.",
"Belajar Adobe Creative Suite.",
"Membuat animasi sederhana.",
"Mengelola akun desain di media sosial.",
"Mengikuti komunitas kreatif.",
"Membuat proyek branding."
],

skills:[
"Creativity",
"Design Thinking",
"Visual Communication",
"Adobe Photoshop",
"Adobe Illustrator",
"UI/UX Design",
"Video Editing",
"Photography",
"Storytelling",
"Creative Problem Solving"
],

careers:[
"Graphic Designer",
"UI Designer",
"UX Designer",
"Creative Director",
"Illustrator",
"Animator",
"Motion Graphic Designer",
"Video Editor",
"Film Director",
"Photographer",
"Brand Designer",
"Game Artist",
"Content Designer",
"Art Director",
"Multimedia Specialist"
]

},

DigitalMarketingBranding:{

meta:[
"Toward",
"People",
"Possibility",
"Difference",
"Future"
],

title:"📱 Digital Marketing, Branding & Content Strategy",

icon:"📱",

overview:"Bidang ini berfokus pada strategi pemasaran digital, membangun merek, memahami perilaku konsumen, serta mengembangkan konten yang mampu menarik perhatian dan memberikan pengaruh positif kepada audiens.",

whyFit:`Kamu cenderung mampu melihat peluang, memahami apa yang menarik perhatian orang lain, serta menikmati proses menciptakan ide-ide kreatif. Kamu juga senang mengikuti perkembangan tren dan tidak ragu mencoba pendekatan baru. Karakteristik ini sangat mendukung untuk berkembang di bidang pemasaran digital dan branding.`,

majors:[
"Digital Marketing",
"Manajemen Pemasaran",
"Bisnis Digital",
"Ilmu Komunikasi",
"Advertising",
"Brand Management",
"E-Commerce",
"Marketing Communication"
],

schoolSubjects:[
"Ekonomi",
"Bahasa Indonesia",
"Bahasa Inggris",
"Informatika",
"Matematika"
],

activities:[
"Mengelola media sosial.",
"Membuat konten edukatif.",
"Belajar Meta Ads.",
"Belajar SEO.",
"Membangun personal branding.",
"Mengikuti lomba bisnis digital.",
"Membuat toko online.",
"Mengikuti workshop digital marketing."
],

skills:[
"Digital Marketing",
"Copywriting",
"Content Strategy",
"SEO",
"Social Media Marketing",
"Branding",
"Communication",
"Creative Thinking",
"Analytics",
"Public Speaking"
],

careers:[
"Digital Marketing Specialist",
"Social Media Manager",
"Brand Manager",
"Content Strategist",
"SEO Specialist",
"Performance Marketer",
"Marketing Manager",
"Growth Marketer",
"Advertising Specialist",
"Campaign Manager",
"Brand Consultant",
"E-Commerce Specialist",
"Content Marketing Manager",
"Creative Strategist",
"Marketing Consultant"
]

},

EducationTraining:{

meta:[
"People",
"Others",
"Matching",
"Cooperative",
"Procedures"
],

title:"📚 Pendidikan, Pelatihan & Pengembangan Pembelajaran",

icon:"📚",

overview:"Bidang ini berfokus pada proses membantu orang lain belajar, berkembang, dan mencapai potensi terbaiknya melalui pendidikan, pelatihan, maupun pengembangan kompetensi.",

whyFit:`Kamu memiliki kepedulian terhadap perkembangan orang lain, menikmati proses berbagi pengetahuan, dan senang membantu seseorang memahami sesuatu dengan lebih baik. Kamu juga mampu bekerja secara terstruktur serta sabar dalam mendampingi proses belajar. Karakteristik ini sangat mendukung untuk berkembang di dunia pendidikan dan pelatihan.`,

majors:[
"Pendidikan Guru SD",
"Pendidikan Matematika",
"Pendidikan Bahasa Indonesia",
"Pendidikan Bahasa Inggris",
"Pendidikan IPA",
"Pendidikan Ekonomi",
"Teknologi Pendidikan",
"Pendidikan Luar Biasa",
"Manajemen Pendidikan"
],

schoolSubjects:[
"Bahasa Indonesia",
"Bahasa Inggris",
"Matematika",
"PPKn",
"Sosiologi"
],

activities:[
"Menjadi tutor sebaya.",
"Mengajar adik kelas.",
"Membuat materi pembelajaran.",
"Mengikuti organisasi pendidikan.",
"Menjadi mentor belajar.",
"Mengikuti pelatihan public speaking.",
"Membuat video edukasi.",
"Menjadi relawan mengajar."
],

skills:[
"Teaching",
"Communication",
"Presentation",
"Coaching",
"Facilitation",
"Leadership",
"Empathy",
"Planning",
"Public Speaking",
"Instructional Design"
],

careers:[
"Guru",
"Dosen",
"Trainer",
"Learning Facilitator",
"Corporate Trainer",
"Education Consultant",
"Curriculum Developer",
"Instructional Designer",
"Academic Coach",
"Tutor",
"Learning Experience Designer",
"Education Content Creator",
"Training Manager",
"Learning Specialist",
"School Principal"
]

},

FinanceAccounting:{

meta:[
"Specific",
"Procedures",
"Matching",
"Task",
"Internal"
],

title:"💰 Keuangan, Akuntansi & Manajemen Finansial",

icon:"💰",

overview:"Bidang ini berfokus pada pengelolaan keuangan, pencatatan transaksi, analisis bisnis, investasi, perpajakan, serta pengambilan keputusan finansial secara tepat dan bertanggung jawab.",

whyFit:`Kamu memiliki kecenderungan teliti, sistematis, serta nyaman bekerja dengan data dan aturan yang jelas. Kamu mampu memperhatikan detail tanpa kehilangan fokus terhadap tujuan yang ingin dicapai. Karakteristik ini menjadi modal yang sangat baik untuk berkembang di bidang keuangan, akuntansi, maupun analisis bisnis.`,

majors:[
"Akuntansi",
"Keuangan",
"Manajemen Keuangan",
"Perbankan",
"Ekonomi",
"Perpajakan",
"Aktuaria",
"Financial Technology"
],

schoolSubjects:[
"Matematika",
"Ekonomi",
"Akuntansi",
"Statistika",
"Bahasa Inggris"
],

activities:[
"Belajar investasi dasar.",
"Mengelola anggaran pribadi.",
"Mengikuti kompetisi bisnis.",
"Belajar Excel tingkat lanjut.",
"Belajar analisis laporan keuangan.",
"Mengikuti seminar keuangan.",
"Membuat simulasi investasi.",
"Mengikuti komunitas literasi keuangan."
],

skills:[
"Financial Analysis",
"Attention to Detail",
"Analytical Thinking",
"Problem Solving",
"Microsoft Excel",
"Financial Literacy",
"Decision Making",
"Critical Thinking",
"Business Analysis",
"Integrity"
],

careers:[
"Akuntan",
"Financial Analyst",
"Auditor",
"Investment Analyst",
"Banker",
"Tax Consultant",
"Financial Planner",
"Risk Analyst",
"Budget Analyst",
"Treasury Officer",
"Controller",
"CFO",
"Fintech Specialist",
"Business Analyst",
"Wealth Manager"
]

},

LawJustice:{

meta:[
"Internal",
"Task",
"General",
"Matching",
"Future"
],

title:"⚖️ Hukum, Keadilan & Advokasi",

icon:"⚖️",

overview:"Bidang ini berfokus pada penegakan hukum, perlindungan hak, penyelesaian konflik, penyusunan regulasi, serta menciptakan keadilan bagi masyarakat.",

whyFit:`Kamu memiliki kecenderungan berpikir logis, menjunjung prinsip, dan mampu melihat suatu persoalan dari berbagai sudut pandang. Kamu juga senang memahami aturan serta memiliki keinginan untuk memperjuangkan sesuatu yang dianggap benar. Karakteristik ini sangat mendukung untuk berkembang di bidang hukum dan advokasi.`,

majors:[
"Ilmu Hukum",
"Hukum Bisnis",
"Hukum Internasional",
"Hukum Pidana",
"Hukum Perdata",
"Kenotariatan"
],

schoolSubjects:[
"PPKn",
"Bahasa Indonesia",
"Sejarah",
"Sosiologi",
"Bahasa Inggris"
],

activities:[
"Mengikuti debat.",
"Bergabung dengan klub hukum.",
"Mengikuti Model United Nations.",
"Mengikuti organisasi siswa.",
"Membaca isu hukum terkini.",
"Mengikuti lomba pidato.",
"Mempelajari dasar-dasar hukum.",
"Mengikuti seminar hukum."
],

skills:[
"Critical Thinking",
"Argumentation",
"Negotiation",
"Communication",
"Problem Solving",
"Legal Reasoning",
"Public Speaking",
"Writing",
"Leadership",
"Integrity"
],

careers:[
"Advokat",
"Hakim",
"Jaksa",
"Legal Consultant",
"Corporate Lawyer",
"Notaris",
"Mediator",
"Legal Officer",
"Compliance Officer",
"Legal Researcher",
"Diplomat Hukum",
"Dosen Hukum",
"Policy Analyst",
"Human Rights Officer",
"Legal Counsel"
]

},

GovernmentPublicPolicy:{

meta:[
"People",
"Task",
"Future",
"Cooperative",
"General"
],

title:"🏛️ Pemerintahan, Kebijakan Publik & Kepemimpinan",

icon:"🏛️",

overview:"Bidang ini berfokus pada pelayanan publik, penyusunan kebijakan, tata kelola pemerintahan, pembangunan masyarakat, serta kepemimpinan dalam sektor publik.",

whyFit:`Kamu memiliki kepedulian terhadap masyarakat serta mampu melihat tujuan yang lebih besar daripada kepentingan pribadi. Kamu menikmati kerja sama, memiliki rasa tanggung jawab, dan tertarik menciptakan perubahan yang bermanfaat bagi banyak orang. Karakteristik ini mendukung untuk berkembang di dunia pemerintahan maupun kebijakan publik.`,

majors:[
"Administrasi Publik",
"Ilmu Pemerintahan",
"Kebijakan Publik",
"Administrasi Negara",
"Politik Pemerintahan",
"Pembangunan Sosial"
],

schoolSubjects:[
"PPKn",
"Sejarah",
"Sosiologi",
"Ekonomi",
"Bahasa Indonesia"
],

activities:[
"Mengikuti OSIS atau MPK.",
"Mengikuti organisasi kepemudaan.",
"Mengikuti simulasi sidang.",
"Mengikuti kegiatan sosial.",
"Mengikuti pelatihan kepemimpinan.",
"Menjadi panitia kegiatan sekolah.",
"Mengikuti seminar kebijakan publik.",
"Menjadi relawan masyarakat."
],

skills:[
"Leadership",
"Communication",
"Public Policy",
"Decision Making",
"Negotiation",
"Strategic Thinking",
"Problem Solving",
"Teamwork",
"Public Speaking",
"Integrity"
],

careers:[
"ASN",
"Analis Kebijakan",
"Perencana Pembangunan",
"Camat",
"Lurah",
"Administrator Publik",
"Policy Advisor",
"Legislative Staff",
"Government Consultant",
"Project Manager Pemerintah",
"Political Analyst",
"Public Affairs Specialist",
"Public Administrator",
"Dosen Administrasi Publik",
"Konsultan Kebijakan"
]

},

InternationalRelations:{

meta:[
"People",
"Future",
"General",
"Cooperative",
"Difference"
],

title:"🌍 Hubungan Internasional, Diplomasi & Kerja Sama Global",

icon:"🌍",

overview:"Bidang ini berfokus pada hubungan antarnegara, diplomasi, kerja sama internasional, organisasi global, perdagangan internasional, serta penyelesaian berbagai isu dunia.",

whyFit:`Kamu memiliki rasa ingin tahu yang tinggi terhadap dunia, mudah memahami berbagai sudut pandang, serta menikmati interaksi dengan orang dari latar belakang yang berbeda. Kamu juga mampu melihat gambaran besar dan tertarik mempelajari isu-isu global. Potensi ini sangat mendukung untuk berkembang di bidang hubungan internasional dan diplomasi.`,

majors:[
"Hubungan Internasional",
"Ilmu Politik",
"Diplomasi",
"Studi Global",
"Perdagangan Internasional",
"International Business"
],

schoolSubjects:[
"Bahasa Inggris",
"Sejarah",
"Sosiologi",
"Geografi",
"Ekonomi"
],

activities:[
"Mengikuti Model United Nations.",
"Belajar bahasa asing.",
"Mengikuti pertukaran pelajar.",
"Mengikuti organisasi internasional.",
"Mengikuti seminar global.",
"Membaca berita internasional.",
"Mengikuti debat bahasa Inggris.",
"Menjadi volunteer internasional."
],

skills:[
"English Communication",
"Cross Cultural Communication",
"Negotiation",
"Critical Thinking",
"Diplomacy",
"Public Speaking",
"Networking",
"Leadership",
"Problem Solving",
"Global Awareness"
],

careers:[
"Diplomat",
"International Relations Officer",
"Foreign Affairs Specialist",
"Trade Representative",
"International NGO Officer",
"Embassy Staff",
"International Business Consultant",
"Political Analyst",
"Country Risk Analyst",
"International Project Manager",
"Humanitarian Officer",
"United Nations Staff",
"International Development Specialist",
"Foreign Correspondent",
"Dosen Hubungan Internasional"
]

},
JournalismBroadcasting:{

meta:[
"People",
"General",
"Difference",
"Future",
"Proactive"
],

title:"📰 Jurnalisme, Broadcasting & Media Informasi",

icon:"📰",

overview:"Bidang ini berfokus pada pencarian informasi, penyampaian berita, pembuatan konten informatif, penyiaran, serta membangun komunikasi yang akurat dan bermanfaat bagi masyarakat.",

whyFit:`Kamu memiliki rasa ingin tahu yang tinggi, senang mengikuti perkembangan berbagai peristiwa, dan mampu melihat suatu kejadian dari berbagai sudut pandang. Kamu juga menikmati proses mencari informasi, menceritakan kembali sebuah peristiwa, serta berkomunikasi dengan banyak orang. Karakteristik ini sangat mendukung untuk berkembang di dunia media dan jurnalistik.`,

majors:[
"Jurnalistik",
"Broadcasting",
"Ilmu Komunikasi",
"Penyiaran",
"Media Digital",
"Televisi & Film"
],

schoolSubjects:[
"Bahasa Indonesia",
"Bahasa Inggris",
"Sosiologi",
"Sejarah",
"Informatika"
],

activities:[
"Mengelola majalah sekolah.",
"Menjadi reporter sekolah.",
"Membuat podcast.",
"Membuat vlog edukatif.",
"Mengelola media sosial sekolah.",
"Mengikuti lomba jurnalistik.",
"Membuat berita sekolah.",
"Mengikuti pelatihan broadcasting."
],

skills:[
"Writing",
"Interview",
"Storytelling",
"Communication",
"Critical Thinking",
"Research",
"Public Speaking",
"Video Production",
"Photography",
"Digital Media"
],

careers:[
"Journalist",
"News Anchor",
"TV Presenter",
"Radio Broadcaster",
"Reporter",
"News Producer",
"Editor",
"Content Journalist",
"Media Researcher",
"News Writer",
"Digital Producer",
"Media Consultant",
"Correspondent",
"Podcast Producer",
"Broadcast Manager"
]

},

FilmAnimationCreativeMedia:{

meta:[
"Difference",
"Possibility",
"BigPicture",
"People",
"Future"
],

title:"🎬 Film, Animasi & Industri Kreatif",

icon:"🎬",

overview:"Bidang ini berfokus pada pembuatan karya visual, film, animasi, video, efek visual, serta berbagai media kreatif yang mampu menghibur, mengedukasi, dan menginspirasi masyarakat.",

whyFit:`Kamu memiliki imajinasi yang tinggi, senang menciptakan ide-ide baru, dan mampu melihat berbagai kemungkinan yang belum tentu terpikirkan oleh orang lain. Kamu menikmati proses berkarya serta mampu menggabungkan kreativitas dengan teknologi untuk menghasilkan sesuatu yang bernilai.`,

majors:[
"Film",
"Animasi",
"Multimedia",
"Sinematografi",
"Visual Effect",
"Game Art",
"Digital Media"
],

schoolSubjects:[
"Seni Budaya",
"Informatika",
"Bahasa Indonesia",
"Bahasa Inggris"
],

activities:[
"Membuat film pendek.",
"Belajar editing video.",
"Membuat animasi.",
"Mengikuti festival film pelajar.",
"Membuat channel YouTube.",
"Membangun portofolio karya.",
"Belajar Blender.",
"Mengikuti komunitas film."
],

skills:[
"Creativity",
"Video Editing",
"Animation",
"Storytelling",
"Visual Communication",
"Photography",
"Teamwork",
"Creative Thinking",
"Project Management",
"Digital Production"
],

careers:[
"Film Director",
"Animator",
"3D Artist",
"Motion Graphic Designer",
"Video Editor",
"Cinematographer",
"Creative Producer",
"Script Writer",
"Game Artist",
"Visual Effect Artist",
"Film Producer",
"Content Producer",
"Creative Director",
"Multimedia Specialist",
"Animation Supervisor"
]

},

MusicPerformingArts:{

meta:[
"People",
"Difference",
"Possibility",
"Future",
"Toward"
],

title:"🎼 Musik, Seni Pertunjukan & Performing Arts",

icon:"🎼",

overview:"Bidang ini berfokus pada pengembangan kemampuan bermusik, seni pertunjukan, ekspresi kreatif, dan kemampuan menghibur maupun menginspirasi orang lain melalui karya seni.",

whyFit:`Kamu memiliki kemampuan mengekspresikan diri, menyukai kreativitas, serta menikmati interaksi dengan banyak orang. Kamu juga terdorong untuk menghasilkan karya yang mampu memberikan pengalaman positif bagi orang lain. Potensi ini sangat baik untuk berkembang di dunia seni pertunjukan.`,

majors:[
"Seni Musik",
"Seni Tari",
"Seni Teater",
"Performing Arts",
"Music Production",
"Entertainment Business"
],

schoolSubjects:[
"Seni Budaya",
"Bahasa Indonesia",
"Bahasa Inggris"
],

activities:[
"Mengikuti band sekolah.",
"Mengikuti paduan suara.",
"Mengikuti teater.",
"Mengikuti lomba musik.",
"Mengikuti festival seni.",
"Membuat karya musik.",
"Belajar produksi musik.",
"Mengikuti komunitas seni."
],

skills:[
"Creativity",
"Performance",
"Stage Confidence",
"Communication",
"Collaboration",
"Musical Skill",
"Leadership",
"Presentation",
"Discipline",
"Emotional Expression"
],

careers:[
"Musician",
"Singer",
"Composer",
"Music Producer",
"Music Director",
"Actor",
"Theater Performer",
"Voice Talent",
"Entertainment Producer",
"Music Teacher",
"Session Musician",
"Sound Designer",
"Music Arranger",
"Artist Manager",
"Performing Arts Consultant"
]

},

FashionBeautyLifestyle:{

meta:[
"Difference",
"Possibility",
"People",
"Future",
"Options"
],

title:"👗 Fashion, Beauty & Lifestyle",

icon:"👗",

overview:"Bidang ini berfokus pada desain fashion, kecantikan, gaya hidup, pengembangan produk, serta membangun pengalaman yang menarik melalui kreativitas dan inovasi.",

whyFit:`Kamu memiliki kreativitas yang tinggi, menyukai perubahan, dan mampu melihat peluang melalui tren yang berkembang. Kamu juga senang menciptakan sesuatu yang menarik secara visual serta mampu memahami kebutuhan dan preferensi banyak orang. Karakteristik ini sangat mendukung untuk berkembang di industri fashion dan lifestyle.`,

majors:[
"Fashion Design",
"Tata Busana",
"Fashion Business",
"Beauty Industry",
"Cosmetology",
"Product Design"
],

schoolSubjects:[
"Seni Budaya",
"Kewirausahaan",
"Bahasa Inggris",
"Informatika"
],

activities:[
"Membuat desain fashion.",
"Mengikuti lomba desain busana.",
"Membuat konten fashion.",
"Belajar make up artist.",
"Mengikuti fashion show.",
"Membangun brand fashion.",
"Membuat portofolio desain.",
"Mengikuti workshop fashion."
],

skills:[
"Creativity",
"Design Thinking",
"Trend Analysis",
"Branding",
"Communication",
"Entrepreneurship",
"Marketing",
"Visual Styling",
"Presentation",
"Customer Understanding"
],

careers:[
"Fashion Designer",
"Fashion Stylist",
"Beauty Consultant",
"Make Up Artist",
"Fashion Buyer",
"Fashion Merchandiser",
"Brand Manager",
"Creative Director",
"Fashion Entrepreneur",
"Product Developer",
"Fashion Content Creator",
"Image Consultant",
"Beauty Educator",
"Fashion Illustrator",
"Lifestyle Consultant"
]

},

HospitalityTourism:{

meta:[
"People",
"Toward",
"Present",
"Cooperative",
"Matching"
],

title:"🏨 Hospitality, Pariwisata & Manajemen Destinasi",

icon:"🏨",

overview:"Bidang ini berfokus pada pelayanan, pengalaman pelanggan, pengelolaan destinasi wisata, perhotelan, perjalanan, serta industri jasa yang memberikan pengalaman positif kepada banyak orang.",

whyFit:`Kamu senang berinteraksi dengan banyak orang, mampu bekerja sama dalam tim, dan menikmati suasana yang dinamis. Kamu juga memiliki semangat melayani serta mampu membuat orang lain merasa nyaman. Karakteristik tersebut menjadi modal yang sangat baik untuk berkembang di industri hospitality dan pariwisata.`,

majors:[
"Pariwisata",
"Perhotelan",
"Hospitality Management",
"Travel Business",
"Manajemen Destinasi Wisata",
"Hospitality Business",
"MICE (Meeting, Incentive, Convention, Exhibition)"
],

schoolSubjects:[
"Bahasa Inggris",
"Geografi",
"Ekonomi",
"Bahasa Indonesia"
],

activities:[
"Mengikuti kegiatan pemandu wisata.",
"Belajar bahasa asing.",
"Mengikuti event organizer sekolah.",
"Menjadi panitia kegiatan.",
"Mengikuti komunitas pariwisata.",
"Mengikuti pelatihan hospitality.",
"Mengikuti program pertukaran pelajar.",
"Mengembangkan kemampuan pelayanan pelanggan."
],

skills:[
"Communication",
"Hospitality",
"Customer Service",
"Public Speaking",
"Problem Solving",
"Leadership",
"Teamwork",
"Cross Cultural Communication",
"Adaptability",
"English Communication"
],

careers:[
"Hotel Manager",
"Tour Leader",
"Travel Consultant",
"Event Manager",
"Front Office Manager",
"Guest Relation Officer",
"Destination Manager",
"Cruise Staff",
"Airline Service",
"MICE Specialist",
"Hospitality Consultant",
"Resort Manager",
"Tourism Officer",
"Travel Entrepreneur",
"Customer Experience Manager"
]

},

CulinaryFoodBusiness:{

meta:[
"People",
"Task",
"Procedures",
"Difference",
"Toward"
],

title:"👨‍🍳 Kuliner, Tata Boga & Food Business",

icon:"👨‍🍳",

overview:"Bidang ini berfokus pada pengolahan makanan, inovasi kuliner, manajemen usaha makanan, keamanan pangan, serta pengembangan bisnis kuliner yang kreatif.",

whyFit:`Kamu menikmati proses menciptakan sesuatu yang dapat dinikmati orang lain. Kamu juga mampu bekerja secara terstruktur, memperhatikan kualitas hasil, dan memiliki kreativitas dalam mengembangkan ide baru. Potensi tersebut sangat mendukung untuk berkembang di dunia kuliner maupun bisnis makanan.`,

majors:[
"Tata Boga",
"Seni Kuliner",
"Food Technology",
"Manajemen Kuliner",
"Bisnis Kuliner",
"Gastronomi"
],

schoolSubjects:[
"Kimia",
"Biologi",
"Kewirausahaan",
"Bahasa Inggris"
],

activities:[
"Belajar memasak.",
"Mengikuti lomba memasak.",
"Membuat usaha makanan.",
"Mengikuti workshop bakery.",
"Membuat konten kuliner.",
"Mempelajari food photography.",
"Mengelola bisnis makanan kecil.",
"Mengikuti festival kuliner."
],

skills:[
"Creativity",
"Cooking",
"Food Presentation",
"Entrepreneurship",
"Customer Service",
"Innovation",
"Teamwork",
"Time Management",
"Leadership",
"Business Management"
],

careers:[
"Chef",
"Pastry Chef",
"Food Stylist",
"Restaurant Manager",
"Food Entrepreneur",
"Catering Owner",
"Food Product Developer",
"Food Content Creator",
"Nutrition Consultant",
"Food Photographer",
"Bakery Owner",
"Cafe Owner",
"Food Researcher",
"Food Technologist",
"Culinary Instructor"
]

},

EnvironmentalAgriculture:{

meta:[
"Future",
"Task",
"Matching",
"People",
"Procedures"
],

title:"🌱 Lingkungan, Pertanian & Keberlanjutan",

icon:"🌱",

overview:"Bidang ini berfokus pada pelestarian lingkungan, pengelolaan sumber daya alam, pertanian modern, ketahanan pangan, serta pembangunan berkelanjutan.",

whyFit:`Kamu memiliki kepedulian terhadap masa depan, menikmati pekerjaan yang memberikan manfaat jangka panjang, dan mampu bekerja secara konsisten. Kamu juga memiliki kepedulian terhadap lingkungan serta ingin memberikan dampak positif bagi masyarakat. Karakteristik ini mendukung untuk berkembang di bidang lingkungan dan pertanian modern.`,

majors:[
"Pertanian",
"Agroteknologi",
"Agribisnis",
"Kehutanan",
"Ilmu Lingkungan",
"Teknik Lingkungan",
"Peternakan",
"Perikanan"
],

schoolSubjects:[
"Biologi",
"Kimia",
"Geografi",
"Matematika"
],

activities:[
"Mengikuti kegiatan penghijauan.",
"Mengembangkan hidroponik.",
"Mengikuti komunitas lingkungan.",
"Mengikuti penelitian sederhana.",
"Belajar urban farming.",
"Mengikuti kegiatan konservasi.",
"Mengelola kebun sekolah.",
"Mengikuti lomba karya ilmiah."
],

skills:[
"Problem Solving",
"Scientific Thinking",
"Environmental Awareness",
"Research",
"Critical Thinking",
"Project Management",
"Innovation",
"Communication",
"Leadership",
"Data Analysis"
],

careers:[
"Environmental Engineer",
"Agronomist",
"Agribusiness Consultant",
"Forestry Officer",
"Environmental Consultant",
"Sustainability Specialist",
"Food Security Specialist",
"Researcher",
"Conservation Officer",
"Plantation Manager",
"Agricultural Entrepreneur",
"Climate Analyst",
"Environmental Educator",
"CSR Specialist",
"Government Environmental Officer"
]

},

CommunityDevelopmentNGO:{

meta:[
"People",
"Others",
"Cooperative",
"Future",
"Toward"
],

title:"🤝 Pengembangan Masyarakat, NGO & Dampak Sosial",

icon:"🤝",

overview:"Bidang ini berfokus pada pemberdayaan masyarakat, pengembangan komunitas, kegiatan sosial, kemanusiaan, serta menciptakan perubahan positif yang berkelanjutan.",

whyFit:`Kamu memiliki kepedulian terhadap orang lain, menikmati kerja sama, dan ingin memberikan manfaat bagi lingkungan sekitar. Kamu juga mampu membangun hubungan yang baik serta memiliki semangat untuk membantu masyarakat berkembang. Potensi ini sangat mendukung untuk berkembang di sektor sosial maupun organisasi kemanusiaan.`,

majors:[
"Kesejahteraan Sosial",
"Sosiologi",
"Community Development",
"Pembangunan Sosial",
"Ilmu Politik",
"Administrasi Publik"
],

schoolSubjects:[
"Sosiologi",
"PPKn",
"Sejarah",
"Bahasa Indonesia"
],

activities:[
"Menjadi relawan.",
"Mengikuti kegiatan sosial.",
"Mengelola komunitas.",
"Mengikuti organisasi kemanusiaan.",
"Membuat proyek sosial.",
"Mengikuti pelatihan kepemimpinan.",
"Mengikuti bakti sosial.",
"Mengembangkan program pemberdayaan."
],

skills:[
"Leadership",
"Communication",
"Empathy",
"Project Management",
"Community Organizing",
"Public Speaking",
"Negotiation",
"Collaboration",
"Problem Solving",
"Facilitation"
],

careers:[
"Community Development Officer",
"NGO Officer",
"CSR Specialist",
"Social Worker",
"Community Facilitator",
"Humanitarian Officer",
"Program Manager",
"Community Relations",
"Public Affairs Specialist",
"Volunteer Coordinator",
"Social Entrepreneur",
"Development Consultant",
"Community Researcher",
"Foundation Manager",
"Community Educator"
]

},

SportsScience:{

meta:[
"Proactive",
"Toward",
"Task",
"Future",
"Internal"
],

title:"🏅 Olahraga, Kebugaran & Sport Science",

icon:"🏅",

overview:"Bidang ini berfokus pada pengembangan prestasi olahraga, kesehatan fisik, kebugaran, ilmu kepelatihan, rehabilitasi olahraga, dan manajemen industri olahraga.",

whyFit:`Kamu memiliki semangat tinggi, senang bergerak, menikmati tantangan, dan terdorong untuk terus meningkatkan kemampuan diri. Kamu juga memiliki disiplin serta fokus terhadap pencapaian target. Potensi tersebut sangat mendukung untuk berkembang di dunia olahraga maupun kesehatan kebugaran.`,

majors:[
"Ilmu Keolahragaan",
"Pendidikan Jasmani",
"Sport Science",
"Kepelatihan Olahraga",
"Manajemen Olahraga",
"Fisioterapi Olahraga"
],

schoolSubjects:[
"Pendidikan Jasmani",
"Biologi",
"Matematika",
"Bahasa Inggris"
],

activities:[
"Mengikuti klub olahraga.",
"Mengikuti kompetisi olahraga.",
"Belajar sport nutrition.",
"Menjadi pelatih junior.",
"Mengikuti seminar sport science.",
"Mengikuti kegiatan kebugaran.",
"Membangun personal branding atlet.",
"Mengikuti volunteer event olahraga."
],

skills:[
"Leadership",
"Discipline",
"Teamwork",
"Coaching",
"Communication",
"Mental Toughness",
"Problem Solving",
"Time Management",
"Motivation",
"Sports Performance"
],

careers:[
"Atlet Profesional",
"Pelatih Olahraga",
"Strength & Conditioning Coach",
"Sport Scientist",
"Sport Analyst",
"Sport Manager",
"Fitness Trainer",
"Personal Trainer",
"Wasit",
"Event Sport Manager",
"Sport Marketing",
"Sport Psychologist",
"Physical Trainer",
"Sport Consultant",
"Dosen Ilmu Keolahragaan"
]

},

};

// --- careerEngineAnak.js ---
const CAREER_ENGINE_ANAK = {
  SainsTeknologi: {
    meta: ["Internal", "Specific", "Task", "Procedures", "Future"],
    title: "Eksplorasi Sains, Logika & Eksperimen",
  },
  SeniKreatif: {
    meta: ["Options", "Possibility", "Difference", "BigPicture", "Toward"],
    title: "Seni, Kreativitas & Imajinasi Bebas",
  },
  SosialKomunikasi: {
    meta: ["People", "Others", "Cooperative", "Toward", "Matching"],
    title: "Aktivitas Sosial, Diskusi & Kerja Sama Tim",
  },
  OlahragaFisik: {
    meta: ["Proactive", "Present", "Task", "Independent", "Toward"],
    title: "Aktivitas Fisik, Olahraga & Motorik Kasar",
  },
  AkademikStruktur: {
    meta: ["Detail", "Procedures", "Internal", "Task", "Necessity"],
    title: "Akademik Terstruktur & Pembelajaran Runtut",
  }
};


