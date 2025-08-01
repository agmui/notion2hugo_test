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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKBOTD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCirB9MENPP7Ojfy61M51KQmG8xQtdH5qSDnSdSKHvvwwIgCkI9jIH9pF4J9kPkG94yp1DrdhArC7GAoJ992dOF2c4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaiT%2Bvo3dIXsg1VuCrcAwL28v5KgkJRy%2Bdu9Pm%2BY7jFBGq8%2BQp2yc%2Fr2g3JsDxdeY%2FGGhMQ1OERocLpNsyYeCZUZqnIRf1a%2F7Mz9beEA2QB1ofZA1vOZEX6e8pBS4Cl6nt9ur5mFjuO%2FmXguF1Mm7idG16oMV3%2FfLLDian9lBeIAdbp34uroqFYLcAiZ6OAimh1tEXTEb%2Bk3R2jSrmAHhvyg7Hhon%2F6R3MaJlnAR66DdSMXNJc7xOVeAhkmAi32sn8%2BWV%2FGrgQuebAnDo4%2Bk4QMZs3Pr0LsIqufn3RnfGCwB5CO0346ju5QUhgR0bO5a%2FEwLsNOTCOBAgOePJV6wI9y%2BAs7%2FKRxp%2B5Cvm0PcMmLdOn4%2Bb6nNSdFzOuCJ%2BHzSz7zXrMC7cjCkDo%2B20CEUz3vHq9DAehoisygigSiq8Py3hrJzlcB2uTxFnr57q4nhKpa7pX3yqlNtR2R2j0Kk76uQJ%2BouGBhoIFngFgQFUGR74XFnXGvDlE892tUgsvd0ZUw4FyJnXHhWyKThvQV7%2Bb1%2Bsx4SnHFkAjMm2LAtBoxbQ7H1vBkirV7j1iZMj4a5SCvoZ%2F0kptgvT91NzmEJu5raxaXL2oWN6J3Aj6brfKhPOPRCCnESak8xTfmiXprsEeSwvyb2VOR2rAqMMHttMQGOqUBfOwHLrgD3H6eMkVuY%2FptxvEQzdH4y34rFQSWFzdQ2KYFibHY0DoqNLdLjkx0V1LX5y3lN8krIBJ5eBXyz8A46wyJbI1vvFZJRkuGSpZNzceLz9tLew8WsNWF39ym2r%2FgXt9zGHBYk4EasuFPV6JLSgG%2F8GGVkjxCMl0pkqs3JRVIjtNlREQ2Mvdaj5MyH1Lv1A9zCsy%2BSQ8L7D9Y07C78jrA89tD&X-Amz-Signature=ce1e968a8fb3cbf5718817ad51d38a7fd8e5cec39f6c46adc4683152f16a926e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKBOTD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCirB9MENPP7Ojfy61M51KQmG8xQtdH5qSDnSdSKHvvwwIgCkI9jIH9pF4J9kPkG94yp1DrdhArC7GAoJ992dOF2c4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaiT%2Bvo3dIXsg1VuCrcAwL28v5KgkJRy%2Bdu9Pm%2BY7jFBGq8%2BQp2yc%2Fr2g3JsDxdeY%2FGGhMQ1OERocLpNsyYeCZUZqnIRf1a%2F7Mz9beEA2QB1ofZA1vOZEX6e8pBS4Cl6nt9ur5mFjuO%2FmXguF1Mm7idG16oMV3%2FfLLDian9lBeIAdbp34uroqFYLcAiZ6OAimh1tEXTEb%2Bk3R2jSrmAHhvyg7Hhon%2F6R3MaJlnAR66DdSMXNJc7xOVeAhkmAi32sn8%2BWV%2FGrgQuebAnDo4%2Bk4QMZs3Pr0LsIqufn3RnfGCwB5CO0346ju5QUhgR0bO5a%2FEwLsNOTCOBAgOePJV6wI9y%2BAs7%2FKRxp%2B5Cvm0PcMmLdOn4%2Bb6nNSdFzOuCJ%2BHzSz7zXrMC7cjCkDo%2B20CEUz3vHq9DAehoisygigSiq8Py3hrJzlcB2uTxFnr57q4nhKpa7pX3yqlNtR2R2j0Kk76uQJ%2BouGBhoIFngFgQFUGR74XFnXGvDlE892tUgsvd0ZUw4FyJnXHhWyKThvQV7%2Bb1%2Bsx4SnHFkAjMm2LAtBoxbQ7H1vBkirV7j1iZMj4a5SCvoZ%2F0kptgvT91NzmEJu5raxaXL2oWN6J3Aj6brfKhPOPRCCnESak8xTfmiXprsEeSwvyb2VOR2rAqMMHttMQGOqUBfOwHLrgD3H6eMkVuY%2FptxvEQzdH4y34rFQSWFzdQ2KYFibHY0DoqNLdLjkx0V1LX5y3lN8krIBJ5eBXyz8A46wyJbI1vvFZJRkuGSpZNzceLz9tLew8WsNWF39ym2r%2FgXt9zGHBYk4EasuFPV6JLSgG%2F8GGVkjxCMl0pkqs3JRVIjtNlREQ2Mvdaj5MyH1Lv1A9zCsy%2BSQ8L7D9Y07C78jrA89tD&X-Amz-Signature=30025b263a3bef076d4365d8a63c6769a7fcf0a3e2a3e4d27b2d4509cb6fd37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
