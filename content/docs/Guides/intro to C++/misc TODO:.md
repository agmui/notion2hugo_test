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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVNE7LR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDJFddG2MV4uVJKDjBP5ttbSwzxJkp6FqZQUv%2FIrNVzvwIhANK2%2BzF4i%2F1AMBWGzQAiU88jB1P35RZQoU2emkEZmWlWKv8DCBUQABoMNjM3NDIzMTgzODA1IgwCpNAA1DAE7WaJvj4q3ANkhOaznSTSjCyui0nV1sYdrvSSbY5ETDjCKwaMh89TBd1dQTsHLQtkdoU1GVJzMb6bgJlhjIwWbkHJiC6BqWy15uWMqzGqM6umDDpDeHxwIe69dscx5aoFL3OSv8X2csby0B2C6qpGt3AUxyyik6cSae3pogoCZ5x8oRcvJ2K7%2BDu2frTtFh3%2FfvvAgomY7AC6kjgSlUt5IZU%2FDm9IQaXAtTluOqViljluAa08H6xoZFUKYlzZx9sHYpI2wnmS45t9q62Fy2hO8%2FupotXI8AXO2Bb0x2T9cyuN4SHbmVql4AGqKxDNvBG%2BInX8bX%2FmC7qdtS4p1NwIWaPpl3kR0QmYzC2eSCU9KAiGMrsdn511EumZDcyZinoLajOHcqtZnvtumE%2BYvR3p60AiHLp3txtRYTq56TQ904NSuwUuAif%2BRh7koOasbY9YPfLzlYBvPHPec4BOF%2FTFGNJLYs%2BwunZmkaMH8eC5D6IZAHLG%2FryT50u3rPIK0oYKOj3NP9NCVfAtI7hib42v3To8bYVxOIuJq0o8Jl%2BQ5UyVSdeJpeoQXi0tMl%2Foe2CiIabd22rR%2FUbji%2BJhoC28SwkEA%2F0%2FwpL%2FNRC05qMhQavOIQp0%2BEJH5EKkkgnW%2FcFl5NDPWTC39OTCBjqkAbCB%2BPOvaFTHvPAR%2BQrdAbaN0aYCNxC9cmJIu1PR87dhsIgDLapmdZc4O889uiM3Ku%2FhAP7yFY9B2qEyvSToV5OcoBf3zIjTDgE19N%2FSiTVLMIVj96yt5K9sGCTeUj39l%2BYqguocXbPR3SBh5mYoxr4p4euxo0efqOjjUG12EyBMiylfdQM%2BtfTQNWAmvC3C4ha131BiTIp1wzUpkEav9JrYdm4B&X-Amz-Signature=6444a29cc7ed5071edd8b6637045276923ea1ba50fc862fa3d1fe7a72f0ef248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVNE7LR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDJFddG2MV4uVJKDjBP5ttbSwzxJkp6FqZQUv%2FIrNVzvwIhANK2%2BzF4i%2F1AMBWGzQAiU88jB1P35RZQoU2emkEZmWlWKv8DCBUQABoMNjM3NDIzMTgzODA1IgwCpNAA1DAE7WaJvj4q3ANkhOaznSTSjCyui0nV1sYdrvSSbY5ETDjCKwaMh89TBd1dQTsHLQtkdoU1GVJzMb6bgJlhjIwWbkHJiC6BqWy15uWMqzGqM6umDDpDeHxwIe69dscx5aoFL3OSv8X2csby0B2C6qpGt3AUxyyik6cSae3pogoCZ5x8oRcvJ2K7%2BDu2frTtFh3%2FfvvAgomY7AC6kjgSlUt5IZU%2FDm9IQaXAtTluOqViljluAa08H6xoZFUKYlzZx9sHYpI2wnmS45t9q62Fy2hO8%2FupotXI8AXO2Bb0x2T9cyuN4SHbmVql4AGqKxDNvBG%2BInX8bX%2FmC7qdtS4p1NwIWaPpl3kR0QmYzC2eSCU9KAiGMrsdn511EumZDcyZinoLajOHcqtZnvtumE%2BYvR3p60AiHLp3txtRYTq56TQ904NSuwUuAif%2BRh7koOasbY9YPfLzlYBvPHPec4BOF%2FTFGNJLYs%2BwunZmkaMH8eC5D6IZAHLG%2FryT50u3rPIK0oYKOj3NP9NCVfAtI7hib42v3To8bYVxOIuJq0o8Jl%2BQ5UyVSdeJpeoQXi0tMl%2Foe2CiIabd22rR%2FUbji%2BJhoC28SwkEA%2F0%2FwpL%2FNRC05qMhQavOIQp0%2BEJH5EKkkgnW%2FcFl5NDPWTC39OTCBjqkAbCB%2BPOvaFTHvPAR%2BQrdAbaN0aYCNxC9cmJIu1PR87dhsIgDLapmdZc4O889uiM3Ku%2FhAP7yFY9B2qEyvSToV5OcoBf3zIjTDgE19N%2FSiTVLMIVj96yt5K9sGCTeUj39l%2BYqguocXbPR3SBh5mYoxr4p4euxo0efqOjjUG12EyBMiylfdQM%2BtfTQNWAmvC3C4ha131BiTIp1wzUpkEav9JrYdm4B&X-Amz-Signature=97f046ba1b2f0b9c4bcd501905afa07fc2c55bfa65dd6a4a8814212a66530da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
