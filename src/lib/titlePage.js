export function loadPost(){
    const loc = location.search.replace(/\?/i,'').split('&').map(param=>param.split('=')[1]);
    return loc[0];
}