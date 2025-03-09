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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABOMA7T%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCw5Vd6EzN6pXcsaHfl%2BO8cCcioqhKy6eS8iabQI55AcgIgHGgnoW0IkFFWB4LRnMQSdoUC69DC%2FEPZCO3tGWDCsXAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMRQ2gk%2BKB6uZpnrTSrcA8LNdhBwP21zkL6smZc7ng0bRcdWMvnrMsLMWM2lQ9yRYgHHoiUBtLSzCx9mIHyFthx1TP68H09UJ%2B4ixl%2BaZ%2FKJmshdVgmprdTr4ggpSckujvN5fW1uRllLiQmcxl6wGad%2FEo7MX7F2R46fGeFId%2B9Laej01VdTwA3olPatKBrzRer3vRuL0Sod81gJ0lRhCYe75NDdL8V%2FZVHHWbGct1HTE9e8I5Mn232nFPRQu%2Bj7UqZVM4OeuXwtKC3tNA7OE%2BjeHWfJacL73Cqbz0xuQowE5LBiJ6xidkhnonY3O%2FbCtKpgH7glsQ%2B7WHnHRFOT1hnhi4%2FUb2fE%2FXlhQQ3q83TnI%2FMH8GhFeCryml1TbOHawHPv0PsJX6WjJPbPXV6LcP7ZPyMSIuS6YDJ4KDb4O7FoYmb40By7ifF5E%2FgtIQabvOM2YkCNOtUYOmkAwznhhQzXMdsKW%2FY2ggwCPpAvy%2BdKNKosVQyeOm0csQOzQgUM2m%2BLdnMfsCcI5QkLFiB4JHtkv05nBdZmnqdEvIMB7F3WyYz0y4dpJX5CWY9vvoxtgjb5mYsttIrpNO%2FmAacpDzYd7kOONac%2BvNlEm7v%2Bss6MRriqxX5BluFn6kSFlqMwtmiLTpYiVdEciDSqMOjgt74GOqUB36vyxH9cEmnYUuSdEJY5EWPEWQtcYa0GE4C5UMg0yCcLvjkh05sNTH1CCEEuheIKJRcktNaUyYwlNFUEiAQyisPMNwBeJ%2F0Omi1BP7hzgCkqvFYZRZHdfkXpIFjI5Esrku59ZsqwF7MTGeGbWGRqHZnIEwp2ug9LvGvagqEcPNv6cuqq0jbVJ%2FJExaISvFXO8xjmmm%2Bb4o3ER67KTWZEgmS2UVKU&X-Amz-Signature=5ca05ce5ae6c870fdf219afd294551eacefbd74dd4fed59402d57741c2387fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABOMA7T%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCw5Vd6EzN6pXcsaHfl%2BO8cCcioqhKy6eS8iabQI55AcgIgHGgnoW0IkFFWB4LRnMQSdoUC69DC%2FEPZCO3tGWDCsXAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMRQ2gk%2BKB6uZpnrTSrcA8LNdhBwP21zkL6smZc7ng0bRcdWMvnrMsLMWM2lQ9yRYgHHoiUBtLSzCx9mIHyFthx1TP68H09UJ%2B4ixl%2BaZ%2FKJmshdVgmprdTr4ggpSckujvN5fW1uRllLiQmcxl6wGad%2FEo7MX7F2R46fGeFId%2B9Laej01VdTwA3olPatKBrzRer3vRuL0Sod81gJ0lRhCYe75NDdL8V%2FZVHHWbGct1HTE9e8I5Mn232nFPRQu%2Bj7UqZVM4OeuXwtKC3tNA7OE%2BjeHWfJacL73Cqbz0xuQowE5LBiJ6xidkhnonY3O%2FbCtKpgH7glsQ%2B7WHnHRFOT1hnhi4%2FUb2fE%2FXlhQQ3q83TnI%2FMH8GhFeCryml1TbOHawHPv0PsJX6WjJPbPXV6LcP7ZPyMSIuS6YDJ4KDb4O7FoYmb40By7ifF5E%2FgtIQabvOM2YkCNOtUYOmkAwznhhQzXMdsKW%2FY2ggwCPpAvy%2BdKNKosVQyeOm0csQOzQgUM2m%2BLdnMfsCcI5QkLFiB4JHtkv05nBdZmnqdEvIMB7F3WyYz0y4dpJX5CWY9vvoxtgjb5mYsttIrpNO%2FmAacpDzYd7kOONac%2BvNlEm7v%2Bss6MRriqxX5BluFn6kSFlqMwtmiLTpYiVdEciDSqMOjgt74GOqUB36vyxH9cEmnYUuSdEJY5EWPEWQtcYa0GE4C5UMg0yCcLvjkh05sNTH1CCEEuheIKJRcktNaUyYwlNFUEiAQyisPMNwBeJ%2F0Omi1BP7hzgCkqvFYZRZHdfkXpIFjI5Esrku59ZsqwF7MTGeGbWGRqHZnIEwp2ug9LvGvagqEcPNv6cuqq0jbVJ%2FJExaISvFXO8xjmmm%2Bb4o3ER67KTWZEgmS2UVKU&X-Amz-Signature=b6fb5db318553f5fafa1da88d9a1ba142e2dd07c3bed47af82b24bfa892a8760&X-Amz-SignedHeaders=host&x-id=GetObject)

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
