(function () {
  "use strict";

  const data = window.SNEDDON_LAB_DATA;
  if (!data) return;

  function select(buttons, active, key) {
    buttons.forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset[key] === active));
    });
  }

  const stageButtons = Array.from(document.querySelectorAll("[data-stage]"));
  function selectStage(key) {
    const stage = data.stages[key];
    select(stageButtons, key, "stage");
    document.getElementById("stage-cells").textContent = stage.cells;
    document.getElementById("stage-note").textContent = stage.note;
    document.getElementById("time-marker").style.left = stage.marker;
  }
  stageButtons.forEach((button) => button.addEventListener("click", () => selectStage(button.dataset.stage)));

  const stateButtons = Array.from(document.querySelectorAll("[data-state]"));
  function selectState(key) {
    const state = data.states[key];
    select(stateButtons, key, "state");
    document.getElementById("state-kicker").textContent = state.kicker;
    document.getElementById("state-main").textContent = state.main;
    document.getElementById("state-note").textContent = state.note;
  }
  stateButtons.forEach((button) => button.addEventListener("click", () => selectState(button.dataset.state)));

  const lineageButtons = Array.from(document.querySelectorAll("[data-lineage]"));
  function selectLineage(key) {
    const lineage = data.lineages[key];
    select(lineageButtons, key, "lineage");
    document.getElementById("trace-value").textContent = lineage.display;
    document.getElementById("trace-label").textContent = lineage.label;
    document.getElementById("trace-bar").style.width = lineage.value + "%";
    document.getElementById("trace-caption").textContent = lineage.caption;
  }
  lineageButtons.forEach((button) => button.addEventListener("click", () => selectLineage(button.dataset.lineage)));

  const branchButtons = Array.from(document.querySelectorAll("[data-branch]"));
  function selectBranch(key) {
    const branch = data.branches[key];
    select(branchButtons, key, "branch");
    document.getElementById("branch-primary-value").textContent = branch.primaryValue;
    document.getElementById("branch-primary-label").textContent = branch.primaryLabel;
    document.getElementById("branch-secondary-value").textContent = branch.secondaryValue;
    document.getElementById("branch-secondary-label").textContent = branch.secondaryLabel;
    document.getElementById("branch-note").textContent = branch.note;
  }
  branchButtons.forEach((button) => button.addEventListener("click", () => selectBranch(button.dataset.branch)));

  selectStage("e14");
  selectState("fev");
  selectLineage("beta");
  selectBranch("beta");
}());
