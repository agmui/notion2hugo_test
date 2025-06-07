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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6BR5IC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0jQOiYkMXQCVpTrprdtGfNCw3%2B5Gv419RrpLZ2NYHwgIhALkvLJHJhrrVFLtYXfByfCfYWKzL8M1mttkvUIa%2B7RudKv8DCGsQABoMNjM3NDIzMTgzODA1IgzFqv4tMh4S9%2B8IlWsq3AMGnaGhECD25rgLQzL9jEhvzCuJDIjl%2Fcu2fjRsgZ%2FBcccj%2B07jKLWQ9tAIhCZqoAjsjvAO8Hb%2Bb9X1RG9KlOLwva1clE4riqILplwFLlfsawcJFHtzkzF8MdlxTPqSCN0TzRhNOTUuwGs0P9R%2BaqFsOgITAs%2Fzou1nbTNaLoiFFXOFFYLFwnw%2FByvqyoXTij7D7SBJeEC0twP58EzW%2Bmj529qbH2%2BSIi71rmjJu8RT%2Bnq9oHuPzaDHTQvDHoCqAoapps8dYKS0%2FouIQp73QLsNZYI9xQsEp3p%2BbYKIP2X5I1vFmJWSpBrIj7fV2Cpv9pclOtfPlJjtbkIx0ea8p9pVCq8cWzKLbSoBo5oqdM1miVlYxtcYSmuqjMbZbH%2BDw3vd5K6BBVHM%2BMZNp07EhnsZoRHD%2FtYu42w60k0FMEkaEyM3Wqv5I9NWUPBKbUA4ITMKoQzQILpq24dQkLRlCdTzzbT39CImeXauo7dgV5w3ZEuA%2B6ek7O06jVLaCzUIi98MYD1cwZ595KXWt3nZpejK%2BbH7Z0cYW%2B7pQpA3RWL700diR07oYYWnzk4YhK0uxxrh%2BqByafxoMERrPiSSFTI1ZYt9Z%2FZDX%2BdiQLMvYVVgQJPFnOyU%2B9Cl%2F9dTwjDLwI7CBjqkAZ6g8KekNTJr8zPCIZbQr5sxFftw3%2BwJU07k5F1AKuPyxR4aMFu4OJmnBCSjq4aWXCYzr%2FYAyeEVkd4oIZAhC7ceyNFNLXE%2FmYGxdExlK6gZvgCVVmKB94q2k9WgmlS2zQCJWQNPID96H1lcDuuBxm1U4%2FjHGgAkn3U0%2FDlT4h2LnjiuPEg7JBTgeOZt%2Bqyp%2B9xDVIUOMfV7hH2v%2Fujwdmv1ysnP&X-Amz-Signature=fc1ae5be3227121a1acb703fec3b459f02c45b9521ab5c40bf1c884024d438f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6BR5IC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0jQOiYkMXQCVpTrprdtGfNCw3%2B5Gv419RrpLZ2NYHwgIhALkvLJHJhrrVFLtYXfByfCfYWKzL8M1mttkvUIa%2B7RudKv8DCGsQABoMNjM3NDIzMTgzODA1IgzFqv4tMh4S9%2B8IlWsq3AMGnaGhECD25rgLQzL9jEhvzCuJDIjl%2Fcu2fjRsgZ%2FBcccj%2B07jKLWQ9tAIhCZqoAjsjvAO8Hb%2Bb9X1RG9KlOLwva1clE4riqILplwFLlfsawcJFHtzkzF8MdlxTPqSCN0TzRhNOTUuwGs0P9R%2BaqFsOgITAs%2Fzou1nbTNaLoiFFXOFFYLFwnw%2FByvqyoXTij7D7SBJeEC0twP58EzW%2Bmj529qbH2%2BSIi71rmjJu8RT%2Bnq9oHuPzaDHTQvDHoCqAoapps8dYKS0%2FouIQp73QLsNZYI9xQsEp3p%2BbYKIP2X5I1vFmJWSpBrIj7fV2Cpv9pclOtfPlJjtbkIx0ea8p9pVCq8cWzKLbSoBo5oqdM1miVlYxtcYSmuqjMbZbH%2BDw3vd5K6BBVHM%2BMZNp07EhnsZoRHD%2FtYu42w60k0FMEkaEyM3Wqv5I9NWUPBKbUA4ITMKoQzQILpq24dQkLRlCdTzzbT39CImeXauo7dgV5w3ZEuA%2B6ek7O06jVLaCzUIi98MYD1cwZ595KXWt3nZpejK%2BbH7Z0cYW%2B7pQpA3RWL700diR07oYYWnzk4YhK0uxxrh%2BqByafxoMERrPiSSFTI1ZYt9Z%2FZDX%2BdiQLMvYVVgQJPFnOyU%2B9Cl%2F9dTwjDLwI7CBjqkAZ6g8KekNTJr8zPCIZbQr5sxFftw3%2BwJU07k5F1AKuPyxR4aMFu4OJmnBCSjq4aWXCYzr%2FYAyeEVkd4oIZAhC7ceyNFNLXE%2FmYGxdExlK6gZvgCVVmKB94q2k9WgmlS2zQCJWQNPID96H1lcDuuBxm1U4%2FjHGgAkn3U0%2FDlT4h2LnjiuPEg7JBTgeOZt%2Bqyp%2B9xDVIUOMfV7hH2v%2Fujwdmv1ysnP&X-Amz-Signature=8547f8ca9cfb88c9fe6d7af60314f5e60ff78b0019a97a0021fdc477c7b66b83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
