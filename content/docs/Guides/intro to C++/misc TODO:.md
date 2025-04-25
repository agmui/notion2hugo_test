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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7325R%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1wyGohf3aS6aeKOoS8lAE383%2FqG8uMW1b88ClJXwTdAiEA0PD0whf89vqLkrLUNAbozu1ELAC3%2FophHbdyr%2FeGQK0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGHGshI5heP6JnrQSircA4r13ukUw%2B3WQ%2BlXQZ2pnOwtjz7qjAeKq5K%2BX9Hgz4MRA3Pt1Y%2F6CG3yxWUbZm8VzMLGmh7R160Nalqk9wZqONuZbKg9WTVigjX5Cj5QvGKKlT4k0tobMXR84MM3Ncsk5P6yq3sQSM5uMnVqN5wl0LvlmkkVo234vLP9z%2FZpLggX%2FotIAYZ9FybqwDQ7iYXnAM9epv4z49BwaXXEBGUcFV8bKUgYjQy6mQDpiZxB9MmYnN3e6IJhPKb6nTBhhmjnalsA0bcjHRXtBs6x%2B3BArAJ4A29dynX8z8h1EZupitae5PSUpQgmql1wwZmoJFC5iwKshoz13TozF10eSpO4WygNe08RVLG33nvGc%2BfI6z54NT4weLMow2atk54xTUCJNCHVecCuSZwa07CJHgy3kDS8n67ok2Ezhc7aqd0u2aywW9MxMdJtL0Fd5q1WJ6EqQdM%2BNlgj8a6%2FzjtSlcI7JN70zt4gu6THqipdlQ%2F3zITFO2aAhPQvmjCdi0JYFqUHRfKiqzStUoTxZCjOp7sYNWzQjKqk7gEnwUcuzVBo3Nsj6Hag0Z2GxeGb38r2wW7z6%2ByR1%2FkQS7%2BymwnTgSkHo0aoUriOEWx6RtIxJ1AW%2BKtUltUTQtBgXx1HH%2FEBMIr%2BrcAGOqUBTKIWGtZ%2BSNzTpXLdUjfFC4um6bLiKrzjV1BYD2Fb0Q80pXU42GnlSfxkQiKtXLYwDn6TSfmqdl3fyBVdrtezCiIZcYCEShHvLPVYcTnCYiwavQr7%2BGIwtF7RocjgeYQ6buVxnb08YcjpYCaGj6hFM7lArLdrOFsR783CtTNyVq7rpLh0AVUoIovI4rn%2BxVl8dH3mylHun%2BA3FoHvgyySSFMw7B0d&X-Amz-Signature=942b90a1d4412fac2fe3a3d2955cab14c37e37d8c475e481d7316c0ee6111cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7325R%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1wyGohf3aS6aeKOoS8lAE383%2FqG8uMW1b88ClJXwTdAiEA0PD0whf89vqLkrLUNAbozu1ELAC3%2FophHbdyr%2FeGQK0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGHGshI5heP6JnrQSircA4r13ukUw%2B3WQ%2BlXQZ2pnOwtjz7qjAeKq5K%2BX9Hgz4MRA3Pt1Y%2F6CG3yxWUbZm8VzMLGmh7R160Nalqk9wZqONuZbKg9WTVigjX5Cj5QvGKKlT4k0tobMXR84MM3Ncsk5P6yq3sQSM5uMnVqN5wl0LvlmkkVo234vLP9z%2FZpLggX%2FotIAYZ9FybqwDQ7iYXnAM9epv4z49BwaXXEBGUcFV8bKUgYjQy6mQDpiZxB9MmYnN3e6IJhPKb6nTBhhmjnalsA0bcjHRXtBs6x%2B3BArAJ4A29dynX8z8h1EZupitae5PSUpQgmql1wwZmoJFC5iwKshoz13TozF10eSpO4WygNe08RVLG33nvGc%2BfI6z54NT4weLMow2atk54xTUCJNCHVecCuSZwa07CJHgy3kDS8n67ok2Ezhc7aqd0u2aywW9MxMdJtL0Fd5q1WJ6EqQdM%2BNlgj8a6%2FzjtSlcI7JN70zt4gu6THqipdlQ%2F3zITFO2aAhPQvmjCdi0JYFqUHRfKiqzStUoTxZCjOp7sYNWzQjKqk7gEnwUcuzVBo3Nsj6Hag0Z2GxeGb38r2wW7z6%2ByR1%2FkQS7%2BymwnTgSkHo0aoUriOEWx6RtIxJ1AW%2BKtUltUTQtBgXx1HH%2FEBMIr%2BrcAGOqUBTKIWGtZ%2BSNzTpXLdUjfFC4um6bLiKrzjV1BYD2Fb0Q80pXU42GnlSfxkQiKtXLYwDn6TSfmqdl3fyBVdrtezCiIZcYCEShHvLPVYcTnCYiwavQr7%2BGIwtF7RocjgeYQ6buVxnb08YcjpYCaGj6hFM7lArLdrOFsR783CtTNyVq7rpLh0AVUoIovI4rn%2BxVl8dH3mylHun%2BA3FoHvgyySSFMw7B0d&X-Amz-Signature=133e70ac1373f277e4432be364c71db57475b09d4d1f37c049caffedeb732fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
