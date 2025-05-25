---
title: "Intended Function: The Core Purpose of DO-178C"
date: 2025-05-24
categories:
  - DO-178C
  - Certification
tags:
  - intended function
  - development assurance
  - requirements
  - certification
  - software engineering
  - binary verification
excerpt: "Understanding how DO-178C focuses on ensuring airborne software performs its intended function through development assurance processes"
header:
  overlay_color: "#333"
---

# Intended Function: The Core Purpose of DO-178C

There is so much confusion about DO-178C. The complete misrepresentation of it is pervaisis through the industry, from Engineers to Safety, to Systems to DERs, from ODAs and big Aeropsace, consultants and regulators. Examples: 
- DO-178C is a safety Standard - nope!
- DO-178C makes your software reliable - nope!
- DO-178C has safetly levels A-E - nope!
- DO-178C is about software maintenance - nope!
- DO-178C makes sure we exhaustively test the software - nope!
- DO-178C is for software safety - nope!
- DO-178C is for software reliability - nope!

DO-178C is about intended function; assuring the binary performs its intended function (requirements) to an acceptable Level (DAL). 

The opening statement of DO-178C clearly defines its purpose: "to provide guidance for the production of software for airborne systems and equipment that performs its intended function." This seemingly simple phrase encapsulates the entire philosophy behind aviation software development assurance.

But what exactly does "intended function" mean in this context, and why is it so central to DO-178C?

## What Is Intended Function?

Intended function is what the software is supposed to do—the behavior that was planned, specified, and designed. It's expressed through:

1. **Requirements** - The documented capabilities and constraints
2. **Specifications** - The detailed descriptions of how requirements will be implemented
3. **Interfaces** - How the software interacts with other systems
4. **Source Code** - The human-readable implementation of the design

In contrast, the *actual function* is what the compiled binary does when executed on the target hardware—what actually goes flying in the aircraft.

The fundamental goal of DO-178C is to provide assurance the actual function (binary) correctly implements the intended function (requirements, specifications, interfaces, and source code).

## Development Assurance vs. Safety Assurance

A common misconception is that DO-178C is a safety standard. It's not:

```
// Common misconception
if (softwareFailure) {
  applySafetyProcess(); // This is NOT what DO-178C does
}

// Reality
if (developmentProcessFollowed) {
  intendedFunctionAssured = true; // This IS what DO-178C does
}
```

Development Assurance is specifically about assuring the development processes are followed correctly to provide confidence the software will perform its intended function. It's not about making the software "safe" per se—that's the domain of system safety processes which determine what the software should do in the first place.

Every single requirment can be traced back to this "intended function" goal of DO-178C. Either developing to requirements, verifying against requirements and assessing any potential gaps (tools, code coverage, derived requirements, etc). The rest is the planning, congifguration, quality assurance and regulator activities related to the development and verification. Everything points to intended function.  

## Who Performs Development Assurance?

Development Assurance is performed by software and hardware engineers, not safety engineers.

Software engineers apply DO-178C processes to assure the software correctly implements its requirements. They are not responsible for determining whether those requirements themselves will result in a safe system—that's established earlier in the system development lifecycle.

## The Expression of Intended Function

Intended function is expressed through a hierarchy of artifacts:

1. **System Requirements** → Define what the system should do
2. **Software Requirements** → Define what the software should do
3. **Software Design** → Define how the software will do it
4. **Source Code** → Implementation of the design
5. **Binary Code** → What actually executes on the hardware

Each level must correctly implement the level above it. Development assurance processes verify this correct implementation through:

- Requirements reviews
- Design reviews
- Code reviews
- Testing
- Traceability analysis
- Coverage analysis

## The Binary Reality

While intended function is expressed through requirements and source code, what actually flies is binary code. This creates a fundamental verification challenge:

```
Requirements → Source Code → Compiler → Binary Code → Aircraft
```

How do we know the binary correctly implements the intended function? DO-178C addresses this through:

1. **Verification of source to requirements** - Does the source code correctly implement the requirements?
2. **Compiler qualification** - Is the compiler known to produce correct binary from source?
3. **Hardware/software integration testing** - Does the binary execute correctly on the target hardware?

## The Interface with Systems Engineering

Development assurance doesn't exist in isolation. It interfaces with systems engineering in critical ways:

1. **Requirements Flow-Down** - Systems engineering provides the high-level requirements that define the intended function
2. **Derived Requirements Flow-Up** - Software engineering identifies derived requirements that must be evaluated at the system level
3. **Interface Definition** - Systems engineering defines how software interfaces with hardware and other systems

This bidirectional flow ensures that the intended function is correctly defined and implemented.

## The Interface with Safety

While development assurance isn't a safety process, it does interface with safety processes:

1. **DAL Allocation** - Safety processes determine the Design Assurance Level (DAL) based on failure condition severity
2. **Verification Rigor** - The DAL determines how rigorously the development assurance processes must be applied
3. **Safety Requirements** - Safety analyses may identify specific requirements that must be implemented

The higher the DAL, the more confidence is needed the software will perform its intended function.

## Case Study: Flight Control System

Consider a flight control system with components at different assurance levels:

1. **Primary Flight Control (Level A)**
   - Intended function: Maintain stable flight based on pilot inputs
   - High assurance needed: Full objectives of DO-178C applied
   - Extensive verification: 100% MC/DC coverage, formal methods

2. **Flight Envelope Protection (Level B)**
   - Intended function: Prevent aircraft from exceeding safe operating parameters
   - Strong assurance needed: Most objectives of DO-178C applied
   - Thorough verification: Decision coverage, extensive testing

3. **Flight Data Recording (Level D)**
   - Intended function: Record flight parameters for later analysis
   - Lower assurance needed: Subset of DO-178C objectives applied
   - Basic verification: Statement coverage, limited testing

Each component has a different intended function with corresponding levels of assurance based on criticality.

## Common Pitfalls in Assuring Intended Function

1. **Focusing on process over purpose** - Following processes without understanding why
2. **Inadequate requirements** - Vague or untestable requirements make verification impossible
3. **Verification gaps** - Missing verification activities that leave aspects of intended function unverified
4. **Ignoring derived requirements** - Failing to identify and verify requirements that emerge during design
5. **Over-reliance on testing** - Testing alone cannot provide complete assurance

## Best Practices for Assuring Intended Function

1. **Clear, testable requirements** - Requirements must precisely define intended function
2. **Bidirectional traceability** - Every requirement must be traced to implementation and verification
3. **Multiple verification methods** - Use reviews, analysis, and testing for comprehensive verification
4. **Independence** - Ensure verification activities have appropriate independence
5. **Configuration management** - Maintain control of all artifacts that express intended function

## Conclusion

DO-178C is fundamentally about one thing: assuring airborne software performs its intended function. It's not about safety per se, but about providing assurance the software will do what it's supposed to do.

By understanding this core purpose, development teams can apply DO-178C more effectively, focusing on the essence of development assurance rather than just checking boxes for compliance. The processes, objectives, and activities of DO-178C all serve this singular purpose—to provide assurance that what flies is what was intended.

Development Assurance is performed by software and hardware engineers who implement processes to verify requirements are correctly implemented in code, and the resulting binary will perform as intended when deployed in an aircraft. By maintaining this focus on intended function, DO-178C helps assure the reliability of increasingly complex aviation software systems.