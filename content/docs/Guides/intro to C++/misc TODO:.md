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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR5IOT2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCj2Ja5sW38jgUea8oK7KaR2qKec%2FAMYC77xh%2FLfOHnEwIgGhgu0lrdKhoHdryrbmh7TVIG3uQKX%2F5TGAhS0x%2BS6MoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7nd%2F3ZE4dHb0gvCircAwDtdM350N0WGThNwzuWkOiSmXLY6I91fMH%2F8wcirX%2BPP7WYnbYEHapVxRlpflGZKB4b9EpXXsXrNxTQQJHJktYWd%2Bf93oTe5zOF9V9LWkITLwdij0o3C0J6Ld1pr%2FE5GxvKEwp05a7%2FIl18FKxNLJW1iW%2BMr1gcttzhFZomltnNKZ8FblM%2BSAueJaQHohsh0ader%2BFKYlLhFwxLMrSe72vOKWCLnVoA17gIqWBSk9vy1Nz1BBQ0d7oaKWd86PRJ2DO%2BILejU9GwSQQlz%2BsxegTptkOp58fyQp%2BN0w6jTwgmhvOU%2B4Ii31rARxFuniywCvtsOy%2B3j1izoRw9SVQWm5P029%2FInEoEPSaYUmBSQck2Z0GMy6g7cbN2i%2FN1mHcshugw%2B8DOGfoPHBtyZjrU6reYBmt0xb%2BShCrwxSixpPD67x61OlxbYt55%2FnnQ9KTzJzGW3kTtHiSmIM6QKz0F2n%2BU3uDmi5WB0Utzx0n6KqXBZCLVGe11HXO4iBZHDhvh%2FqGRLKUIjH9dCwYXI6X%2B5iOaLhPHwZt5B8i6GELv35IwB7oowVTEmZtjOIz64O2v5WShrGEtAdLBQap8TbWitHPvGsO8CPNeBhJBUYZFSJkZDdcDYz1IYzQlLx43MOnaw74GOqUBxTBlS5znRLno4pn6U%2BrizcxltLww546%2F4WTyqjAlOX9fM1wlOC7KoBQpDe7H3LOQyLsNks8ovn9uwIXnqD%2Fynqfqpm79rWmvt938jp7qCkUanavKZl0r1rLO5wl3qR6daaBSxiE9jhFgWRlC6u5MUNPp7mqzVbSU5v1yUFZHAv5jSyw5zsB8xw6j0h1hzlZncZTPeNJF%2Bg5JMJteKTrM21CaPn52&X-Amz-Signature=ec568a500a316f133bb5faf37b5161d0639509e271a3b66247147ca4ceed7022&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR5IOT2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCj2Ja5sW38jgUea8oK7KaR2qKec%2FAMYC77xh%2FLfOHnEwIgGhgu0lrdKhoHdryrbmh7TVIG3uQKX%2F5TGAhS0x%2BS6MoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7nd%2F3ZE4dHb0gvCircAwDtdM350N0WGThNwzuWkOiSmXLY6I91fMH%2F8wcirX%2BPP7WYnbYEHapVxRlpflGZKB4b9EpXXsXrNxTQQJHJktYWd%2Bf93oTe5zOF9V9LWkITLwdij0o3C0J6Ld1pr%2FE5GxvKEwp05a7%2FIl18FKxNLJW1iW%2BMr1gcttzhFZomltnNKZ8FblM%2BSAueJaQHohsh0ader%2BFKYlLhFwxLMrSe72vOKWCLnVoA17gIqWBSk9vy1Nz1BBQ0d7oaKWd86PRJ2DO%2BILejU9GwSQQlz%2BsxegTptkOp58fyQp%2BN0w6jTwgmhvOU%2B4Ii31rARxFuniywCvtsOy%2B3j1izoRw9SVQWm5P029%2FInEoEPSaYUmBSQck2Z0GMy6g7cbN2i%2FN1mHcshugw%2B8DOGfoPHBtyZjrU6reYBmt0xb%2BShCrwxSixpPD67x61OlxbYt55%2FnnQ9KTzJzGW3kTtHiSmIM6QKz0F2n%2BU3uDmi5WB0Utzx0n6KqXBZCLVGe11HXO4iBZHDhvh%2FqGRLKUIjH9dCwYXI6X%2B5iOaLhPHwZt5B8i6GELv35IwB7oowVTEmZtjOIz64O2v5WShrGEtAdLBQap8TbWitHPvGsO8CPNeBhJBUYZFSJkZDdcDYz1IYzQlLx43MOnaw74GOqUBxTBlS5znRLno4pn6U%2BrizcxltLww546%2F4WTyqjAlOX9fM1wlOC7KoBQpDe7H3LOQyLsNks8ovn9uwIXnqD%2Fynqfqpm79rWmvt938jp7qCkUanavKZl0r1rLO5wl3qR6daaBSxiE9jhFgWRlC6u5MUNPp7mqzVbSU5v1yUFZHAv5jSyw5zsB8xw6j0h1hzlZncZTPeNJF%2Bg5JMJteKTrM21CaPn52&X-Amz-Signature=c2feaac7763fbadbcb32a2c17615eb0c1d4c39532e2413186b5627bda98f4617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
