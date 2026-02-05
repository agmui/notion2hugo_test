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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWWORDL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDSflsVRyB%2FIVhquDyihC9WQLsELSPplEMVNDMpp9adGAiEAsUToR27jFrgMZc3gkZRKul8pXnh8Uc74CYoIjt3qEz0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCdakaqyxhEc64bSfSrcA81hGBMIzx2HsGpMZnCv2HJu4oj%2FhcSPrlg%2BCQNWhIx5RDEQyExCriyK91NTN1vZDSj58Nx4GqqIpbHIDQ3ZExb51S0ooqmN9uoDea4l8VGvXzAf8V7dKl%2Fsw8RZPBQ8tabsVa1dUgZK4o8%2FCPSG2zge%2BUwlQxPXRxWA%2BwqeIcqcU%2FDT%2FKp%2F1ypX2pqnYk55j3bxFvydAuwsDKY58B9D4r0xV4q1Xjvq2l9082M6SaVWM6Ugm6bREyRBBnBta5Cvq%2BaxUeZtJJ23gqx7vDv2HX4DI0AD7m9XRRWhVtHWhhv8eUe23reKMRGgi7LvkMcKJAY0fYVTeg%2FzCIJ9wVQs0YyewtICANmIFW4FA3syYzNSUdJe3pLQPOE2b9Q5bj%2FtEeD3p8s0MweKX%2Fcr5HCxrSOkZ7ncRUjOMfZScAly9uETScfKRYo3S5S8d0InlXYBglTdshJNdT3u0Dn7jI1i6rFHmHiAZUbm%2FPMB1UG1HQA95Gw5oUFtG7rKY3J2q5slCm9Wv9Y9yIrauL2u6%2FSKrbWnW0%2F6CHlGDiI558Talcj15XJtzCbZ5zJPGq8LMRIjS8p4OPaQ2MhvyFT0E6cUHCfn%2FZYj5DNyd5xxVw9Llic1QNfAygxLomlue0IwMLvOj8wGOqUBydURCRbQWSCtOUahjsC7GH5hA%2FT1rnOi0PGXw03H3iZaUOXGbGYAmI420scYKbD1TI8%2F0mzvTh0Gc1r2W19%2FAi%2Bv1AiFdaOf9OnYyXV9Ss9UXrKSfR9M5P9Lua6EQUo8Zxz8YvL7k5fNtxf44OjLO42qgcfH0cQsK3y1L0ExFFNGelrLVqHsnWzy8ASy4Xdo%2BHf0D0KipxA38hUVKW9l1GNsZwdL&X-Amz-Signature=cf59b257f29a8310bc81610284abf8e020c08306db9c6b28724bdfacc6c32244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWWORDL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDSflsVRyB%2FIVhquDyihC9WQLsELSPplEMVNDMpp9adGAiEAsUToR27jFrgMZc3gkZRKul8pXnh8Uc74CYoIjt3qEz0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCdakaqyxhEc64bSfSrcA81hGBMIzx2HsGpMZnCv2HJu4oj%2FhcSPrlg%2BCQNWhIx5RDEQyExCriyK91NTN1vZDSj58Nx4GqqIpbHIDQ3ZExb51S0ooqmN9uoDea4l8VGvXzAf8V7dKl%2Fsw8RZPBQ8tabsVa1dUgZK4o8%2FCPSG2zge%2BUwlQxPXRxWA%2BwqeIcqcU%2FDT%2FKp%2F1ypX2pqnYk55j3bxFvydAuwsDKY58B9D4r0xV4q1Xjvq2l9082M6SaVWM6Ugm6bREyRBBnBta5Cvq%2BaxUeZtJJ23gqx7vDv2HX4DI0AD7m9XRRWhVtHWhhv8eUe23reKMRGgi7LvkMcKJAY0fYVTeg%2FzCIJ9wVQs0YyewtICANmIFW4FA3syYzNSUdJe3pLQPOE2b9Q5bj%2FtEeD3p8s0MweKX%2Fcr5HCxrSOkZ7ncRUjOMfZScAly9uETScfKRYo3S5S8d0InlXYBglTdshJNdT3u0Dn7jI1i6rFHmHiAZUbm%2FPMB1UG1HQA95Gw5oUFtG7rKY3J2q5slCm9Wv9Y9yIrauL2u6%2FSKrbWnW0%2F6CHlGDiI558Talcj15XJtzCbZ5zJPGq8LMRIjS8p4OPaQ2MhvyFT0E6cUHCfn%2FZYj5DNyd5xxVw9Llic1QNfAygxLomlue0IwMLvOj8wGOqUBydURCRbQWSCtOUahjsC7GH5hA%2FT1rnOi0PGXw03H3iZaUOXGbGYAmI420scYKbD1TI8%2F0mzvTh0Gc1r2W19%2FAi%2Bv1AiFdaOf9OnYyXV9Ss9UXrKSfR9M5P9Lua6EQUo8Zxz8YvL7k5fNtxf44OjLO42qgcfH0cQsK3y1L0ExFFNGelrLVqHsnWzy8ASy4Xdo%2BHf0D0KipxA38hUVKW9l1GNsZwdL&X-Amz-Signature=c8f35139e827b26b0d141d0da54bd531a9f424f9c8e01d125b9847eaf3c345e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
