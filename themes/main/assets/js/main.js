// Demo carousel object
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

// Table WIP.  Produces:
// {
//   "tableElement": [
//     {
//       "type": "headerRow",
//       "headerRowContents": [
//         "Dog",
//         "bear"
//       ]
//     },
//     {
//       "type": "row",
//       "rowContents": [
//         "Dogs are \n\n* cool\n* great\n* awesome",
//         "Bears are:\n\n* big\n* scary\n* snooper"
//       ]
//     }
//   ]
// }
CMS.registerEditorComponent({
    id: "table",
    label: "Table",
    fields: [{
            name: "tableElement",
            label: "Table Element",
            widget: "list",
            types: [
                {
                    label: "Header Row",
                    name: "headerRow",
                    widget: "list",
                    fields: [
                        {
                            label: "Header",
                            name: "headerRowContents",
                            widget: "list",
                            field: {
                                label: "Header Row Content",
                                name: "headerRowContent",
                                widget: "string"
                            }
                        }
                    ]
                },
                {
                    label: "Row",
                    name: "row",
                    widget: "list",
                    fields: [
                        {
                            label: "Content",
                            name: "rowContents",
                            widget: "list",
                            field: {
                                label: "Row Content",
                                name: "rowContent",
                                widget: "markdown"
                            }
                        }
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




