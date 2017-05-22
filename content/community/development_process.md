---
bref: ""
date: 2017-05-19T15:02:30+01:00
description: ""
draft: false
menu:
  sidenav:
    parent: Community
    weight: -100
sidebar: sidenav
title: "Development process"
weight: 20
---

<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This is a work in progress... and may always be... Please check back regularly.
</div>

The Syndesis maintainers are always looking for the optimum way to develop Syndesis. We aim to have a development process that enables fast delivery across all features and components, taking into account priorities from the community. Speed of development has to be balanced against total community ownership, knowledge sharing, and stability of the software. That is what this process aims to bring. We welcome feedback from anyone interested to help us streamline further.

## Guidelines

### Discuss new feature in an issue before development

In order to get the best possible experience when adding a feature, it is best for us to gather information from various people with different skillsets (e.g. UX, UI, backend, business users, operations, etc.). This gives us the chance to discuss up-front, not waste development time, and maximises the chance for the best a feature can be. This period should be concise and timely - [yak shaving](http://catb.org/jargon/html/Y/yak-shaving.html) and [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding) should be openly called out.

### Features should be proposed as documentation in a pull request before development

As an alternative to or extension of the [guideline above]({{< relref "#discuss-new-feature-in-an-issue-before-development" >}}), we need to keep the Syndesis documentation up to date. To ensure that we have up to date documentation for a feature and to gain agreement that the approach is correct, we require a feature proposed in a PR that includes relevant design documentation. This should of course be kept up to date when changes are made to features - we know this is hard to do, and it is up to the Syndesis maintainers to guide this during PR reviews.

### Feature development should have relevant engineers assigned from the start

Features normally span more than one component. Having relevant people assigned to an issue from the start will hopefully gain more complete ownership from beginning to end. As an example, for a feature that adds new pages to the UI, it is expected that UX, UI, backend, QE, and docs would all be involved. Let's call these "feature miniteams". Miniteams are adhoc teams and people can be expected to be a member of multiple miniteams at one time.

### Commit messages should follow the Conventional Commits standardized commit message format

This allows for automated changelog generation. Recommended tooling includes [Commitizen](https://github.com/commitizen/cz-cli) to make get the format correct rather than hand crafting. Commits should be linted in future in CI but aren't just yet... coming soon! See [Conventional Commits](http://conventionalcommits.org/) for details on the commit format.

### Every pull request must be linked to an issue

This allows discussion on the particular feature or bug in the issue before necessarily any coding takes place. This does not mean that there should only be one pull request for an issue.
### A pull request that closes an issue should be properly commented

If a pull request closes the issue, then it should properly be commented using the [GitHub keywords for closing issues](https://help.github.com/articles/closing-issues-via-commit-messages/)  (e.g. `fixes #53`) to ensure the issue is automatically closed when the PR is merged.

### A pull request that is related to an issue or should be commented properly

Using the keywords set by [waffle.io](https://waffle.io) (e.g. `connects to #53`) allows us to link PRs to issues without necessarily closing the issue when the PR is merged. This works great if an issue requires changes to multiple repositories, with no single commit fully closing the issue, or if an issue requires staged development, one piece at a time contributed by various PRs.

### No pull request should be merged before review approval

Pretty self-explanatory: no self-merged PRs without prior approval from maintainers. Reviews are everyone's responsibility and should focus on tests and documentation as much as implementation.
