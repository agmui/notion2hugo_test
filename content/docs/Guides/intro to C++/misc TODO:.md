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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NA4ZGQE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD20U5Tk23q62Y1mgK4S%2B2pbp5xmmKcirtuwIRsO6SgJQIgbAr3UDhTJDmNSeRug%2FQF2oIwi7de2X%2FLRiTC1uM6N%2BAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIdxGRsoIGAgkK2JyrcA1x%2BSQiW5UHjE7WWwFmBOnRi9PNS4QN0Y8duNgOQVtz6ST2vNccjqSgLJpTow8G1tLX5YalLaZhKSRERL4GiHVBsCysWt4Z1Ij6okA9jILoz8FoHGqWDgelA5RsXa7nL8SY%2BGP6rb0Y45H65qbtexOI63sSH9XllPEk7mKqWvYQB4RlbamkNW%2F4sEVB%2BNWudZSrXhpQvkNFINk28HgnQVUfQJPrXzpRBCvznNMqAWIKXxsbElLpSWlhGrAu0pKWBk%2FR2uSjc3JhfBvAZSDKJ5%2FSE6D%2F6QawkpVRE4PTLSNK7n1Z6eLKc2Q3IsIdMa1Q0pfBFmJVN6xTucPVzLpFGtjnNc1JZCrGuzYKIfN6eqobYzbKWFF70SgrATrr0jgNbNVmSnUpce9QkvluFa2TiHX4eloavxS%2BgNpw0A6tiO3nc2rEVYh5QbfHsoSgCwVNR%2FHEELkraeyGYWsZAwmCp4%2BVce1V%2BwqTcWjDoltQo%2BRV3jjy4Gz3rE5%2Fq2d1I1kFByUfxXS0E0aF4Iy7zj9SixXECVyBkNMGgVCuUny1WeNMNxDrMSd1WUjqWhVIfWSDaxNZlSc2wbegEP8odbQ%2Bf40QLRfv2dqLcGx6VS%2BmUeWWFcj9M%2BsRzqTKJu%2B7aMMezssEGOqUB6FtFT0WHileqZ7oiso%2FAvHS2j0fJIdnvdhm9cIEH%2F3jGceodbcfy54%2BYoeO8uqQ5DLsbPHc9CUkVSHi5k0n55F3AxmnccA29G4g9ty370jlm%2FFbs%2FucEApbvg1wvoPsL6WZzc2VhuBgG1%2BdVUUNN5M2xuNKyxJGtk1Wpa%2FdY7vDUlJR6nH6NERlHjWu69gi1FAi%2Fc4xEVb7jk7sXqYYn1vUi%2BqMg&X-Amz-Signature=7eb37a3543f02f6310459e342c33c11ba7ead90366b04fb22ef231d5812c7ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NA4ZGQE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD20U5Tk23q62Y1mgK4S%2B2pbp5xmmKcirtuwIRsO6SgJQIgbAr3UDhTJDmNSeRug%2FQF2oIwi7de2X%2FLRiTC1uM6N%2BAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIdxGRsoIGAgkK2JyrcA1x%2BSQiW5UHjE7WWwFmBOnRi9PNS4QN0Y8duNgOQVtz6ST2vNccjqSgLJpTow8G1tLX5YalLaZhKSRERL4GiHVBsCysWt4Z1Ij6okA9jILoz8FoHGqWDgelA5RsXa7nL8SY%2BGP6rb0Y45H65qbtexOI63sSH9XllPEk7mKqWvYQB4RlbamkNW%2F4sEVB%2BNWudZSrXhpQvkNFINk28HgnQVUfQJPrXzpRBCvznNMqAWIKXxsbElLpSWlhGrAu0pKWBk%2FR2uSjc3JhfBvAZSDKJ5%2FSE6D%2F6QawkpVRE4PTLSNK7n1Z6eLKc2Q3IsIdMa1Q0pfBFmJVN6xTucPVzLpFGtjnNc1JZCrGuzYKIfN6eqobYzbKWFF70SgrATrr0jgNbNVmSnUpce9QkvluFa2TiHX4eloavxS%2BgNpw0A6tiO3nc2rEVYh5QbfHsoSgCwVNR%2FHEELkraeyGYWsZAwmCp4%2BVce1V%2BwqTcWjDoltQo%2BRV3jjy4Gz3rE5%2Fq2d1I1kFByUfxXS0E0aF4Iy7zj9SixXECVyBkNMGgVCuUny1WeNMNxDrMSd1WUjqWhVIfWSDaxNZlSc2wbegEP8odbQ%2Bf40QLRfv2dqLcGx6VS%2BmUeWWFcj9M%2BsRzqTKJu%2B7aMMezssEGOqUB6FtFT0WHileqZ7oiso%2FAvHS2j0fJIdnvdhm9cIEH%2F3jGceodbcfy54%2BYoeO8uqQ5DLsbPHc9CUkVSHi5k0n55F3AxmnccA29G4g9ty370jlm%2FFbs%2FucEApbvg1wvoPsL6WZzc2VhuBgG1%2BdVUUNN5M2xuNKyxJGtk1Wpa%2FdY7vDUlJR6nH6NERlHjWu69gi1FAi%2Fc4xEVb7jk7sXqYYn1vUi%2BqMg&X-Amz-Signature=8fbe60c538bb753401dfad6d5db2ae1c2ebb794f8792bff3799047729ad9fdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
