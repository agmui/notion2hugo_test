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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHWA74Q%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FkyHNP2MbRfwN%2Bm5TLHem4bVbcru0e8lTXdnHpQPxwIhAMW1cYn%2FPKOyF1UM1DAiWhDGljUkhhvHJg7MhheYfHqHKv8DCBIQABoMNjM3NDIzMTgzODA1IgwZWWWxckUkFrXwx2Qq3AOSJ%2B1Wan7TQf3DHQmcTk9Yde7UUUJMeXGQ2WgzxeWulyBTgvkPfFh9IzEJhh8g2eo%2Ft2BakleMe%2F3gL7wKEGacurqkY0nuufqcOQxeh2%2BCSr0eLqDtv9NxpR8oGjbQt8hZurE9f8qLFymftNdYgg1mKwxd6lSLcvOlItoE%2Ffb2nngzuEno1nOKcpZlGD3oB9SshI9VzZjLrN64GyaWCzhnCVj9hDt33Cg3fuhkdliZeik71Jh25JnwpBMZwzY7jRe7TbyHlVQ6wZ1fT4lrRNRyqJNT%2FcLBsBh7XaZEXELGE7z9nsMtOKRgxVS%2Fm4ZNT88i8d7go49xOmwNWTeH30ut%2FGhm5kGIn1RMlwe4FXzQ3i5zyp40ur2MWBpGK7E5un2tiDGeRYQHDnIM1FuvFQIZaGWaGZsMWOAH3JMnurkaRVqYboyrpB1cBueQXltE6MXD8zaUEihy5BI5if6jHW0Vl%2BmiLs%2FUg4BnHz1Vwf%2Be1YWxn46y3rRoatAfd%2BeVpKD%2BVprRevvW8D31hBG%2Buf2mZI0BIVWmjG0QCYZxHcKems8ZeY2p0c0njId3GbC4cZiBbEh6b7iDU6pa7rXmMgSZdRVYCyzdMHQH%2F4Yo8%2FQzxQXhZ669HU853ha5%2FDCQ7Ym%2FBjqkAccZPNsZDp8TMChycIvK5sMMhl8Bi%2BVoIec6AwPeMNFHDaWVir0LSE1ZWIT3DixDNvAw5IT3DU%2BNWDlnMa083RFjw02FhRm4ZuQs6f7of1ytP4ra0Nv9Vof4%2FrC1Q70DYtpebNUX2PYUTaHP5gc7pP8z5jatfCq4RfyNM9KdttWtHaS2Blyh5wfeE1Kd57A%2BTUmhPusg%2BGZVYCLaCgXHKQYWLbDJ&X-Amz-Signature=205a0e0d85ff20e42851a6126974bfc9b75e027e008a31fc9505c176c0d0ce18&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHWA74Q%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FkyHNP2MbRfwN%2Bm5TLHem4bVbcru0e8lTXdnHpQPxwIhAMW1cYn%2FPKOyF1UM1DAiWhDGljUkhhvHJg7MhheYfHqHKv8DCBIQABoMNjM3NDIzMTgzODA1IgwZWWWxckUkFrXwx2Qq3AOSJ%2B1Wan7TQf3DHQmcTk9Yde7UUUJMeXGQ2WgzxeWulyBTgvkPfFh9IzEJhh8g2eo%2Ft2BakleMe%2F3gL7wKEGacurqkY0nuufqcOQxeh2%2BCSr0eLqDtv9NxpR8oGjbQt8hZurE9f8qLFymftNdYgg1mKwxd6lSLcvOlItoE%2Ffb2nngzuEno1nOKcpZlGD3oB9SshI9VzZjLrN64GyaWCzhnCVj9hDt33Cg3fuhkdliZeik71Jh25JnwpBMZwzY7jRe7TbyHlVQ6wZ1fT4lrRNRyqJNT%2FcLBsBh7XaZEXELGE7z9nsMtOKRgxVS%2Fm4ZNT88i8d7go49xOmwNWTeH30ut%2FGhm5kGIn1RMlwe4FXzQ3i5zyp40ur2MWBpGK7E5un2tiDGeRYQHDnIM1FuvFQIZaGWaGZsMWOAH3JMnurkaRVqYboyrpB1cBueQXltE6MXD8zaUEihy5BI5if6jHW0Vl%2BmiLs%2FUg4BnHz1Vwf%2Be1YWxn46y3rRoatAfd%2BeVpKD%2BVprRevvW8D31hBG%2Buf2mZI0BIVWmjG0QCYZxHcKems8ZeY2p0c0njId3GbC4cZiBbEh6b7iDU6pa7rXmMgSZdRVYCyzdMHQH%2F4Yo8%2FQzxQXhZ669HU853ha5%2FDCQ7Ym%2FBjqkAccZPNsZDp8TMChycIvK5sMMhl8Bi%2BVoIec6AwPeMNFHDaWVir0LSE1ZWIT3DixDNvAw5IT3DU%2BNWDlnMa083RFjw02FhRm4ZuQs6f7of1ytP4ra0Nv9Vof4%2FrC1Q70DYtpebNUX2PYUTaHP5gc7pP8z5jatfCq4RfyNM9KdttWtHaS2Blyh5wfeE1Kd57A%2BTUmhPusg%2BGZVYCLaCgXHKQYWLbDJ&X-Amz-Signature=bd9044fbaf6a07f7f0a4c2f9898bd8d7c97bcb2c85640fd618b498620efc9351&X-Amz-SignedHeaders=host&x-id=GetObject)

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
