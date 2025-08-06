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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6IEH5B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDf3BZqtaKxvmpFdkHKplCkyfw4kgOZsv4MGiYSy%2BuE2AiAmP7lMMJKADw96EyMz%2F9KRYCvFnShaMcqe32qDRS0a9yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM0cwmtWsdZxSMC69hKtwDiLI7bNJaCL31TR6CaRMPbE%2FV2TcNUTdsN5Xij%2BQoHDFzkcM93VuXsL3HbW2xkWrk%2F6DCpwvozDc1FWb%2FSuhfuVb2ewCwmX9YB25Ji1MARFUINGBnLPFIULWrXDVaFAH0n%2B1tw%2BkVnI2zxTLpi%2FaFhwDr7CqKbWY72RTVA1J3gFJIcCwimrtfS7ce2FxCA8CyjcNOHPWoIVj45uLPbkEThUL%2FqQR2qPi7EST6IfmIYLnXmPl%2BvA8dixvr4yg8hNKCycK0I%2BgYE7k%2FDLwoO9XPjDkHYWmrRIqOGsYDIw5Qex2I4jJVaV6FiyUPUb4mBzDWbUgG2WAJR3T61am489cwQ48RRrtRa9LZVxSS73RWviXAR8I3W71hPH%2FnRgAhXC9UGFkQSvC6FqfYpmimnk1nyJXF1mKpCOdIZvxWefS2OzjQiUxuZyujqasa34J9R8YDGPwbhzfeRjmi2sOTtbXNTbScxCWPg3HoIP98oICmH4JbsLgc3D8GxF0cHsVRUHtcFzHj6feo%2B1FefrlSfbN1ofXIvCnWlzxKJs0ahvlaDhy922rhALFzTTOMSQP3TNRg3xQ8co69dW1rZLvENe%2BydE1nBWu6tJxG7uNpae%2FJSnvKae2CeMoJfEyt6j8wyPDLxAY6pgGvrGRUQ5bp48pBvExs7I%2Fja6bmNMiwLaeAdrICHBx%2Bb8UZL3nEVbaPukEVHf6YcXwhsrKQYQ2%2BD6zBYQ%2FAPmbF1f9%2FUNPNtdBuwBtvl0HNS0tU1xeB2xLMluW3xF3SAoWM4fjwRckKxYgTe5OaMNDtSNYPiqL06di%2BWct%2B94DDEw5s8QhyXKLGqge653H9oS4zE6V6UDGIQvaGEJdxTkgeQXwohXl1&X-Amz-Signature=3baffdc8ee3d8f48fac51e92d5a9717f22a5959696b6157f96f5739fe5462dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6IEH5B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDf3BZqtaKxvmpFdkHKplCkyfw4kgOZsv4MGiYSy%2BuE2AiAmP7lMMJKADw96EyMz%2F9KRYCvFnShaMcqe32qDRS0a9yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM0cwmtWsdZxSMC69hKtwDiLI7bNJaCL31TR6CaRMPbE%2FV2TcNUTdsN5Xij%2BQoHDFzkcM93VuXsL3HbW2xkWrk%2F6DCpwvozDc1FWb%2FSuhfuVb2ewCwmX9YB25Ji1MARFUINGBnLPFIULWrXDVaFAH0n%2B1tw%2BkVnI2zxTLpi%2FaFhwDr7CqKbWY72RTVA1J3gFJIcCwimrtfS7ce2FxCA8CyjcNOHPWoIVj45uLPbkEThUL%2FqQR2qPi7EST6IfmIYLnXmPl%2BvA8dixvr4yg8hNKCycK0I%2BgYE7k%2FDLwoO9XPjDkHYWmrRIqOGsYDIw5Qex2I4jJVaV6FiyUPUb4mBzDWbUgG2WAJR3T61am489cwQ48RRrtRa9LZVxSS73RWviXAR8I3W71hPH%2FnRgAhXC9UGFkQSvC6FqfYpmimnk1nyJXF1mKpCOdIZvxWefS2OzjQiUxuZyujqasa34J9R8YDGPwbhzfeRjmi2sOTtbXNTbScxCWPg3HoIP98oICmH4JbsLgc3D8GxF0cHsVRUHtcFzHj6feo%2B1FefrlSfbN1ofXIvCnWlzxKJs0ahvlaDhy922rhALFzTTOMSQP3TNRg3xQ8co69dW1rZLvENe%2BydE1nBWu6tJxG7uNpae%2FJSnvKae2CeMoJfEyt6j8wyPDLxAY6pgGvrGRUQ5bp48pBvExs7I%2Fja6bmNMiwLaeAdrICHBx%2Bb8UZL3nEVbaPukEVHf6YcXwhsrKQYQ2%2BD6zBYQ%2FAPmbF1f9%2FUNPNtdBuwBtvl0HNS0tU1xeB2xLMluW3xF3SAoWM4fjwRckKxYgTe5OaMNDtSNYPiqL06di%2BWct%2B94DDEw5s8QhyXKLGqge653H9oS4zE6V6UDGIQvaGEJdxTkgeQXwohXl1&X-Amz-Signature=4c430b5dcc24c74b62642c25d3ecb73d6857a71683a3a937c019dfc68b547ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
