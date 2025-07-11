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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SSQJDE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDLeVNLnVT2Ovq8757GwY0UOfe9JjaWE4rYP1Fdpv0GAiAh49nzRN9tPEUCGq51nw6%2FGNofwhSyCPIwmmBHRQnp5yqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIvK6goZ2H9knyU9KtwDSiF%2BmR5vfDnUxQUHAS5Yv07a6qSz4bX9rJaRv08kn8lSI2kHw%2FEib9ZXFUUFQvAwGsA%2BAQJxJXfxG38LbgTRjjRpi9bNbu8WF6MAoSv75s%2F%2BI78Lvgau5HEZEhHxvRTtLCNxdZgpxnUifnrC6Z8lnCE%2FNTNhfX48EYvkQ6WueAWc4N2hOigyZDjrGZFc5hdYCtfxHkYKBwO6qxs7orpnlxJLEWqMFUa2vjliEJTZyeYEVI%2BozCfDhebybEYt6svATLJ7Vpn2POsHR5mje7kf02sXvHAsFM7MVvUnQf0dNwZ53UfBQe8ly%2Fec9zSj372icv%2BiDZ1IgPGOS7CkMWPIParjwZQNj0u15yxIp5SkOmT%2BdhBqaC0yG75i3O%2FF0mefyhU0ugtpK6LrPuSLZ8gvu9lS21GoVi0NXdmDpPhO7YqZVwk6zEhZ4U0NpfIGdqIEPQNUFQfmXGmOi2IoO%2BQuReulYW4bgIEUssjbpMEw4DN9yYslblBkZiFSCmAE808ZlCwI3pdnW4WC%2BH74q6Rn5jD5E9rZ%2F24huzladkOwrP7%2FkKon1Y%2B838ifYTHgUlVKLxehKLTnPSFNl63LRYLtcb8HasqBuUGtT1MnePeu%2Bm272jVPuczEjyZ9f94wh4TGwwY6pgHzpJgnCIHGR7mnj9zpYiFQ7XswZITu7MDbER8ICs%2FKWZPLhePumjxylR1cbMZS6t%2FfxR0JHVc6lXsZuaNOFm85ubtDbtRR9aw7dk2SYX1JFpqoQoh2GENESYL6eOD1ibWB1U%2BGolLMZirxC2gISxqKywGkqnlW0gc7hJGif23gGZL6UVKmpLTLM6ZrCfUSMY9BuZbgEowti6RX%2BNuI1ewEWYHMWTCH&X-Amz-Signature=b05834ba319186dda887df153668eb0c297ccdd56cc7281b1da556c53a23833a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SSQJDE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDLeVNLnVT2Ovq8757GwY0UOfe9JjaWE4rYP1Fdpv0GAiAh49nzRN9tPEUCGq51nw6%2FGNofwhSyCPIwmmBHRQnp5yqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIvK6goZ2H9knyU9KtwDSiF%2BmR5vfDnUxQUHAS5Yv07a6qSz4bX9rJaRv08kn8lSI2kHw%2FEib9ZXFUUFQvAwGsA%2BAQJxJXfxG38LbgTRjjRpi9bNbu8WF6MAoSv75s%2F%2BI78Lvgau5HEZEhHxvRTtLCNxdZgpxnUifnrC6Z8lnCE%2FNTNhfX48EYvkQ6WueAWc4N2hOigyZDjrGZFc5hdYCtfxHkYKBwO6qxs7orpnlxJLEWqMFUa2vjliEJTZyeYEVI%2BozCfDhebybEYt6svATLJ7Vpn2POsHR5mje7kf02sXvHAsFM7MVvUnQf0dNwZ53UfBQe8ly%2Fec9zSj372icv%2BiDZ1IgPGOS7CkMWPIParjwZQNj0u15yxIp5SkOmT%2BdhBqaC0yG75i3O%2FF0mefyhU0ugtpK6LrPuSLZ8gvu9lS21GoVi0NXdmDpPhO7YqZVwk6zEhZ4U0NpfIGdqIEPQNUFQfmXGmOi2IoO%2BQuReulYW4bgIEUssjbpMEw4DN9yYslblBkZiFSCmAE808ZlCwI3pdnW4WC%2BH74q6Rn5jD5E9rZ%2F24huzladkOwrP7%2FkKon1Y%2B838ifYTHgUlVKLxehKLTnPSFNl63LRYLtcb8HasqBuUGtT1MnePeu%2Bm272jVPuczEjyZ9f94wh4TGwwY6pgHzpJgnCIHGR7mnj9zpYiFQ7XswZITu7MDbER8ICs%2FKWZPLhePumjxylR1cbMZS6t%2FfxR0JHVc6lXsZuaNOFm85ubtDbtRR9aw7dk2SYX1JFpqoQoh2GENESYL6eOD1ibWB1U%2BGolLMZirxC2gISxqKywGkqnlW0gc7hJGif23gGZL6UVKmpLTLM6ZrCfUSMY9BuZbgEowti6RX%2BNuI1ewEWYHMWTCH&X-Amz-Signature=00ad12b28debb1fbfc8e36802395326e557b4a16ed9aa8f8cda64e7435bb3aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
