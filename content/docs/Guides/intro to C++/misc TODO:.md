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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YYFM4V%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAWLNI1a9OGhAwcXX6UK7zMU0uuEj7X8W052OkHirhWZAiEApotU1H40tbaIhLML4z2nXpD%2Fy4vOt%2BokwkzaX03BKswqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB2QO%2B0Tnh%2Fne7mGyrcAwbEVuYWDM%2FVUupOPTydXLY9qaro8rjQtHgy2UFFxcb%2BtuU3ib5XUvmxn4n81FzUXdIg2XHBQKqB888Cq1UcuByJmY%2F7G1do4fXUG57t%2BZY%2BMyDf78xQabSX9QCwTLlUl6s33xqWhanFuxAlK7GxFy7glhb1S3FFUzY98n0jhCYqOp9n%2FCjzYhtgLRJExq7pIqA4NKEwSu1h0BkEKOEopXRAASqhU%2BNW0ClkPJiIjfA3MNa59MxWqSYgTW0LuqHFxXdA3tV4O%2FNLx9LS5KPN2sM0gpGhr%2FZsceQBsaKFd5XTRTOitx6gMh3QbSQMelWD0w8%2BsQvsyoMstjFL3KudQ5iVE9UHqoIcsGvTNL0TIWSXwpMJ2acbZeDhS2pYRNmj1ABOiYWQXtNOb1xqmEJweo71xj7OavxcQde64i9SnKtdSY4l%2Fd%2FYRf4AtyOdzM%2BG6g1G4w6n6eCw3anjE64tYSU0tNJJ3MAks%2F2xr8k2%2F1FMQKRT41Gi%2FVqpN3VgITV%2BjmM3Bf01Fo9wSH6gxx2K86G7TCW0HXI%2F0CpIekVMNIkJS%2BCF3Z2Gao1684%2FZ%2FbA6Z4yvq3TxdN7myERgqPH062tKDUZ2tarz4Mxd1RMO2DSlBbyK6D2f3l7PRQ%2FcMLfD6b8GOqUBse2z5h3vWOolpcTRGgN7TuBk2N94TWY1rhQFzrs%2BvXMevlbNTB6kSOuXthUHdFqqMFF3kaWgJd4KzX5ly7m1ZXRrxbJ9CGa8rR8lGkRZBKvWQZ%2BQMyycDdbgDdfDcsXjRmSjXkn5mxiXjdAY%2FqJOr7j%2B7cSB%2F2xgoC6gIFxVntX%2BEsiHx4xkf7clXXFU%2FVmlpGwUY458MpfBsVBbUGQuHgfaaQQD&X-Amz-Signature=305b1e9667853bae0aac8b8410ab9c74f81f4e151775f140ca4228d17db7cbec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YYFM4V%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAWLNI1a9OGhAwcXX6UK7zMU0uuEj7X8W052OkHirhWZAiEApotU1H40tbaIhLML4z2nXpD%2Fy4vOt%2BokwkzaX03BKswqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB2QO%2B0Tnh%2Fne7mGyrcAwbEVuYWDM%2FVUupOPTydXLY9qaro8rjQtHgy2UFFxcb%2BtuU3ib5XUvmxn4n81FzUXdIg2XHBQKqB888Cq1UcuByJmY%2F7G1do4fXUG57t%2BZY%2BMyDf78xQabSX9QCwTLlUl6s33xqWhanFuxAlK7GxFy7glhb1S3FFUzY98n0jhCYqOp9n%2FCjzYhtgLRJExq7pIqA4NKEwSu1h0BkEKOEopXRAASqhU%2BNW0ClkPJiIjfA3MNa59MxWqSYgTW0LuqHFxXdA3tV4O%2FNLx9LS5KPN2sM0gpGhr%2FZsceQBsaKFd5XTRTOitx6gMh3QbSQMelWD0w8%2BsQvsyoMstjFL3KudQ5iVE9UHqoIcsGvTNL0TIWSXwpMJ2acbZeDhS2pYRNmj1ABOiYWQXtNOb1xqmEJweo71xj7OavxcQde64i9SnKtdSY4l%2Fd%2FYRf4AtyOdzM%2BG6g1G4w6n6eCw3anjE64tYSU0tNJJ3MAks%2F2xr8k2%2F1FMQKRT41Gi%2FVqpN3VgITV%2BjmM3Bf01Fo9wSH6gxx2K86G7TCW0HXI%2F0CpIekVMNIkJS%2BCF3Z2Gao1684%2FZ%2FbA6Z4yvq3TxdN7myERgqPH062tKDUZ2tarz4Mxd1RMO2DSlBbyK6D2f3l7PRQ%2FcMLfD6b8GOqUBse2z5h3vWOolpcTRGgN7TuBk2N94TWY1rhQFzrs%2BvXMevlbNTB6kSOuXthUHdFqqMFF3kaWgJd4KzX5ly7m1ZXRrxbJ9CGa8rR8lGkRZBKvWQZ%2BQMyycDdbgDdfDcsXjRmSjXkn5mxiXjdAY%2FqJOr7j%2B7cSB%2F2xgoC6gIFxVntX%2BEsiHx4xkf7clXXFU%2FVmlpGwUY458MpfBsVBbUGQuHgfaaQQD&X-Amz-Signature=297bec0d5d79ec6234649682eef0b5bee95bd06c51e0525ffb1c725be9bd0e77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
