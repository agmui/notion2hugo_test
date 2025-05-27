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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRWYEHA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHDWOZcSmRLni0v9uHsxE0EXPy%2BgATX5mGPbQQzMQMMAIgWYdRICGV%2FXc9ZpyXWiFKLeawgdb7EeKCEOTA4XPFPGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIyHOE8ie9teHywpYyrcA3wGbRLDvx%2BOO%2BvLO8TTdz1dcm%2BeoPnu0q4msIaWyzKyUa663huDw5LiPgZ88F1fb8kon9FKkZ%2BRFTH65lqrROTeSnV%2FZTu%2F65WeMX7GWgjuf31eta2bG62tiRXBEf5pgBodXOh%2BtpdmplPdg6SRaUnR8nth08qQ4cfg8jvfUdHfrh9A0TUM5ZF0noNKR%2BLIPgQiAfOqluSn5oKRzPpMcBSzx1Z7ZE%2FxtZlbxDvzNNISqVdGfdlu8Qh0BuGP4aV5pyFzrbF6MfopRIUka%2F7zMaLfOieJ29BMP3BuEWvuumoD7s53fWXl%2BIlIoRGnt2eiOulUKFYkgOZdFSK6bxvUyZCQCgOHCbj9lFbGlDH6Dtx16x2TaHMWwI4gZlepr3IgNPKi%2F4Cw38gh94NBasU7PIzFjJYKnbX69M8y%2BEiSnicb18GEuZl1UCvmNV4FKyR02Da1jrTHA2fkTu9X%2FApJU0zPp1QPpoSHguYkW0Kr8Je%2BtURPNyOEtSFSP1BZg4B50BWkpjdbseKHGnP26ZRJiKH6eY9iV0CcnRQxP%2Fvb7ePnoiGGBX8mQsExMDGtZD8nywhgqOP2PYKZytr3ABa5qLQWj72DfPnB4%2FIsWnMcYSV9b7ujHV%2BGxQTNNvIIMJvU1sEGOqUBC67O%2FI98bU0H89uIQDioN9D0WOQgoIZaUuvWMjxdBN%2Fpfz8XJrRr0So6HGjGIuYlc6zFzobM6mrRBiVUZd9XQ252cfYwXHyTOov%2FSw5ITP%2BiN96wHRRrROkqTQTWkGJTCeQPUtCgSbW4ZWWJUsck8u19vz%2FXAmtv2dVkSAPUWu8MFJaJQ7%2FINeP%2Bkjf9OAQeQj0romMv7lSaCyLojLOgosGJ1O8G&X-Amz-Signature=a0f15f0dc7f93967a71ca025b5879eb5107dcc04220b460460abc779d24f80d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRWYEHA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHDWOZcSmRLni0v9uHsxE0EXPy%2BgATX5mGPbQQzMQMMAIgWYdRICGV%2FXc9ZpyXWiFKLeawgdb7EeKCEOTA4XPFPGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIyHOE8ie9teHywpYyrcA3wGbRLDvx%2BOO%2BvLO8TTdz1dcm%2BeoPnu0q4msIaWyzKyUa663huDw5LiPgZ88F1fb8kon9FKkZ%2BRFTH65lqrROTeSnV%2FZTu%2F65WeMX7GWgjuf31eta2bG62tiRXBEf5pgBodXOh%2BtpdmplPdg6SRaUnR8nth08qQ4cfg8jvfUdHfrh9A0TUM5ZF0noNKR%2BLIPgQiAfOqluSn5oKRzPpMcBSzx1Z7ZE%2FxtZlbxDvzNNISqVdGfdlu8Qh0BuGP4aV5pyFzrbF6MfopRIUka%2F7zMaLfOieJ29BMP3BuEWvuumoD7s53fWXl%2BIlIoRGnt2eiOulUKFYkgOZdFSK6bxvUyZCQCgOHCbj9lFbGlDH6Dtx16x2TaHMWwI4gZlepr3IgNPKi%2F4Cw38gh94NBasU7PIzFjJYKnbX69M8y%2BEiSnicb18GEuZl1UCvmNV4FKyR02Da1jrTHA2fkTu9X%2FApJU0zPp1QPpoSHguYkW0Kr8Je%2BtURPNyOEtSFSP1BZg4B50BWkpjdbseKHGnP26ZRJiKH6eY9iV0CcnRQxP%2Fvb7ePnoiGGBX8mQsExMDGtZD8nywhgqOP2PYKZytr3ABa5qLQWj72DfPnB4%2FIsWnMcYSV9b7ujHV%2BGxQTNNvIIMJvU1sEGOqUBC67O%2FI98bU0H89uIQDioN9D0WOQgoIZaUuvWMjxdBN%2Fpfz8XJrRr0So6HGjGIuYlc6zFzobM6mrRBiVUZd9XQ252cfYwXHyTOov%2FSw5ITP%2BiN96wHRRrROkqTQTWkGJTCeQPUtCgSbW4ZWWJUsck8u19vz%2FXAmtv2dVkSAPUWu8MFJaJQ7%2FINeP%2Bkjf9OAQeQj0romMv7lSaCyLojLOgosGJ1O8G&X-Amz-Signature=253337237446189d06b0cfbdce2206343e2c5f8badccd1cd8afec55a3a4a95b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
