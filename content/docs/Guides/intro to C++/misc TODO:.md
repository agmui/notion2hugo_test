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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLOZI5Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKezpxxECXDVHHRKmFsxNdXiQMWoyPLps9%2FiQNAs37wIgLqxoDu8yibn6EaSMS54hmGmTPmalSWl439CDoSlMe5Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAln98%2FxmJ5wfcxFECrcA2qcPYCphQrygLBF8Mx0nbMjsKsZJOSO%2BCpCeW%2BCW4bPaI4frvMg9Qcn8lMu3PVbpRRBs%2FW2KGcV3sIvRam94ffghkjbEJs7XBm64TmkdVDXtATKGtTdBV6ANOK1UYIf7UB4keCAvKK4iSd38Uy1qYRZjIXE6SQIIAZSIy3tv1izMNTK0UfWUDZW2Cs3Cr7sGXG2VvZojpjAVThtqK2LYZaKN%2Fc77DriKxhVXznI8%2FrRZf3lHE1%2FuzqWQHxV%2BKBMbpbJXlIjELsDTH8BgG6nh%2FKbQzB7FMdUMnFpoFCn1ZL0SI1ZfJlWISj7VniKyn1HvXDt7YQD5kTXORiDBv6GZf25TRsoOnEWBVs7HTQyMVGkjr1qrptjsIui5nnfb7qwc4ynu7x9HXxzQ0N29innE4ELnDCXwIU1Y2wEa%2F6rMGIiXUuf%2FozcI53lWpo7PsfBHEUHyQPSG%2F%2BAKHzjxi1k5a%2Bc2zqp15KMpnVAJGvhOsn7krE9lZ6Iz87UYqY%2Fi51mpfZIvy2%2BJj0XM%2FHA2JpTS5vazAfvl%2BS8f%2BLHaroWjjHaOn9rIABnmbPYjk8%2FOu%2Fhk%2B4fLjC1qid6xvjwY%2BrXX8jF2aPlR1SwgDGGJM9cqcIEg%2F8TWFvhMq6wkWGVMNrX670GOqUBtyRwdxNq4eV8sWAcaqWyNckCRMaXZfSTJmcN4z%2FwGYdArWmLNMtd0qmGJAulnIKUYmfJCcVXSM5AnOP%2BDEYEtPmyzjPraFj%2Bv8kQWIEHFMgNUYYcKk9WFTrnTiIAbc9%2B6KU30M54Lm3QR12RNMkCMZdZ9zEPUwAfnVbd6np9gL4qJWjkLMGYiTekIaCePRWK%2F6rus9pnKejXcIiGF1sfN15AIMpn&X-Amz-Signature=d524ba9e104f414f74fc5399b13e5d8011a4bd98aa205ac03f0b9e8a8e85be62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLOZI5Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKezpxxECXDVHHRKmFsxNdXiQMWoyPLps9%2FiQNAs37wIgLqxoDu8yibn6EaSMS54hmGmTPmalSWl439CDoSlMe5Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAln98%2FxmJ5wfcxFECrcA2qcPYCphQrygLBF8Mx0nbMjsKsZJOSO%2BCpCeW%2BCW4bPaI4frvMg9Qcn8lMu3PVbpRRBs%2FW2KGcV3sIvRam94ffghkjbEJs7XBm64TmkdVDXtATKGtTdBV6ANOK1UYIf7UB4keCAvKK4iSd38Uy1qYRZjIXE6SQIIAZSIy3tv1izMNTK0UfWUDZW2Cs3Cr7sGXG2VvZojpjAVThtqK2LYZaKN%2Fc77DriKxhVXznI8%2FrRZf3lHE1%2FuzqWQHxV%2BKBMbpbJXlIjELsDTH8BgG6nh%2FKbQzB7FMdUMnFpoFCn1ZL0SI1ZfJlWISj7VniKyn1HvXDt7YQD5kTXORiDBv6GZf25TRsoOnEWBVs7HTQyMVGkjr1qrptjsIui5nnfb7qwc4ynu7x9HXxzQ0N29innE4ELnDCXwIU1Y2wEa%2F6rMGIiXUuf%2FozcI53lWpo7PsfBHEUHyQPSG%2F%2BAKHzjxi1k5a%2Bc2zqp15KMpnVAJGvhOsn7krE9lZ6Iz87UYqY%2Fi51mpfZIvy2%2BJj0XM%2FHA2JpTS5vazAfvl%2BS8f%2BLHaroWjjHaOn9rIABnmbPYjk8%2FOu%2Fhk%2B4fLjC1qid6xvjwY%2BrXX8jF2aPlR1SwgDGGJM9cqcIEg%2F8TWFvhMq6wkWGVMNrX670GOqUBtyRwdxNq4eV8sWAcaqWyNckCRMaXZfSTJmcN4z%2FwGYdArWmLNMtd0qmGJAulnIKUYmfJCcVXSM5AnOP%2BDEYEtPmyzjPraFj%2Bv8kQWIEHFMgNUYYcKk9WFTrnTiIAbc9%2B6KU30M54Lm3QR12RNMkCMZdZ9zEPUwAfnVbd6np9gL4qJWjkLMGYiTekIaCePRWK%2F6rus9pnKejXcIiGF1sfN15AIMpn&X-Amz-Signature=f01fec384d29f5f2fcbff5ee11f045925700e3a14b344d2b4f58d95eda816aee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
