(async function () {
    const urls = Array.prototype.slice.apply(document.querySelectorAll('.sticker')).map(img => img.src);
    const strJson = `{"urls":[${urls.map(url => `"${url}"`).join(',')}]}`;
    console.log(strJson);
})()