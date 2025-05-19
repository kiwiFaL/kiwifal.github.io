---
title: "Derived Requirements in DO-178C: When and How to Use Them"
date: 2025-05-18
categories:
  - DO-178C
  - Requirements
tags:
  - derived requirements
  - requirements traceability
  - A429
  - avionics
  - certification
excerpt: "An examination of derived requirements in DO-178C, their proper use, and common misconceptions, particularly regarding A429 interface requirements"
header:
  overlay_color: "#333"
---

# Derived Requirements in DO-178C: When and How to Use Them

In the world of avionics software development under DO-178C and other development assurance standards, requirements traceability is a cornerstone of the certification process. One particular aspect which often causes confusion is the concept of "derived requirements." This post explores what derived requirements are, when they should be used, and common misconceptions surrounding them.

It's worth noting that "derived" is somewhat of a misnomer. These requirements might be better described as "orphan" or "parent-less" requirements. The term "derived" suggests they come from something, yet in DO-178C context, they specifically don't derive from higher-level requirements. This terminology can be confusing for newcomers to the DO-178C space.

## What Are Derived Requirements?

Derived requirements are software (or hardware) requirements which are not directly traceable to higher-level requirements. According to DO-178C, these are requirements which:

1. Are not directly traceable to higher-level requirements
2. Emerge during the software development process
3. Are not explicitly stated in the system requirements

These requirements typically arise from implementation decisions, architectural choices, or constraints discovered during the software development process.

## When Should Requirements Be Classified as "Derived"?

Derived requirements should be relatively rare in a well-defined system. They represent functionality or constraints which:

1. Were not anticipated at the system level
2. Are necessary for the software to function properly
3. Cannot be traced to any existing higher-level requirement

## Why do we end up with requirements which are "Derived"?

Derived requirements appear as we get closer to implementation (code) as we realize the abstract, reality-less freedom the Systems Engineers operated in when dreaming up the system requirements hit the hard truth of reality the Software Engineers are stuck between a rock (systems requirements) and a hard place (hardware). This means the softies must create additional requirements at the software level to get the thing to work.

More technically, derived requirements might be required due to limitations of the target hardware, operating systems or other development environment limitations. The key characteristic of a truly derived requirement is it represents functionality which was not expressed at the system level but is allocated to the software.

### Some Example Derived Requirements:

Some example requirements which may be derived:

- A requirement to implement a specific error detection algorithm not specified at the system level
- A requirement to implement redundancy checks not called for in the system requirements
- A requirement to cache data in memory for performance optimization when the system requirements only specify response time
- A requirement to implement a specific thread synchronization mechanism due to RTOS limitations
- A requirement to handle specific hardware initialization sequences not covered in system requirements
- A requirement to implement a watchdog timer reset mechanism not specified at system level
- A requirement to implement specific memory management techniques to prevent fragmentation
- A requirement to add checksums to internal data structures for data integrity
- A requirement to implement specific logging or diagnostic capabilities for debugging purposes
- A requirement to handle specific error cases discovered during software design which weren't anticipated at system level
- A requirement to implement a specific state machine for mode transitions not detailed in system requirements
- A requirement to implement power-saving features in software not specified by system requirements

## You have some Derived Requirements - now what?

Derived requirements introduce functionality in the software and the overall system which wasn't anticipated by the Systems Engineering team and, more importantly, the Safety Engineering Team. Complex systems are fundamentally based on Functional Safety, and adding functions which haven't been assessed by the Safety Engineering team for their failure impact on the Aircraft, Crew, or Passengers could introduce hazards which require further mitigation.

So all Derived Requirements must be passed back to Systems and Safety Engineering for assessment and ultimately acceptance. This is the only role Systems and Safety have in the DO-178C process (see DO-178C objectives A2.2 and A2.5) although not technically inside the DO-178C process as these are passed out of DO-178C process.

Systems Engineering may create a parent system requirement so it is no longer "derived" but the assessments remain the same for Systems and Safety Engineering.

## The Impact of Misclassification

There can be a habit of misclassifying requirements as "derived" to be on the safe side. But this has several negative consequences:

1. **Red flag to the regulator**: Derived requirements are a red flag to the regulator that the system level requirements are poor, software requirements are poor, or both. Anything over a small percentage should raise questions from an informed regulator. Although having none could be suspicious as well.
2. **Increased certification burden**: Derived requirements require additional safety analysis and justification
3. **Obscured traceability**: It becomes harder to verify all system requirements are properly implemented
4. **Potential safety gaps**: Important system-level considerations might be missed if requirements are incorrectly handled as implementation details

## Best Practices for Handling Requirements

To avoid these issues, consider these best practices:

### 1. Consultative Design Process
Before systems requirements are locked down and allocated to Hardware or Software items, the Systems team should thoroughly consult with the Hardware and Software teams doing the actual implementation. This minimizes derived requirements and gets the systems requirements closer to a set of functionality which can actually be implemented.

### 2. Thorough System Requirements Analysis
Before classifying a requirement as "derived," thoroughly review system requirements to ensure there isn't a higher-level requirement it could trace to.

### 3. Proper Requirement Decomposition
System-level requirements should be properly decomposed into software requirements. For example, a system requirement stating "The FCC shall receive aircraft state data via A429" should decompose into specific requirements about labels, refresh rates, and error handling.

### 4. Clear Traceability Documentation
Maintain clear documentation showing how each software requirement traces to higher-level requirements. For requirements classified as derived, document the rationale for this classification.

### 5. Regular Requirements Reviews
Conduct regular reviews of requirements classification, especially for those marked as "derived." Question whether each truly represents functionality not expressed at the system level.

## Conclusion

Derived requirements serve an important catch-all in the DO-178C development assurance process, allowing for necessary software functionality which wasn't anticipated at the system level. However, they should be relatively rare and used sparingly.

When reviewing requirements tagged as "derived", carefully consider whether they truly represent new functionality or are simply implementations of system-level requirements. Proper classification not only streamlines the certification process but also ensures better system integrity and safety.

By maintaining rigorous requirements traceability and being cautious about classifying requirements as "derived," avionics software developers can build more robust systems while simplifying the certification process.