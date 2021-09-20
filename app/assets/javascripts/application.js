//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require medium-editor
//= require medium-editor/extensions/medium-editor-tables

$(document).ready(function() {
    var editor = new MediumEditor('.js-editor-article-content');

    var editorActiveButtonClass = new MediumEditor('.js-editor-article-content-active-button-class', {
        activeButtonClass: 'text-danger'
    });

    var editorButtonLabels = new MediumEditor('.js-editor-article-content-button-labels', {
        buttonLabels: 'fontawesome'
    });

    var editorExtensionsTable = new MediumEditor('.js-editor-article-content-extensions-table', {
        buttonLabels: 'fontawesome',
        toolbar: {
            buttons: [
                'bold',
                'italic',
                'underline',
                'anchor',
                'h2',
                'h3',
                'table'
            ]
        },
        extensions: {
            'table': new MediumEditorTable({
                rows: 40,
                columns: 40
            })
        }
    });
});