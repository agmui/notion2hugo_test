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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCR2QLQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjYJihQNK2tUYgoUkQeEvrWyK15EzYNdFuStj6%2B%2BFDIgIgPK7BlSPk8cEBzHQO5GGeJd0RFeYmyzA47n%2F7pj1KiCwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb6XkUrtJ4Hr2r1PCrcAzob4MxxNqwt0Ebtah3nAqFLn4DWtvHWJhrIBvIBUjhTKEKVi3eEp4WlauxpRDKmWECq0c2%2BahAan8X8YROW%2BTxvom2YEQ6HnIUMo7aAkDYGdcdLdECJYi0m7y0n%2BQcz3dFJL58fZxbDO955r7%2FcGM3BCKZnYHMakq3quqVXV7ec8EFpUArjkveEQOVHpgDc4%2B2%2FfAP2n4j7f0BJw1O8S%2BH%2FI5B3i4gGZsv60B7v1XcY0GXbT8DhoCsn2V%2F%2BruKqy8m1jnm4kQV1W8A108JpIrHJSNBiISyLk6kJ9eBeuf4nLSUweU7Ci8v1F%2FyY%2BX9qTb5oFVToD6F8tiOTCS%2BQqopI57ivEv%2BgxH5iX4CF7iDWGxwbvcP6ke17XlTekjvx2qCTwrzXptKAA%2FuBtJrSD6uhZOqN9kb0LLagc3VJ7aFrbRtVbB%2BlEbujJ0TP2OJF%2Bk8xnsxmbBjQqvisECCjcQAaoS2YH4P91%2FB0XjHjwkoPwa2OmtXpIeSEJW6JDyK738YrAlwzVOk3jl2Fn1xqvx7mQ%2F9W%2FQcwejOWU26O5IjYAZEnhHLevHO1Bm62keXR%2F%2BFQegW8ZqpxPUDsnt%2B2XKXDCRRpMCN8wL7mZ4EiA6DktMPk40qPF3cWIwOhMNimtMMGOqUBFxhjixEvNUiEdKW87NWFaZRESFGKyA1UpPmsS6FbQMaJ9lRaeMqxKi6QJBOAYGww1wOb410tRJJos82qBXP6BTnC1qlqT%2FDu3%2BEwPq4ht8WBKwcTAmhVozpob9i0W8eZ9Nj68eaiepOJ8LDYW3ttfEnFt6wtJ5%2F07tNjd4RPalRC4tqlqq6yKIuij%2BrUHZZhdA03zKcuZtdqYXklFur7Qb1gfTj2&X-Amz-Signature=ae0660aaf96e6c972cc22d315cadca160e3378fca3db80fdea0a596ab6bd8fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCR2QLQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjYJihQNK2tUYgoUkQeEvrWyK15EzYNdFuStj6%2B%2BFDIgIgPK7BlSPk8cEBzHQO5GGeJd0RFeYmyzA47n%2F7pj1KiCwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb6XkUrtJ4Hr2r1PCrcAzob4MxxNqwt0Ebtah3nAqFLn4DWtvHWJhrIBvIBUjhTKEKVi3eEp4WlauxpRDKmWECq0c2%2BahAan8X8YROW%2BTxvom2YEQ6HnIUMo7aAkDYGdcdLdECJYi0m7y0n%2BQcz3dFJL58fZxbDO955r7%2FcGM3BCKZnYHMakq3quqVXV7ec8EFpUArjkveEQOVHpgDc4%2B2%2FfAP2n4j7f0BJw1O8S%2BH%2FI5B3i4gGZsv60B7v1XcY0GXbT8DhoCsn2V%2F%2BruKqy8m1jnm4kQV1W8A108JpIrHJSNBiISyLk6kJ9eBeuf4nLSUweU7Ci8v1F%2FyY%2BX9qTb5oFVToD6F8tiOTCS%2BQqopI57ivEv%2BgxH5iX4CF7iDWGxwbvcP6ke17XlTekjvx2qCTwrzXptKAA%2FuBtJrSD6uhZOqN9kb0LLagc3VJ7aFrbRtVbB%2BlEbujJ0TP2OJF%2Bk8xnsxmbBjQqvisECCjcQAaoS2YH4P91%2FB0XjHjwkoPwa2OmtXpIeSEJW6JDyK738YrAlwzVOk3jl2Fn1xqvx7mQ%2F9W%2FQcwejOWU26O5IjYAZEnhHLevHO1Bm62keXR%2F%2BFQegW8ZqpxPUDsnt%2B2XKXDCRRpMCN8wL7mZ4EiA6DktMPk40qPF3cWIwOhMNimtMMGOqUBFxhjixEvNUiEdKW87NWFaZRESFGKyA1UpPmsS6FbQMaJ9lRaeMqxKi6QJBOAYGww1wOb410tRJJos82qBXP6BTnC1qlqT%2FDu3%2BEwPq4ht8WBKwcTAmhVozpob9i0W8eZ9Nj68eaiepOJ8LDYW3ttfEnFt6wtJ5%2F07tNjd4RPalRC4tqlqq6yKIuij%2BrUHZZhdA03zKcuZtdqYXklFur7Qb1gfTj2&X-Amz-Signature=0cde28a0a3a09679c60a0be27a7105afd0d0e7a8fc8aad6fa37fef8f6c38f6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
