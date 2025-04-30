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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLN2SBE3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2Bi%2BSn0PO%2BsI96f0kS2%2FeUiHmD%2FCEaV6yXov1J02cCqAIgLPAuxEH7s7ETzr3d06OKhL05zUl8xNdrL6Pmfn9HbXIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FbP%2Fxh8dk4ezdzzircA1Al9oeOryU283vU5wdJSiCdAFo2%2Bc%2BZDkvH3oqssY2yky19P9jvXBBdLTf6FOxGcrwS6Vm7Zl1x5h5bLB1jA%2FXaTyw8HzdQJjC%2B1dyGylLz0auYpc%2BNDH5C859sqRiEiPnsR2Kr3eqEtXsMdZNcwX9ys%2BF0l6v3BQGKiIrk%2FlxrmG5blRbwmNAciV3bfOrSDsEuAOZnjmGfW%2BfFkAQQcY3OOozsrPp7gIcQOOXzjzHllfnSqwkY5HtgiDFO7V646jNXpAyAoAtGnJQ5YAd4A1soOG%2BHItozJKMNqCG1B6R1JQIK61YHRUVKfNevdiAvclqcdY2zkPkY4S8DxIPQDCFNNTO0MQsIpqEv3n309CX543vDupSxj0cQYMujDrfsFoz2%2FzHDtRHwpw8d6favLcCNHlsbO9CMbqhSnvepXYkoaed23zxJ1Xu7DbwtR88Lpm7Erj5ka%2BdQjICbYOkk6o3Cl1EhEr%2BK9IGngL%2BG%2FtGYHm%2F%2BTUUpDSqNI0ap4%2FkSINfEi1in3AhOz%2FGNYAPqFqyiUgg%2BEjTk86e%2FReJOIEYtWL1eta2HJ3%2BkB%2BuFEg7KSHDGrPuY3N7SM17jeSvGf%2BhWT7Yrmo3Xlsb1B6Vuu2%2BCgNo0UndshG8vMHX%2FMO7EyMAGOqUBqmv5%2FeTNGC4lQ1W6VLxkZKAgCQYfuDBoWih1ymIiCSBT56txcSIYcnZyS%2F33mVUEYsPVu54GpTXtBDKP%2FBPORIHAcBbPPETvCiRWGlXLHL5w%2FJ%2F2asS%2F13IpA7Idg1D%2BBSOmEBMWWnGSyjrlIw3nSV%2BeJJB8CzU%2BWd37jokCYiLQ%2BD3OT23RWc1rPRXOv7Z%2BZvTOBEEmJy8BRrE50wKZOn5jZwlg&X-Amz-Signature=932c7e826a9123eea9a2e65761013ffff7c4e845c93259ed5d9f3b300612023b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLN2SBE3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2Bi%2BSn0PO%2BsI96f0kS2%2FeUiHmD%2FCEaV6yXov1J02cCqAIgLPAuxEH7s7ETzr3d06OKhL05zUl8xNdrL6Pmfn9HbXIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FbP%2Fxh8dk4ezdzzircA1Al9oeOryU283vU5wdJSiCdAFo2%2Bc%2BZDkvH3oqssY2yky19P9jvXBBdLTf6FOxGcrwS6Vm7Zl1x5h5bLB1jA%2FXaTyw8HzdQJjC%2B1dyGylLz0auYpc%2BNDH5C859sqRiEiPnsR2Kr3eqEtXsMdZNcwX9ys%2BF0l6v3BQGKiIrk%2FlxrmG5blRbwmNAciV3bfOrSDsEuAOZnjmGfW%2BfFkAQQcY3OOozsrPp7gIcQOOXzjzHllfnSqwkY5HtgiDFO7V646jNXpAyAoAtGnJQ5YAd4A1soOG%2BHItozJKMNqCG1B6R1JQIK61YHRUVKfNevdiAvclqcdY2zkPkY4S8DxIPQDCFNNTO0MQsIpqEv3n309CX543vDupSxj0cQYMujDrfsFoz2%2FzHDtRHwpw8d6favLcCNHlsbO9CMbqhSnvepXYkoaed23zxJ1Xu7DbwtR88Lpm7Erj5ka%2BdQjICbYOkk6o3Cl1EhEr%2BK9IGngL%2BG%2FtGYHm%2F%2BTUUpDSqNI0ap4%2FkSINfEi1in3AhOz%2FGNYAPqFqyiUgg%2BEjTk86e%2FReJOIEYtWL1eta2HJ3%2BkB%2BuFEg7KSHDGrPuY3N7SM17jeSvGf%2BhWT7Yrmo3Xlsb1B6Vuu2%2BCgNo0UndshG8vMHX%2FMO7EyMAGOqUBqmv5%2FeTNGC4lQ1W6VLxkZKAgCQYfuDBoWih1ymIiCSBT56txcSIYcnZyS%2F33mVUEYsPVu54GpTXtBDKP%2FBPORIHAcBbPPETvCiRWGlXLHL5w%2FJ%2F2asS%2F13IpA7Idg1D%2BBSOmEBMWWnGSyjrlIw3nSV%2BeJJB8CzU%2BWd37jokCYiLQ%2BD3OT23RWc1rPRXOv7Z%2BZvTOBEEmJy8BRrE50wKZOn5jZwlg&X-Amz-Signature=31df731793cf9f74e9949c3f9ac6ed6dde4a06ea78218bbc4998be6a8ee1b5da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
