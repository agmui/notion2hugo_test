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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3J7Y3I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPe9s%2FR9LkOTglyASn24deW7lPFofQDYbSHzUjsH1GsAiEAneO69krdXBjWnB5MlAVqBJYrQr4g89nzbaixinIARtUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCO3NqySBTf79LfFRSrcAy4tupfYl9vEoI2VVm%2FJlAb1ylDvx4mEARzE6HmB%2Bqe0jB0R5kZhq8k9Wf44VPe8yCx4KAfIiwBVfYpF31%2FGIbTmzhso1BHG3yaE4Ig6OtLOVWatOJapeVJJsGcutC56SdYQD%2BfTCDvV4ZIBGwFUTm9YPdNnBtG%2FR0TJ1EQecZ5DynCqUNuaufJ258EMVNlcTEGzBdWPMBSACIxcd1tnS34gNlc5syEbRWtdIyIuTusCDJyQ61qFe8%2BdkGtRifvHeMDjLm8L1zfTbHQiC5xH5kGpuT4vPR4lb9vQms1pOIE%2FsqKilTwYeTwE6jhGZ0JM8uiIwRJnTtX9GARqy5Vz1PSuQZpfyNEcH4lOmUVNNJrYR2VpoH9fuJQINCqMHVgcTzyFR2LpW%2FpFaGejHXVPn3wZBQigjNsAlpLDwAwf4DyQ8Ed06SVql4ZIVvgD5IOi4x%2BqhVX95oa34qiRtEnkU8YTmXmIsxiHaxjM%2BN8usdkJVWRFYJ7F2CtgYN86DNAR8874QfT%2FtJKCJD3a1Kmo%2BLrwFQCDTZqd%2BRYe0RRliA7QGy4pfP%2BLqT5KSvlzg52Yo4gJSaWLAQMya4SGNxeeKuj1A%2BCX9ion9EzwzGf5IdJVdFHPkXfqonbC8p4lMPS38b0GOqUBRsHgOUp4u%2BZWHsm0dHrGA7lm6uOgjf8msBZdF9HxwJLOejjLO6K%2Fj1Ie8gMsWH6cC2TrmXd%2FeUUfHcY2IVexCN7BJP5j%2B8EkFMlFtapAwr%2F%2BiGxBnM8vlY8eim4ZRzFtfaOyT9bYj5fuH4XtT%2FDGIfkkixIPIZv8iS0Z3RKZsM7QqxB77VWcgBRQEnyrziRofu3m2rIluzmgmgrxrz0VkU%2Bhu%2BTx&X-Amz-Signature=f2d5428d43bd8c374502f5126525b1b8ebff37d96d4f65032cf182e01b6ba2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3J7Y3I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPe9s%2FR9LkOTglyASn24deW7lPFofQDYbSHzUjsH1GsAiEAneO69krdXBjWnB5MlAVqBJYrQr4g89nzbaixinIARtUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCO3NqySBTf79LfFRSrcAy4tupfYl9vEoI2VVm%2FJlAb1ylDvx4mEARzE6HmB%2Bqe0jB0R5kZhq8k9Wf44VPe8yCx4KAfIiwBVfYpF31%2FGIbTmzhso1BHG3yaE4Ig6OtLOVWatOJapeVJJsGcutC56SdYQD%2BfTCDvV4ZIBGwFUTm9YPdNnBtG%2FR0TJ1EQecZ5DynCqUNuaufJ258EMVNlcTEGzBdWPMBSACIxcd1tnS34gNlc5syEbRWtdIyIuTusCDJyQ61qFe8%2BdkGtRifvHeMDjLm8L1zfTbHQiC5xH5kGpuT4vPR4lb9vQms1pOIE%2FsqKilTwYeTwE6jhGZ0JM8uiIwRJnTtX9GARqy5Vz1PSuQZpfyNEcH4lOmUVNNJrYR2VpoH9fuJQINCqMHVgcTzyFR2LpW%2FpFaGejHXVPn3wZBQigjNsAlpLDwAwf4DyQ8Ed06SVql4ZIVvgD5IOi4x%2BqhVX95oa34qiRtEnkU8YTmXmIsxiHaxjM%2BN8usdkJVWRFYJ7F2CtgYN86DNAR8874QfT%2FtJKCJD3a1Kmo%2BLrwFQCDTZqd%2BRYe0RRliA7QGy4pfP%2BLqT5KSvlzg52Yo4gJSaWLAQMya4SGNxeeKuj1A%2BCX9ion9EzwzGf5IdJVdFHPkXfqonbC8p4lMPS38b0GOqUBRsHgOUp4u%2BZWHsm0dHrGA7lm6uOgjf8msBZdF9HxwJLOejjLO6K%2Fj1Ie8gMsWH6cC2TrmXd%2FeUUfHcY2IVexCN7BJP5j%2B8EkFMlFtapAwr%2F%2BiGxBnM8vlY8eim4ZRzFtfaOyT9bYj5fuH4XtT%2FDGIfkkixIPIZv8iS0Z3RKZsM7QqxB77VWcgBRQEnyrziRofu3m2rIluzmgmgrxrz0VkU%2Bhu%2BTx&X-Amz-Signature=4d7db3ecff339a04f65e26e676496084a2b9e504e7f832b9a675b9e2288a4807&X-Amz-SignedHeaders=host&x-id=GetObject)

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
