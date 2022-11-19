

var xhr = new XMLHttpRequest();
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url2 = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    var domain = url2.split("/");
    // alert(typeof(String(domain)))
    var r_domain = String(domain[2]).substring(4);
    alert(r_domain); 

    var url = 'http://apis.data.go.kr/B551505/whois/domain_name'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'cUWf07DL4LpO9A5FA1fWq3vYGsYMKLO1bKVkyYJX1rWeCGciZpn1kyP7l5nwuTfckSvUUuMsdW4f7YuKHrUX%2Bw%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('query') + '=' + encodeURIComponent(r_domain); /*도메인 이름, http://... 형식 X*/
    queryParams += '&' + encodeURIComponent('answer') + '=' + encodeURIComponent('xml'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');
});
