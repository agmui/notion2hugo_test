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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCUPNC7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBLWeiCGVtirKvNOt5sPh%2FOCdOEz%2FO9sShJbUvDJLjBGAiEA5Lo3i5CUd4O36dVF6vbx9fGUK7GyhpnecDrHUD9wvQ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKDIRzlXrxsjiiJ4gircAxRu%2Bf8EoisDZk7I8gVMYryvvpuHw2RMqe6y3%2BS0AOvNPsPaheLzS7kioiKrfaLPh1EKIdQ2sZEW5NZn6YPcNXXf2N4a01IfITleI8rM1mb5aD9k%2BbTxmmyRmL5Q8NhzlXJk9Q2kh8ZzsS4vmIyE%2Bjw0tzr77zUpSyNxHwowbbeqrz26mrO4BJ1V4KYLUtDw7%2Fo0YdU%2FP1ubRoH0rbKyjh55XQrh7qSKZuvrugRqd1uS1RNC3RuyF%2B%2BD8Ql6vS8jzk0%2B%2FD7zFuCH2w6KOmj9tUAh9crWOb2rVXIw9EJ6ywcQiFwlFlkigbmOyCwEj2lllRgt016D0fWgmqqyghGLBG4BP8MpOIol4KBepDCWg77SpPbKNp5K%2FDuiOgK1U65oVig0ukD5u9YrmiP6wm4PfSZ0X0k%2BHRD14R0slLkqqvHBGl3VpUzmaIY%2Fa%2BGtdns0S7gxoylu9CveVIW1kcfDdZMZZankBzK0Ad1K5jpwJ%2F9mM5ZNgbbTp1cCKYDs9A%2BnfLUqlEexHFC8mu%2FW3%2FmDpVzFEVWOcJ6NOODLnruA1b5OsO0fKIj2Y0JBwl%2BrjTJ%2FDe12M9A7hpq8ERQTOwBnhqLYvhw7lkAiN7%2BhP0gHWulx0BavTwQTwszJ6quWMIa6lMEGOqUBTiIOSWc7PGj2Aw3KiPsVMzahObonBjHlPgB40hw7tr%2Fo5EodvPpjW36osOD%2FFUKwYzhdd7TPyWrF7K0sEdCY25YHBdbcZgdmaPKhZ%2FvHPwK0GfdqzyjJHVg4WBYQDIaagnFg%2B2srLeptjYvcOl%2FTW%2BqUPplWjkp9HLBRXP4w2vba1PK%2Bih76j9vfS8GhRTpccmRHBB2idNq1rurbtIbwaLjdjsz7&X-Amz-Signature=8996b004735bfbe408e0745399464b34aeebc4bc99316eaf0ffec25d6285c90d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCUPNC7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBLWeiCGVtirKvNOt5sPh%2FOCdOEz%2FO9sShJbUvDJLjBGAiEA5Lo3i5CUd4O36dVF6vbx9fGUK7GyhpnecDrHUD9wvQ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKDIRzlXrxsjiiJ4gircAxRu%2Bf8EoisDZk7I8gVMYryvvpuHw2RMqe6y3%2BS0AOvNPsPaheLzS7kioiKrfaLPh1EKIdQ2sZEW5NZn6YPcNXXf2N4a01IfITleI8rM1mb5aD9k%2BbTxmmyRmL5Q8NhzlXJk9Q2kh8ZzsS4vmIyE%2Bjw0tzr77zUpSyNxHwowbbeqrz26mrO4BJ1V4KYLUtDw7%2Fo0YdU%2FP1ubRoH0rbKyjh55XQrh7qSKZuvrugRqd1uS1RNC3RuyF%2B%2BD8Ql6vS8jzk0%2B%2FD7zFuCH2w6KOmj9tUAh9crWOb2rVXIw9EJ6ywcQiFwlFlkigbmOyCwEj2lllRgt016D0fWgmqqyghGLBG4BP8MpOIol4KBepDCWg77SpPbKNp5K%2FDuiOgK1U65oVig0ukD5u9YrmiP6wm4PfSZ0X0k%2BHRD14R0slLkqqvHBGl3VpUzmaIY%2Fa%2BGtdns0S7gxoylu9CveVIW1kcfDdZMZZankBzK0Ad1K5jpwJ%2F9mM5ZNgbbTp1cCKYDs9A%2BnfLUqlEexHFC8mu%2FW3%2FmDpVzFEVWOcJ6NOODLnruA1b5OsO0fKIj2Y0JBwl%2BrjTJ%2FDe12M9A7hpq8ERQTOwBnhqLYvhw7lkAiN7%2BhP0gHWulx0BavTwQTwszJ6quWMIa6lMEGOqUBTiIOSWc7PGj2Aw3KiPsVMzahObonBjHlPgB40hw7tr%2Fo5EodvPpjW36osOD%2FFUKwYzhdd7TPyWrF7K0sEdCY25YHBdbcZgdmaPKhZ%2FvHPwK0GfdqzyjJHVg4WBYQDIaagnFg%2B2srLeptjYvcOl%2FTW%2BqUPplWjkp9HLBRXP4w2vba1PK%2Bih76j9vfS8GhRTpccmRHBB2idNq1rurbtIbwaLjdjsz7&X-Amz-Signature=11ffe4936a292e256413fe384ab9e6ae4e8d90d9be5f61805e3aea95164ec64f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
