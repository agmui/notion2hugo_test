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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMBAVIA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFoJpR7CG0T3aA0H0Gz8Omyi9Qwfn%2BFZjGk944i5pXmYAiEAj1TxAJaC0qr3hfU2XqGE3MQT1n963gPf%2FLpxkV%2BmuY8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHcv4k3xbesC2zTRwCrcA7FLvxSJCyKaIz4q%2FO7osVw%2BsbrIkr5cgxQxBkd7XBGJ4vZEZbgvHxCn1oNsUjXwUFXZUer5FNuxs9%2B4uSq7MXlglYz9s5YJlc7JDNCLhiO5GB%2Fv0a0JsltBvw8tUNoRZRnQaNMJXLaAuoWURU9zsy%2Fb5r5FvU9RZUuERrydmjYSnkCWVMNlzcjmCWYffLQNzLhNT2fXfEehWXQVXtJE3fgvDkz4x2I6hOxdgapEwyNU52ObdwFMIYcR3qAmAXA1y63gMUVR7zKqIh5RrmFMQXQxLpY2rWPQ1VP7v6Zgf%2BJ1k3s02oIq5aKDOUXT%2FU2h6GSxpXwfu1D098Hmx1zq9JFUUdFaJ4Qn%2FqBJnLrKsLz0VbfkUtDsg4nbsd2ggqe3QxYztD7KkksE0hj87zgPH9XH9w1IyIGmoV2NU04SSVgzEZYVLo3FxcNee720vhoxWlrnPlFbiT%2Bd0zSf%2F3dwIBYByXNmzZFU%2BRzHyLvN%2F4elzFXzTyLyNVEfTWRj96qPnjWlSM9zQRSympwSQdBvXCbQBwQGgSrmIG0Roble%2F233mOUnZLqrcz4%2BxMmJYl0AakWwrcCN4fMzuHc7LY3cf74o1SM4Z%2Bxvi2B5huI76VR5aaDYwqQPPqDN0ZjlMMTg8MIGOqUBIDrUyRsW8%2BDYvKdvs9ENV6ttCxbSaSST8YCWxQgClhkUfqFHHFeKI%2FjCR07o7iRNdseZVB7Rz3VPaCh4jHoBhTM%2FK8xYRew7l2cPpcGq%2FTrbSxqPG%2BtTkiQ47S0IwYUTWvUsHj5zbkmX8IErLQGYlX5suEYU9O3IkFmEOr6Hk%2FkWYvich9XEERWo3zEYhzx4%2BW9Fmjf%2FlhMEG5JUYDVprCiDliv7&X-Amz-Signature=76aa20eeb0f3e704f99a479ca125b08d8ed18edb87a57873f39cbdc30d193d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMBAVIA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFoJpR7CG0T3aA0H0Gz8Omyi9Qwfn%2BFZjGk944i5pXmYAiEAj1TxAJaC0qr3hfU2XqGE3MQT1n963gPf%2FLpxkV%2BmuY8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHcv4k3xbesC2zTRwCrcA7FLvxSJCyKaIz4q%2FO7osVw%2BsbrIkr5cgxQxBkd7XBGJ4vZEZbgvHxCn1oNsUjXwUFXZUer5FNuxs9%2B4uSq7MXlglYz9s5YJlc7JDNCLhiO5GB%2Fv0a0JsltBvw8tUNoRZRnQaNMJXLaAuoWURU9zsy%2Fb5r5FvU9RZUuERrydmjYSnkCWVMNlzcjmCWYffLQNzLhNT2fXfEehWXQVXtJE3fgvDkz4x2I6hOxdgapEwyNU52ObdwFMIYcR3qAmAXA1y63gMUVR7zKqIh5RrmFMQXQxLpY2rWPQ1VP7v6Zgf%2BJ1k3s02oIq5aKDOUXT%2FU2h6GSxpXwfu1D098Hmx1zq9JFUUdFaJ4Qn%2FqBJnLrKsLz0VbfkUtDsg4nbsd2ggqe3QxYztD7KkksE0hj87zgPH9XH9w1IyIGmoV2NU04SSVgzEZYVLo3FxcNee720vhoxWlrnPlFbiT%2Bd0zSf%2F3dwIBYByXNmzZFU%2BRzHyLvN%2F4elzFXzTyLyNVEfTWRj96qPnjWlSM9zQRSympwSQdBvXCbQBwQGgSrmIG0Roble%2F233mOUnZLqrcz4%2BxMmJYl0AakWwrcCN4fMzuHc7LY3cf74o1SM4Z%2Bxvi2B5huI76VR5aaDYwqQPPqDN0ZjlMMTg8MIGOqUBIDrUyRsW8%2BDYvKdvs9ENV6ttCxbSaSST8YCWxQgClhkUfqFHHFeKI%2FjCR07o7iRNdseZVB7Rz3VPaCh4jHoBhTM%2FK8xYRew7l2cPpcGq%2FTrbSxqPG%2BtTkiQ47S0IwYUTWvUsHj5zbkmX8IErLQGYlX5suEYU9O3IkFmEOr6Hk%2FkWYvich9XEERWo3zEYhzx4%2BW9Fmjf%2FlhMEG5JUYDVprCiDliv7&X-Amz-Signature=3862f1d65c63f9c1d04cd6f1b21602040af7b5152e27be2b7a0c1ec45b85258c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
