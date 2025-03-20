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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQI7X5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCbr%2FhobvVmPWvtDEkxCCMHX9%2BD1r7lTZaqfEYTxmXnHAIgARrOUMpKWY0vAQm5zTD1WGdw4bd7CaRB%2FfgsCuv14SEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVBCOT5%2FCujFN28hSrcAz9TNszf6pmBw2PKtmqkgzgIIQn3ly7LQkliPlw0M%2F74PE4byfi2VismOklp2G09oX2A4%2F%2Fc1wvTKhr8NWAN%2FWSKDErvfsNLu%2BwlOHTFtsfs1dE5Hz2m5WZMRlSpz0EudzFB8o61wo93A3%2BdSjJipNwHutknwN%2FGHwO%2FyKs1gunxrPiHRHKSzmQhr3GKV3zzhk22%2F9eYQskDrfj%2FtAsq3QKXGP7YEvsNg4wR5JUHdgonr2cWr0taBorRTOu2S4fS1mRl2%2FBhIYs932Kynaq4mjXd9nAY%2Be%2BsaILC7PchMiYXlRho7ClpER4tARUQcJnnaJAvy0ydwTF%2B8rMOwPCn9VziQ9TanV5cue%2Fxid2eRwWEroZRWbLpHvpXaso3AKtGyMAq8M3sYuWm%2BjGCJFqs8NgX8kY0MHW7pqyBVVuZqYFCeerIkiKPN28Q7kYckW7I5j58sr%2FdsyEi%2BiCxkIatfNPffvWjVzrgIse8LxNpXeSr5zuWm3P3Xb3NSaCsVgAy4gmiTr9JoKG%2FDtUkYxpeqHt1IS2En2Wbk1t%2FqSVZ32XQXFMCTvFNTFi2MXW1cbiwWeVC4yWguUJPFIgaLaCx9jatg8UeDk0Su3HtQedZTA3B6dhwiBQjlHSJtm8qMILq7b4GOqUBfhLUDe5VDHj%2Bv391HFss5DRNm33GnVN3%2FjIpsOnJSL%2F2taZRx1g%2Bes9mSzSkrLl3rGxtyK4vV0kfvEgGxo4ezZ%2FhqUuTaNc1CJm2xW%2FZOIP%2B16ofQ3ynQWzLDGSA52gtfy9jvkTutk1mdhrnwSXOLBAyMpCK%2BhCCiguuwXq0U%2BQrVJ%2F7HQZwIcnkN7Sh2vaReL7cHTJ2ihLRKx1QBnAXNPzDfSNP&X-Amz-Signature=b85bd46046c007084f8d8b916450c4eef564d3c45151c84c5e3b6f11d174c11a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQI7X5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCbr%2FhobvVmPWvtDEkxCCMHX9%2BD1r7lTZaqfEYTxmXnHAIgARrOUMpKWY0vAQm5zTD1WGdw4bd7CaRB%2FfgsCuv14SEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVBCOT5%2FCujFN28hSrcAz9TNszf6pmBw2PKtmqkgzgIIQn3ly7LQkliPlw0M%2F74PE4byfi2VismOklp2G09oX2A4%2F%2Fc1wvTKhr8NWAN%2FWSKDErvfsNLu%2BwlOHTFtsfs1dE5Hz2m5WZMRlSpz0EudzFB8o61wo93A3%2BdSjJipNwHutknwN%2FGHwO%2FyKs1gunxrPiHRHKSzmQhr3GKV3zzhk22%2F9eYQskDrfj%2FtAsq3QKXGP7YEvsNg4wR5JUHdgonr2cWr0taBorRTOu2S4fS1mRl2%2FBhIYs932Kynaq4mjXd9nAY%2Be%2BsaILC7PchMiYXlRho7ClpER4tARUQcJnnaJAvy0ydwTF%2B8rMOwPCn9VziQ9TanV5cue%2Fxid2eRwWEroZRWbLpHvpXaso3AKtGyMAq8M3sYuWm%2BjGCJFqs8NgX8kY0MHW7pqyBVVuZqYFCeerIkiKPN28Q7kYckW7I5j58sr%2FdsyEi%2BiCxkIatfNPffvWjVzrgIse8LxNpXeSr5zuWm3P3Xb3NSaCsVgAy4gmiTr9JoKG%2FDtUkYxpeqHt1IS2En2Wbk1t%2FqSVZ32XQXFMCTvFNTFi2MXW1cbiwWeVC4yWguUJPFIgaLaCx9jatg8UeDk0Su3HtQedZTA3B6dhwiBQjlHSJtm8qMILq7b4GOqUBfhLUDe5VDHj%2Bv391HFss5DRNm33GnVN3%2FjIpsOnJSL%2F2taZRx1g%2Bes9mSzSkrLl3rGxtyK4vV0kfvEgGxo4ezZ%2FhqUuTaNc1CJm2xW%2FZOIP%2B16ofQ3ynQWzLDGSA52gtfy9jvkTutk1mdhrnwSXOLBAyMpCK%2BhCCiguuwXq0U%2BQrVJ%2F7HQZwIcnkN7Sh2vaReL7cHTJ2ihLRKx1QBnAXNPzDfSNP&X-Amz-Signature=9e01f1246527e479a044ffa6cc9634442f9e6ae75d10ec0bf9a5b2d20728edd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
