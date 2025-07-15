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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQPTHJF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGKhgf8F3ndw%2B%2FI%2F7rKFolo9Dl0aKFJoNyhkAgH3wWDTAiAO%2Bzu%2Fu2xPXZOCbDBU0KN1Ph51ZpMOo8fXEkl7g4UV9yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMeMYz%2FQLglqDDnjLNKtwD8vXAa4uU%2FEDrpzbmeDRrVAaopUnhbyUCos0sckm3tKQtwPG0WV5CHPGP%2BsZbOE0rVpNdSZOEPf7hu3NWglt7XObRR1qfO42cRc4whXDtQUOV9GHOoa8IB8eJALPTEZ2pBZ0%2FLruZt7XLJTrB%2FFAOwLoXNDEoRLwjwUU6ksMeqSW88U53bnlzOHdyjuuA4UOSHmPKyRkvQMsNOV9U6zQoghk0SawV5OX8h8p0InKhfOsP%2F5TF4usSl1FXKU3GhS7umIHcWKcdeNGRDMA7NSKJKE3X5JTlp60iF1U1jgiyFeD9NiwlAPlir55Ng5TuzpSFs9haV0xePuZNmUyJgMQHNkRdydI2w2k9jS9JSAND%2FYGiVq68hGhYhtqZIIEANNZ%2Flb5XE%2F0yCFEfXWKBGNgZ%2BHhQZ5Zby7NH3hSnqzpbK4VHahyXqqgjqIuy8YX4bJkrwn6LKpV0AXvYDMaDvBvapT%2Bw5fhfA8v3NkPV4ktKjsRCZF4O8jHYUS5RXQigb2bXIebQbM6aUYfLX5KnBe8t6QdyDVuk8IKL2jWSkJkBYOk8jVqsu18FoXlY26pdNWtlEwMjc%2FKYtYke2U3%2Fh%2FAGCmOH8E2kgzveEXbuJ%2FudGncTCBKj37LJwB1PLoYwtqTbwwY6pgH34uryBU7jGqX23lX%2FZSlcFxKc%2BYlsQegyL%2FzkTvG7mKBdxAZGsgkSTjoasgsj4WH5iGg0gNUYXK5FrrGA%2BfcS3xlJQlCe56Yw1DSxFLBBo9L%2Bjrpy8%2BW8gMapslaH7BFQAAyQFEBRiIWfSeTQ2V%2FTPhdkz30JaXS6a%2BnznK8NvKPEqDmmcmtPWOTvxjwXm4rzRiHnaPcaqaGHLzXQtLkxOwC%2Fth9i&X-Amz-Signature=2368185c1b4c765a430b72f881ae2f60f048915cad509aef5fb07e61afa0580c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQPTHJF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGKhgf8F3ndw%2B%2FI%2F7rKFolo9Dl0aKFJoNyhkAgH3wWDTAiAO%2Bzu%2Fu2xPXZOCbDBU0KN1Ph51ZpMOo8fXEkl7g4UV9yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMeMYz%2FQLglqDDnjLNKtwD8vXAa4uU%2FEDrpzbmeDRrVAaopUnhbyUCos0sckm3tKQtwPG0WV5CHPGP%2BsZbOE0rVpNdSZOEPf7hu3NWglt7XObRR1qfO42cRc4whXDtQUOV9GHOoa8IB8eJALPTEZ2pBZ0%2FLruZt7XLJTrB%2FFAOwLoXNDEoRLwjwUU6ksMeqSW88U53bnlzOHdyjuuA4UOSHmPKyRkvQMsNOV9U6zQoghk0SawV5OX8h8p0InKhfOsP%2F5TF4usSl1FXKU3GhS7umIHcWKcdeNGRDMA7NSKJKE3X5JTlp60iF1U1jgiyFeD9NiwlAPlir55Ng5TuzpSFs9haV0xePuZNmUyJgMQHNkRdydI2w2k9jS9JSAND%2FYGiVq68hGhYhtqZIIEANNZ%2Flb5XE%2F0yCFEfXWKBGNgZ%2BHhQZ5Zby7NH3hSnqzpbK4VHahyXqqgjqIuy8YX4bJkrwn6LKpV0AXvYDMaDvBvapT%2Bw5fhfA8v3NkPV4ktKjsRCZF4O8jHYUS5RXQigb2bXIebQbM6aUYfLX5KnBe8t6QdyDVuk8IKL2jWSkJkBYOk8jVqsu18FoXlY26pdNWtlEwMjc%2FKYtYke2U3%2Fh%2FAGCmOH8E2kgzveEXbuJ%2FudGncTCBKj37LJwB1PLoYwtqTbwwY6pgH34uryBU7jGqX23lX%2FZSlcFxKc%2BYlsQegyL%2FzkTvG7mKBdxAZGsgkSTjoasgsj4WH5iGg0gNUYXK5FrrGA%2BfcS3xlJQlCe56Yw1DSxFLBBo9L%2Bjrpy8%2BW8gMapslaH7BFQAAyQFEBRiIWfSeTQ2V%2FTPhdkz30JaXS6a%2BnznK8NvKPEqDmmcmtPWOTvxjwXm4rzRiHnaPcaqaGHLzXQtLkxOwC%2Fth9i&X-Amz-Signature=fb68e919f3cbf4e4e16629d164b2a0c9516ada6967d123f7e27a227a5ae14230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
