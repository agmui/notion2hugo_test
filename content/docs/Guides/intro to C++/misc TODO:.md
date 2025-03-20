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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVXV6DX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCN50H%2FJjekUow1R8O5QC0meFpnO5f%2FboSZopA5JZJBJgIhAIDrhvUvgn3%2FQf%2FC6ydwIZl7hnbdd05NlsUGLWQeXwM%2FKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuMsO6w6l2fYKnyEq3APafKn6YxbSYPBEs%2BQc0%2BOw07hiBRyJT2pQiakDQ43%2Fa8D0heImka%2BgkrqJLOYXQTzKeREGqa29dcTAArFN7vKqCQeAa0%2B0sSCSAjXhFlK8B9bD71euwC4kT4HyAaPiTemiqR2HdxwmYI7pXv95E5aptX1xpDZiLX0%2Bz75S1LIQFrfqJdlbjJIlVejLCUlN%2F8nxsn1WuRRiTtcdunXSk6eXyPvsZdKE5b3Bzuyx6wZO%2BAiW%2FP9AxYrce17%2Beip0oyuAbtxi6lJav1ed4ASe%2FJRxZm4i1TbewXxLVGQm68nzV6syicUZM0CgP8XorfJRSmECyICyR398n1Jvv2DY3In6xqcf6c9%2B0309D4O7KSqPrv6%2FrRz5uMdbclq8RA4G9hP%2F8alkwQoeGh4MI3RhyuiXCGQUGeobNPGlgMk1JEXokZyQcIbODYsaTU72fgYm95XXyXvbiv2Vv07Qy16K%2FxjXo%2BkEaZuNQK9eEDNtsmCZHhu2N7UwgzhK%2FB3SJ9wsnmKZnv6h2kZ6%2BSSz1tCnSVDFafHbCoU9yKP%2FGv4XAvQJc0MOQqkCCznID3GW%2Bh4GKdvYotqq2DyakZIGMT88VW0jkiVQaFzLoBiOIWeU8styOqk9kQcU77FJKWsFWzDDhu%2B%2BBjqkATJJvlNmh9Puix3egMGEEUA51T2wVwzgv5QczJpnnxSkT9fx8ZHejPvT%2FS6dH7pu1Zrs1XIe0aPSXutq%2BUSMGbbELQ4tSfwIPMKdJXdNeM%2F%2FfTJTFhNjRRiU05Sym75rdO8tM1TfVsbW6jdxzYvesSRxSfOOHyShOVAePjtr3b3CrxKlnrNVi0jLfuZFONOx6m4USRBWAyySvPZTgg9i0MdUWmXt&X-Amz-Signature=3d699bda72c45290b5350f6f3df5491cefaeb21ff64c0886fff7e8bed0bb8f15&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVXV6DX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCN50H%2FJjekUow1R8O5QC0meFpnO5f%2FboSZopA5JZJBJgIhAIDrhvUvgn3%2FQf%2FC6ydwIZl7hnbdd05NlsUGLWQeXwM%2FKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuMsO6w6l2fYKnyEq3APafKn6YxbSYPBEs%2BQc0%2BOw07hiBRyJT2pQiakDQ43%2Fa8D0heImka%2BgkrqJLOYXQTzKeREGqa29dcTAArFN7vKqCQeAa0%2B0sSCSAjXhFlK8B9bD71euwC4kT4HyAaPiTemiqR2HdxwmYI7pXv95E5aptX1xpDZiLX0%2Bz75S1LIQFrfqJdlbjJIlVejLCUlN%2F8nxsn1WuRRiTtcdunXSk6eXyPvsZdKE5b3Bzuyx6wZO%2BAiW%2FP9AxYrce17%2Beip0oyuAbtxi6lJav1ed4ASe%2FJRxZm4i1TbewXxLVGQm68nzV6syicUZM0CgP8XorfJRSmECyICyR398n1Jvv2DY3In6xqcf6c9%2B0309D4O7KSqPrv6%2FrRz5uMdbclq8RA4G9hP%2F8alkwQoeGh4MI3RhyuiXCGQUGeobNPGlgMk1JEXokZyQcIbODYsaTU72fgYm95XXyXvbiv2Vv07Qy16K%2FxjXo%2BkEaZuNQK9eEDNtsmCZHhu2N7UwgzhK%2FB3SJ9wsnmKZnv6h2kZ6%2BSSz1tCnSVDFafHbCoU9yKP%2FGv4XAvQJc0MOQqkCCznID3GW%2Bh4GKdvYotqq2DyakZIGMT88VW0jkiVQaFzLoBiOIWeU8styOqk9kQcU77FJKWsFWzDDhu%2B%2BBjqkATJJvlNmh9Puix3egMGEEUA51T2wVwzgv5QczJpnnxSkT9fx8ZHejPvT%2FS6dH7pu1Zrs1XIe0aPSXutq%2BUSMGbbELQ4tSfwIPMKdJXdNeM%2F%2FfTJTFhNjRRiU05Sym75rdO8tM1TfVsbW6jdxzYvesSRxSfOOHyShOVAePjtr3b3CrxKlnrNVi0jLfuZFONOx6m4USRBWAyySvPZTgg9i0MdUWmXt&X-Amz-Signature=613370e89623a626b6ee2f8939c50b4961c4d57aa274155f603b14d823f2e732&X-Amz-SignedHeaders=host&x-id=GetObject)

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
