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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQQGBK6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHJGvJmXbkBotSvHxipMFoTGJRr9mIBcSVm9hAyF7I%2FtAiEA7Ma34MZsjlFWe%2Bh16J7EklaVpnYLo7r7Do3P0iLWlJEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXPLTVVvcDsaAqPSircA6CSx9Rcpf2ulxrtuAQYOtEmzD%2BC6dUrtto2%2FeqWAbXG%2BkxjrH23a8jnpZ2vhYpAf7zbyjvIAxiJIPge%2BWvmudxDzmL8oiZjSwqRMPgoahL8RLBqdOMM%2BgbMus95zZXGs2xhiw35aToadbtUdIO%2FQcs2KMAZrGhy0fHrl4KFM%2F33LB1tb4Rmq0z49l0wxOgkQjZudZL7GHcwzDfSW9WCtRnimZ1Ea1psqMoS7dJP%2FvntMFBImqDOJO5icEqFtMujf6Elj%2BcTZrYuhKxO6l0SH2LbhbOo5jiA1sfWf%2BqWGF77aDymrfOs32xSF4KL5kHJx8Uz4LspFRRVH%2BIn7cYZaTQOxWed%2BVO%2BnbGqQv6s9UavrDHKpdQB8r2mdAJYby90oWg7uQn%2B7FKvuVD8qUns%2B1IMnGb4SflOhOUCifFoZUERoshwvhQENl5LnmdRazSEPjGz4SsgJB7OZYMpzgYM6m1ysOP0hduxvBnWdQID68jyVkUb8lfG8nvjIwnxQwV783Y9IKHP0VVJeMh2Skoh4KD52YZcSb4drh6mibTb5mrnhoZb%2BzVq6yXnXNdRY38zHbXWO5kiya1lBeh2PtUUih4OwQKQpo0TE4HOy7NXz79ltBEyhfFnX67QKbFfML7W78EGOqUBoy7TEAuSiitSfePw%2FS7FgwaB5KMEfl1B5nUkgaVoD3J9bVCSJkuj424KKVAP1ATleYY%2BKd5SLf5N0acJAbxQYh7PyhBYC8FFUvq9%2BG8CnGGzzgtSVdPOnPoaaxEd7Q3SF6aDhn09MiM9%2FdPkz6WwzW1lQQ%2FQgAKhDmxnlkxmxlC%2FSyc%2BsAZlNlNJY%2Fq7wsG6kokNQFnbCYfbYEvGQFrQkUVeBbYy&X-Amz-Signature=7373f4c76bd04224a7ac57aeffeb291fc439487fc516eb8c301a9f2d746a836f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQQGBK6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHJGvJmXbkBotSvHxipMFoTGJRr9mIBcSVm9hAyF7I%2FtAiEA7Ma34MZsjlFWe%2Bh16J7EklaVpnYLo7r7Do3P0iLWlJEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXPLTVVvcDsaAqPSircA6CSx9Rcpf2ulxrtuAQYOtEmzD%2BC6dUrtto2%2FeqWAbXG%2BkxjrH23a8jnpZ2vhYpAf7zbyjvIAxiJIPge%2BWvmudxDzmL8oiZjSwqRMPgoahL8RLBqdOMM%2BgbMus95zZXGs2xhiw35aToadbtUdIO%2FQcs2KMAZrGhy0fHrl4KFM%2F33LB1tb4Rmq0z49l0wxOgkQjZudZL7GHcwzDfSW9WCtRnimZ1Ea1psqMoS7dJP%2FvntMFBImqDOJO5icEqFtMujf6Elj%2BcTZrYuhKxO6l0SH2LbhbOo5jiA1sfWf%2BqWGF77aDymrfOs32xSF4KL5kHJx8Uz4LspFRRVH%2BIn7cYZaTQOxWed%2BVO%2BnbGqQv6s9UavrDHKpdQB8r2mdAJYby90oWg7uQn%2B7FKvuVD8qUns%2B1IMnGb4SflOhOUCifFoZUERoshwvhQENl5LnmdRazSEPjGz4SsgJB7OZYMpzgYM6m1ysOP0hduxvBnWdQID68jyVkUb8lfG8nvjIwnxQwV783Y9IKHP0VVJeMh2Skoh4KD52YZcSb4drh6mibTb5mrnhoZb%2BzVq6yXnXNdRY38zHbXWO5kiya1lBeh2PtUUih4OwQKQpo0TE4HOy7NXz79ltBEyhfFnX67QKbFfML7W78EGOqUBoy7TEAuSiitSfePw%2FS7FgwaB5KMEfl1B5nUkgaVoD3J9bVCSJkuj424KKVAP1ATleYY%2BKd5SLf5N0acJAbxQYh7PyhBYC8FFUvq9%2BG8CnGGzzgtSVdPOnPoaaxEd7Q3SF6aDhn09MiM9%2FdPkz6WwzW1lQQ%2FQgAKhDmxnlkxmxlC%2FSyc%2BsAZlNlNJY%2Fq7wsG6kokNQFnbCYfbYEvGQFrQkUVeBbYy&X-Amz-Signature=8b7d6efc6b4ba148fb9d76b2b66058761583449cdae301c4c132d6421b371c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
