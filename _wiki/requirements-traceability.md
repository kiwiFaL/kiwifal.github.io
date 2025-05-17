---
title: "Requirements Traceability in DO-178C"
excerpt: "Understanding and implementing effective requirements traceability for aviation software certification"
layout: wiki
toc: true
tags: [requirements, traceability, verification, certification]
last_modified_at: 2025-05-16
---

# Requirements Traceability in DO-178C

## Introduction

Requirements traceability is a fundamental aspect of DO-178C compliance, providing evidence that all requirements are properly implemented and verified. It establishes and maintains relationships between requirements, design elements, source code, and verification activities throughout the software development lifecycle.

## Purpose and Objectives

### Regulatory Requirements

DO-178C mandates requirements traceability for all software levels (A through D). Section 5.5 of DO-178C specifically addresses traceability, requiring:

- Traceability between system requirements and software requirements
- Traceability between software requirements and software design
- Traceability between software design and source code
- Traceability between software requirements and verification cases/procedures
- Traceability between verification cases/procedures and verification results

### Benefits of Effective Traceability

1. **Completeness Verification**: Ensures all requirements are implemented and verified
2. **Impact Analysis**: Facilitates assessment of change impacts
3. **Verification Coverage**: Demonstrates that all requirements are tested
4. **Unintended Function Detection**: Identifies code not traced to requirements
5. **Certification Evidence**: Provides clear evidence for certification authorities
6. **Maintenance Support**: Simplifies maintenance and modification activities

## Traceability Relationships

### Bidirectional Traceability

DO-178C requires bidirectional traceability, meaning that relationships must be traceable in both directions:

- **Forward Traceability**: From higher-level requirements to lower-level artifacts
- **Backward Traceability**: From implementation and verification back to requirements

### Key Traceability Links

#### System to Software Requirements

- Links between aircraft/system requirements and derived software requirements
- Captures allocation of system functions to software
- Identifies derived requirements with no direct system parent

#### Software Requirements to Design

- Maps high-level requirements (HLR) to low-level requirements (LLR)
- Connects functional requirements to architectural components
- Links non-functional requirements to design decisions

#### Design to Source Code

- Connects design elements to specific code modules/functions
- Maps algorithms to their implementations
- Links data structures to their code representations

#### Requirements to Test Cases

- Associates each requirement with specific verification cases
- Ensures every requirement has appropriate test coverage
- Maps requirements to specific test procedures

#### Test Cases to Test Results

- Links test procedures to their execution results
- Provides evidence of verification completion
- Connects failed tests to problem reports

## Implementation Approaches

### Traceability Matrix

The traditional approach using tables or matrices to document relationships:

| Requirement ID | Design Element | Source File | Test Case | Test Result |
|----------------|----------------|-------------|-----------|-------------|
| SW-REQ-001     | HLD-MOD-1      | control.c   | TC-001    | TR-001      |
| SW-REQ-002     | HLD-MOD-2      | sensor.c    | TC-002    | TR-002      |

**Advantages**:
- Simple to implement
- Easy to review
- Familiar to certification authorities

**Disadvantages**:
- Difficult to maintain for large projects
- Limited visualization of complex relationships
- Challenging to keep synchronized with changes

### Requirements Management Tools

Specialized tools that maintain traceability relationships in a database:

**Popular Tools**:
- IBM DOORS
- Jama Connect
- Polarion Requirements
- Siemens Teamcenter
- Helix ALM

**Advantages**:
- Automated relationship management
- Impact analysis capabilities
- Integration with other development tools
- Advanced reporting and visualization

**Disadvantages**:
- Tool qualification may be required
- Learning curve and implementation costs
- Data migration challenges
- Vendor lock-in concerns

### Model-Based Approaches

Using models as the central artifact with embedded traceability:

**Approaches**:
- SysML/UML models with traceability relationships
- AADL models with requirement annotations
- Simulink models with requirement links

**Advantages**:
- Visual representation of relationships
- Integration of requirements and design
- Potential for automated code generation with traceability

**Disadvantages**:
- Tool complexity
- Higher qualification burden for tools
- Specialized skills required

## Traceability Process

### Establishing Initial Traceability

1. **Requirements Analysis**: Analyze and categorize requirements
2. **Relationship Identification**: Identify logical connections between artifacts
3. **Traceability Capture**: Document relationships in chosen format
4. **Completeness Check**: Verify all requirements have appropriate traces

### Maintaining Traceability

1. **Change Impact Analysis**: Assess impact of changes on traceability
2. **Relationship Updates**: Update affected relationships
3. **Gap Analysis**: Identify and address new traceability gaps
4. **Verification**: Confirm traceability remains complete and correct

### Traceability Reviews

1. **Completeness Reviews**: Ensure all requirements have appropriate traces
2. **Correctness Reviews**: Verify accuracy of established relationships
3. **Consistency Reviews**: Check for conflicting or redundant traces
4. **Coverage Analysis**: Assess test coverage of requirements

## Traceability for Different Software Levels

### Level A Software

- Complete bidirectional traceability required
- Formal reviews of traceability with independence
- Detailed documentation of all relationships
- Verification of absence of unintended functions

### Level B Software

- Complete bidirectional traceability required
- Some independence in traceability reviews
- Detailed documentation of relationships
- Verification of absence of unintended functions

### Level C Software

- Bidirectional traceability required
- Less rigorous review process
- Simplified documentation acceptable
- Basic verification of unintended functions

### Level D Software

- Basic traceability required
- Informal review process
- Simplified documentation
- Limited verification of unintended functions

## Common Challenges

### Scalability Issues

- **Large Requirement Sets**: Managing thousands of requirements
- **Complex Relationships**: Handling many-to-many relationships
- **Distributed Development**: Maintaining traceability across teams

**Solutions**:
- Hierarchical organization of requirements
- Automated traceability tools
- Clear traceability procedures and responsibilities

### Derived Requirements

- **Identification**: Recognizing requirements not traceable to higher level
- **Justification**: Providing rationale for derived requirements
- **Verification**: Ensuring appropriate verification coverage

**Solutions**:
- Explicit tagging of derived requirements
- Formal review process for derived requirements
- Safety analysis for derived requirements

For a detailed exploration of derived requirements, see [Derived Requirements in DO-178C: When and How to Use Them](/do-178c/derived-requirements-in-do-178c/)

### Unintended Functions

- **Detection**: Identifying code not traced to requirements
- **Evaluation**: Assessing impact on safety and certification
- **Resolution**: Addressing unintended functionality

**Solutions**:
- Code-to-requirements reverse traceability
- Static analysis tools
- Structural coverage analysis

### Tool Limitations

- **Data Exchange**: Transferring traceability between tools
- **Versioning**: Managing traceability across versions
- **Integration**: Connecting requirements, design, and test tools

**Solutions**:
- Standard exchange formats (ReqIF)
- Integrated toolchains
- Custom integration scripts/middleware

## Best Practices

### Requirements Management

1. **Unique Identification**: Assign unique IDs to all artifacts
2. **Atomic Requirements**: Keep requirements focused and testable
3. **Requirement Attributes**: Include status, rationale, and criticality
4. **Version Control**: Maintain history of requirement changes

### Traceability Implementation

1. **Right-Sized Approach**: Match traceability detail to project needs
2. **Early Implementation**: Establish traceability from project start
3. **Tool Automation**: Leverage tools for maintenance and analysis
4. **Visual Representation**: Use diagrams to communicate complex relationships

### Process Integration

1. **Change Management**: Integrate with change control process
2. **Continuous Validation**: Regularly verify traceability completeness
3. **Metrics and Reporting**: Track traceability status and gaps
4. **Training**: Ensure team understands traceability importance and methods

### Certification Preparation

1. **Evidence Organization**: Structure traceability for easy review
2. **Gap Analysis**: Proactively identify and address traceability gaps
3. **Compliance Mapping**: Link traceability to specific DO-178C objectives
4. **Authority Engagement**: Discuss traceability approach with certification authorities

## Tool Qualification Considerations

When using tools for requirements traceability:

- **Qualification Need**: Assess if tool qualification is required
- **Qualification Level**: Typically Criteria 3, TQL-5
- **Qualification Approach**: Validate tool outputs through reviews
- **Alternative Approaches**: Consider manual verification of tool outputs

For more information, see [Tool Qualification](/wiki/tool-qualification/).

## Case Study: Traceability in a Flight Control System

### Project Context

- Level A flight control software
- 2,500+ requirements
- Multiple subsystems and teams
- Model-based development approach

### Traceability Implementation

1. **Requirements Structure**:
   - System requirements in IBM DOORS
   - Software requirements in DOORS modules linked to system requirements
   - Design models in Simulink with requirement links

2. **Verification Traceability**:
   - Test cases in DOORS Test Track module
   - Automated test scripts with requirement IDs
   - Test results database with links to requirements

3. **Traceability Analysis**:
   - Weekly automated reports of traceability gaps
   - Impact analysis for all requirement changes
   - Traceability reviews at each milestone

### Results

- 100% bidirectional traceability achieved
- Early detection of missing requirements
- Efficient impact analysis for changes
- Smooth certification process with minimal findings

## See Also

- [Verification Methods](/wiki/verification-methods/)
- [Tool Qualification](/wiki/tool-qualification/)
- [Development Assurance Overview](/wiki/Development-assurance-overview/)
- [Planning Process](/wiki/planning-process/)

---

*Referenced in: [Understanding Development Assurance](/2025/05/15/understanding-development-assurance/)*