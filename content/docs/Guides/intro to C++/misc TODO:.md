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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZFD5L5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDYZ%2BOI4YJoNOUaOuNriNudXjs%2BqO2Hc9w8SSkftb8B8gIgDM%2Fv91%2BqGgDBZ2yWxov4wELzxa8MfCUhg0bemI1%2BpXcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEMGQX%2FL%2BvpZUhTHHircA1hzWOm2WRXsHtotzHly0I6uljb6%2BtvvMieVViRKeeHmIXCztG8au0h1PlhFnT4jCPI%2FoJRwtHDfnCM4ALEJehl4Mc6AqaCwubzZHjRSIkBy5nEJv5FdKgb5oUx1zM2Ko6u%2FeTVw7U8s2EohJHqGDAhp5o3CFNn%2BPaYyQytdMpVkQO3%2FvWhfJ4aZSgAxMfQFeBIG5ljaTEfsGKi6I%2FzqcmL9OgqOliJ1YzA6jk3K6PSmbgILf84BnwRMxhysNvRENH2y9NUAWfsOgi05r8lGYtWXpj%2F6iJU6E%2ByVtQqPg7rVTEm8jLbtPn9xcTNpkxAjCs%2FOGTH10R4exGUajt%2BgnQs8vOitm%2FNDatSj%2FEOVVGlO%2B6IjZABXgV6xZArXIQ2JBq36CB1kcawsJ433AScN6JPJOOmcAFQ8PvopmvoKOvQgbM1qH0gdNQBFV33lTh047L4tcUsrV85eTem7x1CEtGmIA4vPvmfSkzmkYjIkiAUbulufwaVkxu9kg0UNyrKEe1mRGQpdRxFHxiAmI2FJKOU%2BFN2CPGpBtZ0hK0Aiwo%2FGw1VdrRl8TQfKx3bN8t56lrS88piTxr0UzFUkslsErnjzJT6u2n4q7gTy6%2FYfmylayjWLhEuG9apcHpdBMNGdgsUGOqUB%2Fw54pjuaPOIOAoXp8xHE43xibFrI525q02xtn3yYoK4B1gesHv7QHktcKgGOa4JiIF%2FpRRbebyCbdMaeIHZhZM7EAgKn8ZxeHj64NXlgEjaFXBtzIbiKS1dWhGqoVm88wJpsdfQsA7SCoFaK1f243xe8ABaCloJQg3ds1USX47GKJ5tVLk2hFAsCUm9BzCzLrs8YvIVb4SUDWB%2B12butB06Aw7%2Fz&X-Amz-Signature=2a3df5b2d15deadd8b29c7eaca466a29a2e2775864e7c4ca011ea98d292823f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZFD5L5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDYZ%2BOI4YJoNOUaOuNriNudXjs%2BqO2Hc9w8SSkftb8B8gIgDM%2Fv91%2BqGgDBZ2yWxov4wELzxa8MfCUhg0bemI1%2BpXcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEMGQX%2FL%2BvpZUhTHHircA1hzWOm2WRXsHtotzHly0I6uljb6%2BtvvMieVViRKeeHmIXCztG8au0h1PlhFnT4jCPI%2FoJRwtHDfnCM4ALEJehl4Mc6AqaCwubzZHjRSIkBy5nEJv5FdKgb5oUx1zM2Ko6u%2FeTVw7U8s2EohJHqGDAhp5o3CFNn%2BPaYyQytdMpVkQO3%2FvWhfJ4aZSgAxMfQFeBIG5ljaTEfsGKi6I%2FzqcmL9OgqOliJ1YzA6jk3K6PSmbgILf84BnwRMxhysNvRENH2y9NUAWfsOgi05r8lGYtWXpj%2F6iJU6E%2ByVtQqPg7rVTEm8jLbtPn9xcTNpkxAjCs%2FOGTH10R4exGUajt%2BgnQs8vOitm%2FNDatSj%2FEOVVGlO%2B6IjZABXgV6xZArXIQ2JBq36CB1kcawsJ433AScN6JPJOOmcAFQ8PvopmvoKOvQgbM1qH0gdNQBFV33lTh047L4tcUsrV85eTem7x1CEtGmIA4vPvmfSkzmkYjIkiAUbulufwaVkxu9kg0UNyrKEe1mRGQpdRxFHxiAmI2FJKOU%2BFN2CPGpBtZ0hK0Aiwo%2FGw1VdrRl8TQfKx3bN8t56lrS88piTxr0UzFUkslsErnjzJT6u2n4q7gTy6%2FYfmylayjWLhEuG9apcHpdBMNGdgsUGOqUB%2Fw54pjuaPOIOAoXp8xHE43xibFrI525q02xtn3yYoK4B1gesHv7QHktcKgGOa4JiIF%2FpRRbebyCbdMaeIHZhZM7EAgKn8ZxeHj64NXlgEjaFXBtzIbiKS1dWhGqoVm88wJpsdfQsA7SCoFaK1f243xe8ABaCloJQg3ds1USX47GKJ5tVLk2hFAsCUm9BzCzLrs8YvIVb4SUDWB%2B12butB06Aw7%2Fz&X-Amz-Signature=30741c6ea146f6e8b0a4cce0b49356211822b1ea894a1cf9a28042815d25424f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
