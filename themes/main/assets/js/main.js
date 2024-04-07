// A hacky table component using decap's inbuilt widget definition.
// Data looks like this:
// {
//   "rows": [
//     {
//       "type": "headerRow",
//       "columns": [
//         "header col1",
//         "header col 2"
//       ]
//     },
//     {
//       "type": "row",
//       "columns": [
//         "row 1 col 1",
//         "row 1 col 2"
//       ]
//     },
//     {
//       "type": "row",
//       "columns": [
//         "row 2 col 1",
//         "row 2 col 2"
//       ]
//     }
//   ]
// }
CMS.registerEditorComponent({
    id: "table",
    label: "Table",
    fields: [{
      name: "rows",
      label: "Rows",
      widget: "list",
      types: [
        {
          label: "Header Row",
          name: "headerRow",
          widget: "object",
          fields: [{
            label: "Header Column",
            name: "columns",
            widget: "list",
            field: {
                label: "Column Name",
                name: "columnContent",
                widget: "string"
              }
          }]
        },
        {
          label: "Row",
          name: "row",
          widget: "object",
          fields: [{
            label: "Column",
            name: "columns",
            widget: "list",
            field: {
                label: "Content",
                name: "columnContent",
                widget: "markdown"
              }
          }]
        }
      ]
    }],
  // Something is wrong here.. 
  pattern: /^<table>(?:\s*<thead>(?<thead>[\s\S]*?)<\/thead>)?(?:\s*<tbody>(?<tbody>[\s\S]*?)<\/tbody>)?\s*<\/table>$/gms,
  // This code uses the match provided by the `pattern` property
  // to parse out the data and reassemble the javascript object to match the 
  // `fields` above.  This populates the widget in the CMS WSYIWYG editor
  fromBlock: function(match) {
        console.log("match in fromBlock", match);
        const thContentsRegex = /<th[^>]*>(.*?)<\/th>/gm;
        const trContentsRegex = /<tr>(.*?)<\/tr>/g;
        const tdContentsRegex = /<td>(.*?)<\/td>/g;
        const { thead, tbody } = match.groups;

        const headerRow = {
            type: "headerRow",
            columns: [...thead.matchAll(thContentsRegex)].map((match) => {
                if (match && match[1]) {
                    return match[1];
                }
            })
        };

        const rowsMarkup = tbody.match(trContentsRegex);

        if (!rowsMarkup) return {};

        const rows = rowsMarkup.map((html) => {
            return {
                type: "row",
                columns: [...html.matchAll(tdContentsRegex)].map((match) => {
                if (match && match[1]) {
                    return match[1];
                }
              })
            };
        })
        const result = { rows: [headerRow].concat(rows)};
        console.log("the fromBlock functionality", result);
        return result;
    },
    // This is the code that produces the markdown. In our case we just
    // Generate html
    toBlock: function(obj) {
        console.log("the toBlock functionality", obj);
        if (!obj.rows) return "";

        const rowsMarkup = obj.rows.reduce((acc, row) => {
            if (!row.columns) return acc;

            console.log("A ROW: ", row);
            if (row.type === "headerRow") {
                acc.headerRows
                    .push(`<tr>${row.columns.map((col) => '<th scope="col">' + col + '</th>')}</tr>`);
            } else {
                acc.rows
                    .push(`<tr>${row.columns.map((col) => '<td>' + col + '</td>')}</tr>`);
            }

            return acc;
        }, {
            headerRows: [],
            rows: []
        });

        const theaderMarkup = rowsMarkup.headerRows ? `<thead>${rowsMarkup.headerRows.join("")}</thead>` : "";
        const tbodyMarkup = rowsMarkup.rows ?`<tbody>${rowsMarkup.rows.join("")}</tbody>` : "";
        
        
        if (!theaderMarkup && !tbodyMarkup) return "";
        const markup = `
        <table>
            ${theaderMarkup}
            ${tbodyMarkup}
        </table>
        `;
        return markup;
    },
    // This creates the preview that should appear above the widget
    toPreview: function(obj) {
        console.log("the toPreview functionality", obj)
                if (!obj.rows) return "";

        const rowsMarkup = obj.rows.reduce((acc, row) => {
            if (!row.columns) return acc;

            console.log("A ROW: ", row);
            if (row.type === "headerRow") {
                acc.headerRows
                    .push(`<tr>${row.columns.map((col) => '<th scope="col">' + col + '</th>')}</tr>`);
            } else {
                acc.rows
                    .push(`<tr>${row.columns.map((col) => '<td>' + col + '</td>')}</tr>`);
            }

            return acc;
        }, {
            headerRows: [],
            rows: []
        });

        const theaderMarkup = rowsMarkup.headerRows ? `<thead>${rowsMarkup.headerRows.join("")}</thead>` : "";
        const tbodyMarkup = rowsMarkup.rows ?`<tbody>${rowsMarkup.rows.join("")}</tbody>` : "";
        
        
        if (!theaderMarkup && !tbodyMarkup) return "";
        const markup = `
        <table>
            ${theaderMarkup}
            ${tbodyMarkup}
        </table>
        `;
        return markup;
    },
});




