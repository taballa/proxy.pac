// file://C:\pac\proxy.pac
function FindProxyForURL(url, host) {
    if (shExpMatch(host,"*.bitbucket.com")) {
        return "PROXY 127.0.0.1:8580";
    }
    return "DIRECT";
} 