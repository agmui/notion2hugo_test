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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKQ22MP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIB5HSblliVvSRCFn%2BdkGlauvDtHXJnPQIgNJYulHjeybAiEAr1VoWw8Svc%2FpqVhZvo3IDYIS1WcV661cmByBBGO63%2BUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJia2HZGkJ4DocYt0yrcA8piYm8dhu3YsmDyxsGdgqzYzctSB0sDl2XF2H4XrRyyquZ7gKnvE4bIyIQdlrkTa8UZWGpiuSamJrU1tUDv64LquKTOBsSITQBmYVy%2BO1vDKcGODZRvvgm4y4lIjgUvTdC5qkNiNisuajp6sLDLWn0nUlcjdk8ZfM%2FY76ei2LN7o34pzhI214ymGF9Cis7CMeE8IcT2xjYRjRCiwFzzz6qa7%2BS7LJfxb4FiwNSTGlaCfoUxQ0BTxYJkXzTafajhIgYgvh6FG4ITUvMbpLdknbiPuOwI0wi4a2OGk4vm59ndEKCYNu1WU48KTClL%2BbvJyE62Y95Mz5qA3Gq0dlIYS2xKIzvDrbzcrubnc8fc7HBkdxIuP5bC%2BfXfbZmwA4beWJINcLdOoT%2FdlRA9dg9KFzTuaZlwo8bFRaBosWXuBH19ot068yo7h%2Bgd0SnLLfGo3NlOljPyGs97%2BHItrs51JDDIZT8XcrtS7s2Fd5A6%2BHaaIvE7W49OHZbRnufJzp%2FMG4gpZ8K%2FC2bAa1Fm0odb6jFnaakMVB0bDO%2BXqZy0e%2B6MaveO33NWqyVFVmO29e%2Bxuv5DGeChG5cTYEw8iZIHNWmaU27iGfdtiPhE5wuISukFhRVdRb%2BstaGkN%2BbNMPn5hL0GOqUB4Am890aZrDp%2FfepiJrWeoUl%2BQHl55jpPzUfAOmr73wqzHiowasdy%2Bxuwe3CaPBJkxkdDiZqouZ4CnlPZZ2iJ2O82KVg7NdRPz4%2BKvhuBHE90QWv7XylehY5dSbAdc%2F6Wdp4WoUc2kzn5Oybe6uENwFC9KegscNW6bycTg9hQAvaIQRMFzuCEcsuOChP6Youb71tbTQn5aymFJ251%2FtJdqoeyjurW&X-Amz-Signature=a0e6ea86fa335e0287271a9aba116a11020fd06cdc8c8123c6e417c22c1ec362&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKQ22MP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIB5HSblliVvSRCFn%2BdkGlauvDtHXJnPQIgNJYulHjeybAiEAr1VoWw8Svc%2FpqVhZvo3IDYIS1WcV661cmByBBGO63%2BUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJia2HZGkJ4DocYt0yrcA8piYm8dhu3YsmDyxsGdgqzYzctSB0sDl2XF2H4XrRyyquZ7gKnvE4bIyIQdlrkTa8UZWGpiuSamJrU1tUDv64LquKTOBsSITQBmYVy%2BO1vDKcGODZRvvgm4y4lIjgUvTdC5qkNiNisuajp6sLDLWn0nUlcjdk8ZfM%2FY76ei2LN7o34pzhI214ymGF9Cis7CMeE8IcT2xjYRjRCiwFzzz6qa7%2BS7LJfxb4FiwNSTGlaCfoUxQ0BTxYJkXzTafajhIgYgvh6FG4ITUvMbpLdknbiPuOwI0wi4a2OGk4vm59ndEKCYNu1WU48KTClL%2BbvJyE62Y95Mz5qA3Gq0dlIYS2xKIzvDrbzcrubnc8fc7HBkdxIuP5bC%2BfXfbZmwA4beWJINcLdOoT%2FdlRA9dg9KFzTuaZlwo8bFRaBosWXuBH19ot068yo7h%2Bgd0SnLLfGo3NlOljPyGs97%2BHItrs51JDDIZT8XcrtS7s2Fd5A6%2BHaaIvE7W49OHZbRnufJzp%2FMG4gpZ8K%2FC2bAa1Fm0odb6jFnaakMVB0bDO%2BXqZy0e%2B6MaveO33NWqyVFVmO29e%2Bxuv5DGeChG5cTYEw8iZIHNWmaU27iGfdtiPhE5wuISukFhRVdRb%2BstaGkN%2BbNMPn5hL0GOqUB4Am890aZrDp%2FfepiJrWeoUl%2BQHl55jpPzUfAOmr73wqzHiowasdy%2Bxuwe3CaPBJkxkdDiZqouZ4CnlPZZ2iJ2O82KVg7NdRPz4%2BKvhuBHE90QWv7XylehY5dSbAdc%2F6Wdp4WoUc2kzn5Oybe6uENwFC9KegscNW6bycTg9hQAvaIQRMFzuCEcsuOChP6Youb71tbTQn5aymFJ251%2FtJdqoeyjurW&X-Amz-Signature=e6a814113fa86040de858e2db27170b265fcf1e06425e61093e4741f83ea4483&X-Amz-SignedHeaders=host&x-id=GetObject)

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
