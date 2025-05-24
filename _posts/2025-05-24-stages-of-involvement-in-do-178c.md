---
title: "Stages of Involvement in DO-178C: What They Are and Why They Matter"
date: 2025-05-24
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
excerpt: "A practical guide to the four Stages of Involvement (SOI) in DO-178C certification, explaining what happens at each stage and how to prepare for successful regulatory reviews"
header:
  overlay_color: "#333"
---

# Stages of Involvement in DO-178C: What They Are and Why They Matter

If you're developing avionics software under DO-178C, you'll inevitably encounter the term "Stages of Involvement" or SOIs. These are critical checkpoints where regulators (typically DERs - Designated Engineering Representatives) review your progress to assure you're on track for satisfying the applicable objectives.

Let's break down what happens at each stage and how to prepare for them.

## What Are Stages of Involvement?

Stages of Involvement are progressive reviews conducted by certification authorities throughout your development lifecycle. They're designed to catch issues early rather than discovering problems at the end when they're much more expensive to fix. They are development assurance reviews, largely are you following the agreed processes you signed up to at SOI1. They are not a design review, the regulator does not (should not) be telling you how to write code, requirements or tests. Instead, they are looking for evidence you have followed your processes.

Generally a DER will utilise a Job Aid Checklist for each SOI. It is highly recommended you complete a job aid yourself, or with a consultant DER or expert, to go through and check you have everything delivered. 

There are four standard SOIs, each occurring at a different point in your software (or hardware) development process:

## SOI 1: Planning Review

SOI 1 is all about your plans - specifically, your plans and standards. This is a **document review**, not a process review. You are showing the regulator how you are going to turn systems requirements into binary, verify this has been done correctly and keep the configuration control of the software data and development environment.

### What's Being Reviewed:
1. **All plans are complete and submitted** - This includes your PSAC, SDP, SVP, SCMP, and SQAP
2. **All standards are complete** - Your requirements standards, design standards, and coding standards
3. **Compliance strategy** - How you plan to meet all DO-178C objectives for your software level

### Common Issues at SOI 1:
- Incomplete or inconsistent plans
- Standards which don't align with actual development practices
- Inadequate description of tools and qualification approach
- Unclear traceability strategy
- Vague verification methods
- Odd approaches e.g. new tools, new methods, using Machine Learning, unique verification methods

SOI 1 is your foundation. If your plans are weak, everything built on them will be shaky. Take the time to get this right, but also leave room for some adaptability. Don't overcommit yourself, only do the bare minimum to satisfy the objectives otherwise you will be doing stuff you don't need to do to comply.

## SOI 2: Development Review

SOI 2 is a **development process review** which occurs when you're roughly halfway through development. The DER wants to see that you're following the processes you described in your plans.

### What's Being Reviewed:
1. **50% of requirements and code are complete and verified**
2. **Traceability is established** - From system requirements down to code
3. **Configuration management is functioning** - Items are under CM control, changes are managed correctly. 
4. **Quality assurance activities are being performed** - Evidence of reviews and audits, any findings and how they have been addressed. 
5. **Development process adherence** - Following the processes described in your plans. Have you meet the independence requirements, have derived requirements been passed to systems and safety.

### Common Issues at SOI 2:
- Requirements which aren't verifiable
- Poor traceability
- Loss of CM, e.g. draft requirements have had child requirements verified against them
- Deviation from planned processes without proper documentation
- Insufficient evidence of reviews
- Loss of independence

SOI 2 is about proving your processes work in practice, not just on paper.

## SOI 3: Test & Verification Review

SOI 3 is another **process review** which focuses on your verification activities. This typically occurs either at the start of formal testing or when you're about 50% through your testing activities.

### What's Being Reviewed:
1. **All test cases are developed** - Test procedures are complete
2. **Software is complete** - Code is implemented and ready for testing
3. **Test environment is locked down** - Test tools and environment are under CM control
4. **Verification procedures are being followed** - As described in your SVP
5. **Software Build Process** - How do you build your software? 
6. **Test coverage analysis approach** - How you'll demonstrate structural coverage

### Common Issues at SOI 3:
- Incomplete test coverage
- Test cases that don't trace to requirements
- Unstable test environment
- Inadequate test data
- Poor defect tracking and resolution process
- Build process not documented correctly

SOI 3 assures your verification approach will adequately demonstrate compliance with all objectives. SOI3 is generally best run at the end of SQA dry runs flowing into the start of formal testing. This allows the regulator to view SQA dry runs (if done), test cases, test environment lock down, software build and formal test case execution, test failure managment. 

## SOI 4: Final Review

SOI 4 is the final **document review** before certification. At this point, all development and verification activities should be complete.

### What's Being Reviewed:
1. **All objectives are complete** - Every applicable DO-178C objective has been satisfied
2. **SCI (Software Conformity Index) is submitted** - Demonstrating compliance with all objectives
3. **SAS (Software Accomplishment Summary) is submitted** - Summarizing the certification effort
4. **All problem reports are closed** - Or appropriately deferred with justification
5. **Final data package is complete** - All required artifacts are available and under CM

### Common Issues at SOI 4:
- Incomplete structural coverage
- Open high-priority problem reports
- Missing or incomplete certification artifacts
- Inconsistencies between plans and actual activities
- Inadequate tool qualification data
- Configuration control of the data, including software build data
- Correct software Configuration Index
- Correct software loading procedure for loading to the aircraft

SOI 4 is your final checkpoint before certification. Everything must be complete and consistent.

## Document Reviews vs. Process Reviews

It's important to understand the distinction between document reviews and process reviews:

- **Document Reviews (SOI 1 & SOI 4)** focus on the artifacts themselves - plans, standards, and final certification documents. The DER is checking for completeness, consistency, and compliance with DO-178C.

- **Process Reviews (SOI 2 & SOI 3)** focus on how you're executing your processes. The DER wants to see evidence that you're following your plans and that your processes are effective.

## What SOIs Are Not

SOIs are not design reviews. The DER isn't there to evaluate whether your design is good or whether your requirements make sense from a functional perspective. They're checking that you're following proper development assurance processes which will lead to software which functions as detailed in the system level requirements.

## Best Practices for Successful SOIs

1. **Prepare thoroughly** - Have all required artifacts ready and organized
2. **Conduct internal reviews** - Do your own SOI review before the official one
3. **Address issues proactively** - Don't wait for the DER to find problems
4. **Document everything** - If it's not documented, it didn't happen
5. **Be transparent** - If there are issues or deviations, disclose them with justification
6. **Follow your plans** - Or formally update them if processes change

## Conclusion

Stages of Involvement are your opportunity to get early feedback from certification authorities and correct course if needed. They're checkpoints designed to increase your chances of successful certification, not obstacles to overcome.

By understanding what happens at each SOI, through your plans and using a Job Aid Checklist, you can turn these reviews from stressful events into valuable opportunities for validation you're on the right track, minimizing costly surprises at the end of the program.