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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635A2FP7B%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkBGLL3fw1DwaEGktbNjIzSMlr96AW%2B8mRPunZHXDYkAiEAgQv%2FCw9QSPdQOVRXX%2Fm3OKR81oCwxxrZrHuMAZhw%2F8Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPjui%2BG8YfVTHfXtpSrcA5PeG9wTVqD9%2BgkmaMWsmne16lcMxn9iexK%2FLeVbz81Mfu1gItVbJ3WqNk461GHWHUacbOKvbQAIrq%2B%2FwhQBCpsctPZqVk3%2FJJdjP6ECMB90ZHQehbMx1uP37U4AiVV%2BoDvFXYQCYVx1xHznx2ZD4miyUrlIqjtIaHpXLJT5gbX%2BdB0sSEdnbI65%2FQLKXSCkWE9mIddtTEncgWBCSZ4BSxH1Ea7npIBLWJV%2F7KQlqTMUdJ2bn0o1vTrR5e%2FRpoYZbnpZmKOQ1reBAgHNLBzLpkgfpgrM%2Bst68eQw4SiqmiU9bPi8M0waeXvuCuXxze2dud0wV1P%2BeoooNiYAky4t3zIlqsOv5PStVr7n7EVoyJ7E%2BJZxsClvrfIYC52MoHiak6ytYxWy7u6QTitzwIUoumj9zBd72OZROdaag69g1rgjHjRFoff2EAxm2LDZaYW4k6JGMOpbMGHLDB4TtmBFnwBUqYhczKkTdcM2i3pRwlI0R6%2FnyZYMibS7WbHFnBWnh%2FFGOKyTAheDKuA6Wx2Ph1uJIa4YCTXaqQZObvi6dvq8seM%2B%2Fz2rCB11uUYbllL2m%2BnjRz9rPQO2JDvzOBuAo7QhuS03B5y%2FK%2BuS%2BmiNhS3db1oEdftyFLouF%2BYjMJfey8EGOqUBZbookZEJrOTh7isIHrd%2FhNZXOKi%2FfNsnntEk%2BJGb2XH%2F92wVNYuMADeHAxEkZ4wLDs97myp3zmXFS5XQtzIc8hI7m6t2K5kMXwrvaH6IC7%2BVEfnqF%2BhMAZE%2ByDr0iAfbstvTDTrU%2BzEV8a5Wr8GBgu6znTS1%2BwVB4RKp1%2BeF%2FHTvmVNAA00wRKBodWpWgo7WDhQ8hLZQRqZIppylhzmoJb97F%2FRT&X-Amz-Signature=593c2d175e5b07c107aeb6ce5d1d642820a1cb1d47f4ff54de57669f35fd1999&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635A2FP7B%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkBGLL3fw1DwaEGktbNjIzSMlr96AW%2B8mRPunZHXDYkAiEAgQv%2FCw9QSPdQOVRXX%2Fm3OKR81oCwxxrZrHuMAZhw%2F8Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPjui%2BG8YfVTHfXtpSrcA5PeG9wTVqD9%2BgkmaMWsmne16lcMxn9iexK%2FLeVbz81Mfu1gItVbJ3WqNk461GHWHUacbOKvbQAIrq%2B%2FwhQBCpsctPZqVk3%2FJJdjP6ECMB90ZHQehbMx1uP37U4AiVV%2BoDvFXYQCYVx1xHznx2ZD4miyUrlIqjtIaHpXLJT5gbX%2BdB0sSEdnbI65%2FQLKXSCkWE9mIddtTEncgWBCSZ4BSxH1Ea7npIBLWJV%2F7KQlqTMUdJ2bn0o1vTrR5e%2FRpoYZbnpZmKOQ1reBAgHNLBzLpkgfpgrM%2Bst68eQw4SiqmiU9bPi8M0waeXvuCuXxze2dud0wV1P%2BeoooNiYAky4t3zIlqsOv5PStVr7n7EVoyJ7E%2BJZxsClvrfIYC52MoHiak6ytYxWy7u6QTitzwIUoumj9zBd72OZROdaag69g1rgjHjRFoff2EAxm2LDZaYW4k6JGMOpbMGHLDB4TtmBFnwBUqYhczKkTdcM2i3pRwlI0R6%2FnyZYMibS7WbHFnBWnh%2FFGOKyTAheDKuA6Wx2Ph1uJIa4YCTXaqQZObvi6dvq8seM%2B%2Fz2rCB11uUYbllL2m%2BnjRz9rPQO2JDvzOBuAo7QhuS03B5y%2FK%2BuS%2BmiNhS3db1oEdftyFLouF%2BYjMJfey8EGOqUBZbookZEJrOTh7isIHrd%2FhNZXOKi%2FfNsnntEk%2BJGb2XH%2F92wVNYuMADeHAxEkZ4wLDs97myp3zmXFS5XQtzIc8hI7m6t2K5kMXwrvaH6IC7%2BVEfnqF%2BhMAZE%2ByDr0iAfbstvTDTrU%2BzEV8a5Wr8GBgu6znTS1%2BwVB4RKp1%2BeF%2FHTvmVNAA00wRKBodWpWgo7WDhQ8hLZQRqZIppylhzmoJb97F%2FRT&X-Amz-Signature=2aa1c226922e9d743d23aa765dc5647285a0fbce84a98b947fd5ae7f28bba48c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
