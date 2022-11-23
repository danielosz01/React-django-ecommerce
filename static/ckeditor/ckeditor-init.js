/* global CKEDITOR, django */
<<<<<<< HEAD
;(function() {
  var el = document.getElementById('ckeditor-init-script');
  if (el && !window.CKEDITOR_BASEPATH) {
    window.CKEDITOR_BASEPATH = el.getAttribute('data-ckeditor-basepath');
=======
;(function () {
  var el = document.getElementById("ckeditor-init-script")
  if (el && !window.CKEDITOR_BASEPATH) {
    window.CKEDITOR_BASEPATH = el.getAttribute("data-ckeditor-basepath")
>>>>>>> 0596abaeee1dc92cce6b86e800ffd8ec5252ed9c
  }

  function runInitialisers() {
    if (!window.CKEDITOR) {
<<<<<<< HEAD
      setTimeout(runInitialisers, 100);
      return;
    }

    initialiseCKEditor();
    initialiseCKEditorInInlinedForms();
  }

  if (document.readyState != 'loading' && document.body) {
    document.addEventListener('DOMContentLoaded', initialiseCKEditor);
    runInitialisers();
  } else {
    document.addEventListener('DOMContentLoaded', runInitialisers);
  }

  function initialiseCKEditor() {
    var textareas = Array.prototype.slice.call(document.querySelectorAll('textarea[data-type=ckeditortype]'));
    for (var i=0; i<textareas.length; ++i) {
      var t = textareas[i];
      if (t.getAttribute('data-processed') == '0' && t.id.indexOf('__prefix__') == -1) {
        t.setAttribute('data-processed', '1');
        var ext = JSON.parse(t.getAttribute('data-external-plugin-resources'));
        for (var j=0; j<ext.length; ++j) {
          CKEDITOR.plugins.addExternal(ext[j][0], ext[j][1], ext[j][2]);
        }
        CKEDITOR.replace(t.id, JSON.parse(t.getAttribute('data-config')));
=======
      setTimeout(runInitialisers, 100)
      return
    }

    initialiseCKEditor()
    initialiseCKEditorInInlinedForms()
  }

  if (document.readyState != "loading" && document.body) {
    document.addEventListener("DOMContentLoaded", initialiseCKEditor)
    runInitialisers()
  } else {
    document.addEventListener("DOMContentLoaded", runInitialisers)
  }

  function initialiseCKEditor() {
    var textareas = Array.prototype.slice.call(
      document.querySelectorAll("textarea[data-type=ckeditortype]"),
    )
    for (var i = 0; i < textareas.length; ++i) {
      var t = textareas[i]
      if (
        t.getAttribute("data-processed") == "0" &&
        t.id.indexOf("__prefix__") == -1
      ) {
        t.setAttribute("data-processed", "1")
        var ext = JSON.parse(t.getAttribute("data-external-plugin-resources"))
        for (var j = 0; j < ext.length; ++j) {
          CKEDITOR.plugins.addExternal(ext[j][0], ext[j][1], ext[j][2])
        }
        CKEDITOR.replace(t.id, JSON.parse(t.getAttribute("data-config")))
>>>>>>> 0596abaeee1dc92cce6b86e800ffd8ec5252ed9c
      }
    }
  }

  function initialiseCKEditorInInlinedForms() {
<<<<<<< HEAD
    if (typeof django === 'object' && django.jQuery) {
      django.jQuery(document).on('formset:added', initialiseCKEditor);
    }
  }

}());
=======
    if (typeof django === "object" && django.jQuery) {
      django.jQuery(document).on("formset:added", initialiseCKEditor)
    }
  }
})()
>>>>>>> 0596abaeee1dc92cce6b86e800ffd8ec5252ed9c
