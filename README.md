# Author

Thanh Truc – AI Team

---

# Project Description (Simulation)

This is a **simulated team project** designed to practice Git workflows, branching strategies, and collaboration processes.

The team builds a simple **HTML web page** to display a collection of images. The focus of this project is not only the final result, but also the **Git strategy and collaboration flow** used during development.

---

# Project Scope

The team is responsible for building a static website with the following components:

- An HTML page to display the image gallery
- CSS files for styling the page
- JavaScript files for basic interactions (if any)
- A collection of image data used in the gallery

---

# Development Strategy

- **Maintenance strategy:** Shared maintenance
- **Repository architecture:** Monolith

---

# Branching Strategy

The project uses an **Environment Branching** model with three main branches:

- `main` – Production branch
- `dev` – Development branch
- `stag` – Staging branch

Feature development is done using short-lived feature branches created from `dev`.

---

# Development Process

## 1. Environment Setup

- Create the `stag` branch from `main`
- Create the `dev` branch from `stag`

---

## 2. Feature Development

### Feature: CSS

- Create branch `feature/css` from `dev`
- Implement CSS files for the website

**Simulated incident:**

- A JavaScript file was mistakenly created and committed on `feature/css`

- Solution:
  - Use `git cherry-pick` to move the JS commit to `feature/js`
  - Remove the mistaken commit from `feature/css`

- Merge `feature/css` into `dev`

---

### Feature: JavaScript

- Create branch `feature/js` from `dev`
- Apply the cherry-picked JavaScript commit
- Continue JavaScript development if needed
- Merge `feature/js` into `dev`

---

### Feature: Data (Images)

- Create branch `feature/data` from `dev`
- Add image assets to the project

Before pushing:

- Pull the latest changes from `dev`
- Resolve conflicts if any
- Commit and push updates to `feature/data`
- Merge into `dev`

---

### Feature: Home Page Content

- Create branch `feature/home` from `dev`
- Build and update the home page content

Before pushing:

- Pull the latest changes from `dev`
- Resolve conflicts if any
- Commit and push updates to `feature/home`
- Merge into `dev`

---

## 3. README Update (Simulated Scenario)

**Situation:**

- The project README needs to be updated and pushed to `dev`
- The goal is to keep a clean and readable commit history

**Solution:**

- Use `git rebase` to apply the README update cleanly without introducing unnecessary merge commits

---

## 4. Promotion to Staging and Production

### Merge into Staging (`stag`)

- Once all features are tested and stable on `dev`, merge `dev` into `stag`
- The `stag` branch represents the pre-production (staging) environment

Typical flow:

- Checkout `stag`
- Pull the latest changes
- Merge `dev` into `stag`

---

### Merge into Production (`main`) and Tagging

- After validation on `stag`, merge `stag` into `main`
- The merge commit on `main` represents a production release
- Create a Git tag on this merge commit to mark the release version

Tagging helps:

- Identify production releases
- Roll back to a specific version if needed
- Maintain a clear release history

Example practice:

- Merge `stag` into `main`
- Create an annotated tag (`v1.0.0`) for the release

---

# Key Git Concepts Practiced

- Environment branching (main, stag, dev) – Separate development, staging, and production environments
- Feature branches – Isolate feature development from main workflows
- `git cherry-pick` – Move specific commits between branches
- Conflict resolution during pulls – Handle and resolve merge conflicts
- `git rebase` - Keep commit history clean and linear
- `git tag` – Mark release versions and important milestones
- `git branch` – Create, manage, and delete branches
- `git merge` – Integrate changes between branches
- Pull request – Propose changes and control merges
- Code review – Review and validate code before merging

---

# Purpose of This Project

This project is intended for **training and learning purposes**, helping team members understand:

- Real-world Git workflows
- Common mistakes and how to recover from them
- Best practices for clean and maintainable Git history

---

✅ This README reflects a realistic team collaboration scenario and common Git operations used in professional software development.
