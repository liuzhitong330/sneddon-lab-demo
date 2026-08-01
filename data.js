window.SNEDDON_LAB_DATA = {
  stages: {
    e12: {
      cells: "4,631",
      marker: "0%",
      note: "At E12.5, the v1 dataset captured the earliest stage in the timecourse, before the major secondary transition. It provides the baseline for tracking epithelial and mesenchymal diversification."
    },
    e14: {
      cells: "9,028",
      marker: "50%",
      note: "At E14.5, two independent batches produced the largest snapshot in the v1 timecourse. The paper resolved 19 distinct populations in this stage, including a previously undescribed Fev-high endocrine progenitor state."
    },
    e17: {
      cells: "4,635",
      marker: "100%",
      note: "At E17.5, the later snapshot captured continuing maturation and an increasing proportion of proliferating endocrine cells as endocrine mass expanded."
    }
  },
  states: {
    ngn3: {
      kicker: "Early progenitor",
      main: "Ngn3-positive cells sit upstream of the Fev-expressing interval and retain cell-cycle and Notch-related programs.",
      note: "In the Fev-lineage scRNA-seq experiment, eGFP reads appeared across endocrine populations except the Ngn3-positive population, supporting the timing of Fev onset after Ngn3."
    },
    fev: {
      kicker: "Intermediate state",
      main: "Fev-high cells express Pax4, Chga/b, and Neurod1, but not mature Ins1 or Gcg and not the earlier marker Ngn3.",
      note: "Pseudotime placed Fev+/Pax4+ and Fev-high/Chgb+ cells between Ngn3+ progenitors and alpha or beta cells. In lineage-traced E14.5 pancreas, about 20% of Ngn3-lineage cells were Fev-high."
    },
    hormone: {
      kicker: "Differentiated state",
      main: "Hormone-producing alpha and beta cells occupy the terminal branches of the reconstructed endocrine trajectory.",
      note: "Fev persists at lower levels in a subset of hormone-positive cells, while lineage tracing shows that most alpha, beta, delta, and gamma cells previously expressed Fev."
    }
  },
  lineages: {
    beta: { value: 100, display: "100%", label: "of Ins1+ beta cells were lineage-labeled", caption: "46 cells across 4 pancreata. Complete labeling supports passage through a Fev-expressing state before beta-cell differentiation." },
    alpha: { value: 100, display: "100%", label: "of Gcg+ alpha cells were lineage-labeled", caption: "103 cells across 4 pancreata. Complete labeling supports passage through a Fev-expressing state before alpha-cell differentiation." },
    delta: { value: 100, display: "100%", label: "of Sst+ delta cells were lineage-labeled", caption: "6 cells across 2 pancreata. The sample is small, but every observed delta cell was Fev-lineage-labeled." },
    gamma: { value: 90.1, display: "90.1%", label: "of Ppy+ gamma cells were lineage-labeled", caption: "71 cells across 8 pancreata. Most, but not all, gamma cells were traced to a Fev-expressing state." },
    epsilon: { value: 23.2, display: "23.2%", label: "of Ghrl/Gcg+ epsilon cells were lineage-labeled", caption: "26 cells across 2 pancreata. Partial labeling suggests that epsilon cells do not uniformly traverse the same Fev-expressing route." }
  },
  branches: {
    beta: {
      primaryValue: "95.8%",
      primaryLabel: "of beta cells expressed Gng12",
      secondaryValue: "30.5%",
      secondaryLabel: "of beta cells expressed Peg10",
      note: "Gng12 was already detectable in the Fev-high interval and became strongly enriched in beta cells, supporting it as a candidate signal of beta-directed allocation after Fev onset."
    },
    alpha: {
      primaryValue: "100%",
      primaryLabel: "of alpha cells expressed Peg10",
      secondaryValue: "5.4%",
      secondaryLabel: "of alpha cells expressed Gng12",
      note: "Peg10 was detectable in the Fev-high interval and present in every measured alpha cell, while Gng12 was rare, supporting asymmetric branch-associated programs rather than a generic maturation signal."
    }
  }
};
