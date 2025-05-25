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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLYFNZP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDuNBFR9NF0luMLcn4Ze5uZEzM72M%2Bu6dg%2FU8r%2B75SzogIgKPOo6k9qET79oYlTHKjZn5L%2Ff0OH4IzQLs8V%2FSBULKAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC2DXhfAfq0%2F%2BgsyZSrcA6bzfFslkwSlYrSG4MM31cv2h%2FJUjJ5dSbgvOG1dJ30l%2Bj9piWMvGxD8mZohne0Ea2x85wqtQUGVpIjMHdSmFheL2Ud6Zma8%2BviZQmPnZl2xhM88roavGo9lsDPnp8zLNXLDVBs3XKTD1NjdpMr%2BdeFfnDYY0RsCrCtSc7yilgwEejlo0UHcmhNmk4FFupOLQpitKDk4wW%2BXX2wzD1lCiY%2FSLe7J4k4Vaq53isLTjebadK4brsQQv3CAsgfxwpReE4m39RKksk95x7c%2BnMwxoaZ1bnatXAaUQo8ihCwxfPQ123qfcVhteDFJhEqR%2BXyc2SwB572v%2BVOziFVgQCxshaVjZd%2FN7%2Bt0rL8Y9ZoJSKsO89iMtRgrMsf0waM3o77Uc6D%2FVI9yeZ4sX54gVKvd30WxaVTaCvQC5vdQU5CZaNInsa65TQvg8kCmsm7BQgudmAJV0E95BYDjsowsOPRrTPsnK7XkLq2erY5rbuH85n38to%2Fgm2PTR58lK7V00JWCqCcFxnlh0hQ0ratnzPJQ1aPeNq05uyNwwWWrXXW5wzbxXTucqy%2BnaAEHVdFQ0lm1tj4WZVPZMKSZys9iklb%2BzmpkNdR54WvNank5sZBZ9%2B5vMT33gh0k65FGTzm1MKCqzsEGOqUBUFgYVfh11555dWttdzBv3qIMk8kYDHfBVIQmajEqK5HxEDajNwjEvI%2BuRuFM2179odpooP8rHgfiCLAnrdC6OAvVE%2BXQcvag%2FZq74KA684FryA%2BHA6UCurzkOb2sTUa9CK6EDgr2nIoGo6YLtCVVu4OghYMttZoueVP%2FlLAinVhavJS1PV7UmI7Rcq0oqyjyPf5oDaYotlyJIWD69Nlz9x4InoYN&X-Amz-Signature=9f4dc4a735a88902a35eef8a6c5e417c733ac3975ea59fc9aeaee33a5b44f572&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLYFNZP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDuNBFR9NF0luMLcn4Ze5uZEzM72M%2Bu6dg%2FU8r%2B75SzogIgKPOo6k9qET79oYlTHKjZn5L%2Ff0OH4IzQLs8V%2FSBULKAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC2DXhfAfq0%2F%2BgsyZSrcA6bzfFslkwSlYrSG4MM31cv2h%2FJUjJ5dSbgvOG1dJ30l%2Bj9piWMvGxD8mZohne0Ea2x85wqtQUGVpIjMHdSmFheL2Ud6Zma8%2BviZQmPnZl2xhM88roavGo9lsDPnp8zLNXLDVBs3XKTD1NjdpMr%2BdeFfnDYY0RsCrCtSc7yilgwEejlo0UHcmhNmk4FFupOLQpitKDk4wW%2BXX2wzD1lCiY%2FSLe7J4k4Vaq53isLTjebadK4brsQQv3CAsgfxwpReE4m39RKksk95x7c%2BnMwxoaZ1bnatXAaUQo8ihCwxfPQ123qfcVhteDFJhEqR%2BXyc2SwB572v%2BVOziFVgQCxshaVjZd%2FN7%2Bt0rL8Y9ZoJSKsO89iMtRgrMsf0waM3o77Uc6D%2FVI9yeZ4sX54gVKvd30WxaVTaCvQC5vdQU5CZaNInsa65TQvg8kCmsm7BQgudmAJV0E95BYDjsowsOPRrTPsnK7XkLq2erY5rbuH85n38to%2Fgm2PTR58lK7V00JWCqCcFxnlh0hQ0ratnzPJQ1aPeNq05uyNwwWWrXXW5wzbxXTucqy%2BnaAEHVdFQ0lm1tj4WZVPZMKSZys9iklb%2BzmpkNdR54WvNank5sZBZ9%2B5vMT33gh0k65FGTzm1MKCqzsEGOqUBUFgYVfh11555dWttdzBv3qIMk8kYDHfBVIQmajEqK5HxEDajNwjEvI%2BuRuFM2179odpooP8rHgfiCLAnrdC6OAvVE%2BXQcvag%2FZq74KA684FryA%2BHA6UCurzkOb2sTUa9CK6EDgr2nIoGo6YLtCVVu4OghYMttZoueVP%2FlLAinVhavJS1PV7UmI7Rcq0oqyjyPf5oDaYotlyJIWD69Nlz9x4InoYN&X-Amz-Signature=784337015fbcbfb771d8117f219b1ec2078d14df90a98704ab145826bc7781c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
