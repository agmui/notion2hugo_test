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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXXQBFK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B5Jiu6NA%2F5W%2FiW1xfjBB9O0bforrJr5Wdq36X64WNYAiEArcOQ31WgWqoDn84ifvRDMA6DxhzKVWm8ijvZ2ZGmxJ0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHr%2FrnEKr27l%2FnmlSrcA%2FytMOcUYOqKSOCMflb1CIhdYxKpIm2F0RbzajQF68AnASGhm7Jm%2BrQIlkH8fqjM7W2fimzzPHXpc254Ng3eOESNca9CPQymICp%2FEdLfb5pYpCCHDpr9crg3lM7x3VWhHZb2D%2FjyyBthnS%2BvMd2P3Yf84D28I%2BsGEwXuUoR5XwVi3Gy4TbPDMQE4Fj4D3fjG5B9HqWiaTuiVxDqbp722u0K1riEY9bdZbgl7bMobvCD%2FjjqsVupEq1ESIcQePaY1kK8Mk%2BYF52NJQ%2F23oO8wEVa7HPpA3VG1f0n%2FP0WpYxHbh7UYuvhZzzl0Tt4xVzw4gJNJSVRzDDeS8JoA%2FJrXiBNvSWz0vMyWk2HHZbQukQ%2F6PPrT0E9pt3g8V1ZKNXPquvUTYVfxWHrjRXNDZ5rhkWR3ZjqH190X4u8p%2F%2F%2FzJbBKELbpzqwdLPinTTO2Kr6O%2BvElfC0UNHCLKFkYdgK4d%2FBpp7COEHrrgDg6zJadKHBAOlVCqKqG1%2Bpu45mLlaklX0AXayrWcCfSgNBeSyP7wZV6M1GchFsy0tWosWvMvPufzmuQprfcbk9mJxsGxBsPrqj6fOOcWc%2FFlLAupWUMtw2B%2F5D9uqcyZxxigcuC7DNPrSjqnxJkg5BLYDaIMLyk%2BMAGOqUBJNpi7Q7YZrewACW1DDETd6ECfaELd1Zw75sNrshrRR42e%2FYykQa8QI207ENrIH26GYP%2FBN5ghFlZO9yIuTmlfs2rUVvX6A3lt%2FXmflPQfudM5l9EpoenSUJTZBqP5O6TPTlGcBenR3weFuBhRHpELTAuV5MKWXgu4%2Fz%2FxlhJA3xqKGIlmZYaOO4lEb%2FSfYblivGy8skJgHWQjb9TZ3u255SDcltM&X-Amz-Signature=3e56d8156218505bbb5ded19a9a1a9c1d408f7e00de5d3dbf72f1b0c4e918776&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXXQBFK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B5Jiu6NA%2F5W%2FiW1xfjBB9O0bforrJr5Wdq36X64WNYAiEArcOQ31WgWqoDn84ifvRDMA6DxhzKVWm8ijvZ2ZGmxJ0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHr%2FrnEKr27l%2FnmlSrcA%2FytMOcUYOqKSOCMflb1CIhdYxKpIm2F0RbzajQF68AnASGhm7Jm%2BrQIlkH8fqjM7W2fimzzPHXpc254Ng3eOESNca9CPQymICp%2FEdLfb5pYpCCHDpr9crg3lM7x3VWhHZb2D%2FjyyBthnS%2BvMd2P3Yf84D28I%2BsGEwXuUoR5XwVi3Gy4TbPDMQE4Fj4D3fjG5B9HqWiaTuiVxDqbp722u0K1riEY9bdZbgl7bMobvCD%2FjjqsVupEq1ESIcQePaY1kK8Mk%2BYF52NJQ%2F23oO8wEVa7HPpA3VG1f0n%2FP0WpYxHbh7UYuvhZzzl0Tt4xVzw4gJNJSVRzDDeS8JoA%2FJrXiBNvSWz0vMyWk2HHZbQukQ%2F6PPrT0E9pt3g8V1ZKNXPquvUTYVfxWHrjRXNDZ5rhkWR3ZjqH190X4u8p%2F%2F%2FzJbBKELbpzqwdLPinTTO2Kr6O%2BvElfC0UNHCLKFkYdgK4d%2FBpp7COEHrrgDg6zJadKHBAOlVCqKqG1%2Bpu45mLlaklX0AXayrWcCfSgNBeSyP7wZV6M1GchFsy0tWosWvMvPufzmuQprfcbk9mJxsGxBsPrqj6fOOcWc%2FFlLAupWUMtw2B%2F5D9uqcyZxxigcuC7DNPrSjqnxJkg5BLYDaIMLyk%2BMAGOqUBJNpi7Q7YZrewACW1DDETd6ECfaELd1Zw75sNrshrRR42e%2FYykQa8QI207ENrIH26GYP%2FBN5ghFlZO9yIuTmlfs2rUVvX6A3lt%2FXmflPQfudM5l9EpoenSUJTZBqP5O6TPTlGcBenR3weFuBhRHpELTAuV5MKWXgu4%2Fz%2FxlhJA3xqKGIlmZYaOO4lEb%2FSfYblivGy8skJgHWQjb9TZ3u255SDcltM&X-Amz-Signature=3f8d344155dfc33fe75cd3f7149742db51925712da1523f44558097c42aec04c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
