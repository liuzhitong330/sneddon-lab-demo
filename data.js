window.SNEDDON_LAB_DATA = {
  stages: {
    e12: {
      cells: "4,631",
      note: "E12.5 · 4,631 v1 transcriptomes. This earliest snapshot precedes the major secondary transition and anchors the developmental timecourse."
    },
    e14: {
      cells: "9,028",
      note: "E14.5 · 9,028 v1 transcriptomes from two independent batches. Nineteen populations were resolved at this active stage of expansion and diversification."
    },
    e17: {
      cells: "4,635",
      note: "E17.5 · 4,635 v1 transcriptomes. The later pancreas contained a growing fraction of proliferating endocrine cells and more mature beta-cell states."
    }
  },
  states: {
    ngn3: {
      name: "NGN3+ progenitor",
      markers: "NGN3 · cell-cycle and Notch programs",
      readout: "NGN3-positive cells sit upstream of FEV onset. In Fev-lineage scRNA-seq, eGFP reads appeared in every endocrine population except the NGN3-positive population.",
      interpretation: "The missing eGFP signal in NGN3-positive cells supports the temporal ordering: FEV turns on after the transient NGN3 progenitor state."
    },
    fev_pax4: {
      name: "FEV+ / PAX4+ early bridge",
      markers: "FEV · PAX4 · RUNX1T1 · lower NGN3",
      readout: "Pseudotime placed the FEV+/PAX4+ population directly after NGN3-positive progenitors and before the later FEV-high/CHGB-positive state.",
      interpretation: "This early bridge preserves a trace of the NGN3 program while acquiring FEV and PAX4, resolving what would otherwise look like a single abrupt transition."
    },
    fev_chgb: {
      name: "FEV-high / CHGB+ late bridge",
      markers: "FEV · CHGA/B · NEUROD1 · no INS1 or GCG",
      readout: "FEV-high cells express endocrine-lineage genes but not mature hormone markers. About 20% of Ngn3-lineage-traced cells at E14.5 occupied this FEV-high, NGN3-negative, ISL1-negative state.",
      interpretation: "The selected FEV-high state expresses endocrine-lineage genes without mature hormone markers, locating it after NGN3 and before terminal alpha or beta identity."
    },
    hormone: {
      name: "Hormone-positive outcomes",
      markers: "INS1 (beta) · GCG (alpha)",
      readout: "The reconstructed trajectory split after the FEV interval into branches terminating in differentiated INS1-high beta cells or GCG-high alpha cells.",
      interpretation: "Terminal hormone expression appears after the shared FEV interval; branch-specific programs can therefore be examined before the mature identity is fully visible."
    }
  },
  lineages: {
    beta: { name: "Beta", value: 100, display: "100%", marker: "INS1+", sample: "46 cells across 4 pancreata", note: "Every measured beta cell was Fev-lineage labeled." },
    alpha: { name: "Alpha", value: 100, display: "100%", marker: "GCG+", sample: "103 cells across 4 pancreata", note: "Every measured alpha cell was Fev-lineage labeled." },
    delta: { name: "Delta", value: 100, display: "100%", marker: "SST+", sample: "6 cells across 2 pancreata", note: "All observed delta cells were labeled, although the sample was small." },
    gamma: { name: "Gamma", value: 90.1, display: "90.1%", marker: "PPY+", sample: "71 cells across 8 pancreata", note: "Most, but not all, gamma cells passed through a FEV-expressing state." },
    epsilon: { name: "Epsilon", value: 23.2, display: "23.2%", marker: "GHRL/GCG+", sample: "26 cells across 2 pancreata", note: "Partial labeling suggests a distinct or mixed developmental route for epsilon cells." }
  },
  branches: {
    beta: {
      primary: { value: "95.8%", label: "beta cells expressed GNG12", sample: "n=46 cells, 6 pancreata" },
      secondary: { value: "30.5%", label: "beta cells expressed PEG10", sample: "n=71 cells, 7 pancreata" },
      interpretation: "GNG12 was detectable in the FEV-high interval and strongly enriched in beta cells, making it a candidate early signal of beta-directed allocation rather than merely a mature hormone marker."
    },
    alpha: {
      primary: { value: "100%", label: "alpha cells expressed PEG10", sample: "n=31 cells, 6 pancreata" },
      secondary: { value: "5.4%", label: "alpha cells expressed GNG12", sample: "n=32 cells, 4 pancreata" },
      interpretation: "PEG10 was already visible in the FEV-high interval and present in every measured alpha cell, while GNG12 was rare—an asymmetric pattern consistent with early branch allocation."
    }
  }
};
