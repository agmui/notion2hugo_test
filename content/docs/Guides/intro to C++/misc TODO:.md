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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3OC4QO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCAiRDiHFnjN7Dbky6JRZbQTNnv%2FubNzUda5momCtlNXwIgaM9mp9KrU1by4Jd2sS%2BPkAGJ6sYCrD1H35qB0pfkIDEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBRNAlmz4yleTGGFSrcA5nVnooJs%2BydF1UIt5s10zQp5RRtIJMZ6gXDOrk92qyR5xoMf1mG5Kjisx2zU88qx7ypGu4z3WtE4Imu4pbYDFqZR38%2BUl6E0vk%2B8vbQhS6IyAB3AwGCkQ%2BopM2b736t%2FrZe3q4pZVC3kbA6bH%2FTk%2FUvR30mM7fsvl%2FJcmFEjP%2BWcoSrC84%2BXeygDtb3%2FTmWB%2BxlL8AJp0Th6nbP52mwK0gmWnJH34I%2BUioXbVqVrlu34fVrOpMEAzEyKCSk5DVvgH4vHEqA8xo8t0J1gB7HjefjR2wgL%2FHinA%2B53iGZw1927%2BQi3AY%2B6lYGLmj09%2FcJaGDlhtXc0B90jRqmfHJSwDgmkEQoE9sV3qgRhsLe85ErclSs5Syc4KXbR4MwBjSijZu6aYzOLHQ5fwth%2FopAhcj3DPr3FqpsvI3%2B%2B2CJ52l6EfFRE7QjBiCqSyn2cAJ%2Fu21manqY2rykTt8ghgt63uuvU5nIBcpYwvEZF3sRIBBtV4h9ZzL%2BeggyXuhtr22ZY%2F7qsCz4bMGmHaMkZX1n1vGZWDD4k454fcv50eBiWa27WPm1hMOWV6VMLaw4q6LELBqVnz7rVEZNe%2BFOpyRdo2VoDINN4xk1prJBbLsw9Gg%2BmUufv5%2FcFDqXN6lrMKjHjb4GOqUBkli3NRbzxL1fROiC6A9CI7CuizN4Uah%2BuzIfdyKnUowD2u2NGsoCn1RhEq8Oclc0Nz3i31uGjIhkFdtzUqVfh33mJM%2B09jk2TyTEq98rNVINayYnOSkiB20jOF3FKpOeDNk%2FwtU2Y1aOk9ECWIroWpi2Loip%2Fx4iNZA40Svopy2R%2FXNtz3UxSB4Gx3AQKhAgrsRmDqOQgE6taE87GD89WN4YJwRJ&X-Amz-Signature=5c51113b1c23a9e5d82bfa07f43e958b2821374db0d1b7f98dfbd4293e473e80&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3OC4QO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCAiRDiHFnjN7Dbky6JRZbQTNnv%2FubNzUda5momCtlNXwIgaM9mp9KrU1by4Jd2sS%2BPkAGJ6sYCrD1H35qB0pfkIDEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBRNAlmz4yleTGGFSrcA5nVnooJs%2BydF1UIt5s10zQp5RRtIJMZ6gXDOrk92qyR5xoMf1mG5Kjisx2zU88qx7ypGu4z3WtE4Imu4pbYDFqZR38%2BUl6E0vk%2B8vbQhS6IyAB3AwGCkQ%2BopM2b736t%2FrZe3q4pZVC3kbA6bH%2FTk%2FUvR30mM7fsvl%2FJcmFEjP%2BWcoSrC84%2BXeygDtb3%2FTmWB%2BxlL8AJp0Th6nbP52mwK0gmWnJH34I%2BUioXbVqVrlu34fVrOpMEAzEyKCSk5DVvgH4vHEqA8xo8t0J1gB7HjefjR2wgL%2FHinA%2B53iGZw1927%2BQi3AY%2B6lYGLmj09%2FcJaGDlhtXc0B90jRqmfHJSwDgmkEQoE9sV3qgRhsLe85ErclSs5Syc4KXbR4MwBjSijZu6aYzOLHQ5fwth%2FopAhcj3DPr3FqpsvI3%2B%2B2CJ52l6EfFRE7QjBiCqSyn2cAJ%2Fu21manqY2rykTt8ghgt63uuvU5nIBcpYwvEZF3sRIBBtV4h9ZzL%2BeggyXuhtr22ZY%2F7qsCz4bMGmHaMkZX1n1vGZWDD4k454fcv50eBiWa27WPm1hMOWV6VMLaw4q6LELBqVnz7rVEZNe%2BFOpyRdo2VoDINN4xk1prJBbLsw9Gg%2BmUufv5%2FcFDqXN6lrMKjHjb4GOqUBkli3NRbzxL1fROiC6A9CI7CuizN4Uah%2BuzIfdyKnUowD2u2NGsoCn1RhEq8Oclc0Nz3i31uGjIhkFdtzUqVfh33mJM%2B09jk2TyTEq98rNVINayYnOSkiB20jOF3FKpOeDNk%2FwtU2Y1aOk9ECWIroWpi2Loip%2Fx4iNZA40Svopy2R%2FXNtz3UxSB4Gx3AQKhAgrsRmDqOQgE6taE87GD89WN4YJwRJ&X-Amz-Signature=cd8dc42e59666290bbddbdfc4f87353396fb6b538ce358963d5b610b8198ecb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
