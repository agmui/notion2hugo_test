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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665257X4TF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJkaXNtaM2gpC6tfztiJKYobgxXt%2FCTWLMnhSWw0sZdQIgCUtG0iZbFh4G76JtzhI1B9B%2BWAOfp0ZMwrcyS2Lg4K8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIoNQwTqPeR991un3ircA7I9uiskcx%2Fcm4AwhyOixJLM%2FN6RJ7A5h0rohJqT8WaTotVkpk6Eo%2Fx4M3nL3Sc77k3Gii3TXscoXNe14DKOfGeP9OzPjpLKi0AlH40%2BAhhN9KseZYSoEfLZiiPvlkBZbZvgFX1LraRAUD8czNMpqTNjuLQW0pR75e6XAq753jLQ29zBINJ0NuKoy1yh67lEwKwlWL4kkfTacULNZw7M3rgpOCww7zxct9rW4lo6uYb3Z2APpe4fUCEfdzrbL88CXIwa2n77%2BwXjYQdl1QgkJjs8LtfdHfG3nWMK5AwZj3K99w6Tu8w7kXk4%2FGaVGrOyT7r8UT4a%2BuktcP1IrxUOZeNZES6O8pTc6xUktE9UiG%2B%2F9tg5%2Fn5fwccPJ8O7phmAgvxGG3B%2BPtQxpsN2Go3TMb6uUP1FyIeJe%2Buhil9ddXxqoyMl0SwKqvtmfa4%2BqsOBCIm63%2F8ZD%2F%2FmW8oPsEBRPSZb782riGb7Jo8vI4Ok2v3st3RF5ZSPanDnACzuT97RPOfwf1NdJ%2BvglR7LuuPmGW8MtfvTRCkxpEd4TROZlI8UsB%2BImicyPocJ77BQOMcNZWeSImK1ZSMBr3l99f6wfFiJGixM1mcpB6LDypTz%2FK1uS%2FlKDhm1Pk5BkQ%2BgMP%2BD0r8GOqUB2SNz5%2FN819zKnUqb0hQeMK0pFpsvFr1TCMpjvfW3yn%2FOls6yK1EZdMfuPR%2FSuJAAMgDVzXMyc%2BCjAlqe%2F3Qmqy0aP6Y20OOIhTQEIMdC191TwlYl8YIIpIY%2BdESwBHVCJkikFodgLP49ufU7vtA6ffKX%2Btsai8F%2FWRi0TOz7U%2FlWEZOFPK5PB2ZElq%2FYUQO2WYKxS7mG0Nt%2BJLzWvq%2FooKiK%2F6TJ&X-Amz-Signature=13e7a8f15c883e470e85ee0b20daff0bf7ed20c9fe084df7a49add8b2a1ec0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665257X4TF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJkaXNtaM2gpC6tfztiJKYobgxXt%2FCTWLMnhSWw0sZdQIgCUtG0iZbFh4G76JtzhI1B9B%2BWAOfp0ZMwrcyS2Lg4K8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIoNQwTqPeR991un3ircA7I9uiskcx%2Fcm4AwhyOixJLM%2FN6RJ7A5h0rohJqT8WaTotVkpk6Eo%2Fx4M3nL3Sc77k3Gii3TXscoXNe14DKOfGeP9OzPjpLKi0AlH40%2BAhhN9KseZYSoEfLZiiPvlkBZbZvgFX1LraRAUD8czNMpqTNjuLQW0pR75e6XAq753jLQ29zBINJ0NuKoy1yh67lEwKwlWL4kkfTacULNZw7M3rgpOCww7zxct9rW4lo6uYb3Z2APpe4fUCEfdzrbL88CXIwa2n77%2BwXjYQdl1QgkJjs8LtfdHfG3nWMK5AwZj3K99w6Tu8w7kXk4%2FGaVGrOyT7r8UT4a%2BuktcP1IrxUOZeNZES6O8pTc6xUktE9UiG%2B%2F9tg5%2Fn5fwccPJ8O7phmAgvxGG3B%2BPtQxpsN2Go3TMb6uUP1FyIeJe%2Buhil9ddXxqoyMl0SwKqvtmfa4%2BqsOBCIm63%2F8ZD%2F%2FmW8oPsEBRPSZb782riGb7Jo8vI4Ok2v3st3RF5ZSPanDnACzuT97RPOfwf1NdJ%2BvglR7LuuPmGW8MtfvTRCkxpEd4TROZlI8UsB%2BImicyPocJ77BQOMcNZWeSImK1ZSMBr3l99f6wfFiJGixM1mcpB6LDypTz%2FK1uS%2FlKDhm1Pk5BkQ%2BgMP%2BD0r8GOqUB2SNz5%2FN819zKnUqb0hQeMK0pFpsvFr1TCMpjvfW3yn%2FOls6yK1EZdMfuPR%2FSuJAAMgDVzXMyc%2BCjAlqe%2F3Qmqy0aP6Y20OOIhTQEIMdC191TwlYl8YIIpIY%2BdESwBHVCJkikFodgLP49ufU7vtA6ffKX%2Btsai8F%2FWRi0TOz7U%2FlWEZOFPK5PB2ZElq%2FYUQO2WYKxS7mG0Nt%2BJLzWvq%2FooKiK%2F6TJ&X-Amz-Signature=6085e4de89de2a16619a74dc635881917dd0539e3e47edcfded6c024e4377ded&X-Amz-SignedHeaders=host&x-id=GetObject)

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
