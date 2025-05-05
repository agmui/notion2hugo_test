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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKEE3DY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIC8oyWTae5Y5sXMfzKM1BDjYLw95G2vfdtGmTh6EpW3OAiEA7%2BG438UE%2FwKTaFX4X0wwKZZrGJfATS8%2BkhfSKAmT3gYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCv2674TTY64RK2nCrcAxD5Y3VYSMD16Bw%2FMEiaDwTRMpRaUy%2Fg7ayUebGGQElceLBEeE7Ih4oqjl1d7X75%2BIVM%2FSxTOQ68QnkXaIjFsxTDo2Sc1PYq0%2B3o3ApplfH0MKHppIuL6F0vb2BLJYyABW3bbEFFdSV6upHZiE4TEVrx%2BJoY3811Rwy6uQZ12HtDGa2dg%2FansNDEH0aIIRKkPlmWphTdJt22HUJrHMPpjwXezCT7JOm2Mhgxgq1Lnw7fXEwJGgPPYE5ZB1kY1uwupp7J%2BY9f1LtL%2BZ5ZnPuicTibtZZEK7M37wAeWRhiJJxm47RPZrOGPG9SlyoaVu8kEBAj7Dv1iIZbUl6aBNaPKcQVF2oVOJZgS0bRDCxEpwhVBSPCbpNGWu1VqAe5l5jdHIUuIgyMUd61FwnsThIpDACx6rhC72gqjgrChmBhOWJB26Lcz%2FU1NMI6Eo4r7JIi6RGunAa0AFcvf6Wc1speAoHWAiS4mlANbhbuplMaqWMvWbuwCd5d0YAK27IFJiPYV%2FeLwnhcSkOOWOdvePueBMfeMhvupNjF%2Bal3NVk9MrO6pbib6VcbXAiqEuGjGUuF6I4tSXUL3zuaRvOoPzlFZksJ1W1fGn2HX3nTZv7Lz9ZnAWRkAQuT7hbeVk48MOiC4cAGOqUBMLqiICL3cc9ApxcSZSMZZaTyFivorTBFArC2E89szS6LBM%2BlRUD30VDQ6yr62i%2FovRJcA1X%2FUcqztNG5BY84dAu7WDOMUdpRfXr8E%2F0e6YgYDGpj63a5R7R62icYsjPl4Gp4kAOcZaBrvrhaYoJyqTqS8CgtRFZzpzO3isk7cauGSI4g1jJ7j%2FRvHNXRNe9Bkp4s6h9muOtZo94eFUP31uP65%2FRf&X-Amz-Signature=c41d02b904ff438d8866efcbb8dcedf35679d3640d95b28572a863f27f2e9706&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKEE3DY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIC8oyWTae5Y5sXMfzKM1BDjYLw95G2vfdtGmTh6EpW3OAiEA7%2BG438UE%2FwKTaFX4X0wwKZZrGJfATS8%2BkhfSKAmT3gYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCv2674TTY64RK2nCrcAxD5Y3VYSMD16Bw%2FMEiaDwTRMpRaUy%2Fg7ayUebGGQElceLBEeE7Ih4oqjl1d7X75%2BIVM%2FSxTOQ68QnkXaIjFsxTDo2Sc1PYq0%2B3o3ApplfH0MKHppIuL6F0vb2BLJYyABW3bbEFFdSV6upHZiE4TEVrx%2BJoY3811Rwy6uQZ12HtDGa2dg%2FansNDEH0aIIRKkPlmWphTdJt22HUJrHMPpjwXezCT7JOm2Mhgxgq1Lnw7fXEwJGgPPYE5ZB1kY1uwupp7J%2BY9f1LtL%2BZ5ZnPuicTibtZZEK7M37wAeWRhiJJxm47RPZrOGPG9SlyoaVu8kEBAj7Dv1iIZbUl6aBNaPKcQVF2oVOJZgS0bRDCxEpwhVBSPCbpNGWu1VqAe5l5jdHIUuIgyMUd61FwnsThIpDACx6rhC72gqjgrChmBhOWJB26Lcz%2FU1NMI6Eo4r7JIi6RGunAa0AFcvf6Wc1speAoHWAiS4mlANbhbuplMaqWMvWbuwCd5d0YAK27IFJiPYV%2FeLwnhcSkOOWOdvePueBMfeMhvupNjF%2Bal3NVk9MrO6pbib6VcbXAiqEuGjGUuF6I4tSXUL3zuaRvOoPzlFZksJ1W1fGn2HX3nTZv7Lz9ZnAWRkAQuT7hbeVk48MOiC4cAGOqUBMLqiICL3cc9ApxcSZSMZZaTyFivorTBFArC2E89szS6LBM%2BlRUD30VDQ6yr62i%2FovRJcA1X%2FUcqztNG5BY84dAu7WDOMUdpRfXr8E%2F0e6YgYDGpj63a5R7R62icYsjPl4Gp4kAOcZaBrvrhaYoJyqTqS8CgtRFZzpzO3isk7cauGSI4g1jJ7j%2FRvHNXRNe9Bkp4s6h9muOtZo94eFUP31uP65%2FRf&X-Amz-Signature=7c4c17df043a3359dbd8345b3c3953e6765156965af67e7f6cb2c1dd5d6e5eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
