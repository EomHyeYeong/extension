

var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B551505/whois/domain_name'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'cUWf07DL4LpO9A5FA1fWq3vYGsYMKLO1bKVkyYJX1rWeCGciZpn1kyP7l5nwuTfckSvUUuMsdW4f7YuKHrUX%2Bw%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('query') + '=' + encodeURIComponent('asan.go.kr'); /*도메인 이름, http://... 형식 X*/
    queryParams += '&' + encodeURIComponent('answer') + '=' + encodeURIComponent('xml'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');