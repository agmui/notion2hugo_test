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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3QRD44%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmqebfVMNxay0cerK1pf%2F5AMQZDyGUmX9VDL%2FUzvtMUgIgJ2vE2olDRF1sMpEU8OvMd0V2Gwzs%2BS3BQ%2Fd2JDYetcoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVDmkq7jD4WuooY1CrcA83V0ztwsRuU1%2FOGpPWzDjBwyjNYNNkC%2FVS2g4Gn19WWkumx6gNbuHUQWe1gQhrEpqgTM2GA%2F%2FLRHFAVqR3vnVAccS4SSQVf2i8dSa2DoRjqFMGj4jax1yZgWmMpuvmbkCZMgxVe4tm8pxLERCGiBIHUKUDivfF%2BFek%2BmugUpz3t3c8PlfNJB65Y7dEJ6yqV1ZyaTmp3RpWicd2kOVj%2FjBm6Oh7KRUn%2FQPOdt9wKZy5n60NhRWOKu%2BVxroDz2dvSGZLbRxmta5rUN6EV5nOsOVEBJRPC3SbgJTRopdrxXn9WkVfiQ9c3Q9dfGyhS%2FMYcm4qbvCVulS0bOo4PZ%2B%2Bw3ivSYLl0KStLOE30Cem%2F8370OAgPzbKTlZSDEg59qb%2Bg7a2QkaZYeS0JEUI4kiyx%2FxyroiVH6usEx3K%2BJJtigT8chvJ8kp6z6NI2czTLrhomTPOWrYI%2FCts7XAxnSTZvqYsymDCumL6rerOfdvWW7svF7%2F3nl5HtdjVf1LeryYaxuiHH8I4qbb7mqXUuHExfIflD3N98zognb%2Fx2DNekmek8zyl%2BcHTGuWZf7P4AzKS58nL3mD2WASMAeGZym1ZiO4isLCjlk%2FysgOLuCJOYVZbzu9U5He%2FWyPWOt%2BdVMM6Q77wGOqUBRolf1V64oyUFICAX%2F8EHJKd0G3J%2Bq7wXZUfHHWX4ICd8hv8o7wCmi5yLN7ayzNQb%2FJTy26nE0qO52RFO6ApYaUQ5oiFnHaqNjG%2BFIJ9DmkyGErLaWHOWXUclehyXCQTHqj1SYEVD%2BRS5mIeJkxLlIb6QYep80%2FNL8QNjE6c7aZ93993PKB2xt9yZfZXHrbLPwYOCJLAYZnI9P2tOG8QaMka0BnyI&X-Amz-Signature=314388a0867eb4395fec86ab099acfce17b71997b2c93320c3b9d85ad84343dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3QRD44%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmqebfVMNxay0cerK1pf%2F5AMQZDyGUmX9VDL%2FUzvtMUgIgJ2vE2olDRF1sMpEU8OvMd0V2Gwzs%2BS3BQ%2Fd2JDYetcoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVDmkq7jD4WuooY1CrcA83V0ztwsRuU1%2FOGpPWzDjBwyjNYNNkC%2FVS2g4Gn19WWkumx6gNbuHUQWe1gQhrEpqgTM2GA%2F%2FLRHFAVqR3vnVAccS4SSQVf2i8dSa2DoRjqFMGj4jax1yZgWmMpuvmbkCZMgxVe4tm8pxLERCGiBIHUKUDivfF%2BFek%2BmugUpz3t3c8PlfNJB65Y7dEJ6yqV1ZyaTmp3RpWicd2kOVj%2FjBm6Oh7KRUn%2FQPOdt9wKZy5n60NhRWOKu%2BVxroDz2dvSGZLbRxmta5rUN6EV5nOsOVEBJRPC3SbgJTRopdrxXn9WkVfiQ9c3Q9dfGyhS%2FMYcm4qbvCVulS0bOo4PZ%2B%2Bw3ivSYLl0KStLOE30Cem%2F8370OAgPzbKTlZSDEg59qb%2Bg7a2QkaZYeS0JEUI4kiyx%2FxyroiVH6usEx3K%2BJJtigT8chvJ8kp6z6NI2czTLrhomTPOWrYI%2FCts7XAxnSTZvqYsymDCumL6rerOfdvWW7svF7%2F3nl5HtdjVf1LeryYaxuiHH8I4qbb7mqXUuHExfIflD3N98zognb%2Fx2DNekmek8zyl%2BcHTGuWZf7P4AzKS58nL3mD2WASMAeGZym1ZiO4isLCjlk%2FysgOLuCJOYVZbzu9U5He%2FWyPWOt%2BdVMM6Q77wGOqUBRolf1V64oyUFICAX%2F8EHJKd0G3J%2Bq7wXZUfHHWX4ICd8hv8o7wCmi5yLN7ayzNQb%2FJTy26nE0qO52RFO6ApYaUQ5oiFnHaqNjG%2BFIJ9DmkyGErLaWHOWXUclehyXCQTHqj1SYEVD%2BRS5mIeJkxLlIb6QYep80%2FNL8QNjE6c7aZ93993PKB2xt9yZfZXHrbLPwYOCJLAYZnI9P2tOG8QaMka0BnyI&X-Amz-Signature=2def07cf720d91584ec9d2352a6010d207a276ad3f90934d5887e4de0e5bbdef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
