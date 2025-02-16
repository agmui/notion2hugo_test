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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTIRE2XQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAzFnMZUJjo%2FEQegYqCOQ6gCKEtmABs9QKE1NrfgX%2BbJAiEApALCx3%2FkAZC4Dtwuz9R524r0S8M9kNjlZTDMT6F%2BMf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHZGt3CoH7lGR8zqDircA7z9lWjC5SuitmHATsIFg1nUHXLAEXnGI2PZ4JPbTnRHt16pFlkap9F1m%2BL13lXD29y6yBd9HnMiD%2BUf2WGfOfYN7Tk61B9weoZojrevwL%2B6tAYv7ih2L9CXrAq5aM0h0T%2BsAez%2FAW39IyncpOuplp7438netsjbX25L7eva8VhDl5PUFkwJNxfpe%2FUftoAg8RNBXwVVXmQJ74Q1XlQUtfZQxfUcAssZGDux0U6BW79cxJ%2FEsrZB7pFbbvN3x5%2BlWkfVmdIfU3d%2Fe9mHIPf9lQn%2BsADBN5BaPASXsr2glIdSCr9sbTyd%2Bsjdwk7QJmNsLDTePtpORiZaRxa3k22eZ8cLtZH0cks7OzM3GWOyZW6RR7D%2Bf%2FAstnrqWgiassne4bk8JnOlaMhyOSpap%2BvIT6IMViANjsJu%2BOp7L%2BU%2Bn9p3ef5dgI%2B72d4iE2rL8TH2lkBJ1LJwZ80bMWS2GNq4jZGT%2F0Cw9QxSj4%2F82U%2BsWbDC%2BMhGXDNzJJGrtYV9OZZCJgreWyXn9Sx63UR%2BWL4FbJDl97mht0XtV9tVHNJU5niqlBExacXKq8V7hwUAJu4rjKirwKBJKU1yPZCXDRIU0gUfBqHkES%2Bq%2FAEThtoNW%2FrRa7Su8s0SjXNf51XYMN79xb0GOqUBc0uHm4hcTJcL%2FmAVXftfzkOheyA%2FqKqaIhg%2BrhXw6y2zYoAbVIRTE97lRCLjnA07lkzQPUUzuXnRCjr5S0oqY8UwyrZtSEJKilgro9EzEKk7R8hgl31HFXivEV0VHxXODVF9QjX%2F697S4xzkXPrQrMfNcCYuhqcPvLP0i7wj%2Fo2t%2BR25oTngcxqFXWJmGx8DBQcYpHNdtrp59SlbOtq%2BaFKzAjCt&X-Amz-Signature=784b40f1c0492eb088cd67b6d32ffcb6edcb74367547d87bdaed1e15b8dee001&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTIRE2XQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAzFnMZUJjo%2FEQegYqCOQ6gCKEtmABs9QKE1NrfgX%2BbJAiEApALCx3%2FkAZC4Dtwuz9R524r0S8M9kNjlZTDMT6F%2BMf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHZGt3CoH7lGR8zqDircA7z9lWjC5SuitmHATsIFg1nUHXLAEXnGI2PZ4JPbTnRHt16pFlkap9F1m%2BL13lXD29y6yBd9HnMiD%2BUf2WGfOfYN7Tk61B9weoZojrevwL%2B6tAYv7ih2L9CXrAq5aM0h0T%2BsAez%2FAW39IyncpOuplp7438netsjbX25L7eva8VhDl5PUFkwJNxfpe%2FUftoAg8RNBXwVVXmQJ74Q1XlQUtfZQxfUcAssZGDux0U6BW79cxJ%2FEsrZB7pFbbvN3x5%2BlWkfVmdIfU3d%2Fe9mHIPf9lQn%2BsADBN5BaPASXsr2glIdSCr9sbTyd%2Bsjdwk7QJmNsLDTePtpORiZaRxa3k22eZ8cLtZH0cks7OzM3GWOyZW6RR7D%2Bf%2FAstnrqWgiassne4bk8JnOlaMhyOSpap%2BvIT6IMViANjsJu%2BOp7L%2BU%2Bn9p3ef5dgI%2B72d4iE2rL8TH2lkBJ1LJwZ80bMWS2GNq4jZGT%2F0Cw9QxSj4%2F82U%2BsWbDC%2BMhGXDNzJJGrtYV9OZZCJgreWyXn9Sx63UR%2BWL4FbJDl97mht0XtV9tVHNJU5niqlBExacXKq8V7hwUAJu4rjKirwKBJKU1yPZCXDRIU0gUfBqHkES%2Bq%2FAEThtoNW%2FrRa7Su8s0SjXNf51XYMN79xb0GOqUBc0uHm4hcTJcL%2FmAVXftfzkOheyA%2FqKqaIhg%2BrhXw6y2zYoAbVIRTE97lRCLjnA07lkzQPUUzuXnRCjr5S0oqY8UwyrZtSEJKilgro9EzEKk7R8hgl31HFXivEV0VHxXODVF9QjX%2F697S4xzkXPrQrMfNcCYuhqcPvLP0i7wj%2Fo2t%2BR25oTngcxqFXWJmGx8DBQcYpHNdtrp59SlbOtq%2BaFKzAjCt&X-Amz-Signature=27506e124a106da512d3a410d7f30f64ef74684bc58cad1dd38d886d40ebe27f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
