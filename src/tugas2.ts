interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuFavorit: Buku = {
    judul: "Rumah untuk Alie",
    pengarang: "Lenn Liu",
    tahunTerbit: 2023,
    tersedia: true
};

console.log("Detail Buku:");
console.table(bukuFavorit);