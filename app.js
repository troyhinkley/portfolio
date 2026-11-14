// Embedded fallback of citations.csv so the portfolio works both on a live server and via file://
const FALLBACK_CSV = `Authors,Title,Publication,Volume,Number,Pages,Year,Publisher
"Anderson, Shauna; Hinkley, Troy; Ash, Jaimee; Graham, Courtney; Mencer, Donald; Dinescu, Adriana; ",""" Greening"" the Wilkes University chemistry club",ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,241,,,2011,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Harvey, Natalie L; Bernecker, Caela R; Mencer, Donald; Horvath, Evan; Anderson, Shauna; ",Reactive activities in the Wilkes University Chemistry Club,ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,239,,,2010,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, Troy; Pandya, Janam; Kinchla, Amanda J; Decker, Eric A; ",Determination of quantitative sodium mass transfer coefficient during osmotic processing of potatoes,Journal of Food Processing and Preservation,40,5,963-968,2016,
"Jackson, Angelyca A; Hinkley, Troy C; Talbert, Joey N; Nugen, Sam R; Sela, David A; ",Genetic optimization of a bacteriophage-delivered alkaline phosphatase reporter to detect Escherichia coli,Analyst,141,19,5543-5548,2016,The Royal Society of Chemistry
"Hinkley, Troy C; Woroboro, Randy; Nugen, Sam R; ",FINDING A GRAPEFRUIT IN A GREAT LAKE: SENSITIVE DETECTION OF BACTERIA IN LARGE WATER SAMPLES USING BACTERIOPHAGE-BASED BIOSENSORS,BIOENGINEERING BACTERIOPHAGE FOR THE SENSITIVE & RAPID DETECTION OF BACTERIA IN WATER,,,10,2018,Cornell University
"Hinkley, Troy C; Garing, Spencer; Jain, Paras; Williford, John; Le Ny, Anne-Laure M; Nichols, Kevin P; Peters, Joseph E; Talbert, Joey N; Nugen, Sam R; ",A Syringe-based biosensor to rapidly detect low levels of Escherichia coli (ECOR13) in drinking water using engineered bacteriophages,Sensors,20,7,1953,2020,MDPI
"Hinkley, Troy C; Talbert, Angelyca A Jackson1 Joey N; Nugen, Sam R; Sela, David A; ",GENETIC OPTIMZATION OF A PHAGE-DELIVERED ALKALINE PHOSPHATASE REPORTER TO DETECT ESCHERICHIA COLI,BIOENGINEERING BACTERIOPHAGE FOR THE SENSITIVE & RAPID DETECTION OF BACTERIA IN WATER,,,30,2018,Cornell University
"Singh, Sangita; Hinkley, Troy; Nugen, Sam R; Talbert, Joey N; ",Fusion of carbohydrate binding module to mutant alkaline phosphatase for immobilization on cellulose,Biocatalysis and agricultural biotechnology,13,,265-271,2018,Elsevier
"Hinkley, Troy C; Singh, Sangita; Garing, Spencer; Le Ny, Anne-Laure M; Nichols, Kevin P; Peters, Joseph E; Talbert, Joey N; Nugen, Sam R; ","A phage-based assay for the rapid, quantitative, and single CFU visualization of E. coli (ECOR# 13) in drinking water",Scientific reports,8,1,14630,2018,"Nature Publishing Group UK, London"
"Singh, Sangita; Hinkley, Troy; Nugen, Sam R; Talbert, Joey N; ",Colorimetric detection of Escherichia coli using engineered bacteriophage and an affinity reporter system: Singh S. et al.,Analytical and bioanalytical chemistry,411,27,7273-7279,2019,"Springer Berlin Heidelberg, Berlin/Heidelberg"
"Pulkkinen, Elsi M; Hinkley, Troy C; Nugen, Sam R; ",Utilizing in vitro DNA assembly to engineer a synthetic T7 Nanoluc reporter phage for Escherichia coli detection,Integrative Biology,11,3,63-68,2019,Oxford University Press
"Wang, Danhui; Hinkley, Troy; Chen, Juhong; Talbert, Joey N; Nugen, Sam R; ",Phage based electrochemical detection of Escherichia coli in drinking water using affinity reporter probes,Analyst,144,4,1345-1352,2019,The Royal Society of Chemistry
"Hinkley, Troy C; Singh, Sangita; Garing, Spencer; Le, Anne-Laure M; Ny, Kevin P Nichols; Peters, Joseph E; Talbert, Joey N; Sam, R; ",A SYRINGE-BASED BIOSENSOR TO RAPIDLY DETECT LOW LEVELS OF ESCHERICHIA COLI IN DRINKING WATER USING ENGINEERED BACTERIOPHAGES,BIOENGINEERING BACTERIOPHAGE FOR THE SENSITIVE & RAPID DETECTION OF BACTERIA IN WATER,,,147,2018,Cornell University
"Singh, Sangita; Hinkley, Troy; Nugen, Sam; Talbert, Joey; ",Assembly of biocatalytic materials using material-binding proteins/peptides,ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,256,,,2018,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Alonzo, Luis F; Le Ny, Anne-Laure M; Nichols, Kevin Paul Flood; Garing, Spencer; Madan, Damian; Nugen, Sam Rasmussen; Hinkley, Troy; ","Phage constructs for detecting bacteria in a fluid, microfluidic devices for use with constructs, and related methods",,,,,2019,"US Patent App. 15/958,931"
"Hinkley, Troy; Nugen, Sam; ",Recombinant bacteriophages serve as sensitive bacterial recognition elements,ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,253,,,2017,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, Troy; Talbert, Joey; Nugen, Sam; ","Phage-based lab-on-a-filter for the rapid, quantitative, and single cell detection of E. coli in drinking water",ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,256,,,2018,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, TC; Garing, S; Singh, S; Le Ny, AL M; Nichols, KP; Peters, JE; Talbert, JN; Nugen, SR; ",Reporter bacteriophage T7NLC utilizes a novel NanoLuc:: CBM fusion for the ultrasensitive detection of Escherichia coli in water,Analyst,143,17,4074-4082,2018,The Royal Society of Chemistry
"Hinkley, Troy; Jackson, Angelyca; Alcaine, Samuel; Nugen, Sam; ",Engineering bacteriophage for the ultrasensitive detection of foodborne pathogens,ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,250,,,2015,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, Troy Cameron; ",Bioengineering Bacteriophage for the Sensitive & Rapid Detection of Bacteria in Water,,,,,2018,Cornell University
"Hinkley, Troy; Talbert, Joey; Nugen, Sam; ",Phage-based biosensors for rapid testing of agricultural and process water,ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,256,,,2018,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, Troy; Pulkkinen, Elsi; Farquharson, Emma; Duong, Michelle; Talbert, Joey; Nugen, Sam; ","Development of phage-based nanobots for the recognition, separation, and detection of bacterial pathogens",ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY,255,,,2018,"AMER CHEMICAL SOC, 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
"Hinkley, Troy C; Garing, Spencer; Clute-Reinig, Nick; Spencer, Ethan; Jain, Paras; Alonzo, Luis F; Le Ny, Anne-Laure M; ","Genome sequences of 38 bacteriophages infecting Escherichia coli, isolated from raw sewage",Microbiology Resource Announcements,9,38,10.1128/mra. 00909-20,2020,"American Society for Microbiology, 1752 N St., NW, Washington, DC"
"Wang, Zhixin; Qi, Jingjie; Hinkley, Troy C; Nugen, Sam R; Goddard, Julie M; ",Recombinant lactase with a cellulose binding domain permits facile immobilization onto cellulose with retained activity,Food and Bioproducts Processing,126,,207-214,2021,Elsevier
"Alonzo, Luis F; Garing, Spencer; Hinkley, Troy; Le Ny, Anne-Laure M; Madan, Damian; Nichols, Kevin Paul Flood; Nugen, Sam Rasmussen; ","Phage constructs for detecting bacteria in a fluid, microfluidic devices for use with constructs, and related methods",,,,,2021,"US Patent App. 17/049,280"
"Alonzo, Luis F; Hinkley, Troy C; Miller, Andrew; Calderon, Ryan; Garing, Spencer; Williford, John; Clute-Reinig, Nick; Spencer, Ethan; Friend, Michael; Madan, Damian; ",A microfluidic device and instrument prototypes for the detection of Escherichia coli in water samples using a phage-based bioluminescence assay,Lab on a Chip,22,11,2155-2164,2022,The Royal Society of Chemistry
"Alonzo, Luis F; Jain, Paras; Hinkley, Troy; Clute-Reinig, Nick; Garing, Spencer; Spencer, Ethan; Dinh, Van TT; Bell, David; Nugen, Sam; Nichols, Kevin P; ","Rapid, sensitive, and low-cost detection of Escherichia coli bacteria in contaminated water samples using a phage-based assay",Scientific Reports,12,1,7741,2022,"Nature Publishing Group UK, London"
"Wang DanHui, Wang DanHui; Hinkley, T; Chen JuHong, Chen JuHong; Talbert, JN; Nugen, SR; ",Phage based electrochemical detection of Escherichia coli in drinking water using affinity reporter probes.,,,,,2019,
"Hawman, David W; Leventhal, Shanna S; Meade-White, Kimberly; Khandhar, Amit; Murray, Justin; Lovaglio, Jamie; Shaia, Carl; Saturday, Greg; Hinkley, Troy; Erasmus, Jesse; ",A replicating RNA vaccine confers protection in a rhesus macaque model of Crimean-Congo hemorrhagic fever,npj Vaccines,9,1,86,2024,"Nature Publishing Group UK, London"
"Hawman, David W; Meade-White, Kimberly; Clancy, Chad; Archer, Jacob; Hinkley, Troy; Leventhal, Shanna S; Rao, Deepashri; Stamper, Allie; Lewis, Matthew; Rosenke, Rebecca; ",Replicating RNA platform enables rapid response to the SARS-CoV-2 Omicron variant and elicits enhanced protection in naïve hamsters compared to ancestral vaccine,EBioMedicine,83,,,2022,Elsevier
"Leventhal, Shanna S; Meade-White, Kimberly; Shaia, Carl; Tipih, Thomas; Lewis, Mathew; Mihalakakos, Evan A; Hinkley, Troy; Khandhar, Amit P; Erasmus, Jesse H; Feldmann, Heinz; ","Single dose, dual antigen RNA vaccines protect against lethal Crimean-Congo haemorrhagic fever virus infection in mice",EBioMedicine,101,,,2024,Elsevier
"Kimura, Taishi; Leal, Joseph M; Simpson, Adrian; Warner, Nikole L; Berube, Bryan J; Archer, Jacob F; Park, Stephanie; Kurtz, Ryan; Hinkley, Troy; Nicholes, Katrina; ",A localizing nanocarrier formulation enables multi-target immune responses to multivalent replicating RNA with limited systemic inflammation,Molecular Therapy,31,8,2360-2375,2023,Elsevier
"Hawman, David; Leventhal, Shanna; Meade-White, Kimberly; Shaia, Carl; Murray, Justin; Mihalakakos, Evan; Hinkley, Troy; Erasmus, Jesse; Feldmann, Heinz; ",Antibodies targeting the CCHFV nucleocapsid protein require TRIM21 for protection,Res. Sq,10,,,2024,
"Edwards, Kristina R; Malhi, Harman; Schmidt, Karina; Davis, Amelia R; Homad, Leah J; Warner, Nikole L; Chhan, Crystal B; Scharffenberger, Samuel C; Gaffney, Karen; Hinkley, Troy; ",A gH/gL-encoding replicon vaccine elicits neutralizing antibodies that protect humanized mice against EBV challenge,npj Vaccines,9,1,120,2024,"Nature Publishing Group UK, London"
"Robinson, Sally R; Dayao, Denise Ann; Medina, Jhon A; Martone, Cara J; Yauch, Anne K; Hinkley, Troy; Erasmus, Jesse H; Shoemaker, Charles B; Tzipori, Saul; ",An anti-Shiga toxin VHH nanobody multimer protects mice against fatal toxicosis when administered intramuscularly as repRNA,Infection and Immunity,92,11,e00239-24,2024,"American Society for Microbiology, 1752 N St., NW, Washington, DC"
"Leventhal, Shanna S; Bisom, Thomas; Clift, Dean; Rao, Deepashri; Meade-White, Kimberly; Shaia, Carl; Murray, Justin; Mihalakakos, Evan A; Hinkley, Troy; Reynolds, Steven J; ",Antibodies targeting the Crimean-Congo Hemorrhagic fever virus nucleoprotein protect via TRIM21,Nature communications,15,1,9236,2024,"Nature Publishing Group UK, London"
"Hawman, David; Griffin, Amanda; Okumura, Atsuhi; Leventhal, Shanna; McCarthy, Natalie; Agumamidi, Mahati; Chorabik Jr, Michael; Altynova, Ekaterina; Lewis, Matthew; Hinkley, Troy; ",A replicating RNA vaccine protects against lethal clade 2.3. 4.4 b influenza A H5N1 virus challenge in cynomolgus macaques,,,,,2025,
"O’Donnell, Kyle L; Anhalt, Hanna; Saturday, Greg; Warner, Nikole L; Hinkley, Troy; Stone, E Taylor; Hatzakis, Kiara; Khandhar, Amit P; Banadyga, Logan; Erasmus, Jesse H; ",Single-dose replicon RNA Sudan virus vaccine uniformly protects female guinea pigs from disease,Nature communications,16,1,4199,2025,"Nature Publishing Group UK, London"
"Kimura, Taishi; Reed, Steven J; Warner, Nikole L; Fredericks, Megan N; Lewis, Thomas B; Lafferty, Allie; Hodge, Edgar; Simpson, Adrian; Hinkley, Troy; Khandhar, Amit P; ","Antigen-dependent interplay of formulation, systemic innate responses, and antibody responses to multi-component replicon RNA vaccination",Molecular Therapy Nucleic Acids,36,3,,2025,Elsevier
"Guo, Luqiang; McFadden, Elizabeth; Slough, Megan M; Stone, E Taylor; Berrigan, Jacob; Mittler, Eva; Hatzakis, Kiara; Hinkley, Troy; Kain, Heather S; Ke, Zunlong; ",High-resolution in situ structures of hantavirus glycoprotein tetramers,Cell,189,9,2731-2747. e15,2026,Elsevier
"Kimura, Taishi; Warner, Nikole; Lewis, Thomas; Fredericks, Megan; Hodge, Edgar; Reed, Jim; Hinkley, Troy; Fuller, Deborah; Khandhar, Amit; Erasmus, Jesse; ",A localizing nanocarrier formulation enables anti-enterovirus antibody responses from multivalent replicon RNA by limiting systemic interferon responses,MOLECULAR THERAPY,33,4,,2025,"CELL PRESS, 50 HAMPSHIRE ST, FLOOR 5, CAMBRIDGE, MA 02139 USA"
"Hawman, David W; Griffin, Amanda; McCarthy, Natalie; Okumura, Atsushi; Leventhal, Shanna S; Agumamidi, Mahati; Chorabik Jr, Michael; Altynova, Ekaterina; Lewis, Matthew; Hinkley, Troy; ",A replicating RNA vaccine protects cynomolgus macaques against lethal clade 2.3. 4.4 b influenza A H5N1 virus challenge,Science Translational Medicine,17,819,eadw4646,2025,American Association for the Advancement of Science
"Stamper, Allie; Bisom, Thomas; Meade-White, Kimberly; Lewis, Matthew; Leventhal, Shanna; Clancy, Chad; Hinkley, Troy; Erasmus, Jesse; Feldmann, Heinz; Hawman, David W; ",A replicating RNA vaccine protects against severe fever with thrombocytopenia syndrome virus infection in mice,npj Vaccines,10,1,219,2025,"Nature Publishing Group UK, London"
"Kimura, Taishi; Kurtz, Ryan; Reed, Steven; Sankar, Poornima; Leal, Joseph; Hodge, Edgar; Arayangkul, Hathaipat; Hinkley, Troy; Gale Jr, Michael; Khandhar, Amit; ",A localizing replicon RNA vaccine harnesses the intramuscular immune microenvironment to drive adaptive responses,,,,,2025,
"Hodge, Edgar A; Archer, Jacob; Anderson, Jacqueline S; Warner, Nikole L; Tremblay, Jacque; Klose, Thomas; Park, Stephanie; Hinkley, Troy; Khandhar, Amit P; Kuhn, Richard; ",An RNA-to-RNA pipeline for rapid antiviral antibody development,Molecular Therapy,34,7,4136-4152,2026,Elsevier
"Kurtz, Ryan; Reed, Steven J; Sankar, Poornima; Leal, Joseph; Hodge, Edgar; Arayangkul, Hathaipat; Hinkley, Troy; Khandhar, Amit; Erasmus, Jesse; Kimura, Taishi; ","A cationic nanocarrier, LIONTM, shapes a local muscle immune landscape to coordinate adaptive responses",MOLECULAR THERAPY,34,5,,2026,"CELL PRESS, 50 HAMPSHIRE ST, FLOOR 5, CAMBRIDGE, MA 02139 USA"`;

// State
const state = {
  publications: [],
  filterType: 'all',
  filterTopic: 'all',
  filterYear: null,
  searchQuery: '',
  sortBy: 'year-desc',
  viewMode: 'cards',
  activeModalPub: null,
  activeCitationFormat: 'apa'
};

// Robust RFC-4180 CSV Parser
function parseCSV(csvText) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const ch = csvText[i];
    const next = csvText[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field.trim());
        field = '';
      } else if (ch === '\n' || (ch === '\r' && next === '\n')) {
        if (ch === '\r') i++;
        row.push(field.trim());
        if (row.some(cell => cell !== '')) {
          rows.push(row);
        }
        row = [];
        field = '';
      } else {
        field += ch;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some(cell => cell !== '')) {
      rows.push(row);
    }
  }

  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).map((cols, idx) => {
    const obj = { id: idx + 1 };
    headers.forEach((h, i) => {
      obj[h] = cols[i] !== undefined ? cols[i] : '';
    });
    return obj;
  });
}

// Clean & normalize titles (especially ALL-CAPS dissertation chapters)
function cleanTitle(rawTitle) {
  let t = rawTitle.replace(/^"+|"+$/g, '').trim();
  if (t.startsWith('" ')) {
    t = '"' + t.slice(2);
  }
  // Check if mostly uppercase
  const upperCount = (t.match(/[A-Z]/g) || []).length;
  const alphaCount = (t.match(/[A-Za-z]/g) || []).length;
  if (alphaCount > 10 && upperCount / alphaCount > 0.8) {
    t = t.toLowerCase().replace(/(^\w|:\s+\w|\b(?:escherichia|great|lake)\b)/g, m => m.toUpperCase());
    t = t.replace(/\be\. coli\b/gi, 'E. coli');
    t = t.replace(/\bdna\b/gi, 'DNA');
    t = t.replace(/\brna\b/gi, 'RNA');
    t = t.replace(/\boptimzation\b/gi, 'optimization');
  }
  t = t.replace(/2\.3\.\s*4\.4\s*b/g, '2.3.4.4b');
  t = t.replace(/2731-2747\.\s*e15/g, '2731-2747.e15');
  t = t.replace(/LIONTM/g, 'LION™');
  t = t.replace(/NanoLuc::\s*CBM/g, 'NanoLuc::CBM');
  t = t.replace(/ECOR#\s*13/g, 'ECOR #13');
  return t;
}

// Clean & normalize publication venue
function cleanVenue(pub, publisher) {
  const v = (pub || '').trim();
  const p = (publisher || '').trim();

  if (/ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY/i.test(v)) {
    return 'ACS National Meeting Abstracts';
  }
  if (/BIOENGINEERING BACTERIOPHAGE FOR THE SENSITIVE/i.test(v)) {
    return 'Doctoral Dissertation Chapter (Cornell University)';
  }
  if (/^MOLECULAR THERAPY$/i.test(v)) {
    return 'Molecular Therapy';
  }
  if (/^Scientific reports$/i.test(v)) {
    return 'Scientific Reports';
  }
  if (/^Nature communications$/i.test(v)) {
    return 'Nature Communications';
  }
  if (/^Biocatalysis and agricultural biotechnology$/i.test(v)) {
    return 'Biocatalysis and Agricultural Biotechnology';
  }
  if (/^Analytical and bioanalytical chemistry$/i.test(v)) {
    return 'Analytical and Bioanalytical Chemistry';
  }
  if (/^Res\. Sq$/i.test(v)) {
    return 'Research Square (Preprint)';
  }
  if (!v && /US Patent/i.test(p)) {
    return p;
  }
  if (!v && /Cornell University/i.test(p)) {
    return 'Ph.D. Dissertation, Cornell University';
  }
  if (!v) {
    return 'Preprint / Working Manuscript';
  }
  return v;
}

// Classify record into Type and Topic Pillar
function enrichRecord(raw) {
  const title = cleanTitle(raw.Title || '');
  const rawVenue = raw.Publication || '';
  const publisher = raw.Publisher || '';
  const venue = cleanVenue(rawVenue, publisher);
  const year = parseInt(raw.Year, 10) || 2020;

  // Parse authors
  const rawAuthors = (raw.Authors || '')
    .split(';')
    .map(a => a.trim())
    .filter(Boolean)
    .map(a => {
      // Fix quirky Google Scholar author concatenations
      if (a.includes('Jackson1')) return 'Jackson, Angelyca A';
      if (a === 'Wang DanHui, Wang DanHui') return 'Wang, Danhui';
      if (a === 'Chen JuHong, Chen JuHong') return 'Chen, Juhong';
      if (a === 'Sam, R') return 'Nugen, Sam R';
      if (a === 'Ny, Kevin P Nichols') return 'Nichols, Kevin P';
      return a;
    });

  const isFirstAuthor = rawAuthors.length > 0 && /Hinkley/i.test(rawAuthors[0]);

  // Determine publication type
  let type = 'journal';
  let typeLabel = 'Journal Article';

  if (/US Patent/i.test(publisher)) {
    type = 'patent';
    typeLabel = 'US Patent App';
  } else if (/ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY/i.test(rawVenue)) {
    type = 'abstract';
    typeLabel = 'ACS Abstract';
  } else if (/BIOENGINEERING BACTERIOPHAGE/i.test(rawVenue) || (!rawVenue && /Cornell University/i.test(publisher))) {
    type = 'thesis';
    typeLabel = !rawVenue ? 'Ph.D. Dissertation' : 'Dissertation Chapter';
  } else if (/Res\. Sq/i.test(rawVenue) || (!rawVenue && !publisher)) {
    type = 'preprint';
    typeLabel = 'Preprint / Report';
  }

  // Determine research topic pillar
  let topic = 'phage';
  let topicLabel = 'Phage Biosensors';
  const combined = `${title} ${venue}`.toLowerCase();

  if (/hantavirus|glycoprotein tetramers|shiga toxin|vhh|rna-to-rna pipeline|trim21|nucleoprotein|nucleocapsid/i.test(combined)) {
    topic = 'virology';
    topicLabel = 'Structural Virology & mAbs';
  } else if (/rna|replicon|nanocarrier|lion|vaccine|cchfv|sars-cov-2|ebv|sudan virus|h5n1|sftsv|enterovirus/i.test(combined)) {
    topic = 'rna';
    topicLabel = 'repRNA & LION™ Vaccines';
  } else if (/potato|osmotic|lactase|cellulose binding|material-binding|wilkes|chemistry club|carbohydrate binding module to mutant/i.test(combined)) {
    topic = 'biocat';
    topicLabel = 'Biocatalysis & Food Science';
  }

  // Impact & Featured scoring
  let impactRank = 50;
  let isFeatured = false;
  if (/^Cell$/i.test(venue)) { impactRank = 100; isFeatured = true; }
  else if (/Science Translational Medicine/i.test(venue)) { impactRank = 98; isFeatured = true; }
  else if (/Nature Communications/i.test(venue) && year === 2025) { impactRank = 95; isFeatured = true; }
  else if (/Nature Communications/i.test(venue)) { impactRank = 94; }
  else if (/Molecular Therapy$/i.test(venue) && year === 2026 && /RNA-to-RNA/i.test(title)) { impactRank = 93; isFeatured = true; }
  else if (/Lab on a Chip/i.test(venue)) { impactRank = 91; isFeatured = true; }
  else if (/Scientific Reports/i.test(venue) && isFirstAuthor) { impactRank = 90; isFeatured = true; }
  else if (/Molecular Therapy/i.test(venue)) { impactRank = 88; }
  else if (/EBioMedicine|npj Vaccines/i.test(venue)) { impactRank = 86; }
  else if (/Analyst|Sensors|Infection and Immunity/i.test(venue)) { impactRank = 82; }
  else if (type === 'patent') { impactRank = 75; }
  else if (type !== 'journal') { impactRank = 35; }

  // Build external lookup URL
  const pagesClean = (raw.Pages || '').replace(/\s+/g, '');
  let externalUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(title + ' Hinkley')}`;
  if (/10\.1128\/mra/i.test(pagesClean)) {
    externalUrl = 'https://doi.org/10.1128/MRA.00909-20';
  }

  return {
    id: raw.id,
    title,
    rawTitle: raw.Title,
    authors: rawAuthors,
    venue,
    volume: raw.Volume || '',
    number: raw.Number || '',
    pages: (raw.Pages || '').replace(/10\.1128\/mra\.\s*00909-20/i, 'e00909-20').replace(/2731-2747\.\s*e15/, '2731–2747.e15'),
    year,
    publisher,
    type,
    typeLabel,
    topic,
    topicLabel,
    isFirstAuthor,
    impactRank,
    isFeatured,
    externalUrl
  };
}

// Format author name for display (Last, First -> First Last or keep concise)
function formatAuthorsHTML(authors) {
  return authors
    .map(author => {
      const isSelf = /Hinkley/i.test(author);
      if (isSelf) {
        return `<span class="author-self">${escapeHTML(author)}</span>`;
      }
      return escapeHTML(author);
    })
    .join('; ');
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Generate APA, BibTeX, and RIS citations
function generateCitation(pub, format) {
  const authorStr = pub.authors.join('; ');
  if (format === 'apa') {
    const volIssue = pub.volume ? `, ${pub.volume}${pub.number ? `(${pub.number})` : ''}` : '';
    const pages = pub.pages ? `, ${pub.pages}` : '';
    return `${authorStr} (${pub.year}). ${pub.title}. ${pub.venue}${volIssue}${pages}.`;
  }

  if (format === 'bibtex') {
    const firstAuthorLast = (pub.authors[0] || 'Hinkley').split(',')[0].replace(/[^A-Za-z]/g, '').toLowerCase();
    const firstWord = pub.title.split(/\s+/)[0].replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const key = `${firstAuthorLast}${pub.year}${firstWord}`;
    const entryType = pub.type === 'thesis' ? 'phdthesis' : pub.type === 'patent' ? 'misc' : 'article';
    const bibAuthors = pub.authors.join(' and ');
    const lines = [
      `@${entryType}{${key},`,
      `  author = {${bibAuthors}},`,
      `  title = {${pub.title}},`,
      `  journal = {${pub.venue}},`,
      `  year = {${pub.year}}`
    ];
    if (pub.volume) lines.push(`  volume = {${pub.volume}},`);
    if (pub.number) lines.push(`  number = {${pub.number}},`);
    if (pub.pages) lines.push(`  pages = {${pub.pages}},`);
    if (pub.publisher) lines.push(`  publisher = {${pub.publisher}},`);
    lines.push(`}`);
    return lines.join('\n');
  }

  if (format === 'ris') {
    const ty = pub.type === 'patent' ? 'PAT' : pub.type === 'thesis' ? 'THES' : 'JOUR';
    const lines = [`TY  - ${ty}`];
    pub.authors.forEach(a => lines.push(`AU  - ${a}`));
    lines.push(`TI  - ${pub.title}`);
    lines.push(`T2  - ${pub.venue}`);
    lines.push(`PY  - ${pub.year}`);
    if (pub.volume) lines.push(`VL  - ${pub.volume}`);
    if (pub.number) lines.push(`IS  - ${pub.number}`);
    if (pub.pages) lines.push(`SP  - ${pub.pages}`);
    if (pub.publisher) lines.push(`PB  - ${pub.publisher}`);
    lines.push(`ER  - `);
    return lines.join('\n');
  }
  return '';
}

// Render Top Metrics & Interactive Year Bar Chart
function renderMetricsAndTimeline() {
  const pubs = state.publications;
  const journals = pubs.filter(p => p.type === 'journal').length;
  const firstAuthor = pubs.filter(p => p.isFirstAuthor).length;
  const patents = pubs.filter(p => p.type === 'patent').length;

  document.getElementById('nav-pub-count').textContent = pubs.length;
  document.getElementById('stat-total').textContent = pubs.length;
  document.getElementById('stat-journals').textContent = journals;
  document.getElementById('stat-first-author').textContent = firstAuthor;
  document.getElementById('stat-patents').textContent = patents;

  // Update filter pill counts
  const counts = {
    all: pubs.length,
    journal: journals,
    'first-author': firstAuthor,
    patent: patents,
    preprint: pubs.filter(p => p.type === 'preprint').length,
    thesis: pubs.filter(p => p.type === 'thesis').length,
    abstract: pubs.filter(p => p.type === 'abstract').length
  };

  Object.entries(counts).forEach(([key, val]) => {
    const el = document.querySelector(`[data-count-for="${key}"]`);
    if (el) el.textContent = val;
  });

  // Year distribution
  const yearMap = {};
  pubs.forEach(p => {
    yearMap[p.year] = (yearMap[p.year] || 0) + 1;
  });
  const years = Object.keys(yearMap).map(Number).sort((a, b) => a - b);
  const maxCount = Math.max(...Object.values(yearMap), 1);

  const chartEl = document.getElementById('timeline-chart');
  chartEl.innerHTML = years
    .map(yr => {
      const count = yearMap[yr];
      const heightPct = Math.max(Math.round((count / maxCount) * 56), 6);
      const isActive = state.filterYear === yr;
      return `
        <button type="button" class="year-bar-btn ${isActive ? 'active' : ''}" data-year="${yr}" title="${yr}: ${count} publication${count > 1 ? 's' : ''}">
          <span class="year-bar-count">${count}</span>
          <div class="year-bar-fill" style="height: ${heightPct}px"></div>
          <span class="year-bar-label">'${String(yr).slice(-2)}</span>
        </button>
      `;
    })
    .join('');

  chartEl.querySelectorAll('.year-bar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const yr = Number(btn.dataset.year);
      state.filterYear = state.filterYear === yr ? null : yr;
      renderMetricsAndTimeline();
      renderPublications();
      document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Render Featured Landmark Cards
function renderFeatured() {
  const featuredPubs = state.publications
    .filter(p => p.isFeatured)
    .sort((a, b) => b.impactRank - a.impactRank)
    .slice(0, 6);

  const grid = document.getElementById('featured-grid');
  grid.innerHTML = featuredPubs
    .map(pub => `
      <article class="featured-card">
        <div>
          <div class="featured-card-top">
            <span class="featured-journal">${escapeHTML(pub.venue)}</span>
            <span class="featured-year">${pub.year}</span>
          </div>
          <h3 class="featured-title">
            <a href="${pub.externalUrl}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
              ${escapeHTML(pub.title)}
            </a>
          </h3>
          <p class="featured-authors">${formatAuthorsHTML(pub.authors)}</p>
        </div>
        <div class="featured-footer">
          <span class="mono-badge">${escapeHTML(pub.topicLabel)}</span>
          <div class="pub-action-row">
            <button type="button" class="action-chip cite-trigger" data-id="${pub.id}">Cite</button>
            <a href="${pub.externalUrl}" target="_blank" rel="noopener" class="action-chip">View &nearr;</a>
          </div>
        </div>
      </article>
    `)
    .join('');

  grid.querySelectorAll('.cite-trigger').forEach(btn => {
    btn.addEventListener('click', () => openCitationModal(Number(btn.dataset.id)));
  });
}

// Render Research Pillars
function renderPillars() {
  const pillarDefs = [
    {
      id: 'rna',
      title: 'Replicating RNA (repRNA) & LION™ Vaccines',
      desc: 'Localizing cationic nanocarriers and self-amplifying RNA platforms protecting against H5N1, CCHFV, Sudan virus, SARS-CoV-2, EBV, and SFTSV.'
    },
    {
      id: 'phage',
      title: 'Bacteriophage Biosensors & Microfluidics',
      desc: 'Synthetic T7 reporter phages (NanoLuc::CBM, alkaline phosphatase), syringe-based and lab-on-a-chip diagnostics for single-CFU E. coli detection.'
    },
    {
      id: 'virology',
      title: 'Structural Virology & Antibody Therapeutics',
      desc: 'In situ cryo-ET structures of hantavirus glycoprotein tetramers, RNA-to-RNA antiviral antibody pipelines, VHH nanobodies, and TRIM21 mechanisms.'
    },
    {
      id: 'biocat',
      title: 'Biocatalysis, Immobilization & Food Science',
      desc: 'Carbohydrate-binding module (CBM) enzyme immobilization onto cellulose substrates and quantitative mass transfer modeling.'
    }
  ];

  const grid = document.getElementById('pillars-grid');
  grid.innerHTML = pillarDefs
    .map(p => {
      const count = state.publications.filter(pub => pub.topic === p.id).length;
      const isActive = state.filterTopic === p.id;
      return `
        <button type="button" class="pillar-card ${isActive ? 'active' : ''}" data-pillar="${p.id}">
          <div>
            <div class="pillar-icon-row">
              <span class="mono-label">DOMAIN // ${p.id.toUpperCase()}</span>
              <span class="pillar-badge">${count} works</span>
            </div>
            <h3 class="pillar-title">${escapeHTML(p.title)}</h3>
            <p class="pillar-desc">${escapeHTML(p.desc)}</p>
          </div>
          <span class="pillar-cta">Filter domain &rarr;</span>
        </button>
      `;
    })
    .join('');

  grid.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', () => {
      const topic = card.dataset.pillar;
      state.filterTopic = state.filterTopic === topic ? 'all' : topic;
      syncFilterUI();
      renderPillars();
      renderPublications();
      document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Render Co-Author Network
function renderCollaborators() {
  const freq = {};
  const displayNames = {};

  state.publications.forEach(pub => {
    pub.authors.forEach(author => {
      if (/Hinkley/i.test(author)) return;
      const lastName = author.split(',')[0].trim().replace(/[^A-Za-z’'-]/g, '');
      if (!lastName || lastName.length < 2) return;
      const key = lastName.toLowerCase();
      freq[key] = (freq[key] || 0) + 1;
      // Keep the most complete version of the author's name
      if (!displayNames[key] || author.length > displayNames[key].length) {
        displayNames[key] = author;
      }
    });
  });

  const sorted = Object.keys(freq)
    .map(k => ({ key: k, name: displayNames[k], count: freq[k] }))
    .filter(item => item.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, 22);

  const cloud = document.getElementById('collaborators-cloud');
  cloud.innerHTML = sorted
    .map(c => `
      <button type="button" class="collab-btn" data-author="${escapeHTML(c.name.split(',')[0])}">
        <span>${escapeHTML(c.name)}</span>
        <span class="collab-count">${c.count}</span>
      </button>
    `)
    .join('');

  cloud.querySelectorAll('.collab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const surname = btn.dataset.author;
      state.searchQuery = surname;
      document.getElementById('search-input').value = surname;
      syncFilterUI();
      renderPublications();
      document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Filter & Sort Publications
function getFilteredPublications() {
  return state.publications
    .filter(pub => {
      if (state.filterType === 'first-author' && !pub.isFirstAuthor) return false;
      if (state.filterType !== 'all' && state.filterType !== 'first-author' && pub.type !== state.filterType) {
        return false;
      }
      if (state.filterTopic !== 'all' && pub.topic !== state.filterTopic) {
        return false;
      }
      if (state.filterYear && pub.year !== state.filterYear) {
        return false;
      }
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        const haystack = `${pub.title} ${pub.authors.join(' ')} ${pub.venue} ${pub.year} ${pub.publisher} ${pub.topicLabel}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (state.sortBy === 'year-desc') {
        return b.year - a.year || b.impactRank - a.impactRank;
      }
      if (state.sortBy === 'year-asc') {
        return a.year - b.year || b.impactRank - a.impactRank;
      }
      if (state.sortBy === 'impact') {
        return b.impactRank - a.impactRank || b.year - a.year;
      }
      if (state.sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
}

// Render Main Publications List
function renderPublications() {
  const filtered = getFilteredPublications();
  const container = document.getElementById('publications-container');
  const summaryEl = document.getElementById('active-filter-summary');
  const resetBtn = document.getElementById('reset-filters-btn');

  const hasFilters =
    state.filterType !== 'all' ||
    state.filterTopic !== 'all' ||
    state.filterYear !== null ||
    state.searchQuery.trim() !== '';

  resetBtn.classList.toggle('hidden', !hasFilters);

  const filterParts = [];
  if (state.filterType !== 'all') filterParts.push(`type: ${state.filterType}`);
  if (state.filterTopic !== 'all') filterParts.push(`topic: ${state.filterTopic}`);
  if (state.filterYear) filterParts.push(`year: ${state.filterYear}`);
  if (state.searchQuery.trim()) filterParts.push(`query: "${escapeHTML(state.searchQuery.trim())}"`);

  summaryEl.innerHTML = hasFilters
    ? `Showing <strong>${filtered.length}</strong> of ${state.publications.length} works (${filterParts.join(', ')})`
    : `Showing all <strong>${state.publications.length}</strong> records from <code>citations.csv</code>`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p style="font-size:1.05rem;font-weight:600;margin-bottom:8px;">No publications match your current filter criteria.</p>
        <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:16px;">Try clearing the search query or switching back to "All Works".</p>
        <button type="button" class="btn btn-secondary btn-sm" id="empty-reset-btn">Reset All Filters</button>
      </div>
    `;
    document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);
    return;
  }

  // Group by year if sorted chronologically
  if (state.sortBy === 'year-desc' || state.sortBy === 'year-asc') {
    const groups = [];
    const seenYears = new Map();
    filtered.forEach(pub => {
      if (!seenYears.has(pub.year)) {
        const group = { year: pub.year, items: [] };
        seenYears.set(pub.year, group);
        groups.push(group);
      }
      seenYears.get(pub.year).items.push(pub);
    });

    container.innerHTML = groups
      .map(
        g => `
        <div class="year-group">
          <div class="year-group-header">
            <h3 class="year-heading">${g.year}</h3>
            <span class="year-count-badge">${g.items.length} ${g.items.length === 1 ? 'work' : 'works'}</span>
            <div class="year-divider"></div>
          </div>
          <div class="pub-list">
            ${g.items.map(renderPubCardHTML).join('')}
          </div>
        </div>
      `
      )
      .join('');
  } else {
    container.innerHTML = `<div class="pub-list">${filtered.map(renderPubCardHTML).join('')}</div>`;
  }

  container.querySelectorAll('.cite-trigger').forEach(btn => {
    btn.addEventListener('click', () => openCitationModal(Number(btn.dataset.id)));
  });
}

function renderPubCardHTML(pub) {
  const volParts = [];
  if (pub.volume) volParts.push(`Vol. ${pub.volume}`);
  if (pub.number) volParts.push(`No. ${pub.number}`);
  if (pub.pages) volParts.push(`pp. ${pub.pages}`);
  const volString = volParts.length > 0 ? ` &bull; ${escapeHTML(volParts.join(', '))}` : '';

  return `
    <article class="pub-card">
      <div class="pub-main">
        <div class="pub-meta-top">
          <span class="type-badge type-${pub.type}">${escapeHTML(pub.typeLabel)}</span>
          ${pub.isFirstAuthor ? `<span class="first-author-badge">First Author</span>` : ''}
          <span class="venue-name">${escapeHTML(pub.venue)}</span>
          <span class="venue-details">(${pub.year})${volString}</span>
        </div>
        <h4 class="pub-title">
          <a href="${pub.externalUrl}" target="_blank" rel="noopener">${escapeHTML(pub.title)}</a>
        </h4>
        <p class="pub-authors">${formatAuthorsHTML(pub.authors)}</p>
      </div>
      <div class="pub-actions">
        <span class="mono-badge">${escapeHTML(pub.topicLabel)}</span>
        <div class="pub-action-row">
          <button type="button" class="action-chip cite-trigger" data-id="${pub.id}">
            Cite
          </button>
          <a href="${pub.externalUrl}" target="_blank" rel="noopener" class="action-chip" title="Search article on Google Scholar / DOI">
            Scholar &nearr;
          </a>
        </div>
      </div>
    </article>
  `;
}

function syncFilterUI() {
  document.querySelectorAll('#type-filters .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === state.filterType);
  });
  document.querySelectorAll('#topic-filters .topic-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.topic === state.filterTopic);
  });
}

function resetAllFilters() {
  state.filterType = 'all';
  state.filterTopic = 'all';
  state.filterYear = null;
  state.searchQuery = '';
  document.getElementById('search-input').value = '';
  syncFilterUI();
  renderMetricsAndTimeline();
  renderPillars();
  renderPublications();
}

// Citation Modal Controls
function openCitationModal(pubId) {
  const pub = state.publications.find(p => p.id === pubId);
  if (!pub) return;
  state.activeModalPub = pub;
  document.getElementById('modal-title').textContent = pub.title;
  document.getElementById('copy-feedback').textContent = '';
  updateModalCitationText();
  document.getElementById('citation-modal').classList.remove('hidden');
}

function updateModalCitationText() {
  if (!state.activeModalPub) return;
  const text = generateCitation(state.activeModalPub, state.activeCitationFormat);
  document.getElementById('citation-output').textContent = text;
}

// Initialize App
async function initPortfolio() {
  let csvText = FALLBACK_CSV;
  try {
    const res = await fetch('citations.csv', { cache: 'no-store' });
    if (res.ok) {
      const fetched = await res.text();
      if (fetched && fetched.includes('Authors,Title')) {
        csvText = fetched;
      }
    }
  } catch (_) {
    // Use embedded FALLBACK_CSV if opened via file://
  }

  const rawRecords = parseCSV(csvText);
  state.publications = rawRecords.map(enrichRecord);

  renderMetricsAndTimeline();
  renderFeatured();
  renderPillars();
  renderCollaborators();
  renderPublications();

  // Event Listeners: Type Filters
  document.querySelectorAll('#type-filters .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filterType = btn.dataset.type;
      syncFilterUI();
      renderPublications();
    });
  });

  // Event Listeners: Topic Filters
  document.querySelectorAll('#topic-filters .topic-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filterTopic = btn.dataset.topic;
      syncFilterUI();
      renderPillars();
      renderPublications();
    });
  });

  // Hero "Peer-Reviewed Journals Only" CTA
  document.getElementById('filter-journals-cta').addEventListener('click', () => {
    state.filterType = 'journal';
    syncFilterUI();
    renderPublications();
    document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    renderPublications();
  });

  // Keyboard shortcut '/' to focus search
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape') {
      document.getElementById('citation-modal').classList.add('hidden');
    }
  });

  // Sort Select
  document.getElementById('sort-select').addEventListener('change', e => {
    state.sortBy = e.target.value;
    renderPublications();
  });

  // View Toggle (Cards vs Compact)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      const container = document.getElementById('publications-container');
      container.classList.toggle('view-compact', view === 'compact');
      container.classList.toggle('view-cards', view === 'cards');
    });
  });

  // Reset Filters
  document.getElementById('reset-filters-btn').addEventListener('click', resetAllFilters);

  // Modal Controls
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('citation-modal').classList.add('hidden');
  });
  document.getElementById('citation-modal').addEventListener('click', e => {
    if (e.target.id === 'citation-modal') {
      document.getElementById('citation-modal').classList.add('hidden');
    }
  });
  document.querySelectorAll('.citation-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.citation-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCitationFormat = tab.dataset.format;
      updateModalCitationText();
    });
  });
  document.getElementById('copy-citation-btn').addEventListener('click', async () => {
    const text = document.getElementById('citation-output').textContent;
    try {
      await navigator.clipboard.writeText(text);
      document.getElementById('copy-feedback').textContent = 'Copied to clipboard!';
    } catch (_) {
      document.getElementById('copy-feedback').textContent = 'Press Cmd+C to copy';
    }
  });

  // Bulk BibTeX Download
  document.getElementById('export-bibtex-all').addEventListener('click', () => {
    const allBib = state.publications.map(p => generateCitation(p, 'bibtex')).join('\n\n');
    const blob = new Blob([allBib], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Troy_Hinkley_Publications.bib';
    a.click();
    URL.revokeObjectURL(url);
  });

  // Theme Toggle
  const savedTheme = localStorage.getItem('tch_theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tch_theme', next);
  });
}

document.addEventListener('DOMContentLoaded', initPortfolio);
