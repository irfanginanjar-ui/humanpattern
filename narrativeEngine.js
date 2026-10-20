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