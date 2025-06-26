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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDESGAOP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEsM0p24OqNOgjFIabg60mPeIUGogbfheD%2Bn9Lqj9h2jAiA9e1iKdZmNZl%2FdhT2S6a0pvS4Nvx0HmfD8xQfsiRwtySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhsJrAgfjNI2lAI6tKtwD6hLdCU%2FDi%2BJjq5dQNAUw28zva367qah%2BmSNsNV1gZATM6L72KGHjO84YH4BgUdk7konTwvfoVl0%2FgjEyCM3%2FUgK9%2Fdt3JrfEzzyzIZzJZg3wsAyU2LeQOqAl%2FG0dQQNR3txFjhKHlyp56njZDl9VZ%2Bxp2gWPzh5krBDKLsXnnLVJOzVHuli5%2BG1W%2FQwG9zs1wmtmBb6xTrJlYIQuzeegbOdLG6gcl4dM9aNys86DauYmqBcC5fxyIFfbewuqxZZmI1APbLeJcgMgsA4rOPxlToxeYaXtbqa8Vc16kANQn36RkG40NjQSvkHDoQDDfejQnuq6q%2Fb%2FSTFUAV8DeLPaWTsHXhZtdGVLr8kTxPvYfTv0UKnucdmc2wiYEgHyUFDTXWVKNl36XcUh9Ipkg5LHBuYiiEpOdl%2FlpQmzO1lr1jR1wuH4v2SRcEptFt2D1SRNezGPK5OBfescYGGsWxaFM4U49TWR7%2BwrS6ubx3yys7a4ae4%2Bx%2F9DV6QtkswSnDidw0altmych9mv7p9%2F9sdVv32tl3cFY8ef2y5CWOlExethTkt1MKhxW5PUO%2FPnDWQIAr%2FBWEiOF8tDnXG4tFqOew1Y9SiLJf20LNbSZVud3GEGBm5m7kqg2%2FuLFRAwtt7ywgY6pgFa1LxlLpYN4GD8IKfUA837VPgdSrRsh%2Bbx86udoJHE0ceaCRL0YGkdW%2FRXMov47ohu0i7jLUrITe0u1TxmCPmLDvs9cE1Z0bxjAY%2B%2FMALyjBRXWLhao69xK3zldvKSzMF3fAFnn1bzsaRVE7BT7TC2Pb97Enz9Dx37VC6%2BCkxgMRLDhglFRppFn3LScVCkProgTormfPtqH2YbM75XHY9UHKBhoUHo&X-Amz-Signature=fbd677f8218d02657c4b9593df0e220ba80bcbdbc3df2d90d94288fbd843aed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDESGAOP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEsM0p24OqNOgjFIabg60mPeIUGogbfheD%2Bn9Lqj9h2jAiA9e1iKdZmNZl%2FdhT2S6a0pvS4Nvx0HmfD8xQfsiRwtySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhsJrAgfjNI2lAI6tKtwD6hLdCU%2FDi%2BJjq5dQNAUw28zva367qah%2BmSNsNV1gZATM6L72KGHjO84YH4BgUdk7konTwvfoVl0%2FgjEyCM3%2FUgK9%2Fdt3JrfEzzyzIZzJZg3wsAyU2LeQOqAl%2FG0dQQNR3txFjhKHlyp56njZDl9VZ%2Bxp2gWPzh5krBDKLsXnnLVJOzVHuli5%2BG1W%2FQwG9zs1wmtmBb6xTrJlYIQuzeegbOdLG6gcl4dM9aNys86DauYmqBcC5fxyIFfbewuqxZZmI1APbLeJcgMgsA4rOPxlToxeYaXtbqa8Vc16kANQn36RkG40NjQSvkHDoQDDfejQnuq6q%2Fb%2FSTFUAV8DeLPaWTsHXhZtdGVLr8kTxPvYfTv0UKnucdmc2wiYEgHyUFDTXWVKNl36XcUh9Ipkg5LHBuYiiEpOdl%2FlpQmzO1lr1jR1wuH4v2SRcEptFt2D1SRNezGPK5OBfescYGGsWxaFM4U49TWR7%2BwrS6ubx3yys7a4ae4%2Bx%2F9DV6QtkswSnDidw0altmych9mv7p9%2F9sdVv32tl3cFY8ef2y5CWOlExethTkt1MKhxW5PUO%2FPnDWQIAr%2FBWEiOF8tDnXG4tFqOew1Y9SiLJf20LNbSZVud3GEGBm5m7kqg2%2FuLFRAwtt7ywgY6pgFa1LxlLpYN4GD8IKfUA837VPgdSrRsh%2Bbx86udoJHE0ceaCRL0YGkdW%2FRXMov47ohu0i7jLUrITe0u1TxmCPmLDvs9cE1Z0bxjAY%2B%2FMALyjBRXWLhao69xK3zldvKSzMF3fAFnn1bzsaRVE7BT7TC2Pb97Enz9Dx37VC6%2BCkxgMRLDhglFRppFn3LScVCkProgTormfPtqH2YbM75XHY9UHKBhoUHo&X-Amz-Signature=b4b15a0d509bf4604688075fd20c34635f338a59a9256c4f884438c58bbe0aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
