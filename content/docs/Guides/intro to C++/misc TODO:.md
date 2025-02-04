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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJ4RPJH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFhP1akprNAlaelBGXnnghvhtiP%2ByfwiwJIbXIMJoN3lAiEA7lusHrzi5CNm1aXdm1r3z2h9bpRgVedyRZaC97%2Blvckq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMlAJd52Tv7JlMXzSircA5%2Fuo%2B2a%2FIgncPphZ8afjcCdB7COiUYlyAyjyh5YGr74k2O%2BwUw4yKj48kb6nH9ROmwfVzKKgzsL0JkppmtoBYZMZ4WjyJ5OsNoHD3K4%2B6ECqaQpvCU3uBCEam%2BroA8I39HocZOqSapmQQPue9ifal4jZ7DrwrzfY21IKQPO0KTgz8sUxGr0TgltguDX1UNkCrAYxsUAZ2xRgVuckpbeSOBxjIGSYYNnyhHwMSfzcv1cKyVuixDUfBVThetx6i5ffzp5zSGnd8hRD%2FgFhg9AL0DrSZut3%2BrD33eugDmWUzS3sBmaj08yMdOcq1Eq53KxrrMzIAUNF7RRaQRJbXhA1xVBcSSDiDFuVJZ5rDPlMulV2GJ8BnvgP7JP06m4EPldxt1sxzd%2F5q%2FpplYtOYnajw97FDwwcjO7r1K38Y%2Bod8%2BiyhHhjbM%2FGfst8TMBIh9%2BQsDY7xpD0%2B%2BpTrHXl2sK4h2%2FwjLKSVP01I9Fw1MWZwzXoThvJNAl1CScKbHdevWN4HLNSJn%2B9Z%2FQZAj7RtbgXAD3vbWqV8Okt%2BWS1GRLI6P%2B6DDkw2vYUOmV3KPGWsABJ8Sgapl5VwJpP6JYnImdbz6qCT9VOV29UsQJvTkemspsNdfK0%2FVCTnCd9ndfMLXLh70GOqUBocpQn2lCo96CdoRa%2Fdce6%2F20ic16LNVts9ehklBKJyC9lCpf3zxveEu5bI2nAmkc7Vi1jvsyDu1c9A5G78doI7MF5gUb8b%2BU6nnCpZFHOtDGI77TzGyPKKrnd2md2lQqH040ZfXiCcSOq20RD73OUKhNuKMWlVxknaxK7XmMlDRVS3KDVGp%2FJjlwUEMrNpDg0pVs8Ws823I4YkpHk7jrJC36kH5p&X-Amz-Signature=dc5f8bde4bd96fdc04c743d9b857080c8dfc7a184372700ad8929e2d57137f04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJ4RPJH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFhP1akprNAlaelBGXnnghvhtiP%2ByfwiwJIbXIMJoN3lAiEA7lusHrzi5CNm1aXdm1r3z2h9bpRgVedyRZaC97%2Blvckq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMlAJd52Tv7JlMXzSircA5%2Fuo%2B2a%2FIgncPphZ8afjcCdB7COiUYlyAyjyh5YGr74k2O%2BwUw4yKj48kb6nH9ROmwfVzKKgzsL0JkppmtoBYZMZ4WjyJ5OsNoHD3K4%2B6ECqaQpvCU3uBCEam%2BroA8I39HocZOqSapmQQPue9ifal4jZ7DrwrzfY21IKQPO0KTgz8sUxGr0TgltguDX1UNkCrAYxsUAZ2xRgVuckpbeSOBxjIGSYYNnyhHwMSfzcv1cKyVuixDUfBVThetx6i5ffzp5zSGnd8hRD%2FgFhg9AL0DrSZut3%2BrD33eugDmWUzS3sBmaj08yMdOcq1Eq53KxrrMzIAUNF7RRaQRJbXhA1xVBcSSDiDFuVJZ5rDPlMulV2GJ8BnvgP7JP06m4EPldxt1sxzd%2F5q%2FpplYtOYnajw97FDwwcjO7r1K38Y%2Bod8%2BiyhHhjbM%2FGfst8TMBIh9%2BQsDY7xpD0%2B%2BpTrHXl2sK4h2%2FwjLKSVP01I9Fw1MWZwzXoThvJNAl1CScKbHdevWN4HLNSJn%2B9Z%2FQZAj7RtbgXAD3vbWqV8Okt%2BWS1GRLI6P%2B6DDkw2vYUOmV3KPGWsABJ8Sgapl5VwJpP6JYnImdbz6qCT9VOV29UsQJvTkemspsNdfK0%2FVCTnCd9ndfMLXLh70GOqUBocpQn2lCo96CdoRa%2Fdce6%2F20ic16LNVts9ehklBKJyC9lCpf3zxveEu5bI2nAmkc7Vi1jvsyDu1c9A5G78doI7MF5gUb8b%2BU6nnCpZFHOtDGI77TzGyPKKrnd2md2lQqH040ZfXiCcSOq20RD73OUKhNuKMWlVxknaxK7XmMlDRVS3KDVGp%2FJjlwUEMrNpDg0pVs8Ws823I4YkpHk7jrJC36kH5p&X-Amz-Signature=ee2be1f841cea47c76ce13b0fc2f3eff2fc09c866aa864b6d7752b848b46dd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
