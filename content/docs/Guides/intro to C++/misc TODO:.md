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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZWHDWY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4wzMrgxByXwaEM3Sdyo%2Fpi5WNeCjrc8mVXbostwIxPAiBQ0ALrRSeJVb8dvdLtKeinlGsennx1%2Bgl%2BLLeBYloCjiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tD6e2D4%2BB0%2Bgc%2F8KtwDASt2yDDZYO84aCSvSBoAQLhcUxsH7BgKx%2BsWxQd6SKBU52jSh5lZpN5sdCLxFw1fcPjDjqKrMceBRtMVDTM4pLjQnUe2CzHEyH03szzU1QYn37zb1cTpatuMNSrnqGqFfBHLShR5hIPgAYkGmWfan6%2FdkIIM%2F88%2BGQ6%2BaEHHw4TO7NgBqecvxk%2BIPWa71b6txEAYKXbGyqfxG3FMW%2FZnVeBJdjprUq%2FB8Evscfy9Q5N60aRkteKKfz4eFmS8%2Bj3%2BzMN9OI0MXEUwCkasE8kacCsOIMnQwsaZLfaZdpCo3Cww%2BgXvYiZCuDGGRe%2BMzxR6O6fZwCdP4O%2F3gFSqcE4LemzOGmZ0Fh6E9euBoqEwi896uCrAitxuTL3y4XYjl315UqFn4vAA0cRdf381OPNTETA5S9PvjHd6ZNls3tlwS%2BVsG%2BNj7zmprgMT7LjKuPJDEWhkp8WxFWaV9p0oDAJqrlrmYbRANEnUKT2%2BrzzRK4eUTeu4Q2Ww8hwVckLJLtx5Z32nVSFFvMxjzkOI7P0Qw12ZqQZH1rAi0NVU6TYtdI6IFKRilzAnLTln3464lFd06B76x%2FSs%2BFIPnZVCDgv15s90z9oIhEDLLb2r8MKPZyeD4Z2cBRbX0YAKODkwxpqsxAY6pgGMuSzhjm9myWFaMQgkwkRIIMJcIruardbk1BztII9ElD2%2BZgnBovr4DgI6skJb433X7tQJEa2pUk%2Ffwbf1ZVkrTpG6wO%2F%2B9pNoYq%2F0%2F%2FHghaBDHi8ThG9pxemaGu8UX8sUVHSDQVbMSeJOY1trqORBrh614hgWQQvVN2KmorKmDmY8qq4aZH24gPysuaxR8l89nb5%2BbXKp0XUWb1pZAFQ1Je6ZGVLO&X-Amz-Signature=a70d22b2327011f6610068359e4baec02f9069880b39881785161e034217470b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZWHDWY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4wzMrgxByXwaEM3Sdyo%2Fpi5WNeCjrc8mVXbostwIxPAiBQ0ALrRSeJVb8dvdLtKeinlGsennx1%2Bgl%2BLLeBYloCjiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tD6e2D4%2BB0%2Bgc%2F8KtwDASt2yDDZYO84aCSvSBoAQLhcUxsH7BgKx%2BsWxQd6SKBU52jSh5lZpN5sdCLxFw1fcPjDjqKrMceBRtMVDTM4pLjQnUe2CzHEyH03szzU1QYn37zb1cTpatuMNSrnqGqFfBHLShR5hIPgAYkGmWfan6%2FdkIIM%2F88%2BGQ6%2BaEHHw4TO7NgBqecvxk%2BIPWa71b6txEAYKXbGyqfxG3FMW%2FZnVeBJdjprUq%2FB8Evscfy9Q5N60aRkteKKfz4eFmS8%2Bj3%2BzMN9OI0MXEUwCkasE8kacCsOIMnQwsaZLfaZdpCo3Cww%2BgXvYiZCuDGGRe%2BMzxR6O6fZwCdP4O%2F3gFSqcE4LemzOGmZ0Fh6E9euBoqEwi896uCrAitxuTL3y4XYjl315UqFn4vAA0cRdf381OPNTETA5S9PvjHd6ZNls3tlwS%2BVsG%2BNj7zmprgMT7LjKuPJDEWhkp8WxFWaV9p0oDAJqrlrmYbRANEnUKT2%2BrzzRK4eUTeu4Q2Ww8hwVckLJLtx5Z32nVSFFvMxjzkOI7P0Qw12ZqQZH1rAi0NVU6TYtdI6IFKRilzAnLTln3464lFd06B76x%2FSs%2BFIPnZVCDgv15s90z9oIhEDLLb2r8MKPZyeD4Z2cBRbX0YAKODkwxpqsxAY6pgGMuSzhjm9myWFaMQgkwkRIIMJcIruardbk1BztII9ElD2%2BZgnBovr4DgI6skJb433X7tQJEa2pUk%2Ffwbf1ZVkrTpG6wO%2F%2B9pNoYq%2F0%2F%2FHghaBDHi8ThG9pxemaGu8UX8sUVHSDQVbMSeJOY1trqORBrh614hgWQQvVN2KmorKmDmY8qq4aZH24gPysuaxR8l89nb5%2BbXKp0XUWb1pZAFQ1Je6ZGVLO&X-Amz-Signature=382a55069d59cbf654283961bb812eccac74d1571bad29b9857dccce1c6251e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
