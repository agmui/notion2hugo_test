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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BA7O4SM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDJVjpaUg8kwjx%2BDxvayXTFyk3DC%2FVjX4J1LjSVEhhb5wIgdFtO%2BFk7QZVTmSp2YdPlxTXSU0vA7Qlnsg6LPLTSbfcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4%2BJuuh8fKumxx%2FfSrcA4t92byxsaB5V30MQYXdh53SRiA6ogzgDxHdgdDzKGvWV6G9TEd%2Fx2QNJUDFS2SOSla81sT9i6L7hjlUbyYYGEzYHsEz5JvrKFOy2%2BBtVD2Q4ZSEn6gTN8Y%2FHOlZICLRdmfeRuugrhbF5ayRxReg1NH3xR5I7uFt9EaPK%2F1NVsw7wY8xMzbLyZZ7W3WidtcHkg7Q1DtjOwGQdj4aCFc8pDt0rm3QtUzznYF%2FXz8CUkuGPxlumooSslvLJemR%2BbaD9hk8VDMWiDK4kxOFWPBpCX9RNJ5ozr2xmmjeWW4sFWpv%2B4LwxTy5dlT%2F7lwdWRYq5J8IUANZCMwFd5vFEOKHkourIre4tx%2BVfCStBSeNuR7OGjA2vpx%2BXx3yLS8YlEQqU%2F4uy4J0a0poDypZxCjX9OHm1qiPJmlzlqwvn%2B3FOxfXY1oIb3KXOFZUlqIIMg22ZrqmdOtdRvOgJ%2BWndMLSTCpW%2FZG3cEPqVsdWtc0Cn%2B6JBMb2UBXQDqzKxxGxuH14vJbaME61DMv8UEQGUEty7sVVOwZ08ADLk64HJ0i23l%2B3C%2FLkqI6ilnAbAfJedAsje9Ethv%2BvUmVR%2FOLzgbjkf6VF4385b9NSRuPoFOso9Kwdl3yECr%2BOt%2B0n9S7hMLz22sQGOqUBHfb6978r8WI4h1d0ti1q49Q30cQLTe38siMPZx0S5N5EqLJ7eDSOktKQsUUGDOwmCoB3w7Yolvim9snnndw850RebMuaHJpO7yrN0M1Zwwu8O6T7uIJGKZLtCnfwJ7BHBGyjuMifmUM6I6OOocQVyz5TkMC2xLo079eMGnfal1S%2BYe8r%2FFqiaD5Xty6sSpSv87K9TTEKVtqyqfjkqTj%2B8yr1AIWI&X-Amz-Signature=9f6a3b29b205d51c82ca0539a6027a77c9eb0f0db3f1c2cdbd7b89ec94bac39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BA7O4SM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDJVjpaUg8kwjx%2BDxvayXTFyk3DC%2FVjX4J1LjSVEhhb5wIgdFtO%2BFk7QZVTmSp2YdPlxTXSU0vA7Qlnsg6LPLTSbfcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4%2BJuuh8fKumxx%2FfSrcA4t92byxsaB5V30MQYXdh53SRiA6ogzgDxHdgdDzKGvWV6G9TEd%2Fx2QNJUDFS2SOSla81sT9i6L7hjlUbyYYGEzYHsEz5JvrKFOy2%2BBtVD2Q4ZSEn6gTN8Y%2FHOlZICLRdmfeRuugrhbF5ayRxReg1NH3xR5I7uFt9EaPK%2F1NVsw7wY8xMzbLyZZ7W3WidtcHkg7Q1DtjOwGQdj4aCFc8pDt0rm3QtUzznYF%2FXz8CUkuGPxlumooSslvLJemR%2BbaD9hk8VDMWiDK4kxOFWPBpCX9RNJ5ozr2xmmjeWW4sFWpv%2B4LwxTy5dlT%2F7lwdWRYq5J8IUANZCMwFd5vFEOKHkourIre4tx%2BVfCStBSeNuR7OGjA2vpx%2BXx3yLS8YlEQqU%2F4uy4J0a0poDypZxCjX9OHm1qiPJmlzlqwvn%2B3FOxfXY1oIb3KXOFZUlqIIMg22ZrqmdOtdRvOgJ%2BWndMLSTCpW%2FZG3cEPqVsdWtc0Cn%2B6JBMb2UBXQDqzKxxGxuH14vJbaME61DMv8UEQGUEty7sVVOwZ08ADLk64HJ0i23l%2B3C%2FLkqI6ilnAbAfJedAsje9Ethv%2BvUmVR%2FOLzgbjkf6VF4385b9NSRuPoFOso9Kwdl3yECr%2BOt%2B0n9S7hMLz22sQGOqUBHfb6978r8WI4h1d0ti1q49Q30cQLTe38siMPZx0S5N5EqLJ7eDSOktKQsUUGDOwmCoB3w7Yolvim9snnndw850RebMuaHJpO7yrN0M1Zwwu8O6T7uIJGKZLtCnfwJ7BHBGyjuMifmUM6I6OOocQVyz5TkMC2xLo079eMGnfal1S%2BYe8r%2FFqiaD5Xty6sSpSv87K9TTEKVtqyqfjkqTj%2B8yr1AIWI&X-Amz-Signature=a4aa6e791fe56ee781f53777347c836cc96f2f47688268f4b9378ca1c540c6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
