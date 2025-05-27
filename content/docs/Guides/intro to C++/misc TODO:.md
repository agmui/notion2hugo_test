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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMZ4VEK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3sRflaZz4x%2Bn0tXi961q9HFjyo2cEXUz9AVH6j8VXSAIgDIpnJAXm8mJBUC1LWRgXaCXGU1VK8oxkvkW4lLOY72Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDA9SOnabv3Wt6h0dWircA%2BjuqVAXBNrrvaulzY1xVL91bU7EzuGD5Y73DB1NZhaYBZtwoUMZloRQsLmiISSG65RZJxwPaxMLXeg0JnQjTNXX3gCaE2J6M5Qc7PT69p48FYTKp0Lh5nUxLcKHwnK9K4FeTc%2BFnQzhjCl0%2Byeery0NdOjGsdtQdnnvjDbLOulg3ZvBD7nBs%2Fk4xKOu7WJeIgxV3XRIX8wRdZpv2HYQKUoP3Im4XUgE%2BN3gwMrrlHa4pDS7ObzvLbd3bQO9G0Vq1HgEqMGo8SmRJDDcTdoH2JyCy0hByxI255v7r7ekjP043OAr%2BGMnKY%2BjsKgJo8aZUDn05cXEqTog0T%2BF%2FJzfzKMAIvnr93Jm6GH2P1ApCJEo75T655Vd2PPRcBBJ0KAe2k%2FYtw4Y8B8Qira%2Bnhp9qaNOJbi%2B%2FSeMKuimihUBHA1mcSg4n1GRaGtHBtrSmbzsFjjx0MPZ2iJwkDkuqPMIRi2toxSDhjp84GFZw5LdP7FABzxHVvAwSyUBxnOhZTuzGrrp9TeySMCONqZdKgO%2Bv0m4kQ2394If2I5LdOvplVoRTnIRUGMwJSW3ksRsXFYZ%2BUI0yr0GMBdIjRGmocGJFGRb%2FugoP4LBavoz7R3dF2IC5WOl9tmfhmowKWiRMKbk18EGOqUBzvx%2FYiSARhCpjYN4iZuRfr5v%2BJtuGwnop2DHu0jS%2FmDvS867L%2FYpjf%2FjQ2KmhMMHupwFUYE0OR1VEhJvn14ya3MqoEoj%2FyfI2EiH05cA%2Bvk1tjGcxifaamYjdd6LHB1ZaTP5tHzQ1DX4aCa7TX%2BVp7QztBMRkjOsXCEJa%2Bl2U8kaRo%2FA4IfbUaPbdvWfu2wRF6ICDOc7IrUWCoqg5SpPhxkHaIne&X-Amz-Signature=915663304cc4e6f2fc5986b4d64b3cfd71bed2e561d8c2c1f3e7c1d700c64fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMZ4VEK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3sRflaZz4x%2Bn0tXi961q9HFjyo2cEXUz9AVH6j8VXSAIgDIpnJAXm8mJBUC1LWRgXaCXGU1VK8oxkvkW4lLOY72Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDA9SOnabv3Wt6h0dWircA%2BjuqVAXBNrrvaulzY1xVL91bU7EzuGD5Y73DB1NZhaYBZtwoUMZloRQsLmiISSG65RZJxwPaxMLXeg0JnQjTNXX3gCaE2J6M5Qc7PT69p48FYTKp0Lh5nUxLcKHwnK9K4FeTc%2BFnQzhjCl0%2Byeery0NdOjGsdtQdnnvjDbLOulg3ZvBD7nBs%2Fk4xKOu7WJeIgxV3XRIX8wRdZpv2HYQKUoP3Im4XUgE%2BN3gwMrrlHa4pDS7ObzvLbd3bQO9G0Vq1HgEqMGo8SmRJDDcTdoH2JyCy0hByxI255v7r7ekjP043OAr%2BGMnKY%2BjsKgJo8aZUDn05cXEqTog0T%2BF%2FJzfzKMAIvnr93Jm6GH2P1ApCJEo75T655Vd2PPRcBBJ0KAe2k%2FYtw4Y8B8Qira%2Bnhp9qaNOJbi%2B%2FSeMKuimihUBHA1mcSg4n1GRaGtHBtrSmbzsFjjx0MPZ2iJwkDkuqPMIRi2toxSDhjp84GFZw5LdP7FABzxHVvAwSyUBxnOhZTuzGrrp9TeySMCONqZdKgO%2Bv0m4kQ2394If2I5LdOvplVoRTnIRUGMwJSW3ksRsXFYZ%2BUI0yr0GMBdIjRGmocGJFGRb%2FugoP4LBavoz7R3dF2IC5WOl9tmfhmowKWiRMKbk18EGOqUBzvx%2FYiSARhCpjYN4iZuRfr5v%2BJtuGwnop2DHu0jS%2FmDvS867L%2FYpjf%2FjQ2KmhMMHupwFUYE0OR1VEhJvn14ya3MqoEoj%2FyfI2EiH05cA%2Bvk1tjGcxifaamYjdd6LHB1ZaTP5tHzQ1DX4aCa7TX%2BVp7QztBMRkjOsXCEJa%2Bl2U8kaRo%2FA4IfbUaPbdvWfu2wRF6ICDOc7IrUWCoqg5SpPhxkHaIne&X-Amz-Signature=58c9d96d7e36f1cc0bba9ebb1b25c34025db1448e07fac3f3568fb71b6d03f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
