<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Appwrite Sites Test Project Instructions

This project is designed to test and troubleshoot Appwrite Sites preview build issues. When working on this project:

## Context
- This is a static HTML website for testing Appwrite Sites deployment
- The main issue being tested: preview builds stay in "Waiting" status on pull requests
- Production builds on main branch work correctly

## Code Guidelines
- Keep HTML, CSS, and JavaScript simple and minimal
- Focus on functionality that helps identify build issues
- Add clear logging and status indicators
- Use semantic HTML and accessible design patterns

## Testing Focus
- Environment detection (preview vs production) 
- Build status monitoring
- Clear visual indicators for different environments
- Troubleshooting helpers and diagnostic tools

## File Purpose
- `index.html`: Main test page with status indicators
- `style.css`: Styling with environment-specific visual cues  
- `script.js`: Environment detection and diagnostic functions
- `README.md`: Troubleshooting guide and setup instructions
