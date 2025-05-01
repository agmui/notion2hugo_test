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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTX6HCV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbz3RDFTVEzZaqVfmpEd8EM%2B4HBzdS38pBqnJhe6IPAAiEAxr8aiqIY1eVYFBr96O7bM2FjkzLdc0li1nVQXb3FpDUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN62jovYXSarc347CrcA4G7Kt7SNFgwyhf3hLkoH7%2BAw5imivri8QBnF17MT0uryRgZyTydNVK8iMY0%2BZg6qXaKOpJXN83gVLt43jiWrO62smguJ5PWIZ2UxYzNABcs6VtkxplnrQ6Zund1fYVsaZWvBlxqlpCYUy2RmeO460mpX33ICnl2m2peno34pUmf1QggRQRjE93SeXyH%2BceaRQolt7txgaUobLyuxDnd8Chiywme%2FJvnWpycSODVHR%2BAAjC7azc3mr%2Bukvamc92Zw0%2F9%2BC0BFOGlqdUl%2BKVblLpgprPRH4z8XYFvmTGEuCeyZGgm9fEiDNw0hGSwSfawuiaNDRd%2FK6E5AerLIjK24HXD2%2BGO2PH%2FGI7Qs7DqBvRO8Bbu0Xq%2B1pH1S5VzQDUir9%2BIP7qeMvQrfh3xJdCO9QlqkCTc6MlC9pB1x4KY6eC5oPgfj01XgjRQ%2FxvSKYwTXHzP8nVWSAZAjJyIZGzmVq%2BA5EA0q4RAMOtdPtDimX%2BHs9bGYG%2FSgOJom3tlzspJ%2Bz%2Burjya895P2nph9ErHplWTp8EYkHdcPWcmQFz9gFadjOSS70C7MqEpLtfQinyf39U8ZAnMvZ0gcnNgqcdX77GuWinYEw7DTo%2FB20wMSLd5beZjzcX0Bjn7hOIWMInJzcAGOqUBlXRRy8RbUkxF3DP1uHJlWu8f2rRcXdiC6O2o8qS9LbKEmA9xvZ%2By3Lnqghgz0zEx9WDu7TT3r8p5D63G%2BpRAi4MyfY1ykosyKYB0096S14utfjJCsB%2BemGoX0icZFgHu%2F4Wx5Ny69H7MDB59KXyONdU8SHuRmkxu%2F9zfRg08NKvTbP3duUOJ%2BfT31DfgVkbfVHF76g%2FW2UPR4jkuvsdxabz17FTX&X-Amz-Signature=f3805edf2802d247e586b9856390143df2c6602d256e8265d537a01cf9483434&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTX6HCV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbz3RDFTVEzZaqVfmpEd8EM%2B4HBzdS38pBqnJhe6IPAAiEAxr8aiqIY1eVYFBr96O7bM2FjkzLdc0li1nVQXb3FpDUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN62jovYXSarc347CrcA4G7Kt7SNFgwyhf3hLkoH7%2BAw5imivri8QBnF17MT0uryRgZyTydNVK8iMY0%2BZg6qXaKOpJXN83gVLt43jiWrO62smguJ5PWIZ2UxYzNABcs6VtkxplnrQ6Zund1fYVsaZWvBlxqlpCYUy2RmeO460mpX33ICnl2m2peno34pUmf1QggRQRjE93SeXyH%2BceaRQolt7txgaUobLyuxDnd8Chiywme%2FJvnWpycSODVHR%2BAAjC7azc3mr%2Bukvamc92Zw0%2F9%2BC0BFOGlqdUl%2BKVblLpgprPRH4z8XYFvmTGEuCeyZGgm9fEiDNw0hGSwSfawuiaNDRd%2FK6E5AerLIjK24HXD2%2BGO2PH%2FGI7Qs7DqBvRO8Bbu0Xq%2B1pH1S5VzQDUir9%2BIP7qeMvQrfh3xJdCO9QlqkCTc6MlC9pB1x4KY6eC5oPgfj01XgjRQ%2FxvSKYwTXHzP8nVWSAZAjJyIZGzmVq%2BA5EA0q4RAMOtdPtDimX%2BHs9bGYG%2FSgOJom3tlzspJ%2Bz%2Burjya895P2nph9ErHplWTp8EYkHdcPWcmQFz9gFadjOSS70C7MqEpLtfQinyf39U8ZAnMvZ0gcnNgqcdX77GuWinYEw7DTo%2FB20wMSLd5beZjzcX0Bjn7hOIWMInJzcAGOqUBlXRRy8RbUkxF3DP1uHJlWu8f2rRcXdiC6O2o8qS9LbKEmA9xvZ%2By3Lnqghgz0zEx9WDu7TT3r8p5D63G%2BpRAi4MyfY1ykosyKYB0096S14utfjJCsB%2BemGoX0icZFgHu%2F4Wx5Ny69H7MDB59KXyONdU8SHuRmkxu%2F9zfRg08NKvTbP3duUOJ%2BfT31DfgVkbfVHF76g%2FW2UPR4jkuvsdxabz17FTX&X-Amz-Signature=41bd24ff8cdf65951261d7cad1cdfd87f77e9b7fce8c640e1b5ff09037440c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
