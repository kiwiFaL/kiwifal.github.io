---
title: "SOI2: Inspecting Your Software Production Line"
date: 2025-05-27
categories:
  - DO-178C
  - Certification
tags:
  - stages of involvement
  - SOI
  - certification
  - DER
  - avionics
  - regulatory compliance
  - software lifecycle
excerpt: "Understanding SOI2 as an inspection of your software factory line rather than a discrete checkpoint in the DO-178C certification process"
header:
  overlay_color: "#333"
---

# SOI2: Inspecting Your Software Production Line

When discussing Stages of Involvement (SOI) in DO-178C certification, there's a common misconception that SOI2 is simply a discrete checkpoint or gate in the development process. This mental model can lead to teams "preparing for SOI2" as if it were an exam or a milestone to pass before continuing.

However, this approach misses the true nature and purpose of SOI2.

## The Factory Inspection Analogy

Think of SOI2 not as a gate, but as a **factory inspection**.

Imagine your software development process as a production line in a food manufacturing facility. The requirements flow in at one end, and executable code emerges from the other. SOI2 is when the regulators put on their metaphorical hairnets and white coats and walk through your facility while production is actively happening.

They're not there to sample the final product (that's more like SOI4). Instead, they're there to observe:

- Are workers washing their hands? (Are developers following coding standards?)
- Is the equipment clean? (Is your development environment properly controlled?)
- Are ingredients being stored properly? (Are requirements managed correctly?)
- Is there cross-contamination? (Is independence maintained where required?)
- Are production records being kept? (Is traceability maintained?)

## What This Means in Practice

Understanding SOI2 as a production line inspection rather than a gate changes how you should approach it:

### 1. Focus on Process, Not Just Artifacts

The DER isn't just looking at a static snapshot of your requirements and code. They're examining how those artifacts are being created, managed, and verified. They want to see your processes in action.

### 2. Show Real Work in Progress

Don't clean everything up and present a sanitized view. The DER expects to see real work happening, including how you handle issues that arise. They want to see:

- How requirements flow through your system
- How code is developed from those requirements
- How verification activities are conducted
- How problems are identified and addressed
- How configuration management controls everything

### 3. Demonstrate Traceability in Motion

Traceability isn't just a static matrix. Show how a change to a requirement flows through your system, how it triggers updates to design and code, and how verification cases are adjusted accordingly.

## Common SOI2 Inspection Findings

Just as health inspectors have common citations, DERs often identify similar issues during SOI2:

1. **Process Deviation Without Documentation**: You're not following your own plans and standards
2. **Contamination of the Production Line**: Loss of independence between development and verification
3. **Inadequate Record-Keeping**: Poor traceability or insufficient evidence of reviews
4. **Quality Control Issues**: Requirements that aren't verifiable or testable
5. **Inventory Management Problems**: Configuration management issues, particularly with derived requirements

## Preparing for Your Factory Inspection

Rather than "studying for a test," prepare for SOI2 by:

1. **Running Your Factory Normally**: Don't create a special "show" for the DER
2. **Ensuring Workers Understand Procedures**: Make sure your team knows and follows the processes
3. **Maintaining Good Housekeeping**: Keep your artifacts organized and under proper CM
4. **Conducting Regular Internal Inspections**: Perform your own process audits
5. **Addressing Known Issues**: Have a plan for any process deficiencies you've identified

## Conclusion

When you view SOI2 as an inspection of your software production line rather than a discrete checkpoint, you shift your focus from "passing a test" to "demonstrating a healthy production environment." This mindset leads to better ongoing processes rather than point-in-time preparation.

The DER isn't there to shut you down but to ensure your factory is producing safe, reliable software according to established standards. By maintaining good manufacturing practices throughout your development lifecycle, you'll not only satisfy SOI2 requirements but also produce higher quality software with fewer issues down the line.

Remember: The goal isn't to pass SOI2; it's to build a software production line that consistently delivers high-quality, certifiable software. SOI2 is just one day when someone happens to be watching more closely.