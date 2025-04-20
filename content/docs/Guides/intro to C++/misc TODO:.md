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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAXM7WT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAE%2FYBbCMXsSCYP7keu1UxYAdz6%2BSZAqsLLEWF6HgBiiAiEAjaHQ3ZmaVk%2BVwTtyoHf%2FFfbGKcmuvqSVBUlxwZIh7jEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMrgw00hjNWwY1dSrcAxGS7SrzeXYeTUpILZPCrTy%2FYFkU4mtym%2F0Vz%2FWV4KgVZBSioCYiHabOAFtCn7b1qyxnfyuWi%2B12x%2FRs3PRiLWB5nlLWZYwqM3WcF7xDo8WUOT1%2BLmyPMeDPSSsLJMuIwa54c7qffHwadx0MmuI7FY63UedmlsnL4sBTRajqd8RuQce%2F%2FEjgNJ%2FHUDCXs08tMuBm%2BBoozpV1Zgw8A1fRJbF8fMnQpm2opPUYUG8yjqaj9bxBDnZKIKaMzO8Dy%2BGT%2FNrRQ9ndmDTkd%2FK555VnVqyRjwfBMeW7gBBZddMKE6Ncqm9ylUm5ZkgBLqglG6SzY2Bw8%2B54fuv80VhXlAXhFj4On4Oh1UTRBnasNi7Pfd1tXG9%2BPxxe%2BnRNG202qbThp6lDBgSjc0OfycB%2B9DXBqOV2qU%2FAPICNCR9pcKAQPNdgf2Jte0yt7yDZWVPj8budVLUdddb2LsMYVFSRwenPv8pOKQg3bf%2BuQwYHyNDtN4hS69I2%2BKkWZ704tIbfp0gFWSUaKk35oM%2F%2FXqq3XT6BHqnrnc3a0%2BdxXbZq%2Fvjd8W3nNydhbmyl61B2B8v87r%2BhjojZSWYy4508Ii3bjSrmFZmOoteEnvYTRok1rL1ijPcWnNuD0uP3EBsjhjhLMNbulMAGOqUBNBo0vw8cUH6e4BrpqowWWdEnrjNLE14UrCZVVOX%2FJ%2BDCCBTdDH4Q9YHyMdOEpa5vRou4oXkn7YL7pH8GIxJhUKE8JUSGs8Cl1tYqL9VFaGUvsN8IFOOMJgPPCg7oH9zgMFenIT8HWTAip5qVVrzW3606OhdZlgJTxzhAv7PeKnNDpt%2FWWRXpfEMPRcjyxy591rQb8d4TlpjXcGiWbkzeY38%2BqaWX&X-Amz-Signature=a37318812498f38c3551adf55ab2335446eefd2dd1c30c728c06675181f3b96a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAXM7WT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAE%2FYBbCMXsSCYP7keu1UxYAdz6%2BSZAqsLLEWF6HgBiiAiEAjaHQ3ZmaVk%2BVwTtyoHf%2FFfbGKcmuvqSVBUlxwZIh7jEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMrgw00hjNWwY1dSrcAxGS7SrzeXYeTUpILZPCrTy%2FYFkU4mtym%2F0Vz%2FWV4KgVZBSioCYiHabOAFtCn7b1qyxnfyuWi%2B12x%2FRs3PRiLWB5nlLWZYwqM3WcF7xDo8WUOT1%2BLmyPMeDPSSsLJMuIwa54c7qffHwadx0MmuI7FY63UedmlsnL4sBTRajqd8RuQce%2F%2FEjgNJ%2FHUDCXs08tMuBm%2BBoozpV1Zgw8A1fRJbF8fMnQpm2opPUYUG8yjqaj9bxBDnZKIKaMzO8Dy%2BGT%2FNrRQ9ndmDTkd%2FK555VnVqyRjwfBMeW7gBBZddMKE6Ncqm9ylUm5ZkgBLqglG6SzY2Bw8%2B54fuv80VhXlAXhFj4On4Oh1UTRBnasNi7Pfd1tXG9%2BPxxe%2BnRNG202qbThp6lDBgSjc0OfycB%2B9DXBqOV2qU%2FAPICNCR9pcKAQPNdgf2Jte0yt7yDZWVPj8budVLUdddb2LsMYVFSRwenPv8pOKQg3bf%2BuQwYHyNDtN4hS69I2%2BKkWZ704tIbfp0gFWSUaKk35oM%2F%2FXqq3XT6BHqnrnc3a0%2BdxXbZq%2Fvjd8W3nNydhbmyl61B2B8v87r%2BhjojZSWYy4508Ii3bjSrmFZmOoteEnvYTRok1rL1ijPcWnNuD0uP3EBsjhjhLMNbulMAGOqUBNBo0vw8cUH6e4BrpqowWWdEnrjNLE14UrCZVVOX%2FJ%2BDCCBTdDH4Q9YHyMdOEpa5vRou4oXkn7YL7pH8GIxJhUKE8JUSGs8Cl1tYqL9VFaGUvsN8IFOOMJgPPCg7oH9zgMFenIT8HWTAip5qVVrzW3606OhdZlgJTxzhAv7PeKnNDpt%2FWWRXpfEMPRcjyxy591rQb8d4TlpjXcGiWbkzeY38%2BqaWX&X-Amz-Signature=28f960680c73339533b4ab1571c307c7bbeba300f1577910ac72b2fde19874bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
