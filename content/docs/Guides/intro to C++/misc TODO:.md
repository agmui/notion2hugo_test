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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIA4LY3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrT4047zehHev73YVlnIFS1%2BHjwmV7WG19dQKJB8k%2F%2FAiEA4skd0%2FSVDqZIPm1mj5OCYgk7o7aLxY2XqanrMY%2B14Acq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPaRlHZB06h%2Fe78oyCrcAxK7ip80YnRnG1jkbawncU3UBONyPrMLR9o4KuyEaCIdm3%2Fp%2BfW2uClMYioGT2WoUPZWptyi5XoXbqUDgijJIPGeuQjKBWVlyH6CVWzUz%2FSlfksIi%2FhumbxIMcD%2FqqF5V1BuK1bmGsAquouNIxHElCNVhh4QozC60CTx03qf%2BcSXLaPqy3JfxsAtcgKtNzHjMhrr%2BJotirBhYkO75dJrd9GdqhbhJ2un1RD2WTe0NwPVb2B5PwXy%2FE2gS2VmiuQ%2BgyAiYrO1IEQR9Dj91jeJr9nbtbS2C5dGf7TDJJDdrSerY9t%2FiGmv%2FFOYbQxkjTV51XHL36D7SxBKOfud2WjjG7h71dHM7kad5LLLiIn%2FKqRnllDdIkRuHMSh2b6ZIwNl4u1oXSe1uImwYeNlpSFucF5gl2jzxfzAWreiZlmFdNo%2FMfuQlitacWoCtReN3gJUiqJDM1tJVjs1J9iGc2S%2B5trssjO6z3u9dWhT7X9NCy4VkWkJBogIrVwbdcqOwCFzaVr%2BolXu%2FlUnymv2MZV8k6tkPyVAM%2FuYYZwwboSqtFIuNdRO7MQuycQ1%2FP3YsU3bzZS5wKb6oyQIvbTo4tC7VZosgfSou%2FtojCsaJ8UOqnotj5TqvzreawdibunUMKjet70GOqUBFsm8nHpQLHhP2DaNmAOtMGPvaNqqjrAvMKAbSSTr3mlznzS44NmfJvDnSxwusLvqDUDeICBN7SxeH8RggYHBiR4nOK6kMx14hlKkhZJ8cQpHcAS6DssyziNy06Fav0wY8GrvOCzWLWul7%2B9XVTCNL6c0AD5N7yJte%2FoN3KwpaUiFL6z%2F1GGVXKQOgMWt3faLQnwHJtjv66eisuft7LpLk4DheANT&X-Amz-Signature=d0a6641ec57e4e1d1e7f19de70f94f11776cea7ace5f2c2364e1c9ce630143bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIA4LY3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrT4047zehHev73YVlnIFS1%2BHjwmV7WG19dQKJB8k%2F%2FAiEA4skd0%2FSVDqZIPm1mj5OCYgk7o7aLxY2XqanrMY%2B14Acq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPaRlHZB06h%2Fe78oyCrcAxK7ip80YnRnG1jkbawncU3UBONyPrMLR9o4KuyEaCIdm3%2Fp%2BfW2uClMYioGT2WoUPZWptyi5XoXbqUDgijJIPGeuQjKBWVlyH6CVWzUz%2FSlfksIi%2FhumbxIMcD%2FqqF5V1BuK1bmGsAquouNIxHElCNVhh4QozC60CTx03qf%2BcSXLaPqy3JfxsAtcgKtNzHjMhrr%2BJotirBhYkO75dJrd9GdqhbhJ2un1RD2WTe0NwPVb2B5PwXy%2FE2gS2VmiuQ%2BgyAiYrO1IEQR9Dj91jeJr9nbtbS2C5dGf7TDJJDdrSerY9t%2FiGmv%2FFOYbQxkjTV51XHL36D7SxBKOfud2WjjG7h71dHM7kad5LLLiIn%2FKqRnllDdIkRuHMSh2b6ZIwNl4u1oXSe1uImwYeNlpSFucF5gl2jzxfzAWreiZlmFdNo%2FMfuQlitacWoCtReN3gJUiqJDM1tJVjs1J9iGc2S%2B5trssjO6z3u9dWhT7X9NCy4VkWkJBogIrVwbdcqOwCFzaVr%2BolXu%2FlUnymv2MZV8k6tkPyVAM%2FuYYZwwboSqtFIuNdRO7MQuycQ1%2FP3YsU3bzZS5wKb6oyQIvbTo4tC7VZosgfSou%2FtojCsaJ8UOqnotj5TqvzreawdibunUMKjet70GOqUBFsm8nHpQLHhP2DaNmAOtMGPvaNqqjrAvMKAbSSTr3mlznzS44NmfJvDnSxwusLvqDUDeICBN7SxeH8RggYHBiR4nOK6kMx14hlKkhZJ8cQpHcAS6DssyziNy06Fav0wY8GrvOCzWLWul7%2B9XVTCNL6c0AD5N7yJte%2FoN3KwpaUiFL6z%2F1GGVXKQOgMWt3faLQnwHJtjv66eisuft7LpLk4DheANT&X-Amz-Signature=6d3c6642fcc3fc9b78b5d5db1399d52292819d7f4f095405ed78ad9a52a44d94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
