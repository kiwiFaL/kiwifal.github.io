---
title: "Peer Reviews in DO-178C: Practical Implementation and Common Misconceptions"
date: 2025-05-18
categories:
  - DO-178C
  - Verification
tags:
  - peer reviews
  - software verification
  - avionics
  - certification
  - quality assurance
excerpt: "A practical examination of peer review requirements in DO-178C, clarifying common misconceptions about who needs to participate and how to implement them effectively"
header:
  overlay_color: "#333"
---

# Peer Reviews in DO-178C: Practical Implementation and Common Misconceptions

In the world of avionics software development under DO-178C, verification activities are critical to assuring software quality and safety. One of the most fundamental verification methods is the peer review. Despite its importance, there's considerable confusion about who needs to participate in these reviews and how they should be conducted. This post aims to clarify these misconceptions and provide practical guidance on implementing effective peer reviews.

## What Are Peer Reviews in DO-178C?

DO-178C calls what we call "validation" in the systems engineering space "verification". All analysis, reviews and testing is verification, there is no "validation" in DO-178C at least this term is not used, bu the activity is. This is a verification process called "peer-review". What they are is explicit in the name - a Peer (a software engineer) reviews (checks) if an item (requirement, model, code, test case, test result, etc) or group of items are correct per the required plans and standrds. Depending on the DAL this peer must be independent from the software engineer who developed it. 





So, to verify HLRs implement all and only the functionality in the system requirements, or LLRs implement functionality in the HLRs, or Code to the LLRs, a peer is reviewing these items. This is a software engineer reviewing the item against the higher level items and the applicable plans and standards for the item under review. It is not: 

1. A safety review. There is no requirement for Safety to be involved.
2. A systems engineering review. There is no requirement for Systems to be involved.
3. A quality review. SQA are explicity restricted from participating in these reviews as they must be independent to conduct their own QA audits on these activities. They may attend to observe the process. 

To make these reviews as efficient and (i would argue) effective as possible there should be only one experienced and qualified software engineer conducting these reviews. Doing it by committee can be inefficient and can lead to a lesser quality review. "A camel is a horse designed by committee."

Per DO-178C, peer reviews are:

1. A methodical examination of software lifecycle data
2. Performed by one or more qualified individuals
3. Intended to identify defects and suggest improvements

These reviews apply to various software artifacts including High-Level Requirements (HLR), Low-Level Requirements (LLR), design models, source code, and test cases/procedures.

## The Minimum Peer Review Requirement: Just One Peer

Im going to repeat this again as I see it as one the big overheads in doing DO-178C, the missconception DO-178C peer reviews require a large, cross-functional team. In reality, the standard only requires a minimum of one peer reviewer. This peer must be:

1. Another software engineer (May require independance, but independance is recommended)
2. Knowledgeable in the domain under review
3. Qualified to perform the review

That's it. There is no certification requirement for other domains (such as Systems Engineering, Hardware, or Safety) to be involved in standard software peer reviews. This streamlined approach recognizes software engineers with domain expertise are often the best positioned to identify issues in software artifacts.

## Who Should Participate in Peer Reviews?

The minimum requirement is simple: one qualified software engineer who wasn't the author of the artifact being reviewed. However, depending on the criticality and complexity of the software, you might choose to include:

1. **Required**: At least one software engineer with domain knowledge (the peer)
2. **Optional**: Additional software engineers with specialized expertise
3. **Optional**: Technical leads or software architects for complex items

SQA may optionally attend peer reviews to ensure the process is being followed correctly, but their attendance is not mandatory for every review. Their role is to verify the review process rather than perform the technical review itself.

## The Special Case: Derived Requirements

While standard software artifacts only require review by software peers, [derived requirements](/2025/05/18/derived-requirements-in-do-178c/) (those without parent requirements) represent a special case. Since these requirements introduce functionality not specified at the system level, they must be:

1. Identified as derived
2. Passed to Systems Engineering for review
3. Passed to Safety Engineering for safety impact analysis
4. Formally accepted by both Systems and Safety

This is the one case where other domains must be involved in reviewing software artifacts, as specified in DO-178C objectives A2.2 and A2.5.

## Common Misconceptions About Peer Reviews

### Misconception 1: "Systems Engineers Must Participate in All Requirements Reviews"

**Reality**: Systems Engineers are only required to review [derived requirements](/2025/05/18/derived-requirements-in-do-178c/). For all other software requirements, a qualified software peer is sufficient.

### Misconception 2: "Safety Engineers Must Approve All Software Design Decisions"

**Reality**: Safety Engineers only need to assess [derived requirements](/2025/05/18/derived-requirements-in-do-178c/). Other software design decisions can be reviewed by software peers alone.

### Misconception 3: "SQA Must Attend Every Peer Review"

**Reality**: SQA may attend reviews, but their attendance is optional. They verify the review process is followed, not necessarily each individual review.

### Misconception 4: "More Reviewers Always Means Better Reviews"

**Reality**: While additional perspectives can be valuable, having too many reviewers can lead to inefficiency and diffusion of responsibility. Quality of reviewers is more important than quantity.

### Misconception 5: "Peer Reviews Must Be Formal Meetings"

**Reality**: DO-178C doesn't specify the format of peer reviews. They can be conducted through various means including in-person meetings, document reviews with comments, or tool-based reviews.

## Best Practices for Effective Peer Reviews

### 1. Select the Right Reviewer

Choose a peer with appropriate domain knowledge and experience. The reviewer should understand both the technical aspects and the operational context of the software.

### 2. Provide Sufficient Context

Ensure the reviewer has access to relevant information including requirements, design constraints, and interface specifications to make informed judgments.

### 3. Use Checklists

Develop domain-specific checklists to guide reviewers and ensure consistent evaluation across different artifacts.

#### Why Checklists Matter in DO-178C Reviews

Checklists play a crucial role in the peer review process for several important reasons:

1. **Consistency**: Checklists ensure that all reviewers apply the same criteria regardless of who performs the review, leading to more consistent verification results across the project.

2. **Completeness**: They help prevent oversight of critical aspects that must be verified, reducing the risk of missing important verification objectives required by DO-178C.

3. **Efficiency**: Well-designed checklists focus reviewer attention on known problem areas and common pitfalls, making better use of limited review time.

4. **Evidence**: Completed checklists provide tangible evidence that specific aspects were examined, which supports certification activities and audits.

5. **Knowledge Transfer**: They capture organizational knowledge about common issues and best practices, helping less experienced reviewers perform more effective reviews.

6. **Objectivity**: Checklists reduce the influence of subjective judgment by providing concrete criteria for evaluation.

For maximum effectiveness, checklists should be tailored to specific artifact types (requirements, design, code, test cases) and should evolve over time as new issues or patterns are identified. Many organizations maintain separate checklists for different verification objectives outlined in DO-178C, ensuring that each review directly supports specific certification requirements.

### 4. Focus on Critical Areas

Prioritize review effort on high-risk areas, complex algorithms, and safety-critical functions rather than trying to review everything with equal depth.

### 5. Document Review Findings Clearly

Record defects, suggestions, and resolutions in a clear, traceable manner that can be used as evidence for certification.

### 6. Establish Clear Review Criteria

Define what constitutes a "pass" for the review and what issues must be addressed before the artifact can be considered verified.

### 7. Train Reviewers

Ensure reviewers understand both the technical domain and effective review techniques to maximize the value of their input.

## The Value of Streamlined Peer Reviews

By understanding that DO-178C only requires one qualified peer for most reviews, organizations can implement more efficient verification processes without compromising quality. This approach:

1. **Reduces unnecessary overhead**: Avoids involving personnel who don't add technical value
2. **Speeds up the development process**: Eliminates scheduling conflicts with multiple departments
3. **Focuses expertise where needed**: Ensures the right people review the right artifacts
4. **Maintains compliance**: Satisfies DO-178C objectives while optimizing resources

## Conclusion

Peer reviews are a critical verification activity in DO-178C, but they don't need to be bureaucratically complex. For most software artifacts, a single qualified peer reviewer is sufficient to meet certification requirements. The exception is [derived requirements](/2025/05/18/derived-requirements-in-do-178c/), which must be reviewed by Systems and Safety Engineering due to their potential impact on system safety.

By implementing streamlined, focused peer reviews with appropriate participants, avionics software developers can maintain high quality standards while avoiding unnecessary overhead in the certification process. Remember that the goal is effective error detection, not simply checking a box or gathering signatures from every department.

Understanding these nuances of DO-178C peer review requirements can help organizations develop more efficient verification processes while maintaining full compliance with certification standards.