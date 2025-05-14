---
title: "MC/DC Coverage"
excerpt: "Modified Condition/Decision Coverage requirements and implementation in DO-178C"
layout: wiki
toc: true
tags: [verification, coverage, testing, level-a]
last_modified_at: 2025-05-14
---

# Modified Condition/Decision Coverage (MC/DC)

## Definition

Modified Condition/Decision Coverage (MC/DC) is a structural coverage criterion required for Level A software under DO-178C. It ensures that every condition in a decision has been shown to independently affect the outcome of the decision.

## Requirements

### When MC/DC is Required
- **Level A software**: Mandatory requirement
- **Level B software**: Decision coverage sufficient (MC/DC not required)
- **Tool qualification**: Often required for development tools generating Level A code

## Key Concepts

### What MC/DC Tests
1. **Every condition** in a decision takes on both true and false values
2. **Every decision** takes on both true and false outcomes
3. **Each condition** independently affects the decision outcome

### Example
```c
if ((A || B) && C) {
    // Level A code
}
```

**MC/DC Test Cases Required:**
1. A=1, B=0, C=1 (decision true, A affects outcome)
2. A=0, B=1, C=1 (decision true, B affects outcome)  
3. A=1, B=1, C=0 (decision false, C affects outcome)
4. A=0, B=0, C=1 (decision false, A/B affects outcome)

## Implementation Challenges

### Complex Conditions
- **Nested conditions**: Require careful test case design
- **Multiple operators**: Each operator creates additional test points
- **Coupled conditions**: Variables that cannot vary independently

### Tool Support
- **Coverage analyzers**: Required for accurate measurement
- **Test generation**: Automated tools can help generate MC/DC test cases
- **Verification**: Manual verification often needed for complex cases

## Practical Considerations

### Best Practices
1. **Design for testability**: Keep boolean expressions simple
2. **Minimize nesting**: Reduce complexity where possible
3. **Document test rationale**: Explain how each test case achieves MC/DC
4. **Use qualified tools**: Ensure coverage tools are appropriately qualified

### Common Pitfalls
- **Infeasible paths**: Some test cases may be impossible due to coupling
- **Tool limitations**: Not all tools handle complex expressions correctly
- **Manual calculation errors**: Hand-calculating MC/DC is error-prone

## Related Standards

### DO-178C References
- **Section 6.4.4.2**: Verification of Source Code
- **Table A-7**: Software Verification Process Objectives
- **Annex A**: Structural Coverage Analysis

### Tool Qualification
Tools used for MC/DC analysis typically require:
- **TQL-1**: Tools whose output is not verified (if used for compliance)
- **Tool qualification data**: Configuration management, verification evidence

## Integration with Other Activities

### Requirements-Based Testing
MC/DC complements (does not replace) requirements-based testing:
- **Requirements coverage**: Ensures all requirements are tested
- **Structural coverage**: Ensures all code paths are exercised

### Code Reviews
MC/DC analysis often reveals:
- **Dead code**: Unreachable statements
- **Logic errors**: Incorrect boolean expressions
- **Missing error handling**: Unhandled edge cases

## Examples by Domain

### Flight Control Systems
```c
// Typical flight control decision
if ((airspeed > V_stall) && (flaps_extended || gear_up)) {
    enable_autopilot();
}
```

### Engine Control
```c
// Engine protection logic
if ((temp > MAX_TEMP) || (pressure < MIN_PRESSURE) || emergency_stop) {
    shutdown_engine();
}
```

## Tools and Techniques

### Commercial Tools
- **LDRA Testbed**: Comprehensive coverage analysis
- **VectorCAST**: Automated test generation with MC/DC
- **IBM Rational Test**: Integrated development environment support

### Open Source Alternatives
- **gcov**: Basic coverage (decision level)
- **LLVM Coverage**: Advanced analysis capabilities
- **Custom analyzers**: Often developed for specific projects

## Compliance Evidence

### Required Artifacts
1. **Coverage reports**: Showing achieved MC/DC percentages
2. **Test cases**: Demonstrating independent effect of conditions
3. **Analysis reports**: Explaining any uncovered code
4. **Tool qualification**: Evidence for coverage analysis tools

### Certification Authority Expectations
- **100% MC/DC**: Expected for Level A software (with justified exceptions)
- **Traceability**: Clear link between test cases and coverage points
- **Independence**: Evidence that conditions truly affect decisions independently

## See Also

- [Software Levels](/wiki/software-levels/) - When MC/DC is required
- [Tool Qualification](/wiki/tool-qualification/) - Qualifying coverage tools
- [Verification Methods](/wiki/verification-methods/) - Other verification techniques
- [Structural Coverage](/wiki/structural-coverage/) - Broader coverage concepts

---

*Referenced in: [Mastering MC/DC Coverage in Practice](/2025/05/14/mastering-mc-dc-coverage/)*