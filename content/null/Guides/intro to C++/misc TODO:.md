---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSQ2I2D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCfIRuwi%2BNTd03%2FdsXC1fO9TeLPm5tHgM4ljggU%2FeixQwIhAIS4%2FXW1EHcki%2Fvt%2Bvp1DvZNsYBCiYCv7hQ%2F%2FM9mFQL5Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzaE9Aw3dd5IrPDoHoq3APHLacYF15af%2FN6KAxGqAFikFAi%2FsMvXkITJUXufecqKDQklcKKh5oDRLm564iKnneNjjOdPkmlZq5MfyV0YP7Lem72YsTY64VopBr1G3Ibv1y6gCng23rGqUkU0lnlUxxIbehp0EbirQbbzIfdzYYyuGgngAuuN8NsyUOahJt%2FKfSIvusKSihRT6T0N%2BB1d4QjkBqGx6aOGKku4IDmmys9E%2B3hcb%2BRx1IEt4qd9tOslFdz7ENuW5GleaK1%2FgJSpttp5sMzqWV9IipuXQ0RyB1QmEyR2R0dtcVjzHGRkjWB48P3H3edciug64cx98BLkfxqM0mkK0I7nfFOwIY6xSPJZ4c37PpC1pceWIzG%2BKF4dNdCvbj1iOMbbpH7MUjvdqqj9YNX3riiGdmyMghUVsEJtoIt6v0a%2FX%2BOW25JLIKQntHOSKqu%2FrKtGjTh%2FT07YtkaXeA87DVGwqS2idXlHE4wHWv%2FVP2wttSGapyTSbi1SRNGXO%2FLCpcom3Bu%2BAdNPnDBSom2zJghuh31keBrSXFlw56vf49V%2FCwUmxOGmoYZ%2F%2BA95tjUskW220bvvLro2fz5JJZTNfwpmWCArhVuvxS9r%2B%2BE7GOaDU63hav8xGuTDY9yb1WEG3qUc5dT%2FjDRz4q9BjqkAYNchZ6uf1svhIw0ZokTh0u37r0a88cQLzx2RymSO1VN0yh3BIzafP5zdmZaT6ao%2FNKfrhJOw%2Fp5z0p%2BxZT8%2FUeluejmmgX0I2c4jmY9t%2BsoAJ4rJWRtv457s8SfuFkbdHBwuWlBYmlbBCD%2Fwzj6Zbc%2BfWv7i9dBoSgwVR0BDjTCULRbCKpvqt6%2BJrFAYD29INP%2Fh17VlwR4MFT%2FDKjCSoi4FqhK&X-Amz-Signature=afb6e956f862f2ebbf93f59d0280854b413dec13ad089f6285b15822bdbb3260&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSQ2I2D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCfIRuwi%2BNTd03%2FdsXC1fO9TeLPm5tHgM4ljggU%2FeixQwIhAIS4%2FXW1EHcki%2Fvt%2Bvp1DvZNsYBCiYCv7hQ%2F%2FM9mFQL5Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzaE9Aw3dd5IrPDoHoq3APHLacYF15af%2FN6KAxGqAFikFAi%2FsMvXkITJUXufecqKDQklcKKh5oDRLm564iKnneNjjOdPkmlZq5MfyV0YP7Lem72YsTY64VopBr1G3Ibv1y6gCng23rGqUkU0lnlUxxIbehp0EbirQbbzIfdzYYyuGgngAuuN8NsyUOahJt%2FKfSIvusKSihRT6T0N%2BB1d4QjkBqGx6aOGKku4IDmmys9E%2B3hcb%2BRx1IEt4qd9tOslFdz7ENuW5GleaK1%2FgJSpttp5sMzqWV9IipuXQ0RyB1QmEyR2R0dtcVjzHGRkjWB48P3H3edciug64cx98BLkfxqM0mkK0I7nfFOwIY6xSPJZ4c37PpC1pceWIzG%2BKF4dNdCvbj1iOMbbpH7MUjvdqqj9YNX3riiGdmyMghUVsEJtoIt6v0a%2FX%2BOW25JLIKQntHOSKqu%2FrKtGjTh%2FT07YtkaXeA87DVGwqS2idXlHE4wHWv%2FVP2wttSGapyTSbi1SRNGXO%2FLCpcom3Bu%2BAdNPnDBSom2zJghuh31keBrSXFlw56vf49V%2FCwUmxOGmoYZ%2F%2BA95tjUskW220bvvLro2fz5JJZTNfwpmWCArhVuvxS9r%2B%2BE7GOaDU63hav8xGuTDY9yb1WEG3qUc5dT%2FjDRz4q9BjqkAYNchZ6uf1svhIw0ZokTh0u37r0a88cQLzx2RymSO1VN0yh3BIzafP5zdmZaT6ao%2FNKfrhJOw%2Fp5z0p%2BxZT8%2FUeluejmmgX0I2c4jmY9t%2BsoAJ4rJWRtv457s8SfuFkbdHBwuWlBYmlbBCD%2Fwzj6Zbc%2BfWv7i9dBoSgwVR0BDjTCULRbCKpvqt6%2BJrFAYD29INP%2Fh17VlwR4MFT%2FDKjCSoi4FqhK&X-Amz-Signature=72e8e445337bd9c65039c0e81d300172659b872104814a50244e5b6f9b89253f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
