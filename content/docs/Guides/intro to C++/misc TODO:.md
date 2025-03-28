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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMXXFUC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYbw8lVEg3ZW0dLmb%2Bdxh7FXCVzWUBmIZZU%2BJ8B6U0LAiEAv7tgGPdn2Qn3SxT4%2BNkhiRevOmMVCf0NyBDjNNWvqbIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFtB4lQtsSwQtPIHzCrcA3rSi3KzV%2FneZpsCboIIfzyTNwmuC5MJ4tmNmhAo7nNpqowUEDnEJKBjBTFlJWPvoDL3d5ujLIXmFme4Sry9dB5vg39J2NFAL0RHyrC%2FIDBd8p8hsIqywWEb%2F5Bpm0D8tPh8%2Fkn6myK0wMe8gAY33rAHaBUZahOC%2FwWptHeqvbepvJjxfebc0hMP1F9sx6fdYwGEAtEtUdFJbcaZ%2BzyG7LbbyxFbCyiOw4SKZ28FzOdxuMmaNT5FIQSQLsLVkxCa5AQ%2FoWin3E5p3ZmRVTj0622HZg1IyUc05s2R1zf5dE6WtoWQw6rHrcAtQj925ap%2FP4UUBpiH2zD2yHR%2BaxelgLnLrfbos%2F%2FiXqscFQNhfYE4Arum%2FRIPfgEXETuo%2BLDFdaCMjS3YpDEohMBJc6uTuKII%2BLJAyTYS%2BTCYpsy3I4TCB3v8eTwKGBA6PL2jG4Gb3gmclLqwpXrA3cRoJvxnwjCFM%2F%2BBMdE57dAbRnSvG36410Wo8JmQC2ndcMrEAUV70EjGQ7HwcGKYvEUXk2NMCNz5stBBZnWnK8wiLfQq%2BSzUJ1C0nuiKcoaqphUjnIa2%2FecJ0kd7zGoUvDQVZ7FNj2NGDOkmRWCsSACut0fojQXHdcysYWcrOVqOsvgzMM6Gmb8GOqUBmDd9VMJbBAUHl3wsIimpIzqDTT3o4p7ncQqebwT7jSo3435c7wopsDhHUc77gOnOO5xc18%2Beu3W0l0a3sVWBG%2BFmAEmnqnkOpdk76I8trPW7MzrAdwg9O%2BKErHMUhrDw5czr7oF7XA6LhYKersGFcwzO%2BSFXnjmiacCzlctpwcrQnV3fWUODuBsrhZNGdw2cWmZNelc0uRobuuNgDWjYXh1fZkb5&X-Amz-Signature=3276c1ee531a9383d08202bef7f315bfaad629f43bd00d26045104c0c90d0d62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMXXFUC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYbw8lVEg3ZW0dLmb%2Bdxh7FXCVzWUBmIZZU%2BJ8B6U0LAiEAv7tgGPdn2Qn3SxT4%2BNkhiRevOmMVCf0NyBDjNNWvqbIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFtB4lQtsSwQtPIHzCrcA3rSi3KzV%2FneZpsCboIIfzyTNwmuC5MJ4tmNmhAo7nNpqowUEDnEJKBjBTFlJWPvoDL3d5ujLIXmFme4Sry9dB5vg39J2NFAL0RHyrC%2FIDBd8p8hsIqywWEb%2F5Bpm0D8tPh8%2Fkn6myK0wMe8gAY33rAHaBUZahOC%2FwWptHeqvbepvJjxfebc0hMP1F9sx6fdYwGEAtEtUdFJbcaZ%2BzyG7LbbyxFbCyiOw4SKZ28FzOdxuMmaNT5FIQSQLsLVkxCa5AQ%2FoWin3E5p3ZmRVTj0622HZg1IyUc05s2R1zf5dE6WtoWQw6rHrcAtQj925ap%2FP4UUBpiH2zD2yHR%2BaxelgLnLrfbos%2F%2FiXqscFQNhfYE4Arum%2FRIPfgEXETuo%2BLDFdaCMjS3YpDEohMBJc6uTuKII%2BLJAyTYS%2BTCYpsy3I4TCB3v8eTwKGBA6PL2jG4Gb3gmclLqwpXrA3cRoJvxnwjCFM%2F%2BBMdE57dAbRnSvG36410Wo8JmQC2ndcMrEAUV70EjGQ7HwcGKYvEUXk2NMCNz5stBBZnWnK8wiLfQq%2BSzUJ1C0nuiKcoaqphUjnIa2%2FecJ0kd7zGoUvDQVZ7FNj2NGDOkmRWCsSACut0fojQXHdcysYWcrOVqOsvgzMM6Gmb8GOqUBmDd9VMJbBAUHl3wsIimpIzqDTT3o4p7ncQqebwT7jSo3435c7wopsDhHUc77gOnOO5xc18%2Beu3W0l0a3sVWBG%2BFmAEmnqnkOpdk76I8trPW7MzrAdwg9O%2BKErHMUhrDw5czr7oF7XA6LhYKersGFcwzO%2BSFXnjmiacCzlctpwcrQnV3fWUODuBsrhZNGdw2cWmZNelc0uRobuuNgDWjYXh1fZkb5&X-Amz-Signature=2952436f7defcd828aaa234711caff064a52086bcefc2fbc684b93d80e62882c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
