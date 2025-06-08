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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPDEJLA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1qtdNEKYDr2RdCYUe2Wm6TquFIqVmeNg24EtPLFqnzAiEA0dVSaD9c6Zf02Vjg%2Fw8ketIRQx6aHsGMBENa7tHgnIQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT8Fe9MAVAvNk5sOircA220GmWBoW1B29EF%2FAjnx5qri6jalRRUOmFZ98FSK7wfM4n2th7qxzZatbUoQAlu0fw%2FLFGqkLOQCfsRiO2RQIcMfV%2B3DaMCH%2Fkt6Mu1T4duEt6a2KENHK6G4piHYO6yyZA1QeV786L7XkNmcxrqGnP3qQhBMi0ydIhRgNJBo095SilHfzQ49L4KlvDwZRl9v9olXtQjykDhUBgILr844%2F5uUd7TqXeNAsrLTHt%2BPtggPEM4I5nsZB77g6zk%2F%2BbEE5Ho1hsT4gos3kYkGhj7y0i1%2BQG66%2BGwCUGVANPpzcMsRtcG9SGJFWfJefQTlSMFhE5DRlHTu23kMGE6%2BiuCeVBM8S68PQSTGg8PDlMvgfvYFpWIoiZO%2BCEgoAEVHyzAVl4%2FfyjXTmm3py6MpcRcYsljkzD113RZoB2Qx9NgA49sBVx7Q2XiF0%2BHZhnXk5%2F0pK%2Febed1CPwKKzErHUIGaWbJ0h4qw9ITO6v6XQtlWGWcudQgZeRzpY4v%2FKzCkro9mQtHx1cWp%2BXKL73bD2wkjlKpsfO2iIqmSddMTZn7AC0%2BbGiRJ8hylLZl2hWCmmL7L%2FKUVJPznMB17XNI0afPiWaTvU1scgPbFqjhW4iynRopgfEb48spH2xwpcwMMIPQl8IGOqUBFG8JncVidUfj9PK2LnfMYGs0sU56Eea7klB8oRZErhp8V%2FKxp2%2Fzy8reCvFzwQi5dV0nbeZkHkkekNeFxrlR7ZySDYNFVj7wQj3rpeMTLiEwtz8HbR2jze5iXHwrYR8nGugwaN8GRb6Q4yzOBoT84OX0owUzkpDHw4TndV51Ei6hHltVCwMAqwEtRxcAzrx%2Fhm46L1x9ypXTaHpX4F7h%2B%2BlMKJas&X-Amz-Signature=04bdca5dd154e8e981156d597d3b0911ebb6cf56a1b1e0a308d271aabde133b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPDEJLA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1qtdNEKYDr2RdCYUe2Wm6TquFIqVmeNg24EtPLFqnzAiEA0dVSaD9c6Zf02Vjg%2Fw8ketIRQx6aHsGMBENa7tHgnIQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT8Fe9MAVAvNk5sOircA220GmWBoW1B29EF%2FAjnx5qri6jalRRUOmFZ98FSK7wfM4n2th7qxzZatbUoQAlu0fw%2FLFGqkLOQCfsRiO2RQIcMfV%2B3DaMCH%2Fkt6Mu1T4duEt6a2KENHK6G4piHYO6yyZA1QeV786L7XkNmcxrqGnP3qQhBMi0ydIhRgNJBo095SilHfzQ49L4KlvDwZRl9v9olXtQjykDhUBgILr844%2F5uUd7TqXeNAsrLTHt%2BPtggPEM4I5nsZB77g6zk%2F%2BbEE5Ho1hsT4gos3kYkGhj7y0i1%2BQG66%2BGwCUGVANPpzcMsRtcG9SGJFWfJefQTlSMFhE5DRlHTu23kMGE6%2BiuCeVBM8S68PQSTGg8PDlMvgfvYFpWIoiZO%2BCEgoAEVHyzAVl4%2FfyjXTmm3py6MpcRcYsljkzD113RZoB2Qx9NgA49sBVx7Q2XiF0%2BHZhnXk5%2F0pK%2Febed1CPwKKzErHUIGaWbJ0h4qw9ITO6v6XQtlWGWcudQgZeRzpY4v%2FKzCkro9mQtHx1cWp%2BXKL73bD2wkjlKpsfO2iIqmSddMTZn7AC0%2BbGiRJ8hylLZl2hWCmmL7L%2FKUVJPznMB17XNI0afPiWaTvU1scgPbFqjhW4iynRopgfEb48spH2xwpcwMMIPQl8IGOqUBFG8JncVidUfj9PK2LnfMYGs0sU56Eea7klB8oRZErhp8V%2FKxp2%2Fzy8reCvFzwQi5dV0nbeZkHkkekNeFxrlR7ZySDYNFVj7wQj3rpeMTLiEwtz8HbR2jze5iXHwrYR8nGugwaN8GRb6Q4yzOBoT84OX0owUzkpDHw4TndV51Ei6hHltVCwMAqwEtRxcAzrx%2Fhm46L1x9ypXTaHpX4F7h%2B%2BlMKJas&X-Amz-Signature=c6ddb7f18a49a5d0d83fba94c77fb38ae556732da310d4c6f0368ac0fb684458&X-Amz-SignedHeaders=host&x-id=GetObject)

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
