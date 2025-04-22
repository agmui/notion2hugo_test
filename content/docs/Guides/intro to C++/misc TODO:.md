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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBDPXHKC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIERMggeXmRgkcMW5LK1uPV9cTncTIf%2Bmkjhlox8SKZsyAiA85dPIiG%2FL%2FHUM9mFR7isRXwHOUwjfiq4sH5C%2Ff7rRQCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoR3gq6XZK619bvWJKtwDHtJrhzwrwydISQR9h4y6i6%2FYhYEqoeBMB3uo5nrEPSwqQVBAbGQDQgvGEuyUC0sHr%2FHs%2BkEvsGhf2UitXJPc08Y8Z1zig0XUhxTDtwGKelIGlbfj0P%2B6PQ0vowSPn95VxqxRwPmTHZWcgGHnLrJzgTsKstqeQZ90m2TBMBh5t8FVyh%2F8clIb1DSz8k7tyCQevCIXv%2FxYAtj4v6kwn%2F4N0GxUgf6WBE%2FKxJbbkyR0ep6de5xg4SD0GPDvWsfwMO8dCCf47fWvslFw6hef96KqLKoAu5%2FE0y8TjxjgQOPe%2B8LlcRZuwwKtkSAd6%2ByHsFmWoGMVMU2CvNq2VOwXL53eLc3xvmpYJJdhAc2csYih1NLUf7iyqBC9LB89xG5XLozXAYP3Kqvn61ERuyIilcmCuDPH3RWqonOYsO8NH7k1gSxMIg392xZrSXHmW85kpU5y%2Fzz3xqtnw%2FXug%2BXq6dcKI0qUflUADOgAuCst8jiE1hPdwBZRccaBDWFG5kORoJEgvnt7mTVdpn4Ow7CYi%2FMUpXwsT0JOmtJLqZaFtLE0rKowa1JfiQpa10M84MheN7c2s0ASYfALmd8AtIhCbygUg7y3cokIc%2FOgvJJrSE2fXT%2Fu0L%2B016TDhc%2F217Qw9r2gwAY6pgEy9JVSUsvMLpQcCX9uD8%2F0geKeoijdAcYgBCNs4H225GJ7sRs0d74UnET9%2Bs%2Bt2Lkx%2BF0FO7%2Bgs2QLFglGyxlfSmWWgg2yzaxJzIVt7nyZTiLoTCGQj0v43MjtA1brExtnkzfypoV2lHZVhVIs4uXgA35761kpdHSsJPYsuC9CX4VtQch4UFWnh%2B02L0tM3fNMY7ulyYuk7HKAGGS7wln%2FjmKN2owD&X-Amz-Signature=e60d5e6b2b798aa61efb91dc5067b4e3c06bfb02b1744988ce38cf4608d2c3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBDPXHKC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIERMggeXmRgkcMW5LK1uPV9cTncTIf%2Bmkjhlox8SKZsyAiA85dPIiG%2FL%2FHUM9mFR7isRXwHOUwjfiq4sH5C%2Ff7rRQCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoR3gq6XZK619bvWJKtwDHtJrhzwrwydISQR9h4y6i6%2FYhYEqoeBMB3uo5nrEPSwqQVBAbGQDQgvGEuyUC0sHr%2FHs%2BkEvsGhf2UitXJPc08Y8Z1zig0XUhxTDtwGKelIGlbfj0P%2B6PQ0vowSPn95VxqxRwPmTHZWcgGHnLrJzgTsKstqeQZ90m2TBMBh5t8FVyh%2F8clIb1DSz8k7tyCQevCIXv%2FxYAtj4v6kwn%2F4N0GxUgf6WBE%2FKxJbbkyR0ep6de5xg4SD0GPDvWsfwMO8dCCf47fWvslFw6hef96KqLKoAu5%2FE0y8TjxjgQOPe%2B8LlcRZuwwKtkSAd6%2ByHsFmWoGMVMU2CvNq2VOwXL53eLc3xvmpYJJdhAc2csYih1NLUf7iyqBC9LB89xG5XLozXAYP3Kqvn61ERuyIilcmCuDPH3RWqonOYsO8NH7k1gSxMIg392xZrSXHmW85kpU5y%2Fzz3xqtnw%2FXug%2BXq6dcKI0qUflUADOgAuCst8jiE1hPdwBZRccaBDWFG5kORoJEgvnt7mTVdpn4Ow7CYi%2FMUpXwsT0JOmtJLqZaFtLE0rKowa1JfiQpa10M84MheN7c2s0ASYfALmd8AtIhCbygUg7y3cokIc%2FOgvJJrSE2fXT%2Fu0L%2B016TDhc%2F217Qw9r2gwAY6pgEy9JVSUsvMLpQcCX9uD8%2F0geKeoijdAcYgBCNs4H225GJ7sRs0d74UnET9%2Bs%2Bt2Lkx%2BF0FO7%2Bgs2QLFglGyxlfSmWWgg2yzaxJzIVt7nyZTiLoTCGQj0v43MjtA1brExtnkzfypoV2lHZVhVIs4uXgA35761kpdHSsJPYsuC9CX4VtQch4UFWnh%2B02L0tM3fNMY7ulyYuk7HKAGGS7wln%2FjmKN2owD&X-Amz-Signature=07081b94f8e859d6717bfa6f282039908943d03d34e32aa70786c9f18d149214&X-Amz-SignedHeaders=host&x-id=GetObject)

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
