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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDYZOG2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnF5QJ6tCRT3mph2Zlac7GPH1s33e6aC81cXkgecuNcAIgXj8BeT8h%2FChdNuTVxalaslBnBzU4PS7ptJ0X26DFlZwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsDdI9rfX2AWsLtyyrcA4Q3JFXcOfBPbBPiHBpdpC5mA%2BBecL8zb2X8rHe7rDVeqXAmKFRcsarm2pxptezLD%2F7DP8HFGYkmp6GKBa7E3xyLR1dNBgP7pYdcBwV20C2XWecwo6Tje1ukAM98%2BafyzbIQpOD8Ny6R%2BcQ0ZfMUbdqGZe1MsQIbsTqjelIlkL%2FojY96HR6tpduRH67GKdtqGkLYbyb6qQg73xshNui6P0QBBT7VPG5oQkNDoiHNp1FvQodpXorBOPOCc%2FXV3mOFfkPrSEWjtCU08XPmHRSA8NXEdkiya5%2BIRlvXriXxLJGCNS4pBiTUio92FkI7w5zJagGiwn8cSxM%2BKF7ZUJ2cRlcXr5hZMvurg2TS4xbBBK%2FGNIlR%2BFuMN3jfZm4dPmwp%2Fm%2BVTuHMiFsLGun06jDtvQiZwjgiA6XQLd93xke%2FLHXx%2FE%2FGO7INVR3JJju%2FUeCbMJNcwT8mTopAcJ3bcrXo9js72bMDZ5bH0vf11dF8b2VslD0xpjxXY86ismtXvT%2B20RuhgDr9ttQKFul6bxEauP0N3S%2B81JyE3gwhMtqCQvtUuV3ta5bxQ7IU6wkOxZhcoitYOU8bkTWVeRcPYJ6bMGUHYx05XSADj9OSJipvXb5n0B%2BrD2wrJX54g%2BE%2FMLql68AGOqUB2UfkoZ0ZpSrhwD7L3diPniV1a6EHhp7K0T%2BPtsv1On0Pnaq4OSH1ha39L8fW%2Bq5WlwIJ70q07xORnjxKCD93pgpUpJ4v832AgzqRja1LtWnj3c%2FoHxzM36n7U6dLqusIh4fNivAa%2Fj3rBVx%2BdBUCIIgW5y4cJ%2F0shQRnucZX2uyr6EBKACPJU7JgZkEe0NDWriWZpumqU3Rzo%2BnUKrpTAN3SLca%2B&X-Amz-Signature=3dd1910f32654a9bb28fbcd6dd9bfd3c79ad249998f9d9c39f4479df4e2d8f22&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDYZOG2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnF5QJ6tCRT3mph2Zlac7GPH1s33e6aC81cXkgecuNcAIgXj8BeT8h%2FChdNuTVxalaslBnBzU4PS7ptJ0X26DFlZwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsDdI9rfX2AWsLtyyrcA4Q3JFXcOfBPbBPiHBpdpC5mA%2BBecL8zb2X8rHe7rDVeqXAmKFRcsarm2pxptezLD%2F7DP8HFGYkmp6GKBa7E3xyLR1dNBgP7pYdcBwV20C2XWecwo6Tje1ukAM98%2BafyzbIQpOD8Ny6R%2BcQ0ZfMUbdqGZe1MsQIbsTqjelIlkL%2FojY96HR6tpduRH67GKdtqGkLYbyb6qQg73xshNui6P0QBBT7VPG5oQkNDoiHNp1FvQodpXorBOPOCc%2FXV3mOFfkPrSEWjtCU08XPmHRSA8NXEdkiya5%2BIRlvXriXxLJGCNS4pBiTUio92FkI7w5zJagGiwn8cSxM%2BKF7ZUJ2cRlcXr5hZMvurg2TS4xbBBK%2FGNIlR%2BFuMN3jfZm4dPmwp%2Fm%2BVTuHMiFsLGun06jDtvQiZwjgiA6XQLd93xke%2FLHXx%2FE%2FGO7INVR3JJju%2FUeCbMJNcwT8mTopAcJ3bcrXo9js72bMDZ5bH0vf11dF8b2VslD0xpjxXY86ismtXvT%2B20RuhgDr9ttQKFul6bxEauP0N3S%2B81JyE3gwhMtqCQvtUuV3ta5bxQ7IU6wkOxZhcoitYOU8bkTWVeRcPYJ6bMGUHYx05XSADj9OSJipvXb5n0B%2BrD2wrJX54g%2BE%2FMLql68AGOqUB2UfkoZ0ZpSrhwD7L3diPniV1a6EHhp7K0T%2BPtsv1On0Pnaq4OSH1ha39L8fW%2Bq5WlwIJ70q07xORnjxKCD93pgpUpJ4v832AgzqRja1LtWnj3c%2FoHxzM36n7U6dLqusIh4fNivAa%2Fj3rBVx%2BdBUCIIgW5y4cJ%2F0shQRnucZX2uyr6EBKACPJU7JgZkEe0NDWriWZpumqU3Rzo%2BnUKrpTAN3SLca%2B&X-Amz-Signature=439cfc8ad9d5ff0a89c2d429b4d8516f1cac87f1923bb46585732e827dd5b984&X-Amz-SignedHeaders=host&x-id=GetObject)

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
