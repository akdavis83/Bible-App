const toggleSwitch = document.querySelector(
  '.darkswitch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// The NET translation API (labs.bible.org/api) currently used doesn't provide all the needed metadata, so some supplemental JSON is added here
var biblemeta = {
  data: {
    gen: {
      booknum: "1",
      title: "Genesis",
      abbr: "Gen",
      chapters: "50"
    },
    exo: {
      booknum: "2",
      title: "Exodus",
      abbr: "Exo",
      chapters: "40"
    },
    lev: {
      booknum: "3",
      title: "Leviticus",
      abbr: "Lev",
      chapters: "27"
    },
    num: {
      booknum: "4",
      title: "Numbers",
      abbr: "Num",
      chapters: "36"
    },
    deut: {
      booknum: "5",
      title: "Deuteronomy",
      abbr: "Deut",
      chapters: "34"
    },
    josh: {
      booknum: "6",
      title: "Joshua",
      abbr: "Josh",
      chapters: "24"
    },
    judg: {
      booknum: "7",
      title: "Judges",
      abbr: "Judg",
      chapters: "21"
    },
    ruth: {
      booknum: "8",
      title: "Ruth",
      abbr: "Ruth",
      chapters: "4"
    },
    "1sam": {
      booknum: "9",
      title: "1 Samuel",
      abbr: "1Sam",
      chapters: "31"
    },
    "2sam": {
      booknum: "10",
      title: "2 Samuel",
      abbr: "2Sam",
      chapters: "24"
    },
    "1kgs": {
      booknum: "11",
      title: "1 Kings",
      abbr: "1Kings",
      chapters: "22"
    },
    "2kgs": {
      booknum: "12",
      title: "2 Kings",
      abbr: "2Kings",
      chapters: "25"
    },
    "1chr": {
      booknum: "13",
      title: "1 Chronicles",
      abbr: "1Chr",
      chapters: "29"
    },
    "2chr": {
      booknum: "14",
      title: "2 Chronicles",
      abbr: "2Chr",
      chapters: "36"
    },
    ezra: {
      booknum: "15",
      title: "Ezra",
      abbr: "Ezra",
      chapters: "10"
    },
    neh: {
      booknum: "16",
      title: "Nehemiah",
      abbr: "Neh",
      chapters: "13"
    },
    est: {
      booknum: "17",
      title: "Esther",
      abbr: "Est",
      chapters: "10"
    },
    job: {
      booknum: "18",
      title: "Job",
      abbr: "Job",
      chapters: "42"
    },
    ps: {
      booknum: "19",
      title: "Psalms",
      abbr: "Ps",
      chapters: "150"
    },
    pro: {
      booknum: "20",
      title: "Proverbs",
      abbr: "Pro",
      chapters: "31"
    },
    ecc: {
      booknum: "21",
      title: "Ecclesiastes",
      abbr: "Ecc",
      chapters: "12"
    },
    sos: {
      booknum: "22",
      title: "Song of Solomon",
      abbr: "Sos",
      chapters: "8"
    },
    isa: {
      booknum: "23",
      title: "Isaiah",
      abbr: "Isa",
      chapters: "66"
    },
    jer: {
      booknum: "24",
      title: "Jeremiah",
      abbr: "Jer",
      chapters: "52"
    },
    lam: {
      booknum: "25",
      title: "Lamentations",
      abbr: "Lam",
      chapters: "5"
    },
    eze: {
      booknum: "26",
      title: "Ezekiel",
      abbr: "Eze",
      chapters: "48"
    },
    dan: {
      booknum: "27",
      title: "Daniel",
      abbr: "Dan",
      chapters: "12"
    },
    hos: {
      booknum: "28",
      title: "Hosea",
      abbr: "Hos",
      chapters: "14"
    },
    joel: {
      booknum: "29",
      title: "Joel",
      abbr: "Joel",
      chapters: "3"
    },
    amos: {
      booknum: "30",
      title: "Amos",
      abbr: "Amos",
      chapters: "9"
    },
    oba: {
      booknum: "31",
      title: "Obadiah",
      abbr: "Oba",
      chapters: "1"
    },
    jonah: {
      booknum: "32",
      title: "Jonah",
      abbr: "Jonah",
      chapters: "4"
    },
    micah: {
      booknum: "33",
      title: "Micah",
      abbr: "Micah",
      chapters: "7"
    },
    nahum: {
      booknum: "34",
      title: "Nahum",
      abbr: "Nahum",
      chapters: "3"
    },
    hab: {
      booknum: "35",
      title: "Habakkuk",
      abbr: "Hab",
      chapters: "3"
    },
    zeph: {
      booknum: "36",
      title: "Zephaniah",
      abbr: "Zeph",
      chapters: "3"
    },
    hag: {
      booknum: "37",
      title: "Haggai",
      abbr: "Hag",
      chapters: "2"
    },
    zech: {
      booknum: "38",
      title: "Zechariah",
      abbr: "Zech",
      chapters: "14"
    },
    mal: {
      booknum: "39",
      title: "Malachi",
      abbr: "Mal",
      chapters: "4"
    },
    matt: {
      booknum: "40",
      title: "Matthew",
      abbr: "Matt",
      chapters: "28"
    },
    mark: {
      booknum: "41",
      title: "Mark",
      abbr: "Mark",
      chapters: "16"
    },
    luke: {
      booknum: "42",
      title: "Luke",
      abbr: "Luke",
      chapters: "24"
    },
    john: {
      booknum: "43",
      title: "John",
      abbr: "John",
      chapters: "21"
    },
    acts: {
      booknum: "44",
      title: "Acts",
      abbr: "Acts",
      chapters: "28"
    },
    rom: {
      booknum: "45",
      title: "Romans",
      abbr: "Rom",
      chapters: "16"
    },
    "1cor": {
      booknum: "46",
      title: "1 Corinthians",
      abbr: "1Cor",
      chapters: "16"
    },
    "2cor": {
      booknum: "47",
      title: "2 Corinthians",
      abbr: "2Cor",
      chapters: "13"
    },
    gal: {
      booknum: "48",
      title: "Galatians",
      abbr: "Gal",
      chapters: "6"
    },
    eph: {
      booknum: "49",
      title: "Ephesians",
      abbr: "Eph",
      chapters: "6"
    },
    phil: {
      booknum: "50",
      title: "Philippians",
      abbr: "Phil",
      chapters: "4"
    },
    col: {
      booknum: "51",
      title: "Colossians",
      abbr: "Col",
      chapters: "4"
    },
    "1the": {
      booknum: "52",
      title: "1 Thessalonians",
      abbr: "1The",
      chapters: "5"
    },
    "2the": {
      booknum: "53",
      title: "2 Thessalonians",
      abbr: "2The",
      chapters: "3"
    },
    "1tim": {
      booknum: "54",
      title: "1 Timothy",
      abbr: "1Tim",
      chapters: "6"
    },
    "2tim": {
      booknum: "55",
      title: "2 Timothy",
      abbr: "2Tim",
      chapters: "4"
    },
    titus: {
      booknum: "56",
      title: "Titus",
      abbr: "Titus",
      chapters: "3"
    },
    phile: {
      booknum: "57",
      title: "Philemon",
      abbr: "Phile",
      chapters: "1"
    },
    heb: {
      booknum: "58",
      title: "Hebrews",
      abbr: "Heb",
      chapters: "13"
    },
    james: {
      booknum: "59",
      title: "James",
      abbr: "James",
      chapters: "5"
    },
    "1pet": {
      booknum: "60",
      title: "1 Peter",
      abbr: "1Pet",
      chapters: "5"
    },
    "2pet": {
      booknum: "61",
      title: "2 Peter",
      abbr: "2Pet",
      chapters: "3"
    },
    "1jn": {
      booknum: "62",
      title: "1 John",
      abbr: "1Jn",
      chapters: "5"
    },
    "2jn": {
      booknum: "63",
      title: "2 John",
      abbr: "2Jn",
      chapters: "1"
    },
    "3jn": {
      booknum: "64",
      title: "3 John",
      abbr: "3Jn",
      chapters: "1"
    },
    jude: {
      booknum: "65",
      title: "Jude",
      abbr: "Jude",
      chapters: "1"
    },
    rev: {
      booknum: "66",
      title: "Revelation",
      abbr: "Rev",
      chapters: "22"
    }
  }
};

$(document).ready(function () {
  // Have variables start out with Genesis 1
  var bkselect = "Gen";
  var bk = "Genesis";
  var chselect = "1";
  var ch = "1";
  var curcount = "50";
  var url =
    "https://labs.bible.org/api/?passage=" +
    bkselect +
    "%20" +
    chselect +
    "&type=json&callback=?";

  // Populate the book selector with book titles...
  $.each(biblemeta.data, function (i, v) {
    if (v.abbr == bkselect) {
      curcount = v.chapters;
      bk = v.title;
    }
    $("#bookselect").append(
      "<li class='bookitem' data='" + v.abbr + "'>" + v.title + "</li>"
    );
  });

  // ...and the chapter selector with the right number of chapters
  $(function () {
    for (var i = 1; i <= curcount; i++) {
      $("#chapterselect").append(
        "<li class='chapteritem' data='" + i + "'>" + i + "</li>"
      );
    }
  });

  // Load the chapter text from API
  $.getJSON(url, function (json) {
    $("#book").text(bk);
    $("#chapter").text(chselect);
    $.each(json, function () {
      $("#passage").append(
        '<sup class="verse">' + this.verse + "</sup>" + this.text
      );
    });
  });

  // Toggle on book selector when book title is clicked
  $("#book").click(function () {
    $("#bookselect").fadeIn();
    $(".dismiss").slideDown();
  });

  // and off when dismiss button is clicked. Apply to chapter selector as well
  $(".dismiss").click(function () {
    $("#bookselect").fadeOut();
    $("#chapterselect").fadeOut();
    $(".dismiss").slideUp();
  });

  // When a book is selected, update variables and refresh passage with new content

  $("body").on("click", ".bookitem", function (event) {
    $("#bookselect").fadeOut();
    $(".dismiss").slideUp();

    bkselect = jQuery(this).attr("data");
    $.each(biblemeta.data, function (i, v) {
      if (v.abbr == bkselect) {
        curcount = v.chapters;
        bk = v.title;
        chselect = 1;
      }
    });

    url =
      "https://labs.bible.org/api/?passage=" +
      bkselect +
      "%20" +
      chselect +
      "&type=json&callback=?";

    $(function () {
      if ($("#chapterselect").length > 0) {
        $("#chapterselect").empty();
        for (var i = 1; i <= curcount; i++) {
          $("#chapterselect").append(
            "<li class='chapteritem' data='" + i + "'>" + i + "</li>"
          );
        }
      }
    });

    $.getJSON(url, function (json) {
      bk = json[0].bookname;
      ch = json[0].chapter;
      $("#book").text(bk);
      $("#chapter").text(ch);
      if ($("#passage").length > 0) {
        $("#passage").empty();
        $.each(json, function () {
          $("#passage").append(
            '<sup class="verse">' + this.verse + "</sup>" + this.text
          );
        });
      }
    });
  });

  // Toggle chapter selector when chapter number is clicked
  $("#chapter").click(function () {
    $("#chapterselect").fadeIn();
    $(".dismiss").slideDown();
  });

  // When a chapter is selected, update variables and refresh passage with new content
  $("body").on("click", ".chapteritem", function (event) {
    $("#chapterselect").fadeOut();
    $(".dismiss").slideUp();

    chselect = jQuery(this).attr("data");

    url =
      "https://labs.bible.org/api/?passage=" +
      bkselect +
      "%20" +
      chselect +
      "&type=json&callback=?";

    $.getJSON(url, function (json) {
      bk = json[0].bookname;
      ch = json[0].chapter;
      $("#book").text(bk);
      $("#chapter").text(ch);
      if ($("#passage").length > 0) {
        $("#passage").empty();
        $.each(json, function () {
          $("#passage").append(
            '<sup class="verse">' + this.verse + "</sup>" + this.text
          );
        });
      }
    });
  });
});