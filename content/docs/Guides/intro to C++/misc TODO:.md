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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC5ZXG2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFchmFX1GB95Ts8%2FOvgIdxjcVorwXKfIvO1f%2FJ1JfGaQIgV1lDqhGztEe4UyT5PKS6kr8i6RzBaX886fzvj%2BBBLWYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDI36kI4jqzSsvlX8byrcA2f1exhFZ7qIBm4DGKxe3qh9nsRrJCwTUGCBR5fbtIeg1xGM7Tozros1SO%2FEwV4Zy8Y40zwvKJcMSHSqAt77mzgyzxTs3lquN%2FfX1P15FNXrYNFLSAX4X16AXq6oiupIZKVAftTE%2FaxxO15FDcWyjbu%2BugdVs32vO99IfsaKD2e%2BA%2F57NkT1pyLxj5K4fSb2TDYH2MDo0x2LzPCg6Sp0ESn1xQyczMq5B0dkZQ1KVf7S9hBURvaQTWP0mq%2FDUPexRICuzV%2F2A9Q%2F3wP7Jus2843lal0w84DOuSoZbHcoNrSKCDhTdNNoAL5TvgmGPUxlAodvTRGWdTIdO4jFXXPt%2B%2BbPIPFhQbPDvy%2FTmtHgEUPeZJA8EmHQeToE7m%2B7Bp9vdL5Zsq4YVxamqCQfLC7un18NKF46rifAWIU0gITx6vpeheUliwxCCDzuXLfVsQMPwIQnY4J2LLB7%2FpZ5cosDSOmYT5oW2Ai88KxqbVuzmtvyLSL%2FCp56pNa%2Fbi%2B2trPv6Lk4RzQLYGbV2zbbYoQc4kodfrddT4KxEqH2gUOlWcV%2Bl3edDTKexTOFuoo7pWZJKQCeCM9NxUU1OWAVV9Z9EXCTZDamgzIeR40zvWZX6jKYjS%2FFuiCB35sIsFmPMMfSwL8GOqUB0gtCJrVSMeFf0KS39z69qi%2BCEDqHfnjUPFzQd1IxfgcHEcfh%2FK8aroobnGuXzdkCWLjP6kn5CjF0b4fRWmwSPHVmPaKuAosPLNr7cpvSQ%2FqsnymRejgbpe3DwsjQdmCUEVTlYJNwxfBQruhuA93mjX56ielcq4KkPscxdi4gyE0EQiswgfCmu7COayu3IBmmFtqyDU2OGesTu82AcB5QVtefYA4E&X-Amz-Signature=7e174043cb0b463582abfa41ade577d75149973cb7d74f85fbf985e0a365e166&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC5ZXG2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFchmFX1GB95Ts8%2FOvgIdxjcVorwXKfIvO1f%2FJ1JfGaQIgV1lDqhGztEe4UyT5PKS6kr8i6RzBaX886fzvj%2BBBLWYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDI36kI4jqzSsvlX8byrcA2f1exhFZ7qIBm4DGKxe3qh9nsRrJCwTUGCBR5fbtIeg1xGM7Tozros1SO%2FEwV4Zy8Y40zwvKJcMSHSqAt77mzgyzxTs3lquN%2FfX1P15FNXrYNFLSAX4X16AXq6oiupIZKVAftTE%2FaxxO15FDcWyjbu%2BugdVs32vO99IfsaKD2e%2BA%2F57NkT1pyLxj5K4fSb2TDYH2MDo0x2LzPCg6Sp0ESn1xQyczMq5B0dkZQ1KVf7S9hBURvaQTWP0mq%2FDUPexRICuzV%2F2A9Q%2F3wP7Jus2843lal0w84DOuSoZbHcoNrSKCDhTdNNoAL5TvgmGPUxlAodvTRGWdTIdO4jFXXPt%2B%2BbPIPFhQbPDvy%2FTmtHgEUPeZJA8EmHQeToE7m%2B7Bp9vdL5Zsq4YVxamqCQfLC7un18NKF46rifAWIU0gITx6vpeheUliwxCCDzuXLfVsQMPwIQnY4J2LLB7%2FpZ5cosDSOmYT5oW2Ai88KxqbVuzmtvyLSL%2FCp56pNa%2Fbi%2B2trPv6Lk4RzQLYGbV2zbbYoQc4kodfrddT4KxEqH2gUOlWcV%2Bl3edDTKexTOFuoo7pWZJKQCeCM9NxUU1OWAVV9Z9EXCTZDamgzIeR40zvWZX6jKYjS%2FFuiCB35sIsFmPMMfSwL8GOqUB0gtCJrVSMeFf0KS39z69qi%2BCEDqHfnjUPFzQd1IxfgcHEcfh%2FK8aroobnGuXzdkCWLjP6kn5CjF0b4fRWmwSPHVmPaKuAosPLNr7cpvSQ%2FqsnymRejgbpe3DwsjQdmCUEVTlYJNwxfBQruhuA93mjX56ielcq4KkPscxdi4gyE0EQiswgfCmu7COayu3IBmmFtqyDU2OGesTu82AcB5QVtefYA4E&X-Amz-Signature=b652cd65f1703e3323ab4e29a5eabb7f338f4bf92f94cc37baaed39209895929&X-Amz-SignedHeaders=host&x-id=GetObject)

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
