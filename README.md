# Appwrite Sites Test Project

This is a simple test project to troubleshoot Appwrite Sites preview build issues where builds stay in "Waiting" status for pull requests.

## Issue Description

When opening a pull request, it triggers a build in Appwrite Sites with a comment containing the preview link. However, these builds never start and remain in "Waiting" status, while builds on the main/production branch work correctly.

## Testing Steps

1. **Connect Repository to Appwrite**
   - Go to your Appwrite Console
   - Navigate to "Sites" section
   - Connect this repository

2. **Configure Build Settings**
   - Set build command: (leave empty for static HTML)
   - Set output directory: `./` (or leave empty)
   - Set install command: (leave empty for static HTML)

3. **Enable Preview Deployments**
   - In Appwrite Console > Sites > Settings
   - Enable "Deploy Previews"
   - Set branch pattern (e.g., `*` for all branches or specific patterns)

4. **Test the Issue**
   - Create a new branch
   - Make a small change to `index.html`
   - Open a pull request
   - Check if preview build starts or stays in "Waiting"

## Common Solutions for "Waiting" Status

### 1. Check Build Configuration
```bash
# Ensure your build settings are correct:
# - Install Command: (empty for static sites)
# - Build Command: (empty for static sites)  
# - Output Directory: ./ or dist/ depending on your setup
```

### 2. Verify Environment Variables
- Check if preview builds have access to necessary environment variables
- Some variables might be restricted to production only

### 3. Build Resource Limits
- Preview builds might have different resource limits
- Check if your build requires more resources than allocated

### 4. Branch Protection Rules
- Ensure branch protection rules don't block the build process
- Check GitHub branch permissions

### 5. Webhook Configuration
- Verify GitHub webhooks are properly configured
- Check webhook delivery history in GitHub settings

## Troubleshooting Commands

```bash
# Check git status
git status

# Create test branch
git checkout -b test-preview-build

# Make a change and push
echo "<!-- Test change -->" >> index.html
git add .
git commit -m "Test: trigger preview build"
git push origin test-preview-build
```

## File Structure

```
├── index.html          # Main HTML file
├── style.css          # Styling
├── script.js          # JavaScript functionality
├── .github/
│   └── workflows/
│       └── test.yml   # GitHub Actions (optional)
└── README.md          # This file
```

## Expected Behavior

- **Main branch**: Builds and deploys successfully ✅
- **PR branches**: Should build preview but stays "Waiting" ❌

## Contact

If you continue experiencing issues, check:
1. Appwrite Console build logs
2. GitHub webhook delivery logs  
3. Repository permissions
4. Build quota limits
