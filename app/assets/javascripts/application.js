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

    var editorButtons = new MediumEditor('.js-editor-article-content-buttons', {
        buttonLabels: 'fontawesome',
        toolbar: {
            buttons: [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'superscript',
                'subscript',
                'image',
                'html',
                'orderedlist',
                'unorderedlist',
                'indent',
                'outdent',
                'justifyCenter',
                'justifyFull',
                'justifyLeft',
                'justifyRight',
                'removeFormat',
                'quote',
                'pre',
                'anchor',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6'
            ]
        }
    });

    var editorAnchorPreview = new MediumEditor('.js-editor-article-content-anchor-preview', {
        anchorPreview: {
            hideDelay: 500,
            previewValueSelector: 'a'
        }
    });
});