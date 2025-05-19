# Resources Directory

This directory contains downloadable resources for the DO-178C Body of Knowledge website.

## Purpose

This folder is used to store files that visitors can download from the website, such as:

- PDF documents
- Templates
- Checklists
- Example files
- Diagrams
- Presentations
- Tools and utilities

## How to Add Resources

1. Add your resource files directly to this directory or create subdirectories for better organization
2. Update the resources page (`_pages/resources.md`) to include links to the new resources
3. Use relative paths to link to resources, for example: `/resources/filename.pdf`

## Organization Suggestions

Consider organizing resources into subdirectories by category:

- `/resources/templates/` - Document templates
- `/resources/checklists/` - Verification checklists
- `/resources/examples/` - Example files and code
- `/resources/tools/` - Tools and utilities
- `/resources/presentations/` - Slides and presentations

## Linking to Resources

In your Markdown files, link to resources using:

```markdown
[Resource Name](/resources/filename.pdf)
```

For resources in subdirectories:

```markdown
[Resource Name](/resources/category/filename.pdf)