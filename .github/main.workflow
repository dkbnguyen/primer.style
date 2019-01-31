workflow "Primer.style Actions" {
  on = "push"
  resolves = [
    "lint",
    "deploy",
  ]
}

action "npm install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "ci"
}

action "lint" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = "npm install"
  args = "run lint"
}

action "build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = "npm install"
  args = "run build"
}

action "deploy" {
  uses = "primer/deploy@c01f9f1"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
  needs = "build"
}
