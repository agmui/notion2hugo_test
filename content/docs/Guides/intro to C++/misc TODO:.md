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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBDMNPZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkvWyqqjolhowwKDXxOI1eQJAMJAOtIlz1SXrMQzLJcAIhAO9uqX2H9ix%2FKu3W7tSkH5wm11fN2Ds6TXkWSh6Smk%2F7KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVTabrXL2Hs8%2F8Wogq3AMCjQAefKdz7SznPXQfvOIfVkWZyPUMtV775QPVWrH%2FLJhnWte2lZgoUHIcz8PdaRmHUeHvx7B1f%2BsOhgkOc1yFReS5apONxxitm%2F2cqnNh0MzdFkecrENh6%2B2kI%2BfoFcVUj4B9q0dYRnxBcyLJtvd6MIIc4fxnwujufgyNGv4fjbzFWrAzYE71QL7hVsF1JKCwZ6SGKWSNY7XAqnym1jYcuK7Z1GEKIGuWLSVVuru7YM5%2Frz1Vap8HhdTvbPKNwgXQHVUaD4vCbb2yi6F0Bc5CoyipA7u5mqsXTYQHDKLvaRB5l01rcmJX76Tg6ckV82Au8%2FEYZJSlQJYRujz4Cf%2F8FR352sIkF8jgJz%2FaB%2B5HSlhbnfWAoV1KsTWZipJ8tD0mq2qMIIoT9%2FGCBUk%2FhW7%2BGmq1MmDDtcOGoVyJg72%2BRkmeEAzEq1lO9wrJTps04zbSaDCJlfwHd9zHMUnzG7fIPF0%2F887MOrFh8z0z5BkVhwWOMoOSu%2FPOLloaRvKQXh9wHrmlwz%2BT%2F5g3wfYW689NEaNyKGsFUaJFJdw3rXLnNETJAY3FVFfSjyRPZvmAsr4yUnGE8XGIvjKsNU05UJxl4rjcjnzWmkIHOj5FTiHv2zq%2F0MCKtD1X%2FgpiKDDr5K%2B9BjqkAQJOvxI3UHy4FOhcWaq1P2zBpiY%2BDoZ6T%2B9U3jQrfTpodytr2XT6vt0TphmMZsHhoUXWJKXAGg1ywD2e44BBc4WAlOqmrNfNCgVgYTo6Uh2RyU2646C5%2B3MZZdUevrvZyTbJiqwVJCM9qpUSAMgtKYy4%2FnPECwfy0oGP%2BK1%2FTVmOPPwBi%2F8OK8V3j%2BTcotgdIDhaDJSVrCRl861MXF57GCBJl7VN&X-Amz-Signature=8cec1eab9f6f2f3c18b6796378c569711f54c69b8c6493f201d3a0bbf6ca1fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBDMNPZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkvWyqqjolhowwKDXxOI1eQJAMJAOtIlz1SXrMQzLJcAIhAO9uqX2H9ix%2FKu3W7tSkH5wm11fN2Ds6TXkWSh6Smk%2F7KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVTabrXL2Hs8%2F8Wogq3AMCjQAefKdz7SznPXQfvOIfVkWZyPUMtV775QPVWrH%2FLJhnWte2lZgoUHIcz8PdaRmHUeHvx7B1f%2BsOhgkOc1yFReS5apONxxitm%2F2cqnNh0MzdFkecrENh6%2B2kI%2BfoFcVUj4B9q0dYRnxBcyLJtvd6MIIc4fxnwujufgyNGv4fjbzFWrAzYE71QL7hVsF1JKCwZ6SGKWSNY7XAqnym1jYcuK7Z1GEKIGuWLSVVuru7YM5%2Frz1Vap8HhdTvbPKNwgXQHVUaD4vCbb2yi6F0Bc5CoyipA7u5mqsXTYQHDKLvaRB5l01rcmJX76Tg6ckV82Au8%2FEYZJSlQJYRujz4Cf%2F8FR352sIkF8jgJz%2FaB%2B5HSlhbnfWAoV1KsTWZipJ8tD0mq2qMIIoT9%2FGCBUk%2FhW7%2BGmq1MmDDtcOGoVyJg72%2BRkmeEAzEq1lO9wrJTps04zbSaDCJlfwHd9zHMUnzG7fIPF0%2F887MOrFh8z0z5BkVhwWOMoOSu%2FPOLloaRvKQXh9wHrmlwz%2BT%2F5g3wfYW689NEaNyKGsFUaJFJdw3rXLnNETJAY3FVFfSjyRPZvmAsr4yUnGE8XGIvjKsNU05UJxl4rjcjnzWmkIHOj5FTiHv2zq%2F0MCKtD1X%2FgpiKDDr5K%2B9BjqkAQJOvxI3UHy4FOhcWaq1P2zBpiY%2BDoZ6T%2B9U3jQrfTpodytr2XT6vt0TphmMZsHhoUXWJKXAGg1ywD2e44BBc4WAlOqmrNfNCgVgYTo6Uh2RyU2646C5%2B3MZZdUevrvZyTbJiqwVJCM9qpUSAMgtKYy4%2FnPECwfy0oGP%2BK1%2FTVmOPPwBi%2F8OK8V3j%2BTcotgdIDhaDJSVrCRl861MXF57GCBJl7VN&X-Amz-Signature=9b256b4990a3d0d0cfea2b9e69d07c9ffd287ff73f2b3a33944e24f19f579481&X-Amz-SignedHeaders=host&x-id=GetObject)

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
