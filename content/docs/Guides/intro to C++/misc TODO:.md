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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7L3FHI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCJ8DHKG90LpJZ2RZiD2X0L2ipBfZI%2BoD61UhKkJ7EkvQIgP8%2BXmncf23eXmsXlr8TBaMWAWVifgPEX4igMqQZ%2BQ1cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG0STXo9yEbqZBB31yrcA%2FFkBSR3OK7pPypPiVxfChj9XNCtFUuUkBE9efqjioNAfniJh9stjWzRrxR2co8QnZERACSlhljylH%2BwnTDy2He3zimPkXR7smE3aznqbOGzBrDrHXJNwGqbZ15RF0N6sPPube7EdEBlYW%2B9LfKjaJ8gjZJk6AQvuO6WLxvU0KVmPAvwKRjEGKo1qrAl%2FfvkvnszDVG0L%2F1GqPx53yIdafEu8AHP5mPPE2%2Fd9S0kOey%2FBKcGWtpbOJiFlz2LeKFGILIOSXAzaoZyjwG9qIFl%2BQDqEDSNLA%2FoHFASGat4KOG%2Bd%2FtW%2FIESZkRph%2BiV9XnvFohKBqI3RTh1rm%2FOL2QF%2BFRpQZAuiuNvmvTv5%2FR7I4uBr4gETqKnwGqqnS1vcpPFXgKAvL3M3tQAqKAjVQGvHYMIU3FGOuAjlIwzjJavujGdpz7TxJzWg5N0iC46p00KY2gp7H7afGojJO90cliF%2FjRZh6A4yU4Zp55jLyLhgw7YJonineNjmIs2GW9uc1dse8MELH4391lFzNB0xViQYAFE60Hp7KBNencRGqZN3vWn1Sty1eJ1V5yfsGhGX2Qr%2BNL8Ok5fV6luDTAYnRDUgMg4tMCHQlnd5XhPE%2BJKouaWEdRiv5EVe6M3dpa2MKmhx70GOqUBBkqcB0u6sPtBsT3LOwUN0Ws7BApH41oq%2FoLUw5DFOtJIqmDNtbQiWOepFxVupXObypduisKBTKwT9gMLNHuQKcwCIkOMBxOKzMULdl0aIbvE15NH8h%2FZqTw685MT0ncdEwwAS1PTVDiBsgbY%2B5sn0CnrvcQHp1dvnChTYgtMMl91IBAb%2Bam9TJ85a1X4ngQfv2iv6cTv1NmvuVx4sNQCe1V2UjiC&X-Amz-Signature=1481265e5ec4ee5fee9491b1a48d11af5157c6adb9a1b0de104f116f37cfa175&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7L3FHI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCJ8DHKG90LpJZ2RZiD2X0L2ipBfZI%2BoD61UhKkJ7EkvQIgP8%2BXmncf23eXmsXlr8TBaMWAWVifgPEX4igMqQZ%2BQ1cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG0STXo9yEbqZBB31yrcA%2FFkBSR3OK7pPypPiVxfChj9XNCtFUuUkBE9efqjioNAfniJh9stjWzRrxR2co8QnZERACSlhljylH%2BwnTDy2He3zimPkXR7smE3aznqbOGzBrDrHXJNwGqbZ15RF0N6sPPube7EdEBlYW%2B9LfKjaJ8gjZJk6AQvuO6WLxvU0KVmPAvwKRjEGKo1qrAl%2FfvkvnszDVG0L%2F1GqPx53yIdafEu8AHP5mPPE2%2Fd9S0kOey%2FBKcGWtpbOJiFlz2LeKFGILIOSXAzaoZyjwG9qIFl%2BQDqEDSNLA%2FoHFASGat4KOG%2Bd%2FtW%2FIESZkRph%2BiV9XnvFohKBqI3RTh1rm%2FOL2QF%2BFRpQZAuiuNvmvTv5%2FR7I4uBr4gETqKnwGqqnS1vcpPFXgKAvL3M3tQAqKAjVQGvHYMIU3FGOuAjlIwzjJavujGdpz7TxJzWg5N0iC46p00KY2gp7H7afGojJO90cliF%2FjRZh6A4yU4Zp55jLyLhgw7YJonineNjmIs2GW9uc1dse8MELH4391lFzNB0xViQYAFE60Hp7KBNencRGqZN3vWn1Sty1eJ1V5yfsGhGX2Qr%2BNL8Ok5fV6luDTAYnRDUgMg4tMCHQlnd5XhPE%2BJKouaWEdRiv5EVe6M3dpa2MKmhx70GOqUBBkqcB0u6sPtBsT3LOwUN0Ws7BApH41oq%2FoLUw5DFOtJIqmDNtbQiWOepFxVupXObypduisKBTKwT9gMLNHuQKcwCIkOMBxOKzMULdl0aIbvE15NH8h%2FZqTw685MT0ncdEwwAS1PTVDiBsgbY%2B5sn0CnrvcQHp1dvnChTYgtMMl91IBAb%2Bam9TJ85a1X4ngQfv2iv6cTv1NmvuVx4sNQCe1V2UjiC&X-Amz-Signature=c47f282c7a81b6376cf474251ead3161f151ab8a347e954a9bdfd817566f844c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
