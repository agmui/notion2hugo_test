---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZXAON%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDEBmTqUaAqG0mSGqczZS7PjlDVHUy3il%2BBEILT8K13cwIhAMeN%2Fnf3DX1HXMImmZDlr33UD5Pp5tEKhFJxz%2B85b%2FzyKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2FeOYDQ15oAPpSNvQq3ANb12WpN5WNUs0TY2qEMlmTQK1cAjDtKlFXQLf6k8oO9C2%2FoXG94CnVvbuOeZAwSE3iELTwb9vQPw%2BGZqtiFTKcL0lXQqNpwHgoeZIvvz4ubPEbt0xH9m22M1TmWB1OvAW05uGOfY0MIlsxFXoLNjKVVndh%2FDVbKfeMuhjP48ItIewrbFCG4Vl%2BWV3rU6y1ASt8Ti1X8couo%2B7TiIGDwpkjOSWfXzl%2BOXm3Q9eA0LVAjmgkx4y9KhYQXHGU3OBYxez7pIXyFOY0x%2FeSwwfaxQvH9r0rDEIb9%2B2Sxk%2Fs0bo%2FRrj4c%2Bq2L0BU1CrEGtZIZcySihYzdIz1bobOHOtAcEc5HBfGNc6ULJ90H7Ry1AE35DhmO3AJErUIAB76TQSqie1Ue2Aj8f53xpB5ZgYQ%2Fe8jk3znZAiklfwlrUMidVyfI%2B2AnygLKmWKdld0e%2FFqLPr65DKRNwKlAXOGnR3KL5rBrmB29E6g2KOQul%2FK3oYfs415HpEbLqighsNE7%2FNoDmICRnSIlEIIhc%2BW2MA5winVoXJETbdLofzRHLu%2BH9v4j6elBVy9K%2BqC92TfVvbC0c5A3KQ8igDSesbxVSSMwPw5PBCo6YcQlH2d16DW%2FGg%2F%2Bs1zsdhLsxZ5qYJoMjDjtOa%2BBjqkAUsiWJuCsOMg24xo4KQN8oF70ORa9X6%2BtPnmZKXMPUkd9tT1rUVzVSOenDrq5Km0vJX%2Bms7WvypeYuVjbsEVh6SZRjPmqoQ2G%2FB4PpiIXFaRmoM9FImN31K1V%2BB8v%2BDwI87GKn3r8qc12O5%2FDLlZ1iNeIdviubb%2BLdsn%2F9boXYMxEp1GjtexuSTOmynh3dDaYs0dMTqn%2BJoFI8NYBVL%2F5mA8dmDe&X-Amz-Signature=6e24c55f3a73c841e246978375731e0c0ffe66e3abcc4895eaefff1b9195c3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZXAON%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDEBmTqUaAqG0mSGqczZS7PjlDVHUy3il%2BBEILT8K13cwIhAMeN%2Fnf3DX1HXMImmZDlr33UD5Pp5tEKhFJxz%2B85b%2FzyKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2FeOYDQ15oAPpSNvQq3ANb12WpN5WNUs0TY2qEMlmTQK1cAjDtKlFXQLf6k8oO9C2%2FoXG94CnVvbuOeZAwSE3iELTwb9vQPw%2BGZqtiFTKcL0lXQqNpwHgoeZIvvz4ubPEbt0xH9m22M1TmWB1OvAW05uGOfY0MIlsxFXoLNjKVVndh%2FDVbKfeMuhjP48ItIewrbFCG4Vl%2BWV3rU6y1ASt8Ti1X8couo%2B7TiIGDwpkjOSWfXzl%2BOXm3Q9eA0LVAjmgkx4y9KhYQXHGU3OBYxez7pIXyFOY0x%2FeSwwfaxQvH9r0rDEIb9%2B2Sxk%2Fs0bo%2FRrj4c%2Bq2L0BU1CrEGtZIZcySihYzdIz1bobOHOtAcEc5HBfGNc6ULJ90H7Ry1AE35DhmO3AJErUIAB76TQSqie1Ue2Aj8f53xpB5ZgYQ%2Fe8jk3znZAiklfwlrUMidVyfI%2B2AnygLKmWKdld0e%2FFqLPr65DKRNwKlAXOGnR3KL5rBrmB29E6g2KOQul%2FK3oYfs415HpEbLqighsNE7%2FNoDmICRnSIlEIIhc%2BW2MA5winVoXJETbdLofzRHLu%2BH9v4j6elBVy9K%2BqC92TfVvbC0c5A3KQ8igDSesbxVSSMwPw5PBCo6YcQlH2d16DW%2FGg%2F%2Bs1zsdhLsxZ5qYJoMjDjtOa%2BBjqkAUsiWJuCsOMg24xo4KQN8oF70ORa9X6%2BtPnmZKXMPUkd9tT1rUVzVSOenDrq5Km0vJX%2Bms7WvypeYuVjbsEVh6SZRjPmqoQ2G%2FB4PpiIXFaRmoM9FImN31K1V%2BB8v%2BDwI87GKn3r8qc12O5%2FDLlZ1iNeIdviubb%2BLdsn%2F9boXYMxEp1GjtexuSTOmynh3dDaYs0dMTqn%2BJoFI8NYBVL%2F5mA8dmDe&X-Amz-Signature=73269746cd74862c0a4ea78b6ab0c8d88d236f5bc20f18760b12b3a337204ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
