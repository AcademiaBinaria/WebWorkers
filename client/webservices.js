getNombres(15001);
function getNombres(codigoPostal) {
  var url = 'http://api.geonames.org/postalCodeLookupJSON?postalcode=' + codigoPostal + '&country=ES&username=demo&callback=procesarNombres';
  postMessage("calling: " + url);
  importScripts(url);
}
function procesarNombres(nombres) {
  console.log(JSON.stringify(nombres));
  var index;
  for (index = 0; index < nombres.length; ++index) {
    postMessage("geonames: " + nombres[index]);
  };
}



getIp();
function getIp() {
  var url = 'http://www.telize.com/geoip?callback=procesarIP';
  postMessage("calling: " + url);
  importScripts(url);
}
function procesarIP(geoIP) {
  postMessage("goIP: " + JSON.stringify(geoIP));
}


getRepos('Angular');
function getRepos(user) {
  var url = 'https://api.github.com/users/' + user + '/repos?callback=procesarRepos';
  postMessage("calling: " + url);
  importScripts(url);
}
function procesarRepos(reposJSON) {
  var repos = reposJSON.data;
  postMessage("Angular Repos.Length:" + repos.length);
  for (var index = 0; index < repos.length; ++index) {
    var repo = repos[index];
    if (repo.watchers_count > 100)
      postMessage("Angular Repo:" + repos[index].full_name);
  };
}


