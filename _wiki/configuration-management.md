---
title: "Configuration Management in DO-178C"
excerpt: "Comprehensive guide to software configuration management practices for aviation software certification"
layout: wiki
toc: true
tags: [configuration management, CM, version control, baselines, certification]
last_modified_at: 2025-05-16
---

# Configuration Management in DO-178C

## Introduction

Software Configuration Management (SCM) is a critical discipline in DO-178C that ensures the integrity, traceability, and control of software artifacts throughout the development lifecycle. Effective configuration management provides assurance that the software delivered for certification is the same software that was verified and that will be deployed on the aircraft.

## Purpose and Objectives

### Regulatory Requirements

DO-178C Section 7 specifically addresses configuration management, requiring processes to:

- Identify configuration items
- Establish and maintain configuration baselines
- Control changes to configuration items
- Track and record change implementation
- Ensure configuration status accounting
- Evaluate changes for impact on safety and certification
- Maintain archive and retrieval capabilities
- Control the software development environment

### Benefits of Effective Configuration Management

1. **Integrity Assurance**: Ensures software integrity throughout development
2. **Change Control**: Manages changes in a controlled manner
3. **Traceability**: Maintains relationships between artifacts
4. **Reproducibility**: Enables recreation of any software build
5. **Audit Support**: Provides evidence for certification reviews
6. **Problem Management**: Facilitates tracking and resolution of issues

## Configuration Management Activities

### Configuration Identification

The process of identifying and documenting the characteristics of configuration items and their relationships:

**Configuration Items Typically Include**:
- Software requirements
- Design documents
- Source code
- Object code
- Test cases and procedures
- Test results
- Tool qualification data
- Development environment components
- Supporting documentation

**Identification Methods**:
- Unique identifiers for each item
- Version numbering schemes
- Status indicators (draft, reviewed, approved)
- Relationship mapping between items

### Configuration Control

The process of managing changes to configuration items:

**Change Control Process**:
1. **Change Request**: Document proposed change
2. **Impact Analysis**: Assess impact on other items and certification
3. **Review and Approval**: Evaluate change by appropriate authorities
4. **Implementation**: Make the approved change
5. **Verification**: Verify the change was implemented correctly
6. **Documentation**: Update affected documentation

**Change Control Board (CCB)**:
- Cross-functional team reviewing changes
- Representation from development, verification, quality assurance
- Authority to approve or reject changes
- Ensures proper impact assessment

### Configuration Status Accounting

The recording and reporting of configuration item information:

**Status Information Includes**:
- Current approved configuration
- Status of proposed changes
- Implementation status of approved changes
- Differences between baselines
- Problem report status

**Reporting Mechanisms**:
- Status reports
- Configuration audit results
- Traceability matrices
- Change history logs

### Configuration Audits

Formal examinations to verify compliance with configuration management processes:

**Functional Configuration Audit (FCA)**:
- Verifies that the software performs according to requirements
- Confirms test results match expected outcomes
- Ensures all requirements have been verified

**Physical Configuration Audit (PCA)**:
- Verifies that software documentation matches the delivered software
- Confirms all required artifacts are complete and consistent
- Ensures configuration management records are accurate

### Problem Reporting and Resolution

The process of documenting, tracking, and resolving software problems:

**Problem Report Information**:
- Problem description and severity
- Affected configuration items
- Analysis results
- Proposed solution
- Verification of solution
- Closure criteria

**Problem Resolution Process**:
1. **Identification**: Document the problem
2. **Analysis**: Determine cause and impact
3. **Resolution**: Develop and implement solution
4. **Verification**: Confirm problem is resolved
5. **Closure**: Update status and documentation

## Configuration Management by Software Level

The rigor of configuration management varies by software level:

### Level A and B Software

- Comprehensive configuration management
- Formal change control process
- Detailed problem reporting and tracking
- Formal configuration audits
- Strict environment control

### Level C Software

- Comprehensive configuration management
- Semi-formal change control process
- Detailed problem reporting and tracking
- Configuration audits with some simplifications
- Environment control with some flexibility

### Level D Software

- Basic configuration management
- Simplified change control process
- Basic problem reporting and tracking
- Informal configuration audits
- Basic environment control

## Configuration Management Planning

### Software Configuration Management Plan (SCMP)

The SCMP defines the configuration management approach for the project:

**Key SCMP Content**:
- CM organization and responsibilities
- Configuration identification scheme
- Configuration control procedures
- Baseline management approach
- Status accounting methods
- CM audits and reviews
- Tool and environment control
- Supplier CM requirements

**SCMP Development Considerations**:
- Software level and complexity
- Development methodology
- Team distribution and size
- Tool capabilities
- Supplier involvement

### Baselines

Formally reviewed and agreed-upon specifications or products that serve as the basis for further development:

**Typical Baselines**:
- **Requirements Baseline**: Approved software requirements
- **Design Baseline**: Approved software design
- **Development Baseline**: Approved source code
- **Verification Baseline**: Approved test cases and procedures
- **Release Baseline**: Verified software ready for delivery

**Baseline Management**:
- Formal approval process
- Controlled access
- Change impact analysis
- Rebaselining criteria
- Baseline comparison capabilities

## Configuration Management Tools and Infrastructure

### Version Control Systems

Tools that manage changes to source code and documents:

**Capabilities**:
- File versioning
- Branching and merging
- Access control
- History tracking
- Difference analysis

**Common Tools**:
- Git
- Subversion
- Perforce
- IBM Rational ClearCase

### Change Management Systems

Tools that track change requests and problem reports:

**Capabilities**:
- Change request tracking
- Workflow management
- Approval routing
- Status reporting
- Traceability to requirements

**Common Tools**:
- JIRA
- IBM Rational ClearQuest
- Bugzilla
- Azure DevOps

### Build Management Systems

Tools that automate the software build process:

**Capabilities**:
- Automated builds
- Dependency management
- Build verification
- Build artifact management
- Build environment control

**Common Tools**:
- Jenkins
- Bamboo
- Azure DevOps
- GitLab CI

### Integrated CM Environments

Comprehensive tools that combine multiple CM functions:

**Capabilities**:
- Requirements management
- Version control
- Change management
- Build management
- Release management

**Common Tools**:
- IBM Rational Team Concert
- Siemens Polarion
- PTC Integrity
- Atlassian Suite

## Tool Qualification Considerations

When using tools for configuration management:

- **Qualification Need**: Assess if tool qualification is required
- **Qualification Level**: Typically Criteria 3, TQL-5
- **Qualification Approach**: Validate tool outputs through reviews
- **Alternative Approaches**: Consider manual verification of tool outputs

For more information, see [Tool Qualification](/wiki/tool-qualification/).

## Environment Control

### Development Environment Control

Ensuring the integrity of the software development environment:

**Control Mechanisms**:
- Environment configuration documentation
- Tool version control
- Installation verification
- Access control
- Change management

**Environment Components**:
- Operating systems
- Compilers and linkers
- Development tools
- Test tools
- Libraries and frameworks

### Software Load Control

Ensuring the integrity of software loaded onto target hardware:

**Control Mechanisms**:
- Load procedures
- Verification of loaded software
- Hardware/software compatibility checks
- Configuration identification
- Load records

## Supplier Management

### Supplier CM Requirements

Ensuring suppliers follow appropriate CM processes:

**Key Requirements**:
- CM plan compliance
- Artifact delivery specifications
- Problem reporting procedures
- Change control integration
- Baseline synchronization

**Oversight Mechanisms**:
- Supplier audits
- Artifact reviews
- Process assessments
- Joint CCB participation

## Common Challenges

### Distributed Development

- **Challenge**: Maintaining CM consistency across multiple locations
- **Mitigation**: Centralized CM tools, clear procedures, regular synchronization

### Tool Integration

- **Challenge**: Ensuring consistent information across multiple tools
- **Mitigation**: Integration frameworks, automated synchronization, data validation

### Legacy Systems

- **Challenge**: Applying modern CM to legacy software
- **Mitigation**: Incremental approach, reverse engineering, tool adaptation

### Agile Development

- **Challenge**: Balancing agility with rigorous CM
- **Mitigation**: Automated CM processes, continuous integration, tailored procedures

## Best Practices

### CM Process Design

1. **Scalability**: Design processes that scale with project size
2. **Automation**: Automate repetitive CM tasks
3. **Integration**: Integrate CM with development processes
4. **Traceability**: Maintain bidirectional traceability
5. **Metrics**: Establish CM effectiveness metrics

### CM Implementation

1. **Training**: Ensure team understands CM requirements
2. **Tool Selection**: Choose appropriate tools for project needs
3. **Process Documentation**: Create clear CM procedures
4. **Roles and Responsibilities**: Define clear CM roles
5. **Regular Audits**: Verify CM process compliance

### CM for Certification

1. **Evidence Organization**: Structure CM data for certification
2. **Authority Engagement**: Discuss CM approach with certification authorities
3. **Compliance Mapping**: Link CM activities to DO-178C objectives
4. **Gap Analysis**: Identify and address CM weaknesses
5. **Continuous Improvement**: Refine CM processes based on lessons learned

## Case Study: CM for a Flight Control System

### Project Context

- Level A flight control software
- Multiple development teams
- Frequent requirement changes
- Tight certification timeline

### CM Implementation

1. **Integrated Toolchain**:
   - IBM DOORS for requirements management
   - Git for version control with strict branching model
   - JIRA for change and problem management
   - Jenkins for automated builds and verification

2. **Process Enhancements**:
   - Automated traceability between artifacts
   - Digital signatures for baseline approvals
   - Automated impact analysis for changes
   - Daily configuration status reports

3. **Certification Approach**:
   - CM evidence packages aligned with DO-178C objectives
   - Regular CM audits with documented results
   - Certification authority involvement in major baseline reviews
   - Comprehensive CM metrics and trend analysis

### Results

- Zero configuration-related findings during certification
- 30% reduction in change implementation time
- Improved problem resolution efficiency
- Successful reuse of CM approach on subsequent projects

## See Also

- [Planning Process](/wiki/planning-process/)
- [Quality Assurance](/wiki/quality-assurance/)
- [Requirements Traceability](/wiki/requirements-traceability/)
- [Development Assurance Overview](/wiki/Development-assurance-overview/)

---

*Referenced in: [Understanding Development Assurance](/2025/05/15/understanding-development-assurance/)*