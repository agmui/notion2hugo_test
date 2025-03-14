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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXW454V%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz0PH5yBH2m8Zi4cPhImKBYSPM0LhSjip58XCsOT2zOAIgQ4whiJWZ3jiPTKwMuJ4EkMSTnwcnJ7W7dwvYDWFye4cqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5PmH2ZvfDuIjF5ircAwFpIhF3ax44XjkHtc81I3pX0EIqDXRAhrzUsXEzwxoHHvdz4MA7VZr5xZ3%2FyIqYBNgTPy1o8am%2BZAfKnO33cq9KWLcGGUQ7FjAnK2tPdeDahWx%2BHWG5TJb1l7SlDEysu27Sv7fuwV4PBYpAntGjfu0AJuJ0OUAoZ5J48NBLcJBVwSqFhm8p2%2BQI5s7DM27z6rWBTDSckkSuXJyDtW9uKx%2B14t3EGUj7me3Nq9nvNteki2QWorFNGiGA8Pc0VpMgAQlSgY05hS6nVPqw%2B6xiMsWBf1m50wgysKC1b5hAUX4nh4JZmsJal6xyBALpB3wN8iUF68j5ML7QXglA89iTH6aDtIPuxIVlpduP0%2BSgDIL2cC4JterfibKo6Qr7Ai9Rc6%2F%2F8bvcLQbcTaE15xHkP30bWt3eUV4aTpOVbkhZ4sU1hHXF%2BCq6DuLqg37kXrImfpFveIPhDuQXx4p%2BIXXJmEBBEKs8XI5o1NF8FjbspyAffmOqRCaxmwRYg51pFajalQ14Z9OOs9xm7e3lUusAc%2BlFuM4gJae1dVPGTDSVoG16wZFhg6OgxEtxswfsTcP%2FDYukGzveLSGxAICbumoLN%2FDuN8qU55E4DxVndXt05oMu9c8hEVwVoj887ZK6MLjGz74GOqUBwmTVNlLefT4JjBshSZiBa9YKf8NOX6SQACedCw8ZKAI%2F0HOrTCd1rjiZXXSdWEz7zxqwW071x%2FTjCSoVPhTNGtN4TkW9yfgEDobkKQ%2B4ZcJZUf9FLBb8KaM0VCDzvWjnU%2BAYuYU6SPpq8f%2B8bqpw2ox4hsD%2FPLYSQW6ru2IxxmPYNxpkinzaud6GdOTTH5uQw2tZ5vpKkzrHJudmqi0K%2BWn6gNEx&X-Amz-Signature=74ef9d49423799eeae403b31366ea44ad848c1542815652d9de0c72794674629&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXW454V%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz0PH5yBH2m8Zi4cPhImKBYSPM0LhSjip58XCsOT2zOAIgQ4whiJWZ3jiPTKwMuJ4EkMSTnwcnJ7W7dwvYDWFye4cqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5PmH2ZvfDuIjF5ircAwFpIhF3ax44XjkHtc81I3pX0EIqDXRAhrzUsXEzwxoHHvdz4MA7VZr5xZ3%2FyIqYBNgTPy1o8am%2BZAfKnO33cq9KWLcGGUQ7FjAnK2tPdeDahWx%2BHWG5TJb1l7SlDEysu27Sv7fuwV4PBYpAntGjfu0AJuJ0OUAoZ5J48NBLcJBVwSqFhm8p2%2BQI5s7DM27z6rWBTDSckkSuXJyDtW9uKx%2B14t3EGUj7me3Nq9nvNteki2QWorFNGiGA8Pc0VpMgAQlSgY05hS6nVPqw%2B6xiMsWBf1m50wgysKC1b5hAUX4nh4JZmsJal6xyBALpB3wN8iUF68j5ML7QXglA89iTH6aDtIPuxIVlpduP0%2BSgDIL2cC4JterfibKo6Qr7Ai9Rc6%2F%2F8bvcLQbcTaE15xHkP30bWt3eUV4aTpOVbkhZ4sU1hHXF%2BCq6DuLqg37kXrImfpFveIPhDuQXx4p%2BIXXJmEBBEKs8XI5o1NF8FjbspyAffmOqRCaxmwRYg51pFajalQ14Z9OOs9xm7e3lUusAc%2BlFuM4gJae1dVPGTDSVoG16wZFhg6OgxEtxswfsTcP%2FDYukGzveLSGxAICbumoLN%2FDuN8qU55E4DxVndXt05oMu9c8hEVwVoj887ZK6MLjGz74GOqUBwmTVNlLefT4JjBshSZiBa9YKf8NOX6SQACedCw8ZKAI%2F0HOrTCd1rjiZXXSdWEz7zxqwW071x%2FTjCSoVPhTNGtN4TkW9yfgEDobkKQ%2B4ZcJZUf9FLBb8KaM0VCDzvWjnU%2BAYuYU6SPpq8f%2B8bqpw2ox4hsD%2FPLYSQW6ru2IxxmPYNxpkinzaud6GdOTTH5uQw2tZ5vpKkzrHJudmqi0K%2BWn6gNEx&X-Amz-Signature=092330ff012b687f7bfdf0019e9992c25793ddec54683bbf13fcfdce19ec0c74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
