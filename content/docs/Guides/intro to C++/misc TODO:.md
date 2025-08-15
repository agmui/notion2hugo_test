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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMUKLETS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLgBFwa7sBRaZTYMvVL5kGXUj3kQiMwtK2LS2VAB7IawIgZQyVIMecLjyw68V8HEetEx8vV3TF26%2FEQw5rvT8w330q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDWL4SsOQibYfikUYyrcA4oix2Y1vdquJzaBIn2k294sfHHXUN7OEVspns9%2F8R3DwxStKhYRJaiVFtB0vA6kGWLI7ilCW7WZcysRBEpD3%2BAlESt1er5ZVDXT0y5RwxQXuN6%2BFqC5NRShWdfw8%2Fr7S6PC2lyTprSWs1HjrmE2s3xCE87pU3OjksDNoxjIBYQePRvpFvHjS2R5nmL0MMHYv1iUqWiUhpKdNRAfmqW27v0UC3fkxFuDP4cAb56fnRSWFFjSnncGTSMbG7kO44OQW0g9AY3CqO0oOHJtfk%2FICzLH59oVI8LeHWtpijFl0LInlJtkG6lxDcv5w%2FRcOUzq7%2FbvE2NUk%2FNqdrAbcLXDCWJT2G6aW27aAT0ea9sSWkPlbbFlT%2BcxQ%2FtoIfhkSyv42bXuACBCBAC%2FXuSSWLWhBC0aLgOAP%2BmpFEjGRZYXPSZ8Y%2FdYgJJMoDZjSCulktTXlHvy3VVP%2B%2FYRGDgOIeS10nH3Mc4F2jdpl2lArtndIQsHLMGq8HG6dwVgFt9m7kcuHi%2FqMxD%2BHZWflJFuAjjpE888AoI32cJR2MVJfj1xPR3hj78kKjk7u%2B3XjwEWm4un6iWgmqxZyDVhZzKzHbxnSwlSOJYhHKRQGdw6jbSPshiu1D9XyTBFhiObZl8ZMOHa%2FcQGOqUBm2SDndf%2BM5NB5jTvsxRjVKVSPp9dEpjSXXqyPXMUnwSn8rxHaOS15T7q6oxZ0XhqBathysLXlJAh5ls%2F2SzODyPQUr84tXyLtZbHdMFr6h5RcdoQ820asK%2FP0Ydp9lD09gCFgvA3TxCLH15YexKnoswfkE9llxHs5z1TaZNses82t19TAKev8aYH2kuiWM43v3BMhfGNy8pR5rfgch4iWXoUIiqE&X-Amz-Signature=bc22c643f0166a5c059142b037db7748c0f612c5efea02bbe025464b0b78303f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMUKLETS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLgBFwa7sBRaZTYMvVL5kGXUj3kQiMwtK2LS2VAB7IawIgZQyVIMecLjyw68V8HEetEx8vV3TF26%2FEQw5rvT8w330q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDWL4SsOQibYfikUYyrcA4oix2Y1vdquJzaBIn2k294sfHHXUN7OEVspns9%2F8R3DwxStKhYRJaiVFtB0vA6kGWLI7ilCW7WZcysRBEpD3%2BAlESt1er5ZVDXT0y5RwxQXuN6%2BFqC5NRShWdfw8%2Fr7S6PC2lyTprSWs1HjrmE2s3xCE87pU3OjksDNoxjIBYQePRvpFvHjS2R5nmL0MMHYv1iUqWiUhpKdNRAfmqW27v0UC3fkxFuDP4cAb56fnRSWFFjSnncGTSMbG7kO44OQW0g9AY3CqO0oOHJtfk%2FICzLH59oVI8LeHWtpijFl0LInlJtkG6lxDcv5w%2FRcOUzq7%2FbvE2NUk%2FNqdrAbcLXDCWJT2G6aW27aAT0ea9sSWkPlbbFlT%2BcxQ%2FtoIfhkSyv42bXuACBCBAC%2FXuSSWLWhBC0aLgOAP%2BmpFEjGRZYXPSZ8Y%2FdYgJJMoDZjSCulktTXlHvy3VVP%2B%2FYRGDgOIeS10nH3Mc4F2jdpl2lArtndIQsHLMGq8HG6dwVgFt9m7kcuHi%2FqMxD%2BHZWflJFuAjjpE888AoI32cJR2MVJfj1xPR3hj78kKjk7u%2B3XjwEWm4un6iWgmqxZyDVhZzKzHbxnSwlSOJYhHKRQGdw6jbSPshiu1D9XyTBFhiObZl8ZMOHa%2FcQGOqUBm2SDndf%2BM5NB5jTvsxRjVKVSPp9dEpjSXXqyPXMUnwSn8rxHaOS15T7q6oxZ0XhqBathysLXlJAh5ls%2F2SzODyPQUr84tXyLtZbHdMFr6h5RcdoQ820asK%2FP0Ydp9lD09gCFgvA3TxCLH15YexKnoswfkE9llxHs5z1TaZNses82t19TAKev8aYH2kuiWM43v3BMhfGNy8pR5rfgch4iWXoUIiqE&X-Amz-Signature=1a036dec1aaf70c638de47e71564665534967433e75daf9ca0a293e3c2c85e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
