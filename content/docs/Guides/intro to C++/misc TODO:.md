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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCHKUVU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIE021yAO0qtXWmWJBfIgQyvvkphZak015Rhemrn84R6CAiEA72BssRUdjNOd2o%2FUovByGlmDP2pJRmaRxW5bVkD37S4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAAWwbEaVo064T8a%2ByrcA%2Fudh2fU93qO1Yvk9Gpks6U6v2H78Rs8gBVSsNXSJuX3gIFvWKbAUzjOf0SGyM%2F57HbcBtSCmYmKRxJDOQgMQj0wEqcwL6GTh9miXJWvfi7PVsSmxex5C1uWt359Wha8IMOefsL5GxqzS%2FBNskf4ZYGs6kXduXPlOWYoe665GPgm%2Bcn9SsG2IvFOBvbF8lO%2FO1FSii3euwzCfMxalQq%2FjK4JFiITmtTJ9CJTi5avkZA0JE2h%2F7u0KGWP8eznOdK8ZysYAl%2BSodMTmgaiK8w%2B6Fcs4jscfXqoKuX0FywNS4SS9RAnz99aaUpO8w0L2AXRPNPghv%2Fv3tLwuHkHhiLYN2MalRCcwW6S3ygNuold9nWNkuSkIolgWZEV%2Fy7WVMqx0QXgsi70VC%2BVrgEZrAViZ5XMLmjfW66eYLd470b%2FM52il5Y9qkFBH9DSjh0OiXdKhPNDeuJq9seVljagzv%2BIgPONHPGGd0Gua%2BiD1hASdEJ27qsErMZDAKLomod4iDPRrv%2B9g3S%2BY7TnqglxuarGswSyGCmwjb1VguoDwcMHGIcDl7Lh6DfB2272xN2swaOeFrIkvSB%2FtvSxKaSSaSx4ysEjVAFrzLIEQ%2FxXIZ9aOMh8O8XuC9pSp8ZUYtFSMLHPvMIGOqUB9cTyIft7589QyQ7q8RhjbODZT%2BMBe%2FWRjwmRR4%2BEC%2FzTtGN4boC4XnJIGe54jZhAquIlSf4urgWiUx7jNPuQPQZ4b3BSv1Ab6ydn9B8sCHo41bfoJQZaBLjgAJNxLID06I395hEt7n3U4aQBCvSMMiIuohxgvTZmn%2Bkj48wEvNnCHcziJTyFsTdejKyUeIQFRrdqMCvVUyxU7lgUIR%2F3Q9gi%2BE96&X-Amz-Signature=f028a1120262e0bc05d205f80abe78fe9229e603559f70ba0fd7d4ab7fcb0022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCHKUVU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIE021yAO0qtXWmWJBfIgQyvvkphZak015Rhemrn84R6CAiEA72BssRUdjNOd2o%2FUovByGlmDP2pJRmaRxW5bVkD37S4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAAWwbEaVo064T8a%2ByrcA%2Fudh2fU93qO1Yvk9Gpks6U6v2H78Rs8gBVSsNXSJuX3gIFvWKbAUzjOf0SGyM%2F57HbcBtSCmYmKRxJDOQgMQj0wEqcwL6GTh9miXJWvfi7PVsSmxex5C1uWt359Wha8IMOefsL5GxqzS%2FBNskf4ZYGs6kXduXPlOWYoe665GPgm%2Bcn9SsG2IvFOBvbF8lO%2FO1FSii3euwzCfMxalQq%2FjK4JFiITmtTJ9CJTi5avkZA0JE2h%2F7u0KGWP8eznOdK8ZysYAl%2BSodMTmgaiK8w%2B6Fcs4jscfXqoKuX0FywNS4SS9RAnz99aaUpO8w0L2AXRPNPghv%2Fv3tLwuHkHhiLYN2MalRCcwW6S3ygNuold9nWNkuSkIolgWZEV%2Fy7WVMqx0QXgsi70VC%2BVrgEZrAViZ5XMLmjfW66eYLd470b%2FM52il5Y9qkFBH9DSjh0OiXdKhPNDeuJq9seVljagzv%2BIgPONHPGGd0Gua%2BiD1hASdEJ27qsErMZDAKLomod4iDPRrv%2B9g3S%2BY7TnqglxuarGswSyGCmwjb1VguoDwcMHGIcDl7Lh6DfB2272xN2swaOeFrIkvSB%2FtvSxKaSSaSx4ysEjVAFrzLIEQ%2FxXIZ9aOMh8O8XuC9pSp8ZUYtFSMLHPvMIGOqUB9cTyIft7589QyQ7q8RhjbODZT%2BMBe%2FWRjwmRR4%2BEC%2FzTtGN4boC4XnJIGe54jZhAquIlSf4urgWiUx7jNPuQPQZ4b3BSv1Ab6ydn9B8sCHo41bfoJQZaBLjgAJNxLID06I395hEt7n3U4aQBCvSMMiIuohxgvTZmn%2Bkj48wEvNnCHcziJTyFsTdejKyUeIQFRrdqMCvVUyxU7lgUIR%2F3Q9gi%2BE96&X-Amz-Signature=7d3ce3fe2336035aad06c450bc7d15a3daaf3dc9fe5aef24582820b5eedd2315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
