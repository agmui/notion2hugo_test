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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYMADCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcR4lPmj7JcGrsQZgHdXs4EP%2BZki5Ob7Pf%2FERE1njG1wIhAMp3aSScSebMEFckpbgn6qL01pkUIis%2Bc3f1WHMZMBwkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygK%2BzJXCpXhoKL7x4q3APYEYaVReS%2BK2jKDuVeP7fV6T%2F2k5%2FkTSbAsv01lKL814pJ9OOOf7TUREzWeq%2BYtzMELXHtgShZ%2FPB7UM44B%2Fk29gmsSNB0ukXpp2a56sHwKMr1w4w5VeP7oYbyvrE4l0l50oy%2BW91Lo5RAOK0vVzByFzna6sOFBYEV0vk%2BdSB6i7BSdCt0hyCRLrYRE2cCBmqGcHaybkeTv6Iodm7EYR5354Aa4dQHSIPifO14O4YFPTQDbqSNYwCc91kT6L2Lv3x5OxUoIcHLPa%2F1aTzLFJN8omC76QBkHFW9Rt61B%2Frp6A5ovJs3p0NUWjCM6SQ3GaBH2dAwB9qorRc5Ge4ku9m7wvR0EB9j%2FPyMvXqXb0ovkVCzf%2BmZ9mepPw%2Ffto55Jaqh%2B0Aj3gSkti7Jj2ZSZS1wjvCKdyhSld8yUKHVYRNZ1gNfbRAbInmJ2O8yPtxWiQMmFTZedU9cCK45r4SMGhOBWKRarD2yKM1BqfI5CH8SEGQUUCkGowlseVe7JT%2BlH4aJTQsOFWEOCALuw%2BZQTnVifiUOV3cgOSJcKk34ZHSRWJRndbp8VYt8UcYEyteTrRk%2FiwvcDdQkC1VY4jSQy3s0JToR22U4c8kCDAO71L3CtYZhqdPKfcloHBNAFDDezJW%2BBjqkAftx77c0QafI0BjTZjL5p5VUdcsf7I9KXvSsyfYgp0HOTr0PId74jDdxU9gwnGV6OyuD2dO%2BMTkdj4ipuaXD0arGqWVL7pR4c9m1p40NhELZ9bj5wIJjxqzstNgnDL7BVDwnBFMgPTzVTMfGGmsAzYU7naKZTDD9DBGk7T8%2B0VOX7g0oPAaKRLtF8pKK6BydFRaB%2F0oNLW2%2F%2BcXRyQ8axWvzBmQo&X-Amz-Signature=74c3c1f24e1a0297a8b54b73dc9611387b62c5d48f2ee7816d84a35ca8d3c0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYMADCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcR4lPmj7JcGrsQZgHdXs4EP%2BZki5Ob7Pf%2FERE1njG1wIhAMp3aSScSebMEFckpbgn6qL01pkUIis%2Bc3f1WHMZMBwkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygK%2BzJXCpXhoKL7x4q3APYEYaVReS%2BK2jKDuVeP7fV6T%2F2k5%2FkTSbAsv01lKL814pJ9OOOf7TUREzWeq%2BYtzMELXHtgShZ%2FPB7UM44B%2Fk29gmsSNB0ukXpp2a56sHwKMr1w4w5VeP7oYbyvrE4l0l50oy%2BW91Lo5RAOK0vVzByFzna6sOFBYEV0vk%2BdSB6i7BSdCt0hyCRLrYRE2cCBmqGcHaybkeTv6Iodm7EYR5354Aa4dQHSIPifO14O4YFPTQDbqSNYwCc91kT6L2Lv3x5OxUoIcHLPa%2F1aTzLFJN8omC76QBkHFW9Rt61B%2Frp6A5ovJs3p0NUWjCM6SQ3GaBH2dAwB9qorRc5Ge4ku9m7wvR0EB9j%2FPyMvXqXb0ovkVCzf%2BmZ9mepPw%2Ffto55Jaqh%2B0Aj3gSkti7Jj2ZSZS1wjvCKdyhSld8yUKHVYRNZ1gNfbRAbInmJ2O8yPtxWiQMmFTZedU9cCK45r4SMGhOBWKRarD2yKM1BqfI5CH8SEGQUUCkGowlseVe7JT%2BlH4aJTQsOFWEOCALuw%2BZQTnVifiUOV3cgOSJcKk34ZHSRWJRndbp8VYt8UcYEyteTrRk%2FiwvcDdQkC1VY4jSQy3s0JToR22U4c8kCDAO71L3CtYZhqdPKfcloHBNAFDDezJW%2BBjqkAftx77c0QafI0BjTZjL5p5VUdcsf7I9KXvSsyfYgp0HOTr0PId74jDdxU9gwnGV6OyuD2dO%2BMTkdj4ipuaXD0arGqWVL7pR4c9m1p40NhELZ9bj5wIJjxqzstNgnDL7BVDwnBFMgPTzVTMfGGmsAzYU7naKZTDD9DBGk7T8%2B0VOX7g0oPAaKRLtF8pKK6BydFRaB%2F0oNLW2%2F%2BcXRyQ8axWvzBmQo&X-Amz-Signature=088fdfc3c915fb6f051e42c37968c29cef6078f1a6470d378da0bcf39f1b6839&X-Amz-SignedHeaders=host&x-id=GetObject)

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
