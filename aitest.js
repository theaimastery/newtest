function loadAminosScript() {
    var script = document.createElement('script');
    script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js';
    script.setAttribute('data-bot-id', '8401');
    document.head.appendChild(script);
}

loadAminosScript();
