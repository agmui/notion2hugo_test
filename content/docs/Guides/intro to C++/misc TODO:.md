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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3ZNBPK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFssxa45ZFs8kIcbnvxP7znZOxn%2Ff46Tz4KPM5VCammgIhAM%2BsV6l2UyKnY6WVqBPJWt6r0V1an2syVQrqUaqKT5mvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD%2FLPhY99zHyEqleUq3AM7igrf5Pse8fiLa9ELcdKvPhFqoK24A7mVaDSy5tBXb3SIVI8foyQY%2FxY9fJLFaC%2BmHubDslTL1jx23af4an0Vtmjey5IsH8Af2Kie1ZtUuKCor0LQ4mUjb2tSfBtzDAz0RpLGWXyk4%2F%2BKBC8UWkyxkGqBLIgbQKKUR25M2bbIbT%2BZ9oq7GxzVTeH2uF8aFyAI39BVobAcjJTEplEH7Z1oVRu%2BxU0fb12kllS9QAnJSbjPRkK6biKO8E5QVWY86IK7fT4owrLuwudbbodAObR%2B%2BeDlxPlbd345xv2tLI0zwPhUqv6FvPsqqrcq6L4KKzqx0VKGZcma2XmBI3hhevtS6mZ8LIx4OK9ZtClk6QUVtaten5OVZSeIRKmIYWdrRmw9np3PDfbKKQL3FSJS8eDKyT8Wn2XpdCrMC24IE9gguxjP3vxSCFVrVO542GiHlpNwpZ1pmlJ4QMEQQNdn%2BNzL2vmQtYPYguj94N4BqWeubH%2Fu6MXJLiPGF9oKpVfs94rQYs%2BSHt8auES2ClyhshgbGAh7dGvBmaOu2bHhkG%2FkTlj89DGejLkzbz1RUrDDqB7DdV0QKwKjN9q82U7Nw%2F1YzycMl9q3h5JHCPSErpyU7HRZxut%2FCa%2F9l5k5kjDVpsvCBjqkAb4ZaOM4V2o17oqfzpWoo6t8wye41El%2Bfs7uwtNfcVG4BenXQ2IzktJ9EMFPCsBgtQtaD3LcT23uYV6iWdYddgr%2FZlFQPv387vskX8728gPlHzfzGZed1Uw2gX7bmiHgcNr%2B6C6DHzUhtSOuduboqkpnt%2BxyYxZb82dU%2FDXp5ARCyPmoHItlRo9LqhQb718RwFDrV7GDOsFlJA3cXYiXW6VDNRkO&X-Amz-Signature=3b01c8519445816c87b38f9b61c913322502d7f215b6dbe49ba91771070fe852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3ZNBPK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFssxa45ZFs8kIcbnvxP7znZOxn%2Ff46Tz4KPM5VCammgIhAM%2BsV6l2UyKnY6WVqBPJWt6r0V1an2syVQrqUaqKT5mvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD%2FLPhY99zHyEqleUq3AM7igrf5Pse8fiLa9ELcdKvPhFqoK24A7mVaDSy5tBXb3SIVI8foyQY%2FxY9fJLFaC%2BmHubDslTL1jx23af4an0Vtmjey5IsH8Af2Kie1ZtUuKCor0LQ4mUjb2tSfBtzDAz0RpLGWXyk4%2F%2BKBC8UWkyxkGqBLIgbQKKUR25M2bbIbT%2BZ9oq7GxzVTeH2uF8aFyAI39BVobAcjJTEplEH7Z1oVRu%2BxU0fb12kllS9QAnJSbjPRkK6biKO8E5QVWY86IK7fT4owrLuwudbbodAObR%2B%2BeDlxPlbd345xv2tLI0zwPhUqv6FvPsqqrcq6L4KKzqx0VKGZcma2XmBI3hhevtS6mZ8LIx4OK9ZtClk6QUVtaten5OVZSeIRKmIYWdrRmw9np3PDfbKKQL3FSJS8eDKyT8Wn2XpdCrMC24IE9gguxjP3vxSCFVrVO542GiHlpNwpZ1pmlJ4QMEQQNdn%2BNzL2vmQtYPYguj94N4BqWeubH%2Fu6MXJLiPGF9oKpVfs94rQYs%2BSHt8auES2ClyhshgbGAh7dGvBmaOu2bHhkG%2FkTlj89DGejLkzbz1RUrDDqB7DdV0QKwKjN9q82U7Nw%2F1YzycMl9q3h5JHCPSErpyU7HRZxut%2FCa%2F9l5k5kjDVpsvCBjqkAb4ZaOM4V2o17oqfzpWoo6t8wye41El%2Bfs7uwtNfcVG4BenXQ2IzktJ9EMFPCsBgtQtaD3LcT23uYV6iWdYddgr%2FZlFQPv387vskX8728gPlHzfzGZed1Uw2gX7bmiHgcNr%2B6C6DHzUhtSOuduboqkpnt%2BxyYxZb82dU%2FDXp5ARCyPmoHItlRo9LqhQb718RwFDrV7GDOsFlJA3cXYiXW6VDNRkO&X-Amz-Signature=1cd2d6cef24bbe990ff8a0a860323d95d5e57986e515746d461d83cba003b356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
