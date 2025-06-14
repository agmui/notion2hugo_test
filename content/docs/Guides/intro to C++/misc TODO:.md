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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JDVWH5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAQOPi6FVJ8ht0gRljqoI13t7ZcKCj3pUXk%2BomSAQJYdAiBF6yf68Yy1gOxG%2BUdHtNC9fwVsIXq1%2Fhv3Yta%2Fi6zNRSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM8mJYOzhXvLNXK73HKtwDTWGghfJHonP0Oa9PcKN6hQ06Oq4gIdu58wTiuQHnqg8wBgNvU1EMrXDeM%2FAJMnqDVAtLt%2BnTYTBd5WDIePRKocP0%2B8SjJzJ3jDb1OmyL7MxdQ%2FHquDEBU8s8qzKbsbT%2B0bPej3vi3FfF23dW9newZttaGhy7RuFB%2BYBFyEpgtj8M9yDPeSyfw%2B4%2FkQYOAEs6RkhVjxZtRwzNU0K3GfzRVtL9b7Bl7BsdsQL8mcvmGC%2BzMvTd4jG2X48C%2Bqd9gjkqKYZhpZ8ggaY5YH00%2F8fwzq4QPfmtaJrTZrv9Ob4yZUWIwO%2BWHZ6ND3k09BGMM1I88RaArUQON2tDrS1455eJtfTw%2B5RCROiH5WoxddMvKqXDu6evM75gNVBjF7I0EJeJ2r%2FvQ2qfuiAXEB760DXGAmwDpo%2FWpXpJdfDLvyB9OzlBL4wb6unns5ZoHmsAOa4kTmJ1RJMOh7dBTvNusyl9HOPIJwE2vmZGuZd1Uwb0jBeiTO5%2B1sms28XWy0UebZyCbiReLnViP1IH%2BQfBOCWw%2FmOcxio4IPAL9yrhjd%2BGd%2BCNifVG7aaHL2ZFpFnr7eP4Bq0eqpsFItbPv9shde7qbDl%2BnefoSZO4by%2BumDBxFtF%2BjfmRO7rb9BbUR3owpqS3wgY6pgGz8kAuRW67mfevt4hGpSbSW3XhlOb5kpY5iKP9FD93j7XrRrpt5jgOaCRrJYoCkklejqmof4%2BQ3nanFkjLQBQrQQIxT9l%2Fd9rBPLqXWN6Pdy0qb3YqABxiN%2BIbkMPpDQ2lRUPBFVQx7WwotA0IpN9%2FbrfwTYuQ48sALLQEIy5L2z8KRg1ChcOJ8i5OLAK3Llos5PKLuGctMCUpakZyvpiWPNCOmQFu&X-Amz-Signature=3ca564d25daa1ea060b81921f42784c78c68676e957a4bf034ab3c6a60bed93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JDVWH5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAQOPi6FVJ8ht0gRljqoI13t7ZcKCj3pUXk%2BomSAQJYdAiBF6yf68Yy1gOxG%2BUdHtNC9fwVsIXq1%2Fhv3Yta%2Fi6zNRSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM8mJYOzhXvLNXK73HKtwDTWGghfJHonP0Oa9PcKN6hQ06Oq4gIdu58wTiuQHnqg8wBgNvU1EMrXDeM%2FAJMnqDVAtLt%2BnTYTBd5WDIePRKocP0%2B8SjJzJ3jDb1OmyL7MxdQ%2FHquDEBU8s8qzKbsbT%2B0bPej3vi3FfF23dW9newZttaGhy7RuFB%2BYBFyEpgtj8M9yDPeSyfw%2B4%2FkQYOAEs6RkhVjxZtRwzNU0K3GfzRVtL9b7Bl7BsdsQL8mcvmGC%2BzMvTd4jG2X48C%2Bqd9gjkqKYZhpZ8ggaY5YH00%2F8fwzq4QPfmtaJrTZrv9Ob4yZUWIwO%2BWHZ6ND3k09BGMM1I88RaArUQON2tDrS1455eJtfTw%2B5RCROiH5WoxddMvKqXDu6evM75gNVBjF7I0EJeJ2r%2FvQ2qfuiAXEB760DXGAmwDpo%2FWpXpJdfDLvyB9OzlBL4wb6unns5ZoHmsAOa4kTmJ1RJMOh7dBTvNusyl9HOPIJwE2vmZGuZd1Uwb0jBeiTO5%2B1sms28XWy0UebZyCbiReLnViP1IH%2BQfBOCWw%2FmOcxio4IPAL9yrhjd%2BGd%2BCNifVG7aaHL2ZFpFnr7eP4Bq0eqpsFItbPv9shde7qbDl%2BnefoSZO4by%2BumDBxFtF%2BjfmRO7rb9BbUR3owpqS3wgY6pgGz8kAuRW67mfevt4hGpSbSW3XhlOb5kpY5iKP9FD93j7XrRrpt5jgOaCRrJYoCkklejqmof4%2BQ3nanFkjLQBQrQQIxT9l%2Fd9rBPLqXWN6Pdy0qb3YqABxiN%2BIbkMPpDQ2lRUPBFVQx7WwotA0IpN9%2FbrfwTYuQ48sALLQEIy5L2z8KRg1ChcOJ8i5OLAK3Llos5PKLuGctMCUpakZyvpiWPNCOmQFu&X-Amz-Signature=a3a082e62a9ccbcc79a0898dc1c12286c59bae0112137ecb1d33afa10dec0d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
