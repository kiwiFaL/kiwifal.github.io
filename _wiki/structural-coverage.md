---
title: "Structural Coverage in DO-178C"
excerpt: "Understanding code coverage requirements and techniques for aviation software certification"
layout: wiki
toc: true
tags: [verification, coverage, testing, certification]
last_modified_at: 2025-05-16
---

# Structural Coverage in DO-178C

## Introduction

Structural coverage analysis is a critical verification activity in DO-178C that ensures test cases adequately exercise the software structure. It serves as an objective measure of test completeness and helps identify untested code segments that might contain undetected errors.

## Purpose and Objectives

### Primary Objectives

1. **Verify Requirements-Based Test Completeness**: Confirm that requirements-based tests exercise the code structure adequately
2. **Identify Untested Code**: Discover code segments not executed during testing
3. **Detect Unintended Functions**: Identify code that cannot be traced to requirements
4. **Verify Absence of Dead Code**: Ensure all code is reachable and serves a purpose

### Regulatory Context

DO-178C Table A-7 specifies structural coverage objectives based on software level:

| Software Level | Statement Coverage | Decision Coverage | MC/DC Coverage | Data & Control Coupling |
|----------------|-------------------|-------------------|----------------|------------------------|
| Level A        | Required          | Required          | Required       | Required               |
| Level B        | Required          | Required          | Not Required   | Required               |
| Level C        | Required          | Not Required      | Not Required   | Not Required           |
| Level D        | Not Required      | Not Required      | Not Required   | Not Required           |
| Level E        | Not Required      | Not Required      | Not Required   | Not Required           |

## Coverage Types

### Statement Coverage

**Definition**: Every executable statement in the program has been executed at least once.

**Example**:
```c
void process_data(int value) {
    if (value > 0) {
        process_positive(value);  // Statement 1
    } else {
        process_negative(value);  // Statement 2
    }
    log_processing(value);        // Statement 3
}
```

To achieve 100% statement coverage, test cases must execute both the positive and negative branches.

**Limitations**:
- Does not verify decision outcomes
- Cannot detect missing decision paths
- Insufficient for higher criticality software

### Decision Coverage

**Definition**: Every decision in the program has taken all possible outcomes at least once.

**Example**:
```c
bool validate_input(int value, int min, int max) {
    if (value >= min && value <= max) {  // Decision
        return true;                     // Statement 1
    }
    return false;                        // Statement 2
}
```

To achieve 100% decision coverage:
- Test case 1: `value` within range (decision = true)
- Test case 2: `value` outside range (decision = false)

**Limitations**:
- Does not verify that each condition independently affects the outcome
- Cannot detect certain logic errors in complex conditions

### Modified Condition/Decision Coverage (MC/DC)

**Definition**: Every condition in a decision has been shown to independently affect the decision outcome.

**Example**:
```c
bool activate_system(bool sensor1_ok, bool sensor2_ok, bool power_available) {
    return (sensor1_ok || sensor2_ok) && power_available;
}
```

To achieve MC/DC coverage, test cases must demonstrate that each condition independently affects the outcome:

| Test | sensor1_ok | sensor2_ok | power_available | Result | Demonstrates |
|------|------------|------------|-----------------|--------|--------------|
| 1    | true       | false      | true            | true   | sensor1_ok affects outcome |
| 2    | false      | true       | true            | true   | sensor2_ok affects outcome |
| 3    | true       | true       | false           | false  | power_available affects outcome |
| 4    | false      | false      | true            | false  | (sensor1_ok OR sensor2_ok) affects outcome |

For more details on MC/DC, see [MC/DC Coverage](/wiki/mc-dc-coverage/).

### Data and Control Coupling Coverage

**Definition**: Verification that data passed between components is correctly used and that called components are executed.

**Data Coupling**: Verifies that data passed between components is correctly defined and used.
**Control Coupling**: Verifies that components called by other components are executed.

**Example**:
```c
// Component A
void calculate_parameters(float input, float* result1, float* result2) {
    *result1 = input * 2.5;
    *result2 = input * input;
}

// Component B
void process_flight_data(float sensor_input) {
    float parameter1, parameter2;
    calculate_parameters(sensor_input, &parameter1, &parameter2);
    
    if (parameter1 > THRESHOLD) {
        adjust_control_surfaces(parameter1);
    }
    
    log_data(parameter2);
}
```

Data and control coupling coverage would verify:
- `calculate_parameters` is called from `process_flight_data`
- Parameters are correctly passed and received
- Return values are correctly used

## Implementation Techniques

### Instrumentation Methods

#### Source Code Instrumentation
- Adds tracking code to source before compilation
- Provides detailed coverage information
- May affect timing and performance

#### Object Code Instrumentation
- Modifies compiled code to track execution
- Less impact on timing
- May be less precise for complex optimizations

#### Hardware-Assisted Monitoring
- Uses processor trace capabilities
- Minimal impact on execution
- Requires specialized hardware support

### Coverage Analysis Process

1. **Instrument Code**: Add tracking mechanisms to source or object code
2. **Execute Test Cases**: Run requirements-based tests
3. **Collect Coverage Data**: Record execution paths
4. **Analyze Results**: Identify coverage gaps
5. **Address Gaps**: Either add tests or justify uncovered code

## Handling Coverage Gaps

### Types of Coverage Gaps

1. **Untested Code**: Code not executed by any test case
2. **Partially Tested Decisions**: Decisions where not all outcomes are tested
3. **Partially Tested MC/DC**: Conditions that don't independently affect outcomes
4. **Deactivated Code**: Code intentionally not executed in certain configurations

### Resolution Strategies

#### Additional Testing
- Develop additional test cases to cover gaps
- Focus on requirements-based scenarios that exercise uncovered code

#### Analysis and Justification
- Demonstrate infeasibility of certain paths
- Provide rationale for deactivated code
- Document defensive programming constructs

#### Code Refactoring
- Simplify complex conditions
- Remove unreachable code
- Improve testability

## Tool Support

### Coverage Analysis Tools

- **LDRA Testbed**: Comprehensive coverage analysis for all DO-178C levels
- **VectorCAST**: Automated test generation and coverage analysis
- **Rapita Systems RVS**: Timing and coverage analysis
- **GCov/LCOV**: Open-source coverage tools (limited DO-178C support)

### Tool Qualification Considerations

Coverage tools typically require qualification under DO-330 criteria:
- **TQL-5**: Tools that could fail to detect errors in verification process
- **Tool Qualification Plans**: Define qualification approach
- **Validation Testing**: Ensure tool correctly identifies coverage

For more information, see [Tool Qualification](/wiki/tool-qualification/).

## Common Challenges

### Optimizing Compiler Effects

- **Dead Code Elimination**: Compiler removes unreachable code
- **Function Inlining**: Functions expanded at call site
- **Loop Unrolling**: Loops expanded into sequential code
- **Conditional Compilation**: Code varies based on build configuration

**Mitigation Strategies**:
- Use qualified compilers
- Control optimization levels
- Perform object code verification

### Untestable Code Patterns

- **Error Handling for Impossible Conditions**: Code that handles theoretically impossible scenarios
- **Defensive Programming**: Extra checks that should never fail
- **Hardware Fault Handling**: Code that responds to hardware failures

**Approach**:
- Document rationale for untested code
- Use analysis to demonstrate safety
- Consider architectural changes to improve testability

## Best Practices

### Coverage Analysis Planning

- Define coverage objectives early in development
- Integrate coverage analysis into CI/CD pipeline
- Establish coverage thresholds for each module
- Define strategy for handling coverage gaps

### Test Design for Coverage

- Design tests based on requirements, not code structure
- Use boundary value analysis and equivalence classes
- Consider control flow when designing test cases
- Document test-to-coverage mapping

### Documentation and Evidence

- Maintain traceability between requirements, code, and tests
- Document coverage analysis results
- Provide justification for all coverage gaps
- Include coverage reports in certification evidence

## See Also

- [MC/DC Coverage](/wiki/mc-dc-coverage/)
- [Verification Methods](/wiki/verification-methods/)
- [Tool Qualification](/wiki/tool-qualification/)
- [Software Levels](/wiki/software-levels/)

---

*Referenced in: [Mastering MC/DC Coverage in Practice](/2025/05/14/mastering-mc-dc-coverage/)*