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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OHQ5U22%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5zVFA7zbwTan24puBUAh%2Fzri6f0HEF3OuCQX9u0yjPAIgJZ1CWsUHkvqx9I8GGZQMNRoB0bLl2rd%2BvCZhs66CSD4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv0bOxDnIuj%2F%2FJibSrcAyCzTyudoIltqbD7lArlHdEwkiu9q%2BQ%2FtmQQxU05jNKgSh1lZ1iNCxVRerInd28xNLINJUXUr4Jz5DABsX6h36zDglwSdNlt0ZhfP1gUl9AQmslqFtJX8Qfg8IVR3fVxAJk4WJ3wSXeBbnUtZw2A01jqcN3yGQeBkqQIjzesjiyj72QyXtDbZEo74adWuZR9RYhUM%2BTkej%2BQB%2FQNd%2Fd%2F9n6WutVOA1%2FFVwQbSKPJRbPfC517zlo6nwvZRbeCPNQgTo%2Fml7Xh6ThKugdkmIGemdk%2Bp%2BfAKaNxtKA6ojDcvGESRMTQcll3crsXI1cIrItqYOFxzGRoAK9Wd5al0p4b5bMhaV4jmWJbZvFvXYMJsNyZ1TrtOHPi8pkqNq%2BRjXl9IV0TLl1KOTm0qKBxAbOYraPefCzboGnTCHDCYCmQFBpGI%2BQeJvLZ5f0QmgiyQIEx7234MLceeh4O7UsW2W4zIYuKqAKQcBJX7iWBMjX4v7TGjFPN%2FA4WjWnQSmTT3SA5PN4bjcH5PkZxmwCPxqUkwpwLWSDwpgevQwdF9P6wds8Ud3eUdTITnAA%2BjYy6SyaAOYcFKckc%2FaIvvZOArVy82j75ErUkgY2mVFhxkBZi9v7QUielng0gKjqefbpEMP%2FMhsMGOqUBZeLbcmzH4p%2Fr7hGlA6p2GaEXTHFZWxh5Nw5b1hv%2FDpF3fDuWgzgm4MnFcJd7l9t5q%2FvDbcWZC%2FvypL1adoyadbhUWAe%2B9eDRbXRyhbrcZiuqMXaX9K9Mp8kZAOwdgzlCC6ow9RJQXDXSgpRKu1MXi9oyZTi6D4fBjQ6gV4hAW1DFwGxd2Wc6C7TlfkfO7VZPe0ZESrADjdBv90Rxxgtqnh4p0beD&X-Amz-Signature=9c38a89605cabd3b488f9699f1e5b77ae6c6777ac987dd57a2ebda7f11223c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OHQ5U22%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5zVFA7zbwTan24puBUAh%2Fzri6f0HEF3OuCQX9u0yjPAIgJZ1CWsUHkvqx9I8GGZQMNRoB0bLl2rd%2BvCZhs66CSD4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv0bOxDnIuj%2F%2FJibSrcAyCzTyudoIltqbD7lArlHdEwkiu9q%2BQ%2FtmQQxU05jNKgSh1lZ1iNCxVRerInd28xNLINJUXUr4Jz5DABsX6h36zDglwSdNlt0ZhfP1gUl9AQmslqFtJX8Qfg8IVR3fVxAJk4WJ3wSXeBbnUtZw2A01jqcN3yGQeBkqQIjzesjiyj72QyXtDbZEo74adWuZR9RYhUM%2BTkej%2BQB%2FQNd%2Fd%2F9n6WutVOA1%2FFVwQbSKPJRbPfC517zlo6nwvZRbeCPNQgTo%2Fml7Xh6ThKugdkmIGemdk%2Bp%2BfAKaNxtKA6ojDcvGESRMTQcll3crsXI1cIrItqYOFxzGRoAK9Wd5al0p4b5bMhaV4jmWJbZvFvXYMJsNyZ1TrtOHPi8pkqNq%2BRjXl9IV0TLl1KOTm0qKBxAbOYraPefCzboGnTCHDCYCmQFBpGI%2BQeJvLZ5f0QmgiyQIEx7234MLceeh4O7UsW2W4zIYuKqAKQcBJX7iWBMjX4v7TGjFPN%2FA4WjWnQSmTT3SA5PN4bjcH5PkZxmwCPxqUkwpwLWSDwpgevQwdF9P6wds8Ud3eUdTITnAA%2BjYy6SyaAOYcFKckc%2FaIvvZOArVy82j75ErUkgY2mVFhxkBZi9v7QUielng0gKjqefbpEMP%2FMhsMGOqUBZeLbcmzH4p%2Fr7hGlA6p2GaEXTHFZWxh5Nw5b1hv%2FDpF3fDuWgzgm4MnFcJd7l9t5q%2FvDbcWZC%2FvypL1adoyadbhUWAe%2B9eDRbXRyhbrcZiuqMXaX9K9Mp8kZAOwdgzlCC6ow9RJQXDXSgpRKu1MXi9oyZTi6D4fBjQ6gV4hAW1DFwGxd2Wc6C7TlfkfO7VZPe0ZESrADjdBv90Rxxgtqnh4p0beD&X-Amz-Signature=4367c9ab44e689c2966db8dff31e467b229447344306569c4e805618b51cb7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
