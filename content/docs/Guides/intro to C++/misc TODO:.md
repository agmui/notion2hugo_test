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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWANJ4MZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sQ9grKrplN2ixD%2BgK2Ctj0c7tZEsnXT3ZREliyAUJAiEAn%2FT0iQUhMOBKKYJgD5mr9xfwzbRlUdOSeEDsYQhShIUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKt7tAKK7YiHvxq7sircAym8x%2FjQdqCHepqxpXOqyPkrTIcJoF9CcAGFp5dlz%2BcE0%2FNJfVhc0l2GVKGJXlyG66dDv5bb8qmTSLVNsMsGcdsCpvDmMmfSK1HLCnv75sWk7CHP%2BWljiLOVPP7LaElWmiNHmznBt%2FCipPTtFtKavte%2B014Ys6ula1xHgLf%2BUG1ETt410Bwgc0jNFmLN5wkIr%2FYLpxqBEed7AY1H0xkziE5MjNxLYOa7ra3AijzDpuzWhgO1HkoZh3ziro8Gm9xduHybu2G86NMBlQmW2ExZDrqW3pewqmxWAVZjms8udDE0Y4ba%2Fll2aD2DIrXDJrdZsvlPSNCFtIip%2FCpljg1Ytf7rE7Lw%2FHWOQ68VNASQCeHgvOwbLudtnpurK5QsQQhdeWYLyEBKsxX8QQeRuHJp%2F0qSGgz5vMskPD0h21sTWIIWz974MBIcgC1W7kVJJCRKkBl2n7L3MV3OqSzANaQ1%2Fay2a4D9E%2FBsGcMOs87c4%2BIxwoVaUlwm5BSzJkLpT%2F95etGrBoUdGTROIZDTxK%2BbY2oTV%2B%2BXMUBj75X7RNxSQxfuykNZuEzlZzTXmLM%2Bq%2BGFZ824Osx7NSBC7qneqtXqTXqnTd8Eh1wEDvRpmTrRyBKF2xQLic6guur4jAU4MPrq2cEGOqUBwLgrT1MCcrkABgQE4kQhEQraRDNK%2F3YaEJ1Fs2B%2BrFGJ3Yvw07NULid%2Fi4gOZelEMu3zUuwDBgKKKWlrQ2fRfyisjvHa6AgSRSgkN7aaLs5EyO4C96svmrFznGFxzuL0aVulLDLki1pKspvTSeBeiW8OnA71Kk7GINq3nXu3%2FtzlF1er%2BFHdKfqplDySvO2vwOBrq5T9FAFl7pJ3CCqM4Aq0oLPt&X-Amz-Signature=ca7e23ac978ce4beb6394a207aa2bcd49e186a10375d3522a8fbd4ef5f0b0e87&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWANJ4MZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sQ9grKrplN2ixD%2BgK2Ctj0c7tZEsnXT3ZREliyAUJAiEAn%2FT0iQUhMOBKKYJgD5mr9xfwzbRlUdOSeEDsYQhShIUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKt7tAKK7YiHvxq7sircAym8x%2FjQdqCHepqxpXOqyPkrTIcJoF9CcAGFp5dlz%2BcE0%2FNJfVhc0l2GVKGJXlyG66dDv5bb8qmTSLVNsMsGcdsCpvDmMmfSK1HLCnv75sWk7CHP%2BWljiLOVPP7LaElWmiNHmznBt%2FCipPTtFtKavte%2B014Ys6ula1xHgLf%2BUG1ETt410Bwgc0jNFmLN5wkIr%2FYLpxqBEed7AY1H0xkziE5MjNxLYOa7ra3AijzDpuzWhgO1HkoZh3ziro8Gm9xduHybu2G86NMBlQmW2ExZDrqW3pewqmxWAVZjms8udDE0Y4ba%2Fll2aD2DIrXDJrdZsvlPSNCFtIip%2FCpljg1Ytf7rE7Lw%2FHWOQ68VNASQCeHgvOwbLudtnpurK5QsQQhdeWYLyEBKsxX8QQeRuHJp%2F0qSGgz5vMskPD0h21sTWIIWz974MBIcgC1W7kVJJCRKkBl2n7L3MV3OqSzANaQ1%2Fay2a4D9E%2FBsGcMOs87c4%2BIxwoVaUlwm5BSzJkLpT%2F95etGrBoUdGTROIZDTxK%2BbY2oTV%2B%2BXMUBj75X7RNxSQxfuykNZuEzlZzTXmLM%2Bq%2BGFZ824Osx7NSBC7qneqtXqTXqnTd8Eh1wEDvRpmTrRyBKF2xQLic6guur4jAU4MPrq2cEGOqUBwLgrT1MCcrkABgQE4kQhEQraRDNK%2F3YaEJ1Fs2B%2BrFGJ3Yvw07NULid%2Fi4gOZelEMu3zUuwDBgKKKWlrQ2fRfyisjvHa6AgSRSgkN7aaLs5EyO4C96svmrFznGFxzuL0aVulLDLki1pKspvTSeBeiW8OnA71Kk7GINq3nXu3%2FtzlF1er%2BFHdKfqplDySvO2vwOBrq5T9FAFl7pJ3CCqM4Aq0oLPt&X-Amz-Signature=8d25a6ab00ce4268423964381cb65f711207d5d9271b118f20c2e0e6ad74dfed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
