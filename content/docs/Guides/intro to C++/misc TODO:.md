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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2AAPX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD3Mj2pco2HsB3RboQgVcujHvuxGP7vB7mMzAw37Q3I3wIhAPpa44%2Fq6%2BfKhfJlIDFG%2BOCAFeOM4a%2FE5bbqXESYRtu0KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjCIe7X5ZVyzFE8qAq3AOf4VKHtpnjvGxcHaQ8cA6z3%2FLjnC7FLSH2EsdqGLCSF7h7vo6vYNGQY1q9Ol108jQUH4XE6yPQjSpLh7efnwifqUyC1uSODvcpJVZU1n24GUbDfRoyJHpCtfd8RMQXSmFLXgjtJlKupFWKdPWnTmNtO8tMOVVehQ5qlUb8TSGF6SMUUHbEr8cGuC1GJPP0OUVFXrchsvvnUxWlECghseVClBu6qzV22lwSq4VnjAitE9V6uyIIPFLtxlNTukRIrXyTK7PvUpWHFM3RsnyBNUwzLq7islrp3uspV8xmGcH9wBrc9XZZd9Nh%2FMM1qo%2BKHXTBFVuze0nl1pPz8l9sReDnPFu%2FUq4aY%2BxmMImyT%2BLPZooHjymYhhCAK0mXXGbDS0L4O6lY9o3vPLs%2B4XyIdF6ZM2tab8ZJ2VNNCBIohoZznA%2B9qi7T2D2xeinJfeVhl5J2VsJRvxx7ifp%2Bc%2FagIQ4%2Bq3hB4oPySdxLYUd31loHq%2FaPyUPU0jBkkr0AFR3gDo1qyNF8UUcd42M%2F87dN0NqbJ7GP%2FGIaEJ0lpIywqWRGar3ytRMddWodnAaHH5SA0a4J4WR0%2F%2Fk9VHl39iwJRk1M0e9ko%2BB4X9Dl%2BNZ8NsMH8IN7Z56gFBCMuj7GiDC1i4i%2BBjqkAV3TEybTV%2BcFy05bbycDv%2Ffx3XQJJdVnTmNFJ67gHGdDfSnTVot3rHXN6npessJpIsTw1OelyKw6NhogBb386XpdGQs6IIwdx6DoPuSnof%2Bjv1odXtgAw50tDpRpz8IFcfZ0eUJiHY%2BthQtS1ipSD3alv858xb0lbhYFREsaWZWGF6nqVGSKdansFqm3o57HwiLKbZBTx8iPkIt0TJMu170MSEwL&X-Amz-Signature=c0ef75682b043989668a7387d28a0896e0005e6ae499fd54fbc47c360896a633&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2AAPX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD3Mj2pco2HsB3RboQgVcujHvuxGP7vB7mMzAw37Q3I3wIhAPpa44%2Fq6%2BfKhfJlIDFG%2BOCAFeOM4a%2FE5bbqXESYRtu0KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjCIe7X5ZVyzFE8qAq3AOf4VKHtpnjvGxcHaQ8cA6z3%2FLjnC7FLSH2EsdqGLCSF7h7vo6vYNGQY1q9Ol108jQUH4XE6yPQjSpLh7efnwifqUyC1uSODvcpJVZU1n24GUbDfRoyJHpCtfd8RMQXSmFLXgjtJlKupFWKdPWnTmNtO8tMOVVehQ5qlUb8TSGF6SMUUHbEr8cGuC1GJPP0OUVFXrchsvvnUxWlECghseVClBu6qzV22lwSq4VnjAitE9V6uyIIPFLtxlNTukRIrXyTK7PvUpWHFM3RsnyBNUwzLq7islrp3uspV8xmGcH9wBrc9XZZd9Nh%2FMM1qo%2BKHXTBFVuze0nl1pPz8l9sReDnPFu%2FUq4aY%2BxmMImyT%2BLPZooHjymYhhCAK0mXXGbDS0L4O6lY9o3vPLs%2B4XyIdF6ZM2tab8ZJ2VNNCBIohoZznA%2B9qi7T2D2xeinJfeVhl5J2VsJRvxx7ifp%2Bc%2FagIQ4%2Bq3hB4oPySdxLYUd31loHq%2FaPyUPU0jBkkr0AFR3gDo1qyNF8UUcd42M%2F87dN0NqbJ7GP%2FGIaEJ0lpIywqWRGar3ytRMddWodnAaHH5SA0a4J4WR0%2F%2Fk9VHl39iwJRk1M0e9ko%2BB4X9Dl%2BNZ8NsMH8IN7Z56gFBCMuj7GiDC1i4i%2BBjqkAV3TEybTV%2BcFy05bbycDv%2Ffx3XQJJdVnTmNFJ67gHGdDfSnTVot3rHXN6npessJpIsTw1OelyKw6NhogBb386XpdGQs6IIwdx6DoPuSnof%2Bjv1odXtgAw50tDpRpz8IFcfZ0eUJiHY%2BthQtS1ipSD3alv858xb0lbhYFREsaWZWGF6nqVGSKdansFqm3o57HwiLKbZBTx8iPkIt0TJMu170MSEwL&X-Amz-Signature=bff048d11bfb68037deaac4da7112fdf7d2f6c76ec82d6442ae4f92506d92970&X-Amz-SignedHeaders=host&x-id=GetObject)

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
