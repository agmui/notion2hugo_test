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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM56PKLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaNtvZjtEvqiGoW5rWaWF2HqFmp6IVrkhtgbU2Tequ1AiEA%2B0ICgE3ec6gfBpzbJKuyhliVqpPCoEDjlcXWhQ0m%2BRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwhzJhgF7aOXhNxJyrcA89g%2FbnWZXIn2wXUSgmdpNFagNDKd4DqduHVYf2oWJz0cdv6SmLliv0uSJ0hspH5vNL3d%2FSKdc6pkk81UlMUH%2B5kHaf786hQKwkAOqjlpef4TCmIPh5NCZFVMNV17czPGdTmJ8kWcFjYkZE1ggdxl79PWfB5koadpIxv15PBsg27mc3ySXGgxqx6xmMIU1%2F1XWMxrgWy9ajda53jokcRC1Ozia6nzTxN0y7Qz9EJ7s7AdxlfSpdM6HV0qxryFp5v0yNltu6QSFNtt%2FdTz2ajRu5tOizk91xAHh8GcOjN6HjjiZeLxO3kIY6MIe3ULjZVgSjQET0o%2BD2Pbz7P7VbQTWDyzOo6h72lzb2LNp%2FDxjgdCNb0wo%2F21Eu1QdrrnP%2FM8W5ffLT56w5oPNLfqxN3poCL1XJ5NpokXivWy23sJMC%2BAY41oumtJf26BqMnMGfNHaQWetV2A6JqjHHrcum10zg2nNri9mSFaNJ2qBbLVlTPG7LpxPmeWU7VNun3YLRZHca1tGVXCgjnafysTChyOGpIHXj437c0poCMtf1Slb0NoWot6A%2FndE0cYIkHRoS2DvBLRatJScOV%2FdX%2BRTxKIhc7nkKaeu1irJ9VSYwapE67XpQtSZj2pz2SlJZWMOOD68EGOqUBoe9K6artOsbiuJAAxzjTQf%2FvnbemPT%2BsF7BLT%2FrJTDqaJinjjm49X7sXGMQxy4ee74pPgeM649Yj4inwkYc94JibIuFCRHJBknw%2BO1AxqV3GlEsswwWKGx6n%2FLxfk4ab2dYmnGignkjo0keiUA89JpePjFYlfaI86EzyLp3QkXQqmJwYOeYWi%2F%2BYR%2FBUIwODCsK8Yn5su6YzobShirxMLGkiyClA&X-Amz-Signature=64bbeee6390cfce646c78d7fb4fc8a348a719668d617c8c2d94c646a0cf164d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM56PKLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaNtvZjtEvqiGoW5rWaWF2HqFmp6IVrkhtgbU2Tequ1AiEA%2B0ICgE3ec6gfBpzbJKuyhliVqpPCoEDjlcXWhQ0m%2BRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwhzJhgF7aOXhNxJyrcA89g%2FbnWZXIn2wXUSgmdpNFagNDKd4DqduHVYf2oWJz0cdv6SmLliv0uSJ0hspH5vNL3d%2FSKdc6pkk81UlMUH%2B5kHaf786hQKwkAOqjlpef4TCmIPh5NCZFVMNV17czPGdTmJ8kWcFjYkZE1ggdxl79PWfB5koadpIxv15PBsg27mc3ySXGgxqx6xmMIU1%2F1XWMxrgWy9ajda53jokcRC1Ozia6nzTxN0y7Qz9EJ7s7AdxlfSpdM6HV0qxryFp5v0yNltu6QSFNtt%2FdTz2ajRu5tOizk91xAHh8GcOjN6HjjiZeLxO3kIY6MIe3ULjZVgSjQET0o%2BD2Pbz7P7VbQTWDyzOo6h72lzb2LNp%2FDxjgdCNb0wo%2F21Eu1QdrrnP%2FM8W5ffLT56w5oPNLfqxN3poCL1XJ5NpokXivWy23sJMC%2BAY41oumtJf26BqMnMGfNHaQWetV2A6JqjHHrcum10zg2nNri9mSFaNJ2qBbLVlTPG7LpxPmeWU7VNun3YLRZHca1tGVXCgjnafysTChyOGpIHXj437c0poCMtf1Slb0NoWot6A%2FndE0cYIkHRoS2DvBLRatJScOV%2FdX%2BRTxKIhc7nkKaeu1irJ9VSYwapE67XpQtSZj2pz2SlJZWMOOD68EGOqUBoe9K6artOsbiuJAAxzjTQf%2FvnbemPT%2BsF7BLT%2FrJTDqaJinjjm49X7sXGMQxy4ee74pPgeM649Yj4inwkYc94JibIuFCRHJBknw%2BO1AxqV3GlEsswwWKGx6n%2FLxfk4ab2dYmnGignkjo0keiUA89JpePjFYlfaI86EzyLp3QkXQqmJwYOeYWi%2F%2BYR%2FBUIwODCsK8Yn5su6YzobShirxMLGkiyClA&X-Amz-Signature=2207f1df7ca292ee9995af82122b4714120915d6e348a45b2979442976264f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
