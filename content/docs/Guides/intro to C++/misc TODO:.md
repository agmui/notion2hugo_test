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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV45LINU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCLHJMj5ApC1%2FzlvaGe9h1gcPGda0KUJIY9ydjnlBFR4wIgaHPTlCCcS1kkB4WaXdOdrbhK2tJyz6N29d2AQWLYskAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFSR9sXYlap5d8tq9ircA2wTdO9m2vNNS6PKrthF3LO0yE%2F5bhzVkUsWziIDl7kFBC7z7Ij%2F7VFxXUvXp%2F2qFM%2BcDtqFpHfhpRz13D4Tq4HaiQKBJ2YpqpHguWlZFlgsFkQ8Hh%2F5xspIijvY27gW1EgDlM0BO1q%2BpVrIdhh5dkL7ph3wuH7N%2BqxJsKdOPSwlj8PyjUZY1oiN3g9h95arwUPEqLrsXhtr15DrCBz45kkAEyKx7gXj4pbfaR573JUpWGXZTgrccObYSBw9%2FqsyBDstB2SxDIN7HMwsC0QeczS9hID0nS9rnmqhcZyg5Z9UQT0KMtp9Lp1APgwpTX9rbUtWZwasElZzZ99P75iwTAj9dWIV8gTwhFZj7E2Sf0RKjmwGLyF%2F13ucG3V7KrhiXhY7F1e3xjHaDujYfT6G6yHgN1sbqFxIwOSSDcnfleNpXJJNcSZWkzgm2UaiA6pmjKb71HCtlc4colXY5VZ1sqTwcCUn%2BzuEdDX1TX0eahRpYU02YrAi4PfdEBc2pBtJdSFN8Gx1iXdGRyHlLnafKeFRX1MpiEG4mo%2FD4Tks9HQlukNsw6MHVfR9S2Z2kWDNOWzbTai69iOhc8qiIzoLsiGqpLzujHaccd4IcRKCOofwFI0ZNquF42cCJMigMPCExr0GOqUBQkkCvc4%2FfYhiAtpOYpPHVxXnZA6MZgFNTrxTvOFJUxV4BAgSE9ymphk%2FVW5Tc9WFdAREr3%2Bylvtmsg6QjfiTiquYXUsELsFcmlnkGQbbd70Tj6NhVO8zu4PzrKOVETev6EMijMZTuMMMtaQc%2FSZR32%2B4csKXT5n1Qd5SR2HG%2FvHIOGLBCSjyYCFwHUDmgikF6PZ4g0F2WQxFNBI1DFvcaPKOFDdQ&X-Amz-Signature=8501f378aa139befec9264e69b6d1e033ae40804c622b6d0f1035eda56b69f66&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV45LINU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCLHJMj5ApC1%2FzlvaGe9h1gcPGda0KUJIY9ydjnlBFR4wIgaHPTlCCcS1kkB4WaXdOdrbhK2tJyz6N29d2AQWLYskAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFSR9sXYlap5d8tq9ircA2wTdO9m2vNNS6PKrthF3LO0yE%2F5bhzVkUsWziIDl7kFBC7z7Ij%2F7VFxXUvXp%2F2qFM%2BcDtqFpHfhpRz13D4Tq4HaiQKBJ2YpqpHguWlZFlgsFkQ8Hh%2F5xspIijvY27gW1EgDlM0BO1q%2BpVrIdhh5dkL7ph3wuH7N%2BqxJsKdOPSwlj8PyjUZY1oiN3g9h95arwUPEqLrsXhtr15DrCBz45kkAEyKx7gXj4pbfaR573JUpWGXZTgrccObYSBw9%2FqsyBDstB2SxDIN7HMwsC0QeczS9hID0nS9rnmqhcZyg5Z9UQT0KMtp9Lp1APgwpTX9rbUtWZwasElZzZ99P75iwTAj9dWIV8gTwhFZj7E2Sf0RKjmwGLyF%2F13ucG3V7KrhiXhY7F1e3xjHaDujYfT6G6yHgN1sbqFxIwOSSDcnfleNpXJJNcSZWkzgm2UaiA6pmjKb71HCtlc4colXY5VZ1sqTwcCUn%2BzuEdDX1TX0eahRpYU02YrAi4PfdEBc2pBtJdSFN8Gx1iXdGRyHlLnafKeFRX1MpiEG4mo%2FD4Tks9HQlukNsw6MHVfR9S2Z2kWDNOWzbTai69iOhc8qiIzoLsiGqpLzujHaccd4IcRKCOofwFI0ZNquF42cCJMigMPCExr0GOqUBQkkCvc4%2FfYhiAtpOYpPHVxXnZA6MZgFNTrxTvOFJUxV4BAgSE9ymphk%2FVW5Tc9WFdAREr3%2Bylvtmsg6QjfiTiquYXUsELsFcmlnkGQbbd70Tj6NhVO8zu4PzrKOVETev6EMijMZTuMMMtaQc%2FSZR32%2B4csKXT5n1Qd5SR2HG%2FvHIOGLBCSjyYCFwHUDmgikF6PZ4g0F2WQxFNBI1DFvcaPKOFDdQ&X-Amz-Signature=5608dcda11de4cf01a1f1acb2d4408569160813e37be9b6dc7cb127a415e7222&X-Amz-SignedHeaders=host&x-id=GetObject)

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
