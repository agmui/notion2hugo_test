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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2QOQDZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGnia%2BAN9exc0Zly9zohMydndzt9OZqc%2F1PYqkWcQchvAiEAyvETmTlnMsdDhBq1xtnVPXpVMweEYZUC2NjCTIgWbTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMEwH%2BUiuR0p8QmdlyrcA9EDlxA5Gs53HCJGeYm15yo97930InkFH6mN0D4j9FSvxNpHQAUPRFPsqE7jULCKMtLuADDuz%2BxfN3hprKwOxUOzXCeL4sBYsPEQLrd%2BU9WAzGIZugp3rVIsTztVFOfH4QOHJKIKtXOMUuuER3Fidhd5OkcrYsvYCd5DZIGFdXrJI9Fx2dOezDJI%2Ba3LKzU4K0Qa1sDXolC2MRkbWcMy56icS%2BFYXwMoKbBfuBGyYCcBeP5b7zpvUfy6Z%2BCUBfnlgMtGVaVyeglf9ot5mTjNqQw1h6nmRdq4I4990wQtCTp295l0bcoHvTP1XZG7HVLaUMLPxvOpyQWHGg9DFBCzbMiwpqkn8p4F81tiOJ7nl%2BDJrLedCvGfPfxEe6SB7DniwXY2jFQ9HL4OoWoNb7vKWGMOZQsLHmLpXWnwHSJYH6d4IUfGQEnEpzA%2FeRjONQ1kiUvA5CrS5pu%2FLhYAO93Ls0QX%2BV3wEXZ%2Bv0NFefV0KgJ3yQazsVTd%2F0fjGx7p9CeLZIl1yERb9oEhEK9P%2FZHQr60o%2B048D7Q0ZkPXkHQlEXZJXZ3XG%2BA5cNeOEZ2KdJGh9BEPj7D8VJx9%2B14gAo6pDLSVWK%2BySKExfwmJd6eNLkRxXwulw1lv1h13%2BaCMMPLswb0GOqUBi4idtEDaCKcIWH%2FN7rwG6vDvQY9YhaboPcpi2q8NXNP8NIYLj%2BPjvHiIhK75RBjGCGa460ndiPgdTfIsyQbW4eg9Y9XtCklp7NbI1HM4AGTn2BUqGP5dNHdREAF3tUzWq8U4EqRDz%2BbcxsqrZK0%2F7X5OA78Z7JkrqYNQQtv6BKuU4XzuQFFxc7LJXQQoq8rM6I0EA8n66ckVMHwMhrDO9Le%2F0fVi&X-Amz-Signature=ec005f972fb60e162959c3f58519b2b5c32593e1a5e9ac4f47ce44e1c67bb516&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2QOQDZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGnia%2BAN9exc0Zly9zohMydndzt9OZqc%2F1PYqkWcQchvAiEAyvETmTlnMsdDhBq1xtnVPXpVMweEYZUC2NjCTIgWbTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMEwH%2BUiuR0p8QmdlyrcA9EDlxA5Gs53HCJGeYm15yo97930InkFH6mN0D4j9FSvxNpHQAUPRFPsqE7jULCKMtLuADDuz%2BxfN3hprKwOxUOzXCeL4sBYsPEQLrd%2BU9WAzGIZugp3rVIsTztVFOfH4QOHJKIKtXOMUuuER3Fidhd5OkcrYsvYCd5DZIGFdXrJI9Fx2dOezDJI%2Ba3LKzU4K0Qa1sDXolC2MRkbWcMy56icS%2BFYXwMoKbBfuBGyYCcBeP5b7zpvUfy6Z%2BCUBfnlgMtGVaVyeglf9ot5mTjNqQw1h6nmRdq4I4990wQtCTp295l0bcoHvTP1XZG7HVLaUMLPxvOpyQWHGg9DFBCzbMiwpqkn8p4F81tiOJ7nl%2BDJrLedCvGfPfxEe6SB7DniwXY2jFQ9HL4OoWoNb7vKWGMOZQsLHmLpXWnwHSJYH6d4IUfGQEnEpzA%2FeRjONQ1kiUvA5CrS5pu%2FLhYAO93Ls0QX%2BV3wEXZ%2Bv0NFefV0KgJ3yQazsVTd%2F0fjGx7p9CeLZIl1yERb9oEhEK9P%2FZHQr60o%2B048D7Q0ZkPXkHQlEXZJXZ3XG%2BA5cNeOEZ2KdJGh9BEPj7D8VJx9%2B14gAo6pDLSVWK%2BySKExfwmJd6eNLkRxXwulw1lv1h13%2BaCMMPLswb0GOqUBi4idtEDaCKcIWH%2FN7rwG6vDvQY9YhaboPcpi2q8NXNP8NIYLj%2BPjvHiIhK75RBjGCGa460ndiPgdTfIsyQbW4eg9Y9XtCklp7NbI1HM4AGTn2BUqGP5dNHdREAF3tUzWq8U4EqRDz%2BbcxsqrZK0%2F7X5OA78Z7JkrqYNQQtv6BKuU4XzuQFFxc7LJXQQoq8rM6I0EA8n66ckVMHwMhrDO9Le%2F0fVi&X-Amz-Signature=6ca27918f4624934dd3548a8dba4e4f0ffd69ec91f9f0190be67dedf66838e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
