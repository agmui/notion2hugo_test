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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBQKZ5E%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCA6OnTBsbmdpIXq672E2Oj0p98soMMwzOAIrud6%2FzQIgTq64DMP6JrmQGZfHftKdiQGtRmxHV6f2lBa1sxloOCgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRCOrsBvY5ImETL%2ByrcAxMOHLDuqMfNpQm9qD8meubSdceoDiHD1eZLOmiYdseHJ%2FnyKlo9X%2BWZN8pUUpqPJ4gHcA3fVDwqy9svxuA9jL5j0uby%2Br5v8EprHprmYvmFvIS4t%2FlJXPFIiXZxTNYZlKF1aq06ZP04jS6pbisHX6NR9OrKGXIaNB78U7D7vutD8Xz9GbxhU9VEY%2FJQZo9yCdglipIlYtumYkcuND3jY49j1eFj5X5No79NUNmIbJ5xViCN9pZCf93QULSoKeO6tEwePxvTvEZUhiIA2Ls72JoTHL%2Buoq1ZdNOnEjoBHOKSszb6RTI69JrV7FCigNf5%2Bqr03%2BA4Jfq6O%2Fphr%2B%2FC0Gzygw33103%2BrPGpyXSJF1xk8JAYS7iRf%2FrMX7AS1t6PBiMdecTDFRW8g8leQEwnXCqyVovMXv4X3I2AcppVybUVYZHC%2B0s74sdiWcJPX1khFocOSfpZQ%2FJKZA9Sfar14B8RMPC9QxWd9c8j9qGcHI4hvKS0w8zKQQmGPaVvSqldDQA2z65YnWS6hPPVvcl%2B8ukOEQWTGeJe4lzYj97gUND63Z%2FLX%2Bq27HwDzPCiEHxMrI22wm7s6iQo25slG1wJSoIPtEgGB6E34ndplMOg8rcKkcu2caiZOeLYxSOhMPT938EGOqUBeKpqsFFdxoySe8NWVZmDFHF3DfkijjxN5rDjc03NB6TP%2BMhB2PVVbSshXRTiAH2pTOt%2F64UKy%2BwMOHM7Kp%2F9xD757G2Gkh2w8%2BNk%2BmlozcFbk%2FV2NklO9dOC2WWyntpIL2pxd1Ow7QTaUCtuSx%2BX0MA6jMNFaXBvpMCq4ach%2BNC9wEI58uIJUNLQ2tDuYbn5UC1OrTj2bEvAIf7FwnOZQ3Q8ZetE&X-Amz-Signature=8e33884ac53bb706de492a7f76d4ad7c93c07d3c89438162dc8d11ad2260c6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBQKZ5E%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCA6OnTBsbmdpIXq672E2Oj0p98soMMwzOAIrud6%2FzQIgTq64DMP6JrmQGZfHftKdiQGtRmxHV6f2lBa1sxloOCgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRCOrsBvY5ImETL%2ByrcAxMOHLDuqMfNpQm9qD8meubSdceoDiHD1eZLOmiYdseHJ%2FnyKlo9X%2BWZN8pUUpqPJ4gHcA3fVDwqy9svxuA9jL5j0uby%2Br5v8EprHprmYvmFvIS4t%2FlJXPFIiXZxTNYZlKF1aq06ZP04jS6pbisHX6NR9OrKGXIaNB78U7D7vutD8Xz9GbxhU9VEY%2FJQZo9yCdglipIlYtumYkcuND3jY49j1eFj5X5No79NUNmIbJ5xViCN9pZCf93QULSoKeO6tEwePxvTvEZUhiIA2Ls72JoTHL%2Buoq1ZdNOnEjoBHOKSszb6RTI69JrV7FCigNf5%2Bqr03%2BA4Jfq6O%2Fphr%2B%2FC0Gzygw33103%2BrPGpyXSJF1xk8JAYS7iRf%2FrMX7AS1t6PBiMdecTDFRW8g8leQEwnXCqyVovMXv4X3I2AcppVybUVYZHC%2B0s74sdiWcJPX1khFocOSfpZQ%2FJKZA9Sfar14B8RMPC9QxWd9c8j9qGcHI4hvKS0w8zKQQmGPaVvSqldDQA2z65YnWS6hPPVvcl%2B8ukOEQWTGeJe4lzYj97gUND63Z%2FLX%2Bq27HwDzPCiEHxMrI22wm7s6iQo25slG1wJSoIPtEgGB6E34ndplMOg8rcKkcu2caiZOeLYxSOhMPT938EGOqUBeKpqsFFdxoySe8NWVZmDFHF3DfkijjxN5rDjc03NB6TP%2BMhB2PVVbSshXRTiAH2pTOt%2F64UKy%2BwMOHM7Kp%2F9xD757G2Gkh2w8%2BNk%2BmlozcFbk%2FV2NklO9dOC2WWyntpIL2pxd1Ow7QTaUCtuSx%2BX0MA6jMNFaXBvpMCq4ach%2BNC9wEI58uIJUNLQ2tDuYbn5UC1OrTj2bEvAIf7FwnOZQ3Q8ZetE&X-Amz-Signature=593279cbc187a814302e3ac9490190c8e698fad6882a544c0fc2355ed973879f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
