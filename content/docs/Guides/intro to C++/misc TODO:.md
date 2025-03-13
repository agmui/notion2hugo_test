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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYYWPJ2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzt88%2B57U3tEQwAbJscYAzCNAcx0GEfsBz%2Bz%2FYmKZqvAiBkqwyJrz4bNlG9pbMHgB2HIX10Vlc%2BczSpMImayThxiyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjruIUTpHZNih6nocKtwDqx7XHsoNOIpE3%2BNgm6V3mW7M7gEvNrT89zG6EP7WICkHpYrvVva3HPNrDwhKChDvd1%2FSxTMFobLv42M7r%2BdpFtPCvYi9oKUjXVEf57iaCvEYqR1MrY3%2BqwPq0l7Obo9%2BgF%2B%2BmjG0dusdZ2oEpFCJu3WsNIF%2Fm4eFeh7%2BzZ2Qdo4gPBFGScFbRobJUs4i7%2F29WsIgL3MmOR70MRmX1LagRB30kT0BltY6egFgXWAYTAIUR3fGkN7UFU0tOyMbso1oNEA%2F6TseU2AUR3CpsPRBStqP3F5nq6ayDFfV5%2Bz6KCbT9hLoOVhmsiLHssQ2JdDFg2LDs6N1JCUxONps6lwjNHLXdpYLAyTPVMiETwCAJEME9y7TMYKCCXD0ewqFEoDTxYBcLgt1mWJwWwCbF%2B89TqTu34Xgw9yiodTxafb3pzRxFhmaRUujhgtTmqRomVodEVACb0AKTQmx0i85UTObmjiMgnLygvaPd4uD5Obow5LKG%2FPF0pGSzWii0z1f2O7XU9YmOp5%2FXmRQeaAUMgDfMz9leDerUcG406T2gx%2BucUPNx%2BqZ2Rr1jHxnkVL4alSIejpXyfMrrAtgKeWHdYWZ3mIsJxg2rjfyDqCPzMrMt5LPNowhPIrZTR2cn3Aw1JPNvgY6pgGLjznU8qdmSM9fIDT%2FUKEOr2TJTde47q6vT88C5HuzDKcauKM30QOGTKoUCkNS0K2VINtsdN0TEwWXFNUKda73ge4bMYe3jRAOC4GLD3UFTz2TP3MYfkVGFrYVeja%2FwMp0a%2FfyRp0cNAF4AcNAmP7GS6kMMp7tB0E2772pGroyJpQCy%2FLtrQcZmZjUZqpoDQk%2Fh2EAHzJ6tSggIDQCkcv9nH%2F%2Bpkt6&X-Amz-Signature=367045d20317f795185294f405b6e34c0faab43879ac3e4a285d5eba96b8296d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYYWPJ2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzt88%2B57U3tEQwAbJscYAzCNAcx0GEfsBz%2Bz%2FYmKZqvAiBkqwyJrz4bNlG9pbMHgB2HIX10Vlc%2BczSpMImayThxiyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjruIUTpHZNih6nocKtwDqx7XHsoNOIpE3%2BNgm6V3mW7M7gEvNrT89zG6EP7WICkHpYrvVva3HPNrDwhKChDvd1%2FSxTMFobLv42M7r%2BdpFtPCvYi9oKUjXVEf57iaCvEYqR1MrY3%2BqwPq0l7Obo9%2BgF%2B%2BmjG0dusdZ2oEpFCJu3WsNIF%2Fm4eFeh7%2BzZ2Qdo4gPBFGScFbRobJUs4i7%2F29WsIgL3MmOR70MRmX1LagRB30kT0BltY6egFgXWAYTAIUR3fGkN7UFU0tOyMbso1oNEA%2F6TseU2AUR3CpsPRBStqP3F5nq6ayDFfV5%2Bz6KCbT9hLoOVhmsiLHssQ2JdDFg2LDs6N1JCUxONps6lwjNHLXdpYLAyTPVMiETwCAJEME9y7TMYKCCXD0ewqFEoDTxYBcLgt1mWJwWwCbF%2B89TqTu34Xgw9yiodTxafb3pzRxFhmaRUujhgtTmqRomVodEVACb0AKTQmx0i85UTObmjiMgnLygvaPd4uD5Obow5LKG%2FPF0pGSzWii0z1f2O7XU9YmOp5%2FXmRQeaAUMgDfMz9leDerUcG406T2gx%2BucUPNx%2BqZ2Rr1jHxnkVL4alSIejpXyfMrrAtgKeWHdYWZ3mIsJxg2rjfyDqCPzMrMt5LPNowhPIrZTR2cn3Aw1JPNvgY6pgGLjznU8qdmSM9fIDT%2FUKEOr2TJTde47q6vT88C5HuzDKcauKM30QOGTKoUCkNS0K2VINtsdN0TEwWXFNUKda73ge4bMYe3jRAOC4GLD3UFTz2TP3MYfkVGFrYVeja%2FwMp0a%2FfyRp0cNAF4AcNAmP7GS6kMMp7tB0E2772pGroyJpQCy%2FLtrQcZmZjUZqpoDQk%2Fh2EAHzJ6tSggIDQCkcv9nH%2F%2Bpkt6&X-Amz-Signature=9f5aea84d7e566a217e44befeb314257e74da9dc7a56bb37d1ac0b4a3e286aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
