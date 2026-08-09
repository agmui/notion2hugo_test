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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZCQ7A2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkiijEfzbAzetgk9qLVjOkjhxV9WioD5cDMgTRYO%2FGgIgf%2BSxpI0SbMAELL4hD1%2BdSQU%2BwBygfjFCIUqFJw4jOD8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDInCQ5SQDh%2BWtUXmwCrcAwR6gEsbh9WXhvPjqnhcpG4wM9y%2FdcChzgheYI%2F9IwOE3Xb6CopbUnDeWKS0aim%2FPpmkFUzGONnx%2Bbx%2BqmcCvq1RjafXI0eFL1Zj94rhqm7prhxi72Ma4Z7B4e%2BcjesMd4FUvhlWnzHaE9ZwF7Jn6Bhdpwq%2BOipa1aa8o5qKlLL9ycQY3W8kKZTAkCH8B0YLzN7W55uEpkACKgVjkFz4yfIP0z0zsXgOaLMpI5C0ehL8p0eQIWsOROh99rujzebHUpox6C8QGzCwwM2poilMZXyRA6t0HHmLWO6uKkmlc5iqMI7z6nKacTCHpQmwl3UP1%2BAudkCu84%2FTMsEONb6sCH7IVWzKIJikhlNfT5jEI%2B6NxqDpPICISq1f09qN2cuWHByPxg7AuCJC9ok6hU2HkXeaMv8vCKUJIueMVaCw6z1y32lRN5dv%2FcumYoTDz0TN7hV09cDjk3XtUEeae0g7cc0ZzvSITrFXKrIM28MLJUBjQ4hH1AZ7Sqg19%2FrQm8kIOgXuNPkQcP5d2uM0LwyJtiOHePG5uGkIt4WEna8frkHwExNbuOQkNUqQwzUq8zlQRTj%2FzodFa6QYqXPwyIWXp13zfdSUxieS4ercjZwGw5JpXPuHER%2BB%2B6zqQXz0MJrV3tMGOqUBMpicNCItVk5MQ1vjnm1B%2FNFiVimZ5dYb3lG2Fv2rUig%2BJ1fiB0ImFcKqO1CFeWqYdN%2FT0bK8VS829y3xytrLVfImDKCHbnzMXJXZUzidbBbdbIcDcLgPiEqf10QJma%2BjDEEaOV9PuGFRCDbCXp7jwcGpvM8D%2BYIOaZz7qhVb9g1aD%2BQ4GTv1BCd%2FXErSYBFdjGW3NJverJ3rPxlQz03U9lt1NKNr&X-Amz-Signature=b84a19f179d974b5028a52ec29ccf858b0e3ad1432a58d0e2d41f206ea1d779e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZCQ7A2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkiijEfzbAzetgk9qLVjOkjhxV9WioD5cDMgTRYO%2FGgIgf%2BSxpI0SbMAELL4hD1%2BdSQU%2BwBygfjFCIUqFJw4jOD8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDInCQ5SQDh%2BWtUXmwCrcAwR6gEsbh9WXhvPjqnhcpG4wM9y%2FdcChzgheYI%2F9IwOE3Xb6CopbUnDeWKS0aim%2FPpmkFUzGONnx%2Bbx%2BqmcCvq1RjafXI0eFL1Zj94rhqm7prhxi72Ma4Z7B4e%2BcjesMd4FUvhlWnzHaE9ZwF7Jn6Bhdpwq%2BOipa1aa8o5qKlLL9ycQY3W8kKZTAkCH8B0YLzN7W55uEpkACKgVjkFz4yfIP0z0zsXgOaLMpI5C0ehL8p0eQIWsOROh99rujzebHUpox6C8QGzCwwM2poilMZXyRA6t0HHmLWO6uKkmlc5iqMI7z6nKacTCHpQmwl3UP1%2BAudkCu84%2FTMsEONb6sCH7IVWzKIJikhlNfT5jEI%2B6NxqDpPICISq1f09qN2cuWHByPxg7AuCJC9ok6hU2HkXeaMv8vCKUJIueMVaCw6z1y32lRN5dv%2FcumYoTDz0TN7hV09cDjk3XtUEeae0g7cc0ZzvSITrFXKrIM28MLJUBjQ4hH1AZ7Sqg19%2FrQm8kIOgXuNPkQcP5d2uM0LwyJtiOHePG5uGkIt4WEna8frkHwExNbuOQkNUqQwzUq8zlQRTj%2FzodFa6QYqXPwyIWXp13zfdSUxieS4ercjZwGw5JpXPuHER%2BB%2B6zqQXz0MJrV3tMGOqUBMpicNCItVk5MQ1vjnm1B%2FNFiVimZ5dYb3lG2Fv2rUig%2BJ1fiB0ImFcKqO1CFeWqYdN%2FT0bK8VS829y3xytrLVfImDKCHbnzMXJXZUzidbBbdbIcDcLgPiEqf10QJma%2BjDEEaOV9PuGFRCDbCXp7jwcGpvM8D%2BYIOaZz7qhVb9g1aD%2BQ4GTv1BCd%2FXErSYBFdjGW3NJverJ3rPxlQz03U9lt1NKNr&X-Amz-Signature=2e103360137ee7700e3f1a3ebef29f8d40e709fc6060daac321c65e44aa854a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
