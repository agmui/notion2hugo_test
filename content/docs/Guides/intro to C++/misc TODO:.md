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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLISOIV%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHWRxJVSn6PddBGGd70cYe1s0Wg4M0hAbX3Og5eyvpjLAiARYHC8zxJxgwEGmWqptv1Adwy%2FxgGLuCdq81BR1vAXLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNRgIB%2BNUMs%2Fv6LH%2BKtwDtp%2BseVOaYlcGBU8OSmJhiK52PdqQCByMa55EbN40TOzlFDbnkMuIUw29sxyPHp364PKzZtVM5qric2fsKZSyDOIewYkOhS%2BTd3JmIWRboxXfgV%2FW%2FKgLvFXpx4PXRboRxwSe4fEEuSggtl3aNDArYh718HpY2624Y0s1lPruavQ0eHflmxg9EMVyiY%2BNXQhOictWyBDkw4RqXbh0UezexENSdrKGrsI8sz%2F7T9rZwi3alb0wknR2LpSed3WV%2BjBCH0Fo%2Fli4%2By9Sfmh8%2ByTz3%2FytjfzsukOT6wgUhOt2hdpRn1YvcjlP64Habd899MMzjFYu9FVbjEgruXxIl1RXBWUlT8jbBccAy0Po5bsqxuCNiEpk5rUUgWXjj65TkfqyprCPh2ghxFD3VaX31OgEj4LTm%2Bcuw9YGEp1g3nypZwuTn3jJ%2BRL8JqrJu05ZiLAIy%2F0GcK0Akep3fsU3T6LHqSBH77dlhwfC44kvWhpT%2F5z%2FbH4tIYTepK2npM%2BVGUYHqpYxXSadLRCPWB%2BNAPNu19CNGH1x0MzFkowJLYNbHGq51gWQq0InvWaqqHKpYVsjIU8UnY5YDbl5%2FZcKxlMwAhTB%2FeMcQUd4gUSYMOrJCaVjuRKb8TbZhOz0qC0wuLycwAY6pgElL%2BvtsUFm9GZWBzt46C0lBKahLHOYLN7rr5SUSexIlPD9Q6MPa76g82Y649pTiW8997I9v%2B4E28tHSu8KfmHX1YLeSrYcX3TMZcw5z87qHb99z8FijNmwEQSXOXO65TnkqzoMeRbJR1have9FqTXIRLa%2Bxum01K7m1pP5rUx1RO%2BYLvQ4T%2F%2BW1Bxa9uzgE0fNYI8RATwtRfnwpIrfRMP9iAvAtxbS&X-Amz-Signature=87351b21176a089c3c0b634ffc4cc8d9a6a730fc30e23db0d531aa2afa833baa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLISOIV%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHWRxJVSn6PddBGGd70cYe1s0Wg4M0hAbX3Og5eyvpjLAiARYHC8zxJxgwEGmWqptv1Adwy%2FxgGLuCdq81BR1vAXLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNRgIB%2BNUMs%2Fv6LH%2BKtwDtp%2BseVOaYlcGBU8OSmJhiK52PdqQCByMa55EbN40TOzlFDbnkMuIUw29sxyPHp364PKzZtVM5qric2fsKZSyDOIewYkOhS%2BTd3JmIWRboxXfgV%2FW%2FKgLvFXpx4PXRboRxwSe4fEEuSggtl3aNDArYh718HpY2624Y0s1lPruavQ0eHflmxg9EMVyiY%2BNXQhOictWyBDkw4RqXbh0UezexENSdrKGrsI8sz%2F7T9rZwi3alb0wknR2LpSed3WV%2BjBCH0Fo%2Fli4%2By9Sfmh8%2ByTz3%2FytjfzsukOT6wgUhOt2hdpRn1YvcjlP64Habd899MMzjFYu9FVbjEgruXxIl1RXBWUlT8jbBccAy0Po5bsqxuCNiEpk5rUUgWXjj65TkfqyprCPh2ghxFD3VaX31OgEj4LTm%2Bcuw9YGEp1g3nypZwuTn3jJ%2BRL8JqrJu05ZiLAIy%2F0GcK0Akep3fsU3T6LHqSBH77dlhwfC44kvWhpT%2F5z%2FbH4tIYTepK2npM%2BVGUYHqpYxXSadLRCPWB%2BNAPNu19CNGH1x0MzFkowJLYNbHGq51gWQq0InvWaqqHKpYVsjIU8UnY5YDbl5%2FZcKxlMwAhTB%2FeMcQUd4gUSYMOrJCaVjuRKb8TbZhOz0qC0wuLycwAY6pgElL%2BvtsUFm9GZWBzt46C0lBKahLHOYLN7rr5SUSexIlPD9Q6MPa76g82Y649pTiW8997I9v%2B4E28tHSu8KfmHX1YLeSrYcX3TMZcw5z87qHb99z8FijNmwEQSXOXO65TnkqzoMeRbJR1have9FqTXIRLa%2Bxum01K7m1pP5rUx1RO%2BYLvQ4T%2F%2BW1Bxa9uzgE0fNYI8RATwtRfnwpIrfRMP9iAvAtxbS&X-Amz-Signature=8f12a518a2c0e05e65ef51a5bfa427ef7b12d9cef1cff4327f4d8a1f80aa7132&X-Amz-SignedHeaders=host&x-id=GetObject)

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
