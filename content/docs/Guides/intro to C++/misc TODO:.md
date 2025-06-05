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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ657AF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFasZmOG9t96fb1SkIAXsCpYL9W%2Bak5QPxTZO6D2sx0UAiB02rrSTX8GFKnLn7HngNCilhpKr6q7ub2%2FY33cAiz1ryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMA49CIl334Tq2wySkKtwDZbONUfEZ4i6ghMERmoX9g1QzMy0zPp8a4rh4RccQQh9nWyNssDgozflos%2FdyBqNtd1YczcBev68DQ0DEpKDkzh8hpTJlsLqiExZQypsMAmEp44c8SfsWhOcwEKr8avCiq732zaZnBcRMwdMOYVCLK0cNL7pKXdUmOhorGFwUac2fOl%2FsUs6x2yug27v4N8Q2wSqtmy0iUWvbpvPqWignRDDasgADdF7taRq1D1yCIp8JhaLV0hyVdfMelKege2Icn7nq%2BfhW0JYf%2BwSOKI%2BGDsWgcm7cZ6whJOYHjANHCOXKYItwCGi3n9bCdglOf8F34HNKXxEBeoM0Uu8%2Br8MffS9Pii5osSggDfIE7llt0jwWz95c7YV01R%2FMjNA%2FV2Sts%2BCJ3OqCiqYNDQTXjRcJ090BZ8HEiHPhqAJvqnPTMBe%2BFX8NnxPyXpYnrpE49iH1H4txvwcIa%2FwKiXmIi7Phy64l5xLZs4fonUmLhQDRjwYXDSJwqnpIjUtWpM5AS9Eb0BdRRlb3%2FWDAIrTwyW5Sj9CCBFfwUcYcgWcsixhbgzG0Mex9raRzwCsSHC%2Fr7XQAUe9yXHE9PdnTDC5PjbUmsL7gM77g5II9dsZBx4l%2FSyhp7TJ0wymUgnpY6Vcwg9iHwgY6pgFh5sabOvqopVUUBqwkn0wbXjudgiCzZtV34BvyFqDAWDkQnPYVPDTUf3j%2Bnm%2BWMaIKCcTXSayh%2FcFsU%2FtTaUTMNHgmZaGCQj44oSGH1c2d8FX77bLPCdpz2xj3MZv9e0CarqXqZSTtGw8bcLAoA1Ubli1tJ9uslmtWjqOWITt8Ff4kuArnjX%2FQ7pfsN9FFeiuYe3H56ftW%2BUn2u%2FMwqJf5xMLx3J5a&X-Amz-Signature=2be4c5d0deb0e6a91260ade80b1d5a3bdb8acfa3c8884cfb2f8ee3da0e0d3dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ657AF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFasZmOG9t96fb1SkIAXsCpYL9W%2Bak5QPxTZO6D2sx0UAiB02rrSTX8GFKnLn7HngNCilhpKr6q7ub2%2FY33cAiz1ryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMA49CIl334Tq2wySkKtwDZbONUfEZ4i6ghMERmoX9g1QzMy0zPp8a4rh4RccQQh9nWyNssDgozflos%2FdyBqNtd1YczcBev68DQ0DEpKDkzh8hpTJlsLqiExZQypsMAmEp44c8SfsWhOcwEKr8avCiq732zaZnBcRMwdMOYVCLK0cNL7pKXdUmOhorGFwUac2fOl%2FsUs6x2yug27v4N8Q2wSqtmy0iUWvbpvPqWignRDDasgADdF7taRq1D1yCIp8JhaLV0hyVdfMelKege2Icn7nq%2BfhW0JYf%2BwSOKI%2BGDsWgcm7cZ6whJOYHjANHCOXKYItwCGi3n9bCdglOf8F34HNKXxEBeoM0Uu8%2Br8MffS9Pii5osSggDfIE7llt0jwWz95c7YV01R%2FMjNA%2FV2Sts%2BCJ3OqCiqYNDQTXjRcJ090BZ8HEiHPhqAJvqnPTMBe%2BFX8NnxPyXpYnrpE49iH1H4txvwcIa%2FwKiXmIi7Phy64l5xLZs4fonUmLhQDRjwYXDSJwqnpIjUtWpM5AS9Eb0BdRRlb3%2FWDAIrTwyW5Sj9CCBFfwUcYcgWcsixhbgzG0Mex9raRzwCsSHC%2Fr7XQAUe9yXHE9PdnTDC5PjbUmsL7gM77g5II9dsZBx4l%2FSyhp7TJ0wymUgnpY6Vcwg9iHwgY6pgFh5sabOvqopVUUBqwkn0wbXjudgiCzZtV34BvyFqDAWDkQnPYVPDTUf3j%2Bnm%2BWMaIKCcTXSayh%2FcFsU%2FtTaUTMNHgmZaGCQj44oSGH1c2d8FX77bLPCdpz2xj3MZv9e0CarqXqZSTtGw8bcLAoA1Ubli1tJ9uslmtWjqOWITt8Ff4kuArnjX%2FQ7pfsN9FFeiuYe3H56ftW%2BUn2u%2FMwqJf5xMLx3J5a&X-Amz-Signature=fb645a335641c636140984521464236a7db83d31da9368edd026b16a0ca984df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
