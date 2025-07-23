---
title: "Aerospace Certification Definitions"
excerpt: "Key definitions for aerospace certification, development assurance, and safety processes"
layout: wiki
toc: true
tags: [definitions, DO-178C, DO-254, certification, DAL, SOI, LOI]
last_modified_at: 2025-07-23
---

# Aerospace Certification Definitions

This page provides definitions for key terms used in aerospace certification, development assurance, and safety processes.

## Development Assurance Level (DAL)

A classification system (typically A through E) which determines the rigor of development processes based on the severity of failure conditions in combination with other system safety mitigation strategies such as architecture. Development Assurance can be applied at the system level and the item level (hardware and software).

| Level | Failure Condition | Probability | Example |
|-------|-------------------|-------------|---------|
| A     | Catastrophic      | < 10^-9     | Flight control systems |
| B     | Hazardous         | < 10^-7     | Primary navigation systems |
| C     | Major             | < 10^-5     | Secondary flight displays |
| D     | Minor             | < 10^-3     | Maintenance systems |
| E     | No Effect         | N/A         | Entertainment systems |

## Hardware Engineering

The discipline of designing, developing, and verifying electronic hardware for aerospace applications according to DO-254 standards. This includes requirements capture, design implementation, verification, validation, configuration management and hardware quality assurance activities to assure hardware performs its intended function to an acceptable level.

Key aspects include:
- Hardware requirements development
- Hardware design and implementation
- Hardware verification
- Hardware configuration management
- Hardware quality assurance

## Level of Involvement (LOI)

The degree of oversight and participation by certification authorities (like FAA or EASA) during the development process. Ranges from minimal involvement for lower-risk items to extensive involvement requiring authority approval at multiple development stages for high-risk components.

LOI factors include:
- Criticality of the system or component
- Applicant's experience and history
- Novelty of technologies or methods
- Complexity of the design

## Software Engineering

The systematic approach to developing flight-critical software per DO-178C standards. Encompasses requirements development, software architecture design, coding, integration, verification, configuration management and software quality assurance with processes scaled to assure software performs its intended function to an acceptable level.

Key processes include:
- Software planning
- Software requirements development
- Software design
- Software coding and integration
- Software verification
- Software configuration management
- Software quality assurance

## Stage of Involvement (SOI)

Defines specific development assurance milestones where certification authority review is conducted of the development processes. Involvement typically occurs during planning, development, verification and certification phases.

Common SOI reviews include:
1. **SOI-1**: Planning review (review of plans and standards)
2. **SOI-2**: Development review (review of requirements, design, and implementation)
3. **SOI-3**: Verification review (review of test procedures, results, and coverage)
4. **SOI-4**: Final review (review of final data package and certification artifacts)

## Systems Engineering

The interdisciplinary approach to designing, integrating, and managing complex aerospace systems throughout their lifecycle. Encompasses requirements development and management, architecture design, interface control, verification and validation, configuration management and quality assurance.

Key activities include:
- System requirements development
- System architecture definition
- Interface management
- System integration
- System verification and validation
- System safety assessment
- Configuration management

## System Safety

The systematic engineering discipline which assures aircraft systems achieve acceptable levels of safety through rigorous hazard identification, safety objectives, and safety verification processes.

Key processes include:
- Functional Hazard Assessment (FHA)
- Preliminary System Safety Assessment (PSSA)
- System Safety Assessment (SSA)
- Common Cause Analysis (CCA)
- Fault Tree Analysis (FTA)
- Failure Modes and Effects Analysis (FMEA)

## Related Topics

- [Development Assurance Overview](/wiki/Development-assurance-overview/) - Overview of development assurance processes
- [Software Levels](/wiki/software-levels/) - Detailed explanation of software assurance levels
- [How Are DALs Determined and Allocated](/wiki/How_Are_DALs_Determined_and_Allocated/) - Process for determining and allocating DALs

---

*This page provides foundational definitions for aerospace certification concepts. For more detailed information on specific topics, please refer to the related pages.*