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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGZRMKO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDePDgNwOc%2BmKIDSSnDL7yKy0SMFN%2BhQAiNeC3Wosh3SAiBfM708ODeBBVWU4fzb5akgNSoTPFpiB8x0Jgvv7asptCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ucZSsMI%2FFFjpIeYKtwDCbZ5x9StcXeIP6YiV8rh6t9q6EvP6ITsSngGaCSSS7lqHqmjLZxZT4Z%2FjJxFZLoagjGlsraXAViDYUzMNCsA5W40VHMMTl4Bbw3q%2FMfbBrSTL%2Bv5Tqw55FrkzTx54WzN5gyWxeJ6gv8kq3AwxRcTasnOUfdTkezS2Bt6NF%2FbYKvMTf7CRATTQp5fRz%2BprGTGILAijuVctajz3XW%2Bnz95%2B%2BJ7OynyKUiCQzaSCDsDyA%2FxXZwxIh%2BvLnHzcuhRW%2F6heeZ00d0ZuN7PK19c%2BokU6XPwlI3tPAxsG6pyEJ%2F6oKFeENs%2F4q%2BHmPD84jdQpeCzn0Y9bDVguLuH3tJyKy2O%2Buzip4FB4e363bjgliTORiOBlzJjx%2BREmhMxIqMhCnSDC9QdG4ZJE7iKwHZ13bQZ5qVJ%2F5elTmHJxCQpqSwkExKj0Yj7JgrZ6FuzsdipilD%2FOn41f4%2B01YB65KEzUUekMPzMuAo8GJP%2BaXgaVrqJQBAU2MIYM0ayxu3LVHnRLkBRLg4WRMs4O6RJm3xT1sthB5vhHX6utFDDHXJUkLy4bHSCxinM54euwBQ3%2F6g7b6%2BCf13tkJ50hQHFHw9TwVfKOusJ0xgccNjhCFNkgqxLfc3lojHJVl1wFM%2Fpez4wrsyMwwY6pgHJT%2Fccf48oOf9znmNOJvYgkCfj5UJTGoLjM%2BMYr1zEG6qZ1LZ55ZFc5rN8p0o9LHvbkc99fH3eLKAmr60ZxL1E9kQgrCaBq%2FAGvoNJohmaTGZu1ZTiH1m0jnF3Tt9shYl%2FMW6Z3vB%2BtGXn7MrPf9knKyy9%2FcI138CoxqX5KNFscI8JOFLv7VpJIWTjo29n%2B2doHiDqtm9srX6G37SmTLExpn%2F9gVNe&X-Amz-Signature=1202135cd8f364b14a04f1c41eae4bd85b10ac97eabf76119eea2cb5473eb58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGZRMKO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDePDgNwOc%2BmKIDSSnDL7yKy0SMFN%2BhQAiNeC3Wosh3SAiBfM708ODeBBVWU4fzb5akgNSoTPFpiB8x0Jgvv7asptCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ucZSsMI%2FFFjpIeYKtwDCbZ5x9StcXeIP6YiV8rh6t9q6EvP6ITsSngGaCSSS7lqHqmjLZxZT4Z%2FjJxFZLoagjGlsraXAViDYUzMNCsA5W40VHMMTl4Bbw3q%2FMfbBrSTL%2Bv5Tqw55FrkzTx54WzN5gyWxeJ6gv8kq3AwxRcTasnOUfdTkezS2Bt6NF%2FbYKvMTf7CRATTQp5fRz%2BprGTGILAijuVctajz3XW%2Bnz95%2B%2BJ7OynyKUiCQzaSCDsDyA%2FxXZwxIh%2BvLnHzcuhRW%2F6heeZ00d0ZuN7PK19c%2BokU6XPwlI3tPAxsG6pyEJ%2F6oKFeENs%2F4q%2BHmPD84jdQpeCzn0Y9bDVguLuH3tJyKy2O%2Buzip4FB4e363bjgliTORiOBlzJjx%2BREmhMxIqMhCnSDC9QdG4ZJE7iKwHZ13bQZ5qVJ%2F5elTmHJxCQpqSwkExKj0Yj7JgrZ6FuzsdipilD%2FOn41f4%2B01YB65KEzUUekMPzMuAo8GJP%2BaXgaVrqJQBAU2MIYM0ayxu3LVHnRLkBRLg4WRMs4O6RJm3xT1sthB5vhHX6utFDDHXJUkLy4bHSCxinM54euwBQ3%2F6g7b6%2BCf13tkJ50hQHFHw9TwVfKOusJ0xgccNjhCFNkgqxLfc3lojHJVl1wFM%2Fpez4wrsyMwwY6pgHJT%2Fccf48oOf9znmNOJvYgkCfj5UJTGoLjM%2BMYr1zEG6qZ1LZ55ZFc5rN8p0o9LHvbkc99fH3eLKAmr60ZxL1E9kQgrCaBq%2FAGvoNJohmaTGZu1ZTiH1m0jnF3Tt9shYl%2FMW6Z3vB%2BtGXn7MrPf9knKyy9%2FcI138CoxqX5KNFscI8JOFLv7VpJIWTjo29n%2B2doHiDqtm9srX6G37SmTLExpn%2F9gVNe&X-Amz-Signature=7d0cf2289f083b8830bb243ef234dc08fa016a7f383523be7c6e0e7ed1642efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
