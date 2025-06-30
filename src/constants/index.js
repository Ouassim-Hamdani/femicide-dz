// utils/data.js

// Sample victim data - replace with real data
export const sampleVictims = [
  {
    id: 1,
    name: "Khadeja Bjaoui",
    age: 54,
    date: "04-01-2025",
    location: "Chelghoum El Aid, Mila",
    description: "Mother of two children, killed by her own son"
  },
  {
    id: 2,
    name: "Lila Brahimi",
    age: 30,
    date: "13-01-2025",
    location: "Chreaa, Tebessa",
    description: "Killed by her husband. Tried to commit suicide afterwards."
  },
  {
    id: 3,
    name: "Unknown",
    age: 40,
    date: "30-01-2025",
    location: "Beni Zentis, Ghilizan",
    description: "Mother of three children. Strangled to death by her husband."
  },
  {
    id: 4,
    name: "Unknown",
    age: 50,
    date: "10-02-2025",
    location: "Bouzerreha, Algiers",
    description: "Strangled to death by her brother."
  },
  {
    id: 5,
    name: "Amel Laamouri",
    age: "Unknown",
    date: "25-02-2025",
    location: "Rabeaa, Media",
    description: "Shot to death by her husband, a police officer."
  },
  {
    id: 6,
    name: "Ilhem Zouaoui",
    age: 39,
    date: "05-03-2025",
    location: "Fermato, Setif",
    description: "Killed by her own brother, using a knife."
  },
  {
    id: 7,
    name: "Nasira Ghalassa",
    age: 40,
    date: "10-03-2025",
    location: "Saada, Biskra",
    description: "Mother of six children, murdered by her husband."
  },
  {
    id: 8,
    name: "Unknown",
    age: 20,
    date: "19-03-2025",
    location: "Mohamedia, Algiers",
    description: "Killed by her husband, via knife wounds sustained on the heart."
  },
  {
    id: 9,
    name: "Yousra Ben Amar",
    age: 29,
    date: "29-03-2025",
    location: "Setif",
    description: "Mother of a single daughter, killed by her brother, using a knife."
  },
  {
    id: 10,
    name: "Soumeya Bouchrit",
    age: 30,
    date: "30-03-2025",
    location: "Zeriba Ouadi, Biskra",
    description: "Slaughtered to death by her husband."
  },
  {
    id: 11,
    name: "Unknown",
    age: 45,
    date: "05-04-2025",
    location: "Sabt, Skikda",
    description: "Shot to death, by her father."
  },
  {
    id: 12,
    name: "Bodane",
    age: 50,
    date: "05-04-2025",
    location: "Zabouja, Chlef",
    description: "Disabled women, living on the streets after getting abandoned, killed by unknown assailants, the body was found dumped in the forest, with bruises and signs of violence all over her body.",
  },
  {
    id: 13,
    name: "Bahten Tounes",
    age: 40,
    date: "08-04-2025",
    location: "Meftah, Blida",
    description: "Mother of three children, highschool principal, stabbed to death by her husband."
  },
  {
    id: 14,
    name: "Unknown",
    age: 8,
    date: "08-04-2025",
    location: "Meftah, Blida",
    description: "Strangled to death by her father, related to the previous case of Bahten Touness, her mother."
  },
  {
    id: 15,
    name: "Hasina Slimani",
    age: 65,
    date: "08-04-2025",
    location: "Ouled Sidi Brahim, Msila",
    description: "Retired Middle school english teacher, stabbed to death by her son."
  },
  {
    id: 16,
    name: "Sarah Ait Mohand",
    age: 28,
    date: "08-04-2025",
    location: "Bourj Bou Arreridj",
    description: "Mother of two little girls, killed by her husband, alongside her two daughters, aged 4 and 6 years old. Husband then tried to fabricate a story about the mother killing her daughters & commiting suicide."
  },
  {
    id: 17,
    name: "Unknown",
    age: 4,
    date: "08-04-2025",
    location: "Bourj Bou Arreridj",
    description: "Little girl, aged 4, killed by her stepdad, alongside her mother and sister, related to the case of Sarah Ait Mohand."
  },
  {
    id: 18,
    name: "Unknown",
    age: 6,
    date: "08-04-2025",
    location: "Bourj Bou Arreridj",
    description: "Little girl, aged 6, killed by her stepdad, alongside her mother and sister, related to the case of Sarah Ait Mohand."
  },
  {
    id: 19,
    name: "Unknown",
    age: "Unknown",
    date: "14-04-2025",
    location: "Reghaia, Algiers",
    description: "Killed by her ex-husband. According to police, her body was found between trees near a train station."
  },
  {
    id: 20,
    name: "Saida Ben Hamouda",
    age: 51,
    date: "25-04-2025",
    location: "Batna",
    description: "Stabbed & strangled to death by her husband."
  },
  {
    id: 21,
    name: "Walida Derafa",
    age: 48,
    date: "28-04-2025",
    location: "Ain azal, Setif",
    description: "Hammered to death by her husband."
  },
  {id: 22,
    name:"Maroua Boughachich",
    age: 13,
    date: "22-05-2025",
    location: "Constantine",
    description:"Disappeared on May 22, 2025, her story dominating headlines. Yet, as her family searched, her honor was eroded by insidious rumors that she'd run away with a man—rumors relentlessly spread by certain dirtbag influencers. On June 29, a month after she vanished, DNA identified the body found as hers."
  }
  
  
];

export const activeYear = 2025;


export function averageFrequency(events) {
  // Sort by date ascending
  const sorted = [...events].sort((a, b) => {
    const [d1, m1, y1] = a.date.split('-').map(Number);
    const [d2, m2, y2] = b.date.split('-').map(Number);
    return new Date(y1, m1 - 1, d1) - new Date(y2, m2 - 1, d2);
  });

  // Convert dates to Date objects
  const dates = sorted.map(e => {
    const [d, m, y] = e.date.split('-').map(Number);
    return new Date(y, m - 1, d);
  });

  // Calculate differences in days
  const diffs = [];
  for (let i = 1; i < dates.length; i++) {
    const diff = (dates[i] - dates[i - 1]) / (1000 * 60 * 60 * 24);
    diffs.push(diff);
  }

  // Calculate average
  const avg = diffs.reduce((a, b) => a + b, 0) / diffs.length;
  return Math.round(avg);
}


export const victimesMemo = [
  {
    id: 1,
    name: "Asma Bechkit",
    age: 17,
    date: "03-07-2013",
    location: "Mila",
    description: "Asma Bachkit, at just seventeen,A young woman from Mila, full of dreams unseen. On July 3rd, 2013, her baccalaureate won, She stepped out for butter, cakes to be done, To celebrate her triumph, sweet and new. But a man, who'd relentlessly pursued, Threatened and harassed her, day after day, Intercepted her then, blocking her way. She refused to speak, her spirit held strong, He plunged a knife, over fifteen times wrong. Asma never returned home, her vibrant light gone.",
    image: "/images/victims/asmabechkit.png",
    memorialText: "Remembered as a young woman with a bright future, her life tragically cut short."
  },
  {
    id: 2,
    name: "Yasmine Tarafi",
    age: 17,
    date: "06-07-2020",
    location: "Bouira",
    description: "Yasmine Tarafi was a 28-year-old lawyer from Bouira. On July 6, 2020, she was tragically murdered by her ex-fiancé, found with her throat slit in her car.",
    image: "/images/victims/yasminetarafi.png",
    memorialText: "Remembering Yasmine, a dedicated lawyer whose life was taken too soon.."
  },
  {
    id: 3,
    name: "Chaima Sadou",
    age: 19,
    date: "01-10-2020",
    location: "Boumerdes",
    description: "Chaima was a young woman, just 19 years old, living in the commune of Reghaia, Algiers. In 2017, when she was only 16, a man named Bouchlaghi Abdesslam, known as Rayan, violated her. She filed a complaint against him, but tragically, nothing came of it. Then, on October 1, 2020, fate cruelly intervened when she encountered him again. He took her to an abandoned train station in Thenia, Boumerdes. There, in a horrifying act, he beat, tortured, killed, and ultimately burned her. Her killer was later captured.",
    image: "/images/victims/chaimasadou.png",
    memorialText: "Her spirit, though brutally extinguished, will forever ignite a burning call for justice."
  }
]