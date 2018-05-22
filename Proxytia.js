
var nama = prompt ("nama anda");
var peran = prompt ("silahkan pilih peran anda. /Ksatria/Tabib/Penyihir");

if (nama ===""&& peran===""){
  console.log("nama dan peran tidak boleh kosong")
}
else if (peran===""){
  console.log("halo " + nama + " pilih peranmu sekarang")
}
else if (peran==="ksatria"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("halo ksatria " + nama + " kamu dapat menyerang dengan senjatamu!")
}
else if (peran=== "tabib"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("halo tabib " + nama + ",kamu akan membantu temanmu yang terluka.") 
}
else if (peran ==="penyihir"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("halo penyihir " + nama + ",ciptakan keajaiban yang membantu kemenanganmu.") 
}
