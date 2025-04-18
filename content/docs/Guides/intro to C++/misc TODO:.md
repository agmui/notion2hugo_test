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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7AGP5K%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsuA8UxtDm%2BEBhWlpP40s%2F9e8X7PT1H%2BwijeFoUCi3gwIgeMnjgbmbIYYwTO4%2Flr3tPBQbICXV4P5JTx191AtZE3oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMza%2ByddKuST5OOcwSrcA8w7t6yeW5vsph5JQtiHQahlWKcXih61nxSQJBCBlVBbCqMHPDpZGTtwllWao5TpVeJvxCV%2FuS%2ByOnMuuAa%2BuzJMWSxY3NORhVe8R1PuJ6KFnP%2BTrUkC5bi13T5m%2BnvHRdEr7Darvx9%2F3P%2B7QACqV7Ns0PZ7qiM87zWOs33is5vLqMdzLTpbbUCmDQ1qezSf9W1tD7wqTNLauJTeQOZc%2B2zQWqzcahWO8d0SEOUj7ZdHjNy4XZ%2B2iLIFtULS0jzhZaDaDtd4sJYPelzwY34%2Bdi%2B5nBp9dA16GH6APq1g3IQE5lcP0LLeizVESanymod%2FQTJiEeSJFw7iahs6LSqmQO2V9%2Bnau%2BlUTTjDRJYEzYvgXeoq2SaVQhzH5ZCFxqXRPXA%2BZw4HPrbzUF6livtYbuNYT6s5RMEBJBjZ9W9OL0Tz%2BPWBy9jeSS9Jp4v2uT66aO9Iw9IqP1TeborDNlb3MhFIV0nFKpTS3c9pf12O3IiTP%2F24AY%2FlOGBYVSxk1usrkCktpsRp2%2FvHhAtYbnTZ%2FWiXXRB4zy0MzAVr1zBAC8MAnSNOOKgMW0ncn9kgzM3mC2jWmf6nQlRtBOfcDR8gx6FiP9gxN1Y6C%2FrUfxg6h68%2Fe%2FDQ2b%2BNsz8c2gSqMPj1iMAGOqUBLBrgdK31kFaWg69P57BmDJbQjj7X04ivvBQ3uFbxf%2BQ0ztAUMqwHxSjRTbezbR1zVmsvwzfhvNO5rRhJLRoG9T7pf6k4vtGI46tBUeTVw5ByqxqgLNuaBHRmjCnDlfZ2MjdkmgVmTVi445C1aetr5eiWtpcQSFnc7%2BB6T8zN6yem2gZo%2BAKmdnLSuCzHeE3rDu2ZIOPxR7n3GRbs6ytMCpxNkDoq&X-Amz-Signature=99d0c7ac58aa382a762e39978dcd819d252e0371d470cfa514c795366fea7fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7AGP5K%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsuA8UxtDm%2BEBhWlpP40s%2F9e8X7PT1H%2BwijeFoUCi3gwIgeMnjgbmbIYYwTO4%2Flr3tPBQbICXV4P5JTx191AtZE3oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMza%2ByddKuST5OOcwSrcA8w7t6yeW5vsph5JQtiHQahlWKcXih61nxSQJBCBlVBbCqMHPDpZGTtwllWao5TpVeJvxCV%2FuS%2ByOnMuuAa%2BuzJMWSxY3NORhVe8R1PuJ6KFnP%2BTrUkC5bi13T5m%2BnvHRdEr7Darvx9%2F3P%2B7QACqV7Ns0PZ7qiM87zWOs33is5vLqMdzLTpbbUCmDQ1qezSf9W1tD7wqTNLauJTeQOZc%2B2zQWqzcahWO8d0SEOUj7ZdHjNy4XZ%2B2iLIFtULS0jzhZaDaDtd4sJYPelzwY34%2Bdi%2B5nBp9dA16GH6APq1g3IQE5lcP0LLeizVESanymod%2FQTJiEeSJFw7iahs6LSqmQO2V9%2Bnau%2BlUTTjDRJYEzYvgXeoq2SaVQhzH5ZCFxqXRPXA%2BZw4HPrbzUF6livtYbuNYT6s5RMEBJBjZ9W9OL0Tz%2BPWBy9jeSS9Jp4v2uT66aO9Iw9IqP1TeborDNlb3MhFIV0nFKpTS3c9pf12O3IiTP%2F24AY%2FlOGBYVSxk1usrkCktpsRp2%2FvHhAtYbnTZ%2FWiXXRB4zy0MzAVr1zBAC8MAnSNOOKgMW0ncn9kgzM3mC2jWmf6nQlRtBOfcDR8gx6FiP9gxN1Y6C%2FrUfxg6h68%2Fe%2FDQ2b%2BNsz8c2gSqMPj1iMAGOqUBLBrgdK31kFaWg69P57BmDJbQjj7X04ivvBQ3uFbxf%2BQ0ztAUMqwHxSjRTbezbR1zVmsvwzfhvNO5rRhJLRoG9T7pf6k4vtGI46tBUeTVw5ByqxqgLNuaBHRmjCnDlfZ2MjdkmgVmTVi445C1aetr5eiWtpcQSFnc7%2BB6T8zN6yem2gZo%2BAKmdnLSuCzHeE3rDu2ZIOPxR7n3GRbs6ytMCpxNkDoq&X-Amz-Signature=ed561164549a1d4c9ca909e8384c4d0e018789b34c916c8d0b9125bc50d09865&X-Amz-SignedHeaders=host&x-id=GetObject)

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
