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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQNUKEI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwt5o402W61H4RQ3BOFhECljiMG37OewOA6kliM40sJwIgegcudCzdmRGgJPx%2Fiq0nGtRcvgIuxW%2BDXesUsJmMioAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxphUQDjnZ73Qj%2FoyrcA5nqrsWZ3TUsTsDYXfd75FwjQAFLop8B8Jr8l8%2Bm1vt2OPcu%2BJ273YklGVotgrDQzV9vvD8glOaGgO2vkgJBBH3nGLqh0884ylndnA382ASaUQWeNfeo0Ie4jB0oWvG4jt0%2Batel8c8ljCQzIxU8UoxNozX4fXeZRbb%2FX%2F%2ByWKifP4AED%2BO82HoE153yaL3Zp5l38Eegkp9AHQMbIUdkpEev36ZtzEKiPIfcsFMMrqO1TCImcxEz63As2J1pwaJqCctOj1SIG2ZmyvUxEp49Bd6uhTvl0MIPNZbpOvlb1%2BP29Dspg3A5P%2BkWF7MOkER6%2BSnuMb3raU9mOmQhv%2BGRomXbGJZYAzOM3sReqgO7VLAc2JrJ%2F5t5KEImJfUy19oFRlZuQllvNZjkaWxWNSypt4agJR29ms5Yd1PI%2Fy%2FkxXKPm7lEutmbXBzo5mblnG9z6D6CNgM5uyL5zJVhbA36k4Q1BgSZvrRdQgztx8o034nLRmjZgsAsRTTacogYIppDm15ciXZYiNklU1QCtRSC5RPFdoB6UUnLNVslTtgkddfsrGQ0V6bvdyRFs2EKDHu5nalPSKxXE1gngt6EiXBGuiKsBQAxThmOByfOhttdGUj1PSao7RB4%2BpUpPnIZMNKH1L4GOqUBlZcL5g5FgcGQcIFZMHCureTYK7XAWzWfnrOkh2VkozCViXUdgPGaO2kh99QP3ezCrElIbkPvb%2B9fTgR5phVYrb7eXjnqtQ0z%2FkkcMAYpnY2lONe93%2BkmBrW5U%2BqNTtsA0sDbo5Jy997kyf6we2%2FEXwaIaRKt5JCjfOWtAkJFfIXeNnU46FIZ1IgEsjwio%2BZ9ay7jF9AQqWLR2K3mgZ8zVv5PHWpN&X-Amz-Signature=fbf00b21b83bf305df09a1ecf92c5279a2330e8d8214826d34d151d6ea8112bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQNUKEI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwt5o402W61H4RQ3BOFhECljiMG37OewOA6kliM40sJwIgegcudCzdmRGgJPx%2Fiq0nGtRcvgIuxW%2BDXesUsJmMioAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxphUQDjnZ73Qj%2FoyrcA5nqrsWZ3TUsTsDYXfd75FwjQAFLop8B8Jr8l8%2Bm1vt2OPcu%2BJ273YklGVotgrDQzV9vvD8glOaGgO2vkgJBBH3nGLqh0884ylndnA382ASaUQWeNfeo0Ie4jB0oWvG4jt0%2Batel8c8ljCQzIxU8UoxNozX4fXeZRbb%2FX%2F%2ByWKifP4AED%2BO82HoE153yaL3Zp5l38Eegkp9AHQMbIUdkpEev36ZtzEKiPIfcsFMMrqO1TCImcxEz63As2J1pwaJqCctOj1SIG2ZmyvUxEp49Bd6uhTvl0MIPNZbpOvlb1%2BP29Dspg3A5P%2BkWF7MOkER6%2BSnuMb3raU9mOmQhv%2BGRomXbGJZYAzOM3sReqgO7VLAc2JrJ%2F5t5KEImJfUy19oFRlZuQllvNZjkaWxWNSypt4agJR29ms5Yd1PI%2Fy%2FkxXKPm7lEutmbXBzo5mblnG9z6D6CNgM5uyL5zJVhbA36k4Q1BgSZvrRdQgztx8o034nLRmjZgsAsRTTacogYIppDm15ciXZYiNklU1QCtRSC5RPFdoB6UUnLNVslTtgkddfsrGQ0V6bvdyRFs2EKDHu5nalPSKxXE1gngt6EiXBGuiKsBQAxThmOByfOhttdGUj1PSao7RB4%2BpUpPnIZMNKH1L4GOqUBlZcL5g5FgcGQcIFZMHCureTYK7XAWzWfnrOkh2VkozCViXUdgPGaO2kh99QP3ezCrElIbkPvb%2B9fTgR5phVYrb7eXjnqtQ0z%2FkkcMAYpnY2lONe93%2BkmBrW5U%2BqNTtsA0sDbo5Jy997kyf6we2%2FEXwaIaRKt5JCjfOWtAkJFfIXeNnU46FIZ1IgEsjwio%2BZ9ay7jF9AQqWLR2K3mgZ8zVv5PHWpN&X-Amz-Signature=08cbc164e017d92e15fb15d714f6743f505a138201107aaea0d4b766400e9e29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
