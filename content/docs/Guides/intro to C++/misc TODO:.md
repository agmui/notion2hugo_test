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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJD4UAJK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNcxfSDTCWpO7Nz5JHlckOTj4VXfzhAVL9liTBykOd3AiAbC8mDaLGT7k0%2BgvQ%2F%2Fp0sJZxznotAWuYslsLoHiZoTCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilbR9AxKpQeE3YdtKtwDLEoBu2NLSJO179L8cITVllYFg5qd%2Fj8L3KHFRfwdvsiG6S7m3mwFEyQWuE6AQBYDbelkKluh1QAakZZ6Wa673yoPnxtmcIODgr%2FiUtGTcy7K9sME%2FHo8JuakCsH0tqYQz3p7vFFyoebHfN%2FoExdEVZEERNbU7%2B7Hfk8rdwdW49daf1ZpL7ulhoAtSuY8OnGuebgP8HnAv%2Fh6d3LtHyUNvLSVG56ZIUV9DGJbl8r96CaEihLicibewJ24Pn3aAuwgFoUhxeSq4%2B5JV1qLEMqLQdl1axoSCRR2ix2%2BC5w1vH7dxq9AU23K4Ss3zZHpXpEVgg9WrLjBeC0k0V0QWX4GBKv7inTRlJOXDnF57lAXiDskO6hpDEyZCWix2ZAk5Ut4j1cR6rUoc7bqOAqzihQ%2F2Erx%2FUCoPhykiddfs7LIIVcMBu5RZrNJMKADeUeCjaT2%2FDnKmDFATgRkbOsneoOWBZ7xW8hjScrsbZiBg%2FfL2bC1fU%2F%2Brr8B21Bl367R8yleJYQJG%2BoAzbJ4y7g4eRl0MeX5mRq65oLXU57cz1DOc%2Bd9uu8D5NIp0L3ZxBjKYx%2BzRqx%2FhOU31mHKPccU09y5Jm%2FcX0BqQgU5nY8qS7qwJbiOw9LQgEps2ivJlBowwqKYwgY6pgHDkmKy5mnAsk9zEUgZyWonoOoWJ9KJoT5LrczuU8ceE6h89h43xzVPZ7Nxlh2iu4Rugv2udVd4XGJ2E9evpnuUN8ZiNamLjnFkrYvUr4CM7nQOi1P420RleokdmvL87ZR%2BdD1qibyuJktNGYK2PxPm7Yz2j4BZrOTzFvcayw6DoFuYeoeKTGckZPYc606aUvCpVP%2FTKxwuTYLZ9u%2FGzbD35ICfAOeV&X-Amz-Signature=de72342ace56ba58a443c5da3a1fa895dcf73532566272cca970581213a905ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJD4UAJK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNcxfSDTCWpO7Nz5JHlckOTj4VXfzhAVL9liTBykOd3AiAbC8mDaLGT7k0%2BgvQ%2F%2Fp0sJZxznotAWuYslsLoHiZoTCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilbR9AxKpQeE3YdtKtwDLEoBu2NLSJO179L8cITVllYFg5qd%2Fj8L3KHFRfwdvsiG6S7m3mwFEyQWuE6AQBYDbelkKluh1QAakZZ6Wa673yoPnxtmcIODgr%2FiUtGTcy7K9sME%2FHo8JuakCsH0tqYQz3p7vFFyoebHfN%2FoExdEVZEERNbU7%2B7Hfk8rdwdW49daf1ZpL7ulhoAtSuY8OnGuebgP8HnAv%2Fh6d3LtHyUNvLSVG56ZIUV9DGJbl8r96CaEihLicibewJ24Pn3aAuwgFoUhxeSq4%2B5JV1qLEMqLQdl1axoSCRR2ix2%2BC5w1vH7dxq9AU23K4Ss3zZHpXpEVgg9WrLjBeC0k0V0QWX4GBKv7inTRlJOXDnF57lAXiDskO6hpDEyZCWix2ZAk5Ut4j1cR6rUoc7bqOAqzihQ%2F2Erx%2FUCoPhykiddfs7LIIVcMBu5RZrNJMKADeUeCjaT2%2FDnKmDFATgRkbOsneoOWBZ7xW8hjScrsbZiBg%2FfL2bC1fU%2F%2Brr8B21Bl367R8yleJYQJG%2BoAzbJ4y7g4eRl0MeX5mRq65oLXU57cz1DOc%2Bd9uu8D5NIp0L3ZxBjKYx%2BzRqx%2FhOU31mHKPccU09y5Jm%2FcX0BqQgU5nY8qS7qwJbiOw9LQgEps2ivJlBowwqKYwgY6pgHDkmKy5mnAsk9zEUgZyWonoOoWJ9KJoT5LrczuU8ceE6h89h43xzVPZ7Nxlh2iu4Rugv2udVd4XGJ2E9evpnuUN8ZiNamLjnFkrYvUr4CM7nQOi1P420RleokdmvL87ZR%2BdD1qibyuJktNGYK2PxPm7Yz2j4BZrOTzFvcayw6DoFuYeoeKTGckZPYc606aUvCpVP%2FTKxwuTYLZ9u%2FGzbD35ICfAOeV&X-Amz-Signature=887ab8d9525eed11611019fe0264810fc0d021c9a3814e7411be2708df58228e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
