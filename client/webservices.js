//getNombres(15001);
function getNombres(codigoPostal) {
    var url = 'http://api.geonames.org/postalCodeLookupJSON?postalcode=' + codigoPostal + '&country=ES&username=demo&callback=procesarNombres';
    importScripts(url);
}
function procesarNombres(nombres) {
    console.log(JSON.stringify(nombres));
    var index;
    for (index = 0; index < nombres.length; ++index) {
        postMessage(nombre);
    };
}



getIp();
function getIp() {
    var url = 'http://www.telize.com/geoip?callback=procesarIP';
    importScripts(url);
}

function procesarIP(geoIP) {
    postMessage(geoIP);
}


getRepos('Angular');
function getRepos(user) {
    var url = 'https://api.github.com/users/'+user+'/repos?callback=procesarRepos';
    importScripts(url);
}

function procesarRepos(reposJSON) {
    var repos = reposJSON.data;
    console.log(repos.length);
    var index;
    for (index = 0; index < repos.length; ++index) {
        var repo = repos[index];
        if(repo.watchers_count > 100)
            postMessage(repos[index].full_name);
    };
}


getNumReposLanguaje('j');
function getNumReposLanguaje(lenguaje) {
    try{
    var url = 'https://api.github.com/search/repositories?q='+lenguaje+'&callback=procesarNumRepos';
    importScripts(url);
    }
    catch(e){
        postMessage(e.message);
    }
}

var maxRepos;
function procesarNumRepos(reposJSON) {
    if(maxRepos==undefined) 
    {
        maxRepos=0;
        postMessage(maxRepos);
    }
    var numRepos = reposJSON.data.total_count;
    console.log(new Date());
    if(numRepos>=maxRepos)
    {
        maxRepos=numRepos;
        postMessage(maxRepos);
    }
    setInterval(getNumReposLanguaje('java'),10000);
}

