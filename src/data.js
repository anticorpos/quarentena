const videosData = [
  {
    url: "q1",
    title: "Q1 Correr para o jardim",
    description: "Artista: Bárbara Carbogim",
  },
  {
    url: "q2",
    title: "Q2 En(a)-través",
    description: "Artista: Diego Abegão @ela1___",
  },
  {
    url: "q3",
    title: "Q3 A polícia imperial das qualidades",
    description: "Artista: Marina Freire @marinafreirebr",
  },
  {
    url: "q4",
    title: "Q4 Fuga",
    description: "Artista: Éden Peretta",
  },
  {
    url: "q5",
    title: "Q5 Desassossego (Movimento 1)",
    description:
      "Artista: Amanda Marcondes @amandices.94 e Alexandre Ficagna @ficagnacomgeenea",
  },
  {
    url: "q6",
    title: "Q6 TESTE DE RORSCHACH _Lâmina 4",
    description: "Artista: Cláudio Zarco @claudio_zarco",
  },
  {
    url: "q7",
    title: "Q7 Anistia",
    description: "Artista: Daniela Mara @danielamara.rs",
  },
  {
    url: "q8",
    title: "Q8 Vi na prisão de ventre",
    description: "Artista: Vina Amorim @vinajaguatirica",
  },
  {
    url: "q9",
    title: "Q9 Vulto",
    description: "Artista: Jefferson Fernandes @fernandsjeff",
  },
  {
    url: "q10",
    title: "Q10 No princípio havia o vazio",
    description: "Artista: Fernando Del",
  },
  {
    url: "q11",
    title: "Q11 TESTE DE RORSCHACH _Lâmina 2",
    description: "Artista: Cláudio Zarco @claudio_zarco",
  },
  {
    url: "q12",
    title: "Q12 Produzir jardim",
    description: "Artista: Bárbara Carbogim",
  },
  {
    url: "q13",
    title: "Q13 Desgraça!",
    description: "Artista: Jefferson Fernandes @jeffernands",
  },
  {
    url: "q14",
    title: "Q14 Impermanência (Movimento 2)",
    description:
      "Propositora: Amanda Marcondes @amandices.94\nParticipação: Alexandre Ficagna @ficagnacomgeenea\n@lagrimeira @leepocaia @ei.rck @ed_campo.s @tamarozziandrey @lagartamarela @sam_noggie @mara.rsdani @marinafreirebr",
  },
  {
    url: "q15",
    title: "Q15 Vórtice vertiginosa",
    description: "Artista: Daniela Mara @danielamara.rs",
  },
  {
    url: "q16",
    title: "Q16 Entre muros",
    description: "Artista: Marina Freire @marinafreirebr",
  },
  {
    url: "q17",
    title: "Q17 A navalha de Paulo",
    description: "Artista: Éden Peretta",
  },
  {
    url: "q18",
    title: "Q18 Tentativa 1",
    description: "Artista: Vina Amorim @vinajaguatirica",
  },
  {
    url: "q19",
    title: "Q19 Os muros são surdos",
    description: "Artista: Fernando Del",
  },
  {
    url: "q20",
    title: "Q20 Estado maior",
    description: "Artista: Diego Abegão @ela1___",
  },
  {
    url: "q21",
    title: "Q21 Usus Pauper",
    description: "Artista: Éden Peretta",
  },
  {
    url: "q22",
    title: "Q22 Tentativa métrica 2",
    description: "Artista: Vina Amorim @vinajaguatirica",
  },
  {
    url: "q23",
    title: "Q23 Contrair jardim",
    description: "Artista: Bárbara Carbogim",
  },
  {
    url: "q24",
    title: "Q24 Os corpos confrontam-se em seu limite",
    description: "Artista: Marina Freire @marinafreirebr",
  },
  {
    url: "q25",
    title: "Q25 TESTE DE RORSCHACH _Lâmina 3",
    description: "Artista: Cláudio Zarco @claudio_zarco",
  },
  {
    url: "q26",
    title: "Q26 Panis et circenses",
    description: "Artista: Daniela Mara @danielamara.rs",
  },
  {
    url: "q27",
    title: "Q27 Machine",
    description: "Artista: Diego Abegão @ela1___",
  },
  {
    url: "q28",
    title: "Q28 Meiose",
    description: "Artista: Éden Peretta",
  },
  {
    url: "q29",
    title: "Q29 Isolamento programado",
    description: "Artista: Jefferson Fernandes @jeffernands",
  },
  {
    url: "q30",
    title: "Q30 Movimento 3 - Germinação",
    description:
      "Artistas: Amanda Marcondes @amandices.94 e Alexandre Ficagna @ficagnacomgeenea",
  },
  {
    url: "q31",
    title: "Q31 A tarde talvez fosse azul",
    description: "Artista: Fernando Del",
  },
  {
    url: "q32",
    title: "Q32 Inter--esse",
    description: "Artista: Vina Amorim @vinajaguatirica",
  },
  {
    url: "q33",
    title: "Q33 Jardinar a fuga",
    description: "Artista: Bárbara Carbogim",
  },
  {
    url: "q34",
    title: "Q34 Forjar o tempo",
    description: "Artista: Daniela Mara @danielamara.rs",
  },
  {
    url: "q35",
    title: "Q35 Controle comporta/mental",
    description: "Artista: Marina Freire @marinafreirebr",
  },
  {
    url: "q36",
    title: "Q36 Ambición",
    description: "Artista: Diego Abegão @ela1___",
  },
  {
    url: "q37",
    title: "Q37 Queima de arquivo",
    description: "Artista: Jefferson Fernandes @jeffernands",
  },
  {
    url: "q38",
    title: "Q38 TESTE DE RORSCHACH _Lâmina 1",
    description: "Artista: Cláudio Zarco @claudio_zarco",
  },
  {
    url: "q39",
    title: "Q39 Por certo não terá cessado o rito",
    description: "Artista: Fernando Del",
  },
  {
    url: "q40",
    title: "Q40 Movimento 4 - Anemia vital (dispnéia)",
    description:
      "Artistas: Amanda Marcondes @amandices.94 e Alexandre Ficagna @ficagnacomgeenea",
  },
];
