let news = [
    {
        title: "Pendaftaran PPDB SMK Negeri 1 Pacet Tahap 2 di Buka",
        date: "25-Juni-2021",
        poster: "admin",
        cover:"img/ppdbtahap2.jpg",
        content:"Dalam rangka merealisasikan Program Penerimaan Peserta Didik Baru di situasi pandemik, SMK Negeri 1 Pacet menyelenggarakan PPDB Tahap 2 secara online di tahun 2021.",
        viewer: 0,
        comment: [{
            name: "",
            commentText: "",
            date:""
        }]
    },
    {
        title: "Pendaftaran PPDB SMK Negeri 1 Pacet Tahap 1 di Buka",
        date: "10-Juni-2021",
        poster: "adminPPDB",
        cover:"img/ppdbtahap1.jpg",
        content:"Dalam rangka merealisasikan Program Penerimaan Peserta Didik Baru di situasi pandemik, SMK Negeri 1 Pacet menyelenggarakan PPDB Tahap 1 secara online di tahun 2021.",
        viewer: 0,
        comment: [{
            name: "",
            commentText: "",
            date:""
        }]
    },
    {
        title: "Kegiatan Vaksinasi Tahap 1 COVID-19 DI SMK NEGERI 1 PACET",
        date: "28-Mei-2021",
        poster: "adminPPDB",
        cover:"img/vaksinasi1.jpg",
        content:"Kegiatan ini dihadiri oleh keluarga besar SMK Negeri 1 Pacet.",
        viewer: 0,
        comment: [{
            name: "",
            commentText: "",
            date:""
        }]
    },
    {
        title: "Perlombaan Perpustakaan tingkat Nasional",
        date: "10-Mei-2021",
        poster: "adminPuska",
        cover:"img/lombapuska.jpg",
        content:"SMKN 1 Pacet Termasuk kedalam 7 Besar Perpustakaan terbaik se-Indonesia tingkat SMK.",
        viewer: 0,
        comment: [{
            name: "",
            commentText: "",
            date:""
        }]
    },
    {
        title: "Pendidikan Karakter SMK NEGERI 1 PACET TA. 2020/2021",
        date: "11-September-2021",
        poster: "kesiswaan",
        cover:"img/pendikar.jpg",
        content:"Pendidikan Karakter dilakukan secara Online",
        viewer: 0,
        comment: [{
            name: "",
            commentText: "",
            date:""
        }]
    }
]
let books = [
    {
        title: "OnDuty sepenggal kisah dari penjuru negeri",
        creator: "Taruna Ngeblog",
        publisher: "Stiletto Book -- Yogyakarta",
        year : "2017",
        page : 120, 
        isbn : "ISBN 978-602-7572-86-7"
    },
    {
        title: "Love Life",
        creator: "Diana Rikasari",
        publisher: "Kepustakaan Populer Gramedia (KPG)",
        year : "2017",
        page : 128, 
        isbn : "ISBN 978-602-424-309-8"
    },
    {
        title: "100 dongeng hutan ajaib",
        creator: "Ida Budipranoto",
        publisher: " Bhuana Ilmu Populer (BIP)",
        year : "2017",
        page : 116, 
        isbn : "ISBN 978-602-394-499-6"
    },
    {
        title: "Binahong dan manfaatnya pada budidaya ikan air tawar",
        creator: "Yuniarti Koniyo",
        publisher: " Citra Panigoro. -- Serang",
        year : "2020",
        page : 90, 
        isbn : "ISBN 978-623-6506-45-5"
    },
    {
        title: "Belajar IPA dengan card sort",
        creator: "Tien Martiningsih",
        publisher: "Aan Publishing",
        year : "2020",
        page : 85, 
        isbn : "ISBN 978-623-6663-49-3"
    }
]
//bukuselesai point 15,sedangbaca point 7, berkunjung point 3
let pengunjung = [
    {
        name: "Dedi Setiawan",
        gender : "l",
        bacaSelesai: ["Belajar IPA dengan card sort","Binahong dan manfaatnya pada budidaya ikan air tawar"],
        sedangBaca: ["100 dongeng hutan ajaib"],
        berkunjung: ["01-20-2021","02-10-2021","06-20-2021"],
        point:42
    },
    {
        name: "Anisa Nurul Hakim",
        gender : "p",
        bacaSelesai: ["Belajar IPA dengan card sort"],
        sedangBaca: ["100 dongeng hutan ajaib"],
        berkunjung: ["01-02-2021","06-20-2021"],
        point:28
    },
    {
        name: "Ahmed Huffadzulhaqq",
        gender : "l",
        bacaSelesai: ["OnDuty sepenggal kisah dari penjuru negeri"],
        sedangBaca: [],
        berkunjung: ["05-20-2021"],
        point:18
    },
    {
        name: "Egi Alya Anjani",
        gender : "p",
        bacaSelesai: ["OnDuty sepenggal kisah dari penjuru negeri"],
        sedangBaca: ["100 dongeng hutan ajaib","Belajar IPA dengan card sort"],
        berkunjung: ["01-20-2021","02-25-2021","06-20-2021","06-22-2021"],
        point:41
    },
    {
        name: "Alifia Nurrohman",
        gender : "p",
        bacaSelesai: [],
        sedangBaca: [],
        berkunjung: ["01-20-2021"],
        point:3,
    }
]
function tambahData() {
    let date = new Date()
    let m = date.getMonth()
    let d = date.getDay()
    let y = date.getFullYear()
    let fullDate = `0${m}-${d}-${y}`
    // console.log(y);
    document.getElementById("content").innerHTML = `<div class='tambahdata' style='margin-left:30%;'><h1>Tambah Data Baru</h1>
    <table class='table' style='margin-left:50px;>
    <form id='formTambah' action="index.html">
        <tr>
            <td style='text-align:left;'>
            <label for="firstName" >Full Name</label>
            </td>
            <td>:</td>
            <td><input type="text" name="firstName"></td>
        </tr>
        <tr>
            <td style='text-align:left;'>
            <label for="Gender">Gender:</label>
            </td>
            <td>:</td>
            <td style='text-align:left;'><input style='margin-left:15px;' type="radio" name="gender" value="male">Male
            <input type="radio" name="gender" value="female">Female</td>
        </tr>
        <tr>
            <td style='text-align:left;'><label for="buku">Buku yang akan diBaca:</label></td>
            <td>:</td>
            <td><input type="text" name="buku"></td>
        <tr>
        <input type="hidden" name="date" value="${fullDate}">
        <tr>
            <td colspan='3' style='text-align:right;'>
            <input class='btn' type="submit" value="Tambah Data" onclick='prosesTambah()'></td>
        </tr>
        </form></table></div>`
}
function sortingPengunjung(pengunjung) {
    let output = pengunjung.sort(function (a, b) {
        return parseFloat(a.point) - parseFloat(b.point);
    })

    return output
}
function sortingBooks(books) {
     let output = books.sort(function (a, b) {
        return parseFloat(a.tahun) - parseFloat(b.tahun);
    })

    return output
    
}
function groupingVisitor(pengunjung) {
    let output = []
    let temp = {}
    for (let i = 0; i < pengunjung.length; i++) {
        let date = pengunjung[i].berkunjung
        for (let j = 0; j < date.length; j++){
            let tanggal = date[j]
            if (temp[tanggal] === undefined) {
            temp[tanggal] = {
                name: [],
                }
            }
        temp[tanggal].name.push(pengunjung[i].name)
    }
}
    output.push(temp)
    return output
}
 console.log(groupingVisitor(pengunjung));
//point
function displayPoint() {
    let sort = sortingPengunjung(pengunjung);
    document.getElementById("content").innerHTML = `<h1>Daftar Point</h1>`
    const parent = document.getElementById("content");
    const childrenParent = document.createElement("div")
    childrenParent.setAttribute('class', 'content')
    parent.appendChild(childrenParent)
    console.log(parent);
    for (let i = sort.length -1 ; i >= 0; i--){
        // console.log(pengunjung[i]);
        const child = document.createElement('div');
        child.setAttribute('class', 'card');
        for (const key in pengunjung[i]) {
            let img
            if (pengunjung[i].gender === "l") {
                img = "<img src='img/siswa.png' alt='avatar' style='width:100%'><br>";
            } else {
                img = "<img src='img/siswi.png' alt='avatar' style='width:100%'><br>";
            }
            let tropy;
            if (i === sort.length - 1) {
                tropy = "<img src='img/1.png' style='float:right'>"
            } else if (i === sort.length - 2) {
                tropy = "<img src='img/2.png'style='float:right'>"
            } else if (i === sort.length - 3) {
                tropy = "<img src='img/3.png'style='float:right'>"
            } else {
                tropy = "<img src='img/4.png'style='float:right' height='38'>"
            }
            child.innerHTML = `${tropy}${img}<div class='nama'><h5>${pengunjung[i].name}</h5><p>${pengunjung[i].point} Point</p></div>`
            childrenParent.appendChild(child)
            //console.log(parent);
            //console.log(pengunjung[i].name);
        }
    }
}
function displayNews() {
    document.getElementById("content").innerHTML = `<h1>Berita Terkini</h1>`
    const parent = document.getElementById("content");
    const childrenParent = document.createElement("div")
    childrenParent.setAttribute('class', 'content')
    parent.appendChild(childrenParent)
    console.log(parent);
    for (let i = 0; i < news.length; i++) {
        // console.log(pengunjung[i]);
        const child = document.createElement('div');
        child.setAttribute('class', 'news');
        for (const key in news[i]) {          
            child.innerHTML = `<img src='${news[i].cover}' style='width:100%'><h5>${news[i].title}</h5><p>${news[i].date}<br>By: ${news[i].poster}</p>`
            childrenParent.appendChild(child)
            //console.log(parent);
            //console.log(pengunjung[i].name);
        }
    }
}
function displayBooks() {
    let sorting = sortingBooks(books);
    document.getElementById("content").innerHTML = `<h1>Katalog Buku</h1>`
    const parent = document.getElementById("content");
    const center = document.createElement("center")
    parent.appendChild(center)
    const childrenParent = document.createElement("table")
    childrenParent.setAttribute('border','1')
    center.appendChild(childrenParent)
    const thead = document.createElement('tr')
    thead.setAttribute('align','center')
    thead.setAttribute('bgcolor', 'grey')
    thead.innerHTML = '<td><b>No</b></td><td>Title</b></td><td><b>Creator</b></td><td><b>Year</b></td><td><b>ISBN</b></td>'
    childrenParent.appendChild(thead)
    for (let i = sorting.length -1; i >=0 ; i--){
        // console.log(pengunjung[i]);
        const child = document.createElement('tr');
        for (const key in sorting[i]) {
            child.innerHTML = `<td>${i+1}</td><td>${sorting[i].title}</td><td>${sorting[i].creator}</td><td>${sorting[i].year}</td><td>${sorting[i].isbn}</td>`
            childrenParent.appendChild(child)
            //console.log(parent);
            //console.log(pengunjung[i].name);
        }
    }
}
function displayVisitor() {
    let visitor = groupingVisitor(pengunjung)
    // console.log(visitor);
    let sortVisitor = visitor.sort()
    // console.log(sortVisitor);
    document.getElementById("content").innerHTML = `<h1>Daftar Pengunjung</h1><button class='btn' id='tambahData' onclick='tambahData()'>Tambah Data</button>`
    const parent = document.getElementById("content");
    const center = document.createElement("center")
    parent.appendChild(center)
    const childrenParent = document.createElement("table")
    childrenParent.setAttribute('border','1')
    center.appendChild(childrenParent)
    const thead = document.createElement('tr')
    thead.setAttribute('align','center')
    thead.setAttribute('bgcolor', 'grey')
    thead.innerHTML = '<td><b>No</b></td><td>Tanggal</b></td><td><b>Nama</b></td>'
    childrenParent.appendChild(thead)
    // console.log(typeof(sortVisitor[0]));
    let num = 0
    for (const kunci in sortVisitor[0]){
        // console.log(pengunjung[i]);
        num++
        const child = document.createElement('tr');
        for (const key in sortVisitor[0][kunci]) {
                child.innerHTML = `<td>${num}</td><td>${kunci}</td><td>${sortVisitor[0][kunci][key]}</td>`
                childrenParent.appendChild(child)
            }
            //console.log(parent);
            //console.log(sortVisitor[Object.keys(sortVisitor)][i].name);
        }
}
function displayHome() {
document.getElementById("content").innerHTML = `<img src="img/logo-web-removebg-preview.png">
<h1>Selamat Datang di Perpustakaan SMK Negeri 1 Pacet</h1>`
}