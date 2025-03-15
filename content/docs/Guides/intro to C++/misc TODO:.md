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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RASZJ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0lAeCRqfVNg2S33XYwe2l7ddHCwfCn9Q1CYKJ52Rl7AiBhwaT1exSCxVnAaGLhXDojQ2%2BQfT5s3ZOIopkPrX9duSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM1Lj2vjCEN6OdaIuLKtwDIlzc2arV0wrosTDJFGi5ISEMPuA%2B9zXo0ATCYXMYWHUfAgvwu9KB9jwqppAbor%2FV1ujC8jKJ%2FPbFff0WwL4pLJ0QvesIHZ4wse%2B04sCiAVWlSUB8e3TqpFa%2FNrk9RQMY%2BRS3RtswDlwXsV2kP6Tp%2FdVojfieHWSg3nqi%2FPg1Ganwk4%2FCTiTV3Dd7AzR%2BiNOCyae91o8tXOnQtbtzXwX8ftak0TKhXXioSDxoMT%2BUctNCjM%2FXKkdINvi1RLj6LiM%2FuWcasaiGTcDAqZRDrVkJR%2B9NUVk%2FoRjGqfOXn05SzVQfqyalP3DF%2FLQsS4rfs26inCyj%2F4eUTUCGuLl2pJQLKfX6F8iX76mo4oHNFtPpq2GCs03dpsr649PUUA03vwChXRxDxZENO%2B0C7pk6nT6J%2FyDizfdm7VmjKKOGJvpox5BPASeisNgY55x57ki4MNiBG6CNtLFq6GcDAktR8gpxXZY8hw3NSeSSx3YNNGEVJxR76eOfjwEoQzW8P%2FUQQVGHDCF4DeEKRSAPsncZIy4fzcEq%2Buh0xCOtw5eBg3YTftKyADH8ULrGHb%2BpOJDJRsvzpnat%2FagAy%2BVJovHRdSjrqMnSFpffhN%2FVcqOuJMhf4hdtTAwvaZGEJnL%2BeywwsMPXvgY6pgFAc9b2USV8xCdopgEfC3i7%2BiYMS%2F7K5rNYL8cjQG%2FGBND99jFx19WVf8uRH8dV1Ks57v04fNm6p6vLnrUpOhWRUO5xr8OTf1G5%2B74lEUIzn8a5i4XwE0niRDFzVYyyzqzUWM%2BHVOLiYmQaJjXlTgyFld2RA3ziJ%2FHcDts6rQl7MhgCfoGiJ5OPd3DuuJ6s4AVGsEtrhOWh1iY2q2A0WQ5MCOUAGWRT&X-Amz-Signature=8af41b29a1ee48f6b5f817759daae0988b83eb659dd058222b5586a77dc8606d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RASZJ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0lAeCRqfVNg2S33XYwe2l7ddHCwfCn9Q1CYKJ52Rl7AiBhwaT1exSCxVnAaGLhXDojQ2%2BQfT5s3ZOIopkPrX9duSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM1Lj2vjCEN6OdaIuLKtwDIlzc2arV0wrosTDJFGi5ISEMPuA%2B9zXo0ATCYXMYWHUfAgvwu9KB9jwqppAbor%2FV1ujC8jKJ%2FPbFff0WwL4pLJ0QvesIHZ4wse%2B04sCiAVWlSUB8e3TqpFa%2FNrk9RQMY%2BRS3RtswDlwXsV2kP6Tp%2FdVojfieHWSg3nqi%2FPg1Ganwk4%2FCTiTV3Dd7AzR%2BiNOCyae91o8tXOnQtbtzXwX8ftak0TKhXXioSDxoMT%2BUctNCjM%2FXKkdINvi1RLj6LiM%2FuWcasaiGTcDAqZRDrVkJR%2B9NUVk%2FoRjGqfOXn05SzVQfqyalP3DF%2FLQsS4rfs26inCyj%2F4eUTUCGuLl2pJQLKfX6F8iX76mo4oHNFtPpq2GCs03dpsr649PUUA03vwChXRxDxZENO%2B0C7pk6nT6J%2FyDizfdm7VmjKKOGJvpox5BPASeisNgY55x57ki4MNiBG6CNtLFq6GcDAktR8gpxXZY8hw3NSeSSx3YNNGEVJxR76eOfjwEoQzW8P%2FUQQVGHDCF4DeEKRSAPsncZIy4fzcEq%2Buh0xCOtw5eBg3YTftKyADH8ULrGHb%2BpOJDJRsvzpnat%2FagAy%2BVJovHRdSjrqMnSFpffhN%2FVcqOuJMhf4hdtTAwvaZGEJnL%2BeywwsMPXvgY6pgFAc9b2USV8xCdopgEfC3i7%2BiYMS%2F7K5rNYL8cjQG%2FGBND99jFx19WVf8uRH8dV1Ks57v04fNm6p6vLnrUpOhWRUO5xr8OTf1G5%2B74lEUIzn8a5i4XwE0niRDFzVYyyzqzUWM%2BHVOLiYmQaJjXlTgyFld2RA3ziJ%2FHcDts6rQl7MhgCfoGiJ5OPd3DuuJ6s4AVGsEtrhOWh1iY2q2A0WQ5MCOUAGWRT&X-Amz-Signature=605a6e3f1078bc485e7057a654cbe7dfc71d17c81e199b3d0ce598695211cc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
