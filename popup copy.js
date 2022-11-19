

var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B551505/whois/domain_name'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+''; /*Service Key*/
    queryParams += '&' + encodeURIComponent('query') + '=' + encodeURIComponent('asan.go.kr'); /*도메인 이름, http://... 형식 X*/
    queryParams += '&' + encodeURIComponent('answer') + '=' + encodeURIComponent('xml'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');
