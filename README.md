# Team Portfolio Website — GitHub Collaboration Lab

This repository is the starter project for the University of Kelaniya Git & GitHub workshop. Your team will collaboratively build a responsive portfolio website while demonstrating a disciplined Git workflow.

## Team structure

Work in a team of four. Each member owns a specific part of the project:

| Member | Responsibility | Required branch | File ownership |
|---|---|---|---|
| Member 1 | HTML content | `feature/html-content` | `index.html` — `<main>` content only |
| Member 2 | CSS styling | `feature/css-styling` | `css/style.css` |
| Member 3 | JavaScript interactions | `feature/javascript` | `js/script.js` |
| Member 4 | Header and footer | `feature/header-footer` | Header/footer in `index.html`; `css/header-footer.css` |

**Important:** Do not commit directly to `main`. Do not edit another member's assigned files/sections without coordinating with the team. The deliberate title-conflict exercise in Task 8 is the only planned exception to the normal file-boundary rule.

## Website requirements

Build a polished, responsive team portfolio website with:

1. A sticky header with working navigation links and a dark-mode toggle button.
2. A hero section with a typing-text effect.
3. An About section introducing the team/project.
4. Team-member cards with each member's name, role, and short introduction.
5. A contact form with client-side validation and clear success/error feedback.
6. A footer with relevant team/project information and a dynamically updated year.

Use semantic HTML, accessible labels, meaningful class names, responsive CSS, and maintainable JavaScript. Do not use real personal contact details in the public demo.

## Getting started

1. One team member creates the shared repository from this template (or the organizer provisions it).
2. Add all four team members as collaborators with Write access.
3. Clone the repository and create your own assigned branch from the latest `main`.
4. Work only in your assigned file/section.
5. Make at least **two meaningful commits** on your branch.
6. Push your branch and open a pull request (PR) targeting `main`.
7. Include a useful PR title and description explaining the change and how it was tested.
8. Ask another team member to review the PR. The reviewer must leave at least one useful line-level comment and approve the PR.
9. Merge the PR after approval, then sync your local `main` before starting the next task.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the detailed workflow and Task 8 conflict exercise.

## Project structure

```text
.
├── index.html
├── css/
│   ├── style.css
│   └── header-footer.css
└── js/
    └── script.js
```

## Definition of done

- All six website requirements work and are responsive.
- Each member has a personal feature branch and at least two meaningful commits.
- Each member has opened a PR with an appropriate description.
- Each PR has a teammate's review, at least one line comment, and approval.
- Changes are merged into `main` and the team has synchronized its local branches.
- Task 8 conflict is resolved and documented.
- The team can show the final commit graph using `git log --oneline --graph --all`.

See the organization’s `workshop-documentation` repository for the student guide and submission instructions.
