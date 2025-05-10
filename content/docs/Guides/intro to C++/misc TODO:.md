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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=f7d7cd099bf057dd5d7a367c0c6f284abcfc6234f39b1ece407f2118f1846f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=f2ef34db46697708ac07781338ecb4f0adc06418182f632a837ccdc54acf1797&X-Amz-SignedHeaders=host&x-id=GetObject)

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
