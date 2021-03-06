module.exports = {

    getLinks: function(meta) {

        if (!meta.og || !meta.og.video)
            return;

        return [{
            href: meta.og.video.url || meta.og.video,
            type: meta.og.video.type || CONFIG.T.text_html,
            rel: [CONFIG.R.player, CONFIG.R.og],
            width: meta.og.video.width,
            height: meta.og.video.height
        }, {
            href: meta.og.video.secure_url,
            type: meta.og.video.type || CONFIG.T.text_html,
            rel: [CONFIG.R.player, CONFIG.R.og],
            width: meta.og.video.width,
            height: meta.og.video.height
        }];
    }
};