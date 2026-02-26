class Lingkaran {
    jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }

    hitungLuas(): number {
        return Math.PI * Math.pow(this.jariJari, 2);
    }
}

const bulat = new Lingkaran(30);
console.log(`Jari-jari: ${bulat.jariJari}`);
console.log(`Luas Lingkaran: ${bulat.hitungLuas().toFixed(2)}`);