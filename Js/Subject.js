$(function () {
  function addLabelGroups() {
    $(".category-selector .badge-group-item")
      .off("click")
      .on("click", function (event) {
        event.preventDefault();
        var getclass = this.className;
        var getSplitclass = getclass.split(" ")[0];
        if ($(this).hasClass("badge-copyright")) {
          $(this).parents(".single-note-item").removeClass("note-patent");
          $(this).parents(".single-note-item").removeClass("note-petty_patent");
          $(this).parents(".single-note-item").toggleClass(getSplitclass);
        } else if ($(this).hasClass("badge-patent")) {
          $(this).parents(".single-note-item").removeClass("note-copyright");
          $(this).parents(".single-note-item").removeClass("note-petty_patent");
          $(this).parents(".single-note-item").toggleClass(getSplitclass);
        } else if ($(this).hasClass("badge-petty_patent")) {
          $(this).parents(".single-note-item").removeClass("note-patent");
          $(this).parents(".single-note-item").removeClass("note-copyright");
          $(this).parents(".single-note-item").toggleClass(getSplitclass);
        }
      });
  }

  var $btns = $(".note-link").click(function () {
    if (this.id == "all-category") {
      var $el = $("." + this.id).fadeIn();
      $("#note-full-container > div").not($el).hide();
    }
    if (this.id == "petty_patent") {
      var $el = $("." + this.id).fadeIn();
      $("#note-full-container > div").not($el).hide();
    } else {
      var $el = $("." + this.id).fadeIn();
      $("#note-full-container > div").not($el).hide();
    }
    $btns.removeClass("active");
    $(this).addClass("active");
  });

  $("#add-notes").on("click", function (event) {
    $("#addnotesmodal").modal("show");
    $("#btn-n-save").hide();
    $("#btn-n-add").show();
  });

  $("#btn-n-add").on("click", function (event) {
    event.preventDefault();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth());
    var yyyy = today.getFullYear();
    var year = parseInt(yyyy) + 543;
    var monthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    today = dd + " " + monthNames[mm] + " " + year;

    var $_noteTitle = document.getElementById("note-has-title").value;
    var $_noteDescription = document.getElementById(
      "note-has-description"
    ).value;

    $html =
      '<div class="col-md-4 single-note-item all-category"><div class="card card-body">' +
      '<button class="click_card">' +
      '<span class="side-stick"></span>' +
      '<h5 class="note-title text-truncate w-75 mb-0" data-noteHeading="' +
      $_noteTitle +
      '">' +
      $_noteTitle +
      '<i class="point fa fa-circle ml-1 font-10"></i></h5>' +
      '<p class="note-date font-12 text-muted">' +
      today +
      "</p>" +
      '<div class="note-content">' +
      '<p class="note-inner-content text-muted" data-noteContent="' +
      $_noteDescription +
      '">' +
      $_noteDescription +
      "</p>" +
      "</div>" +
      "</button>";
    '<div class="d-flex align-items-center">' +
      '<div class="ml-auto">' +
      '<div class="category-selector btn-group">' +
      '<a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">' +
      '<div class="category">' +
      '<div class="category-copyright"></div>' +
      '<div class="category-patent"></div>' +
      '<div class="category-petty_patent"></div>' +
      '<span class="more-options text-dark"><i class="icon-options-vertical"></i></span>' +
      "</div>" +
      "</a>" +
      '<div class="dropdown-menu dropdown-menu-right category-menu">' +
      '<a class="note-copyright badge-group-item badge-copyright dropdown-item position-relative category-copyright text-success" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>copyright</a>' +
      '<a class="note-patent badge-group-item badge-patent dropdown-item position-relative category-patent text-info" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> patent</a>' +
      '<a class="note-petty_patent badge-group-item badge-petty_patent dropdown-item position-relative category-petty_patent text-danger" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> petty_patent</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div></div> ";

    $("#note-full-container").prepend($html);
    $("#addnotesmodal").modal("hide");

    addLabelGroups();
  });

  $("#addnotesmodal").on("hidden.bs.modal", function (event) {
    event.preventDefault();
    document.getElementById("note-has-title").value = "";
    document.getElementById("note-has-description").value = "";
  });

  addLabelGroups();

  $("#btn-n-add").attr("disabled", "disabled");
});

$("#note-has-title").keyup(function () {
  var empty = false;
  $("#note-has-title").each(function () {
    if ($(this).val() == "") {
      empty = true;
    }
  });

  if (empty) {
    $("#btn-n-add").attr("disabled", "disabled");
  } else {
    $("#btn-n-add").removeAttr("disabled");
  }
});
