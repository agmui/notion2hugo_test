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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYLOB5W%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SWP688B%2BakVDvPTA7V9FW9bInj2eA%2BpNhw061IhsewIgAIlY84GqQ%2Ba2Iwr5jbSnsa5NODbkz8Lr7i1f3PR%2FENwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXUSM2tmiqufk9jvSrcA4y73J20vsGOvMtKGwNGViX1GrPYzS7rvaB8Lm1%2BfxlKbWZ%2Bk39p%2F37Gv3IC5Fq8UN4GNUyIPaX4M0qelqUkP6qWXmuYDgzve6neBC2mt3t7vm0bRZBzNTVVGAhcoyafcDilzuTF1KxVOFp852XrMLNfj%2BNOM2NaJHDrt%2BEC79en4qfPl5VwqNvcsbYLRNg0qHbKSKb%2B7drXP5hiVs%2FLX0dC9ZLB6N4yu9DcygGNptcRQaPs%2BXuN59QyJ4gqITAdFrWcH%2BZn8MTLrCSvKpXZJaqYrjaVq1KROQvzpY5SwepaJjBraAdvEvDTQUvgPJ%2B4QOSOOCaSN4X4ATny03n5e6phKY2e8dWOSf8xX4Mn62r2TI%2BUcNJ2cSQnPzVvBuM2wIk2V1GWTsEJ9sLSAJ8c9CS%2FayHObyBr9s3BWsz65PaAKf2dpfmXcJ8Vgxr2ECWoRGjL%2FYLYO8Tfi%2BWmVSe0xpK1Qhq5A5QGDr0JKLJ4Rz8gokNLU7mvrP2aBVsOXGblN43xnsTPeDL8jp9uIcFLNi3TrmR3xtuW2YAnpU9SBkXAX2ppd6AAR6XKhIqc%2FQW2QeyQavWi%2BBYyZYRUmk%2BOnwxLhaEErGNfQd4TF6OYkSAyOSPSsDR4qRWKFRsWMN7MhsMGOqUBH1BafaOBj43vdt8z5OSl3F7ilJcXkeG%2BQRlRzIdtixrVmRBudl02%2BUI9vnVAlPQKQYhs8g%2BOSm61rdLbn9eLiiUMYbL4zG3%2BaWYhyeB47CDPsclglCWwV1DPGrtE8%2FJ2KO2vLbH5WsckNzRKvgr%2FeO%2BWWR4h%2BxfQpytFphVlXi6VE4ZEst9XSpfQ3no0JcxP1w7aoqXxKryYMPi1YSrOoZq9A9Ti&X-Amz-Signature=0df1813872b354d6fed54f881a3b322016c76ba2dbe90e6f1ec1fcc4de3a9d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYLOB5W%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SWP688B%2BakVDvPTA7V9FW9bInj2eA%2BpNhw061IhsewIgAIlY84GqQ%2Ba2Iwr5jbSnsa5NODbkz8Lr7i1f3PR%2FENwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXUSM2tmiqufk9jvSrcA4y73J20vsGOvMtKGwNGViX1GrPYzS7rvaB8Lm1%2BfxlKbWZ%2Bk39p%2F37Gv3IC5Fq8UN4GNUyIPaX4M0qelqUkP6qWXmuYDgzve6neBC2mt3t7vm0bRZBzNTVVGAhcoyafcDilzuTF1KxVOFp852XrMLNfj%2BNOM2NaJHDrt%2BEC79en4qfPl5VwqNvcsbYLRNg0qHbKSKb%2B7drXP5hiVs%2FLX0dC9ZLB6N4yu9DcygGNptcRQaPs%2BXuN59QyJ4gqITAdFrWcH%2BZn8MTLrCSvKpXZJaqYrjaVq1KROQvzpY5SwepaJjBraAdvEvDTQUvgPJ%2B4QOSOOCaSN4X4ATny03n5e6phKY2e8dWOSf8xX4Mn62r2TI%2BUcNJ2cSQnPzVvBuM2wIk2V1GWTsEJ9sLSAJ8c9CS%2FayHObyBr9s3BWsz65PaAKf2dpfmXcJ8Vgxr2ECWoRGjL%2FYLYO8Tfi%2BWmVSe0xpK1Qhq5A5QGDr0JKLJ4Rz8gokNLU7mvrP2aBVsOXGblN43xnsTPeDL8jp9uIcFLNi3TrmR3xtuW2YAnpU9SBkXAX2ppd6AAR6XKhIqc%2FQW2QeyQavWi%2BBYyZYRUmk%2BOnwxLhaEErGNfQd4TF6OYkSAyOSPSsDR4qRWKFRsWMN7MhsMGOqUBH1BafaOBj43vdt8z5OSl3F7ilJcXkeG%2BQRlRzIdtixrVmRBudl02%2BUI9vnVAlPQKQYhs8g%2BOSm61rdLbn9eLiiUMYbL4zG3%2BaWYhyeB47CDPsclglCWwV1DPGrtE8%2FJ2KO2vLbH5WsckNzRKvgr%2FeO%2BWWR4h%2BxfQpytFphVlXi6VE4ZEst9XSpfQ3no0JcxP1w7aoqXxKryYMPi1YSrOoZq9A9Ti&X-Amz-Signature=ed5bec14b4c1bc1b3fa1e87d4e47af44cb8d4d6e978c3cd88bb9f5eab8b258b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
