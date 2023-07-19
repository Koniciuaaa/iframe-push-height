window.pushHeightEvent = () => {
    const body = document.body,
        html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    if (window.targetUrl && window.parent)
        window.parent.postMessage(height, window.targetUrl)
}