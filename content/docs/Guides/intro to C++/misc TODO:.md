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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U363YEBS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVPdoFlkE4sCHeFaIEeamjsaXhYSxPP32%2B4yymQx4OcAiEApvJNbU%2F6MMb1DS9bze9f1Jw9CuAIS6sMCiMbBaz9KmUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEEaiyaZC7K54RF8tircA8uas%2FhraLCHSKxZ8HmFbSW86zc%2FzERI8C8K7bZ9WIyAlV9aIfOdGJd48YA9pIwpyjRJOSXH6eKcGGYzS18Ju4szm5LloK%2F4DdaaX7RT%2FwJF9P7UZEpF4LNYlnfWsUbblUzQA2%2FP2xfVZPajCD4EAE5Dr8I1AFIZg%2FLRxBdQVs15Gdp%2BOp0f7N%2FDC6Lh8HmSXcrZEIEn2ETJDTFcoTgB6U9feLzsnGgsPqZvSK1905YArTlj7oFrTJOiyUV3L%2Fk%2BLzVqKVfZCOIt2P5r4mgD3o2yt%2BcKZH8zO7v8BYn9xJHUyWzRa2Sx6Uv5%2Fth9bs6QG2%2FdAyXPulzU3i1ms9T3Oa05EUXoq3mGB7Ru%2BAmYHc6tPJIfg88ajlpA4x0whm3bylHv%2FZhqu2GE7gBs7MQM5bDIshD%2BLHL%2BsrNOSWCuCfXksSEZD9PYw7C98ViV5ju%2BIrFb%2B6CPiRrYcTheyQOze1OkUhrsC26DWJ4igMnALYU3Cm%2BHcVyHVbbAVfuoe48E3y5062x7cFAlxHv2kjT9oNMs0Vt059gtJZJeaOdcTjCYVQa79zSa57ZEjCGcLkryPOTU1IAkuFTWY3M7RPTFYJB679WuthUywSwWco7bXqCB0PBdv3Mb8GLV18l0MPPms8AGOqUBtTrxAsJhbI1ouT5FklCI6JQzpzYDyt%2Bbk8kYK11u9PJcvNIq6Uyw%2ByMESoMFNTliH%2BkBwrwYXaRBbj5%2FRynzusQe8qqEdRAX1b3CdJ680gvuQBFwqvXyDXVSfZq7CPOu%2BlO1TbvD1x6VjNos6RjIxjgN%2BsHfZaV%2B7zrEY%2FuLI5y5ewMlNqp2%2Fg36ojknr3oZA3t0wub3BP9JADF28zeXg2pB9LcJ&X-Amz-Signature=67d1d8810b684a08d828a148d421660e16896fc205cc47a618b5e2de9b9a8459&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U363YEBS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVPdoFlkE4sCHeFaIEeamjsaXhYSxPP32%2B4yymQx4OcAiEApvJNbU%2F6MMb1DS9bze9f1Jw9CuAIS6sMCiMbBaz9KmUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEEaiyaZC7K54RF8tircA8uas%2FhraLCHSKxZ8HmFbSW86zc%2FzERI8C8K7bZ9WIyAlV9aIfOdGJd48YA9pIwpyjRJOSXH6eKcGGYzS18Ju4szm5LloK%2F4DdaaX7RT%2FwJF9P7UZEpF4LNYlnfWsUbblUzQA2%2FP2xfVZPajCD4EAE5Dr8I1AFIZg%2FLRxBdQVs15Gdp%2BOp0f7N%2FDC6Lh8HmSXcrZEIEn2ETJDTFcoTgB6U9feLzsnGgsPqZvSK1905YArTlj7oFrTJOiyUV3L%2Fk%2BLzVqKVfZCOIt2P5r4mgD3o2yt%2BcKZH8zO7v8BYn9xJHUyWzRa2Sx6Uv5%2Fth9bs6QG2%2FdAyXPulzU3i1ms9T3Oa05EUXoq3mGB7Ru%2BAmYHc6tPJIfg88ajlpA4x0whm3bylHv%2FZhqu2GE7gBs7MQM5bDIshD%2BLHL%2BsrNOSWCuCfXksSEZD9PYw7C98ViV5ju%2BIrFb%2B6CPiRrYcTheyQOze1OkUhrsC26DWJ4igMnALYU3Cm%2BHcVyHVbbAVfuoe48E3y5062x7cFAlxHv2kjT9oNMs0Vt059gtJZJeaOdcTjCYVQa79zSa57ZEjCGcLkryPOTU1IAkuFTWY3M7RPTFYJB679WuthUywSwWco7bXqCB0PBdv3Mb8GLV18l0MPPms8AGOqUBtTrxAsJhbI1ouT5FklCI6JQzpzYDyt%2Bbk8kYK11u9PJcvNIq6Uyw%2ByMESoMFNTliH%2BkBwrwYXaRBbj5%2FRynzusQe8qqEdRAX1b3CdJ680gvuQBFwqvXyDXVSfZq7CPOu%2BlO1TbvD1x6VjNos6RjIxjgN%2BsHfZaV%2B7zrEY%2FuLI5y5ewMlNqp2%2Fg36ojknr3oZA3t0wub3BP9JADF28zeXg2pB9LcJ&X-Amz-Signature=fd799c07a77e85a00abfc0f1f4efc7b2c09205e218ea4e3dfde56a2fc354a88b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
