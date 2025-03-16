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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEBFA4C%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVA4KxdS8fCSKiV6JBsjtVKCcuJqlhjhcMArquxCTG5wIgY3mgqti5f9tVkTmEEDNaelJVQibMznmV35GKl3R5Gvcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJmTVtOrQ6xIH5SW8yrcAyyynH5Y85at%2Fu1XPmyhN5dwfUC6R5Ez%2BAdd2IdWhcVxiDosP%2BTpP9DVcxBYsTfdUD7z4qQQTlmDNZLfRue49cjvnyrXowmvM6jVYKvInRCBoTCtJhhaPfqixDMLNJF3folS%2FnJa8QvPxxao3yBQ1uaFNPDg2aRT12aB3sVY8K%2FfLF1lloW%2BhZJcq1yIdfIJRnU7wPnNQKBHsJ9BzAYa6em47aQ7N9%2F2eoRb1n8l%2FmN%2BURoT%2FtSKBCUxxipQ0zNcBDmmLjhP1PeccNItkNTnEHx1OHIphZESgnHAx9zJJdPdpE1keR%2Bi0tF70pYvTgEaeYH4O7DF0K5QHKRwqW7GlE7MGHRz7hpAip7MQuthi9BpVTmighpTMhhdTTgWmVzfK7Vezf%2F8dBeypJM%2BkshZxDqKujtoPo5V0033O8QDesTMvndj9WvwsvhrLe2w%2BuykPr%2BsLM0e1f68cucxUBs7FuDVX0AcFIRyyWxPCvCcMBrJsWhPUU8Gb5vRe84ktGZY2Ioc5gbLQLJOPsb%2BNH1T9kmTwrvdjQzQmtVhuEbvuoochK7ZfezjzZaNObYV3lpKAKaWXSDxHBjplI2Ez8NH1UdQ1VZdCrAcO7lhMd5OYVMtmKX8PkpKVshRbds8MLOB2L4GOqUBYPvIdtupmeM%2BriJtxc6bq%2FfrWUSvA6%2BJmKTFaG8WjJpep14ejMqSZS%2B%2B4reOf6bYIBN4Ef1IYTEFp%2FS%2B7I7BsBWpphFzXrCPOUyYk%2BhpzIrXS6z28yKxjhEznWj4mTy%2FsKY9O07XJ0oZTWw1tUIwrGQtP1icijyT5tUDr%2BSQXjnBC7dGbx0hZSug71iLs1jcr2Hy1a7sqeLbT8v4Of1DVUCmJPwH&X-Amz-Signature=afb1ac4709b827e971ad3378328d06acca5ee862ed9b4f267e0d6db78b3f6f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEBFA4C%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVA4KxdS8fCSKiV6JBsjtVKCcuJqlhjhcMArquxCTG5wIgY3mgqti5f9tVkTmEEDNaelJVQibMznmV35GKl3R5Gvcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJmTVtOrQ6xIH5SW8yrcAyyynH5Y85at%2Fu1XPmyhN5dwfUC6R5Ez%2BAdd2IdWhcVxiDosP%2BTpP9DVcxBYsTfdUD7z4qQQTlmDNZLfRue49cjvnyrXowmvM6jVYKvInRCBoTCtJhhaPfqixDMLNJF3folS%2FnJa8QvPxxao3yBQ1uaFNPDg2aRT12aB3sVY8K%2FfLF1lloW%2BhZJcq1yIdfIJRnU7wPnNQKBHsJ9BzAYa6em47aQ7N9%2F2eoRb1n8l%2FmN%2BURoT%2FtSKBCUxxipQ0zNcBDmmLjhP1PeccNItkNTnEHx1OHIphZESgnHAx9zJJdPdpE1keR%2Bi0tF70pYvTgEaeYH4O7DF0K5QHKRwqW7GlE7MGHRz7hpAip7MQuthi9BpVTmighpTMhhdTTgWmVzfK7Vezf%2F8dBeypJM%2BkshZxDqKujtoPo5V0033O8QDesTMvndj9WvwsvhrLe2w%2BuykPr%2BsLM0e1f68cucxUBs7FuDVX0AcFIRyyWxPCvCcMBrJsWhPUU8Gb5vRe84ktGZY2Ioc5gbLQLJOPsb%2BNH1T9kmTwrvdjQzQmtVhuEbvuoochK7ZfezjzZaNObYV3lpKAKaWXSDxHBjplI2Ez8NH1UdQ1VZdCrAcO7lhMd5OYVMtmKX8PkpKVshRbds8MLOB2L4GOqUBYPvIdtupmeM%2BriJtxc6bq%2FfrWUSvA6%2BJmKTFaG8WjJpep14ejMqSZS%2B%2B4reOf6bYIBN4Ef1IYTEFp%2FS%2B7I7BsBWpphFzXrCPOUyYk%2BhpzIrXS6z28yKxjhEznWj4mTy%2FsKY9O07XJ0oZTWw1tUIwrGQtP1icijyT5tUDr%2BSQXjnBC7dGbx0hZSug71iLs1jcr2Hy1a7sqeLbT8v4Of1DVUCmJPwH&X-Amz-Signature=084ea281d8b59ab756b26c3f2d11e72e2fcdbee58c97e4d381d41a8533732b31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
