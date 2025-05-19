---
title: "How DALs Are Determined and Allocated in Aviation Systems"
date: 2025-05-16
categories:
  - DO-178C
tags:
  - development assurance
  - DAL
  - safety assessment
  - requirements
excerpt: "An overview of the collaborative process for determining and allocating Development Assurance Levels (DALs) across systems, hardware, and software components"
header:
  overlay_color: "#333"
---

# How DALs Are Determined and Allocated in Aviation Systems

Development Assurance Levels (DALs) play a critical role in ensuring the safety of aviation systems. This post explains the collaborative process through which DALs are determined and allocated to various system components.

## The Collaborative Process

DAL determination and assignment to functions/items is a process that involves Systems Engineering, Systems Safety, and Hardware/Software Engineering processes. Functional requirements are developed by systems engineering (based on customer requirements and regulatory requirements). These requirements are sent to the System Safety process where they are assessed for functional failure through the applicable phases of flight.

This process assesses the impact of malfunction or loss of each function, and based on the classification of the effect of the functional failures, assigns a failure classification (Catastrophic, Hazardous, Major, Minor, No Effect). A number of safety objectives are proposed to mitigate these failure conditions, including safety requirements and DALs, which are added to the system functional requirements.

These requirements are passed back to the systems engineering process for design review and allocation to software and hardware engineering. Each software and hardware item is assigned a subset of all the requirements (which are tagged with DALs, if applicable). Each software and hardware item is then assigned the highest level DAL in the set of requirements assigned to the item.

## Iterative Design and Feedback

This process is iterative and requires collaborative design reviews and consultation between Systems Safety, Systems Engineering, Software Engineering, Hardware Engineering and potentially the Regulator before the set of requirements (with DALs) are assigned to each System, Hardware and Software item. During system and item development there are feedback loops if DAL objectives cannot be achieved or functional requirements cannot be satisfied, which may require the design and allocation to be reviewed.

## Key Stakeholders in the DAL Determination Process

- **Systems Engineering**: Develops functional requirements based on customer and regulatory needs
- **Systems Safety**: Assesses functional failures and their impacts
- **Software Engineering**: Implements requirements with appropriate assurance activities
- **Hardware Engineering**: Designs hardware components to meet assigned DALs
- **Regulators**: May provide input on critical safety assessments

## Conclusion

The DAL determination and allocation process is fundamental to aviation safety. By following this collaborative and iterative approach, aviation systems can achieve the appropriate level of safety assurance across all components while efficiently allocating development resources according to criticality.

For more detailed information on Development Assurance concepts, see our [Development Assurance Overview](/wiki/Development-assurance-overview/) wiki page.