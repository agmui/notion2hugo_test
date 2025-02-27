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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXNSVCM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIC1yi98jk5GJHPwAqLOtVbmtP%2FVo9qlMXiKP3ybsKf0oAiBQpGmyP%2BmOgQgQiKvjG20ef9DUFpC3UV%2FeWTMZ4QLs%2FSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJNeO72znum0bm%2FvFKtwDX5RIgI41H0Q%2Bf51xHoh4zC6udN6MCrFMJRWprcWMyOrhnf6nhAFHLm9zVwlJkbOtCm%2FhYu8yZRzpZAMkmQG6gx3vdTDx48yPa5bQn4sYNwjFgRcIzWgi4tSmlf%2Fgvwu3kJet9DebhmVj33EZPuNFcglOoFIHz2aYLIwlt8tssQ0jJwaErpfsIkvnK0DU7zNyH5cIDDKzNzLCDK%2BYcEWeu0W8%2BZVlK7BrYEsguYE%2FUT1fOMie3vs%2FAGibDKAv9%2B8pX9I%2BJ9PPRnwXRS%2Bgwo3IsKblLZDc4yvVhP75Swa8YLWbDzuHyFQrK6H%2Ff%2BclhpOfY81tsDiXHfydWHNxJyAE5QUEX9Zo%2FxubaFQoudI4dALfQMRADEfOmi81i2H4aa3TUdTFSPEcm3C2j65Py3Fs1fEWLK%2F1WYpvOKNEWwia%2BBh34V%2FbOIlmyBnxD52ewjS27fuvdwY6Xhm5%2FjN6TSxStQ7u5%2BPvTkLXc9pJBbP1BqLzyf1Aw7nZ%2FzxDWkJ3SUNQ0R%2FFP%2FWa%2B3CQfdVyNA1ZVll1n75ZORDOSFh5Q%2BxirJ1J0c43GeZAI8j2ac8ZtbKZOSqUqjfrULU%2BObsGDN96FkfGEdOwhaJqSnLsPGzj5JKGhEghuLC7oKuO%2FfEwgNj%2BvQY6pgFSGrSh7qoDEPumNFgSBIia4WxJWFaMABx%2FGz7ubquvVGpIzB2z%2Bg4jhPRHN7ztcUvhabZlQUx3i01SKltbxEY6U3SNmPoI59yPwR5rsTX7w3rN7tDJyiYuUT1ack0wgMI2DDDL4yXl2EIL3%2BaPNB0Nzy3n4oxQEeHj%2FK%2BXudYvC3wGRFVcK5K9FwMYu79HJsP%2FXYGRaEqFOFDPlVFImjoNgQiMBUwA&X-Amz-Signature=6c25571295390cb56fcff433a128a0a653c5877b6406ba9ca84e3fe3aa8904de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXNSVCM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIC1yi98jk5GJHPwAqLOtVbmtP%2FVo9qlMXiKP3ybsKf0oAiBQpGmyP%2BmOgQgQiKvjG20ef9DUFpC3UV%2FeWTMZ4QLs%2FSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJNeO72znum0bm%2FvFKtwDX5RIgI41H0Q%2Bf51xHoh4zC6udN6MCrFMJRWprcWMyOrhnf6nhAFHLm9zVwlJkbOtCm%2FhYu8yZRzpZAMkmQG6gx3vdTDx48yPa5bQn4sYNwjFgRcIzWgi4tSmlf%2Fgvwu3kJet9DebhmVj33EZPuNFcglOoFIHz2aYLIwlt8tssQ0jJwaErpfsIkvnK0DU7zNyH5cIDDKzNzLCDK%2BYcEWeu0W8%2BZVlK7BrYEsguYE%2FUT1fOMie3vs%2FAGibDKAv9%2B8pX9I%2BJ9PPRnwXRS%2Bgwo3IsKblLZDc4yvVhP75Swa8YLWbDzuHyFQrK6H%2Ff%2BclhpOfY81tsDiXHfydWHNxJyAE5QUEX9Zo%2FxubaFQoudI4dALfQMRADEfOmi81i2H4aa3TUdTFSPEcm3C2j65Py3Fs1fEWLK%2F1WYpvOKNEWwia%2BBh34V%2FbOIlmyBnxD52ewjS27fuvdwY6Xhm5%2FjN6TSxStQ7u5%2BPvTkLXc9pJBbP1BqLzyf1Aw7nZ%2FzxDWkJ3SUNQ0R%2FFP%2FWa%2B3CQfdVyNA1ZVll1n75ZORDOSFh5Q%2BxirJ1J0c43GeZAI8j2ac8ZtbKZOSqUqjfrULU%2BObsGDN96FkfGEdOwhaJqSnLsPGzj5JKGhEghuLC7oKuO%2FfEwgNj%2BvQY6pgFSGrSh7qoDEPumNFgSBIia4WxJWFaMABx%2FGz7ubquvVGpIzB2z%2Bg4jhPRHN7ztcUvhabZlQUx3i01SKltbxEY6U3SNmPoI59yPwR5rsTX7w3rN7tDJyiYuUT1ack0wgMI2DDDL4yXl2EIL3%2BaPNB0Nzy3n4oxQEeHj%2FK%2BXudYvC3wGRFVcK5K9FwMYu79HJsP%2FXYGRaEqFOFDPlVFImjoNgQiMBUwA&X-Amz-Signature=597c7490c363bce67e93c074b6814d419f8cd2152d8937c2f3568ed393f92174&X-Amz-SignedHeaders=host&x-id=GetObject)

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
