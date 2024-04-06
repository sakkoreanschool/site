(() => {
    // https://decapcms.org/docs/custom-widgets/#registereditorcomponent
CMS.registerEditorComponent({
    id: "carousel",
    label: "Carousel",
    fields: [{
            name: "carousel_header",
            label: "Carousel Header",
            widget: "list",
            types: [
                {
                    label: "Carousel",
                    name: "carousel_item",
                    widget: "object",
                    fields: [
                        {
                            label: "Images",
                            name: "images",
                            widget: "list",
                            field: {
                                label: "Image",
                                name: "image",
                                widget: "image"
                            }
                        }
                    ]
                },
                {
                    label: "Spotlight",
                    name: "spotlight",
                    widget: "object",
                    fields: [
                        {
                            label: "Header",
                            name: "header",
                            widget: "string",
                            default: "Spotlight"
                        },
                        { label: "Text", name: "text", widget: "text", default: 'Hello World' }
                    ]
                }
            ]
        }
    ],
    // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^<table>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/table>$/ms,
    fromBlock: function(match) {
        console.lot("the fromBlock functionality", match)
        return {};
    },
    toBlock: function(obj) {
        console.log("the toBlock functionality", obj)
        return `GORB`;
    },
    toPreview: function(obj) {
        console.log("the toPreview functionality", obj)
        return 'DOUBLE GORB';
    },
});
})();

