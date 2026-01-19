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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRDEURZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBESyudk%2FG6EQK%2BXB%2FMLY8R3ZcAi8yT9TIBHI8asDWgIgFQBKRbmzwpaWLdfTxXWItFnwI7rLsrCwTwVjJZG1SOgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSGul%2B2JfK%2BZBOiyrcA9ji4ZdP411Q6PJwNQgsnaTdF4x9dbGW%2Bzgj35lnFwY%2BC998aLdgGwj1S1vpgo74l53Jc9mpp2ZDAchnS%2BU4tbMJCdfnAOu7raJaPSD2ADHnmcq7BUiAdJMXyO3nCgn2TTA5LHE5ni9P5ZAGqhitgrH2HK4PaI0lyrkdZljvV1W6nfdJgSSghNcmoOlG9M5JRP46jWGq0tKXScX07z0UejGlArgP0iGzu0D3%2FzATxreLcFq3gzL4wVputaaBn6i3qvBCTTynYguxLLkr%2BUlyBbFLeL0crxRJsuDNkj4ALC3YjtBPEM09daY9aIigQKCm4qXwO7nlDzdbRQUE5YZnuQV2aSGVaOFBLh59JHYoRD0yqlbtD80Mk5dMBPPhr0PmJbR1SWokSzwXhJwjTCZ5B0Uy8Ktuh2sZAsf16ZpJs75XVj0N1PECqoWnM8MbntmTUljF9LuVsMuEyW3%2BU5rChfdqg%2B%2BP4p68SyFoHtRLUflQx2yhZoXNDbHy%2FpawolPSKrc1led2AQDezahQJkDx0mF%2F7c9xUqUH%2BUgMp0kFgOZTmqi0%2FtJRp4lRZ5U%2FOZsCKDp%2B%2Br9PhSGtSrSXDYXJLJb1e%2F98xmjXNS6q6AZHoZDLzHdg5VkAxk8xyNRoMLTdtcsGOqUBi3kYlzGdgmX0gMtIJdRDpq%2FymDQCJ6cCIq3%2BBhuZR38vTXDYStvKnmu8MQtnD%2FH4imKT7D1JPy1mWyUR0zo9uZV3Kagu3qY7ZTxrOp2%2FgrBA9Oyng1SLSkU6MFxQo2C6W%2F%2Fz4Bag7vt407rSTPiv0Wrofe%2FhkJ5Onrj%2B%2FuajMsis3%2FRw%2Fn7o65%2FbdGBao%2BAtT9P0qDGH5SEfIEyax3WA%2Bn09V21K&X-Amz-Signature=16bb58708e4e0b87d499e27882c21d3256d84522266e940da4936571af849b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRDEURZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBESyudk%2FG6EQK%2BXB%2FMLY8R3ZcAi8yT9TIBHI8asDWgIgFQBKRbmzwpaWLdfTxXWItFnwI7rLsrCwTwVjJZG1SOgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSGul%2B2JfK%2BZBOiyrcA9ji4ZdP411Q6PJwNQgsnaTdF4x9dbGW%2Bzgj35lnFwY%2BC998aLdgGwj1S1vpgo74l53Jc9mpp2ZDAchnS%2BU4tbMJCdfnAOu7raJaPSD2ADHnmcq7BUiAdJMXyO3nCgn2TTA5LHE5ni9P5ZAGqhitgrH2HK4PaI0lyrkdZljvV1W6nfdJgSSghNcmoOlG9M5JRP46jWGq0tKXScX07z0UejGlArgP0iGzu0D3%2FzATxreLcFq3gzL4wVputaaBn6i3qvBCTTynYguxLLkr%2BUlyBbFLeL0crxRJsuDNkj4ALC3YjtBPEM09daY9aIigQKCm4qXwO7nlDzdbRQUE5YZnuQV2aSGVaOFBLh59JHYoRD0yqlbtD80Mk5dMBPPhr0PmJbR1SWokSzwXhJwjTCZ5B0Uy8Ktuh2sZAsf16ZpJs75XVj0N1PECqoWnM8MbntmTUljF9LuVsMuEyW3%2BU5rChfdqg%2B%2BP4p68SyFoHtRLUflQx2yhZoXNDbHy%2FpawolPSKrc1led2AQDezahQJkDx0mF%2F7c9xUqUH%2BUgMp0kFgOZTmqi0%2FtJRp4lRZ5U%2FOZsCKDp%2B%2Br9PhSGtSrSXDYXJLJb1e%2F98xmjXNS6q6AZHoZDLzHdg5VkAxk8xyNRoMLTdtcsGOqUBi3kYlzGdgmX0gMtIJdRDpq%2FymDQCJ6cCIq3%2BBhuZR38vTXDYStvKnmu8MQtnD%2FH4imKT7D1JPy1mWyUR0zo9uZV3Kagu3qY7ZTxrOp2%2FgrBA9Oyng1SLSkU6MFxQo2C6W%2F%2Fz4Bag7vt407rSTPiv0Wrofe%2FhkJ5Onrj%2B%2FuajMsis3%2FRw%2Fn7o65%2FbdGBao%2BAtT9P0qDGH5SEfIEyax3WA%2Bn09V21K&X-Amz-Signature=138ec85144493a61e7349acbbd452a9f1f923dde90bd7d0f6ed16bff41bb5406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
