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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2TTUJS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9Q5poNpd1%2BCEBsW8ejMT%2FPnSkijxWEBVwkqg40fE%2BkAiBM6T%2BFsse6KDs7pfT45TnUSkMfQ8paZsykV7p0NgDlsCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMc7TardcJj4qmhWKdKtwDCYtL2WWKBkSCTCrxpQ7adiLAVy3j0hzxqfMn14byJ3jAOnriJR20GS3awYBG2yY5tHWSDHr4igw8bk23L29QQ99tYmCMHvSyb1qtKCjFnrxSysbCun8jBVv6ukVLEA7ZA36nWh%2BiUhrAc9BzfRyRctGJh70hhmzNYf45DoXpaFEzJSo9YCHeziH1dsleZaDo0kTxp9mXHpgEcloFHzEy1%2BpenQ6DDK4iw4F5zP3VEbWA7JSAWX2R4bJwS9TaizeHcn62urCmic9n1%2BPe5ZL79vqBDtyK02aFwdr3C7Ygqk0R0NgRyzuzNq12iwHOsDpIH1n547%2BSJSr6qVy%2B8WPTFqNkTfE94ZpxCachMbqG5anZFVxDck%2Fiim3rsUQ8UuXd%2BFEyGCej8tpcSCmYUx%2BV%2Fl645AiUfDpckqs1et2aRmlIwgxwrjzNOZKb%2BcjZUBZEJBZ08HlPBKe1E1G9p0QoKetA5agC7odofG8O%2ByHdJN0qhnkwblPVJ4vm1drxnGzRMgiHbsRqnL6U%2F7%2FNBrKRacGhLMAEWc4M6yhNBBNAI0iqlJATXN6bAIrP%2BUrlRmLWUKWy6b71PabKOkuH1u3OWni7VcbjRciS%2BHygADvNSMV2Mj41B7YZmNU6eaAwj565xAY6pgGEkl71poYb2%2FNFrb97hE7Nm2e3RCeOyBSLMfNlr%2Bb9oEC0%2F4CQM2D1KS2%2BBeige%2F4TdwFT74ozh0A9PVeclSKy0Vp98rNYKmwjmllwVyMk64UvvuQqa6V%2BTuqnfsXQsCVEumuKTd9B%2BBPoZZqDA1WT3NG93HqXw1qHrXyoS2ufaMYnJM%2Bgt76Ae6vfzQx59Cgqrdzoxi95TdcM1PJYWBSZJ2aX8zhW&X-Amz-Signature=612ee2ca787b4b78545e73e666927ab1c12fd1544ee20f4ed34a3a94024afd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2TTUJS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9Q5poNpd1%2BCEBsW8ejMT%2FPnSkijxWEBVwkqg40fE%2BkAiBM6T%2BFsse6KDs7pfT45TnUSkMfQ8paZsykV7p0NgDlsCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMc7TardcJj4qmhWKdKtwDCYtL2WWKBkSCTCrxpQ7adiLAVy3j0hzxqfMn14byJ3jAOnriJR20GS3awYBG2yY5tHWSDHr4igw8bk23L29QQ99tYmCMHvSyb1qtKCjFnrxSysbCun8jBVv6ukVLEA7ZA36nWh%2BiUhrAc9BzfRyRctGJh70hhmzNYf45DoXpaFEzJSo9YCHeziH1dsleZaDo0kTxp9mXHpgEcloFHzEy1%2BpenQ6DDK4iw4F5zP3VEbWA7JSAWX2R4bJwS9TaizeHcn62urCmic9n1%2BPe5ZL79vqBDtyK02aFwdr3C7Ygqk0R0NgRyzuzNq12iwHOsDpIH1n547%2BSJSr6qVy%2B8WPTFqNkTfE94ZpxCachMbqG5anZFVxDck%2Fiim3rsUQ8UuXd%2BFEyGCej8tpcSCmYUx%2BV%2Fl645AiUfDpckqs1et2aRmlIwgxwrjzNOZKb%2BcjZUBZEJBZ08HlPBKe1E1G9p0QoKetA5agC7odofG8O%2ByHdJN0qhnkwblPVJ4vm1drxnGzRMgiHbsRqnL6U%2F7%2FNBrKRacGhLMAEWc4M6yhNBBNAI0iqlJATXN6bAIrP%2BUrlRmLWUKWy6b71PabKOkuH1u3OWni7VcbjRciS%2BHygADvNSMV2Mj41B7YZmNU6eaAwj565xAY6pgGEkl71poYb2%2FNFrb97hE7Nm2e3RCeOyBSLMfNlr%2Bb9oEC0%2F4CQM2D1KS2%2BBeige%2F4TdwFT74ozh0A9PVeclSKy0Vp98rNYKmwjmllwVyMk64UvvuQqa6V%2BTuqnfsXQsCVEumuKTd9B%2BBPoZZqDA1WT3NG93HqXw1qHrXyoS2ufaMYnJM%2Bgt76Ae6vfzQx59Cgqrdzoxi95TdcM1PJYWBSZJ2aX8zhW&X-Amz-Signature=8a0d4b8be2b8a5b5cc5586fda9cbd4ef8ec7bcb17251c016ddefa095afc5cccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
