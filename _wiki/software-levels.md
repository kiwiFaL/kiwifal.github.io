---
title: "Software Levels in DO-178C"
excerpt: "Understanding Development Assurance Levels (DALs) A through E in DO-178C"
layout: wiki
toc: true
tags: [certification, levels, DAL, safety]
last_modified_at: 2025-05-16
---

# Software Levels in DO-178C

## Overview

DO-178C defines five software levels, known as Development Assurance Levels (DALs), which determine the rigor required in the development and verification processes. These levels are assigned based on the potential impact of software failures on aircraft safety.

## The Five Software Levels

### Level A (Catastrophic)

**Definition**: Software whose anomalous behavior could cause or contribute to a failure resulting in a catastrophic failure condition for the aircraft.

**Examples**:
- Primary flight control systems
- Full-authority digital engine control (FADEC)
- Fly-by-wire systems without mechanical backup

**Requirements**:
- 66 verification objectives (71 with supplements)
- 100% MC/DC structural coverage
- Extensive independence in verification
- Formal methods often applied

### Level B (Hazardous)

**Definition**: Software whose anomalous behavior could cause or contribute to a failure resulting in a hazardous failure condition for the aircraft.

**Examples**:
- Flight management systems
- Navigation systems
- Certain communication systems

**Requirements**:
- 65 verification objectives
- 100% decision coverage
- Independence in many verification activities
- Formal methods sometimes applied

### Level C (Major)

**Definition**: Software whose anomalous behavior could cause or contribute to a failure resulting in a major failure condition for the aircraft.

**Examples**:
- Cabin pressurization control
- Secondary flight displays
- Weather radar systems

**Requirements**:
- 57 verification objectives
- 100% statement coverage
- Some independence in verification
- Less rigorous documentation requirements

### Level D (Minor)

**Definition**: Software whose anomalous behavior could cause or contribute to a failure resulting in a minor failure condition for the aircraft.

**Examples**:
- In-flight entertainment systems
- Passenger convenience systems
- Maintenance systems

**Requirements**:
- 28 verification objectives
- No structural coverage requirements
- Minimal independence requirements
- Simplified documentation

### Level E (No Effect)

**Definition**: Software whose anomalous behavior would have no effect on aircraft operational capability or pilot workload.

**Examples**:
- Certain maintenance data collection systems
- Ground-based analysis tools
- Non-required cabin systems

**Requirements**:
- No DO-178C objectives required
- May still require basic development processes
- Often developed to industry standards rather than DO-178C

## Verification Objectives by Level

| Verification Activity | Level A | Level B | Level C | Level D | Level E |
|----------------------|---------|---------|---------|---------|---------|
| Requirements-Based Testing | ✓ | ✓ | ✓ | ✓ | - |
| Statement Coverage | ✓ | ✓ | ✓ | - | - |
| Decision Coverage | ✓ | ✓ | - | - | - |
| MC/DC Coverage | ✓ | - | - | - | - |
| Independence | High | Medium | Low | Minimal | - |

## Level Assignment Process

The assignment of software levels follows a systematic process:

1. **Functional Hazard Assessment (FHA)**: Identify potential failure conditions
2. **System Safety Assessment (SSA)**: Determine severity of failure conditions
3. **Preliminary System Safety Assessment (PSSA)**: Allocate safety requirements to systems
4. **Software Level Assignment**: Assign appropriate DAL based on failure condition severity

For more details on this process, see [How DALs Are Determined and Allocated](/wiki/How_Are_DALs_Determined_and_Allocated/).

## Practical Considerations

### Mixed Criticality

Modern avionics often contain software components with different criticality levels. Strategies for handling mixed criticality include:

- **Partitioning**: Using hardware or software partitioning to isolate components
- **Deactivated Code**: Handling code that is not active in certain configurations
- **Service History**: Using service history to justify reduced verification for certain components

### Level Reduction Strategies

In some cases, system architecture can be designed to reduce software levels:

- **Dissimilar Redundancy**: Using different implementations to reduce common mode failures
- **Monitoring**: Adding independent monitoring to detect and mitigate failures
- **Architectural Mitigation**: Designing systems to contain failures at a lower level

## Regulatory Guidance

The FAA and EASA provide additional guidance on software level assignment:

- **AC 20-115D**: FAA Advisory Circular on Airborne Software Assurance
- **AMC 20-115D**: EASA Acceptable Means of Compliance
- **ARP4754A**: Guidelines for Development of Civil Aircraft and Systems

## See Also

- [Development Assurance Overview](/wiki/Development-assurance-overview/)
- [How DALs Are Determined and Allocated](/wiki/How_Are_DALs_Determined_and_Allocated/)
- [Verification Methods](/wiki/verification-methods/)
- [Structural Coverage](/wiki/structural-coverage/)

---

*Referenced in: [Understanding Development Assurance](/2025/05/15/understanding-development-assurance/)*