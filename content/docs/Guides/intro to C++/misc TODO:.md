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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFPRHOC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALYd3pQL3Pbn%2BpWdbUVI2tTK75SrOcXe74wdUacfJwOAiAo47lfCVLk6hgnAhLU5F0VV5gPmaq1uFY3KFuFECBcRCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTnVkTWEXbKmLVKArKtwDujvgaTPR3ZNw6KhwUaVhcp9usREziIwlmEYeeaHb45rmiLtUCUSgBDTV1NJB66tFlUXi0J0cDSs0vBr6m9aS3a6smzwHHN3UEwspTMW8z4hlTkmzOyHy8OAX3KedAu19zSnNm1hQRZnBJ2pXEOi%2BtjnSc5rOUUadS%2BUd64jWpgw5y%2FBuofj3mu2dLkcTHAgvdZRPjfCh5qLCg4pt%2BN%2BnD6kU8Bo5Dx6r4pSQfeqcTEmuxcfeLJ4xoejqpzJj1qq40gx8R2WSrzfugPFM3Gg6xlJU1ai66VqzKM5ZEeqBToMQi0lfEulNqlJXLIgiGdFyTU1BuleKbWNW08PEVIwa4Qb2KLM0bUOj7SwgnD2YR1lDX9wBShCh56ErgWAeS%2FylwyEN76ZxVMT5Dp4tcZ%2FsBYvHemV1ax34Khsbv6tD6PR0PqOyz1loPiuqnFBeOOQC%2BUlphas1Hqy3lT9k4lRU%2Bl61G0g5ke%2F1kbaUApjJpxIlkh9O6FgRsv7ApxDtETv6%2Bni6F4N0YFb%2FEgLH0efIZU8x8yeVUI3QkjPBPLvHhiyWpG33KFdmtINKzL6pSq6f4xtCMtMpBjSvFac0kEEy21K4LugDrDMXYNlruC8Sc4ISOpI6%2FR2wx5zpR6Mw%2B8XtwQY6pgGIUj8nsLfFl8rtFs7nQ14p2mr%2BULgIBd%2FCD6HvBbHltCLasj4P4DgY9oFS9gFTknfDytw8d2AkQ6BRifCL2bvW6Cu5vhYYg7ThcwWbLJ1X4f5Pg1vLZapxHAA7S4dHPwxjmMGFcdSkgfmzqXkdcEtsTMuXCgs7%2FCexTzopVj4Zk9zBxy%2BvP8BAaUFky9SsnVjtiMgnDYoqu76pDwUPC6jEL0jrzEy8&X-Amz-Signature=8f1108011efc1e867659611da710f42b377e11b8223229e23e45d379deaec7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFPRHOC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALYd3pQL3Pbn%2BpWdbUVI2tTK75SrOcXe74wdUacfJwOAiAo47lfCVLk6hgnAhLU5F0VV5gPmaq1uFY3KFuFECBcRCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTnVkTWEXbKmLVKArKtwDujvgaTPR3ZNw6KhwUaVhcp9usREziIwlmEYeeaHb45rmiLtUCUSgBDTV1NJB66tFlUXi0J0cDSs0vBr6m9aS3a6smzwHHN3UEwspTMW8z4hlTkmzOyHy8OAX3KedAu19zSnNm1hQRZnBJ2pXEOi%2BtjnSc5rOUUadS%2BUd64jWpgw5y%2FBuofj3mu2dLkcTHAgvdZRPjfCh5qLCg4pt%2BN%2BnD6kU8Bo5Dx6r4pSQfeqcTEmuxcfeLJ4xoejqpzJj1qq40gx8R2WSrzfugPFM3Gg6xlJU1ai66VqzKM5ZEeqBToMQi0lfEulNqlJXLIgiGdFyTU1BuleKbWNW08PEVIwa4Qb2KLM0bUOj7SwgnD2YR1lDX9wBShCh56ErgWAeS%2FylwyEN76ZxVMT5Dp4tcZ%2FsBYvHemV1ax34Khsbv6tD6PR0PqOyz1loPiuqnFBeOOQC%2BUlphas1Hqy3lT9k4lRU%2Bl61G0g5ke%2F1kbaUApjJpxIlkh9O6FgRsv7ApxDtETv6%2Bni6F4N0YFb%2FEgLH0efIZU8x8yeVUI3QkjPBPLvHhiyWpG33KFdmtINKzL6pSq6f4xtCMtMpBjSvFac0kEEy21K4LugDrDMXYNlruC8Sc4ISOpI6%2FR2wx5zpR6Mw%2B8XtwQY6pgGIUj8nsLfFl8rtFs7nQ14p2mr%2BULgIBd%2FCD6HvBbHltCLasj4P4DgY9oFS9gFTknfDytw8d2AkQ6BRifCL2bvW6Cu5vhYYg7ThcwWbLJ1X4f5Pg1vLZapxHAA7S4dHPwxjmMGFcdSkgfmzqXkdcEtsTMuXCgs7%2FCexTzopVj4Zk9zBxy%2BvP8BAaUFky9SsnVjtiMgnDYoqu76pDwUPC6jEL0jrzEy8&X-Amz-Signature=ff76da2475b939d4711953155c0a307572aabc2e59fe385d386080e0e29854af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
