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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGS3WGD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1xbPOajs60aWe4wTtWzxRbO00nbUtsGWr%2BTRsLSF1AiA5y4dx1onmwa9pDWRLgQcaTTSslsfb3OvACKlIBZCdWSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMarZGswC2QISwM%2FuGKtwDGmMEVLp3qE%2FOFDtpJJrCjz48%2BaRP6%2BX7BdgtOwOQIABLP%2FVluYg6NIl7cAB5X1lbCzrUysSVn%2B%2FUjkqmLrUijcreymgiCxmBs3fmbnKyS0DFKF%2FF6pFwyaAXXU%2FPUN4wWivVns9DzK%2FlAkiU4usNMWv4HlfWqYXNgnS1xgjqgzTQ%2BRPxkEEBDI3tlsLleZ9aeYlnf%2Fn2mIkNDfYJTv0g%2B2q7jzrbq%2BbY2VY97JdBsAfsssAu4eOlR18SxvQqB%2FzYwL%2FyOT8jR54OMLMqI0gr50SDZzQCF%2BVLW4m6yqviqovPFpCEtfGErh1vHrJzuM2%2B%2BMQPNRzFZvT2QIayKjxywj8biz9Y4MxDXzlxjHGLCQ41ERAyQOKH94olGgjVaPQn0mQDtMIeLdzoLcjcK2oSmwwnBGBXOSDIldvSbl%2B8Xi461FjTXlpWX9ERPPoboMJpNfTNxZ7yUdWEUR8XkU%2F3a%2FMBkJcMJDo6S9EGj6ousQRky77inzQgBw3ySJJun6Y2zPNYVP8vpqGI2qCWGNK96Eh2J57o1fNjuVLhNi%2Fzm4Dv563fJ3jKUB7ScBDMDjfcd1y0%2BGBpvryO7sAGEfsmF7e0nC7lirwcGgFJ8H1VSJwjjGCHsIgIHiBVUhcwi%2FWGwAY6pgHmzuF91Arg4r8wErB2N47mRgSxtrY%2FyCEfZh%2BeR2wWsoGPIJfVyjFKPw16WNRERLxesITqtwc9WN14yVRnLgMutN3DCLPtGl9%2FpNiKV%2BHP0xDfE1xurP5AUROLHYMZf3GOBRhXDTN5OzztkW1YFE3FITSLPsbIkorjbqTjF5gqz4IySmMgTtVg88f6d%2BTeEVSKR63gQuPAR7renXV5bik6RZsJ8IL%2F&X-Amz-Signature=217e2a200c71cac53c795b388070f47fdd300f659bb0bfd29888efe4b479c4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGS3WGD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1xbPOajs60aWe4wTtWzxRbO00nbUtsGWr%2BTRsLSF1AiA5y4dx1onmwa9pDWRLgQcaTTSslsfb3OvACKlIBZCdWSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMarZGswC2QISwM%2FuGKtwDGmMEVLp3qE%2FOFDtpJJrCjz48%2BaRP6%2BX7BdgtOwOQIABLP%2FVluYg6NIl7cAB5X1lbCzrUysSVn%2B%2FUjkqmLrUijcreymgiCxmBs3fmbnKyS0DFKF%2FF6pFwyaAXXU%2FPUN4wWivVns9DzK%2FlAkiU4usNMWv4HlfWqYXNgnS1xgjqgzTQ%2BRPxkEEBDI3tlsLleZ9aeYlnf%2Fn2mIkNDfYJTv0g%2B2q7jzrbq%2BbY2VY97JdBsAfsssAu4eOlR18SxvQqB%2FzYwL%2FyOT8jR54OMLMqI0gr50SDZzQCF%2BVLW4m6yqviqovPFpCEtfGErh1vHrJzuM2%2B%2BMQPNRzFZvT2QIayKjxywj8biz9Y4MxDXzlxjHGLCQ41ERAyQOKH94olGgjVaPQn0mQDtMIeLdzoLcjcK2oSmwwnBGBXOSDIldvSbl%2B8Xi461FjTXlpWX9ERPPoboMJpNfTNxZ7yUdWEUR8XkU%2F3a%2FMBkJcMJDo6S9EGj6ousQRky77inzQgBw3ySJJun6Y2zPNYVP8vpqGI2qCWGNK96Eh2J57o1fNjuVLhNi%2Fzm4Dv563fJ3jKUB7ScBDMDjfcd1y0%2BGBpvryO7sAGEfsmF7e0nC7lirwcGgFJ8H1VSJwjjGCHsIgIHiBVUhcwi%2FWGwAY6pgHmzuF91Arg4r8wErB2N47mRgSxtrY%2FyCEfZh%2BeR2wWsoGPIJfVyjFKPw16WNRERLxesITqtwc9WN14yVRnLgMutN3DCLPtGl9%2FpNiKV%2BHP0xDfE1xurP5AUROLHYMZf3GOBRhXDTN5OzztkW1YFE3FITSLPsbIkorjbqTjF5gqz4IySmMgTtVg88f6d%2BTeEVSKR63gQuPAR7renXV5bik6RZsJ8IL%2F&X-Amz-Signature=ec496554cad41ef242a605af3e0ed63e82ccc823b92ddaa6760addefd0ec2a42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
