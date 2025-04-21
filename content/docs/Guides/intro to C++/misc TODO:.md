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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYWWKSN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG5kaxC9w1hRfae0cP1JxTu9LTNZp306xNrIP7bsoGHZAiBgQhfvztI6vutFrGXINtbQHlItHWwmtdwbA%2BpqWczkWiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOYQzBeSiCuAr4zUkKtwDiKBoZUoKQbmRFZCeV7WpPaZyABm57OHT8H6PWyHDqe%2BIVLv8kPf8xELCAgr3QbBdRr6bvUKLP4TBwpuFuU%2FlC%2FPyTrmGiRxb291L0AKaZQDEWW2c%2Fp5LIxKaIS0MyBJXBWtitr9zgdrZ0vViBzzdcqAU5VIlSFmD%2FmEXNfBxmedK0%2FfS34cofFF%2FHKIXXxOKJXB6fgoWrK%2FlJ7Rv8FlvtK3wmvDri008lb8hzLt6ostefZTpguhq9JyC1o5KNOjt0YTBfeIhjEQ2RS27O0pCaAIZn1DIqmDitgj0jC1NFTfnstT9F%2FFXgsEgrF8Q5FzU8vJ7AV8JuMLXyUsZxrgWolVLh2CgDrGKOqdlqfsgI3nBbSZiJn8XTus8GXlxoCGE%2FScCX2fLmNWnappwYUHeX7pdz29rJGA5i3GPoge61CIqzVB6ic0hu6N7qudcSjiuIhCgyHkcFNs1eAJ%2FpifODpnUVUjTZfE2hpgAMiqzYz4jkWEMu6NehBN%2FT3DQzJjfB3Oj0uueEcTGs1K2bNBJLcwuflwdUK4xo4uYpaE5%2BN%2B2T84jnh6LPmkU%2F%2B%2B63baQbWA100v2CDYPVMaql0f00AzfMqVjDVqkIfR10zpZ%2B22GwTarxO1OejDYqa8wztuVwAY6pgFTS5a8I%2BkIybNEse%2FGaBgnXHS6N4MOJKqR1gbShfcuOFbNJeU4ymkP29rQTzkhljE80o%2BhKQXcf%2FxGY%2FBCgsOIMpbebWvEd7RGFxFv02eoDgImUDOheW9U2yJbE75lar3Nzv0yJMhJcjtIQa%2BLNq8JYJfDnX7D3Yoq8WHbl%2Bc7PU3IXRv2c%2FljebAzob43RUx5RioIWuuPrRVZ4Qee3mLWH%2FmQodvn&X-Amz-Signature=bcdffa8154f515a7b6b97c5da800afc3cdc84cc0997a2ac23d0176ab2b312fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYWWKSN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG5kaxC9w1hRfae0cP1JxTu9LTNZp306xNrIP7bsoGHZAiBgQhfvztI6vutFrGXINtbQHlItHWwmtdwbA%2BpqWczkWiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOYQzBeSiCuAr4zUkKtwDiKBoZUoKQbmRFZCeV7WpPaZyABm57OHT8H6PWyHDqe%2BIVLv8kPf8xELCAgr3QbBdRr6bvUKLP4TBwpuFuU%2FlC%2FPyTrmGiRxb291L0AKaZQDEWW2c%2Fp5LIxKaIS0MyBJXBWtitr9zgdrZ0vViBzzdcqAU5VIlSFmD%2FmEXNfBxmedK0%2FfS34cofFF%2FHKIXXxOKJXB6fgoWrK%2FlJ7Rv8FlvtK3wmvDri008lb8hzLt6ostefZTpguhq9JyC1o5KNOjt0YTBfeIhjEQ2RS27O0pCaAIZn1DIqmDitgj0jC1NFTfnstT9F%2FFXgsEgrF8Q5FzU8vJ7AV8JuMLXyUsZxrgWolVLh2CgDrGKOqdlqfsgI3nBbSZiJn8XTus8GXlxoCGE%2FScCX2fLmNWnappwYUHeX7pdz29rJGA5i3GPoge61CIqzVB6ic0hu6N7qudcSjiuIhCgyHkcFNs1eAJ%2FpifODpnUVUjTZfE2hpgAMiqzYz4jkWEMu6NehBN%2FT3DQzJjfB3Oj0uueEcTGs1K2bNBJLcwuflwdUK4xo4uYpaE5%2BN%2B2T84jnh6LPmkU%2F%2B%2B63baQbWA100v2CDYPVMaql0f00AzfMqVjDVqkIfR10zpZ%2B22GwTarxO1OejDYqa8wztuVwAY6pgFTS5a8I%2BkIybNEse%2FGaBgnXHS6N4MOJKqR1gbShfcuOFbNJeU4ymkP29rQTzkhljE80o%2BhKQXcf%2FxGY%2FBCgsOIMpbebWvEd7RGFxFv02eoDgImUDOheW9U2yJbE75lar3Nzv0yJMhJcjtIQa%2BLNq8JYJfDnX7D3Yoq8WHbl%2Bc7PU3IXRv2c%2FljebAzob43RUx5RioIWuuPrRVZ4Qee3mLWH%2FmQodvn&X-Amz-Signature=6bd17656ffc380492336d728b8582e95fa8139f78468a34c191639c63de8be95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
