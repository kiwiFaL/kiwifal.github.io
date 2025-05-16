---
title: "Multi-Core Compliance to AC 20-193: Navigating Certification Challenges"
date: 2025-05-16
categories:
  - DO-178C
  - Certification
tags:
  - multi-core processing
  - AC 20-193
  - certification
  - avionics
  - safety-critical
excerpt: "An exploration of the risks, compliance requirements, and technical challenges associated with implementing multi-core processors in aviation systems under AC 20-193"
header:
  overlay_color: "#333"
---

# Multi-Core Compliance to AC 20-193: Navigating Certification Challenges

Multi-core processors have become ubiquitous in consumer electronics, but their adoption in aviation systems has been cautious and methodical. This is primarily due to the unique challenges they present for safety-critical applications. The FAA's Advisory Circular AC 20-193 provides guidance on how to safely implement multi-core processing in aviation systems. This post explores the risks, compliance requirements, and technical challenges associated with multi-core compliance.

## The Multi-Core Processing Challenge

Traditionally, aviation systems have utilized single-core processors where the behavior is predictable and deterministic. When transitioning to multi-core architectures, several fundamental challenges emerge:

1. **Non-deterministic execution**: Applications executing concurrently on multiple cores may result in unpredictable timing and behavior.
2. **Resource contention**: Shared resources (memory, buses, caches) can create interference between cores.
3. **Timing conflicts**: Processing an application across multiple cores can lead to timing inconsistencies.

These challenges can potentially result in systems not performing their intended functions, which is unacceptable in safety-critical aviation applications.

## Understanding AC 20-193

AC 20-193 evolved from the Certification Authorities Software Team (CAST) position paper CAST-32A, which initially addressed multi-core processing concerns. The advisory circular provides a structured approach to certifying systems that utilize multi-core processors.

Key objectives of AC 20-193 include:

### Planning and Architecture

- **MCP_Planning_1**: Comprehensive planning for multi-core usage
- **MCP_Planning_2**: Identification and management of shared resources

### Resource Usage Analysis

- **MCP_Resource_Usage_1**: Identification of critical configuration settings
- **MCP_Resource_Usage_3**: Comprehensive list of interference channels
- **MCP_Resource_Usage_4**: Worst-case resource usage analysis

### Software Implementation

- **MCP_Software_1**: Worst-case execution time analysis
- **MCP_Software_2**: Management of on-chip data and control communication resources

### Error Handling

- **MCP_Error_Handling_1**: Analysis of within-MCP failures and their effect on safety objectives

### Documentation

- **MCP_Acc.Summary_1**: Augmented Software Accomplishment Summary (SAS) with multi-core specific considerations

## The Single-Core Dilemma

The simplest approach to avoid the complexities of AC 20-193 compliance is to disable all but one core in a multi-core processor. This strategy effectively turns a multi-core processor into a single-core processor, eliminating the need to address interference channels, resource contention, and other multi-core specific challenges.

However, this approach has limitations, you are effectively turning your computer into a single cylinder vehicle. With more and more data needing to processed to bring more functionaility, safety and autonomy to aviation, single core perofomace is at its maxmimum and indiviual cores are not getting faster, performance increases come from more cores and multi-core applications. There is even more need for multi-core as aerospace embrasses Machine Learning.  

This market reality means avionics developers must either:
   - Use older, potentially obsolete single-core processors with limited performance and support
   - Use modern multi-core processors with all but one core disabled, wasting potential computing resources
   - Embrace multi-core processing and address the certification challenges of AC 20-193

This hardware availability constraint is pushing the industry toward multi-core adoption, making compliance with AC 20-193 increasingly important for future avionics development.

## Multi-Core Processing Architectures

Several architectural approaches can be used to implement multi-core processing in aviation systems:

### Symmetric Multi-Processing (SMP)

In SMP, a single operating system controls the execution of processes on all cores and may dynamically allocate sections of processes to run in parallel on separate cores. This approach offers flexibility but introduces significant certification challenges due to its dynamic nature.

### Bound Multi-Processing (BMP)

BMP extends the SMP architecture by allowing developers to bind any process and all its associated threads to a specific core while using a common operating system across all cores. This approach provides more determinism than pure SMP while still leveraging multiple cores.

### Restricted Multi-Core Usage

A common approach in aviation is to implement a restricted form of multi-core processing where:

1. The primary application runs on a single core
2. Secondary cores are used for limited, well-defined functions
3. Time and space partitioning ensures no resource conflicts
4. The Real-Time Operating System (RTOS) strictly controls core access and scheduling

This approach significantly reduces certification complexity while still providing some benefits of multi-core architectures.

## Technical Challenges and Solutions

### Interference Channels

Interference channels are pathways through which activities on one core can affect the behavior of applications on another core. These include:

- Shared caches
- Memory controllers
- On-chip networks
- I/O devices

Identifying and mitigating these interference channels is crucial for certification. Solutions include:

- Cache partitioning
- Memory bandwidth allocation
- Temporal separation of tasks
- Core scheduling that prevents simultaneous access to shared resources

### Determinism and Predictability

Ensuring deterministic behavior in multi-core systems requires:

1. **Bounded execution times**: Establishing worst-case execution time for all software components
2. **Resource monitoring**: Implementing mechanisms to detect and manage resource conflicts
3. **Partitioning**: Using time and space partitioning to isolate critical functions
4. **Scheduling**: Implementing deterministic scheduling algorithms that prevent timing conflicts

### RTOS Considerations

The Real-Time Operating System plays a critical role in multi-core compliance:

- **ARINC 653 compliance**: Providing deterministic scheduling, partitioning, and error handling
- **Core management**: Controlling which tasks run on which cores and when
- **Resource allocation**: Managing access to shared resources
- **Monitoring**: Detecting unauthorized core activities or resource conflicts

## Practical Approaches to Compliance

### Core Isolation

One practical approach is to isolate cores and their functions:

1. Bind the primary application to a single core
2. Use additional cores for specific, limited functions (like health monitoring)
3. Ensure that when the primary application is running, other cores are either idle or performing non-interfering tasks
4. Implement strict time separation between core activities

### Time and Space Partitioning

Effective partitioning strategies include:

1. **Temporal partitioning**: Ensuring that potentially interfering tasks never execute simultaneously
2. **Spatial partitioning**: Allocating dedicated memory and resources to different cores
3. **Resource budgeting**: Assigning fixed resource quotas to each core
4. **Interference mitigation**: Implementing mechanisms to detect and prevent resource conflicts

### Verification and Validation

Comprehensive testing is essential for multi-core compliance:

1. **Worst-case scenario testing**: Verifying system behavior under maximum resource contention
2. **Interference testing**: Deliberately creating resource conflicts to validate mitigation mechanisms
3. **Long-duration testing**: Ensuring that timing issues don't emerge over extended operation
4. **Fault injection**: Validating error detection and handling mechanisms

## Conclusion

Multi-core processing offers significant performance benefits for aviation systems, but these advantages come with substantial certification challenges. AC 20-193 provides a structured framework for addressing these challenges, but implementation requires careful planning, architecture, and verification.

By understanding the risks, compliance requirements, and technical challenges associated with multi-core processing, developers can successfully navigate the certification process while leveraging the benefits of modern processor architectures. The key is finding the right balance between performance gains and deterministic behavior, ensuring that safety remains the paramount concern in all design decisions.

As aviation systems continue to evolve, including embrassing Machine Learning and AI, multi-core processing will play an increasingly important role, making compliance with AC 20-193 an essential skill for avionics developers and certification specialists.