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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNAUWDX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2BNpu9TPPhFW3OXdTknTQooQHxMBPsYwwRidsWByqgAIgXtCIGHgCwj03Js%2Fil45r%2FgmTk%2B5S%2FCAZef2lXG7Y9T8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDgmz%2B99KDYLrjnJCircA02jl8RhZyzwSd7Xb66%2BAebv4xbdILM21%2B4Umm0CWr4EnZjF4FkpJmfAfCuPgIuuAe%2Bhp2Tsy8ODZjG3R%2Brnjnb7NJ5yTYtE3XdSHFo%2BeAxIorJkuhwOHpEb%2Fl%2B72qi4oLi7gvzBiLl2A0IPTNPxgxXmGiqW5gauccEESfxcmdIV4dtz%2Bh9XjY0ENUMrZbzvaMLp8Ip2%2BtiZAj5kfU4xwQWvpSZCJ8GUg5avwEhvU7p%2BFcjHYhFHleMM51%2BzCME0Fy5wR8hv50iX%2BrOxLexQFkMa0VDRb4RJwnh3F8pX%2BNZV7VNru5lKr3WpmdPIN%2FBqJVe8nqUpr1w0LQJetDCbmeU4RLJSI8NucSfYyqWq%2FqRg%2Bo4bLY7LIhOv0lQHwbAjr2bWkV7stFHC6FqohzLXjdxwa%2F%2FR56jUH20a6qE0NWPZ%2Fx8TIe4fugSljuTcTIesN0PJdgjnEqLvYhfihvZ%2FbSVZBtJ4LBtG4Sp86NKRQQdcKbf6qBVds8cJC1s9SoCsImbXtZRGS66N%2B8iN0fgm1tdqLF3hy37CcIhq%2Fmh7W00XtBEabESNPrSDsG%2F69%2BhNHbPBrQv4vgQJvNnbOji%2BX2hp%2BGi7mCyrn5Qxh%2FNjXcmUbVjyvt2ufCum0RAGMNvC%2Bb8GOqUB4qrU3TLZEuINL9UYYOz83SfTADMUoe2PLbjdVZjGiC9DFsSnnAqlAaKBs%2BLkrWyP%2BcQCGIasy1aPNOLqJq4hxiPGbtOG9xf1qQMbKW25GxOZGta7pAlslrW2je0qa4v5MXms7h2PSfTkHqOIGmjNQ7kTYwTIpJ0dHOwN%2BBTC36aYNgtkVmT11Df374%2BLm904VrSTKlTDXC5xqLcSCPxuc4TM%2FKIH&X-Amz-Signature=4585077f9334af39d7aae1e0abbee37f418fd9d521e74a81825f2ce271222a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNAUWDX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2BNpu9TPPhFW3OXdTknTQooQHxMBPsYwwRidsWByqgAIgXtCIGHgCwj03Js%2Fil45r%2FgmTk%2B5S%2FCAZef2lXG7Y9T8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDgmz%2B99KDYLrjnJCircA02jl8RhZyzwSd7Xb66%2BAebv4xbdILM21%2B4Umm0CWr4EnZjF4FkpJmfAfCuPgIuuAe%2Bhp2Tsy8ODZjG3R%2Brnjnb7NJ5yTYtE3XdSHFo%2BeAxIorJkuhwOHpEb%2Fl%2B72qi4oLi7gvzBiLl2A0IPTNPxgxXmGiqW5gauccEESfxcmdIV4dtz%2Bh9XjY0ENUMrZbzvaMLp8Ip2%2BtiZAj5kfU4xwQWvpSZCJ8GUg5avwEhvU7p%2BFcjHYhFHleMM51%2BzCME0Fy5wR8hv50iX%2BrOxLexQFkMa0VDRb4RJwnh3F8pX%2BNZV7VNru5lKr3WpmdPIN%2FBqJVe8nqUpr1w0LQJetDCbmeU4RLJSI8NucSfYyqWq%2FqRg%2Bo4bLY7LIhOv0lQHwbAjr2bWkV7stFHC6FqohzLXjdxwa%2F%2FR56jUH20a6qE0NWPZ%2Fx8TIe4fugSljuTcTIesN0PJdgjnEqLvYhfihvZ%2FbSVZBtJ4LBtG4Sp86NKRQQdcKbf6qBVds8cJC1s9SoCsImbXtZRGS66N%2B8iN0fgm1tdqLF3hy37CcIhq%2Fmh7W00XtBEabESNPrSDsG%2F69%2BhNHbPBrQv4vgQJvNnbOji%2BX2hp%2BGi7mCyrn5Qxh%2FNjXcmUbVjyvt2ufCum0RAGMNvC%2Bb8GOqUB4qrU3TLZEuINL9UYYOz83SfTADMUoe2PLbjdVZjGiC9DFsSnnAqlAaKBs%2BLkrWyP%2BcQCGIasy1aPNOLqJq4hxiPGbtOG9xf1qQMbKW25GxOZGta7pAlslrW2je0qa4v5MXms7h2PSfTkHqOIGmjNQ7kTYwTIpJ0dHOwN%2BBTC36aYNgtkVmT11Df374%2BLm904VrSTKlTDXC5xqLcSCPxuc4TM%2FKIH&X-Amz-Signature=1468191fe1eb13f45d1e876a63c586a56e9344a13400aed29a944e5aa18f49bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
