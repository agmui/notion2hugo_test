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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFUZUUK%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICe9BuATAhylGjY%2FmHdiEsgGw1XBiLCACE7Wj5KQcfmtAiEAi8M34MIFEZFxpjjpu94xsmydpFJdytwNmvf3beSvbEAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2Fq3NjFyPgIomFIEircA4islOehaJfM0FQklJo5Q3RIMjWjsPVEcqVI2tF%2FtCqphkPugnNnyfPnuGrhUfl9xoenc%2BDxtG94W650hhDlaakgqKF970%2F%2FR72lNBda1BwpSS44%2BCRxLng3KcCwUiZHazQjr0q7RMuwuyPHLsTFTD3dW0pxLHOUGG8FJQ%2FwwVu44%2FlHrgl485E79am54FdIG%2FF24wXaBLm42N79MYerV%2FmjN3H%2B3p4E494BWLv8fWmaq0GGwIfW7xLQmHU2QvT5vrkhCIfXEwGy9Nt0b4X12KbLhuQaxD5gpnPg3E0tRpJLnQx8NWsCHGr2CBm%2BaT2fuFpNeSuMHm6nBno4sy3ZCLlMBvonW%2BHIIRTk7tNx0tLStTa%2B8FPXsN6pRQbjdTWik4q%2FcUUnlx3PTGbvSkWxzM59kwtNpRDmWh6mpaoAgOM7WqqFY00t1aCuILt%2F%2FsrMvbr2zcOURMRdi1p1aiIusJMu%2FhSsYvYXngbDVl1WfWnGe2r82aLI9b230hdW%2BlhRpWu%2FR0G0vJPDs5KZhCH3QJN9L8XZ1JrTU5E8gEnFd4YmIhQvuPGijboUlPrS1%2BkQVgFjjWYoXh51B3DAarJUBlDg%2FCMAHGVSAovcyU0XABNJn7KBMp%2B6ezj1STd1MNL%2Ft8YGOqUBgoOef0Wn1NW4Vb1lIKwiienw9VPZr2qBPylD1liUCCfjM9j017YO7kZoRqFAXrILmclCBMKGXbKhRZINBdPw%2Bclylp1v%2BrdQi1a1xTRhgmq63%2F8QOPbjj6ebw82hGZ85RHDhL1fXaOOsma9Ebo05bUnAUgLSQQYPgYnp%2FZy6rgMinU8QwG9%2BU%2BqiF455F1w%2FyAJCWBHlafRGSdHfbCbn56yb3d5E&X-Amz-Signature=525f032d98eb1afac81584cf2ab9d3a918c4f5f194ac07c79c6113f73ae9213d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFUZUUK%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICe9BuATAhylGjY%2FmHdiEsgGw1XBiLCACE7Wj5KQcfmtAiEAi8M34MIFEZFxpjjpu94xsmydpFJdytwNmvf3beSvbEAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2Fq3NjFyPgIomFIEircA4islOehaJfM0FQklJo5Q3RIMjWjsPVEcqVI2tF%2FtCqphkPugnNnyfPnuGrhUfl9xoenc%2BDxtG94W650hhDlaakgqKF970%2F%2FR72lNBda1BwpSS44%2BCRxLng3KcCwUiZHazQjr0q7RMuwuyPHLsTFTD3dW0pxLHOUGG8FJQ%2FwwVu44%2FlHrgl485E79am54FdIG%2FF24wXaBLm42N79MYerV%2FmjN3H%2B3p4E494BWLv8fWmaq0GGwIfW7xLQmHU2QvT5vrkhCIfXEwGy9Nt0b4X12KbLhuQaxD5gpnPg3E0tRpJLnQx8NWsCHGr2CBm%2BaT2fuFpNeSuMHm6nBno4sy3ZCLlMBvonW%2BHIIRTk7tNx0tLStTa%2B8FPXsN6pRQbjdTWik4q%2FcUUnlx3PTGbvSkWxzM59kwtNpRDmWh6mpaoAgOM7WqqFY00t1aCuILt%2F%2FsrMvbr2zcOURMRdi1p1aiIusJMu%2FhSsYvYXngbDVl1WfWnGe2r82aLI9b230hdW%2BlhRpWu%2FR0G0vJPDs5KZhCH3QJN9L8XZ1JrTU5E8gEnFd4YmIhQvuPGijboUlPrS1%2BkQVgFjjWYoXh51B3DAarJUBlDg%2FCMAHGVSAovcyU0XABNJn7KBMp%2B6ezj1STd1MNL%2Ft8YGOqUBgoOef0Wn1NW4Vb1lIKwiienw9VPZr2qBPylD1liUCCfjM9j017YO7kZoRqFAXrILmclCBMKGXbKhRZINBdPw%2Bclylp1v%2BrdQi1a1xTRhgmq63%2F8QOPbjj6ebw82hGZ85RHDhL1fXaOOsma9Ebo05bUnAUgLSQQYPgYnp%2FZy6rgMinU8QwG9%2BU%2BqiF455F1w%2FyAJCWBHlafRGSdHfbCbn56yb3d5E&X-Amz-Signature=6f256b38e16aad4d1f964df8b4faad375a8f0fa9deb1f41d84bfe3d01038ae07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
