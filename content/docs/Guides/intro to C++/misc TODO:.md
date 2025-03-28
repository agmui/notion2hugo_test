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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTYGEMNN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJpFZN%2Ba4Gst0ga%2F41sbTwLi%2B2%2BqG02GvnHSRFBHxkJAIhAJ2%2FdDOJJ%2BMTVO5Gma8mFFAu8diQTP1JWT6Kl0QStaBNKv8DCFMQABoMNjM3NDIzMTgzODA1IgxhzC%2Fbv4xwlRzx%2Fh0q3APaeqX38VtTRQbMKYXZhW0XrINeY2zukPPgKj%2Fg9FlmkHvKwO05hH%2BXkfu7MdwTpEj8xOTK1DBkn7dtrY4N%2BRW22aKrcJK7RjJMM%2FYME75HL%2BI6LdHP4yAfhaeDU9ahGGaAWUjbbQpljrsO97Lc7fSxkIVIsmGLagn1Y6IWEnNWXczN552KId2t8Bt6w%2BKSdIFwJ3u%2Fi2YBJ00Kjl9vRwtMlbQSOVPszQ4DFxif37f01IsC15QHSiZcvWZoQpJfKHyNdOnhuryAuGRyEZhtkIKLeh9qaCGoVRid%2FIY6xDcRjBDr2Ty5k4fn2a2q4%2Fki1zY6NXUS2X1LJY%2FihtYFAcAw8kn5rdC6FE8LuBUaYR1M%2BSs2t5jAuYOyS%2FHraTesjPdElm355%2Boql0ntSsp3v0VO4GGBaSc3rKZPofXWavvAlc3jhMTkpldTBT6Awq8oCLrbzhdAJQWMK4m96YwmlozPLFwFjpxYynVxqO9Ffp0xmdxlc9IQ1uKnKlVJmiUuYTIXd%2FPkjaW4%2BsTuUzB1Hz18LRW7kbuDtOIxEYfMygr%2F3808NXORWoxql%2BbVfinnISf1ZIE4MwJQooGI2Hepb2ADUl4iUy8GZdCozsqDO%2F%2FU8S1j4cDAFxlwoOo%2BnzDx95e%2FBjqkAZ4klXZMq1aN1jyEuse%2BjGSQTMdKt6XhfTquCas%2BLRlXmM%2BIpZDKbyzDYXfeRHOqwnNxDMLpROp0lnprawbAu4azXf%2FtwP5XX%2F%2F7Pvd5IA7DC59zrc2xCAtIW1B%2BuRdiuPPMVJ0JhWaafoU6dQQ27PNHy2Cm5LUtUB5RRlBK0Zb0ti%2FRTUAe%2FESaqaO3eF4TpLBRHh7gFAz8UVJf9yWmwEk1ianA&X-Amz-Signature=4c91e8cb3d5f0b387bd15a37ed4c37ed0624e339258ad7e6f36b59daebe25cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTYGEMNN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJpFZN%2Ba4Gst0ga%2F41sbTwLi%2B2%2BqG02GvnHSRFBHxkJAIhAJ2%2FdDOJJ%2BMTVO5Gma8mFFAu8diQTP1JWT6Kl0QStaBNKv8DCFMQABoMNjM3NDIzMTgzODA1IgxhzC%2Fbv4xwlRzx%2Fh0q3APaeqX38VtTRQbMKYXZhW0XrINeY2zukPPgKj%2Fg9FlmkHvKwO05hH%2BXkfu7MdwTpEj8xOTK1DBkn7dtrY4N%2BRW22aKrcJK7RjJMM%2FYME75HL%2BI6LdHP4yAfhaeDU9ahGGaAWUjbbQpljrsO97Lc7fSxkIVIsmGLagn1Y6IWEnNWXczN552KId2t8Bt6w%2BKSdIFwJ3u%2Fi2YBJ00Kjl9vRwtMlbQSOVPszQ4DFxif37f01IsC15QHSiZcvWZoQpJfKHyNdOnhuryAuGRyEZhtkIKLeh9qaCGoVRid%2FIY6xDcRjBDr2Ty5k4fn2a2q4%2Fki1zY6NXUS2X1LJY%2FihtYFAcAw8kn5rdC6FE8LuBUaYR1M%2BSs2t5jAuYOyS%2FHraTesjPdElm355%2Boql0ntSsp3v0VO4GGBaSc3rKZPofXWavvAlc3jhMTkpldTBT6Awq8oCLrbzhdAJQWMK4m96YwmlozPLFwFjpxYynVxqO9Ffp0xmdxlc9IQ1uKnKlVJmiUuYTIXd%2FPkjaW4%2BsTuUzB1Hz18LRW7kbuDtOIxEYfMygr%2F3808NXORWoxql%2BbVfinnISf1ZIE4MwJQooGI2Hepb2ADUl4iUy8GZdCozsqDO%2F%2FU8S1j4cDAFxlwoOo%2BnzDx95e%2FBjqkAZ4klXZMq1aN1jyEuse%2BjGSQTMdKt6XhfTquCas%2BLRlXmM%2BIpZDKbyzDYXfeRHOqwnNxDMLpROp0lnprawbAu4azXf%2FtwP5XX%2F%2F7Pvd5IA7DC59zrc2xCAtIW1B%2BuRdiuPPMVJ0JhWaafoU6dQQ27PNHy2Cm5LUtUB5RRlBK0Zb0ti%2FRTUAe%2FESaqaO3eF4TpLBRHh7gFAz8UVJf9yWmwEk1ianA&X-Amz-Signature=b1f6ff9d4ee9ef5dd4a3b9887258f61d0f8387f718fbe456fb9b2388858945c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
