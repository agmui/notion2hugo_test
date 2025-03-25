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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESY64N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0ba2fYJ7rKyXQmwNHXsF1cr6Mvir4Px3kmXNZEQfWUAiEA7Cg6pvhqlstywQ58G8kdpWAHvOHQaEqc0cCC3gNR8Aoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJQOc52Ih0sgeMSqICrcA15ttVJD074d5r4n1UiHCnD5GF%2FTq9A113ofA2oFjy9KaOWoE06eeMDjwZcSbhDWBKr0zFwrke4vnv3L2ToLV%2FgZ27DBpBDoqO5DGSsLngmX%2FPNO0qxOokGaFELd6rIcWU2s3Ov2%2B%2FAbRc9HseknF3u1vxEx6MdJeP%2B%2FGpqP%2FW5vQ%2BSIwwvnXUgMc1lYZB%2Fb01VWZ%2B7QxVO%2FyNyFnNYnGNEXzaEFUhCdhLMZrRkzgBHgzeSoHrJkFer8SmG3JAT6kFR4w%2F72U%2BR4V%2BKkbzInBIKksauFo36lER6gopU3l9sQKEcfnN7QvSgpHsK2XDJ0csZiOGOSQQm6ZTgJGHfpkYLWSF7oY6L24GmuVcoIQL1TUVh6OA%2FgR%2BFG26ysYBUuWbcUusfuTNBJNIH4NMka76L2h8szseU%2BlntzvrzwiCY14PQ75WrNwHh5QiUaIPodZE2zTYMDv9fHbH2iJhUnNcf6Bhe7LYEs6E%2B2oQRN4DEU6yUufN%2Fxv%2Bfjufa8cWp1gtMetsfy8rJjkWtmnIEWgcaflkHjQVKeSSoPYZwpHpsNw3WI7enhRaIOmoUzYW6ONBmqyJERw4xA3gZsK7HrlF0t8hjE5ma7NCetbM0CxzVrCv05KpSJzxL%2BLzs8MIrEi78GOqUB7oBbRQPJnYw9HoIkkGtTeFh%2BiA7KMr5Zq5vsY31lmtx%2Fd1EUvgWChtr2XZukieYvv3wIV%2B23RlaR1a38hopZzosy4Ycc4ghH4AgP2B5fUfBOnO1ygWeBscwk%2FZF5F3QjhDwNyFcd3CtTacQIGbcw8Cig1WLjlG1OQsf5LTcbGPcW8mq9XBLUWaxz9Mj6b8RM76%2FLuRALbIgw17HDbgXDVYRuD0t5&X-Amz-Signature=5ba45f8856196a4946b38192e6e57f389344bc3cf91a11b7b19dbb09b6dbf891&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESY64N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0ba2fYJ7rKyXQmwNHXsF1cr6Mvir4Px3kmXNZEQfWUAiEA7Cg6pvhqlstywQ58G8kdpWAHvOHQaEqc0cCC3gNR8Aoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJQOc52Ih0sgeMSqICrcA15ttVJD074d5r4n1UiHCnD5GF%2FTq9A113ofA2oFjy9KaOWoE06eeMDjwZcSbhDWBKr0zFwrke4vnv3L2ToLV%2FgZ27DBpBDoqO5DGSsLngmX%2FPNO0qxOokGaFELd6rIcWU2s3Ov2%2B%2FAbRc9HseknF3u1vxEx6MdJeP%2B%2FGpqP%2FW5vQ%2BSIwwvnXUgMc1lYZB%2Fb01VWZ%2B7QxVO%2FyNyFnNYnGNEXzaEFUhCdhLMZrRkzgBHgzeSoHrJkFer8SmG3JAT6kFR4w%2F72U%2BR4V%2BKkbzInBIKksauFo36lER6gopU3l9sQKEcfnN7QvSgpHsK2XDJ0csZiOGOSQQm6ZTgJGHfpkYLWSF7oY6L24GmuVcoIQL1TUVh6OA%2FgR%2BFG26ysYBUuWbcUusfuTNBJNIH4NMka76L2h8szseU%2BlntzvrzwiCY14PQ75WrNwHh5QiUaIPodZE2zTYMDv9fHbH2iJhUnNcf6Bhe7LYEs6E%2B2oQRN4DEU6yUufN%2Fxv%2Bfjufa8cWp1gtMetsfy8rJjkWtmnIEWgcaflkHjQVKeSSoPYZwpHpsNw3WI7enhRaIOmoUzYW6ONBmqyJERw4xA3gZsK7HrlF0t8hjE5ma7NCetbM0CxzVrCv05KpSJzxL%2BLzs8MIrEi78GOqUB7oBbRQPJnYw9HoIkkGtTeFh%2BiA7KMr5Zq5vsY31lmtx%2Fd1EUvgWChtr2XZukieYvv3wIV%2B23RlaR1a38hopZzosy4Ycc4ghH4AgP2B5fUfBOnO1ygWeBscwk%2FZF5F3QjhDwNyFcd3CtTacQIGbcw8Cig1WLjlG1OQsf5LTcbGPcW8mq9XBLUWaxz9Mj6b8RM76%2FLuRALbIgw17HDbgXDVYRuD0t5&X-Amz-Signature=5b530d37ccc86c3f4c7d16ef6ad9d5030e29c80262ce13a9cee80d08665adafb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
