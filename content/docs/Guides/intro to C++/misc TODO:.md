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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C746R33%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA%2BGSYTzKcYHJTbY7K5Yfk5t6VCSh798vJ370%2BIvIvamAiEAxGT1Xf9T9lmk8bUsurPFRZ4YFM9Sx%2FDjoj3NaQhiaEsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCVvDb0dT9DUnHa3PyrcA6bLQhT4HEq3t4UGevFrX2KJqPT2%2FPN04JmSipNG5l%2B59GFxhjAIEF%2F38knXZTVvHW9p0rOSOInPiprkUIN5uWvTDFh36s6m7e0otOrBryjMRtd3OHgAiUi8C2I7x9p49WU%2Focjhh7tbY3%2BNPhxsJgMG8TTwoXsRLjCdn55bu%2FIdU8ndwnzvW6N9KGImAjoIJMK%2BDZTXhkY16%2BxafiN6biT%2Fi%2BGfU8gYrraxHpgOl%2BBkYd93ZKmiuQb10ZO9X8AnqKak0fyOme0qQZpH5RLUYUdkbuwNEZd7R3l8Hc5cbLna6fx5%2Fb7mh7cVidEB6tJ6lB9wTyDGHYBbztBtQksbFY1rnRkmtfgInu6hlrn1nZUCW2lRZENveOrTb1adU5vUvcwiBqgWwZOzvNoIBUIvphCoZXZMMJlxUAoHAOA0YAkMvMYXNxAcKARRox4AOkQtXeJhLON9Tb2LPbfquaNyf2S%2BhuHxQURXArc8WIcxzs65bOYdD0F2J5xmIsvOgz8E%2BTOsWCbyM1duzwPcPbICfPLpQmw6fTBDubcx4YoBCsIKY5EgJCncNtHo6n1grbGqSzoDRDeXq8sz6wzQlowvHxH7wtksj76TKUEwWsKYdfX5uhGuOIvCLMxzho0%2FMK3FzcEGOqUBnP4SE8imotJQWz4TDPl%2B5duBXT4rycjkZK%2FRuYPgSF5kbTY%2BHFfTo%2FJDam96B90XfaDwzZsV%2BBvt6Kp5ohz7uYlswdFoyXOm1ZQbCi99Ccxi%2F5iPHejLlKEAwu64J2Vz6oyUBa1ViuBOx65LiNTSDDF9VSxkanjk%2BQuFzlIWcg7cuWv2DfeYnV5jqMcsVkV6XbGKuKy%2Boq64udv5UDu%2BZwGTYy3A&X-Amz-Signature=e405f69ff2380b9d13eff3fa86f797420328e9b62b546f744989d86d6c9f6008&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C746R33%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA%2BGSYTzKcYHJTbY7K5Yfk5t6VCSh798vJ370%2BIvIvamAiEAxGT1Xf9T9lmk8bUsurPFRZ4YFM9Sx%2FDjoj3NaQhiaEsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCVvDb0dT9DUnHa3PyrcA6bLQhT4HEq3t4UGevFrX2KJqPT2%2FPN04JmSipNG5l%2B59GFxhjAIEF%2F38knXZTVvHW9p0rOSOInPiprkUIN5uWvTDFh36s6m7e0otOrBryjMRtd3OHgAiUi8C2I7x9p49WU%2Focjhh7tbY3%2BNPhxsJgMG8TTwoXsRLjCdn55bu%2FIdU8ndwnzvW6N9KGImAjoIJMK%2BDZTXhkY16%2BxafiN6biT%2Fi%2BGfU8gYrraxHpgOl%2BBkYd93ZKmiuQb10ZO9X8AnqKak0fyOme0qQZpH5RLUYUdkbuwNEZd7R3l8Hc5cbLna6fx5%2Fb7mh7cVidEB6tJ6lB9wTyDGHYBbztBtQksbFY1rnRkmtfgInu6hlrn1nZUCW2lRZENveOrTb1adU5vUvcwiBqgWwZOzvNoIBUIvphCoZXZMMJlxUAoHAOA0YAkMvMYXNxAcKARRox4AOkQtXeJhLON9Tb2LPbfquaNyf2S%2BhuHxQURXArc8WIcxzs65bOYdD0F2J5xmIsvOgz8E%2BTOsWCbyM1duzwPcPbICfPLpQmw6fTBDubcx4YoBCsIKY5EgJCncNtHo6n1grbGqSzoDRDeXq8sz6wzQlowvHxH7wtksj76TKUEwWsKYdfX5uhGuOIvCLMxzho0%2FMK3FzcEGOqUBnP4SE8imotJQWz4TDPl%2B5duBXT4rycjkZK%2FRuYPgSF5kbTY%2BHFfTo%2FJDam96B90XfaDwzZsV%2BBvt6Kp5ohz7uYlswdFoyXOm1ZQbCi99Ccxi%2F5iPHejLlKEAwu64J2Vz6oyUBa1ViuBOx65LiNTSDDF9VSxkanjk%2BQuFzlIWcg7cuWv2DfeYnV5jqMcsVkV6XbGKuKy%2Boq64udv5UDu%2BZwGTYy3A&X-Amz-Signature=d5cd626910a72c6c19a2a4348bc482402979f051c672d0acf36678eb0a81767a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
