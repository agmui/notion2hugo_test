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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4TYXR4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCtcj0w5u2BI0X8STahtcRfCP4sZg5PGTlD87k5qhzZKQIgcH6xCdlaOtQqiIGFcEnY3U4srUnfu%2FP6qRV3m6Wa%2FOYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs6E0KzfvesyPONtyrcA6EedSOqMTHZCKLx4e2HatZJILyHtoPxOfeP%2BHm96UJFuj8wMQ%2FrPeaclkh3V4wGk6TVRhBRgMZd9zOv1Ngf5TRw9xlqQKDxA4okbGBeE6R25hHDvpiMzU1cgyTtQLgvH%2BaNitRQk0JIQg3rEV%2BzLJBbXadU0KNXqtcmV2nCgTb08MP4I2%2BwU8DwJbTaYkSGciiSNmjDySajrJfnPdFa0ArOyI9sGTL4AZOCNS8XlQFt9fq%2BomgaarUECPdhRh6yk0HBLyuxI%2BxIiaEDz76Pr8qZYz0JduHIXcVf2tGMmP5MQiLa%2BR251J%2FUOMHtCLWxDh%2F9woTETfIBYERwpzlbSXsoQcduEN2r4v5fSt0aG0877s21ww0vVY%2FxGCF7h6EqoOnNCR6X7kyS3E3%2BeaHe5wSkzmnolQllLv6gt1WBwRZeYxFaz8SMDOE1ULk6kTb4fqbkviu%2FTowtqIt%2Fy1ZyaW7oxdgPxAL%2BowFTbAnWnY7mKMoM0UnvBtrKuQu0j5%2Bg6R%2FT4X%2FV0ZOFjbO8HpIB99W6cvcF0Dh4bmibIqwvHOvrGAYRn%2BLtXz1qCprF1odJX%2FXUCUjnGV8iyGUj53lNu8WTHPgI2ZUnx%2FM9yhX4%2BTA24pBtJYPLFdHbQJerMMKb5L8GOqUBoL7x9qPNbYg3oOmQfHOqdOsXr9Poaf9wlk6bRMx7mJwtY4OETAeuFiX7JKrC1eDOw1IJu9DIEljgDGXemg12qGk6Td0LPCthTeUsSxYostlQcbtxmWlS6eK1bzmjjPjuMloj4LXzlEjI4d62LqSkwesmcz7IS45yMEOlgOLr%2F96QXBmhlTWAkKoxSAc4R56vFpqgzg1P2Pebr3nQK9vF%2FgsJI9lP&X-Amz-Signature=8765b94f6d6438467b4ecba890887ea0b1e0f8978e04b66575e83b17fa2b3601&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4TYXR4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCtcj0w5u2BI0X8STahtcRfCP4sZg5PGTlD87k5qhzZKQIgcH6xCdlaOtQqiIGFcEnY3U4srUnfu%2FP6qRV3m6Wa%2FOYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs6E0KzfvesyPONtyrcA6EedSOqMTHZCKLx4e2HatZJILyHtoPxOfeP%2BHm96UJFuj8wMQ%2FrPeaclkh3V4wGk6TVRhBRgMZd9zOv1Ngf5TRw9xlqQKDxA4okbGBeE6R25hHDvpiMzU1cgyTtQLgvH%2BaNitRQk0JIQg3rEV%2BzLJBbXadU0KNXqtcmV2nCgTb08MP4I2%2BwU8DwJbTaYkSGciiSNmjDySajrJfnPdFa0ArOyI9sGTL4AZOCNS8XlQFt9fq%2BomgaarUECPdhRh6yk0HBLyuxI%2BxIiaEDz76Pr8qZYz0JduHIXcVf2tGMmP5MQiLa%2BR251J%2FUOMHtCLWxDh%2F9woTETfIBYERwpzlbSXsoQcduEN2r4v5fSt0aG0877s21ww0vVY%2FxGCF7h6EqoOnNCR6X7kyS3E3%2BeaHe5wSkzmnolQllLv6gt1WBwRZeYxFaz8SMDOE1ULk6kTb4fqbkviu%2FTowtqIt%2Fy1ZyaW7oxdgPxAL%2BowFTbAnWnY7mKMoM0UnvBtrKuQu0j5%2Bg6R%2FT4X%2FV0ZOFjbO8HpIB99W6cvcF0Dh4bmibIqwvHOvrGAYRn%2BLtXz1qCprF1odJX%2FXUCUjnGV8iyGUj53lNu8WTHPgI2ZUnx%2FM9yhX4%2BTA24pBtJYPLFdHbQJerMMKb5L8GOqUBoL7x9qPNbYg3oOmQfHOqdOsXr9Poaf9wlk6bRMx7mJwtY4OETAeuFiX7JKrC1eDOw1IJu9DIEljgDGXemg12qGk6Td0LPCthTeUsSxYostlQcbtxmWlS6eK1bzmjjPjuMloj4LXzlEjI4d62LqSkwesmcz7IS45yMEOlgOLr%2F96QXBmhlTWAkKoxSAc4R56vFpqgzg1P2Pebr3nQK9vF%2FgsJI9lP&X-Amz-Signature=2e56a5b38c0e475fdfd93333f010ec0c553ecbdbe9beb516d2799f030cd15bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
