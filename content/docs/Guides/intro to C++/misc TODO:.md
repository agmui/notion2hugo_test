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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSZWXCN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX45aZzhwcXceEw8NaTCSI5fa8z80zMAHuqX7v63R65gIhAI0kVg8ququC8qbWh9NJMQLsUB2vdJ8NrnVpO9pZmcYUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhbsY%2Bt9PfZRlXFJ4q3AOZRS09iUKO%2BKAG%2BJi%2BtPx5c2glK3d%2BUWUEviwAHeOcSIvOIaUbo8o6LlC42936OIMALjZheu2vz7jBICyxUaW2Vca1WPWiaAEbeLWD5uaC4s43YMb1JXNpuSxqSEOPWjD0q0WpmXDYMtSULAI0dZt%2Bl2H19DTLDmnZu4Tp8m6nJGlW0PLFWw0ndTVS3%2B9862U5sW9YUo8Zabr4YvR3P2QXTJV8zK5y2JJYYlII13zlF4kgyYinoOrTZRuDQRRYseiTVYtwja8SVjqdwpsSUdzIzGnekqvvM2E7ONW4%2Bu87svbzB3%2Fuj7YbQd4Pqr6r9l%2Bal%2Fc%2BUydnbzAoiK0%2BioChzVh19NUW5POI5BDIbNAirZD3Pq77bwlp0q32LeLi0WIGBDtInEgc62nHvCegPVOYPeOBoFEGUjhHtml1pVKF%2FTKMvtwLVoWB93eQr%2FYHhAcWlBbn7o5BDbnOryqSPj3pXsruqobUTkRuv2%2FITs7w7nfCE6kxlIDorT4SHzaNZdk1cmeLS%2FPL5OugMEYUlutlNrzcRcMe8P%2BVJ60jZLjXdf2H48R%2FBhkodjDRB3tBCPcG3V9D12ptap%2BvQJVF999XyzStem86SGd7H2bToTXBhbzFRfRlL4WpcsfmczCbk%2FfDBjqkAYUdnIBTEznB0RcGm2lRyvEjaowbWcyLDQ5b5KlbP7bwy%2Bo69rMlo9DTi1Av1jIaaWnUEq4xXKc3VjvlHr1ZSDLH8QOWM8%2F6BypXeVSzCCFYqTa7llbt1WkhOy9xunEfIc8t41CjqiR8MlNV4gqwy7Q2iir0zTl0cTILRh4V6KlCh9vIZ2Px1rwjUNz5BcGJryWMJh6z7eJ%2Furki1N4VMVtQkfRQ&X-Amz-Signature=0e7439e22016236e0213ae3d2097e45dbb1c1583d74fd1e08b86dca7d37c3118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSZWXCN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX45aZzhwcXceEw8NaTCSI5fa8z80zMAHuqX7v63R65gIhAI0kVg8ququC8qbWh9NJMQLsUB2vdJ8NrnVpO9pZmcYUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhbsY%2Bt9PfZRlXFJ4q3AOZRS09iUKO%2BKAG%2BJi%2BtPx5c2glK3d%2BUWUEviwAHeOcSIvOIaUbo8o6LlC42936OIMALjZheu2vz7jBICyxUaW2Vca1WPWiaAEbeLWD5uaC4s43YMb1JXNpuSxqSEOPWjD0q0WpmXDYMtSULAI0dZt%2Bl2H19DTLDmnZu4Tp8m6nJGlW0PLFWw0ndTVS3%2B9862U5sW9YUo8Zabr4YvR3P2QXTJV8zK5y2JJYYlII13zlF4kgyYinoOrTZRuDQRRYseiTVYtwja8SVjqdwpsSUdzIzGnekqvvM2E7ONW4%2Bu87svbzB3%2Fuj7YbQd4Pqr6r9l%2Bal%2Fc%2BUydnbzAoiK0%2BioChzVh19NUW5POI5BDIbNAirZD3Pq77bwlp0q32LeLi0WIGBDtInEgc62nHvCegPVOYPeOBoFEGUjhHtml1pVKF%2FTKMvtwLVoWB93eQr%2FYHhAcWlBbn7o5BDbnOryqSPj3pXsruqobUTkRuv2%2FITs7w7nfCE6kxlIDorT4SHzaNZdk1cmeLS%2FPL5OugMEYUlutlNrzcRcMe8P%2BVJ60jZLjXdf2H48R%2FBhkodjDRB3tBCPcG3V9D12ptap%2BvQJVF999XyzStem86SGd7H2bToTXBhbzFRfRlL4WpcsfmczCbk%2FfDBjqkAYUdnIBTEznB0RcGm2lRyvEjaowbWcyLDQ5b5KlbP7bwy%2Bo69rMlo9DTi1Av1jIaaWnUEq4xXKc3VjvlHr1ZSDLH8QOWM8%2F6BypXeVSzCCFYqTa7llbt1WkhOy9xunEfIc8t41CjqiR8MlNV4gqwy7Q2iir0zTl0cTILRh4V6KlCh9vIZ2Px1rwjUNz5BcGJryWMJh6z7eJ%2Furki1N4VMVtQkfRQ&X-Amz-Signature=c1519b605ec9d74764a3ccf880947085df2ae3af56428cc2d277a169c385c434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
