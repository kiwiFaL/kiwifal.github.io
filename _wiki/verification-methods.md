---
title: "Verification Methods in DO-178C"
excerpt: "Comprehensive guide to software verification techniques required by DO-178C"
layout: wiki
toc: true
tags: [verification, testing, reviews, analysis, certification]
last_modified_at: 2025-05-16
---

# Verification Methods in DO-178C

## Introduction

Software verification is a critical aspect of DO-178C compliance, ensuring that the software meets its requirements and functions correctly in the target environment. DO-178C requires a combination of verification methods to achieve sufficient confidence in the software's correctness and safety.

## Primary Verification Methods

DO-178C recognizes four primary verification methods:

### 1. Reviews

**Definition**: Qualitative evaluations of software artifacts to ensure completeness, correctness, and compliance with standards.

**Types of Reviews**:
- **Requirements Reviews**: Ensure requirements are correct, complete, and verifiable
- **Design Reviews**: Evaluate architectural and detailed design against requirements
- **Code Reviews**: Examine source code for compliance with standards and design
- **Traceability Reviews**: Verify bidirectional traceability between artifacts

**Documentation**:
- Review procedures
- Review checklists
- Review records with findings and resolutions

### 2. Analysis

**Definition**: Detailed examination of software artifacts using systematic techniques to evaluate properties and behaviors.

**Types of Analysis**:
- **Control Flow Analysis**: Examines program execution paths
- **Data Flow Analysis**: Tracks data usage throughout the program
- **Timing Analysis**: Evaluates execution timing and worst-case scenarios
- **Memory Analysis**: Assesses memory usage and potential leaks
- **Stack Analysis**: Determines maximum stack usage
- **Formal Methods**: Mathematical proof of software properties

**Tools**:
- Static analysis tools
- Formal verification tools
- Memory analyzers
- Timing analyzers

### 3. Testing

**Definition**: Execution of software to verify behavior against expected results.

**Types of Testing**:
- **Requirements-Based Testing**: Verifies software meets specified requirements
- **Robustness Testing**: Evaluates behavior under abnormal conditions
- **Integration Testing**: Verifies interfaces between components
- **Hardware/Software Integration Testing**: Tests software on target hardware
- **System Testing**: Evaluates the complete system behavior

**Testing Approaches**:
- **Normal Range Testing**: Tests within expected operational parameters
- **Boundary Value Testing**: Tests at the edges of valid ranges
- **Robustness Testing**: Tests outside valid ranges
- **Equivalence Class Testing**: Tests representative values from equivalent groups

### 4. Structural Coverage Analysis

**Definition**: Measurement of code execution during testing to identify untested code structures.

**Coverage Levels**:
- **Statement Coverage**: Every executable statement is executed
- **Decision Coverage**: Every decision takes true and false outcomes
- **Modified Condition/Decision Coverage (MC/DC)**: Every condition independently affects decisions
- **Data Coupling and Control Coupling**: Verifies data and control flow between components

**Applicability by Software Level**:
- **Level A**: Statement, Decision, MC/DC, and Coupling coverage
- **Level B**: Statement, Decision, and Coupling coverage
- **Level C**: Statement coverage
- **Level D**: No structural coverage required

For more details on structural coverage, see [Structural Coverage](/wiki/structural-coverage/).

## Verification Planning

### Verification Strategy

A comprehensive verification strategy should:
- Define verification methods for each objective
- Establish independence requirements
- Identify tools and environments
- Define criteria for verification completion

### Test Planning

Effective test planning includes:
- Test case development approach
- Test procedures and expected results
- Test environment configuration
- Regression testing strategy
- Test coverage analysis

## Independence in Verification

DO-178C requires varying degrees of verification independence based on software level:

| Software Level | Independence Requirements |
|----------------|---------------------------|
| Level A | High degree of independence for most activities |
| Level B | Independence for many activities |
| Level C | Independence for some activities |
| Level D | Minimal independence requirements |

**Types of Independence**:
- **Personnel Independence**: Different individuals perform development and verification
- **Tool Independence**: Different tools used for development and verification
- **Organizational Independence**: Separate teams or departments

## Tool Qualification

Verification tools may require qualification depending on their use:

- **Criteria 1**: Tools whose output is part of airborne software (high qualification)
- **Criteria 2**: Tools that automate verification and eliminate manual verification (medium qualification)
- **Criteria 3**: Tools that could fail to detect errors (lower qualification)

For more information, see [Tool Qualification](/wiki/tool-qualification/).

## Verification Environments

### Host-Based Testing

- Executes on development computers
- Faster development cycles
- May not fully represent target behavior
- Often used for unit and integration testing

### Target-Based Testing

- Executes on actual aircraft hardware
- Provides high fidelity results
- Required for final verification
- More complex test setup

### Hardware-in-the-Loop (HIL)

- Combines simulated and actual hardware
- Allows testing of hardware/software interactions
- Useful for system-level verification
- Can detect timing and interface issues

## Verification Documentation

### Required Documentation

- **Verification Plans**: Define verification approach and methods
- **Verification Cases and Procedures**: Detailed test cases and procedures
- **Verification Results**: Records of verification activities and outcomes
- **Verification Environment Configuration**: Description of test environment
- **Coverage Analysis Results**: Structural coverage measurements

### Evidence Management

- Traceability between requirements and verification
- Version control of verification artifacts
- Problem reporting and resolution
- Configuration management of verification environment

## Best Practices

### Verification Efficiency

- Automate repetitive verification tasks
- Use risk-based approach to focus verification efforts
- Implement continuous integration and testing
- Establish clear entry and exit criteria for verification phases

### Common Pitfalls

- Inadequate requirements verification
- Insufficient structural coverage
- Poor test environment fidelity
- Inadequate documentation of verification results
- Failure to maintain independence

## See Also

- [Structural Coverage](/wiki/structural-coverage/)
- [MC/DC Coverage](/wiki/mc-dc-coverage/)
- [Tool Qualification](/wiki/tool-qualification/)
- [Requirements Traceability](/wiki/requirements-traceability/)
- [Development Assurance Overview](/wiki/Development-assurance-overview/)

---

*Referenced in: [Understanding Development Assurance](/2025/05/15/understanding-development-assurance/)*