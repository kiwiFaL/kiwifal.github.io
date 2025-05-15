---
title: "Tool Qualification in DO-178C"
excerpt: "Guidelines and requirements for qualifying software tools used in aviation software development"
layout: wiki
toc: true
tags: [tools, qualification, DO-330, certification]
last_modified_at: 2025-05-16
---

# Tool Qualification in DO-178C

## Introduction

Tool qualification is the process of ensuring that software tools used in the development and verification of airborne software perform as expected and do not introduce errors. DO-178C, in conjunction with its supplement DO-330 (Tool Qualification Considerations), provides a comprehensive framework for qualifying tools used in aviation software development.

## Purpose of Tool Qualification

### Regulatory Requirements

Tool qualification is required when:
1. A tool automates or replaces processes defined in DO-178C
2. The output of the tool is not verified or confirmed by other verification activities
3. The tool could introduce errors or fail to detect errors in the airborne software

### Benefits

- **Risk Mitigation**: Reduces the risk of tool-induced errors
- **Process Efficiency**: Allows automation of manual processes
- **Certification Support**: Provides evidence for certification authorities
- **Quality Improvement**: Ensures consistent application of development and verification processes

## Tool Categories

DO-178C/DO-330 defines three tool qualification criteria:

### Criteria 1 Tools (Development Tools)

**Definition**: Tools whose output becomes part of the airborne software.

**Examples**:
- Code generators
- Auto-coders
- Model-based development tools
- Compilers (in some cases)

**Qualification Level**: Highest (equivalent to the software level of the airborne software)

### Criteria 2 Tools (Verification Tools)

**Definition**: Tools that automate verification processes and whose output is not verified.

**Examples**:
- Test automation frameworks
- Test case generators
- Static analysis tools
- Requirement management tools with verification capabilities

**Qualification Level**: Medium (based on the software level and specific use)

### Criteria 3 Tools (Verification Tools)

**Definition**: Tools that could fail to detect errors in the airborne software.

**Examples**:
- Code coverage analyzers
- Requirement traceability tools
- Static analyzers
- Review tools

**Qualification Level**: Lower (based on the software level and specific use)

## Tool Qualification Levels (TQLs)

DO-330 defines five Tool Qualification Levels (TQLs) that determine the rigor required for qualification:

| TQL | Applicable To | Objectives |
|-----|---------------|------------|
| TQL-1 | Criteria 1 tools for Level A software | Highest rigor, similar to Level A software |
| TQL-2 | Criteria 1 tools for Level B software | High rigor, similar to Level B software |
| TQL-3 | Criteria 1 tools for Level C software<br>Criteria 2 tools for Level A software | Medium-high rigor |
| TQL-4 | Criteria 1 tools for Level D software<br>Criteria 2 tools for Level B/C software<br>Criteria 3 tools for Level A software | Medium rigor |
| TQL-5 | Criteria 2 tools for Level D software<br>Criteria 3 tools for Level B/C/D software | Lower rigor |

## Qualification Process

### Tool Qualification Planning

1. **Tool Evaluation**: Assess the tool's functionality and potential impact
2. **Qualification Criteria Determination**: Identify applicable criteria (1, 2, or 3)
3. **TQL Determination**: Determine the required Tool Qualification Level
4. **Tool Qualification Plan**: Document the qualification approach

### Tool Qualification Activities

#### For All Tools

- **Tool Operational Requirements**: Define expected behavior and limitations
- **Tool Verification Cases and Procedures**: Define how the tool will be tested
- **Tool Verification Results**: Document testing outcomes
- **Tool Configuration Management**: Control tool versions and changes

#### Additional for TQL-1 to TQL-4

- **Tool Development and Verification Standards**: Define development processes
- **Tool Design Description**: Document the tool's architecture and design
- **Tool Verification and Validation**: More extensive testing and analysis

#### Additional for TQL-1 to TQL-3

- **Tool Requirements Traceability**: Link requirements to implementation and tests
- **Tool Code Review**: Examine tool source code (if available)
- **Tool Structural Coverage Analysis**: Measure test coverage of tool code

### Documentation Requirements

| Document | TQL-1 | TQL-2 | TQL-3 | TQL-4 | TQL-5 |
|----------|-------|-------|-------|-------|-------|
| Tool Qualification Plan | ✓ | ✓ | ✓ | ✓ | ✓ |
| Tool Operational Requirements | ✓ | ✓ | ✓ | ✓ | ✓ |
| Tool Verification Cases and Procedures | ✓ | ✓ | ✓ | ✓ | ✓ |
| Tool Verification Results | ✓ | ✓ | ✓ | ✓ | ✓ |
| Tool Development and Verification Standards | ✓ | ✓ | ✓ | ✓ | - |
| Tool Design Description | ✓ | ✓ | ✓ | ✓ | - |
| Tool Requirements Traceability | ✓ | ✓ | ✓ | - | - |
| Tool Code Review | ✓ | ✓ | ✓ | - | - |
| Tool Structural Coverage Analysis | ✓ | ✓ | ✓ | - | - |

## Qualification Strategies

### Commercial Off-The-Shelf (COTS) Tools

For commercially available tools, qualification strategies include:

1. **Vendor-Provided Qualification Kits**:
   - Pre-packaged qualification materials
   - Tool Qualification Data Package (TQDP)
   - Validation test suites

2. **User-Developed Qualification**:
   - Black-box testing based on tool requirements
   - Operational use cases
   - Validation in the specific usage context

3. **Service History**:
   - Evidence of previous successful use
   - Problem reporting and resolution history
   - Configuration management records

### In-House Developed Tools

For tools developed internally, qualification typically involves:

1. **Full Development Life Cycle**:
   - Requirements definition
   - Design documentation
   - Implementation according to standards
   - Verification and validation

2. **Regression Testing**:
   - Comprehensive test suite
   - Automated testing
   - Coverage analysis

3. **Configuration Management**:
   - Version control
   - Change management
   - Release procedures

## Common Tool Types and Qualification Approaches

### Compilers

- **Qualification Approach**: Usually not qualified; instead, object code verification is performed
- **Mitigation Strategies**: Compiler validation suite, assembly code review, back-to-back testing

### Static Analysis Tools

- **Qualification Approach**: Typically Criteria 3, TQL-4 or TQL-5
- **Key Activities**: Validate detection capabilities, false positive/negative analysis

### Test Automation Tools

- **Qualification Approach**: Criteria 2 or 3, depending on usage
- **Key Activities**: Validate test execution, result reporting, and coverage measurement

### Model-Based Development Tools

- **Qualification Approach**: Criteria 1 for code generators, TQL based on software level
- **Key Activities**: Validate model transformation, code generation, traceability

### Requirements Management Tools

- **Qualification Approach**: Typically Criteria 3, TQL-5
- **Key Activities**: Validate traceability, requirements capture, and change management

## Practical Considerations

### Tool Qualification Cost-Benefit Analysis

- **Effort Estimation**: Assess qualification effort vs. manual verification
- **Risk Assessment**: Evaluate the impact of tool errors
- **Alternative Approaches**: Consider verification of tool outputs instead of qualification

### Tool Qualification Reuse

- **Version Management**: Define policies for tool updates
- **Project Reuse**: Establish conditions for reusing qualification across projects
- **Supplier Qualification**: Evaluate supplier qualification packages

### Common Challenges

- **Tool Complexity**: Modern tools often have extensive functionality
- **Black-Box Tools**: Limited access to internal design and code
- **Tool Integration**: Interactions between multiple tools
- **Tool Updates**: Managing frequent updates and patches

## Regulatory Acceptance

### Certification Authority Involvement

- **Early Engagement**: Discuss tool qualification strategy with authorities
- **Alternative Means of Compliance**: Negotiate acceptable approaches
- **Issue Papers**: Address specific concerns or novel approaches

### Evidence Presentation

- **Tool Qualification Data Package (TQDP)**: Comprehensive documentation
- **Traceability**: Clear links between requirements, tests, and results
- **Problem Reports**: Documentation of known issues and mitigations

## Best Practices

### Tool Selection and Evaluation

1. **Define Requirements**: Clearly define tool requirements before selection
2. **Evaluate Qualification Support**: Assess vendor qualification materials
3. **Consider Certification Impact**: Evaluate how the tool affects certification
4. **Perform Trial Use**: Test the tool in representative scenarios

### Qualification Efficiency

1. **Scope Limitation**: Qualify only necessary tool functions
2. **Reuse Strategy**: Plan for qualification reuse across projects
3. **Automation**: Automate qualification testing where possible
4. **Incremental Qualification**: Qualify tool updates incrementally

### Organizational Considerations

1. **Tool Governance**: Establish tool management processes
2. **Training**: Ensure proper tool usage through training
3. **Tool Usage Procedures**: Define standard operating procedures
4. **Tool Support**: Maintain internal expertise for qualified tools

## See Also

- [Verification Methods](/wiki/verification-methods/)
- [Structural Coverage](/wiki/structural-coverage/)
- [MC/DC Coverage](/wiki/mc-dc-coverage/)
- [Development Assurance Overview](/wiki/Development-assurance-overview/)

---

*Last updated: May 16, 2025*