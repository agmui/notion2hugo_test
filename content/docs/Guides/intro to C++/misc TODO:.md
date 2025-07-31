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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y373QQ5K%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRl3UUaLvLkP4plKJNkK2ta%2BaX%2F34A0nv2jNN6HZhteAiA46F6tYVVsrD5TUJiarfdXfODYZKz1dP1GaFGanc0o0SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdNfwTqCNh%2FPIxGRkKtwDnZUkoc1613%2BpnoF490LffCrkawQiAPtrj9oe3Lq%2Fqa%2FUzbr80q0UUue%2FD5Jxu%2BC17mDREK3BvNVwvn61vKE%2BmP48oxWJd2NAXqvJq2cysU8PPztiBYEMnbHfTL7z54g50MYjkSHIXTlMAAPR4HqkA4KrXO2vaa%2FGIja0JiHjAbQUaQYM%2BUbnvlLM3DoqWUX3qxXObopOBx2UWoV0aM8eF%2FcPZ7RL2zKq6FT%2F58wRDq5FKN8EyLudRP1%2FjC1ImWR1jW34mOjQ2Fz1cSxyuC6KhKPvt0dml7jNJB2ZuorBfAizPKEA8WR%2FX2pNJlNVo9Z5ktRhZYT0Tm%2FHb2cXENen5rDq3egdIxOt%2B0uAQE87IoraK2MbJtDLLAhG3JIgVNGoOck7l5l10vb0OG1BNtIJraJamWm%2B0KlzqKaBICDAA58CQUzfzAQ6T9niXNpSWWKyzE3ikaAKYgikIvAyp%2FtWNdIhL7YOs5zSxiLRsOFO64y2MtqSQWvyveySByILDwkyHFnW1OacD9CFXY87NVtj1d55M84SMjMNoLz5sVf4T6f%2BgSe1R7VtY%2Fs165huYh4Wq9tOUULpB7ninBqyjg9yhqMcGz5jv3H0eHKthKieMAPktT7YQYFPtFoM%2FbYwm5qsxAY6pgEdjSqzpRkwLQX91AQ9ypm2%2BFhv6XHEpnVo3PEcutOfwSLYz%2BUS89MQifpKPFVNeGvY%2B2BD%2B%2F2eMyKixMrVVgpNtebvce7nQHyweMPGuOhAbZsfDNZn0ObXaKx29bAri8wTKGyTT62snFDfBMU64g85qmJFMtda03zLBhjDkH9eEip%2F6IUdEXKyZd4PuOozCkyb5aTf%2B5EfI2KjB%2FGYwqsZyKZjai9k&X-Amz-Signature=c722160d9e56953a539c132eeb6dc77e7563bee9de4fd728cbde6f21781896b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y373QQ5K%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRl3UUaLvLkP4plKJNkK2ta%2BaX%2F34A0nv2jNN6HZhteAiA46F6tYVVsrD5TUJiarfdXfODYZKz1dP1GaFGanc0o0SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdNfwTqCNh%2FPIxGRkKtwDnZUkoc1613%2BpnoF490LffCrkawQiAPtrj9oe3Lq%2Fqa%2FUzbr80q0UUue%2FD5Jxu%2BC17mDREK3BvNVwvn61vKE%2BmP48oxWJd2NAXqvJq2cysU8PPztiBYEMnbHfTL7z54g50MYjkSHIXTlMAAPR4HqkA4KrXO2vaa%2FGIja0JiHjAbQUaQYM%2BUbnvlLM3DoqWUX3qxXObopOBx2UWoV0aM8eF%2FcPZ7RL2zKq6FT%2F58wRDq5FKN8EyLudRP1%2FjC1ImWR1jW34mOjQ2Fz1cSxyuC6KhKPvt0dml7jNJB2ZuorBfAizPKEA8WR%2FX2pNJlNVo9Z5ktRhZYT0Tm%2FHb2cXENen5rDq3egdIxOt%2B0uAQE87IoraK2MbJtDLLAhG3JIgVNGoOck7l5l10vb0OG1BNtIJraJamWm%2B0KlzqKaBICDAA58CQUzfzAQ6T9niXNpSWWKyzE3ikaAKYgikIvAyp%2FtWNdIhL7YOs5zSxiLRsOFO64y2MtqSQWvyveySByILDwkyHFnW1OacD9CFXY87NVtj1d55M84SMjMNoLz5sVf4T6f%2BgSe1R7VtY%2Fs165huYh4Wq9tOUULpB7ninBqyjg9yhqMcGz5jv3H0eHKthKieMAPktT7YQYFPtFoM%2FbYwm5qsxAY6pgEdjSqzpRkwLQX91AQ9ypm2%2BFhv6XHEpnVo3PEcutOfwSLYz%2BUS89MQifpKPFVNeGvY%2B2BD%2B%2F2eMyKixMrVVgpNtebvce7nQHyweMPGuOhAbZsfDNZn0ObXaKx29bAri8wTKGyTT62snFDfBMU64g85qmJFMtda03zLBhjDkH9eEip%2F6IUdEXKyZd4PuOozCkyb5aTf%2B5EfI2KjB%2FGYwqsZyKZjai9k&X-Amz-Signature=fe56b0a56a5b1879382841b7e7b13f942710ee16228a2d297985633efa3d4c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
