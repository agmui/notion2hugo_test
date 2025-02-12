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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ER257IV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7vxoIlOZIt71zhdkRm6qgb0Egmm1Pqx3%2BjJYUpAMrgIgSiQO2vbeumJfEjcUW%2BSwWPpb306O9dwYYTbk%2Fzh9GOoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjlpTS4rYF1Qd0tCrcAy1ixnyqMw2xxlTrM65ApYpNf6CPHhOS%2B7uKbksoqqrbTcWAu2r97sif2QMkJjlEskheCdN3GpoKl1R1Iuo6W44j4xbNVfsH7aK6WpHp0q8EZY3aR6hUDE%2FCvkXy8DtrxwLLY%2B2bsdLTBQabmj1MhfNquZ1FPEqndEzIUTVxYTkpfYiinVaxuapxzgOFzpOBwXVXrSZlUpK7Rd0bKWjeJ%2F7kElYT8IbNZsmS4ZpBdMlSnsZcmpEsP40zxDAMs8S%2BrECYRnv2sgNLvoW%2BXYWxM%2FmV1oe2Hm%2FrnFaT3Y7Uf6eftUJbSFSlnpyV8mc4RJ0aGHF1F9fAyZEiN81RzTvwrHL9RLcqJ8EbK9JPYDf6P5Xt%2Bk%2FqaZquC5yrRu3VM3MMXDhtsO%2FAiX%2Fl6tfTJWdO4opiITIJT7jEATtLmML1Ok9U8QTsv8AXbDEhc6nJF2zBPoK8Fy1nen1jiK4b%2BgrpKEAGI11T94S6PrDAdqEE40cbNtIdW0XhtmfYnbSCEwCcDn2a%2BbFJcseLsX2l%2BC3CeqqIEDdWjhUpXFHNmP4u82vVfxUbgbTpWbpzUbuP2xpvCmej4cPf5Y0cf594qKvDaWz0NSayCywZNBbdYqQzCX21Jk%2BgvRl5cNpdBkleMLTJrr0GOqUBRvBzvDsgKZvR1ifmG2QzmOtEO1fibpbMpUXQFq9RQfcrQuA%2BIUfo7G9XyLQg7Kxts%2Fo4qrn2UpGBkagmaGG69v5EN2OobSudDwxCjSI9O%2BesolId2WM6ggHx6PvQ1NoPjQ1bjMZw6DwrFGkQtZn5c%2B2nd2wXpVxDrhP%2FojCouRHQfSlVTjRYTVGwhuPNvwBuPCVL%2FisgE5LGSESm2xa4iyAix5%2Fl&X-Amz-Signature=130806d0bcfab2910024705b017e2d2085d4afdcb88ccf6480f3b51ec896cb33&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ER257IV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7vxoIlOZIt71zhdkRm6qgb0Egmm1Pqx3%2BjJYUpAMrgIgSiQO2vbeumJfEjcUW%2BSwWPpb306O9dwYYTbk%2Fzh9GOoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjlpTS4rYF1Qd0tCrcAy1ixnyqMw2xxlTrM65ApYpNf6CPHhOS%2B7uKbksoqqrbTcWAu2r97sif2QMkJjlEskheCdN3GpoKl1R1Iuo6W44j4xbNVfsH7aK6WpHp0q8EZY3aR6hUDE%2FCvkXy8DtrxwLLY%2B2bsdLTBQabmj1MhfNquZ1FPEqndEzIUTVxYTkpfYiinVaxuapxzgOFzpOBwXVXrSZlUpK7Rd0bKWjeJ%2F7kElYT8IbNZsmS4ZpBdMlSnsZcmpEsP40zxDAMs8S%2BrECYRnv2sgNLvoW%2BXYWxM%2FmV1oe2Hm%2FrnFaT3Y7Uf6eftUJbSFSlnpyV8mc4RJ0aGHF1F9fAyZEiN81RzTvwrHL9RLcqJ8EbK9JPYDf6P5Xt%2Bk%2FqaZquC5yrRu3VM3MMXDhtsO%2FAiX%2Fl6tfTJWdO4opiITIJT7jEATtLmML1Ok9U8QTsv8AXbDEhc6nJF2zBPoK8Fy1nen1jiK4b%2BgrpKEAGI11T94S6PrDAdqEE40cbNtIdW0XhtmfYnbSCEwCcDn2a%2BbFJcseLsX2l%2BC3CeqqIEDdWjhUpXFHNmP4u82vVfxUbgbTpWbpzUbuP2xpvCmej4cPf5Y0cf594qKvDaWz0NSayCywZNBbdYqQzCX21Jk%2BgvRl5cNpdBkleMLTJrr0GOqUBRvBzvDsgKZvR1ifmG2QzmOtEO1fibpbMpUXQFq9RQfcrQuA%2BIUfo7G9XyLQg7Kxts%2Fo4qrn2UpGBkagmaGG69v5EN2OobSudDwxCjSI9O%2BesolId2WM6ggHx6PvQ1NoPjQ1bjMZw6DwrFGkQtZn5c%2B2nd2wXpVxDrhP%2FojCouRHQfSlVTjRYTVGwhuPNvwBuPCVL%2FisgE5LGSESm2xa4iyAix5%2Fl&X-Amz-Signature=6ee7ea65b58b1d534b9fd33717e1d7fd7f92d8dac1cf16681e65ab9a505cd7af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
