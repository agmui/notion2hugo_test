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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OFPJHK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Lfo5RON7w779YAoXi2nR3Vll6Gj2XOaU6rqerMQZngIgFrjo0oJP7wOyC5I6uHvtzJ3XskceTOFoR%2F3kBB2miIcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8%2BUJEEqORrm9aTbyrcA2q4kaGoRNc%2BGxgFBbH2kWcoYGIonwH2bTJWTwCdC0%2BNguC9FjaKfytuwi8blxijqydxzkXXSAjGxix2slqzM8JC9adEHtelqJkyWV7R0e6R186EUfxcST6P872JiiwvCr%2B%2FPKRtlEO33ikFMhOrJgUbjqJgEpaz2JU7wsVlWop%2BhD5iPluVrDDHEe10%2BWukLG3hq9fFMhi8pYaiYSmD6%2BgCw6xtUGqYbXJpp2siTTx4csolUAmShLHreQJ5pPAIQ2aBR1BbKIp2zbRp9xErZ34gxbmh%2FhWpe5tbvbEmiaSH1JUdHX1j14FBbOoybQVFgPqF8luxb4nEwXpcN3WrClmv1sko49hNSYJytXz%2FNfhDillK%2FTQKfm%2FrsYCAMgNk7fWn7i%2BOPaBrMcxHjsss2RLncLINYk8M9rRx9YkJ4f%2FlQAQpbJ%2FjnIeITUAb9zlk3ZtgmirmGVE6GfBSqTt%2Frh8tuTv%2BirTTcPKtM2akIVNPWhR2zce2Z2pw5iWoJG%2F0jZkT3gFy46jAR%2Bp8O2NA5Vj48FQBneJ%2F3AGOANTkYZ2DEP58nWKn%2BhfPBS9yQejaYLNngzOMh2YqgfYJnMzKtwettf2xhziQ7J4ZELK9osYjm0rurozlmU3MXFGFMNOH7LwGOqUBEI3PDZoC91oLm1eE120n3O8ndVGB7xZblpTRd5DNArn%2BmLxE4gWMDVpNZThew%2BZgnpWJNJtIBt9VEiujm6niZy%2BpR4DUFkFSK5pnrox5WrZHZE9v939SKkgfxC%2Fz2S2%2BCRHagGikrP%2FliZitbHG7oxcj117o1tfokcU3FB91hYotHvZ1XFmAK4U%2FlPJiVTIl%2F4YQEQlSIlHq37K%2Fqxx%2FxlHOT6o0&X-Amz-Signature=e8823b6f2a3624c878d60245bb1e94eae52ce770e47287b73af5e7d085833b04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OFPJHK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Lfo5RON7w779YAoXi2nR3Vll6Gj2XOaU6rqerMQZngIgFrjo0oJP7wOyC5I6uHvtzJ3XskceTOFoR%2F3kBB2miIcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8%2BUJEEqORrm9aTbyrcA2q4kaGoRNc%2BGxgFBbH2kWcoYGIonwH2bTJWTwCdC0%2BNguC9FjaKfytuwi8blxijqydxzkXXSAjGxix2slqzM8JC9adEHtelqJkyWV7R0e6R186EUfxcST6P872JiiwvCr%2B%2FPKRtlEO33ikFMhOrJgUbjqJgEpaz2JU7wsVlWop%2BhD5iPluVrDDHEe10%2BWukLG3hq9fFMhi8pYaiYSmD6%2BgCw6xtUGqYbXJpp2siTTx4csolUAmShLHreQJ5pPAIQ2aBR1BbKIp2zbRp9xErZ34gxbmh%2FhWpe5tbvbEmiaSH1JUdHX1j14FBbOoybQVFgPqF8luxb4nEwXpcN3WrClmv1sko49hNSYJytXz%2FNfhDillK%2FTQKfm%2FrsYCAMgNk7fWn7i%2BOPaBrMcxHjsss2RLncLINYk8M9rRx9YkJ4f%2FlQAQpbJ%2FjnIeITUAb9zlk3ZtgmirmGVE6GfBSqTt%2Frh8tuTv%2BirTTcPKtM2akIVNPWhR2zce2Z2pw5iWoJG%2F0jZkT3gFy46jAR%2Bp8O2NA5Vj48FQBneJ%2F3AGOANTkYZ2DEP58nWKn%2BhfPBS9yQejaYLNngzOMh2YqgfYJnMzKtwettf2xhziQ7J4ZELK9osYjm0rurozlmU3MXFGFMNOH7LwGOqUBEI3PDZoC91oLm1eE120n3O8ndVGB7xZblpTRd5DNArn%2BmLxE4gWMDVpNZThew%2BZgnpWJNJtIBt9VEiujm6niZy%2BpR4DUFkFSK5pnrox5WrZHZE9v939SKkgfxC%2Fz2S2%2BCRHagGikrP%2FliZitbHG7oxcj117o1tfokcU3FB91hYotHvZ1XFmAK4U%2FlPJiVTIl%2F4YQEQlSIlHq37K%2Fqxx%2FxlHOT6o0&X-Amz-Signature=e31f886965d2baf207e379538557ee20f44a3a55c8cdb98226e287eb28269c20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
