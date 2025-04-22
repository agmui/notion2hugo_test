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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSPAAEO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFJA829L3yY0DE4Btzi5ZOeeBrpLQiISg6M7zobSJXLXAiEAqFNyF%2F5lsb1cBcGcOgCZP6EgvpWFfb8b043ueU4RuZgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcfvJ7nCSeDluvwaircAwrcbdrCsMJJMehopvp6TntdUIA6K3nEEmRUJmJpcp35VV5lUHTgdZD64TS8w%2B661wlTXVnaP800NecYqobDQgO%2FUH81oqEhwLkj8lgZ0DIlmB%2BW4kKjX3pIckhUlHwh9hS%2Bc2%2FLHXwBb8ZUGhYxrSgGxHK6iY65%2F%2FLYWruDzv9JzF1hRaN4pCUT%2BrxO7Cpfr%2FB63hz7ROzZIPSK63NjIQj2NjAHmDBGZMb3F%2Fyyo34mrWT5wQH4oGXPeF05V%2FZ4%2Fa21zMwVSvrQMaSEyNw0w4VwvXaC6OAkZ3JxIPwEZ0gFU%2BzCZM44ok%2BnBt5JklEGAg7onTQbrpJl6oyV9kJa%2BWEbkcY1tO5UopcinJsSggOB3%2BSqHkwp6CqDt%2B64u0xXTz6BFOMrBLqbHteJCOeX4Wy3aOESMoJ29ACNjMPDiTjqm4MxUxIPbV89pJHM4rgzDZ8koNvVM45e9tQaTCt9PV%2FYEdGBzVIsOSUdcwTSPLETgj24xEwS2HivejEAVirP%2Btz3jWtyOXi%2BoPRBVRqfh4LBRbZcan1pTDXAaa0JaPJuDNdcpwhxDf4Eelo4E8DQ3Q1Ux%2FmddI616zgj8B9CWaJxhxy46QuZu77%2FtWjotIzqPV0TN1TuTS6nNGcwMMOPnsAGOqUBiarsGAz3ccmUPeHLPXuo8FDmNKc%2BaZ7HRpDlahNa5GJ%2Bq%2BseBb8v6jNgzPpkIiqRSjDzxM7%2BVoKRRO0KC%2BxwRZ%2Bw%2BVzzBvv%2FeZf4r%2BfHpCFj38OsSRLpKkX%2B85Uq3S0JyK3FnnPtaA2R%2B14opJwpBi5f09JWwcSNtcaNCU365IiuVX9UizDr50g6QqkGEYce389JvvXtjm6yGD7Wh8TJyH9R7JhL&X-Amz-Signature=7bc28d9087a4d7e348a586dd55207e501df52e4fdfc42e9fac0ffe1372caa070&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSPAAEO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFJA829L3yY0DE4Btzi5ZOeeBrpLQiISg6M7zobSJXLXAiEAqFNyF%2F5lsb1cBcGcOgCZP6EgvpWFfb8b043ueU4RuZgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcfvJ7nCSeDluvwaircAwrcbdrCsMJJMehopvp6TntdUIA6K3nEEmRUJmJpcp35VV5lUHTgdZD64TS8w%2B661wlTXVnaP800NecYqobDQgO%2FUH81oqEhwLkj8lgZ0DIlmB%2BW4kKjX3pIckhUlHwh9hS%2Bc2%2FLHXwBb8ZUGhYxrSgGxHK6iY65%2F%2FLYWruDzv9JzF1hRaN4pCUT%2BrxO7Cpfr%2FB63hz7ROzZIPSK63NjIQj2NjAHmDBGZMb3F%2Fyyo34mrWT5wQH4oGXPeF05V%2FZ4%2Fa21zMwVSvrQMaSEyNw0w4VwvXaC6OAkZ3JxIPwEZ0gFU%2BzCZM44ok%2BnBt5JklEGAg7onTQbrpJl6oyV9kJa%2BWEbkcY1tO5UopcinJsSggOB3%2BSqHkwp6CqDt%2B64u0xXTz6BFOMrBLqbHteJCOeX4Wy3aOESMoJ29ACNjMPDiTjqm4MxUxIPbV89pJHM4rgzDZ8koNvVM45e9tQaTCt9PV%2FYEdGBzVIsOSUdcwTSPLETgj24xEwS2HivejEAVirP%2Btz3jWtyOXi%2BoPRBVRqfh4LBRbZcan1pTDXAaa0JaPJuDNdcpwhxDf4Eelo4E8DQ3Q1Ux%2FmddI616zgj8B9CWaJxhxy46QuZu77%2FtWjotIzqPV0TN1TuTS6nNGcwMMOPnsAGOqUBiarsGAz3ccmUPeHLPXuo8FDmNKc%2BaZ7HRpDlahNa5GJ%2Bq%2BseBb8v6jNgzPpkIiqRSjDzxM7%2BVoKRRO0KC%2BxwRZ%2Bw%2BVzzBvv%2FeZf4r%2BfHpCFj38OsSRLpKkX%2B85Uq3S0JyK3FnnPtaA2R%2B14opJwpBi5f09JWwcSNtcaNCU365IiuVX9UizDr50g6QqkGEYce389JvvXtjm6yGD7Wh8TJyH9R7JhL&X-Amz-Signature=a82be508f6a3a88ca237ceb60a7f7d6ed04120401975a6e3e1da129bc9917a34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
