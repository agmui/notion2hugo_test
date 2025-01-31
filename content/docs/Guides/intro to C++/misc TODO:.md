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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDCZ6F%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FfF%2FsJxjbV6BYrg8rk0bkBkRoo0uLSJIWZKV14Gb%2FcgIhAPJmv7qfcGMOYhr%2F67eJ9ZuuzAxdoGhTEAhv78WhH8miKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNJfhNdI72o0Th038q3ANO0snbIbporWQfls1hbbX0s6Qaaizmnhw18StXtc5v71UgcqJ%2FNUaxgVA5OuQYsjgEygoxh%2B%2F4%2BwFmPbwwOGDjFluUezrxPPunB4qHBtVtqi8Qm4IFDwLl9xoDBr7%2BuTo4vka0m8UzhVW5Qy4IXv16gCBy%2BtfiEFz1mKQ58qj0Cbc21euALIP%2Fzguzdn0r8hG4tnwg45T5Wa6mfbnnKnCc2j9mR72wM%2FEnUNRES72XuYYLkx5dNyS9Uvu3OdTtu2oI6KPTnMYCZGpR1RigUz3lW3sh%2BMCjm4Zddp4qWY0xoNhFpVzhPVq9fUQcuyjPvgmyuqlEn1044SHaQsUNkrjxedvgQb3M5EJfX%2Fe9Huy3pJ0vlvI9J%2Bk5Z0EPocSYZ%2FTub12jLCvG7lGpebWRV6VZqUoB2PDc8wSVDER6QEJCLox1cFcgmgiIV3hMckoHUTZrowEt3PDjOXafCxe0O9dggAyifZtHL66%2FuKWsoMwS2vth%2Be99wHqh7pVQEd%2BYCfukFcEbgttiUBFyd2er0BJqrghYaMoIeM%2Bsb3p%2F8tGVFTnToMfy4et1xU%2FeqQ9%2BjNUH1G1CHi6UQFiNY0SChDDgHJ%2F0POBO9FMrZo93qsL3VO231b%2B0ZYCVagIa6zDTrfO8BjqkAVgNKuFzmaLohLY4O7pIpWDPCcfD6UKegwVzkj%2BOzZuXcot%2F5y%2FHnPuC2zdzwBWBlP21Hi8bUbm6KW8Y8T8Fcw0XJQ5S8v1ZI%2BOjU97HOvlIU2cJ4zu1Nbo%2FkY25xf2W0a2vWjg9NX0Z3ExyJfEem2lI121Qb0Rd%2BPaVXabHT6JlOmBVzvxMMN4jLWx1IQ%2Bc23w%2B%2FXMUAkHoIqBLca47L21W3hDB&X-Amz-Signature=67541e3f6d0e639552551905d27eeaefda332c967cba9a4b3bd1512086b10b67&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDCZ6F%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FfF%2FsJxjbV6BYrg8rk0bkBkRoo0uLSJIWZKV14Gb%2FcgIhAPJmv7qfcGMOYhr%2F67eJ9ZuuzAxdoGhTEAhv78WhH8miKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNJfhNdI72o0Th038q3ANO0snbIbporWQfls1hbbX0s6Qaaizmnhw18StXtc5v71UgcqJ%2FNUaxgVA5OuQYsjgEygoxh%2B%2F4%2BwFmPbwwOGDjFluUezrxPPunB4qHBtVtqi8Qm4IFDwLl9xoDBr7%2BuTo4vka0m8UzhVW5Qy4IXv16gCBy%2BtfiEFz1mKQ58qj0Cbc21euALIP%2Fzguzdn0r8hG4tnwg45T5Wa6mfbnnKnCc2j9mR72wM%2FEnUNRES72XuYYLkx5dNyS9Uvu3OdTtu2oI6KPTnMYCZGpR1RigUz3lW3sh%2BMCjm4Zddp4qWY0xoNhFpVzhPVq9fUQcuyjPvgmyuqlEn1044SHaQsUNkrjxedvgQb3M5EJfX%2Fe9Huy3pJ0vlvI9J%2Bk5Z0EPocSYZ%2FTub12jLCvG7lGpebWRV6VZqUoB2PDc8wSVDER6QEJCLox1cFcgmgiIV3hMckoHUTZrowEt3PDjOXafCxe0O9dggAyifZtHL66%2FuKWsoMwS2vth%2Be99wHqh7pVQEd%2BYCfukFcEbgttiUBFyd2er0BJqrghYaMoIeM%2Bsb3p%2F8tGVFTnToMfy4et1xU%2FeqQ9%2BjNUH1G1CHi6UQFiNY0SChDDgHJ%2F0POBO9FMrZo93qsL3VO231b%2B0ZYCVagIa6zDTrfO8BjqkAVgNKuFzmaLohLY4O7pIpWDPCcfD6UKegwVzkj%2BOzZuXcot%2F5y%2FHnPuC2zdzwBWBlP21Hi8bUbm6KW8Y8T8Fcw0XJQ5S8v1ZI%2BOjU97HOvlIU2cJ4zu1Nbo%2FkY25xf2W0a2vWjg9NX0Z3ExyJfEem2lI121Qb0Rd%2BPaVXabHT6JlOmBVzvxMMN4jLWx1IQ%2Bc23w%2B%2FXMUAkHoIqBLca47L21W3hDB&X-Amz-Signature=ddadc78bb0dae9aec9065aa2c8ebbd13428c5ce8d749c19a1ecdf0448909cba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
