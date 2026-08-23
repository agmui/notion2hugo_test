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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4RFY7Y%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA6hOgd2A6KnpFOdeHVMoBZL6U2HxFP8HEQfXyYNgD8MAiEA99Nzf4VSWLX4egVvYieiLZZLf6O86BRYtXqGYa94Dn4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP45zRhgAxyI6fYWAircA%2FIw1%2F0HmFlHDdyB%2BspuYKftRVr2l0AchzUfRNW%2FvTzCkVSU36oSlkastwl8yExMFEctcCjkACITYFTdEnbCGX3VZWN819xhM9TZH4VVjPByfFnAqxVZmz2UHf3tJUaiNKRS8yzYH%2FPVtE%2F5p8JpfMoPuxNYB%2BtmIaGnu%2BkcVXw90MOXihtbFY4D%2BpCE6JBDVzM3jpl9dLwvOTPJY4yddJ6JpTXPLMQvjF3OrR2kBT23gq%2BJIP0I%2BNIDAGRshk2bSDb1BnB1WQBhRpIH%2FQKorgg2oNv7ZiyOTO833GeK3JKgMmhZXSvUeGdMgmla6cXtwjMxpqBFNXVlhANAU8zHQwX8sn1%2F%2BfAeh1v%2FvTx07oWsUr4396i3D9PdstesxIQX6gc4GuOYLAHdGC8Crv9sEG7vTGnatIPiIClBq7kIi4GbybPdtGUIDZfglNhlWYOrOCR6%2Fqo%2BopSyLYkY%2FaT%2Fw4T6OovrUxnNP6B5J0izcshcP2R%2FB2UrgCnsoNWh5nFSxbFp9JLeLdDwZrvHiPb7D3L6EPEiQnkhlZLGLU0ADeTl82AP0SJUDn4xDgYEOLHmlu%2FrFPXzcLwq8w7mNmEmOOXAb8DZqfPu0WkohaPlrHOBYP6JAFsL4R6wYFLcMIOHqdQGOqUBsn7WDdp000Yx0rz1xreuP%2F%2FCoTLjYTybc%2BH1wBnN3nFCP5uHX%2FfNV2MT3dIEGQUIbHSle1DXGHnhCwaOL9awEHi2%2Fw9SjaXRdkyp4jY8DR1%2FYUsN8PkvduEEPCKeix%2BYKA3g8Qps40gLuKQa5IwTbCUSp%2ByvSAbD%2B39yvlhUt2p48p%2FyHGgry%2Ffqb8nrocRf5MviDwbTv8xGxCKtRjvMntMaKmXh&X-Amz-Signature=f16065a4bad8b96a5c253d0468e43c83c60779108aef490db22b5abeedb6988b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4RFY7Y%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA6hOgd2A6KnpFOdeHVMoBZL6U2HxFP8HEQfXyYNgD8MAiEA99Nzf4VSWLX4egVvYieiLZZLf6O86BRYtXqGYa94Dn4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP45zRhgAxyI6fYWAircA%2FIw1%2F0HmFlHDdyB%2BspuYKftRVr2l0AchzUfRNW%2FvTzCkVSU36oSlkastwl8yExMFEctcCjkACITYFTdEnbCGX3VZWN819xhM9TZH4VVjPByfFnAqxVZmz2UHf3tJUaiNKRS8yzYH%2FPVtE%2F5p8JpfMoPuxNYB%2BtmIaGnu%2BkcVXw90MOXihtbFY4D%2BpCE6JBDVzM3jpl9dLwvOTPJY4yddJ6JpTXPLMQvjF3OrR2kBT23gq%2BJIP0I%2BNIDAGRshk2bSDb1BnB1WQBhRpIH%2FQKorgg2oNv7ZiyOTO833GeK3JKgMmhZXSvUeGdMgmla6cXtwjMxpqBFNXVlhANAU8zHQwX8sn1%2F%2BfAeh1v%2FvTx07oWsUr4396i3D9PdstesxIQX6gc4GuOYLAHdGC8Crv9sEG7vTGnatIPiIClBq7kIi4GbybPdtGUIDZfglNhlWYOrOCR6%2Fqo%2BopSyLYkY%2FaT%2Fw4T6OovrUxnNP6B5J0izcshcP2R%2FB2UrgCnsoNWh5nFSxbFp9JLeLdDwZrvHiPb7D3L6EPEiQnkhlZLGLU0ADeTl82AP0SJUDn4xDgYEOLHmlu%2FrFPXzcLwq8w7mNmEmOOXAb8DZqfPu0WkohaPlrHOBYP6JAFsL4R6wYFLcMIOHqdQGOqUBsn7WDdp000Yx0rz1xreuP%2F%2FCoTLjYTybc%2BH1wBnN3nFCP5uHX%2FfNV2MT3dIEGQUIbHSle1DXGHnhCwaOL9awEHi2%2Fw9SjaXRdkyp4jY8DR1%2FYUsN8PkvduEEPCKeix%2BYKA3g8Qps40gLuKQa5IwTbCUSp%2ByvSAbD%2B39yvlhUt2p48p%2FyHGgry%2Ffqb8nrocRf5MviDwbTv8xGxCKtRjvMntMaKmXh&X-Amz-Signature=357ab1313d7b545f9328cc843c7b58b5ffb0cdb29a2bdab85cc1d6d9505dc3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
