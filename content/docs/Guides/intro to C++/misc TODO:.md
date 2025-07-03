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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCMQC6F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFtdS598yHrq5ySZIspqvrOiJ5X1qSsvj7K7Kb8CzladAiAiqCkXY3CsslofKF2nipSHOa4M1xWBihmkX%2FW6QfVdbir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMRIwTgeJ8ibSOO6wzKtwDgZgoWLOtr9Wru5WjRIf61dBlmOUeCrnMaX9rDbvNMTtZ5L4S%2BkhVqka84YwTMWXf3c9zhMyF3J9ZE1PwwJEe%2F1Fxn4aYq%2FBdP2b3nVIukkF3drnsHLfjnOPTTyxaO39J3mvHDA3XzgXpvsTkMJduCLDkVqnKQrK5UGYqQzaF%2B0N%2BXy2WJMjhLTwQ4dnN92qVbxsNwPfly%2B0FQ4uNJkGPn7DX3Xm%2Br5To69rOAro8qp5paQVVfdVvEizN9Cs5XBIhvU0QK5ujIp26AhEhr5M5qKChBWD9qydR7IH8mh8z2KjoKy3Fr2E6%2FOkCTptlJkP1L%2F4Kh1WzYWGgRPKnH%2F0G7GCPRWUz5OwA3w5aSZYNZ3Rd9Ki%2FCU7b35UjD5xqc9u6%2F0SQXGI37Eto215ah3VhxuL0vOzxceFLcek6unAFl9ZzRQb8CJDeEwIwPFQkUkX4re3ROxvqBs9be7PQNGdnW%2BqizrSnFihZ5WuHF5CJSxHEs0R2rxsqXENa3ADVpx0S%2Fphf2Ve1UYq5v2qnPoBRofpCjJtlYG%2BnDuQvDmckW4m5QdrZSOwE%2B7YQD9ztAFYtBRNXKuj7ZQ%2FoajA7kmAdayUn3XAsM2HzJRBRxSN83gU9lYIn9YH3BKEKz6cwgo2awwY6pgGZ78sG%2BYydkuQVT3yDEreg1YjDfSf4O205V0GjuH5lM3v3vYGd5Kt0v0iA74vbWJdak0Dh0y7UevRwRMx6DL1Ifp8nvfeMnIn24DxuPvbY%2BEGpnkXkUIZOTtU%2FaQUVFKyA0h9mQzfZ%2BwyTasYXY%2FjeEv7w5UCQ%2BldE11WWJan5xrM4ogP5vjISXiowItvC9STX2Dp3x%2BSLWNAsfK9DQfwnRI0s%2BJsF&X-Amz-Signature=f63a43c88a4ad7cdd98b391ded0c68bdd5b303d52db033aafe0b8257452d5bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCMQC6F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFtdS598yHrq5ySZIspqvrOiJ5X1qSsvj7K7Kb8CzladAiAiqCkXY3CsslofKF2nipSHOa4M1xWBihmkX%2FW6QfVdbir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMRIwTgeJ8ibSOO6wzKtwDgZgoWLOtr9Wru5WjRIf61dBlmOUeCrnMaX9rDbvNMTtZ5L4S%2BkhVqka84YwTMWXf3c9zhMyF3J9ZE1PwwJEe%2F1Fxn4aYq%2FBdP2b3nVIukkF3drnsHLfjnOPTTyxaO39J3mvHDA3XzgXpvsTkMJduCLDkVqnKQrK5UGYqQzaF%2B0N%2BXy2WJMjhLTwQ4dnN92qVbxsNwPfly%2B0FQ4uNJkGPn7DX3Xm%2Br5To69rOAro8qp5paQVVfdVvEizN9Cs5XBIhvU0QK5ujIp26AhEhr5M5qKChBWD9qydR7IH8mh8z2KjoKy3Fr2E6%2FOkCTptlJkP1L%2F4Kh1WzYWGgRPKnH%2F0G7GCPRWUz5OwA3w5aSZYNZ3Rd9Ki%2FCU7b35UjD5xqc9u6%2F0SQXGI37Eto215ah3VhxuL0vOzxceFLcek6unAFl9ZzRQb8CJDeEwIwPFQkUkX4re3ROxvqBs9be7PQNGdnW%2BqizrSnFihZ5WuHF5CJSxHEs0R2rxsqXENa3ADVpx0S%2Fphf2Ve1UYq5v2qnPoBRofpCjJtlYG%2BnDuQvDmckW4m5QdrZSOwE%2B7YQD9ztAFYtBRNXKuj7ZQ%2FoajA7kmAdayUn3XAsM2HzJRBRxSN83gU9lYIn9YH3BKEKz6cwgo2awwY6pgGZ78sG%2BYydkuQVT3yDEreg1YjDfSf4O205V0GjuH5lM3v3vYGd5Kt0v0iA74vbWJdak0Dh0y7UevRwRMx6DL1Ifp8nvfeMnIn24DxuPvbY%2BEGpnkXkUIZOTtU%2FaQUVFKyA0h9mQzfZ%2BwyTasYXY%2FjeEv7w5UCQ%2BldE11WWJan5xrM4ogP5vjISXiowItvC9STX2Dp3x%2BSLWNAsfK9DQfwnRI0s%2BJsF&X-Amz-Signature=4cffe4bfb3cc92313c79660b3e4d322ba6790a401968d3cc110a6edc76fcd63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
