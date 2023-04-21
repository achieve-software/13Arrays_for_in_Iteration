//aşağıda verilen iki ayrı dizideki eşleşen indis elemanlarını birleştirerek saklayan ayrı bir uygulamayı for in döngüsü ile yazın
const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

const birlestir = (x, y) => {
  let adVeSoyadlar = [];
  for (let i in x) {
    adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
  }
  return adVeSoyadlar;
};
console.log(birlestir(adlar, soyAdlar));
