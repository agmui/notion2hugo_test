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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTVEW6B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDh1RoiNPk3itZao3G6wNDZd0A5afFq%2FxtQLq79bfIxwIhAP9xEK%2BSD98of%2BnDFu35evVTL1E61qQK7aSatxHNmF2DKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnalAHAs79x%2FtdoCQq3AM07CpjJWMeVvjabP2%2FhmN7GfDT%2FIdnqnooIfV3nfvMeIOJ%2F92c8Ns3gFBCE3fUAwhTOkd1DsNNRAivUALHZs1owdC5FOao9Y379ZqBptB4WqnQ9dBoOmFePYCOQQG6vuOXUTHeZY82wmQGI9vBN0hn%2FC%2FRKxaipVfFZTgfzD8Ge0TNsbuu8rbAewc9uID1SaAjq9UmVDi4TeXbl9wbwgt48ws3Gzx418Tmr%2BVueK94ZJHFypmZ%2BNQjqXUVVU%2FptEyAFbCVGNwk4hf9Gldh92Tfu583a6ix4GNT%2BCJjyUjFNJrAN7RrcTZnYA0agPOOyaumSIMpe20v9RNUl8iB1xiazW%2FKm6lG0c%2FtXTcMxBjI1ZvyjyRmzYj2sn1ynoIFeCgzsZaKEUBf7t6J0rT1vpkl3i8Tz6WIw2%2BFDXzT%2BfXJUfesMhC%2F%2BHYHNAWfnkG3KSv1yQsXXzoG%2FI%2FlkE1FyZTv8aTIyFKT5YNCQcKnnyvwwgk4rXPQh1DTe1iY4ZOpxAD5vvMQ77Z1A1CUQhDIEDgv0CiklqbWMAJvgIzyA0RXgj87%2FObJdJ67Saz3BMNWCJTFI8MoZh1L%2FnVIF1A5GORpuessSfuvmnC3luzaLGbC52a3BpBp%2FA7dZIjwPTDSpMq%2BBjqkARiNab4cWB0opeto2InLSMwXv74kr8XkJWkD6Xt3LO1JLOLV6S6OCjxRoJAgIOBwywVlQNg8udM6g8Yox4tbtZvBC5j0CYjMoK8%2BXIjiQCCJvazRvxeUreh21IhIMtW6dTl%2FVQ3R4HHsSpztJSSTGbby3OfDsrBSQ%2FbcvOS4XaJB5H8jg70kWowTxJdbZl%2F8Sh1j%2Fu7mH5jMHZdgZ%2B760%2Bvcaal8&X-Amz-Signature=41db720971af6f74393f26541a94644fe94998af214b0c6d8928e511373961d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTVEW6B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDh1RoiNPk3itZao3G6wNDZd0A5afFq%2FxtQLq79bfIxwIhAP9xEK%2BSD98of%2BnDFu35evVTL1E61qQK7aSatxHNmF2DKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnalAHAs79x%2FtdoCQq3AM07CpjJWMeVvjabP2%2FhmN7GfDT%2FIdnqnooIfV3nfvMeIOJ%2F92c8Ns3gFBCE3fUAwhTOkd1DsNNRAivUALHZs1owdC5FOao9Y379ZqBptB4WqnQ9dBoOmFePYCOQQG6vuOXUTHeZY82wmQGI9vBN0hn%2FC%2FRKxaipVfFZTgfzD8Ge0TNsbuu8rbAewc9uID1SaAjq9UmVDi4TeXbl9wbwgt48ws3Gzx418Tmr%2BVueK94ZJHFypmZ%2BNQjqXUVVU%2FptEyAFbCVGNwk4hf9Gldh92Tfu583a6ix4GNT%2BCJjyUjFNJrAN7RrcTZnYA0agPOOyaumSIMpe20v9RNUl8iB1xiazW%2FKm6lG0c%2FtXTcMxBjI1ZvyjyRmzYj2sn1ynoIFeCgzsZaKEUBf7t6J0rT1vpkl3i8Tz6WIw2%2BFDXzT%2BfXJUfesMhC%2F%2BHYHNAWfnkG3KSv1yQsXXzoG%2FI%2FlkE1FyZTv8aTIyFKT5YNCQcKnnyvwwgk4rXPQh1DTe1iY4ZOpxAD5vvMQ77Z1A1CUQhDIEDgv0CiklqbWMAJvgIzyA0RXgj87%2FObJdJ67Saz3BMNWCJTFI8MoZh1L%2FnVIF1A5GORpuessSfuvmnC3luzaLGbC52a3BpBp%2FA7dZIjwPTDSpMq%2BBjqkARiNab4cWB0opeto2InLSMwXv74kr8XkJWkD6Xt3LO1JLOLV6S6OCjxRoJAgIOBwywVlQNg8udM6g8Yox4tbtZvBC5j0CYjMoK8%2BXIjiQCCJvazRvxeUreh21IhIMtW6dTl%2FVQ3R4HHsSpztJSSTGbby3OfDsrBSQ%2FbcvOS4XaJB5H8jg70kWowTxJdbZl%2F8Sh1j%2Fu7mH5jMHZdgZ%2B760%2Bvcaal8&X-Amz-Signature=2e312cabece60f300d3bdae24cb5f4cf18f6a238b0338afc9a2c7805d064001b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
