---
title: "Verification by Inspection in DO-178C: When to Use It (Rarely)"
date: 2025-05-20
categories:
  - DO-178C
  - Verification
tags:
  - inspection
  - software verification
  - verification methods
  - testing
  - avionics
  - certification
  - quality assurance
excerpt: "A practical look at verification by inspection in DO-178C, why it should be used sparingly, and how testing is almost always the preferred verification method"
header:
  overlay_color: "#333"
---

# Verification by Inspection in DO-178C: When to Use It (Rarely)

If you see "inspection" as the verification method for a requirement, you should be immediately suspicious.

## What is Verification by Inspection?

In DO-178C, verification by inspection is exactly what it sounds like - someone looking at code or other software artifacts and declaring "yep, this functions correctly" without actually executing the code or performing a test. It's essentially a visual examination where the verifier uses their expertise to determine if something meets requirements.

DO-178C section 6.2b specifically mentions inspection as one of the [verification methods](/wiki/verification-methods/), alongside analysis, reviews, and testing. But there's a reason it's not the preferred method.

## Why Inspection Should Be Rare

DO-178C section 6.2b makes it clear - inspection should be used sparingly and only when absolutely necessary and fully justified as you can't achieve the [test coverage objectives](/wiki/structural-coverage/). Here's why:

1. **Inspection is subjective** - It relies heavily on the inspector's knowledge and judgment
2. **Inspection lacks objectivity** - There's no pass/fail criteria that can be independently verified
3. **Inspection provides weaker evidence** - It doesn't demonstrate actual functionality
4. **Inspection is less repeatable** - Different inspectors might reach different conclusions
5. **You can't inspect the binary** - while you can inspect the requirements, models and code, none of these actually go flying. Plus there are many functional aspects you won't be able to inspect. If you were to inspect a function in the code, you can't really see the other items contributing to this function (think operating system, board support package, hardware and AEH providing IO, processor)


## When Is Inspection Actually Appropriate?

Inspection is almost always used when we can't get a test case to exercise the function. Some legitimate examples include:

1. **Defensive code that's unreachable in normal operation** - Like code that handles hardware failures that can't be safely triggered in a test environment
2. **Certain compiler-generated code** - Where the compiler inserts functionality which can't be directly tested
3. **Extremely rare error conditions** - Which would require complex test setups which aren't practical
4. **Certain aspects of timing or resource usage** - Which can't be directly measured through testing

But these are exceptions, not the rule. Almost all software verification should be [test-based](/wiki/verification-methods/#3-testing).

## Test vs. Inspection: A Common Misunderstanding

I've seen a lot of confusion about what counts as "inspection" versus "test." Let me clear this up:

- **Inspecting the output of a test case is still "test"** - If you run code and verify the output matches expectations, this is testing, not inspection
- **Reviewing test results is part of testing** - The human verification of test results doesn't make it "inspection"
- **Static analysis followed by review is "analysis"** - Not inspection
- **[Peer reviews](/2025/05/19/peer-reviews-in-do-178c/)** - These are a different verification method from inspection

True inspection is when verification is done solely by examining the code or artifact without any execution or analysis tools.

## The Problem with Overusing "Inspection"

When we incorrectly label verification activities as "inspection" when they're actually tests, we:

1. Create unnecessary justification work
2. Potentially raise red flags with certification authorities
3. Undermine the credibility of our verification process
4. Make it harder to maintain consistent verification standards

## Best Practices for Verification Method Selection

When deciding on verification methods, follow this simple hierarchy:

1. **[Test](/wiki/verification-methods/#3-testing)** - Always prefer testing when possible (this should be 95%+ of your verification)
2. **[Analysis](/wiki/verification-methods/#2-analysis)** - Use when testing isn't feasible but formal analysis can provide objective evidence
3. **[Review](/wiki/verification-methods/#1-reviews)** - Appropriate for checking conformance to standards and completeness
4. **Inspection** - Last resort, only when the above methods cannot be applied

Remember: Test is Best. If you can test it, you should test it. If you can't test it, rewrite the requirement so you can. Almost all SW requirements should be verifiable by a software test. For Level A software, this includes achieving [MC/DC coverage](/wiki/mc-dc-coverage/).

## Conclusion

Verification by inspection has its place in DO-178C compliance, but this place should be very limited. By correctly categorizing our verification methods and reserving inspection for only those rare cases where it's truly justified, we strengthen our verification process and make certification smoother. Test is a great way to not only test our code but also to test our requirements are written correctly. 

If you're using inspection for more than a tiny fraction of your verification activities, it's worth taking a closer look to see if you're really using the most appropriate verification method. And if you're just labeling the review of test results as "inspection," stop doing that - it's a test!

Test is Best. Let's make sure our verification methods reflect this.