---
title: "Planning Process in DO-178C"
excerpt: "Comprehensive guide to the planning activities required for aviation software certification"
layout: wiki
toc: true
tags: [planning, certification, process, documentation]
last_modified_at: 2025-05-16
---

# Planning Process in DO-178C

## Introduction

The planning process is a foundational element of DO-178C compliance, establishing the framework for all software development and verification activities. Effective planning is critical for successful certification, as it defines the processes, methods, and tools that will be used throughout the project lifecycle.

## Purpose and Objectives

### Regulatory Context

DO-178C Section 4 specifically addresses planning, requiring a comprehensive set of plans that define:

- How software will be developed and verified
- How compliance with certification requirements will be achieved
- How software lifecycle data will be produced and maintained
- How software quality and safety will be ensured

### Benefits of Effective Planning

1. **Certification Efficiency**: Streamlines the certification process
2. **Risk Reduction**: Identifies and mitigates risks early
3. **Process Consistency**: Ensures consistent application of methods
4. **Resource Optimization**: Allocates resources appropriately
5. **Compliance Assurance**: Establishes clear path to regulatory compliance
6. **Quality Improvement**: Defines quality assurance activities

## Required Plans

DO-178C requires several specific plans, which may be combined or separated based on project needs:

### Plan for Software Aspects of Certification (PSAC)

**Purpose**: Primary planning document that outlines the overall certification approach.

**Key Content**:
- Software overview and certification considerations
- Software lifecycle overview
- Software development and verification environments
- Software lifecycle data to be produced
- Schedule and transition criteria between processes
- Additional considerations (previously developed software, tool qualification, etc.)
- Compliance approach for each DO-178C objective

**Audience**:
- Certification authorities
- Project management
- Development and verification teams

### Software Development Plan (SDP)

**Purpose**: Defines the software development process.

**Key Content**:
- Development environment and tools
- Development standards and methods
- Requirements development process
- Design development process
- Coding standards and methods
- Integration process
- Traceability approach
- Problem reporting and resolution

**Audience**:
- Development team
- Quality assurance
- Verification team

### Software Verification Plan (SVP)

**Purpose**: Defines the verification approach and activities.

**Key Content**:
- Verification methods and procedures
- Verification environment and tools
- Reviews and analysis activities
- Testing approach and coverage criteria
- Hardware/software integration testing
- Regression testing strategy
- Independence approach
- Verification of verification tools

**Audience**:
- Verification team
- Development team
- Quality assurance
- Certification authorities

### Software Configuration Management Plan (SCMP)

**Purpose**: Defines how software artifacts will be controlled and managed.

**Key Content**:
- Configuration identification scheme
- Baselines and traceability
- Problem reporting and tracking
- Change control process
- Configuration status accounting
- Archive and retrieval procedures
- Software load control
- Software lifecycle environment control

**Audience**:
- Configuration management team
- Development and verification teams
- Quality assurance

### Software Quality Assurance Plan (SQAP)

**Purpose**: Defines how compliance with plans and standards will be assured.

**Key Content**:
- Quality assurance organization and independence
- Review and audit activities
- Standards compliance evaluation
- Process adherence monitoring
- Supplier quality assurance
- Quality records management
- Corrective action process

**Audience**:
- Quality assurance team
- Management
- Development and verification teams
- Certification authorities

## Planning Process Activities

### Initial Planning

1. **Project Assessment**: Evaluate project scope, complexity, and criticality
2. **Resource Identification**: Determine required skills, tools, and infrastructure
3. **Schedule Development**: Establish realistic timelines and milestones
4. **Risk Assessment**: Identify potential risks and mitigation strategies
5. **Certification Strategy**: Define approach for achieving certification

### Plan Development

1. **Plan Drafting**: Create initial versions of required plans
2. **Internal Review**: Review plans with stakeholders
3. **Consistency Check**: Ensure alignment between plans
4. **Certification Authority Review**: Submit plans for regulatory review
5. **Plan Finalization**: Address feedback and finalize plans

### Plan Management

1. **Plan Distribution**: Ensure plans are available to all stakeholders
2. **Training**: Educate team on plan content and requirements
3. **Compliance Monitoring**: Track adherence to plans
4. **Plan Updates**: Revise plans as needed throughout the project
5. **Impact Analysis**: Assess impact of changes on certification

## Planning by Software Level

The rigor of planning varies by software level:

### Level A Software

- Comprehensive, detailed plans
- Extensive independence requirements
- Formal review and approval process
- Detailed transition criteria
- Comprehensive tool qualification planning

### Level B Software

- Detailed plans with some simplifications
- Significant independence requirements
- Formal review and approval process
- Detailed transition criteria
- Comprehensive tool qualification planning

### Level C Software

- Moderately detailed plans
- Some independence requirements
- Semi-formal review process
- Basic transition criteria
- Simplified tool qualification planning

### Level D Software

- Simplified plans
- Minimal independence requirements
- Informal review process
- Basic transition criteria
- Minimal tool qualification planning

## Key Planning Considerations

### Transition Criteria

Transition criteria define the conditions that must be met to move from one lifecycle phase to another:

**Example Transition Criteria**:
- Requirements to Design: All requirements reviewed and approved
- Design to Implementation: Design documentation complete and reviewed
- Implementation to Testing: Code complete, reviewed, and passes static analysis
- Testing to Release: All tests passed, coverage objectives met, all problems resolved

### Independence

Plans must define how independence will be achieved for activities requiring it:

**Independence Strategies**:
- Organizational independence (separate teams)
- Personnel independence (different individuals)
- Tool independence (different tools for development and verification)

### Tool Qualification

Plans must address tool qualification needs:

**Planning Elements**:
- Tool identification and evaluation
- Qualification criteria determination
- Qualification approach and evidence
- Tool version control and configuration management

For more information, see [Tool Qualification](/wiki/tool-qualification/).

### Previously Developed Software (PDS)

When using existing software, plans must address:

**PDS Considerations**:
- Service history evaluation
- Gap analysis against current requirements
- Additional verification activities
- Configuration management approach
- Documentation requirements

## Plan Integration with System Processes

### System and Software Planning Alignment

Software plans must align with system-level plans and processes:

**Integration Points**:
- System safety assessment process
- System requirements allocation
- Hardware/software integration
- System verification activities
- Configuration management processes

### ARP4754A Alignment

For aircraft systems, software planning should align with ARP4754A processes:

**Key Relationships**:
- Development assurance levels allocation
- Requirements development process
- Validation and verification activities
- Configuration management approach
- Process assurance activities

## Common Planning Challenges

### Schedule Pressure

- **Challenge**: Unrealistic timelines affecting quality and compliance
- **Mitigation**: Risk-based planning, phased approaches, early certification authority engagement

### Resource Constraints

- **Challenge**: Insufficient skilled personnel or tools
- **Mitigation**: Training programs, tool evaluation, outsourcing strategies

### Process Complexity

- **Challenge**: Overly complex processes that impede progress
- **Mitigation**: Scalable processes, tailoring for project needs, process automation

### Regulatory Changes

- **Challenge**: Evolving regulatory requirements or interpretations
- **Mitigation**: Regular engagement with authorities, participation in industry groups

## Best Practices

### Plan Development

1. **Tailoring**: Adapt plans to project size and complexity
2. **Consistency**: Ensure alignment between all plans
3. **Clarity**: Use clear, unambiguous language
4. **Traceability**: Link plan elements to DO-178C objectives
5. **Reusability**: Design plans for potential reuse on future projects

### Plan Management

1. **Version Control**: Maintain plan history and changes
2. **Accessibility**: Make plans available to all stakeholders
3. **Training**: Ensure team understands plan requirements
4. **Compliance Tracking**: Monitor adherence to plans
5. **Regular Updates**: Review and update plans as needed

### Certification Authority Engagement

1. **Early Involvement**: Engage authorities during planning phase
2. **Clear Communication**: Clearly explain approaches and rationales
3. **Issue Resolution**: Address concerns promptly
4. **Flexibility**: Be prepared to adapt plans based on feedback
5. **Documentation**: Maintain records of all interactions

## Plan Templates and Examples

### PSAC Template Structure

```
1. Introduction
   1.1 Purpose
   1.2 Scope
   1.3 System Overview
   1.4 Software Overview

2. Software Lifecycle
   2.1 Lifecycle Processes
   2.2 Lifecycle Data
   2.3 Transition Criteria

3. Software Development
   3.1 Requirements Process
   3.2 Design Process
   3.3 Coding Process
   3.4 Integration Process

4. Software Verification
   4.1 Verification Methods
   4.2 Verification Activities
   4.3 Verification Environment
   4.4 Transition Criteria

5. Software Configuration Management
   5.1 Configuration Identification
   5.2 Baselines and Traceability
   5.3 Problem Reporting
   5.4 Change Control

6. Software Quality Assurance
   6.1 Organization and Independence
   6.2 Activities and Schedules
   6.3 Conformity Review

7. Additional Considerations
   7.1 Previously Developed Software
   7.2 Tool Qualification
   7.3 Alternative Methods
   7.4 Formal Methods

8. Compliance
   8.1 Compliance Matrix
   8.2 Compliance Strategy
```

### Example Transition Criteria

**From Requirements to Design**:
- All high-level requirements reviewed and approved
- Requirements traceability established
- Requirements-based test cases developed
- SQA review of requirements process completed
- Requirements baseline established

## Case Study: Planning for a Flight Management System

### Project Context

- Level B flight management system
- Multiple suppliers and components
- Tight certification timeline
- Mix of new and previously developed software

### Planning Approach

1. **Integrated Planning Team**:
   - Software leads from each component
   - System engineering representatives
   - Certification specialists
   - Quality assurance personnel

2. **Plan Development Strategy**:
   - Core plans developed at program level
   - Component-specific annexes for each major component
   - Supplier plans reviewed and approved by prime contractor
   - Early certification authority involvement

3. **Key Planning Decisions**:
   - Model-based development approach
   - Automated testing framework
   - Centralized configuration management
   - Phased verification approach

### Results

- Plans approved by certification authority with minimal comments
- Clear understanding of requirements across all teams
- Efficient certification process
- Successful reuse of planning approach on subsequent projects

## See Also

- [Development Assurance Overview](/wiki/Development-assurance-overview/)
- [Configuration Management](/wiki/configuration-management/)
- [Quality Assurance](/wiki/quality-assurance/)
- [Tool Qualification](/wiki/tool-qualification/)

---

*Referenced in: [Understanding Development Assurance](/2025/05/15/understanding-development-assurance/)*