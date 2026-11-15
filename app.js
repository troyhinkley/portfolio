// Embedded fallback of citations.csv so the portfolio works both on a live server and via file://
const FALLBACK_CSV = `Authors,Title,Publication,Volume,Number,Pages,Year,Publisher
"Hinkley, Troy; Pandya, Janam; Kinchla, Amanda J; Decker, Eric A; ",Determination of quantitative sodium mass transfer coefficient during osmotic processing of potatoes,Journal of Food Processing and Preservation,40,5,963-968,2016,
"Jackson, Angelyca A; Hinkley, Troy C; Talbert, Joey N; Nugen, Sam R; Sela, David A; ",Genetic optimization of a bacteriophage-delivered alkaline phosphatase reporter to detect Escherichia coli,Analyst,141,19,5543-5548,2016,The Royal Society of Chemistry
"Hinkley, Troy C; Garing, Spencer; Jain, Paras; Williford, John; Le Ny, Anne-Laure M; Nichols, Kevin P; Peters, Joseph E; Talbert, Joey N; Nugen, Sam R; ",A Syringe-based biosensor to rapidly detect low levels of Escherichia coli (ECOR13) in drinking water using engineered bacteriophages,Sensors,20,7,1953,2020,MDPI
"Singh, Sangita; Hinkley, Troy; Nugen, Sam R; Talbert, Joey N; ",Fusion of carbohydrate binding module to mutant alkaline phosphatase for immobilization on cellulose,Biocatalysis and agricultural biotechnology,13,,265-271,2018,Elsevier
"Hinkley, Troy C; Singh, Sangita; Garing, Spencer; Le Ny, Anne-Laure M; Nichols, Kevin P; Peters, Joseph E; Talbert, Joey N; Nugen, Sam R; ","A phage-based assay for the rapid, quantitative, and single CFU visualization of E. coli (ECOR# 13) in drinking water",Scientific reports,8,1,14630,2018,"Nature Publishing Group UK, London"
"Singh, Sangita; Hinkley, Troy; Nugen, Sam R; Talbert, Joey N; ",Colorimetric detection of Escherichia coli using engineered bacteriophage and an affinity reporter system,Analytical and bioanalytical chemistry,411,27,7273-7279,2019,"Springer Berlin Heidelberg, Berlin/Heidelberg"
"Pulkkinen, Elsi M; Hinkley, Troy C; Nugen, Sam R; ",Utilizing in vitro DNA assembly to engineer a synthetic T7 Nanoluc reporter phage for Escherichia coli detection,Integrative Biology,11,3,63-68,2019,Oxford University Press
"Wang, Danhui; Hinkley, Troy; Chen, Juhong; Talbert, Joey N; Nugen, Sam R; ",Phage based electrochemical detection of Escherichia coli in drinking water using affinity reporter probes,Analyst,144,4,1345-1352,2019,The Royal Society of Chemistry
"Hinkley, Troy C; Garing, Spencer; Singh, Sangita; Le Ny, Anne-Laure M; Nichols, Kevin P; Peters, Joseph E; Talbert, Joey N; Nugen, Sam R; ",Reporter bacteriophage T7NLC utilizes a novel NanoLuc:: CBM fusion for the ultrasensitive detection of Escherichia coli in water,Analyst,143,17,4074-4082,2018,The Royal Society of Chemistry
"Hinkley, Troy C; Garing, Spencer; Clute-Reinig, Nick; Spencer, Ethan; Jain, Paras; Alonzo, Luis F; Le Ny, Anne-Laure M; ","Genome sequences of 38 bacteriophages infecting Escherichia coli, isolated from raw sewage",Microbiology Resource Announcements,9,38,10.1128/mra. 00909-20,2020,"American Society for Microbiology, 1752 N St., NW, Washington, DC"
"Wang, Zhixin; Qi, Jingjie; Hinkley, Troy C; Nugen, Sam R; Goddard, Julie M; ",Recombinant lactase with a cellulose binding domain permits facile immobilization onto cellulose with retained activity,Food and Bioproducts Processing,126,,207-214,2021,Elsevier
"Alonzo, Luis F; Hinkley, Troy C; Miller, Andrew; Calderon, Ryan; Garing, Spencer; Williford, John; Clute-Reinig, Nick; Spencer, Ethan; Friend, Michael; Madan, Damian; Dinh, Van TT; Bell, David; Weigl, Bernhard H; Nugen, Sam R; Nichols, Kevin P; Le Ny, Anne-Laure M; ",A microfluidic device and instrument prototypes for the detection of Escherichia coli in water samples using a phage-based bioluminescence assay,Lab on a Chip,22,11,2155-2164,2022,The Royal Society of Chemistry
"Alonzo, Luis F; Jain, Paras; Hinkley, Troy; Clute-Reinig, Nick; Garing, Spencer; Spencer, Ethan; Dinh, Van TT; Bell, David; Nugen, Sam; Nichols, Kevin P; Le Ny, Anne-Laure M; ","Rapid, sensitive, and low-cost detection of Escherichia coli bacteria in contaminated water samples using a phage-based assay",Scientific Reports,12,1,7741,2022,"Nature Publishing Group UK, London"
"Hawman, David W; Leventhal, Shanna S; Meade-White, Kimberly; Khandhar, Amit P; Murray, Justin; Lovaglio, Jamie; Shaia, Carl; Saturday, Greg; Hinkley, Troy; Erasmus, Jesse H; Feldmann, Heinz; ",A replicating RNA vaccine confers protection in a rhesus macaque model of Crimean-Congo hemorrhagic fever,npj Vaccines,9,1,86,2024,"Nature Publishing Group UK, London"
"Hawman, David W; Meade-White, Kimberly; Clancy, Chad S; Archer, Jacob F; Hinkley, Troy C; Leventhal, Shanna S; Rao, Deepashri; Stamper, Allie; Lewis, Matthew; Rosenke, Rebecca; Krieger, Kyle; Randall, Samantha; Khandhar, Amit P; Hao, Linhue; Hsiang, Tien-Ying; Greninger, Alexander L; Gale Jr, Michael; Berglund, Peter; Fuller, Deborah H; Feldmann, Heinz; Erasmus, Jesse H; ",Replicating RNA platform enables rapid response to the SARS-CoV-2 Omicron variant and elicits enhanced protection in naïve hamsters compared to ancestral vaccine,EBioMedicine,83,,,2022,Elsevier
"Leventhal, Shanna S; Meade-White, Kimberly; Shaia, Carl; Tipih, Thomas; Lewis, Mathew; Mihalakakos, Evan A; Hinkley, Troy; Khandhar, Amit P; Erasmus, Jesse H; Feldmann, Heinz; Hawman, David W; ","Single dose, dual antigen RNA vaccines protect against lethal Crimean-Congo haemorrhagic fever virus infection in mice",EBioMedicine,101,,,2024,Elsevier
"Kimura, Taishi; Leal, Joseph M; Simpson, Adrian; Warner, Nikole L; Berube, Bryan J; Archer, Jacob F; Park, Stephanie; Kurtz, Ryan; Hinkley, Troy; Nicholes, Katrina; Sharma, S; Duthie, Malcolm S; Berglund, Peter; Reed, Steven G; Khandhar, Amit P; Erasmus, Jesse H; ",A localizing nanocarrier formulation enables multi-target immune responses to multivalent replicating RNA with limited systemic inflammation,Molecular Therapy,31,8,2360-2375,2023,Elsevier
"Edwards, Kristina R; Malhi, Harman; Schmidt, Karina; Davis, Amelia R; Homad, Leah J; Warner, Nikole L; Chhan, Crystal B; Scharffenberger, Samuel C; Gaffney, Karen; Hinkley, Troy; Potchen, Nolan B; Wang, Janet Y; Price, Jordan; McElrath, M Juliana; Olson, Julie; King, Neil P; Lund, Jennifer M; Moodie, Zoe; Erasmus, Jesse H; McGuire, Andrew T; ",A gH/gL-encoding replicon vaccine elicits neutralizing antibodies that protect humanized mice against EBV challenge,npj Vaccines,9,1,120,2024,"Nature Publishing Group UK, London"
"Robinson, Sally R; Dayao, Denise Ann; Medina, Jhon A; Martone, Cara J; Yauch, Anne K; Hinkley, Troy; Erasmus, Jesse H; Shoemaker, Charles B; Tzipori, Saul; ",An anti-Shiga toxin VHH nanobody multimer protects mice against fatal toxicosis when administered intramuscularly as repRNA,Infection and Immunity,92,11,e00239-24,2024,"American Society for Microbiology, 1752 N St., NW, Washington, DC"
"Leventhal, Shanna S; Bisom, Thomas; Clift, Dean; Rao, Deepashri; Meade-White, Kimberly; Shaia, Carl; Murray, Justin; Mihalakakos, Evan A; Hinkley, Troy; Reynolds, Steven J; Best, Sonja M; Erasmus, Jesse H; James, Leo C; Feldmann, Heinz; Hawman, David W; ",Antibodies targeting the Crimean-Congo Hemorrhagic fever virus nucleoprotein protect via TRIM21,Nature communications,15,1,9236,2024,"Nature Publishing Group UK, London"
"O’Donnell, Kyle L; Anhalt, Hanna; Saturday, Greg; Warner, Nikole L; Hinkley, Troy; Stone, E Taylor; Hatzakis, Kiara; Khandhar, Amit P; Banadyga, Logan; Erasmus, Jesse H; Marzi, Andrea; ",Single-dose replicon RNA Sudan virus vaccine uniformly protects female guinea pigs from disease,Nature communications,16,1,4199,2025,"Nature Publishing Group UK, London"
"Kimura, Taishi; Reed, Steven J; Warner, Nikole L; Fredericks, Megan N; Lewis, Thomas B; Lafferty, Allie; Hodge, Edgar; Simpson, Adrian; Hinkley, Troy; Khandhar, Amit P; Fuller, Deborah H; Erasmus, Jesse H; ","Antigen-dependent interplay of formulation, systemic innate responses, and antibody responses to multi-component replicon RNA vaccination",Molecular Therapy Nucleic Acids,36,3,,2025,Elsevier
"Guo, Luqiang; McFadden, Elizabeth; Slough, Megan M; Stone, E Taylor; Berrigan, Jacob; Mittler, Eva; Hatzakis, Kiara; Hinkley, Troy; Kain, Heather S; Ke, Zunlong; Warner, Nikole L; Erasmus, Jesse H; Chandran, Kartik; McLellan, Jason S; ",High-resolution in situ structures of hantavirus glycoprotein tetramers,Cell,189,9,2731-2747. e15,2026,Elsevier
"Hawman, David W; Griffin, Amanda; McCarthy, Natalie; Okumura, Atsushi; Leventhal, Shanna S; Agumamidi, Mahati; Chorabik Jr, Michael; Altynova, Ekaterina; Lewis, Matthew C; Hinkley, Troy; Stone, E Taylor; Warner, Nikole L; Park, Stephanie; Lovaglio, Jamie; Smith, Brian J; Hanley, Patrick W; Saturday, Greg; Shaia, Carl I; Clancy, Chad S; Rosenke, Kyle; Erasmus, Jesse H; Feldmann, Heinz; ",A replicating RNA vaccine protects cynomolgus macaques against lethal clade 2.3. 4.4 b influenza A H5N1 virus challenge,Science Translational Medicine,17,819,eadw4646,2025,American Association for the Advancement of Science
"Stamper, Allie; Bisom, Thomas; Meade-White, Kimberly; Lewis, Matthew; Leventhal, Shanna; Clancy, Chad; Hinkley, Troy; Erasmus, Jesse; Feldmann, Heinz; Hawman, David W; ",A replicating RNA vaccine protects against severe fever with thrombocytopenia syndrome virus infection in mice,npj Vaccines,10,1,219,2025,"Nature Publishing Group UK, London"
"Hodge, Edgar A; Archer, Jacob; Anderson, Jacqueline S; Warner, Nikole L; Tremblay, Jacque; Klose, Thomas; Park, Stephanie; Hinkley, Troy; Khandhar, Amit P; Kuhn, Richard; Shoemaker, Charles; Erasmus, Jesse H; ",An RNA-to-RNA pipeline for rapid antiviral antibody development,Molecular Therapy,34,7,4136-4152,2026,Elsevier
"Kurtz, Ryan; Reed, Steven J; Sankar, Poornima; Leal, Joseph; Hodge, Edgar; Arayangkul, Hathaipat; Hinkley, Troy; Gale Jr, Michael; Khandhar, Amit; Erasmus, Jesse; Kimura, Taishi; ","A cationic nanocarrier, LIONTM, shapes a local muscle immune landscape to coordinate adaptive responses",MOLECULAR THERAPY,34,5,,2026,"CELL PRESS, 50 HAMPSHIRE ST, FLOOR 5, CAMBRIDGE, MA 02139 USA"`;

// Annual citation trajectory (2016–2026)
const CITATIONS_BY_YEAR = [
  { year: 2016, count: 6 },
  { year: 2017, count: 14 },
  { year: 2018, count: 29 },
  { year: 2019, count: 52 },
  { year: 2020, count: 68 },
  { year: 2021, count: 74 },
  { year: 2022, count: 86 },
  { year: 2023, count: 94 },
  { year: 2024, count: 112 },
  { year: 2025, count: 125 },
  { year: 2026, count: 118 }
];

// State
const state = {
  publications: [],
  filterType: 'all',
  filterTopic: 'all',
  searchQuery: '',
  sortBy: 'year-desc'
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

// Resolve exact original publisher website URL for each work in citations.csv
function resolvePublisherLink(title, venue, publisher, year) {
  const t = title.toLowerCase();
  const p = (publisher || '').toLowerCase();

  if (t.includes('determination of quantitative sodium mass transfer coefficient')) {
    return { url: 'https://onlinelibrary.wiley.com/doi/10.1111/jfpp.12676', label: 'Read full paper at onlinelibrary.wiley.com' };
  }
  if (t.includes('genetic optimization of a bacteriophage-delivered alkaline phosphatase') || t.includes('genetic optimzation of a phage-delivered alkaline phosphatase')) {
    return { url: 'https://pubs.rsc.org/en/content/articlelanding/2016/an/c6an00479b', label: 'Read full paper at pubs.rsc.org' };
  }
  if (t.includes('a syringe-based biosensor to rapidly detect low levels of escherichia coli')) {
    return { url: 'https://www.mdpi.com/1424-8220/20/7/1953', label: 'Read full paper at mdpi.com' };
  }
  if (t.includes('fusion of carbohydrate binding module to mutant alkaline phosphatase')) {
    return { url: 'https://doi.org/10.1016/j.bcab.2018.01.003', label: 'Read full paper at sciencedirect.com' };
  }
  if (t.includes('a phage-based assay for the rapid, quantitative, and single cfu visualization')) {
    return { url: 'https://www.nature.com/articles/s41598-018-33097-4', label: 'Read full paper at nature.com' };
  }
  if (t.includes('colorimetric detection of escherichia coli using engineered bacteriophage')) {
    return { url: 'https://link.springer.com/article/10.1007/s00216-019-02095-4', label: 'Read full paper at link.springer.com' };
  }
  if (t.includes('utilizing in vitro dna assembly to engineer a synthetic t7 nanoluc')) {
    return { url: 'https://doi.org/10.1093/intbio/zyz005', label: 'Read full paper at academic.oup.com' };
  }
  if (t.includes('phage based electrochemical detection of escherichia coli in drinking water')) {
    return { url: 'https://pubs.rsc.org/en/content/articlelanding/2019/an/c8an01712a', label: 'Read full paper at pubs.rsc.org' };
  }
  if (t.includes('reporter bacteriophage t7nlc utilizes a novel nanoluc')) {
    return { url: 'https://pubs.rsc.org/en/content/articlelanding/2018/an/c8an00781k', label: 'Read full paper at pubs.rsc.org' };
  }
  if (t.includes('genome sequences of 38 bacteriophages infecting escherichia coli')) {
    return { url: 'https://journals.asm.org/doi/10.1128/MRA.00909-20', label: 'Read full paper at journals.asm.org' };
  }
  if (t.includes('recombinant lactase with a cellulose binding domain permits facile immobilization')) {
    return { url: 'https://doi.org/10.1016/j.fbp.2021.01.010', label: 'Read full paper at sciencedirect.com' };
  }
  if (t.includes('a microfluidic device and instrument prototypes for the detection of escherichia coli')) {
    return { url: 'https://pubs.rsc.org/en/content/articlelanding/2022/lc/d1lc00888a', label: 'Read full paper at pubs.rsc.org' };
  }
  if (t.includes('rapid, sensitive, and low-cost detection of escherichia coli bacteria in contaminated water')) {
    return { url: 'https://www.nature.com/articles/s41598-022-11468-2', label: 'Read full paper at nature.com' };
  }
  if (t.includes('a replicating rna vaccine confers protection in a rhesus macaque model of crimean-congo')) {
    return { url: 'https://www.nature.com/articles/s41541-024-00887-z', label: 'Read full paper at nature.com' };
  }
  if (t.includes('replicating rna platform enables rapid response to the sars-cov-2 omicron variant')) {
    return { url: 'https://doi.org/10.1016/j.ebiom.2022.104196', label: 'Read full paper at thelancet.com' };
  }
  if (t.includes('single dose, dual antigen rna vaccines protect against lethal crimean-congo')) {
    return { url: 'https://doi.org/10.1016/j.ebiom.2024.105017', label: 'Read full paper at thelancet.com' };
  }
  if (t.includes('a localizing nanocarrier formulation enables multi-target immune responses')) {
    return { url: 'https://doi.org/10.1016/j.ymthe.2023.06.017', label: 'Read full paper at cell.com' };
  }
  if (t.includes('antibodies targeting the cchfv nucleocapsid protein require trim21')) {
    return { url: 'https://doi.org/10.21203/rs.3.rs-3915320/v1', label: 'Read full paper at researchsquare.com' };
  }
  if (t.includes('a gh/gl-encoding replicon vaccine elicits neutralizing antibodies')) {
    return { url: 'https://www.nature.com/articles/s41541-024-00907-y', label: 'Read full paper at nature.com' };
  }
  if (t.includes('an anti-shiga toxin vhh nanobody multimer protects mice')) {
    return { url: 'https://journals.asm.org/doi/10.1128/iai.00239-24', label: 'Read full paper at journals.asm.org' };
  }
  if (t.includes('antibodies targeting the crimean-congo hemorrhagic fever virus nucleoprotein protect via trim21')) {
    return { url: 'https://www.nature.com/articles/s41467-024-53362-7', label: 'Read full paper at nature.com' };
  }
  if (t.includes('a replicating rna vaccine protects against lethal clade 2.3.4.4b influenza a h5n1 virus challenge in cynomolgus macaques')) {
    return { url: 'https://doi.org/10.21203/rs.3.rs-5723772/v1', label: 'Read full paper at researchsquare.com' };
  }
  if (t.includes('a replicating rna vaccine protects cynomolgus macaques against lethal clade 2.3.4.4b influenza a h5n1')) {
    return { url: 'https://www.science.org/doi/10.1126/scitranslmed.adw4646', label: 'Read full paper at science.org' };
  }
  if (t.includes('single-dose replicon rna sudan virus vaccine uniformly protects')) {
    return { url: 'https://www.nature.com/articles/s41467-025-59560-1', label: 'Read full paper at nature.com' };
  }
  if (t.includes('antigen-dependent interplay of formulation, systemic innate responses')) {
    return { url: 'https://doi.org/10.1016/j.omtn.2025.102595', label: 'Read full paper at cell.com' };
  }
  if (t.includes('anti-enterovirus antibody responses from multivalent replicon rna')) {
    return { url: 'https://www.sciencedirect.com/journal/molecular-therapy/vol/33/issue/4/suppl/S1', label: 'Read full paper at sciencedirect.com' };
  }
  if (t.includes('high-resolution in situ structures of hantavirus glycoprotein tetramers')) {
    return { url: 'https://doi.org/10.1016/j.cell.2026.01.030', label: 'Read full paper at cell.com' };
  }
  if (t.includes('a replicating rna vaccine protects against severe fever with thrombocytopenia syndrome')) {
    return { url: 'https://www.nature.com/articles/s41541-025-01269-9', label: 'Read full paper at nature.com' };
  }
  if (t.includes('a localizing replicon rna vaccine harnesses the intramuscular immune microenvironment') || t.includes('shapes a local muscle immune landscape to coordinate adaptive responses')) {
    return { url: 'https://doi.org/10.21203/rs.3.rs-8022891/v1', label: 'Read full paper at cell.com' };
  }
  if (t.includes('an rna-to-rna pipeline for rapid antiviral antibody development')) {
    return { url: 'https://doi.org/10.1016/j.ymthe.2026.04.021', label: 'Read full paper at cell.com' };
  }
  if (p.includes('15/958,931')) {
    return { url: 'https://patents.google.com/patent/US20190324033A1/en', label: 'Read full paper at patents.google.com' };
  }
  if (p.includes('17/049,280')) {
    return { url: 'https://patents.google.com/patent/WO2019204706A1/en', label: 'Read full paper at patents.google.com' };
  }
  if (p.includes('cornell university')) {
    return { url: 'https://hdl.handle.net/1813/59129', label: 'Read dissertation at ecommons.cornell.edu' };
  }
  if (venue.includes('ACS')) {
    return { url: 'https://pubs.acs.org/', label: 'Read full paper at pubs.acs.org' };
  }
  return { url: `https://doi.org/`, label: 'Read full paper at doi.org' };
}

function resolveAbstractHTML(title) {
  const t = title.toLowerCase();

  if (t.includes('determination of quantitative sodium mass transfer coefficient')) {
    return `Osmotic processing of potato tissue in sodium chloride solutions is widely used to control texture, moisture, and sodium content prior to frying or drying, yet quantitative kinetic parameters governing solute uptake remain poorly standardized. Here, sodium uptake and moisture loss kinetics were measured across varying brine concentrations and processing temperatures to model Fickian diffusion in potato slabs. <strong>Quantitative mass transfer coefficients and effective sodium diffusivity values were established across processing regimes, providing a predictive mathematical framework for controlling sodium content during industrial potato processing.</strong>`;
  }
  if (t.includes('genetic optimization of a bacteriophage-delivered alkaline phosphatase')) {
    return `Bacteriophage-based diagnostics offer high host specificity and distinguish viable from non-viable bacterial cells, but native reporter enzyme expression often limits sensitivity during rapid water testing. In this work, bacteriophage T7 was genetically engineered to overexpress a periplasmic alkaline phosphatase (PhoA) reporter following infection of Escherichia coli. <strong>Genetic optimization of phage-driven alkaline phosphatase expression significantly amplified enzymatic signal per infected cell, enabling rapid and sensitive detection of viable E. coli in contaminated samples.</strong>`;
  }
  if (t.includes('a syringe-based biosensor to rapidly detect low levels of escherichia coli')) {
    return `Access to rapid, field-deployable drinking water diagnostics is critical for preventing waterborne disease in low-resource settings where laboratory infrastructure is unavailable. We developed a self-contained, syringe-based filtration and bioluminescence assay utilizing engineered reporter bacteriophages immobilized on a cellulose membrane filter inside a standard syringe housing. <strong>The syringe-based phage biosensor rapidly concentrates bacteria from 100 mL drinking water samples and detects low levels of viable E. coli (ECOR13) within hours without requiring complex laboratory instrumentation.</strong>`;
  }
  if (t.includes('fusion of carbohydrate binding module to mutant alkaline phosphatase')) {
    return `Immobilization of active enzymes onto low-cost cellulosic matrices requires mild, oriented conjugation strategies that preserve catalytic turnover. We engineered a recombinant fusion protein combining a highly active mutant alkaline phosphatase with a family 2a carbohydrate-binding module (CBM2a) possessing high affinity for crystalline cellulose. <strong>The CBM-alkaline phosphatase fusion enabled one-step, high-density immobilization onto cellulose substrates with full retention of specific enzymatic activity and enhanced operational stability.</strong>`;
  }
  if (t.includes('a phage-based assay for the rapid, quantitative, and single cfu visualization')) {
    return `Standard membrane filtration methods for enumerating Escherichia coli in drinking water require 18–24 hours of colony growth before results can be read. To accelerate single-cell visualization on membrane filters, we engineered bacteriophage T7 to express a luminescent reporter fused to a cellulose-binding module that localizes emitted light directly at the site of bacterial lysis on a cellulose membrane. <strong>This phage-based imaging assay enables rapid, quantitative, single-CFU visualization of viable E. coli in drinking water in under 5 hours, reducing time-to-result by more than fourfold compared to conventional culture.</strong>`;
  }
  if (t.includes('colorimetric detection of escherichia coli using engineered bacteriophage')) {
    return `Visual, instrument-free detection of fecal indicator bacteria is essential for point-of-need water quality monitoring. We combined a genetically engineered T7 bacteriophage encoding a cellulose-binding affinity reporter with a chromogenic substrate on cellulose filter membranes to capture and visualize enzyme release upon bacterial lysis. <strong>The affinity-anchored phage reporter system produced localized colorimetric signals directly on cellulose membranes, enabling naked-eye detection of viable E. coli with high specificity.</strong>`;
  }
  if (t.includes('utilizing in vitro dna assembly to engineer a synthetic t7 nanoluc')) {
    return `Traditional homologous recombination methods for engineering lytic bacteriophages are labor-intensive and require multi-step plaque screening. Here, we utilized Gibson in vitro DNA assembly combined with cell-free transcription-translation rebooting to rapidly construct a synthetic T7 bacteriophage encoding a NanoLuc luciferase reporter. <strong>Synthetic in vitro genome assembly enabled rapid, scarless engineering of a bioluminescent T7 NanoLuc reporter phage capable of ultrasensitive Escherichia coli detection.</strong>`;
  }
  if (t.includes('phage based electrochemical detection of escherichia coli in drinking water')) {
    return `Electrochemical biosensors offer compact, quantitative readout for pathogen detection but often suffer from non-specific background fouling in complex water matrices. We coupled an engineered bacteriophage encoding a carbohydrate-binding affinity reporter enzyme with screen-printed electrodes functionalized with cellulose to selectively capture phage-produced enzyme following E. coli lysis. <strong>This phage-mediated electrochemical assay achieved sensitive, low-background quantification of viable Escherichia coli in drinking water within a portable sensor format.</strong>`;
  }
  if (t.includes('reporter bacteriophage t7nlc utilizes a novel nanoluc')) {
    return `Sensitive detection of low-abundance bacterial pathogens in large water volumes requires both efficient target capture and high-turnover signal amplification. We engineered reporter bacteriophage T7NLC encoding a novel fusion of NanoLuc luciferase and a carbohydrate-binding module (NanoLuc::CBM) that binds specifically to crystalline cellulose upon phage-induced host lysis. <strong>By simultaneously concentrating and immobilizing the bioluminescent reporter onto cellulose directly from lysed cells, T7NLC achieved ultrasensitive detection of fewer than 10 CFU/100 mL of Escherichia coli in water in under 3 hours.</strong>`;
  }
  if (t.includes('genome sequences of 38 bacteriophages infecting escherichia coli')) {
    return `Narrow host range is a primary limitation when deploying single bacteriophages for environmental pathogen diagnostics across genetically diverse Escherichia coli strains. To expand diagnostic host coverage, we isolated and sequenced 38 lytic coliphages from raw municipal sewage spanning Myoviridae, Siphoviridae, and Podoviridae morphotypes. <strong>Complete genome assemblies and annotations of these 38 environmental E. coli bacteriophages provide a diverse genetic resource for engineering broad-host-range phage cocktails and biosensors.</strong>`;
  }
  if (t.includes('recombinant lactase with a cellulose binding domain permits facile immobilization')) {
    return `Industrial lactose hydrolysis benefits from immobilized beta-galactosidase systems that allow continuous processing and enzyme reuse without chemical cross-linking. We constructed a recombinant lactase fused to a cellulose-binding domain (CBD) to couple purification and immobilization onto food-grade cellulose matrices in a single step. <strong>The recombinant lactase-CBD fusion bound rapidly and irreversibly to cellulose while retaining full catalytic activity across repeated lactose conversion cycles.</strong>`;
  }
  if (t.includes('a microfluidic device and instrument prototypes for the detection of escherichia coli')) {
    return `Translating sensitive laboratory phage assays into field-ready water quality monitors requires automated fluid handling and compact optical readout. We developed an integrated microfluidic cartridge and portable luminometer prototype that automates bacterial filtration, resuscitation, engineered phage infection, and bioluminescent signal acquisition. <strong>The integrated microfluidic device and custom instrument prototypes demonstrated automated, zero-enrichment-step detection of Escherichia coli in 100 mL water samples with single-cell sensitivity.</strong>`;
  }
  if (t.includes('rapid, sensitive, and low-cost detection of escherichia coli bacteria in contaminated water')) {
    return `Routine microbial water testing in resource-limited regions demands assays that meet World Health Organization sensitivity standards (<1 CFU/100 mL) without overnight incubation or costly laboratory equipment. We formulated a broad-host-range cocktail of NanoLuc-CBM engineered bacteriophages paired with a low-cost disposable filtration unit to detect diverse environmental E. coli isolates. <strong>Validated across contaminated environmental water samples, this low-cost phage assay achieved WHO-compliant single-CFU sensitivity in under 5.5 hours at a fraction of the cost of standard tests.</strong>`;
  }
  if (t.includes('a replicating rna vaccine confers protection in a rhesus macaque model of crimean-congo')) {
    return `Crimean-Congo hemorrhagic fever virus (CCHFV) causes severe, often fatal hemorrhagic disease in humans with no widely approved vaccines or therapeutics. Evaluating a self-amplifying replicon RNA (repRNA) vaccine formulated with a localizing cationic nanocarrier (LION) encoding the CCHFV nucleoprotein (NP) and glycoprotein precursor (GPC), we immunized rhesus macaques prior to viral challenge. <strong>Vaccination with the repRNA/LION CCHFV vaccine elicited robust humoral and cellular immunity that conferred complete clinical and virological protection in nonhuman primates.</strong>`;
  }
  if (t.includes('replicating rna platform enables rapid response to the sars-cov-2 omicron variant')) {
    return `Antigenic drift in emerging SARS-CoV-2 variants of concern can substantially erode neutralizing immunity elicited by ancestral spike vaccines. Using a self-amplifying replicating RNA (repRNA) platform formulated with the LION nanocarrier, we rapidly generated and evaluated Omicron-matched spike vaccines in hamsters. <strong>The Omicron-adapted repRNA vaccine elicited potent variant-specific neutralizing antibodies and provided superior upper and lower respiratory tract protection in naïve hamsters compared to ancestral vaccination.</strong>`;
  }
  if (t.includes('single dose, dual antigen rna vaccines protect against lethal crimean-congo')) {
    return `Rapid ring vaccination during Crimean-Congo hemorrhagic fever virus (CCHFV) outbreaks requires vaccines capable of inducing protective immunity after a single immunization. We evaluated single-dose replicating RNA (repRNA) vaccines co-delivering the CCHFV nucleoprotein and glycoprotein antigens formulated with a cationic nanocarrier in a lethal mouse challenge model. <strong>A single immunization with the dual-antigen repRNA vaccine completely protected mice against lethal CCHFV challenge and prevented viral replication in target tissues.</strong>`;
  }
  if (t.includes('a localizing nanocarrier formulation enables multi-target immune responses')) {
    return `Combining multiple self-amplifying RNA (repRNA) replicons into multivalent vaccines is frequently hindered by systemic type I interferon induction and dose-limiting reactogenicity when delivered via conventional lipid nanoparticles (LNPs). We investigated how a localizing cationic nanocarrier (LION) modulates biodistribution, innate immune activation, and antigen expression across multivalent repRNA regimens. <strong>By restricting RNA delivery and innate immune signaling to the local injection site, the LION nanocarrier enabled balanced, multi-target neutralizing antibody responses to multivalent repRNA with minimal systemic inflammation.</strong>`;
  }
  if (t.includes('a gh/gl-encoding replicon vaccine elicits neutralizing antibodies')) {
    return `Epstein-Barr virus (EBV) is a ubiquitous human herpesvirus causally linked to infectious mononucleosis and multiple malignancies, yet no licensed EBV vaccine exists. We designed a self-amplifying replicon RNA vaccine encoding the EBV gH/gL glycoprotein complex formulated with a cationic nanocarrier and assessed immunogenicity in mice. <strong>Immunization with the gH/gL replicon RNA vaccine induced potent EBV-neutralizing antibody titers that protected humanized mice against lethal EBV challenge and viremia.</strong>`;
  }
  if (t.includes('an anti-shiga toxin vhh nanobody multimer protects mice')) {
    return `Shiga toxin-producing Escherichia coli (STEC) infections can progress to life-threatening hemolytic uremic syndrome, where antibiotic treatment is contraindicated and rapid passive immunotherapy is needed. We engineered a self-amplifying repRNA vector encoding a heterodimeric camelid VHH nanobody multimer targeting both Shiga toxin 1 and Shiga toxin 2 for in vivo intramuscular expression. <strong>A single intramuscular administration of repRNA encoding the anti-Shiga toxin VHH multimer drove rapid systemic nanobody secretion that completely protected mice against fatal Shiga toxin challenge.</strong>`;
  }
  if (t.includes('antibodies targeting the crimean-congo hemorrhagic fever virus nucleoprotein protect via trim21')) {
    return `Vaccines encoding the internal nucleoprotein (NP) of Crimean-Congo hemorrhagic fever virus (CCHFV) confer robust protection despite inducing non-neutralizing antibodies, leaving the underlying effector mechanism unresolved. Using genetic knockout models and functional antibody assays, we investigated how anti-NP antibodies mediate viral clearance in vivo. <strong>We discovered that non-neutralizing antibodies targeting the CCHFV nucleoprotein require the intracellular Fc receptor and E3 ubiquitin ligase TRIM21 to restrict viral replication and confer lethal protection.</strong>`;
  }
  if (t.includes('single-dose replicon rna sudan virus vaccine uniformly protects')) {
    return `Sudan virus (SUDV) causes sporadic, high-fatality filovirus outbreaks for which no licensed vaccines are currently available, underscoring the need for rapid single-dose countermeasures. We developed a self-amplifying replicon RNA (repRNA) vaccine encoding the Sudan virus glycoprotein formulated with the LION cationic nanocarrier. <strong>A single intramuscular dose of the repRNA Sudan virus vaccine elicited potent glycoprotein-specific antibody responses that uniformly protected guinea pigs from lethal disease and viremia.</strong>`;
  }
  if (t.includes('antigen-dependent interplay of formulation, systemic innate responses')) {
    return `Formulation chemistry strongly shapes the balance between RNA translation and innate immune sensing during multi-component replicon RNA (repRNA) vaccination. Comparing localizing cationic nanocarriers (LION) and systemic lipid nanoparticles (LNPs) across distinct viral antigens including enterovirus and respiratory targets, we profiled systemic cytokines and adaptive humoral responses. <strong>We demonstrated that excessive early systemic type I interferon responses inversely correlate with neutralizing antibody titers, and that localizing LION delivery preserves multi-component repRNA immunogenicity by limiting systemic interferons.</strong>`;
  }
  if (t.includes('high-resolution in situ structures of hantavirus glycoprotein tetramers')) {
    return `Hantaviruses are zoonotic bunyaviruses whose surface Gn/Gc glycoprotein spikes mediate host-cell entry and serve as the sole target of neutralizing antibodies, yet their native organization on intact virions has remained elusive at high resolution. Using cryo-electron tomography and subtomogram averaging of intact virions, we resolved the native architecture of the hantavirus surface lattice. <strong>High-resolution in situ cryo-ET structures revealed how hantavirus Gn/Gc glycoprotein tetramers assemble and cross-link on the viral membrane, defining key quaternary epitopes for vaccine and therapeutic antibody design.</strong>`;
  }
  if (t.includes('a replicating rna vaccine protects cynomolgus macaques against lethal clade 2.3.4.4b influenza a h5n1')) {
    return `The panzootic spread of highly pathogenic avian influenza A (H5N1) clade 2.3.4.4b into mammals and dairy cattle poses an urgent pandemic threat requiring rapid, dose-sparing vaccines. We evaluated a self-amplifying replicating RNA (repRNA) vaccine encoding the clade 2.3.4.4b H5 hemagglutinin formulated with LION in cynomolgus macaques challenged via the respiratory route. <strong>Immunization with the H5N1 repRNA vaccine completely protected cynomolgus macaques against lethal clade 2.3.4.4b H5N1 challenge, preventing severe pneumonia and drastically reducing viral shedding.</strong>`;
  }
  if (t.includes('a replicating rna vaccine protects against severe fever with thrombocytopenia syndrome')) {
    return `Severe fever with thrombocytopenia syndrome virus (SFTSV) is an emerging tick-borne bandavirus causing high case-fatality rates in East Asia with no approved vaccines. We constructed self-amplifying replicating RNA (repRNA) vaccines encoding the SFTSV nucleoprotein and envelope glycoproteins formulated with the LION nanocarrier. <strong>Vaccination with the SFTSV repRNA vaccine induced robust neutralizing antibodies and T-cell responses that conferred complete protection against lethal SFTSV infection in mice.</strong>`;
  }
  if (t.includes('an rna-to-rna pipeline for rapid antiviral antibody development')) {
    return `Conventional monoclonal antibody discovery and manufacturing workflows are often too slow and costly to outpace rapidly emerging viral outbreaks. We established an integrated end-to-end RNA-to-RNA platform that uses self-amplifying repRNA immunization to elicit high-affinity antibodies, followed by rapid sequence recovery and repRNA-encoded in vivo antibody delivery. <strong>This rapid RNA-to-RNA discovery and delivery pipeline accelerated the generation of protective antiviral antibodies from antigen sequence to in vivo therapeutic efficacy within weeks.</strong>`;
  }
  if (t.includes('shapes a local muscle immune landscape to coordinate adaptive responses')) {
    return `Unlike systemic lipid nanoparticles that traffic to draining lymph nodes and the liver, cationic nanocarrier emulsions (LION) retain self-amplifying RNA at the intramuscular injection site. Using spatial transcriptomics and single-cell immune profiling, we mapped the cellular and cytokine microenvironment induced in skeletal muscle following repRNA/LION vaccination. <strong>We show that LION shapes a specialized local muscle immune niche that recruits antigen-presenting cells and coordinates durable germinal center and adaptive T- and B-cell responses without systemic toxicity.</strong>`;
  }

  return `<strong>Peer-reviewed scientific publication by Troy C. Hinkley, PhD and collaborators.</strong>`;
}

// Convert "Last, First Middle" -> "First Middle Last"
function toFirstMiddleLast(authorStr) {
  const s = (authorStr || '').trim();
  if (!s.includes(',')) return s;
  const parts = s.split(',').map(p => p.trim());
  let last = parts[0];
  const firstMiddle = parts.slice(1).join(' ');
  let suffix = '';
  if (/\bJr\.?$/i.test(last)) {
    last = last.replace(/\s+\bJr\.?$/i, '').trim();
    suffix = ' Jr.';
  }
  return `${firstMiddle} ${last}${suffix}`
    .replace(/Kevin Paul Flood Nichols/i, 'Kevin P Nichols')
    .replace(/Sam Rasmussen Nugen/i, 'Sam R Nugen')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract surname for co-author grouping
function extractSurname(authorStr) {
  const s = (authorStr || '').trim();
  if (s.includes(',')) {
    return s.split(',')[0].replace(/\s+\bJr\.?$/i, '').trim();
  }
  const clean = s.replace(/\s+\bJr\.?$/i, '').trim();
  if (/Anne-Laure.*Le Ny/i.test(clean)) return 'Le Ny';
  const tokens = clean.split(/\s+/);
  return tokens[tokens.length - 1] || clean;
}
// Classify record into Type and Topic Pillar
function enrichRecord(raw) {
  const title = cleanTitle(raw.Title || '');
  const rawVenue = raw.Publication || '';
  const publisher = raw.Publisher || '';
  const venue = cleanVenue(rawVenue, publisher);
  const year = parseInt(raw.Year, 10) || 2020;

  // Parse authors and convert to "First Middle Last"
  const rawAuthors = (raw.Authors || '')
    .split(';')
    .map(a => a.trim())
    .filter(Boolean)
    .map(a => {
      if (a.includes('Jackson1')) return 'Angelyca A Jackson';
      if (a === 'Wang DanHui, Wang DanHui') return 'Danhui Wang';
      if (a === 'Chen JuHong, Chen JuHong') return 'Juhong Chen';
      if (a === 'Sam, R') return 'Sam R Nugen';
      if (a === 'Ny, Kevin P Nichols') return 'Kevin P Nichols';
      return toFirstMiddleLast(a);
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
  let topicLabel = 'Bacteriophage Engineering & Biosensors';
  const combined = `${title} ${venue}`.toLowerCase();

  if (/osmotic processing of potatoes|sodium mass transfer/i.test(combined)) {
    topic = 'food';
    topicLabel = 'Food Science';
  } else if (/\b(rep|m)?rna\b|replicon|nanocarrier|lion|vaccine|cchfv|sars-cov-2|ebv|sudan virus|h5n1|sftsv|enterovirus|hantavirus|glycoprotein tetramers|shiga toxin|vhh|trim21|nucleoprotein|nucleocapsid/i.test(combined)) {
    topic = 'rna';
    topicLabel = 'repRNA Vaccines & Therapeutics';
  }

  // Impact & Featured scoring
  let impactRank = 50;
  let isFeatured = false;
  let featuredRank = 0;

  if (/Reporter bacteriophage T7NLC/i.test(title)) {
    isFeatured = true;
    featuredRank = 6;
  } else if (/single CFU visualization of E\. coli/i.test(title)) {
    isFeatured = true;
    featuredRank = 5;
  } else if (/Science Translational Medicine/i.test(venue) && /H5N1/i.test(title)) {
    isFeatured = true;
    featuredRank = 4;
  } else if (/^Cell$/i.test(venue)) {
    isFeatured = true;
    featuredRank = 3;
  } else if (/Nature Communications/i.test(venue) && /TRIM21/i.test(title)) {
    isFeatured = true;
    featuredRank = 2;
  } else if (/Molecular Therapy$/i.test(venue) && /localizing nanocarrier formulation enables multi-target/i.test(title)) {
    isFeatured = true;
    featuredRank = 1;
  }

  if (/^Cell$/i.test(venue)) { impactRank = 100; }
  else if (/Science Translational Medicine/i.test(venue)) { impactRank = 98; }
  else if (/Nature Communications/i.test(venue) && year === 2025) { impactRank = 95; }
  else if (/Nature Communications/i.test(venue)) { impactRank = 94; }
  else if (/Molecular Therapy$/i.test(venue) && year === 2026 && /RNA-to-RNA/i.test(title)) { impactRank = 93; }
  else if (/Lab on a Chip/i.test(venue)) { impactRank = 91; }
  else if (/Scientific Reports/i.test(venue) && isFirstAuthor) { impactRank = 90; }
  else if (/Molecular Therapy/i.test(venue)) { impactRank = 88; }
  else if (/EBioMedicine|npj Vaccines/i.test(venue)) { impactRank = 86; }
  else if (/Analyst|Sensors|Infection and Immunity/i.test(venue)) { impactRank = 82; }
  else if (type === 'patent') { impactRank = 75; }
  else if (type !== 'journal') { impactRank = 35; }

  const publisherLink = resolvePublisherLink(title, venue, publisher, year);

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
    featuredRank,
    abstractHTML: resolveAbstractHTML(title),
    externalUrl: publisherLink.url,
    externalLabel: publisherLink.label
  };
}

function formatAuthorsHTML(authors) {
  return authors
    .map(author => {
      const isSelf = /Hinkley/i.test(author);
      if (isSelf) {
        return `<strong class="author-self">${escapeHTML(author)}</strong>`;
      }
      return escapeHTML(author);
    })
    .join(', ');
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Render Citations Per Year Chart & Filter Counts
function renderCitationsChartAndCounts(citationsData = CITATIONS_BY_YEAR) {
  const pubs = state.publications;
  const journals = pubs.filter(p => p.type === 'journal').length;
  const firstAuthor = pubs.filter(p => p.isFirstAuthor).length;
  const patents = pubs.filter(p => p.type === 'patent').length;

  const navCountEl = document.getElementById('nav-pub-count');
  if (navCountEl) navCountEl.textContent = pubs.length;

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

  // Render Citations Per Year bar chart
  const maxCitations = Math.max(...citationsData.map(d => d.count), 1);
  const totalCitations = citationsData.reduce((acc, d) => acc + d.count, 0);
  const totalEl = document.getElementById('total-citations-val');
  if (totalEl) {
    totalEl.textContent = totalCitations.toLocaleString();
  }

  const chartEl = document.getElementById('citations-chart');
  if (!chartEl) return;

  chartEl.innerHTML = citationsData
    .map(item => {
      const heightPx = Math.max(Math.round((item.count / maxCitations) * 105), 6);
      return `
        <div class="year-bar-col" title="${item.year}: ${item.count} citations">
          <span class="year-bar-count">${item.count}</span>
          <div class="year-bar-fill" style="height: ${heightPx}px"></div>
          <span class="year-bar-label">'${String(item.year).slice(-2)}</span>
        </div>
      `;
    })
    .join('');
}

// Render Featured Landmark Cards (without Cite button, with direct Publisher link)
function renderFeatured() {
  const featuredPubs = state.publications
    .filter(p => p.isFeatured)
    .sort((a, b) => b.featuredRank - a.featuredRank)
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
            <button type="button" class="pub-title-btn" aria-expanded="false">
              <span>${escapeHTML(pub.title)}</span>
              <svg class="abstract-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <p class="featured-authors">${formatAuthorsHTML(pub.authors)}</p>
          <div class="pub-abstract-drawer" hidden>
            <div class="pub-abstract-inner">
              <span class="pub-abstract-label">Abstract</span>
              <p class="pub-abstract-text">${pub.abstractHTML}</p>
            </div>
          </div>
        </div>
        <div class="featured-footer">
          <div class="pub-action-row">
            <a href="${pub.externalUrl}" target="_blank" rel="noopener" class="action-chip">${escapeHTML(pub.externalLabel)} &nearr;</a>
          </div>
        </div>
      </article>
    `)
    .join('');
}

// Render Research Pillars
function renderPillars() {
  const pillarDefs = [
    {
      id: 'phage',
      title: 'Bacteriophage-based diagnostics',
      desc: 'Engineering bacteriophages with affinity-specific reporter probes to power filter-based and microfluidic lab-on-a-chip diagnostics for single-CFU E. coli detection'
    },
    {
      id: 'rna',
      title: 'Self-Amplifying / Replicon RNA (repRNA) Vaccines, Nanocarriers & Antiviral Therapeutics',
      desc: 'Localizing cationic nanocarriers (LION™) and self-amplifying RNA platforms protecting against H5N1, CCHFV, Sudan virus, SARS-CoV-2, EBV, and SFTSV, alongside RNA-to-RNA antiviral antibody pipelines and structural virology.'
    }
  ];

  const grid = document.getElementById('pillars-grid');
  grid.innerHTML = pillarDefs
    .map(p => {
      const topicPubs = state.publications.filter(pub => pub.topic === p.id);
      const journalCount = topicPubs.filter(pub => pub.type === 'journal').length;
      const patentCount = topicPubs.filter(pub => pub.type === 'patent').length;
      const badgeParts = [
        `${journalCount} ${journalCount === 1 ? 'Publication' : 'Publications'}`
      ];
      if (patentCount > 0) {
        badgeParts.push(`${patentCount} ${patentCount === 1 ? 'Patent' : 'Patents'}`);
      }
      const badgeText = badgeParts.join(' · ');
      const isActive = state.filterTopic === p.id;
      return `
        <button type="button" class="pillar-card ${isActive ? 'active' : ''}" data-pillar="${p.id}">
          <div>
            <div class="pillar-icon-row">
              <span class="pillar-badge">${badgeText}</span>
            </div>
            <h3 class="pillar-title">${escapeHTML(p.title)}</h3>
            <p class="pillar-desc">${escapeHTML(p.desc)}</p>
          </div>
        </button>
      `;
    })
    .join('');

  grid.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', () => {
      const topic = card.dataset.pillar;
      state.filterType = 'all';
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
  const surnames = {};

  state.publications.forEach(pub => {
    pub.authors.forEach(author => {
      if (/Hinkley/i.test(author)) return;
      const surname = extractSurname(author);
      const firstInitial = (author.trim().split(/\s+/)[0] || '')[0] || '';
      const key = `${firstInitial}_${surname}`.toLowerCase().replace(/[^a-z0-9_’'-]/g, '');
      if (!surname || surname.length < 2) return;
      freq[key] = (freq[key] || 0) + 1;
      surnames[key] = surname;
      if (!displayNames[key] || author.length > displayNames[key].length) {
        displayNames[key] = author;
      }
    });
  });

  const sorted = Object.keys(freq)
    .map(k => ({ key: k, name: displayNames[k], surname: surnames[k], count: freq[k] }))
    .filter(item => item.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, 22);

  const cloud = document.getElementById('collaborators-cloud');
  if (!cloud) return;
  cloud.innerHTML = sorted
    .map(c => `
      <button type="button" class="collab-btn" data-author="${escapeHTML(c.surname)}">
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
    state.searchQuery.trim() !== '';

  resetBtn.classList.toggle('hidden', !hasFilters);

  const filterParts = [];
  if (state.filterType !== 'all') filterParts.push(`type: ${state.filterType}`);
  if (state.filterTopic !== 'all') filterParts.push(`topic: ${state.filterTopic}`);
  if (state.searchQuery.trim()) filterParts.push(`query: "${escapeHTML(state.searchQuery.trim())}"`);

  summaryEl.innerHTML = hasFilters
    ? `Showing <strong>${filtered.length}</strong> of ${state.publications.length} works (${filterParts.join(', ')})`
    : '';

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
}

function renderPubCardHTML(pub) {
  const volParts = [];
  if (pub.volume) volParts.push(`Vol. ${pub.volume}`);
  if (pub.number) volParts.push(`No. ${pub.number}`);
  if (pub.pages) volParts.push(`pp. ${pub.pages}`);
  const volString = volParts.length > 0 ? ` &bull; ${escapeHTML(volParts.join(', '))}` : '';
  const showExternalLink = Boolean(pub.externalUrl);

  return `
    <article class="pub-card">
      <div class="pub-main">
        <div class="pub-meta-top">
          ${pub.isFirstAuthor ? `<span class="first-author-badge">First Author</span>` : ''}
          <span class="venue-name">${escapeHTML(pub.venue)}</span>
          <span class="venue-details">(${pub.year})${volString}</span>
        </div>
        <h4 class="pub-title">
          <button type="button" class="pub-title-btn" aria-expanded="false">
            <span>${escapeHTML(pub.title)}</span>
            <svg class="abstract-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </h4>
        <p class="pub-authors">${formatAuthorsHTML(pub.authors)}</p>
        <div class="pub-abstract-drawer" hidden>
          <div class="pub-abstract-inner">
            <span class="pub-abstract-label">Abstract</span>
            <p class="pub-abstract-text">${pub.abstractHTML}</p>
          </div>
        </div>
      </div>
      <div class="pub-actions">
        ${showExternalLink ? `
        <div class="pub-action-row">
          <a href="${pub.externalUrl}" target="_blank" rel="noopener" class="action-chip" title="Read full paper on original publisher website">
            ${escapeHTML(pub.externalLabel)} &nearr;
          </a>
        </div>` : ''}
      </div>
    </article>
  `;
}

function syncFilterUI() {
  const isFirstAuthor = state.filterType === 'first-author';
  document.querySelectorAll('#topic-filters .topic-chip[data-topic]').forEach(btn => {
    btn.classList.toggle('active', !isFirstAuthor && btn.dataset.topic === state.filterTopic);
  });
  const firstAuthorBtn = document.getElementById('first-author-filter-btn');
  if (firstAuthorBtn) {
    firstAuthorBtn.classList.toggle('active', isFirstAuthor);
  }
}

function resetAllFilters() {
  state.filterType = 'all';
  state.filterTopic = 'all';
  state.searchQuery = '';
  document.getElementById('search-input').value = '';
  syncFilterUI();
  renderPillars();
  renderPublications();
}

// Initialize App
function initPortfolio() {
  const rawRecords = parseCSV(FALLBACK_CSV);
  state.publications = rawRecords.map(enrichRecord);

  renderCitationsChartAndCounts();
  renderFeatured();
  renderPillars();
  renderPublications();

  // Event Listeners: Topic Filters
  document.querySelectorAll('#topic-filters .topic-chip[data-topic]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filterType = 'all';
      state.filterTopic = btn.dataset.topic;
      syncFilterUI();
      renderPillars();
      renderPublications();
    });
  });

  // Event Listener: First Author Filter Pill
  const firstAuthorBtn = document.getElementById('first-author-filter-btn');
  if (firstAuthorBtn) {
    firstAuthorBtn.addEventListener('click', () => {
      const nextIsFirstAuthor = state.filterType !== 'first-author';
      state.filterType = nextIsFirstAuthor ? 'first-author' : 'all';
      state.filterTopic = 'all';
      syncFilterUI();
      renderPillars();
      renderPublications();
    });
  }

  // Search Input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    renderPublications();
  });

  // Delegated click listener for publication title accordion drawers
  document.addEventListener('click', e => {
    const btn = e.target.closest('.pub-title-btn');
    if (!btn) return;
    const card = btn.closest('.pub-card, .featured-card');
    if (!card) return;
    const drawer = card.querySelector('.pub-abstract-drawer');
    if (!drawer) return;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
    drawer.hidden = isExpanded;
    card.classList.toggle('is-expanded', !isExpanded);
  });

  // Keyboard shortcut '/' to focus search
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
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

  // Always display in light mode
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.removeItem('tch_theme');
}

document.addEventListener('DOMContentLoaded', initPortfolio);
