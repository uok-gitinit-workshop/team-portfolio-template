# Team contribution and Git workflow

## Rules

- Never commit directly to `main`.
- Create your assigned branch from the latest `origin/main`.
- Keep each PR focused on your assigned files/section.
- Make at least two meaningful commits; do not create empty or trivial commits just to satisfy a count.
- Do not merge your own PR without the required teammate review and approval.
- Resolve review feedback and keep the PR description up to date.

## Branches and ownership

| Member | Branch | Allowed work |
|---|---|---|
| 1 | `feature/html-content` | Main content inside `<main>` in `index.html` |
| 2 | `feature/css-styling` | `css/style.css` |
| 3 | `feature/javascript` | `js/script.js` |
| 4 | `feature/header-footer` | Header/footer sections in `index.html`; `css/header-footer.css` |

Member 4's normal scope is the header/footer markup and stylesheet. The title conflict in Task 8 is a specifically instructed collaboration exercise.

## Standard workflow

Replace `YOUR-BRANCH` with your assigned branch name.

```bash
git clone https://github.com/ORG/TEAM-REPOSITORY.git
cd TEAM-REPOSITORY
git switch main
git pull origin main
git switch -c YOUR-BRANCH
```

Make your changes and commit them in meaningful steps:

```bash
git status
git add <your-assigned-files>
git commit -m "Add semantic team portfolio content"
git add <your-assigned-files>
git commit -m "Improve accessibility of portfolio section"
git push -u origin YOUR-BRANCH
```

Open a PR on GitHub:
- Base: `main`
- Compare: your assigned branch
- Explain what changed, which requirement it addresses, and how you tested it.
- Keep the changed-file list within your ownership boundary.

A teammate reviews the PR, leaves at least one useful line-level comment, and submits an approval. The author responds to feedback. Once the PR is approved, merge it using the repository's allowed merge method.

After merging:

```bash
git switch main
git pull origin main
git branch -d YOUR-BRANCH
```

If you need to continue working, create a fresh branch from the updated `main`. Do not reuse an outdated branch as if it already contains the latest integration.

## Task 8 — deliberate merge-conflict exercise

This task intentionally creates competing edits to the same `<title>` line in `index.html`. Coordinate the timing with your team.

### Step 1 — Member 1 creates the first title change

Create branch `fix/title-member1` from the current `main`, change the document title to:

```html
<title>Team Portfolio | Group A</title>
```

Commit and push the change, then open a PR to `main`. Get a teammate review and approval, then merge this PR first.

### Step 2 — Member 4 creates the competing title change

Before Member 1's PR is merged (or from the same original base), Member 4 creates `fix/title-member4` and changes the same title line to:

```html
<title>Team Portfolio | Full-Stack Lab</title>
```

Commit and push the branch. Open a PR, but do not merge it yet.

### Step 3 — Member 4 integrates the updated main

After Member 1's PR has merged, Member 4 fetches the latest changes and merges `main` into the conflict branch:

```bash
git fetch origin
git switch fix/title-member4
git merge origin/main
```

Git should report a conflict in `index.html`. Open the file, inspect the conflict markers, and resolve them so exactly one valid `<title>` element remains. For this exercise, keep:

```html
<title>Team Portfolio | Full-Stack Lab</title>
```

Remove all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and ensure the document contains exactly one title element.

Complete the merge resolution:

```bash
git add index.html
git commit -m "Resolve title conflict with main"
git push origin fix/title-member4
```

Update the PR, explain the conflict and your resolution, obtain the required teammate review/approval, and merge it.

### Step 4 — verify and capture evidence

- Confirm the final `index.html` contains exactly one title element with the expected text.
- Confirm no conflict markers remain.
- Show the second PR and its merge-resolution commit.
- Capture the terminal output of `git log --oneline --graph --all`.

Git history proves that a merge conflict was resolved in the repository history; it does not independently prove which editor was used. Your PR explanation and screenshots provide the exercise evidence.
