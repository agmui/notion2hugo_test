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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD45TWGO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDr865WeSIQCjiQ6BDoZ0SqMBdzlD5g2YVSp1hNFpdDyAiEAyYX3zTot%2FG%2FhYmvHPO0fSBtjCBERL7eVwg2kW7HbwlUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNov76BZOOcH8bLHZSrcA1%2BemwmcJKSCSSi31RawOmwUYw5Mp06H86exU%2BsHCZxg9n6ASnjNIXUmdqquEeJ8ZjAeRyL7LAiw3uo1DfTKL2uF6R6QPQzc3RWdJp3uJGIcm4B6PYXmSTqaAkxLsdd8W1jJw1eeHUOfuGLoCc83FBhZyC6MMSJt8bUnPe4rK62CzKeugNf7g%2B29pDSZt8%2B7T346so%2Fvlwmgpt1eNOwpsB9FgD8VoYmvZz3y3eisEYRIdQDMo3pyWMRAeoCRRUttOY2bFSuHBfQ60aERfbWbQ1yUI2qwSHGgRS9%2FCPU%2Bn%2FBdqEcGn8RmRpsddIpgwJhuog8dD5wmXuuWFvmyEhNBZt59NqMDdIAmNIHxL52B15tmRcEcgKxBYPBM%2FVc8aOjBtZ47mkKMRxi3ghr3%2BbaZUL14V1G0uXXy8oQuqyZolm8sX3L2%2FdQBvmAn8fND2A077MO5X2AnaKf70wvmqZ0yCQ0btBgy4VxsxiU6im6jEBu8%2FPpfaa79qijQF8wM7EgGyowscnzYIcd1imraB9l8i8hMBzUedsVUVAdkspCIuocyyeLNLwJD2Xqs13m7meppgEDmpV3oDKy7Y5AxxqqNxHw2BknDKL90FuzmK%2BmhUowWCfLzZ7v%2BmMCoOEenMOS35cMGOqUBs%2F7hi7sJRA6lmPJE00uYC3sVMW5sEbe1dkk2VC%2Bcc8RNtASDxH%2BkDCtgNU4H%2Bqa6Nr5h4MI0MIE2%2BHT%2BhX0MGj8%2F1EgcbqDY91GyTiqWqXkiycvF60f3rNZ3FyZYhgT2Un6pqJ2sDEU%2B1eemh1sABkP0aLMqW1tzamLvarBiYBbJm95xr1%2FFBrQhDgA8T0NAkiC7FO%2BajLoULGC2DWQJx3%2BltDSW&X-Amz-Signature=64b73202d65ba8fe0983a1c6b60111faf5457d655c76080067ff80b2ae7b33a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD45TWGO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDr865WeSIQCjiQ6BDoZ0SqMBdzlD5g2YVSp1hNFpdDyAiEAyYX3zTot%2FG%2FhYmvHPO0fSBtjCBERL7eVwg2kW7HbwlUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNov76BZOOcH8bLHZSrcA1%2BemwmcJKSCSSi31RawOmwUYw5Mp06H86exU%2BsHCZxg9n6ASnjNIXUmdqquEeJ8ZjAeRyL7LAiw3uo1DfTKL2uF6R6QPQzc3RWdJp3uJGIcm4B6PYXmSTqaAkxLsdd8W1jJw1eeHUOfuGLoCc83FBhZyC6MMSJt8bUnPe4rK62CzKeugNf7g%2B29pDSZt8%2B7T346so%2Fvlwmgpt1eNOwpsB9FgD8VoYmvZz3y3eisEYRIdQDMo3pyWMRAeoCRRUttOY2bFSuHBfQ60aERfbWbQ1yUI2qwSHGgRS9%2FCPU%2Bn%2FBdqEcGn8RmRpsddIpgwJhuog8dD5wmXuuWFvmyEhNBZt59NqMDdIAmNIHxL52B15tmRcEcgKxBYPBM%2FVc8aOjBtZ47mkKMRxi3ghr3%2BbaZUL14V1G0uXXy8oQuqyZolm8sX3L2%2FdQBvmAn8fND2A077MO5X2AnaKf70wvmqZ0yCQ0btBgy4VxsxiU6im6jEBu8%2FPpfaa79qijQF8wM7EgGyowscnzYIcd1imraB9l8i8hMBzUedsVUVAdkspCIuocyyeLNLwJD2Xqs13m7meppgEDmpV3oDKy7Y5AxxqqNxHw2BknDKL90FuzmK%2BmhUowWCfLzZ7v%2BmMCoOEenMOS35cMGOqUBs%2F7hi7sJRA6lmPJE00uYC3sVMW5sEbe1dkk2VC%2Bcc8RNtASDxH%2BkDCtgNU4H%2Bqa6Nr5h4MI0MIE2%2BHT%2BhX0MGj8%2F1EgcbqDY91GyTiqWqXkiycvF60f3rNZ3FyZYhgT2Un6pqJ2sDEU%2B1eemh1sABkP0aLMqW1tzamLvarBiYBbJm95xr1%2FFBrQhDgA8T0NAkiC7FO%2BajLoULGC2DWQJx3%2BltDSW&X-Amz-Signature=326f254c12c1e35e2a24791babf290b0c3fbcbf6f809bbc331218923b6b89612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
