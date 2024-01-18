let Ramazan = {
    "ditet": [
        {
            "Data": 24,
            "Muaji": "Prill",
            "Dita": "E hene",
            "syfyri": "3:50",
            "lindja_e_diellit": "5:33",
            "dreka": "12:36",
            "ikindia": "16:25",
            "akshami": "19:35",
            "jacia": "21:17",
            "gjatesia_e_dites": "14:02",
            "shenime": "Dita e parë e Ramazanit, e xhuma, Hëna e re"
        },
        {
            "Data": 25,
            "Muaji": "Prill",
            "Dita": "E marte",
            "syfyri": "3:47",
            "lindja_e_diellit": "5:31",
            "dreka": "12:36",
            "ikindia": "16:25",
            "akshami": "19:36",
            "jacia": "21:18",
            "gjatesia_e_dites": "14:05",
            "shenime": ""
        },
        {
            "Data": 26,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:45",
            "lindja_e_diellit": "5:30",
            "dreka": "12:36",
            "ikindia": "16:26",
            "akshami": "19:37",
            "jacia": "21:20",
            "gjatesia_e_dites": "14:07",
            "shenime": ""
        },
        {
            "Data": 27,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:43",
            "lindja_e_diellit": "5:29",
            "dreka": "12:36",
            "ikindia": "16:26",
            "akshami": "19:38",
            "jacia": "21:22",
            "gjatesia_e_dites": "14:09",
            "shenime": ""
        },
        {
            "Data": 28,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:41",
            "lindja_e_diellit": "5:28",
            "dreka": "12:36",
            "ikindia": "16:27",
            "akshami": "19:40",
            "jacia": "21:24",
            "gjatesia_e_dites": "14:12",
            "shenime": ""
        },
        {
            "Data": 29,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:45",
            "lindja_e_diellit": "5:30",
            "dreka": "12:36",
            "ikindia": "16:26",
            "akshami": "19:37",
            "jacia": "21:20",
            "gjatesia_e_dites": "14:07",
            "shenime": ""
        },
        {
            "Data": 30,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:37",
            "lindja_e_diellit": "5:26",
            "dreka": "12:36",
            "ikindia": "16:29",
            "akshami": "19:42",
            "jacia": "21:27",
            "gjatesia_e_dites": "14:16",
            "shenime": ""
        },
        {
            "Data": 1,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:35",
            "lindja_e_diellit": "5:25",
            "dreka": "12:36",
            "ikindia": "16:29",
            "akshami": "19:43",
            "jacia": "21:18",
            "gjatesia_e_dites": "14:18",
            "shenime": "E xhuma"
        },
        {
            "Data": 2,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:33",
            "lindja_e_diellit": "5:24",
            "dreka": "12:36",
            "ikindia": "16:30",
            "akshami": "19:44",
            "jacia": "21:30",
            "gjatesia_e_dites": "14:20",
            "shenime": ""
        },
        {
            "Data": 3,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:31",
            "lindja_e_diellit": "5:22",
            "dreka": "12:36",
            "ikindia": "16:30",
            "akshami": "19:45",
            "jacia": "21:31",
            "gjatesia_e_dites": "14:23",
            "shenime": ""
        },
        {
            "Data": 4,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:29",
            "lindja_e_diellit": "5:20",
            "dreka": "12:35",
            "ikindia": "16:30",
            "akshami": "19:46",
            "jacia": "21:32",
            "gjatesia_e_dites": "14:26",
            "shenime": ""
        },
        {
            "Data": 5,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:27",
            "lindja_e_diellit": "5:18",
            "dreka": "12:35",
            "ikindia": "16:30",
            "akshami": "19:46",
            "jacia": "21:32",
            "gjatesia_e_dites": "14:26",
            "shenime": ""
        },
        {
            "Data": 6,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:25",
            "lindja_e_diellit": "5:17",
            "dreka": "12:35",
            "ikindia": "16:31",
            "akshami": "19:48",
            "jacia": "21:35",
            "gjatesia_e_dites": "14:31",
            "shenime": ""
        },
        {
            "Data": 7,
            "Muaji": "Prill",
            "Dita": "E merkure",
            "syfyri": "3:23",
            "lindja_e_diellit": "5:15",
            "dreka": "12:35",
            "ikindia": "16:31",
            "akshami": "19:49",
            "jacia": "21:36",
            "gjatesia_e_dites": "14:34",
            "shenime": "Hëna e plotë"
        }
    ]
}


let Nata = document.querySelector('#kalendar tbody')

for (let i = 0; i < Ramazan.ditet.length; i++) {
    let ditet = Ramazan.ditet[i]

    let rreshtat = Nata.insertRow()

    rreshtat.insertCell(0).innerHTML = ditet.Data;
    rreshtat.insertCell(1).innerHTML = ditet.Muaji;
    rreshtat.insertCell(2).innerHTML = ditet.Dita;
    rreshtat.insertCell(3).innerHTML = ditet.syfyri;
    rreshtat.insertCell(4).innerHTML = ditet.lindja_e_diellit;
    rreshtat.insertCell(5).innerHTML = ditet.dreka;
    rreshtat.insertCell(6).innerHTML = ditet.ikindia;
    rreshtat.insertCell(7).innerHTML = ditet.akshami;
    rreshtat.insertCell(8).innerHTML = ditet.jacia;
    rreshtat.insertCell(9).innerHTML = ditet.gjatesia_e_dites;
    rreshtat.insertCell(10).innerHTML = ditet.shenime;
}