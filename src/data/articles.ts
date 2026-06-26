export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
};

export const articles: Article[] = [
  {
    slug: "phytase-unlocks-phosphorus",
    title: "How Phytase Unlocks Phosphorus in Modern Poultry Diets",
    excerpt:
      "Phytase has quietly become the most-used feed enzyme on the planet. Here's why nutritionists keep doubling down on it.",
    content:
      "Phytate-bound phosphorus is the single largest source of nutrient waste in cereal-based poultry diets. By cleaving phytate, phytase liberates phosphorus, calcium, amino acids, and energy — turning what used to be excreted into measurable growth.\n\nModern E. coli–derived phytases work at low pH, survive pelleting, and deliver matrix values that nutritionists now treat as standard. The result: lower inorganic phosphate inclusion, reduced manure phosphorus, and a meaningful drop in feed cost per kilo of gain.\n\nThe next frontier is super-dosing — pushing inclusion well above the classic 500 FTU/kg to chase extra-phosphoric effects on inositol release. Field trials across broiler and layer operations consistently show improved feed conversion when the rest of the diet is rebalanced to capture the upside.",
    author: "Dr. Lena Hoffmann",
    authorBio: "Animal nutritionist focused on monogastric enzyme strategy.",
    date: "Jun 18, 2026",
    readTime: "7 min read",
    category: "Poultry",
    cover:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "nsp-enzymes-swine",
    title: "NSP Enzymes in Swine: Beyond Viscosity Reduction",
    excerpt:
      "Xylanases and β-glucanases do more than thin out gut contents. New evidence points to a prebiotic effect that reshapes the microbiome.",
    content:
      "For two decades, NSP enzymes were sold on a single story: cut digesta viscosity, improve nutrient absorption. That story is incomplete.\n\nXylo-oligosaccharides released by xylanase action feed beneficial Bifidobacterium and Lactobacillus populations in the hindgut. The shift in short-chain fatty acid profile — particularly butyrate — strengthens gut barrier function and dampens inflammatory markers.\n\nFor producers facing antibiotic-reduction targets, that microbiome lever may be worth as much as the original digestibility lift. Pairing xylanase with a thermostable β-glucanase remains the most reliable combination across wheat-barley diets in Northern Europe.",
    author: "Marcus Pereira",
    authorBio: "Swine production consultant, 18 years across Brazil and the EU.",
    date: "Jun 11, 2026",
    readTime: "9 min read",
    category: "Swine",
    cover:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "protease-amino-acid-economics",
    title: "The Quiet Economics of Exogenous Protease",
    excerpt:
      "When soybean meal is expensive, a well-applied protease pays for itself before the first weighing.",
    content:
      "Exogenous proteases target the anti-nutritional protein fractions — trypsin inhibitors, lectins, storage globulins — that even good-quality soybean meal carries into the gut.\n\nThe matrix value depends on the source: a serine protease behaves differently from a metalloprotease, and substrate specificity matters more than the headline activity number on the label. Trials run against a positive control with full amino acid coverage routinely show 2–4% feed cost savings without performance loss.\n\nThe operational tip nobody tells you: heat stability data from the supplier is meaningful only if it matches your conditioner profile. Ask for in-pellet recovery data, not just lab assays.",
    author: "Dr. Ananya Rao",
    authorBio: "Feed enzyme R&D lead at an independent nutrition lab.",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Economics",
    cover:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "aquafeed-enzyme-frontier",
    title: "Aquafeed: The Next Frontier for Enzyme Technology",
    excerpt:
      "Plant proteins are crowding out fishmeal. Enzymes are how aquaculture diets keep up without sacrificing growth.",
    content:
      "As fishmeal inclusion drops below 10% in many salmon and shrimp diets, plant-protein anti-nutritional factors become the limiting concern. Phytate, NSPs, and protease inhibitors all carry over from terrestrial ingredients.\n\nLow-temperature-active phytases and cold-adapted proteases — engineered for the cooler digestive tracts of salmonids — are showing strong response in commercial trials. Shrimp diets, with their short transit times, demand fast-acting blends and benefit disproportionately from pre-treatment strategies.\n\nThe next five years will almost certainly bring species-specific enzyme cocktails to market. Aquaculture is no longer borrowing poultry technology.",
    author: "Sofia Lindqvist",
    authorBio: "Aquaculture nutritionist based in Bergen.",
    date: "May 14, 2026",
    readTime: "8 min read",
    category: "Aquaculture",
    cover:
      "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "thermostability-pelleting",
    title: "Thermostability Is the Only Spec That Matters at the Mill",
    excerpt:
      "An enzyme that doesn't survive your conditioner is just expensive dust. A practical guide to reading recovery data.",
    content:
      "Pelleting conditions vary wildly — 70 °C for 30 seconds in one mill, 90 °C for 90 seconds in another. Marketing leaflets quoting \"thermostable up to 95 °C\" tell you almost nothing without context.\n\nAsk suppliers for recovery curves at your specific conditioner temperature and retention time. Better: request a third-party validation using the AOAC-approved method. Liquid post-pellet application sidesteps the issue entirely and is worth the capex on high-throughput broiler mills.\n\nThe enzymes that win in 2026 are the ones that pair credible thermostability data with a flexible application format.",
    author: "Tomás Vidal",
    authorBio: "Feed mill operations specialist.",
    date: "Apr 30, 2026",
    readTime: "5 min read",
    category: "Manufacturing",
    cover:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "sustainability-enzyme-story",
    title: "Enzymes Are the Quietest Sustainability Lever in Animal Protein",
    excerpt:
      "Less manure phosphorus, less imported soy, less ammonia. The carbon math on feed enzymes is unusually clean.",
    content:
      "Lifecycle analyses across broiler, layer, and swine systems consistently put enzyme-driven feed cost savings alongside measurable cuts in nitrogen and phosphorus excretion. The mechanism is simple: more nutrients absorbed, fewer nutrients excreted.\n\nFor producers with sustainability-linked financing or scope-3 reduction targets, enzymes offer a rare combination — they pay for themselves and they reduce the environmental footprint of every kilo of meat, milk, or egg produced.\n\nThe story is easy to tell. The harder part is convincing procurement that the cheapest enzyme on the spec sheet is rarely the cheapest enzyme in the finished feed.",
    author: "Dr. Lena Hoffmann",
    authorBio: "Animal nutritionist focused on monogastric enzyme strategy.",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    category: "Sustainability",
    cover:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}