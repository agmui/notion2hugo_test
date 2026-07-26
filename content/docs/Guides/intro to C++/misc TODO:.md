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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JE3DW4Y%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBmJbqQo9xlZxSDTTsVPfQuoC6MoiS1Bz%2Bd8lhHQx54yAiBEk8Jy5UF9CaM4koZgTdQXml4e%2BaQ%2ByH3Y02kV%2FKPplir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxSkdSPx0qLQ%2Fxb8IKtwDt2gxTncw98QxmQTlGUnnrWF6L46aqmtfm81MD22lrpleqUZYIYWNnae4ehIXOlXDuJiW6BazsMqdTkAszLQCTkdkCWmVS4SfDICrRb4PAsynuLtV9x11XKiQ3ZkRfIF9M1pnHCdJ%2FWUuWZ7LcpUGLj4g7tcSU801Iewfyj7M7BOrj1B8A66Eo8p3KCBrUL1NxKOf0MqtPp8tboE6YofcWvm7wW%2BxE855eBSrqTJHsX%2BtDBpdlQ1h%2B6fK749jKGib5NBMOZEqLQl%2BpM3gbPYyq%2BvDVI8XfjVn36E8Lqm2lfnNMXnLo4GuRjWrswIUk1AEhy%2BEKt6Zal9Vu1rKCVL87tV1Ehs%2BVIFS1cIIfaaG%2F0PbEz55ubJg0XtAq6iFICkbu8HRSpgImPHDKzIYfQflVyJOtuwQFM9qAYMshNAr0UNf3PNhE1tkL2vzcleUXDTCi6%2FoM77UbMEKFfqZQY1HsBEd40ymh30jKt2Lc%2BtNOCV5yLa3eYXppqAsFABaT9yx2Mou6OD9kjmL0idnYspbamTpgIXXtEFb0Wi1D6CdW0mgQJFmYz7UiQwHI3LO0o79z5y5K3IWotWFysJJjCKimroYHBwhjS6KF2UQqNvfXEHbV1Ab3ocbhrLPKkMwiOeV0wY6pgGdr68RzCaSWq%2BHwVDZghS1L5uyCnCcBPVyd7VSsEmriiZRC7YF7SGZfEfiEH1kp%2FS9ngu174b6maqDwwS2bGjCTK%2F1tHuBlU5etanPkx1DfVUU8HYRnc%2FGkfthmNVpZyTjdjirriChby2GuqTQKCbaeguZKZq7eOrW8LsWP%2BoWhsEmyEaxX78jrQxQWl%2FsE1X%2B601RMNU4iyHan1u7fz9VhXPKnxJJ&X-Amz-Signature=60951c2f7de7f9fb68f6fbfdc0a65fb643c08607823fb87a90739c71483b2863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JE3DW4Y%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBmJbqQo9xlZxSDTTsVPfQuoC6MoiS1Bz%2Bd8lhHQx54yAiBEk8Jy5UF9CaM4koZgTdQXml4e%2BaQ%2ByH3Y02kV%2FKPplir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxSkdSPx0qLQ%2Fxb8IKtwDt2gxTncw98QxmQTlGUnnrWF6L46aqmtfm81MD22lrpleqUZYIYWNnae4ehIXOlXDuJiW6BazsMqdTkAszLQCTkdkCWmVS4SfDICrRb4PAsynuLtV9x11XKiQ3ZkRfIF9M1pnHCdJ%2FWUuWZ7LcpUGLj4g7tcSU801Iewfyj7M7BOrj1B8A66Eo8p3KCBrUL1NxKOf0MqtPp8tboE6YofcWvm7wW%2BxE855eBSrqTJHsX%2BtDBpdlQ1h%2B6fK749jKGib5NBMOZEqLQl%2BpM3gbPYyq%2BvDVI8XfjVn36E8Lqm2lfnNMXnLo4GuRjWrswIUk1AEhy%2BEKt6Zal9Vu1rKCVL87tV1Ehs%2BVIFS1cIIfaaG%2F0PbEz55ubJg0XtAq6iFICkbu8HRSpgImPHDKzIYfQflVyJOtuwQFM9qAYMshNAr0UNf3PNhE1tkL2vzcleUXDTCi6%2FoM77UbMEKFfqZQY1HsBEd40ymh30jKt2Lc%2BtNOCV5yLa3eYXppqAsFABaT9yx2Mou6OD9kjmL0idnYspbamTpgIXXtEFb0Wi1D6CdW0mgQJFmYz7UiQwHI3LO0o79z5y5K3IWotWFysJJjCKimroYHBwhjS6KF2UQqNvfXEHbV1Ab3ocbhrLPKkMwiOeV0wY6pgGdr68RzCaSWq%2BHwVDZghS1L5uyCnCcBPVyd7VSsEmriiZRC7YF7SGZfEfiEH1kp%2FS9ngu174b6maqDwwS2bGjCTK%2F1tHuBlU5etanPkx1DfVUU8HYRnc%2FGkfthmNVpZyTjdjirriChby2GuqTQKCbaeguZKZq7eOrW8LsWP%2BoWhsEmyEaxX78jrQxQWl%2FsE1X%2B601RMNU4iyHan1u7fz9VhXPKnxJJ&X-Amz-Signature=f9ccaf434400b4f5d4091b62d0565f2227c452a74bb855b93e100fa71cddf56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
