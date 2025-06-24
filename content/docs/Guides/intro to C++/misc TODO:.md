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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJGTHWS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBz4o1l0N0qnElpqW8DmaMxpnZdBHOUCVyMgZisCf868AiEA%2FEsSQju7CyQrC9KbHuayBuCvEfY%2F%2Blo%2BfwoBBZ%2BTYEUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEe5P7WHhmz%2BoX%2FsoSrcA0Sc7uNJ%2Fye5ELbZC9YuzGRLXW2U7a2XsQ%2BBY9sP0o2hDYzBnL5daL%2BrOZ2%2BRQh3PI8xfr%2B0udHNb%2BZ96qkPsZg8y%2BFHE3VzaP4HsLPEOn3Fl5LKcA%2ByjFmdx07dpWz1P53aU5Y%2Bbxg2ROzpRTs%2F2%2BKFtmtd6T7F1YyrcJzfvQq%2FFITFYBEx65BN%2F7h6Gw2d0vRqjEhhrXkBrCVfEOgye0Eo%2BO4f1uVSBqERf7dU4kDBwHjS3cK6hnf9zfSlFNWj1ijeJr%2BgJhCKsKiRkKaSF%2B2FjQfR%2BqSpjBGuTBcCqCmbHLZ8t7cq8qMegzwqNm1g9FT8%2Fpbr8n8E0nN7l8NCQChVn9Y7RVWkSmFtwaWGosbEoGLqo4NjUx5vM5bu6DCn9Ac%2FsE7nbFfzB3TwVgjanIYNVyTBF%2Fmzjbb3q5VntKq33KFcYVTxz0cuVugxSp5E21bEL3%2FffaKQ%2FhSnB7cV4jL5OKJqAvxzzei2YG08RD4Ahjarpsb4GfX7gy%2Fl5utFiGaJVsoZfw6URuM8ZEeARii%2FCWlqcbmQ%2Fa82E%2FItr6UO2BrmmC4bDAKONSAfn7RaO8Giu3iYCCfzsqWP1Hg0LZe0SuUuvTPS%2F%2BhNBf1SfeOnLimaBrW8TJCgrM9fMPGx6cIGOqUBDSo0IyL6x8rNBO1%2FF0AC6BxmncT4vJ0rZm%2BMFRrxXGCW6wni8U%2FGATIKtdE7sYxlP6d3evzjZVtTBVsIHpeMeRslZKRgQAShvU%2BohNatUTAFH9phzbL7j70BqFEBZKExNmRoOOXgzCnHILfTQ%2FMxUe76YCTi7H485uhq0obT8XDe11%2Fec%2FQJqxzx36xXIpgx%2BhHF6GsfuJrWBlFP%2B6NlWngeCpAB&X-Amz-Signature=4764c8977873f053fd9f1128715354b0f80c4e5794badb8a6d35c7a34e1ed5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJGTHWS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBz4o1l0N0qnElpqW8DmaMxpnZdBHOUCVyMgZisCf868AiEA%2FEsSQju7CyQrC9KbHuayBuCvEfY%2F%2Blo%2BfwoBBZ%2BTYEUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEe5P7WHhmz%2BoX%2FsoSrcA0Sc7uNJ%2Fye5ELbZC9YuzGRLXW2U7a2XsQ%2BBY9sP0o2hDYzBnL5daL%2BrOZ2%2BRQh3PI8xfr%2B0udHNb%2BZ96qkPsZg8y%2BFHE3VzaP4HsLPEOn3Fl5LKcA%2ByjFmdx07dpWz1P53aU5Y%2Bbxg2ROzpRTs%2F2%2BKFtmtd6T7F1YyrcJzfvQq%2FFITFYBEx65BN%2F7h6Gw2d0vRqjEhhrXkBrCVfEOgye0Eo%2BO4f1uVSBqERf7dU4kDBwHjS3cK6hnf9zfSlFNWj1ijeJr%2BgJhCKsKiRkKaSF%2B2FjQfR%2BqSpjBGuTBcCqCmbHLZ8t7cq8qMegzwqNm1g9FT8%2Fpbr8n8E0nN7l8NCQChVn9Y7RVWkSmFtwaWGosbEoGLqo4NjUx5vM5bu6DCn9Ac%2FsE7nbFfzB3TwVgjanIYNVyTBF%2Fmzjbb3q5VntKq33KFcYVTxz0cuVugxSp5E21bEL3%2FffaKQ%2FhSnB7cV4jL5OKJqAvxzzei2YG08RD4Ahjarpsb4GfX7gy%2Fl5utFiGaJVsoZfw6URuM8ZEeARii%2FCWlqcbmQ%2Fa82E%2FItr6UO2BrmmC4bDAKONSAfn7RaO8Giu3iYCCfzsqWP1Hg0LZe0SuUuvTPS%2F%2BhNBf1SfeOnLimaBrW8TJCgrM9fMPGx6cIGOqUBDSo0IyL6x8rNBO1%2FF0AC6BxmncT4vJ0rZm%2BMFRrxXGCW6wni8U%2FGATIKtdE7sYxlP6d3evzjZVtTBVsIHpeMeRslZKRgQAShvU%2BohNatUTAFH9phzbL7j70BqFEBZKExNmRoOOXgzCnHILfTQ%2FMxUe76YCTi7H485uhq0obT8XDe11%2Fec%2FQJqxzx36xXIpgx%2BhHF6GsfuJrWBlFP%2B6NlWngeCpAB&X-Amz-Signature=08a07642f949f916cd5b3a72d930716cc72567f20a7577a169e92f163d958220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
