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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINJWGW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqyY%2BvvUf3%2Bo8QMC7UrhH5RwmcmsIGnUtb%2FFDDzSfMsAiEAnJS2xATbdarexfGXJgV9eFqdYDe49C8hfEdfuG2fl44qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2vQdgkImkwP8hI0ircAyzY2XPS85XDWmV8EjCD7wmL5TLzfiwxJl7zZmx8ozYO%2FpE1PkUI32%2BqSvbKeCaQzSlGRWzh%2B1U3MzWmar3qqR3m%2BY9uzlYyi4hzs%2BrKWQRFpp8daNAGCwcPic1CAqliPIRCv0A7Bwo%2FGrlTHVJWtaOWuKqfrTYZByupcHGpzdNnMRlWVQcLyG9s9VsKMLSebkS9t8fYJHZjJZxFCxW9wF3SIM5uB6K5NDkULCCTpbhg1f4bes8hVIOMPKMY7Ud%2B9ip3%2FO7drdH2lUYvxS4kiuIwwR8FMAnnw6kBz68xBngHyszeDt%2BBpfKTZpD3mGnXWJnU3HO6jiHqETGIMhi0m5Wp9vfB2hQG2hGIW1B4cnT47xZ0nmDpYkSnlLIayGiljBAZ9LBGTEUt4ObOsnLKzD1H0lef2i6%2F03cjdJTbOzck3MQWuwUvK7OtOGZP2RTtuEEVoX0rGOeWYjEjapMpz%2FMIDMQIXmqOXOHNLpRyVlB%2BqLQaIBvynqJG8cemdWmvLL9m0cIvNXiei0SXWpi74TFAnMvIb8A6ZcfXLiiCdfTCp0uFe%2BTk4F4BnW7F1flg%2Ba9CimgkU7MrtgM4czMiJfVlTS2ooqMj2FOmPXjIyYw9nQjQWDynxgy1m6PpMLjs87wGOqUBjRVI17EyoEE60hH1AyIYq%2BJ3pQPPBVjtPSYYwRAIuEcyp0k0uMVj0Suyy8rCWh%2B9V1FfwKODMm4SNvXuEUCuMeWyw7zHWgjPxGDOnKJE21IQZLe%2FbjbOQSV03vHzrde%2BezW8nBtwHaUY3jAdtHB6H8yLN0sNraLDtQ0zDcsFOec76l2HXx0yBsSLUSKuOBjW4EQnNJZ%2BxZD2TwOPixHd6ajJUKL2&X-Amz-Signature=3c8347f82a9608f433d3778f5429cb9885a6e951bc7ca93df0e6afa4084ba412&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINJWGW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqyY%2BvvUf3%2Bo8QMC7UrhH5RwmcmsIGnUtb%2FFDDzSfMsAiEAnJS2xATbdarexfGXJgV9eFqdYDe49C8hfEdfuG2fl44qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2vQdgkImkwP8hI0ircAyzY2XPS85XDWmV8EjCD7wmL5TLzfiwxJl7zZmx8ozYO%2FpE1PkUI32%2BqSvbKeCaQzSlGRWzh%2B1U3MzWmar3qqR3m%2BY9uzlYyi4hzs%2BrKWQRFpp8daNAGCwcPic1CAqliPIRCv0A7Bwo%2FGrlTHVJWtaOWuKqfrTYZByupcHGpzdNnMRlWVQcLyG9s9VsKMLSebkS9t8fYJHZjJZxFCxW9wF3SIM5uB6K5NDkULCCTpbhg1f4bes8hVIOMPKMY7Ud%2B9ip3%2FO7drdH2lUYvxS4kiuIwwR8FMAnnw6kBz68xBngHyszeDt%2BBpfKTZpD3mGnXWJnU3HO6jiHqETGIMhi0m5Wp9vfB2hQG2hGIW1B4cnT47xZ0nmDpYkSnlLIayGiljBAZ9LBGTEUt4ObOsnLKzD1H0lef2i6%2F03cjdJTbOzck3MQWuwUvK7OtOGZP2RTtuEEVoX0rGOeWYjEjapMpz%2FMIDMQIXmqOXOHNLpRyVlB%2BqLQaIBvynqJG8cemdWmvLL9m0cIvNXiei0SXWpi74TFAnMvIb8A6ZcfXLiiCdfTCp0uFe%2BTk4F4BnW7F1flg%2Ba9CimgkU7MrtgM4czMiJfVlTS2ooqMj2FOmPXjIyYw9nQjQWDynxgy1m6PpMLjs87wGOqUBjRVI17EyoEE60hH1AyIYq%2BJ3pQPPBVjtPSYYwRAIuEcyp0k0uMVj0Suyy8rCWh%2B9V1FfwKODMm4SNvXuEUCuMeWyw7zHWgjPxGDOnKJE21IQZLe%2FbjbOQSV03vHzrde%2BezW8nBtwHaUY3jAdtHB6H8yLN0sNraLDtQ0zDcsFOec76l2HXx0yBsSLUSKuOBjW4EQnNJZ%2BxZD2TwOPixHd6ajJUKL2&X-Amz-Signature=ebca173e1153689bea2056e7e06049dcb976bfdbc0220beb0e8c755a01e22ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
