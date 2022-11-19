/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B551505/whois/domain_name';
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키';
queryParams += '&' + encodeURIComponent('query') + '=' + encodeURIComponent('kisa.or.kr');
queryParams += '&' + encodeURIComponent('answer') + '=' + encodeURIComponent('xml');
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');