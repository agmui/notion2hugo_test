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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMUWOW2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE53RIYprzwOuQ816Is%2Fm9KnO7tFoc%2BnSd0MrL%2FHrHFwIhAIOYb74eFzeV%2FQWlw%2B%2F%2FTh7bzjC7Ylv%2Ff48za9tFmqORKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtkqyFysInHYKrkgYq3ANG%2F%2BHtdBKBgC%2Fn2WZaGlxKxDfBg92j1lVYoJfFJPYlOfazFW%2BVpYATxBgzuerzG9oVib%2BDumT5HKUypwWWuG3uQKFcQNcyg4OC9ngY9INSJYAhYeIssa26UpcIhmcpLSkZ1h9U4%2BrKQbAHN8hDLiliPEz34iEXrBOUyWO348V8Ys%2FZNlfV%2BXtVWC%2B0Pktrwl24ZMhBopLS8Ub1nCfC0zsBttzRDFWTR57Ylt9DS4GtIaJjCJgAm7rnObK0LOrmSe24EWAM9XlrXZrNdBFnJdMP7KgUkv6UO5bWbOiVya2mWT2wAz%2F64Rfv9GVTYxaTccw9%2Fv%2BwnK2YSMrRnjkpoDtRfi2xDZv%2FGPe8x%2FlYoc0%2FUO47fQYA7AKEwEa6DUuwbnd1z7cCdBJ3jWB9iz4i2lLbxWwWRZgWoZkBUIgYsR85YHOSqKs%2FgcA4RUmDBgjw1ogphMTFVhxEzejLnN1X93Ygq4Y%2B1LbTusrexmpvCk%2FQNtdlvnwnQtdMfmD1HzAqO2kYDjvEPzlteLTXqTY5CKLATV8%2F6ZWKcuMUmwppt8BZ27DaviPPb6HEy%2BfZdOlqydLGv4TaMTmq%2BUIwS73mm0zn0gK0F4gtmA5Ekxe3Va10wPQr%2Bv4km5uh3iqxHzDQ%2BfjDBjqkAW7gXrgzJeeE7QETbiM%2BSC7SumD88ltlMLiibPQqHsIqn0sIRULFK078ojPPa3EYD6bLTrnHkmUfqEtUsFXGbSEHFRH8cUuaNhiy%2FxnwQF8wND8fX%2BG%2BlRqtK3%2BX5SQ0H2d0nuqlxcf8RXskouZGz8QCfY0cFGbGBOcO6nbDBYB%2BBEvEjL22J8xAZM0UN3Npd0l87dV9EJv3RwFTsY3zFJMshrJi&X-Amz-Signature=5077b0b9dc2aee46a2c772b157281d4fe1c0b503cba7f1e9bbac80a07fc49a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMUWOW2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE53RIYprzwOuQ816Is%2Fm9KnO7tFoc%2BnSd0MrL%2FHrHFwIhAIOYb74eFzeV%2FQWlw%2B%2F%2FTh7bzjC7Ylv%2Ff48za9tFmqORKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtkqyFysInHYKrkgYq3ANG%2F%2BHtdBKBgC%2Fn2WZaGlxKxDfBg92j1lVYoJfFJPYlOfazFW%2BVpYATxBgzuerzG9oVib%2BDumT5HKUypwWWuG3uQKFcQNcyg4OC9ngY9INSJYAhYeIssa26UpcIhmcpLSkZ1h9U4%2BrKQbAHN8hDLiliPEz34iEXrBOUyWO348V8Ys%2FZNlfV%2BXtVWC%2B0Pktrwl24ZMhBopLS8Ub1nCfC0zsBttzRDFWTR57Ylt9DS4GtIaJjCJgAm7rnObK0LOrmSe24EWAM9XlrXZrNdBFnJdMP7KgUkv6UO5bWbOiVya2mWT2wAz%2F64Rfv9GVTYxaTccw9%2Fv%2BwnK2YSMrRnjkpoDtRfi2xDZv%2FGPe8x%2FlYoc0%2FUO47fQYA7AKEwEa6DUuwbnd1z7cCdBJ3jWB9iz4i2lLbxWwWRZgWoZkBUIgYsR85YHOSqKs%2FgcA4RUmDBgjw1ogphMTFVhxEzejLnN1X93Ygq4Y%2B1LbTusrexmpvCk%2FQNtdlvnwnQtdMfmD1HzAqO2kYDjvEPzlteLTXqTY5CKLATV8%2F6ZWKcuMUmwppt8BZ27DaviPPb6HEy%2BfZdOlqydLGv4TaMTmq%2BUIwS73mm0zn0gK0F4gtmA5Ekxe3Va10wPQr%2Bv4km5uh3iqxHzDQ%2BfjDBjqkAW7gXrgzJeeE7QETbiM%2BSC7SumD88ltlMLiibPQqHsIqn0sIRULFK078ojPPa3EYD6bLTrnHkmUfqEtUsFXGbSEHFRH8cUuaNhiy%2FxnwQF8wND8fX%2BG%2BlRqtK3%2BX5SQ0H2d0nuqlxcf8RXskouZGz8QCfY0cFGbGBOcO6nbDBYB%2BBEvEjL22J8xAZM0UN3Npd0l87dV9EJv3RwFTsY3zFJMshrJi&X-Amz-Signature=2543df1df60b97453a6a40a7ea4ac9d62fc9998dd03666761a679df83e6714cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
