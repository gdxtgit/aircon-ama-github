# aircon-ama.com clone (static snapshot)

This directory is a static snapshot of `https://aircon-ama.com/` for GitHub-based edits.

## Included paths
- `/`
- `/trade`
- `/rules`
- `/contact`
- `/course`
- `/_nuxt/*` assets required by the pages above
- `storage.googleapis.com/*` assets referenced by the site

## Local preview
```bash
cd aircon-ama-github
python3 -m http.server 8080
# open http://localhost:8080
```

## Push to GitHub
```bash
cd aircon-ama-github
git init
git add .
git commit -m "Initial snapshot from aircon-ama.com"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Notes
- This is a snapshot; dynamic STUDIO backend behavior may not be fully reproducible.
- If you need a fresh snapshot, run `node /Users/kn/Library/CloudStorage/GoogleDrive-kazutomo824@gmail.com/マイドライブ/1_Work/codex/scripts/mirror-site.mjs` from the workspace root.
