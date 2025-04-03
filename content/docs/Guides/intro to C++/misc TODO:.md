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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJOZYC6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MR3Mvd%2BUVC%2FP2FjX8wFU870%2BAjQ%2FNj%2FNRVYXFE0nEQIgMWRqQRguaXdyDDmktjaoJq8EFYCt4OqkeEcxvobR6d4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQx9VKQoZFAwhnn0SrcA0XTm2W%2Bjiv5cbpduD%2FfucvNyCih7f6MjudTxHBASCVIrDjwvHNgEhnp7ZNyQ4Xv%2FNW9OjX0Ee2hfL2kfrYhkOoZSXHYescjtYO7CZkElDZ5jevJ%2FGb5ejy1eYdG2kJm8wCpq5iuxYDcOB0bVycQpkyYu5q5PGS%2B3ZL5eFFlVBxcRMx3xcHH81CbUtFAtRwKDSwI6%2FV4bBMp5OsQaM1pFnaD8A3JsxTMHwL98DwLmnHHjudQgXgTmDIJJDMcsTXM2ynUdHx0xYQzY8DwG9ml7Gj%2FtSG914RBqfGa8JCj5yyjhhItrL%2Fm5LgEZ%2FG1OD39kxuKhIKQEY%2BIwXud2ioZ73rOFLMEa0xBzTpe12CmX0TBGPuAR4OGFxm911IixZ4bWgYs4i8ztgxNsFLpKiKnGbPUtnw4rBbEEFc6c%2B%2BsFEAK9%2F118AhhTvQF6WaE712rEZE5CChE3t%2BBvMbP8Z3SN0JS4itk6K4K%2Fg6F7jW4TA7onSYZ41o1mqU7MLyGUt8w56hYzM73IMOtCVKTXyAWZoATz8nXeJaccYSXKiQZVc3HqOAqw8l0%2Bs%2BW81SqVG2QymyGPbJuGBFzFu6LHoAV9Os3ZVyeRGqniJVrvRkQe%2FXU0moa6nPu39qSOZupMJaWub8GOqUBzBpRjatRk4G%2Fr%2BXW4sX4kQaF15THEMZW7SztFGU604zfiCllNUWgTHivfopBnd6JCfksSteR%2FJ%2BEpEYhmMEr8UjUSmkjBW1HouQys3eCC31n9z7frnY1gYVVa%2FjpZL2wUAGjThYBTRcujtGYRONCRxGN3TPEoADZVmFc7CJJkwM1grMa9i823Zb7agxOD0u2yxcQjosrEJUMvACD5EnxBlCqDgPg&X-Amz-Signature=cc25d39ce37c64605e66a4b994f15397a5bd2f4abf43b21afe59a55a49a5c1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJOZYC6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MR3Mvd%2BUVC%2FP2FjX8wFU870%2BAjQ%2FNj%2FNRVYXFE0nEQIgMWRqQRguaXdyDDmktjaoJq8EFYCt4OqkeEcxvobR6d4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQx9VKQoZFAwhnn0SrcA0XTm2W%2Bjiv5cbpduD%2FfucvNyCih7f6MjudTxHBASCVIrDjwvHNgEhnp7ZNyQ4Xv%2FNW9OjX0Ee2hfL2kfrYhkOoZSXHYescjtYO7CZkElDZ5jevJ%2FGb5ejy1eYdG2kJm8wCpq5iuxYDcOB0bVycQpkyYu5q5PGS%2B3ZL5eFFlVBxcRMx3xcHH81CbUtFAtRwKDSwI6%2FV4bBMp5OsQaM1pFnaD8A3JsxTMHwL98DwLmnHHjudQgXgTmDIJJDMcsTXM2ynUdHx0xYQzY8DwG9ml7Gj%2FtSG914RBqfGa8JCj5yyjhhItrL%2Fm5LgEZ%2FG1OD39kxuKhIKQEY%2BIwXud2ioZ73rOFLMEa0xBzTpe12CmX0TBGPuAR4OGFxm911IixZ4bWgYs4i8ztgxNsFLpKiKnGbPUtnw4rBbEEFc6c%2B%2BsFEAK9%2F118AhhTvQF6WaE712rEZE5CChE3t%2BBvMbP8Z3SN0JS4itk6K4K%2Fg6F7jW4TA7onSYZ41o1mqU7MLyGUt8w56hYzM73IMOtCVKTXyAWZoATz8nXeJaccYSXKiQZVc3HqOAqw8l0%2Bs%2BW81SqVG2QymyGPbJuGBFzFu6LHoAV9Os3ZVyeRGqniJVrvRkQe%2FXU0moa6nPu39qSOZupMJaWub8GOqUBzBpRjatRk4G%2Fr%2BXW4sX4kQaF15THEMZW7SztFGU604zfiCllNUWgTHivfopBnd6JCfksSteR%2FJ%2BEpEYhmMEr8UjUSmkjBW1HouQys3eCC31n9z7frnY1gYVVa%2FjpZL2wUAGjThYBTRcujtGYRONCRxGN3TPEoADZVmFc7CJJkwM1grMa9i823Zb7agxOD0u2yxcQjosrEJUMvACD5EnxBlCqDgPg&X-Amz-Signature=f992b655556a035b28f287702f0c74e6ea2c83310f7acce28879f81e59c59abc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
