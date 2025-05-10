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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKRJY5L%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdROxtAU88rkPkyNps%2FWrgUh06CUoko%2FTQIzIRJpsQAIhAKnDAC1G7uBUt3SQ%2BFJOmlxhxrhLDghv9Cs3M8cEtcelKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8vMi%2B1XkNG4HD%2B6sq3AOe%2Fy06mAPNI1sSdJhkETG9a%2B8aMHRsekNMPIYMEEJglvSQEe98nB%2FONG6ETpJ13A58CSLHdbGTDh1AjGYgJqg1LnqR0MroB%2B4RXTQeLlFl%2BcOOiYAiXGIvMlgf4Qlrkk2Wgkl%2FnEn8PcxqjV1POqVzoDaEmW7Vr7DAdNJZHDBQ%2Bg57dviO1rrz%2FyCYhZgV5xOPGtKKnA3HoOU%2F6%2BwQ4BGn2pSskmBLPpK3%2BKPImRWqGHlmJ5It416PWmPICSy%2FgqckyQfSXNIRIpS0k3Y97%2BEbZi9U1WyOl5xRSa8oT7U8p4xTq%2FuZqFbCnBHMSU%2BUX4RVkfBcQr7DvbVzvf8oHJTvRc4oUJsXPQ0eFPPwZKidp0CoUTPF%2BAEkPJQmgHjqMSDISqMTBRy8GBUCD0jPobh3KSBrXjwpRPpTX8aK2bt7CDeGhjcQTwiyVicmlk5oo4TxJjAWQMJcNZJHKtT%2F23NyuMLm4fLGdE5%2BEkohJxJu2uX19nJd4hLB2XjYggxO3ix%2Bo2u0pMaiWEusTKN%2FNdPsit3gLSweQZRwCYO5kBLp8qXM8dJv69vPMduML82UaLgtgAYzJsftVmZANKJdIn%2BPd%2F5RtG0wLmz8MNRr77geK2OYdJS9SjRJkaVm7TDbuvvABjqkAao2d1i6MCWdXkIiSnqByWj5M3Fzb%2FI6PkWN1%2FNFQlYDdtw5ROVQOkjbRAZuSCKTYSkTdUFJeKl0NojpQulmY7Otk2g8VeoHSIRtfN0FR6q5h2nEiDHjGsrf3xnBi6CwsBqTlrQHwX8NPINfcolNSiV0cS9Fv7q5%2BPc5LVC%2F2houanvau%2FnjSByQ68dl%2FKFdnwJ0snwbwdkNGQ1TdhkYILeIGq4u&X-Amz-Signature=a9030a13e4f6c6f9c007ca320b10037ecc8f8e7fce48cf100c337f7552bf1868&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKRJY5L%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdROxtAU88rkPkyNps%2FWrgUh06CUoko%2FTQIzIRJpsQAIhAKnDAC1G7uBUt3SQ%2BFJOmlxhxrhLDghv9Cs3M8cEtcelKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8vMi%2B1XkNG4HD%2B6sq3AOe%2Fy06mAPNI1sSdJhkETG9a%2B8aMHRsekNMPIYMEEJglvSQEe98nB%2FONG6ETpJ13A58CSLHdbGTDh1AjGYgJqg1LnqR0MroB%2B4RXTQeLlFl%2BcOOiYAiXGIvMlgf4Qlrkk2Wgkl%2FnEn8PcxqjV1POqVzoDaEmW7Vr7DAdNJZHDBQ%2Bg57dviO1rrz%2FyCYhZgV5xOPGtKKnA3HoOU%2F6%2BwQ4BGn2pSskmBLPpK3%2BKPImRWqGHlmJ5It416PWmPICSy%2FgqckyQfSXNIRIpS0k3Y97%2BEbZi9U1WyOl5xRSa8oT7U8p4xTq%2FuZqFbCnBHMSU%2BUX4RVkfBcQr7DvbVzvf8oHJTvRc4oUJsXPQ0eFPPwZKidp0CoUTPF%2BAEkPJQmgHjqMSDISqMTBRy8GBUCD0jPobh3KSBrXjwpRPpTX8aK2bt7CDeGhjcQTwiyVicmlk5oo4TxJjAWQMJcNZJHKtT%2F23NyuMLm4fLGdE5%2BEkohJxJu2uX19nJd4hLB2XjYggxO3ix%2Bo2u0pMaiWEusTKN%2FNdPsit3gLSweQZRwCYO5kBLp8qXM8dJv69vPMduML82UaLgtgAYzJsftVmZANKJdIn%2BPd%2F5RtG0wLmz8MNRr77geK2OYdJS9SjRJkaVm7TDbuvvABjqkAao2d1i6MCWdXkIiSnqByWj5M3Fzb%2FI6PkWN1%2FNFQlYDdtw5ROVQOkjbRAZuSCKTYSkTdUFJeKl0NojpQulmY7Otk2g8VeoHSIRtfN0FR6q5h2nEiDHjGsrf3xnBi6CwsBqTlrQHwX8NPINfcolNSiV0cS9Fv7q5%2BPc5LVC%2F2houanvau%2FnjSByQ68dl%2FKFdnwJ0snwbwdkNGQ1TdhkYILeIGq4u&X-Amz-Signature=01c3dd8acb2d6f5b2de61bae7a548b2489254f02f2253e74626db25880754f19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
