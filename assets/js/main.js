let eUnion = {
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",
    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)",
    VereinigtesKönigreich: "(UK)",
    BeneluxUnion: {
      Belgien: "(BE)",
      Niederlände: "(NL)",
      Luxemburg: "(LU)"
    }
  };

let stringify=JSON.stringify(eUnion);
console.log(stringify);
let parse=JSON.parse(stringify)
console.log(parse);