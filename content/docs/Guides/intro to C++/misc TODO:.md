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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFA6W6M%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrO0HDLiOrTMPRYdSsxfmbaplcUQaRSlB%2Fxq34dVKWaAiEAy7LjNQZ5WNorkiHGO2eCqbak50PNQvgYI%2B4ofMzya8sqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVnsI%2BYU5%2BqMOwogyrcAzNnh0TS9ra%2FkZzNEV2l%2FDwcc6mGu1kAg7kro3oyE0wEN3spR8HT9KLjG43Wpdj3RLgNz5XWwQb8QVHctqf%2FvYgbNGTMw%2Bm5hevZReIL16xSkTma20tULNt3uzaZID%2BeLDiA3cCV0mF2AoxtidR9yTIXjP8jSDE0mBZbBbHoxJLEoVG2QI87%2FYF4piqGQ5a4ETK9sgYYjyQQecW%2BsRBl1c5p85EAtqmXDbB83vH4ql9rDGYw4Km8hk%2BAUwnEKM%2BNnhoWtEAQbrhWsJV4JmdP5cYyGvymBSz%2BuQWMkj%2Bb5R3UyH%2B6bHQbJELMywS7iFVLMUgmx0mGgClQP26p7QudlBa%2BuvYZkaxfgRkdbmy6q6NEKnEBMsmCZk0fZOOGN7n8PwWvaSBxND3kE0SXhU0bYlfgvI%2F7fRwryUFe1gN%2BwMsZoMJM9nT7UGnMnfSJKT%2F%2FGkrHiUPh%2Btm0gCMmBic2y3Nn%2B0S%2B2j7sZr8qf2xWtdXz5yOVecl1mqcdkwIdg41Kf0JELF99C84deJUpNp8RrkEmwF7DkppXZG1t0zqU2MUyCgdBX9EgrZuoh5sjG5AG1FpHNnbAHjLwN%2FeaukmyMACUGYcIgudz65vntE6SJzR6hA28aG8LydY9fSqoMIDp6LwGOqUBYULLGRpnUR3zM6GqgQI9MJ5e%2B2rv2%2BcmHfbFmaN47xV1G2EZiCV%2BddNgm9Svh1lboP%2BT2YGrCpfHsihEdlMD1WDBx4pkVsOSS8bCx5uI%2FYwP1FMsZf%2BoTriJumao6ohG8WoFNEKZuvDVlwBS%2FeifgS1C5EF7hAeWPjUz6il%2FyJRx3QWItu%2FUr369Dr%2Fz9ba3J2Boi%2B9OFh6uBkIOEwUSXxYR5f85&X-Amz-Signature=ccbea7294b225094eaf1cb334e064bc77a61433e2f4c051ad9c508c90f86f98a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFA6W6M%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrO0HDLiOrTMPRYdSsxfmbaplcUQaRSlB%2Fxq34dVKWaAiEAy7LjNQZ5WNorkiHGO2eCqbak50PNQvgYI%2B4ofMzya8sqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVnsI%2BYU5%2BqMOwogyrcAzNnh0TS9ra%2FkZzNEV2l%2FDwcc6mGu1kAg7kro3oyE0wEN3spR8HT9KLjG43Wpdj3RLgNz5XWwQb8QVHctqf%2FvYgbNGTMw%2Bm5hevZReIL16xSkTma20tULNt3uzaZID%2BeLDiA3cCV0mF2AoxtidR9yTIXjP8jSDE0mBZbBbHoxJLEoVG2QI87%2FYF4piqGQ5a4ETK9sgYYjyQQecW%2BsRBl1c5p85EAtqmXDbB83vH4ql9rDGYw4Km8hk%2BAUwnEKM%2BNnhoWtEAQbrhWsJV4JmdP5cYyGvymBSz%2BuQWMkj%2Bb5R3UyH%2B6bHQbJELMywS7iFVLMUgmx0mGgClQP26p7QudlBa%2BuvYZkaxfgRkdbmy6q6NEKnEBMsmCZk0fZOOGN7n8PwWvaSBxND3kE0SXhU0bYlfgvI%2F7fRwryUFe1gN%2BwMsZoMJM9nT7UGnMnfSJKT%2F%2FGkrHiUPh%2Btm0gCMmBic2y3Nn%2B0S%2B2j7sZr8qf2xWtdXz5yOVecl1mqcdkwIdg41Kf0JELF99C84deJUpNp8RrkEmwF7DkppXZG1t0zqU2MUyCgdBX9EgrZuoh5sjG5AG1FpHNnbAHjLwN%2FeaukmyMACUGYcIgudz65vntE6SJzR6hA28aG8LydY9fSqoMIDp6LwGOqUBYULLGRpnUR3zM6GqgQI9MJ5e%2B2rv2%2BcmHfbFmaN47xV1G2EZiCV%2BddNgm9Svh1lboP%2BT2YGrCpfHsihEdlMD1WDBx4pkVsOSS8bCx5uI%2FYwP1FMsZf%2BoTriJumao6ohG8WoFNEKZuvDVlwBS%2FeifgS1C5EF7hAeWPjUz6il%2FyJRx3QWItu%2FUr369Dr%2Fz9ba3J2Boi%2B9OFh6uBkIOEwUSXxYR5f85&X-Amz-Signature=2471041ff4eb50e39fa76255fdb88c8b7a6e2bf0490c2a5031caaf6c18354649&X-Amz-SignedHeaders=host&x-id=GetObject)

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
