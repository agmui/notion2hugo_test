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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZGMXSM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCc%2BL0dfgmftqjaqnIM3z0nIQ1Ys3N3jkRASUWwFa323QIgY0l8u%2F2sCVgZGFVil97DdiYVSx6F2wFnbdlReS4jrI8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDuD59k2v5Z2iLeOUCrcAzQaRFB2nuXaHfrGB3ojzWKEOpWp5RhNFuJYccMRwzMCl0gwvAa%2FRD3fLwDotMTjnpg6CoPDQUILmk8a3iSvqqg8kDJryx7AwwlFT67ZEruOuzLthp4Yo5vh6BLP0PqJ3myhqxsqbiU%2BAJKsYv54lBQXDdIPD9gVVrRQh1pz89JtpYJaWq5nnL0uC53WTKFXGIo3Yt87XyenKmx1rf1fC8Y4qXKTG56P%2BN%2Ft29OvKwlePkfVU4scC8aCqFPe5ZSblMAgl%2BGtCtED1HQlrw6YJF1kjl5q1fXLUqyyfNQks2yEgeHcICOTE%2FL8Qk6fPpEm0LAPN651KnsdwlY3HDZqvSP2BWEA7zhY6fKrEvAl3SH4%2F5PIcVo%2BphONkxO0WbKurfl4FhSuvVaLB56OzAm4NS%2BX%2FcGURjLsW7NXSkdPtehMDlazuJohxz1Aiku6ShUgd6mLrXWTmmvcPo2ewIJL99DqlXCo3e1R33eKLlc2EkLOcnqP2eDMx0t%2BXXhJ%2FCIxZWspWccIVIMeRGu7Pdzy8yKyujkTl3QBq5fZfGmMK9Tkc5n86TBZfGpUIMPyyAS73qq4y1mAWhVkQo%2B1StxfBoC9RrJTVwSRuHZcUH3RQ961ckDEyGUg0yv%2FKYpvMPK7m8MGOqUB7rf2Fgj6cx0svzG3FaGPwnWE%2FVl6VfE2g8ncRPaygBIxl1owD2bZSFvlT5EurKS%2FEQY7tXbD%2B34yzesrELmKlCg8kvBCQXyO7%2FI4pfJBpX1N1650rJ172yf7KTyZ%2BjA17PhZEwiEh4Focza9mxFihxeVOOQnaqdiWqnNXPz1YDCJBvf%2F5aTBe19knAIEQ7hwQt4G3Z8yqM%2Bz%2BV%2BAsWmVQTJ0UkJV&X-Amz-Signature=f65901927fc981d0eb3318cf6bb0edec948cb1d882951d614a057679f8c360a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZGMXSM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCc%2BL0dfgmftqjaqnIM3z0nIQ1Ys3N3jkRASUWwFa323QIgY0l8u%2F2sCVgZGFVil97DdiYVSx6F2wFnbdlReS4jrI8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDuD59k2v5Z2iLeOUCrcAzQaRFB2nuXaHfrGB3ojzWKEOpWp5RhNFuJYccMRwzMCl0gwvAa%2FRD3fLwDotMTjnpg6CoPDQUILmk8a3iSvqqg8kDJryx7AwwlFT67ZEruOuzLthp4Yo5vh6BLP0PqJ3myhqxsqbiU%2BAJKsYv54lBQXDdIPD9gVVrRQh1pz89JtpYJaWq5nnL0uC53WTKFXGIo3Yt87XyenKmx1rf1fC8Y4qXKTG56P%2BN%2Ft29OvKwlePkfVU4scC8aCqFPe5ZSblMAgl%2BGtCtED1HQlrw6YJF1kjl5q1fXLUqyyfNQks2yEgeHcICOTE%2FL8Qk6fPpEm0LAPN651KnsdwlY3HDZqvSP2BWEA7zhY6fKrEvAl3SH4%2F5PIcVo%2BphONkxO0WbKurfl4FhSuvVaLB56OzAm4NS%2BX%2FcGURjLsW7NXSkdPtehMDlazuJohxz1Aiku6ShUgd6mLrXWTmmvcPo2ewIJL99DqlXCo3e1R33eKLlc2EkLOcnqP2eDMx0t%2BXXhJ%2FCIxZWspWccIVIMeRGu7Pdzy8yKyujkTl3QBq5fZfGmMK9Tkc5n86TBZfGpUIMPyyAS73qq4y1mAWhVkQo%2B1StxfBoC9RrJTVwSRuHZcUH3RQ961ckDEyGUg0yv%2FKYpvMPK7m8MGOqUB7rf2Fgj6cx0svzG3FaGPwnWE%2FVl6VfE2g8ncRPaygBIxl1owD2bZSFvlT5EurKS%2FEQY7tXbD%2B34yzesrELmKlCg8kvBCQXyO7%2FI4pfJBpX1N1650rJ172yf7KTyZ%2BjA17PhZEwiEh4Focza9mxFihxeVOOQnaqdiWqnNXPz1YDCJBvf%2F5aTBe19knAIEQ7hwQt4G3Z8yqM%2Bz%2BV%2BAsWmVQTJ0UkJV&X-Amz-Signature=4c8caff6aaa8a0b55c1c287d2a2317d8a6c6598ab63d5654319a91e9d33dd279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
