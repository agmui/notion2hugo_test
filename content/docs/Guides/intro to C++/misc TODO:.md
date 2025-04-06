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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFO74UY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPyIdirtsWKYSNpbuj9qSwEG4vg4B2rXSj65rhAF51wQIhAPBSJO3BZ670vIZIq5aAsvDqAwveSdp3rLIRrCdoCNAKKv8DCEwQABoMNjM3NDIzMTgzODA1IgyyJlbYlrBIBFu9OZEq3ANrnnJodZSi3pAr4mXC1X9AfscoO0J3oIsH2%2By6jbYTaylhE5EuEBbEjePK5rivpa2alAiWaLrVz4%2BEBbmUjBSBdZ5V8KYsbuvc9xlfr6calhGs%2F2hfuFZqlZ3qXz72Y3IkcW9CYeSwsQM6t57JY%2FmNGVDmvyAhmOPGGVnXxQzaTpDCRhwP0RPUk2PFcMgLE2dASNubhxDLu09DdApEPTpQgI9sxxjNJXnm5%2Fh%2BnhkIUfDpEGzT8LCORBm7ARQOVhtcrBho7kRA4iWTaF2a2vaa38AwLF1F43YoH%2B0%2BgtpT5wIs1HDi5zkSR3DCScREfaVsNU8LEgitwKMjtIs5xDNDnOSSAKlJelwuuL%2FVcjJjWrrjiSYG%2Fol2GFe%2BB0k4NhgNzGll45lnDPUQ0FuuYvt7klqMu3iiH51eLZqBb9Lz0PYl%2FshqXna1pfu2wOLUKxYtSWYyd9ZiQXiT7HcoX%2Bre3BDbfrg9JYoDDJ7eJJVkeCMC8bxubjXcjoftUgWiaVWApmzPtBZddPcbCFI%2FC96kuPrCbsjQl1P%2BeOxyxqDRADPXhw0K02R3xvINAxAsTGW7QSN0eAtPz77tkI0BuhcmBoTkP7dD7ClNiRkKfSEjUVLt2X78DMHBflCV%2BzCUnsu%2FBjqkAaYTMs%2FGIFMwY5cgchPo6KKpDYX41D65GAMEijhihpC2KrCT6G0eLzTalqs6t%2FFhDXa%2BL92FoxD8PUc%2FYoY5%2Bqj9He6DdsauxSVYtwnC%2BCJy%2BSREcQm6lq1wU3wnn8C1PP2e%2BNmFhKyedWLhddHJ4JdCvg2NvdnH7FluctbHpf3%2F1EAW77F4f3TciqbSx6Grwt4yinGE77Im2ye6IkGj9mFpELjZ&X-Amz-Signature=64e79cf1532ef764abc95eea995af6dc47619bae21dab8d1cd0b9777fad6358a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFO74UY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPyIdirtsWKYSNpbuj9qSwEG4vg4B2rXSj65rhAF51wQIhAPBSJO3BZ670vIZIq5aAsvDqAwveSdp3rLIRrCdoCNAKKv8DCEwQABoMNjM3NDIzMTgzODA1IgyyJlbYlrBIBFu9OZEq3ANrnnJodZSi3pAr4mXC1X9AfscoO0J3oIsH2%2By6jbYTaylhE5EuEBbEjePK5rivpa2alAiWaLrVz4%2BEBbmUjBSBdZ5V8KYsbuvc9xlfr6calhGs%2F2hfuFZqlZ3qXz72Y3IkcW9CYeSwsQM6t57JY%2FmNGVDmvyAhmOPGGVnXxQzaTpDCRhwP0RPUk2PFcMgLE2dASNubhxDLu09DdApEPTpQgI9sxxjNJXnm5%2Fh%2BnhkIUfDpEGzT8LCORBm7ARQOVhtcrBho7kRA4iWTaF2a2vaa38AwLF1F43YoH%2B0%2BgtpT5wIs1HDi5zkSR3DCScREfaVsNU8LEgitwKMjtIs5xDNDnOSSAKlJelwuuL%2FVcjJjWrrjiSYG%2Fol2GFe%2BB0k4NhgNzGll45lnDPUQ0FuuYvt7klqMu3iiH51eLZqBb9Lz0PYl%2FshqXna1pfu2wOLUKxYtSWYyd9ZiQXiT7HcoX%2Bre3BDbfrg9JYoDDJ7eJJVkeCMC8bxubjXcjoftUgWiaVWApmzPtBZddPcbCFI%2FC96kuPrCbsjQl1P%2BeOxyxqDRADPXhw0K02R3xvINAxAsTGW7QSN0eAtPz77tkI0BuhcmBoTkP7dD7ClNiRkKfSEjUVLt2X78DMHBflCV%2BzCUnsu%2FBjqkAaYTMs%2FGIFMwY5cgchPo6KKpDYX41D65GAMEijhihpC2KrCT6G0eLzTalqs6t%2FFhDXa%2BL92FoxD8PUc%2FYoY5%2Bqj9He6DdsauxSVYtwnC%2BCJy%2BSREcQm6lq1wU3wnn8C1PP2e%2BNmFhKyedWLhddHJ4JdCvg2NvdnH7FluctbHpf3%2F1EAW77F4f3TciqbSx6Grwt4yinGE77Im2ye6IkGj9mFpELjZ&X-Amz-Signature=b625f2bad3863f080e7578258d0433cfcd76b10fe6b58c8486f5b4cffc3644dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
