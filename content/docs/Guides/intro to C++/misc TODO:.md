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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKSVIGS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT%2BSNuWGVSnf%2BB%2FOEvm%2FWzTS07biraXEnbtHW46wz5rAiEAk%2FRA5zfvY9GwfUHWqHiN3oqefRMsn2Fyl99u0RoRgjoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJECV8e8v2cteGfvQyrcAx51ihHNu0ERe2OeASQGh5Q8rcVt%2BPCNC1TWH4UCaDY7lQfLom62WHWo5si6WgYu1KNgEo11KAO0N8FoePOsajsk0jdIK0a7wVl9dNTdO4ithazdYfTXpZsrRnBkhMxzOAg0uAFwyV7XWMMQTL%2F5fBFozQ4DrkM40L4HsZCKAOaC7suaSmgSahN4p5Zem2z3ybN89XZFrQbmYLdScDsFw2tig64DCEQmXfbrfgH8ruLiXyLx9oH%2F07yvE9nsJ%2BzHWA6sBineh7yw%2BRELw3YCUaA0y6%2FkSAWOtiyXsqK6LDfFEdGcDFcbpNGfulOjMzpzN76X%2Fpw3ZG8WTzawjV34yfgPQSR3so0COWlFBHP5PNhPhODbR6Mpkxfdn8OOCjS%2BxBN7xcI2svfdrNV9jD8UyzovWdkqm1QxbvfLBdGWzuKHOXgoohgM5WzJDsc3lGUVbNgAApjDu%2FY0sUv5Y%2FtzZNJC3a7AEGnSlM%2BvwqMxpOILPEra2jc6e0OYmb88idimbztzOAkd%2FQgvBeoTjUySa4tFiK8YKoxEZ3b3NY0ximPJ3IgC04CpdrWgDY1yq%2F2VU31cIHVRzN1lYr4GIioGiyFYvqH6sDx2ICNSEhwHf%2BV5qS6EgkYDE2RuvABpMP2n%2FcIGOqUBACkp2JL8zXrkq8c73NVJYZJ1chxQZEV0io74pOYvCaehUjoHQvPSAN1GVh9nhm0vF5R1utDDARWsymuW3gdOiYuoMlNpDOmlNbOvYhz0CQbL0zd8vmyAeZKNPFi2bSlHxgF6iLP8uca%2BBUMBDHon6%2Fxv3FQLQEdNJBf5j51lqNjnYjNoK0Ioj2003rcuVoz5hl2JJqdAjDXNd77j30r5KhpuaqHc&X-Amz-Signature=c883141e60e9c4683adad8b73c84b918779099ef9d678f5bc561ad1cdbc7c5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKSVIGS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT%2BSNuWGVSnf%2BB%2FOEvm%2FWzTS07biraXEnbtHW46wz5rAiEAk%2FRA5zfvY9GwfUHWqHiN3oqefRMsn2Fyl99u0RoRgjoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJECV8e8v2cteGfvQyrcAx51ihHNu0ERe2OeASQGh5Q8rcVt%2BPCNC1TWH4UCaDY7lQfLom62WHWo5si6WgYu1KNgEo11KAO0N8FoePOsajsk0jdIK0a7wVl9dNTdO4ithazdYfTXpZsrRnBkhMxzOAg0uAFwyV7XWMMQTL%2F5fBFozQ4DrkM40L4HsZCKAOaC7suaSmgSahN4p5Zem2z3ybN89XZFrQbmYLdScDsFw2tig64DCEQmXfbrfgH8ruLiXyLx9oH%2F07yvE9nsJ%2BzHWA6sBineh7yw%2BRELw3YCUaA0y6%2FkSAWOtiyXsqK6LDfFEdGcDFcbpNGfulOjMzpzN76X%2Fpw3ZG8WTzawjV34yfgPQSR3so0COWlFBHP5PNhPhODbR6Mpkxfdn8OOCjS%2BxBN7xcI2svfdrNV9jD8UyzovWdkqm1QxbvfLBdGWzuKHOXgoohgM5WzJDsc3lGUVbNgAApjDu%2FY0sUv5Y%2FtzZNJC3a7AEGnSlM%2BvwqMxpOILPEra2jc6e0OYmb88idimbztzOAkd%2FQgvBeoTjUySa4tFiK8YKoxEZ3b3NY0ximPJ3IgC04CpdrWgDY1yq%2F2VU31cIHVRzN1lYr4GIioGiyFYvqH6sDx2ICNSEhwHf%2BV5qS6EgkYDE2RuvABpMP2n%2FcIGOqUBACkp2JL8zXrkq8c73NVJYZJ1chxQZEV0io74pOYvCaehUjoHQvPSAN1GVh9nhm0vF5R1utDDARWsymuW3gdOiYuoMlNpDOmlNbOvYhz0CQbL0zd8vmyAeZKNPFi2bSlHxgF6iLP8uca%2BBUMBDHon6%2Fxv3FQLQEdNJBf5j51lqNjnYjNoK0Ioj2003rcuVoz5hl2JJqdAjDXNd77j30r5KhpuaqHc&X-Amz-Signature=b8da18a30f5f6c28e6a0350255de299f7df1e39c15fb2d2a4bdb8a7557e15e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
