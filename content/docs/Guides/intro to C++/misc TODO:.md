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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P6C76K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC9EXeTU1%2FH6ogn3GayDdO2ij3tSjTNHfBPgd%2B%2FAjdc4wIgWMGvTukqmC9smUksWbTXszO90%2FroCQ0bRdlvxUb%2B%2Bywq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBE0dJN%2FPzDEJ8xTkircA5X6%2BYUHO7qi9KlCb4ouTINRb1tFkvIFgNOYhB1frSLPuBnuETOy1l3eapADemsUwxLdodXZNhyjYUEjGOp25vouOwX%2BhbFVZa9Vo0i2KMhgZ%2FG2DfZRwLY08hvsTjTmv9nMV3P%2F%2FWsOdurmoId2X3eCSUxwWMTz%2FQlX96CSzkaJDSavKj6uXdIv2YNyrbrKlNl%2F7p6u1W9%2F2%2F5Falmhe0PZxEabFH3uv7Yzjf2NdEVs1QamnTzOa2L47ekHxz2d6H%2FUMKs7fMpSigzc5AOIckM8TZDJ10WyvmNQrCHs7yMC3Ylzp0V9LIG0gIJwuafOkabVfaR3vrzNH6Kk6jn6entbBX89Ojbrmtfj%2BjWMTNJlaWW0nTn7l7hEupK5caVwc5XsDJnjxtpwR8MiVPfbURnwDzwsO5mdAcpqJfttWrNc6upJE3XPkVAYjGRxebVbW6jojf261SUzPJy6PZVAO4pt9EkF5U1QHYt6uMqZlm2IF3a9XpHQLst5QvUxdWpzF%2BSZMS17twgbmqvFPoBMqyz7C3GQktDvkwstybG5eJOhRIbMV1DZPWQ%2BlAt1gp8OSTNXs9D7w1RJdAXqIKAqDu3uQv%2F%2B%2BSIHiPp1qX%2B1XdL6N1UM4UdURroDT%2FP3MKSX4MMGOqUBasFI9MeTKJUQm6DDAWmNuGh%2FjNuYXBMeuH0QS7qQu2roQqKJMBuj7vYg8gBYfV8%2FjNpp02b1gzeOHUhG0jEBnOg9xe69io5ouohldFj47eb9OR2n7emoN%2BaQWyKhCPbwAblScNw1Ck6yXmQz%2F2jwGmSC40PUEkdDj7DoyUHZCQHVa9u8TCK%2FUbgpzMnydaCJUlTzFkI8KacDBhuWQWXBIOed%2FUS8&X-Amz-Signature=f21bcdddacb3415981bf4c7d43aee6543671bfa31c60c1a7ec72ca9a3ef8bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P6C76K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC9EXeTU1%2FH6ogn3GayDdO2ij3tSjTNHfBPgd%2B%2FAjdc4wIgWMGvTukqmC9smUksWbTXszO90%2FroCQ0bRdlvxUb%2B%2Bywq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBE0dJN%2FPzDEJ8xTkircA5X6%2BYUHO7qi9KlCb4ouTINRb1tFkvIFgNOYhB1frSLPuBnuETOy1l3eapADemsUwxLdodXZNhyjYUEjGOp25vouOwX%2BhbFVZa9Vo0i2KMhgZ%2FG2DfZRwLY08hvsTjTmv9nMV3P%2F%2FWsOdurmoId2X3eCSUxwWMTz%2FQlX96CSzkaJDSavKj6uXdIv2YNyrbrKlNl%2F7p6u1W9%2F2%2F5Falmhe0PZxEabFH3uv7Yzjf2NdEVs1QamnTzOa2L47ekHxz2d6H%2FUMKs7fMpSigzc5AOIckM8TZDJ10WyvmNQrCHs7yMC3Ylzp0V9LIG0gIJwuafOkabVfaR3vrzNH6Kk6jn6entbBX89Ojbrmtfj%2BjWMTNJlaWW0nTn7l7hEupK5caVwc5XsDJnjxtpwR8MiVPfbURnwDzwsO5mdAcpqJfttWrNc6upJE3XPkVAYjGRxebVbW6jojf261SUzPJy6PZVAO4pt9EkF5U1QHYt6uMqZlm2IF3a9XpHQLst5QvUxdWpzF%2BSZMS17twgbmqvFPoBMqyz7C3GQktDvkwstybG5eJOhRIbMV1DZPWQ%2BlAt1gp8OSTNXs9D7w1RJdAXqIKAqDu3uQv%2F%2B%2BSIHiPp1qX%2B1XdL6N1UM4UdURroDT%2FP3MKSX4MMGOqUBasFI9MeTKJUQm6DDAWmNuGh%2FjNuYXBMeuH0QS7qQu2roQqKJMBuj7vYg8gBYfV8%2FjNpp02b1gzeOHUhG0jEBnOg9xe69io5ouohldFj47eb9OR2n7emoN%2BaQWyKhCPbwAblScNw1Ck6yXmQz%2F2jwGmSC40PUEkdDj7DoyUHZCQHVa9u8TCK%2FUbgpzMnydaCJUlTzFkI8KacDBhuWQWXBIOed%2FUS8&X-Amz-Signature=372037aec9b4c5add79154ce0101fd5ee1f0fa1fa878d6dae921c87e0dabba81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
