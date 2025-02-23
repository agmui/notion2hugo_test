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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSTEKE5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvJ3rljb7KgrZxubb6BZ03%2FxRMVkR5Um6tPHl%2FjjJY5AiAScFxd7W7ouilqdg5H6btPH0UUZYKQzP4oWT8RKfYaGiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQKxWrpyJ4qn01GMKtwDoKbUjTbSssPRfXhZfomHQhB%2FWy0iuqr9StO0uDokN1T17gU3uGOHP37GCtjv2gSXG3gHSmByJ2U%2FnUHB0HQ2vVxve%2B8krm5H6AZnmgsefeMeaRlMgP4ylq8DKzFq%2FIyxBJLS8YzEOgyZ3DL33ScJFXXy7mQtKD2LNl2aDQMk03H95fvGu%2FBmm7F%2BQXc82wkiOr96qCKO%2FQyqIlOpEIBk5pD7wkxIFU26gdr0AUFBzsK3DoUjcRWzdTwbxrIXvSdbppBABEvzMjwF7Wc2K7yIkVoOLwQKIkOFgalqRyNk24%2B%2BgkulU8p%2BN4%2BOi%2BOaPcPxrPY%2Fhz63cz%2F6QI0xE6Q23Z4RaCazQ2xdxcTCdgRNe5t0YRdur5js8hFKZ9NwbNPTVKQIXnYGN744pi24r%2FgdDwIAooahWHglPGCRhDz%2FXTYPchtJ8jSHD9vF7umZvF%2FVAjdPd9%2FXcrY%2BBnGgVfecWsCJJIfzsOSiNFyA0aldWAXfYPNRrROZFpDOSHnJnIxVidahmASDAArdqXImAXUY3mdce90kTCAa1tq4UpczoOIGABWIJ5qt5pqG2hV%2FdDIP8V2a8BOqEeBuhv9u71415Pj5dr7ngMgci5Hd83CW5plnhBNDbW2bdsZAvrYw473qvQY6pgEFwfrarxIKHAGjtVK0xVu0rFdEUNU5iKXDf57jdC%2FswpXFT5vXMQc%2Bd9NfCpeVAaLZ%2Fa1LltHo5GeCYEbOO39rsL08BKx3eAwKbOwzpIVRsCaelqq1Cza8%2FUKIci4BN0kwnnDJ4TLez4y5HiWuZYGCD3Hbe2b6yPFBGre4y1lNIG4aIjbo3ejKHO7QUL8LjX0WA9qgDFH%2BRqf8iQgHfX3bsj6VXPrn&X-Amz-Signature=09c696d80b43c4cc1a3cd1e83db76bef7e87caf4484a44f73b4dfc62bcd8c4d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSTEKE5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvJ3rljb7KgrZxubb6BZ03%2FxRMVkR5Um6tPHl%2FjjJY5AiAScFxd7W7ouilqdg5H6btPH0UUZYKQzP4oWT8RKfYaGiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQKxWrpyJ4qn01GMKtwDoKbUjTbSssPRfXhZfomHQhB%2FWy0iuqr9StO0uDokN1T17gU3uGOHP37GCtjv2gSXG3gHSmByJ2U%2FnUHB0HQ2vVxve%2B8krm5H6AZnmgsefeMeaRlMgP4ylq8DKzFq%2FIyxBJLS8YzEOgyZ3DL33ScJFXXy7mQtKD2LNl2aDQMk03H95fvGu%2FBmm7F%2BQXc82wkiOr96qCKO%2FQyqIlOpEIBk5pD7wkxIFU26gdr0AUFBzsK3DoUjcRWzdTwbxrIXvSdbppBABEvzMjwF7Wc2K7yIkVoOLwQKIkOFgalqRyNk24%2B%2BgkulU8p%2BN4%2BOi%2BOaPcPxrPY%2Fhz63cz%2F6QI0xE6Q23Z4RaCazQ2xdxcTCdgRNe5t0YRdur5js8hFKZ9NwbNPTVKQIXnYGN744pi24r%2FgdDwIAooahWHglPGCRhDz%2FXTYPchtJ8jSHD9vF7umZvF%2FVAjdPd9%2FXcrY%2BBnGgVfecWsCJJIfzsOSiNFyA0aldWAXfYPNRrROZFpDOSHnJnIxVidahmASDAArdqXImAXUY3mdce90kTCAa1tq4UpczoOIGABWIJ5qt5pqG2hV%2FdDIP8V2a8BOqEeBuhv9u71415Pj5dr7ngMgci5Hd83CW5plnhBNDbW2bdsZAvrYw473qvQY6pgEFwfrarxIKHAGjtVK0xVu0rFdEUNU5iKXDf57jdC%2FswpXFT5vXMQc%2Bd9NfCpeVAaLZ%2Fa1LltHo5GeCYEbOO39rsL08BKx3eAwKbOwzpIVRsCaelqq1Cza8%2FUKIci4BN0kwnnDJ4TLez4y5HiWuZYGCD3Hbe2b6yPFBGre4y1lNIG4aIjbo3ejKHO7QUL8LjX0WA9qgDFH%2BRqf8iQgHfX3bsj6VXPrn&X-Amz-Signature=55933d3ad89bc34cac3aa99f25ad5925e2ae846acb50fa31c350117299790642&X-Amz-SignedHeaders=host&x-id=GetObject)

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
