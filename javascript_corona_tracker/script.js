

fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return response.json()
    })
    .then((data) =>{
        var newc = (data.Countries[137].NewConfirmed)
        var newd = (data.Countries[137].NewDeaths)
        var totalc = (data.Countries[137].TotalConfirmed)
        var totald = (data.Countries[137].TotalDeaths)
        var totalr = (data.Countries[137].TotalRecovered)

        let toate = [newc,newd,totalc,totald,totalr];

        var rata = toate[3]*100/toate[2];

        var whole = Math.floor(rata)

        var s1 = ((rata + "").split(".")[1]).length;
        var s2 = ((rata + "").split(".")[1]);
        var s3 = (s2 / 10**s1)*100;
        var s4 = Math.floor(s3);

        document.querySelector('#newc').innerHTML = 'Cazuri confirmate noi' + ' : ' +toate[0];
        document.querySelector('#newd').innerHTML = 'Decese noi' + ' : ' +toate[1];
        document.querySelector('#totalc').innerHTML = 'Cazuri totale' + ' : ' +toate[2];
        document.querySelector('#totald').innerHTML = 'Morti' + ' : ' + toate[3];
        document.querySelector('#totalr').innerHTML = 'Cazuri vindecate' + ' : ' + toate[4];
        document.querySelector('#mv').innerHTML = 'Rata Mortalitate' + ' : ' + `${whole}.${s4}%`;
    })


