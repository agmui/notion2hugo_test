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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABDEFQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAm%2F8OmeBajLkhzD5XSrf5lWyia8CQwsF5l3RUpJhAtMAiBAgfm6cZLXSk3zWGpEwCe0wUhsIVPRy6nXm3KIasfD%2BCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM16JxkYr3O9A1%2BIRpKtwDNNLSzdSU%2B3XojSTf9XIHQru%2FK%2BNYhjkkFjWd381ZT09US6Mm5iJ3S7BV6rxMC2R3NdLklyopuQlPb0UCqjJvGxzwwI5ZI3NCItFY3dXiS%2FKXfC8XK4%2BEWeX6a3fKauvS4hDia7jr1ywrTYKkoJ8GLIoY0EZQIb8trSyyrehkeCbAFL948xlYe6T51b9on%2FsWGFVLxhslk0GmGVnK32YFFqzDpaYPwcxGJSEp997qUWrdiw29NNcZiJVUmY2LZUcj716PfX4LkMgZ3ZiWbjmxjBKPu5ino174XYe6w0IH7u8GpzabliSZz5Dug%2FkObQXSZpatTuQj0e5zVVCNa1NEHG3SNiLEwAdcQNZeAGxABurTQpDgPP97LH3KiQuLjYgrbSKH7RWq19QTHpbV34zHw39ltXHnoMdMvAwZ3q5P2N%2FDVWjwDXyeAkNj%2FxAUAb%2BdxNNA8Pwru8z4exBL03meVu5Fy5t9EA0ZcnZjvIckypiKSXBrpk0qyGzVvTRaSH2oCqY0km7Z8PEtPUp2FuwqV2vNGskK791eG03lMGaJ1gkQZu5CbJkNHEHbjYrVwYWB4cOp3l1tmtURsw%2F8KYfSVgdEcvC8sbCe%2FfBJzL2j5KWTaHSgGHyEpfMdBY8wtMGTxAY6pgG%2F%2Fj0k2SIEZ2JsBx8EHmmnh3luwKZ5%2FCJYQdTvFuywzW3iQg%2FfVfBqsDUye%2F6JeQzoLh0RWS0TFu2ez8g9cnP5xuy6vZMGK2pfiCBrghqlpyltQZQ%2FLPoMMWvRJ%2BD0i%2B%2B990lvKQ6NsyIfrbU5pHNaDU5NEjMGGBK6ogttOzMi%2BPCee9QcDVastj9PQ1OqXCVY3YWtoOf4i4IyCJHK1NUnOwP7p2Qp&X-Amz-Signature=2ffc08d9c021b18adf12d2cc78e3da7286c10aca734c54b2a0804c07d7887fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABDEFQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAm%2F8OmeBajLkhzD5XSrf5lWyia8CQwsF5l3RUpJhAtMAiBAgfm6cZLXSk3zWGpEwCe0wUhsIVPRy6nXm3KIasfD%2BCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM16JxkYr3O9A1%2BIRpKtwDNNLSzdSU%2B3XojSTf9XIHQru%2FK%2BNYhjkkFjWd381ZT09US6Mm5iJ3S7BV6rxMC2R3NdLklyopuQlPb0UCqjJvGxzwwI5ZI3NCItFY3dXiS%2FKXfC8XK4%2BEWeX6a3fKauvS4hDia7jr1ywrTYKkoJ8GLIoY0EZQIb8trSyyrehkeCbAFL948xlYe6T51b9on%2FsWGFVLxhslk0GmGVnK32YFFqzDpaYPwcxGJSEp997qUWrdiw29NNcZiJVUmY2LZUcj716PfX4LkMgZ3ZiWbjmxjBKPu5ino174XYe6w0IH7u8GpzabliSZz5Dug%2FkObQXSZpatTuQj0e5zVVCNa1NEHG3SNiLEwAdcQNZeAGxABurTQpDgPP97LH3KiQuLjYgrbSKH7RWq19QTHpbV34zHw39ltXHnoMdMvAwZ3q5P2N%2FDVWjwDXyeAkNj%2FxAUAb%2BdxNNA8Pwru8z4exBL03meVu5Fy5t9EA0ZcnZjvIckypiKSXBrpk0qyGzVvTRaSH2oCqY0km7Z8PEtPUp2FuwqV2vNGskK791eG03lMGaJ1gkQZu5CbJkNHEHbjYrVwYWB4cOp3l1tmtURsw%2F8KYfSVgdEcvC8sbCe%2FfBJzL2j5KWTaHSgGHyEpfMdBY8wtMGTxAY6pgG%2F%2Fj0k2SIEZ2JsBx8EHmmnh3luwKZ5%2FCJYQdTvFuywzW3iQg%2FfVfBqsDUye%2F6JeQzoLh0RWS0TFu2ez8g9cnP5xuy6vZMGK2pfiCBrghqlpyltQZQ%2FLPoMMWvRJ%2BD0i%2B%2B990lvKQ6NsyIfrbU5pHNaDU5NEjMGGBK6ogttOzMi%2BPCee9QcDVastj9PQ1OqXCVY3YWtoOf4i4IyCJHK1NUnOwP7p2Qp&X-Amz-Signature=7211c95b85bfbc8c1edb3c4edc42cffc77f019bb6ef3646db87c628cbe351b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
