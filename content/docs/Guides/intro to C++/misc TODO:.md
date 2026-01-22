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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7TLRQC%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDU7ksy%2BqAz4%2Btd5k9nuiEACtFjn2D3F2pY1OKX4MMmZwIhAPgWw8hYqNhu4XUMOg3ZgmGzsXC4%2FR%2BvKRf8EMnu5oy5KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkIGFtftzLvF%2F744wq3AOGYaJwoFCe0076nSM%2FFzI1g4PK6NXjjOR8%2BzBIFYStjkF83T3KyApci7U3zu0gGB3U1U3NFV1KZwvKIdjNF0wJH7k8MTsuETXLzYUS6hslmNKab8qve8CMew1Y6LuCAWb9SAav9X5k%2FuuKxN3Ikg1rRJ%2BodqqL1xnPO3EJkaqz8iUvdmWUCS2lP09jEr52V3BFMMmSxp2U75BC0UTDHun7gGcs7lKrP6FjNtMRmF8cxVSKg38Q3S1HUyhtdD97ZRPoqGh3AkHSsOslnF%2FRf6sZwev4nzK1z7KXzz4dBFE%2FjFZf%2FDT0UKFbaJSzCdoUmhDeDz%2BAhUT2euyAWDuOwGvFNihdKz%2BtQQxS%2BMoQ87yO5%2BsMq8xINn%2Bydlj%2BcCA4MueUpVMnkiXoYrUlAf1u1vPBZCFdEhzJPIPq8m0BGztnwJA3yoQVv0ll5loGFFk4KOhEh09Hueeq1Bv4KU0%2Bp9iyO0dpDsxPG%2Bn2MhSzKmEYtJycncDZ8PStTmENhiuiIUYUnJhAwqVWMo9Ksqy2q9JkfeEzMmkV4zBLvh8KaB4brvrcabbqyutub5DLIj%2FLj2bgcFgSTqDPneUsuHyayNBXzJLrEOZjTjymWk3bGpVIyB6F3eF8SJx9b7rMLjCH18XLBjqkAQ%2BREuerPOMrkGSG2iZB5TbPsJ8kl0RDaFuPTDNflJW%2BoupDKacRRuamGChOlKupEbwi%2BOG1Pm8Uqrx3d0lWmQ1nDbCYiRep1339iiVkicjeJoLWw3DgYyBGrEzymxv5xwaxkpBd03QOANKjpbAeZfZZCNpgL0uUzwBMVonniy2hY7ud%2FKijR3LhJOmzV3sdZdYiBTTGMcVdlDSG9nD%2FTSRZbadg&X-Amz-Signature=3306bec8b92070bcf3cc9733c862c48800a5828f8bc02d4505d79629092847cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7TLRQC%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDU7ksy%2BqAz4%2Btd5k9nuiEACtFjn2D3F2pY1OKX4MMmZwIhAPgWw8hYqNhu4XUMOg3ZgmGzsXC4%2FR%2BvKRf8EMnu5oy5KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkIGFtftzLvF%2F744wq3AOGYaJwoFCe0076nSM%2FFzI1g4PK6NXjjOR8%2BzBIFYStjkF83T3KyApci7U3zu0gGB3U1U3NFV1KZwvKIdjNF0wJH7k8MTsuETXLzYUS6hslmNKab8qve8CMew1Y6LuCAWb9SAav9X5k%2FuuKxN3Ikg1rRJ%2BodqqL1xnPO3EJkaqz8iUvdmWUCS2lP09jEr52V3BFMMmSxp2U75BC0UTDHun7gGcs7lKrP6FjNtMRmF8cxVSKg38Q3S1HUyhtdD97ZRPoqGh3AkHSsOslnF%2FRf6sZwev4nzK1z7KXzz4dBFE%2FjFZf%2FDT0UKFbaJSzCdoUmhDeDz%2BAhUT2euyAWDuOwGvFNihdKz%2BtQQxS%2BMoQ87yO5%2BsMq8xINn%2Bydlj%2BcCA4MueUpVMnkiXoYrUlAf1u1vPBZCFdEhzJPIPq8m0BGztnwJA3yoQVv0ll5loGFFk4KOhEh09Hueeq1Bv4KU0%2Bp9iyO0dpDsxPG%2Bn2MhSzKmEYtJycncDZ8PStTmENhiuiIUYUnJhAwqVWMo9Ksqy2q9JkfeEzMmkV4zBLvh8KaB4brvrcabbqyutub5DLIj%2FLj2bgcFgSTqDPneUsuHyayNBXzJLrEOZjTjymWk3bGpVIyB6F3eF8SJx9b7rMLjCH18XLBjqkAQ%2BREuerPOMrkGSG2iZB5TbPsJ8kl0RDaFuPTDNflJW%2BoupDKacRRuamGChOlKupEbwi%2BOG1Pm8Uqrx3d0lWmQ1nDbCYiRep1339iiVkicjeJoLWw3DgYyBGrEzymxv5xwaxkpBd03QOANKjpbAeZfZZCNpgL0uUzwBMVonniy2hY7ud%2FKijR3LhJOmzV3sdZdYiBTTGMcVdlDSG9nD%2FTSRZbadg&X-Amz-Signature=9a1d8122d0f2d9b0966ae86148aa151749baad4a188b834739cfbe95c9f027f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
