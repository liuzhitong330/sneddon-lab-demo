(function () {
  "use strict";

  const data = window.SNEDDON_LAB_DATA;
  if (!data) return;

  function setSelected(buttons, activeKey, dataKey) {
    buttons.forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset[dataKey] === activeKey));
    });
  }

  const stageButtons = Array.from(document.querySelectorAll("[data-stage]"));
  function renderStage(key) {
    const stage = data.stages[key];
    if (!stage) return;
    setSelected(stageButtons, key, "stage");
    document.getElementById("stage-context").innerHTML = `<strong>${stage.cells} cells.</strong> ${stage.note.split(". ").slice(1).join(". ")}`;
  }
  stageButtons.forEach((button) => button.addEventListener("click", () => renderStage(button.dataset.stage)));

  const stateButtons = Array.from(document.querySelectorAll("[data-state]"));
  function renderState(key) {
    const state = data.states[key];
    if (!state) return;
    setSelected(stateButtons, key, "state");
    document.getElementById("state-readout").innerHTML = `<strong>${state.name}</strong><br>${state.markers}<br>${state.readout}`;
    document.getElementById("state-interpretation").textContent = state.interpretation;
  }
  stateButtons.forEach((button) => button.addEventListener("click", () => renderState(button.dataset.state)));

  const lineageList = document.getElementById("lineage-list");
  const lineageReadout = document.getElementById("lineage-readout");
  const lineageButtons = [];

  function renderLineage(key) {
    const lineage = data.lineages[key];
    if (!lineage) return;
    lineageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lineage === key)));
    lineageReadout.innerHTML = `<strong>${lineage.display} ${lineage.marker} ${lineage.name.toLowerCase()} cells were lineage labeled.</strong><br>${lineage.sample}. ${lineage.note}`;
  }

  Object.entries(data.lineages).forEach(([key, lineage]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lineage-row";
    button.dataset.lineage = key;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `<span>${lineage.name}</span><span class="lineage-track"><span class="lineage-fill" style="width:${lineage.value}%"></span></span><span class="lineage-value">${lineage.display}</span>`;
    button.addEventListener("click", () => renderLineage(key));
    lineageButtons.push(button);
    lineageList.appendChild(button);
  });

  const branchButtons = Array.from(document.querySelectorAll("[data-branch]"));
  function renderBranch(key) {
    const branch = data.branches[key];
    if (!branch) return;
    setSelected(branchButtons, key, "branch");
    document.getElementById("branch-grid").innerHTML = `
      <div class="branch-stat"><span>${branch.primary.value}</span><small>${branch.primary.label}<br>${branch.primary.sample}</small></div>
      <div class="branch-stat secondary"><span>${branch.secondary.value}</span><small>${branch.secondary.label}<br>${branch.secondary.sample}</small></div>`;
    document.getElementById("branch-interpretation").textContent = branch.interpretation;
  }
  branchButtons.forEach((button) => button.addEventListener("click", () => renderBranch(button.dataset.branch)));

  renderStage("e14");
  renderState("fev_chgb");
  renderLineage("beta");
  renderBranch("beta");
}());
